

/**
 * 
 * ELEMENT, COMMENT, AND TEXT NODE TYPES extractTagsAndContent CAN PARSE:
 * [ '<ElementNode/>', '<?ElementNode ATTTRIBUTE ATTr="val" ?>', '<ElementNode>', '</ElementNode>',  '<!-- COMMENT TEXT      -->', '<ElementNode ATRRIBUTE ATTRIBUTE="VALUE">', '</ElementNode>',  '<!ElementNode>', '<?ElementNode>',  'TEXT NODE etc' ]
 * 
 * STRING SAMPLE IS:
 * 'some text <ElementNode/> more text <?ElementNode ATTTRIBUTE ATTr="val" ?><ElementNode>some text</ElementNode><!-- COMMENT TEXT      --> <ElementNode ATRRIBUTE ATTRIBUTE="VALUE"></ElementNode> <!ElementNode> <?ElementNode> ';
 * 
 * RESULT IS AN ARRAY LIKE BELOW: 
 * [ 
 *      'some text', '<ElementNode/>', 'more text', '<?ElementNode ATTTRIBUTE ATTr="val" ?>', 
 *      '<ElementNode>', 'some text', '</ElementNode>', '<!-- COMMENT TEXT      -->', '', 
 *      '<ElementNode ATRRIBUTE ATTRIBUTE="VALUE">', '</ElementNode>', '', '<!ElementNode>', 
 *      '', '<?ElementNode>', '' 
 * ]
 * 
 * 
 * @param {*} htmlString
 * @return {*} 
 */

function extractTagsAndContent(htmlString) {
    const regex = /(<([^>]+)>)/ig;
    let result = [];
    let match;
    let position = 0;
    while (match = regex.exec(htmlString)) {
        let tag = match[1];
        let start = match.index;
        if (htmlString.substring(position, start)) {
            result.push(htmlString.substring(position, start).trim());
        }
        result.push(tag.trim());
        position = regex.lastIndex;
    }
    if (htmlString.substring(position)) {
        result.push(htmlString.substring(position).trim());
    }
    return result;
}


/**
 *
 *
 * @param {*} tag
 * @return {*} 
 */
function extractTagAttributes(tag) {
    const regex = /([\w-]+)=(?:"([^"]*)"|'([^']*)')/g;
    const matches = tag.matchAll(regex);
    const attributes = {};

    for (const match of matches) {
        const attributeName = match[1];
        const attributeValue = match[2] || match[3];
        attributes[attributeName] = attributeValue;
    }

    return attributes;
}


/**
 *
 *
 * @param {*} htmlString
 * @return {*} 
 */
function extractNodes(htmlString) {
    let match;
    const regex = /<(.*?)>|<!--(.*?)-->|<(?:!.*?)>/g;
    const matchedSections = [];

    while ((match = regex.exec(htmlString))) {
        if (match[1]) {
            matchedSections.push({
                type: "ElementNode",
                text: match[0],
                start: match.index,
                end: match.index + match[0].length
            });
        } else if (match[2]) {
            matchedSections.push({
                type: "CommentNode",
                text: match[0],
                start: match.index,
                end: match.index + match[0].length
            });
        } else if (match[0].startsWith("<!")) {
            matchedSections.push({
                type: "DeclarationNode",
                text: match[0],
                start: match.index,
                end: match.index + match[0].length
            });
        }
    }

    return matchedSections;
}


/**
 *
 *
 * @param {*} htmlString
 * @param {boolean} [indexes=true]
 * @param {string} [returns="array"]
 * @return {*} 
 */
