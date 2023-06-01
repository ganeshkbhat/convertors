


function comment(str) {
    // /(?<=<!--).*?(?=-->)/
    // ` TEXT <!-- TEXT COMMENT HERE --> TEXT `
    const regex = /(?<=<!--).*?(?=-->)/;
    const matches = str.match(regex);

    if (matches) {
        return matches[0].trim();
    } else {
        return '';
    }
}


// const str = 'This is some text <!-- with a comment --> and more text.';
// const commentText =   CommentText(str);
// console.log(commentText); // prints "with a comment"


function tagSelfClosing(str) {
    // /^(.*?)<(\w+)\s*\/>(.*?)$/
    // ` TEXT <TAGNAME/> TEXT`
    const regex = /^(.*?)<(\w+)\s*\/>(.*?)$/;
    const matches = regex.exec(str);

    if (matches) {
        const beforeTag = matches[1].trim();
        const tagName = matches[2];
        const afterTag = matches[3].trim();
        return {
            beforeTag: beforeTag,
            tagName: tagName,
            afterTag: afterTag
        };
    } else {
        return null;
    }
}


// const str = 'TEXT <TAGNAME/> TEXT';
// const tagInfo =   TagText(str);
// if (tagInfo) {
//   console.log(`Text before tag: ${tagInfo.beforeTag}`);
//   console.log(`Tag name: ${tagInfo.tagName}`);
//   console.log(`Text after tag: ${tagInfo.afterTag}`);
// } else {
//   console.log('No self-closing tag found.');
// }


function tagClosing(str) {
    // /^(.*?)<(\w+)[^>]*>(.*?)<\/\2>(.*?)$/
    // ` TEXT <TAGNAME> TEXT </TAGNAME> TEXT`
    const regex = /^(.*?)<(\w+)[^>]*>(.*?)<\/\2>(.*?)$/;
    const matches = regex.exec(str);

    if (matches) {
        const beforeTag = matches[1].trim();
        const tagName = matches[2];
        const tagContent = matches[3].trim();
        const afterTag = matches[4].trim();
        return {
            beforeTag: beforeTag,
            tagName: tagName,
            tagContent: tagContent,
            afterTag: afterTag
        };
    } else {
        return null;
    }
}


// const str = 'TEXT <TAGNAME>TEXT INSIDE TAGS</TAGNAME> TEXT';
// const tagInfo =   TagContent(str);

// if (tagInfo) {
//   console.log(`Text before tag: ${tagInfo.beforeTag}`);
//   console.log(`Tag name: ${tagInfo.tagName}`);
//   console.log(`Tag content: ${tagInfo.tagContent}`);
//   console.log(`Text after tag: ${tagInfo.afterTag}`);
// } else {
//   console.log('No matching tag found.');
// }


function tagXMLClosing(str) {
    // /^(.*?)<\?(\w+)[^>]*>(.*?)<\/\2>(.*?)$/
    // const str = 'TEXT <?TAGNAME>TEXT INSIDE TAGS</TAGNAME> TEXT';
    const regex = /^(.*?)<\?(\w+)[^>]*>(.*?)<\/\2>(.*?)$/;
    const matches = regex.exec(str);

    if (matches) {
        const beforeTag = matches[1].trim();
        const tagName = matches[2];
        const insideTag = matches[3].trim();
        const afterTag = matches[4].trim();
        console.log(`Text before tag: ${beforeTag}`);
        console.log(`Tag name: ${tagName}`);
        console.log(`Text inside tag: ${insideTag}`);
        console.log(`Text after tag: ${afterTag}`);
    }
}



