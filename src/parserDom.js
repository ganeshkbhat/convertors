function extractTagsAndContent(text) {
    const regex = /(<([^>]+)>)/ig;
    let result = [];
    let match;
    let position = 0;
    while (match = regex.exec(text)) {
        let tag = match[1];
        let start = match.index;
        if (text.substring(position, start)) {
            result.push(text.substring(position, start).trim());
        }
        result.push(tag.trim());
        position = regex.lastIndex;
    }
    if (text.substring(position)) {
        result.push(text.substring(position).trim());
    }
    return result;
}

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

function commentNodes() {

}

function textNodes() {

}

function elementNodes() {

}

function createNodes(html) {
    var domArray = extractTagsAndContent(html);


    return domArray;
}


module.exports.DOMNodes = createNodes;
module.exports.createNodes = createNodes;
module.exports.commentNodes = commentNodes;
module.exports.textNodes = textNodes;
module.exports.elementNodes = elementNodes;
module.exports.extractTags = extractTagsAndContent;
module.exports.extractTagAttributes = extractTagAttributes;