function extractNodesWithIndexes(htmlString, indexes = true, returns = "array") {
    const nodes = [];
    let pos = 0;
    while (pos < htmlString.length) {
        const startPos = htmlString.indexOf('<', pos);
        if (startPos === -1) break;
        const endPos = htmlString.indexOf('>', startPos);
        if (endPos === -1) break;
        const text = htmlString.slice(pos, startPos);
        if (text.trim() !== '') {
            if (returns === "array") nodes.push(["TextNode", null, text, text, pos, startPos - 1]);
            else nodes.push({ type: "TextNode", selfClosing: null, content: text, text: text, startIndex: pos, endIndex: startPos - 1 });

        }
        const node = htmlString.slice(startPos, endPos + 1);
        if (node.startsWith('<!--')) {
            const endComment = htmlString.indexOf('-->', startPos);
            if (endComment !== -1) {
                if (returns === "array") nodes.push(["CommentNode", true, node, node.slice(4, node.length - 3), startPos, endComment + 2]);
                else nodes.push({ type: "CommentNode", selfClosing: true, content: node, text: node.slice(4, node.length - 3), startIndex: startPos, endIndex: endComment + 2 });
                pos = endComment + 3;
                continue;
            }
        } else if (node.startsWith('<!')) {
            const endDeclaration = htmlString.indexOf('>', startPos);
            if (endDeclaration !== -1) {
                if (returns === "array") nodes.push(["DeclarationNode", true, node, node.slice(2, node.length - 1), startPos, endDeclaration]);
                else nodes.push({ type: "DeclarationNode", selfClosing: true, content: node, text: node.slice(2, node.length - 1), startIndex: startPos, endIndex: endDeclaration });
                pos = endDeclaration + 1;
                continue;
            }
        } else if (node.startsWith('<?')) {
            const endDeclaration = htmlString.indexOf('>', startPos);
            if (endDeclaration !== -1) {
                if (returns === "array") nodes.push(["DeclarationNode", false, node, (node.indexOf("?>") === -1) ? node.slice(2, node.length - 1) : node.slice(2, node.length - 2), startPos, endDeclaration]);
                else nodes.push({ type: "DeclarationNode", selfClosing: false, content: node, text: (node.indexOf("?>") === -1) ? node.slice(2, node.length - 1) : node.slice(2, node.length - 2), startIndex: startPos, endIndex: endDeclaration });
                pos = endDeclaration + 1;
                continue;
            }
        } else if (node.startsWith('</')) {
            const endDeclaration = htmlString.indexOf('>', startPos);
            if (endDeclaration !== -1) {
                if (returns === "array") nodes.push(["ElementNode", false, node, node.slice(2, node.length - 1), startPos, endDeclaration]);
                else nodes.push({ type: "ElementNode", selfClosing: false, content: node, text: node.slice(2, node.length - 1), startIndex: startPos, endIndex: endDeclaration });
                pos = endDeclaration + 1;
                continue;
            }
        } else if (node.startsWith('<')) {
            const endDeclaration = htmlString.indexOf('>', startPos);
            if (endDeclaration !== -1) {
                if (returns === "array") nodes.push(["ElementNode", false, node, (node.indexOf("/>") === -1) ? node.slice(1, node.length - 1) : node.slice(1, node.length - 2), startPos, endDeclaration]);
                else nodes.push({ type: "ElementNode", selfClosing: false, content: node, text: (node.indexOf("/>") === -1) ? node.slice(1, node.length - 1) : node.slice(1, node.length - 2), startIndex: startPos, endIndex: endDeclaration });
                pos = endDeclaration + 1;
                continue;
            }
        }
        if (returns === "array") nodes.push([node, node, startPos, endPos]);
        else nodes.push({ node: node, text: node, startIndex: startPos, endIndex: endPos });

        pos = endPos + 1;
    }
    return nodes;
}


/**
 *
 *
 * @param {*} htmlString
 * @param {boolean} [indexes=true]
 * @param {string} [returns="array"]
 * @return {*} 
 */
function extractElementTags(htmlString, indexes = true, returns = "array") {
    let elementNodes = [];
    let commentNodes = [];
    let declarationNodes = [];
    let currentIndex = 0;
    while (currentIndex < htmlString.length) {
        const start = htmlString.indexOf("<", currentIndex);
        if (start === -1) {
            break;
        }
        const end = htmlString.indexOf(">", start) + 1;
        const nodeString = htmlString.slice(start, end);
        const item = (returns === "array") ? (!!indexes) ? [nodeString, start, end] : [nodeString] : (!!indexes) ? { nodeString, start, end } : { nodeString }
        if (nodeString.startsWith("<!--")) {
            // ignore comments
            commentNodes.push(item);
            currentIndex = end;
        } else if (nodeString.startsWith("</")) {
            // ignore closing tags
            elementNodes.push(item)
            currentIndex = end;
        } else if (nodeString.startsWith("<?") || nodeString.startsWith("<!")) {
            // ignore declaration xml or html doctype like tags
            declarationNodes.push(item);
            currentIndex = end;
        } else {
            elementNodes.push(item);
            currentIndex = end;
        }
    }
    return { elementNodes, commentNodes, declarationNodes };
}


/**
 *
 *
 * @param {string} [lang="js"] Options are js, html, css
 */
function commentNodes(str, lang = "js") {
    var result

    return result;
}

/**
 *
 *
 * @param {*} str
 * @return {*} 
 */
function textNodes(str) {
    var result

    return result;
}

/**
 *
 *
 * @param {*} str
 * @return {*} 
 */
function elementNodes(str) {
    var result

    return result;
}


/**
 *
 *
 * @param {*} htmlstr
 * @return {*} 
 */
function createNodes(htmlstr) {
    var result = extractTagsAndContent(htmlstr);


    return result;
}


module.exports.DOMNodes = createNodes;
module.exports.createNodes = createNodes;

module.exports.extractTagsAndContent = extractTagsAndContent;
module.exports.extractTagAttributes = extractTagAttributes;

module.exports.extractNodes = extractNodes;
module.exports.extractNodesWithIndexes = extractNodesWithIndexes;
module.exports.extractElementTags = extractElementTags;

module.exports.commentNodes = commentNodes;
module.exports.textNodes = textNodes;
module.exports.elementNodes = elementNodes;
module.exports.createNodes = createNodes;

