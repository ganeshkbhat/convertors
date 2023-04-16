function xml2json(xmlString) {
  const xmlDoc = new DOMParser().parseFromString(xmlString, 'text/xml');
  const rootNode = xmlDoc.documentElement;
  const result = {};
  let lineNum = 0;
  parseNode(rootNode, result, lineNum);
  return result;
}

function parseNode(node, parent, lineNum) {
  if (node.nodeType === Node.ELEMENT_NODE) {
    const element = {};
    for (const attribute of node.attributes) {
      element[attribute.nodeName] = attribute.nodeValue;
    }
    if (node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) {
      const text = node.firstChild.textContent.trim();
      if (text) {
        element['#text'] = text;
      }
    }
    let childLineNum = lineNum + 1;
    for (const childNode of node.childNodes) {
      parseNode(childNode, element, childLineNum);
      if (childNode.nodeType !== Node.COMMENT_NODE) {
        childLineNum += 1;
      }
    }
    if (Object.keys(element).length > 0) {
      if (!parent[node.nodeName]) {
        parent[node.nodeName] = element;
      } else if (Array.isArray(parent[node.nodeName])) {
        parent[node.nodeName].push(element);
      } else {
        parent[node.nodeName] = [parent[node.nodeName], element];
      }
      if (node.nextSibling && node.nextSibling.nodeType === Node.COMMENT_NODE) {
        let commentLineNum = childLineNum + 1;
        let commentIndex = 1;
        let nextCommentNode = node.nextSibling;
        while (nextCommentNode && nextCommentNode.nodeType === Node.COMMENT_NODE) {
          const comment = nextCommentNode.nodeValue.trim();
          if (comment) {
            const commentName = `#comment-${commentIndex}`;
            parent[node.nodeName][commentName] = comment;
            commentIndex += 1;
            commentLineNum += 1;
          }
          nextCommentNode = nextCommentNode.nextSibling;
        }
        childLineNum = commentLineNum;
      }
    }
    lineNum = childLineNum;
  } else if (node.nodeType === Node.CDATA_SECTION_NODE) {
    const cdata = node.nodeValue.trim();
    if (cdata) {
      parent['#cdata'] = cdata;
    }
  } else if (node.nodeType === Node.COMMENT_NODE) {
    const comment = node.nodeValue.trim();
    if (comment) {
      const commentName = `#comment-${lineNum}`;
      parent[commentName] = comment;
    }
  } else if (node.nodeType === Node.TEXT_NODE) {
    const text = node.nodeValue.trim();
    if (text) {
      parent['#text'] = text;
    }
  }
}