function tagXMLSelfClosing(str) {
    // /^(.*?)<\?(\w+)\s+((?:\w+\s*=\s*(?:"[^"]*"|'[^']*'))*)\s*\?>(.*?)$/
    // ` TEXT <?TAGNAME ATR="val" attrs = "value" ?>TEXT`
    // const str = 'TEXT <?TAGNAME ATR="val" attrs="value" ?>TEXT';
    const regex = /^(.*?)<\?(\w+)\s+((?:\w+\s*=\s*(?:"[^"]*"|'[^']*'))*)\s*\?>(.*?)$/;
    const matches = regex.exec(str);

    if (matches) {
        const beforeTag = matches[1].trim();
        const tagName = matches[2];
        const attributePairs = matches[3].trim();
        const insideTag = matches[4].trim();
        console.log(`Text before tag: ${beforeTag}`);
        console.log(`Tag name: ${tagName}`);
        console.log(`Attribute pairs: ${attributePairs}`);
        console.log(`Text inside tag: ${insideTag}`);
    }

}



function tagClosingTwo(str) {
    // ` TEXT <TAGNAME attr="val" ATTRS="valu"> TEXT </TAGNAME> TEXT`
    // /^(.*?)<(\w+)(?:\s+[a-zA-Z]+\s*=\s*"(?:\\"|[^"])*"|\s+[a-zA-Z]+\s*=\s*'(?:\\'|[^'])*')*\s*>(.*?)<\/\2>(.*?)$/

    const regex = /^(.*?)<(\w+)(?:\s+[a-zA-Z]+\s*=\s*"(?:\\"|[^"])*"|\s+[a-zA-Z]+\s*=\s*'(?:\\'|[^'])*')*\s*>(.*?)<\/\2>(.*?)$/;
    const matches = regex.exec(str);

    if (matches) {
        const beforeTag = matches[1].trim();
        const tagName = matches[2];
        const attributePairs = matches[0].match(/\s+[a-zA-Z]+\s*=\s*"(?:\\"|[^"])*"|\s+[a-zA-Z]+\s*=\s*'(?:\\'|[^'])*'/g);
        const insideTag = matches[3].trim();
        const afterTag = matches[4].trim();
        return {
            beforeTag,
            tagName,
            attributePairs,
            insideTag,
            afterTag,
        };
    }

    return null;
}


// const str = 'TEXT <TAGNAME attr="val" ATTRS="valu"> TEXT </TAGNAME> TEXT';
// const tag = parseTag(str);
// if (tag) {
//   console.log(`Text before tag: ${tag.beforeTag}`);
//   console.log(`Tag name: ${tag.tagName}`);
//   console.log(`Attribute pairs: ${tag.attributePairs}`);
//   console.log(`Text inside tag: ${tag.insideTag}`);
//   console.log(`Text after tag: ${tag.afterTag}`);
// } else {
//   console.log('No tag found.');
// }


function tagXMLSelfClosing(str) {
    // ` TEXT <?TAGNAME attr="val" ATTRS="valu"> TEXT `
    // /^([^<]*)<\?(\w+)(?:\s+[a-zA-Z]+\s*=\s*"(?:\\"|[^"])*"|\s+[a-zA-Z]+\s*=\s*'(?:\\'|[^'])*')*\s*>(.*?)$/

    const regex = /^([^<]*)<\?(\w+)(?:\s+[a-zA-Z]+\s*=\s*"(?:\\"|[^"])*"|\s+[a-zA-Z]+\s*=\s*'(?:\\'|[^'])*')*\s*>(.*?)$/;
    const matches = regex.exec(str);

    if (matches) {
        const beforeTag = matches[1].trim();
        const tagName = matches[2];
        const attributePairs = matches[0].match(/\s+[a-zA-Z]+\s*=\s*"(?:\\"|[^"])*"|\s+[a-zA-Z]+\s*=\s*'(?:\\'|[^'])*'/g);
        const insideTag = matches[3].trim();
        return {
            beforeTag,
            tagName,
            attributePairs,
            insideTag
        };
    } else {
        return null;
    }
}


//   const str = 'TEXT <?TAGNAME attr="val" ATTRS="valu"> TEXT';
// const result = parseProcessingInstruction(str);

// if (result) {
//   console.log(`Text before tag: ${result.beforeTag}`);
//   console.log(`Tag name: ${result.tagName}`);
//   console.log(`Attribute pairs: ${result.attributePairs}`);
//   console.log(`Text inside tag: ${result.insideTag}`);
// } else {
//   console.log('No processing instruction found.');
// }


function tagHTMLClosing(str) {
    // ` TEXT <!TAGNAME attr="val" ATTRS="valu" atrs atAT> TEXT `
    // /^([^<]*)<!\s*(\w+)(?:\s+[a-zA-Z]+\s*(?:=\s*"(?:\\"|[^"])*"|=\s*'(?:\\'|[^'])*'))*\s*>(.*?)$/

    const regex = /^([^<]*)<!\s*(\w+)(?:\s+[a-zA-Z]+\s*(?:=\s*"(?:\\"|[^"])*"|=\s*'(?:\\'|[^'])*'))*\s*>(.*?)$/;
    const matches = regex.exec(str);

    if (matches) {
        const beforeTag = matches[1].trim();
        const tagName = matches[2];
        const attributePairs = matches[0].match(/\s+[a-zA-Z]+\s*(?:=\s*"(?:\\"|[^"])*"|=\s*'(?:\\'|[^'])*')/g);
        const insideTag = matches[3].trim();
        return {
            beforeTag,
            tagName,
            attributePairs,
            insideTag
        };
    } else {
        return null;
    }
}


//   const str = 'TEXT <!TAGNAME attr="val" ATTRS="valu" atrs atAT> TEXT';
// const tag = parseExclamationTag(str);

// if (tag) {
//   console.log(`Text before tag: ${tag.beforeTag}`);
//   console.log(`Tag name: ${tag.tagName}`);
//   console.log(`Attribute pairs: ${tag.attributePairs}`);
//   console.log(`Text inside tag: ${tag.insideTag}`);
// } else {
//   console.log('No tag found.');
// }


function tagWithAttributesClosing(str) {
    // ` TEXT <TAGNAME attr="val" ATTRS="valu" atrs atAT>TEXT HERE </TAGNAME> TEXT `
    // /^([^<]*)<(\w+)((?:\s+[a-zA-Z]+\s*(?:(?<=\\)"|[^">])*)*)>(.*?)<\/\2>([^<]*)$/s

    const regex = /^([^<]*)<(\w+)((?:\s+[a-zA-Z]+\s*(?:(?<=\\)"|[^">])*)*)>(.*?)<\/\2>([^<]*)$/s;
    const matches = regex.exec(str);

    if (!matches) {
        return null;
    }

    const beforeTag = matches[1].trim();
    const tagName = matches[2];
    const attributePairs = matches[3].match(/\b[a-zA-Z]+\s*=(?:(?<=\\)"|[^">])*/g) || [];
    const insideTag = matches[4].trim();
    const afterTag = matches[5].trim();

    return {
        beforeTag,
        tagName,
        attributes: attributePairs.reduce((attrs, pair) => {
            const [name, value] = pair.split('=');
            attrs[name.trim()] = value.trim().replace(/\\(["'])/g, '$1'); // Unescape quotes
            return attrs;
        }, {}),
        insideTag,
        afterTag
    };
}


// const tagStr = 'TEXT <TAGNAME attr="val" ATTRS="valu" atrs atAT>TEXT HERE </TAGNAME> TEXT';
// const tagData = parseTag(tagStr);

// console.log(tagData);


function tagXMLWithAttributesClosing(str) {
    // ` TEXT <?TAGNAME attr="val" ATTRS="valu" atrs atAT ?> TEXT `
    // /^([^<]*)<\?(\w+)((?:\s+[a-zA-Z]+\s*=\s*(?:(?<=\\)"|[^">])*)*)\s*\?>\s*([^<]*)$/s

    const regex = /^([^<]*)<\?(\w+)((?:\s+[a-zA-Z]+\s*=\s*(?:(?<=\\)"|[^">])*)*)\s*\?>\s*([^<]*)$/s;
    const matches = regex.exec(str);

    if (matches) {
        const beforeTag = matches[1].trim();
        const tagName = matches[2];
        const attributePairs = matches[3].match(/\b[a-zA-Z]+\s*=(?:(?<=\\)"|[^">])*/g) || [];
        const afterTag = matches[4].trim();

        const attributes = attributePairs.reduce((attrs, pair) => {
            const [name, value] = pair.split('=');
            attrs[name.trim()] = value.trim().replace(/\\(["'])/g, '$1'); // Unescape quotes
            return attrs;
        }, {});

        return { beforeTag, tagName, attributes, afterTag };
    }

    return null;
}


// const str = 'TEXT <?TAGNAME attr="val" ATTRS="valu" atrs atAT ?> TEXT';
// const tag = parseTagWithAttrs(str);
// console.log(tag);


function  tagWithAttributesSelfClosing(str) {
    // ` TEXT <TAGNAME attr="val" ATTRS="valu" atrs atAT /> TEXT `
    // /^([^<]*)<(\w+)((?:\s+[a-zA-Z]+\s*=\s*(?:(?<=\\)"|[^">])*)*)\s*\/>\s*([^<]*)$/s

    const regex = /^([^<]*)<(\w+)((?:\s+[a-zA-Z]+\s*=\s*(?:(?<=\\)"|[^">])*)*)\s*\/>\s*([^<]*)$/s;
    const matches = regex.exec(str);
  
    if (!matches) {
      return null;
    }
  
    const beforeTag = matches[1].trim();
    const tagName = matches[2];
    const attributePairs = matches[3].match(/\b[a-zA-Z]+\s*=(?:(?<=\\)"|[^">])*/g) || [];
    const afterTag = matches[4].trim();
  
    const attributes = attributePairs.reduce((attrs, pair) => {
      const [name, value] = pair.split('=');
      attrs[name.trim()] = value.trim().replace(/\\(["'])/g, '$1'); // Unescape quotes
      return attrs;
    }, {});
  
    return { beforeTag, tagName, attributes, afterTag };
  }
  

// const str = 'TEXT <TAGNAME attr="val" ATTRS="valu" atrs atAT /> TEXT';
// const result = parseSelfClosingTag(str);
// console.log(result);

