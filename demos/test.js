// if (!global?.DOMParser) {
//     const jsdom = require("jsdom");
//     const { JSDOM } = jsdom
//     global.DOMParser = new JSDOM().window.DOMParser
// }
// function xml2json(xmlString) {
//     const xmlDoc = new DOMParser().parseFromString(xmlString, 'text/xml');
//     const rootNode = xmlDoc.documentElement;
//     const result = {};
//     parseNode(rootNode, result);
//     return result;
// }

// function parseNode(node, parent) {
//     if (node.nodeType === Node.ELEMENT_NODE) {
//         const element = {};
//         for (const attribute of node.attributes) {
//             element[attribute.nodeName] = attribute.nodeValue;
//         }
//         if (node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) {
//             const text = node.firstChild.textContent.trim();
//             if (text) {
//                 element['#text'] = text;
//             }
//         }
//         for (const childNode of node.childNodes) {
//             if (childNode.nodeType === Node.ELEMENT_NODE) {
//                 if (!element[childNode.nodeName]) {
//                     element[childNode.nodeName] = parseNode(childNode, {});
//                 } else if (Array.isArray(element[childNode.nodeName])) {
//                     element[childNode.nodeName].push(parseNode(childNode, {}));
//                 } else {
//                     const tmp = element[childNode.nodeName];
//                     element[childNode.nodeName] = [tmp, parseNode(childNode, {})];
//                 }
//             } else if (childNode.nodeType === Node.CDATA_SECTION_NODE) {
//                 const cdata = childNode.nodeValue.trim();
//                 if (cdata) {
//                     element['#cdata'] = cdata;
//                 }
//             } else if (childNode.nodeType === Node.COMMENT_NODE) {
//                 const comment = childNode.nodeValue.trim();
//                 if (comment) {
//                     let commentName = 'comment_' + childNode.parentNode.nodeName.toLowerCase();
//                     if (parent) {
//                         commentName += '_' + parent.nodeName.toLowerCase();
//                     }
//                     if (!parent[commentName]) {
//                         parent[commentName] = [];
//                     }
//                     parent[commentName].push(comment);
//                 }
//             } else if (childNode.nodeType === Node.TEXT_NODE) {
//                 const text = childNode.nodeValue.trim();
//                 if (text) {
//                     element['#text'] = text;
//                 }
//             }
//         }
//         if (Object.keys(element).length > 0) {
//             if (!parent[node.nodeName]) {
//                 parent[node.nodeName] = element;
//             } else if (Array.isArray(parent[node.nodeName])) {
//                 parent[node.nodeName].push(element);
//             } else {
//                 parent[node.nodeName] = [parent[node.nodeName], element];
//             }
//         }
//     }
//     return parent;
// }

const xml2js = require('xml2js');

const xmlString = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
  <root>
    <!-- This is a comment on line 3 -->
    <level1 attr1="value1">
      <![CDATA[ This is some CDATA on line 5 ]]>
      <level2>
        <!-- This is another comment on line 7 -->
        <level3>
          <level4 attr2="value2">
            <level5>
              <!-- This is yet another comment on line 10 -->
              <data>Hello, world!</data>
            </level5>
          </level4>
  <level4 attr2="value2">
            <level5>
              <!-- This is yet another comment on line 10 -->
              <data>Hello, world!</data>
            </level5>
          </level4>
        </level3>
      </level2>
    </level1>
  </root>`;

// const result = xml2json(xmlString);
const result = xml2js(xmlString);
console.log(result);
