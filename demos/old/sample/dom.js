
var extractTagsAndContent = require("../convertors/src/dom");

let input = "Test new here<tag> Some more text here</tag> Some othr here";
let result = extractTagsAndContent(input);
console.log(input, JSON.stringify(result));
// Output: ["Test new here", "tag", " Some more text here", " Some othr here"]

// input = "Test new here<tag> Some more text here</tag>";
// result = extractTagsAndContent(input);
// console.log(input, JSON.stringify(result));
// // Output: [ 'Test new here', 'tag', ' Some more text here', '' ]

// input = "<tag> Some more text here</tag> Some othr here";
// result = extractTagsAndContent(input);
// console.log(input, JSON.stringify(result));
// // Output: ["", "tag", " Some more text here", " Some othr here"]

// input = "<tag> Some more text here</tag>";
// result = extractTagsAndContent(input);
// console.log(input, JSON.stringify(result));
// // Output: ["", "tag", " Some more text here", ""]

// input = "Test new here<tag></tag> Some othr here";
// result = extractTagsAndContent(input);
// console.log(input, JSON.stringify(result));
// // Output: [ 'Test new here', 'tag', '', '', ' Some othr here' ]

// input = "Test new here<tag attr='val' attrs='vals'></tag> Some othr here";
// result = extractTagsAndContent(input);
// console.log(input, JSON.stringify(result));
// // Output: [ 'Test new here', 'tag', "attrs='vals'", '', ' Some othr here' ]

// input = "Test new here<tag attrs='atsval'></tag> Some othr here";
// result = extractTagsAndContent(input);
// console.log(input, JSON.stringify(result));
// // Output: [ 'Test new here', 'tag', "attrs='atsval'", '', ' Some othr here' ]

// input = "Test new here<tag attrs='atsval'></tag>";
// result = extractTagsAndContent(input);
// console.log(input, JSON.stringify(result));
// // Output: [ 'Test new here', 'tag', "attrs='atsval'", '', '' ]

// input = "<tag attrs='atsval'></tag> Some othr here";
// result = extractTagsAndContent(input);
// console.log(input, JSON.stringify(result));
// // Output: [ '', 'tag', "attrs='atsval'", '', ' Some othr here' ]

// input = "Test new here<tag></tag> Some othr here";
// result = extractTagsAndContent(input);
// console.log(input, JSON.stringify(result));
// // Output: [ 'Test new here', 'tag', '', '', ' Some othr here' ]

// input = "Test new here<tag> Some more text here</tag> Some othr here";
// result = extractTagsAndContent(input);
// console.log(input, JSON.stringify(result));
// // Output: [ 'Test new here', 'tag', '', ' Some more text here', ' Some othr here' ]

// input = "Test new here<tag attrs='val'> Some more text here</tag> Some othr here";
// result = extractTagsAndContent(input);
// console.log(input, JSON.stringify(result));
// // Output: [ 'Test new here', 'tag', 'attrs='val', ' Some more text here', ' Some othr here' ]

// input = "Test new here<tag attrs='atsval'> Some more text here</tag> Some othr here";
// result = extractTagsAndContent(input);
// console.log(input, JSON.stringify(result));
// // Output: [ 'Test new here', 'tag', "attrs='atsval'", ' Some more text here', ' Some othr here' ]

// input = "<tag attrs='atsval'> Some more text here</tag>";
// result = extractTagsAndContent(input);
// console.log(input, JSON.stringify(result));
// // Output: [ '', 'tag', "attrs='atsval'", ' Some more text here', '' ]

// input = "<tag attrs='atsval'></tag>";
// result = extractTagsAndContent(input);
// console.log(input, JSON.stringify(result));
// // Output: [ '', 'tag', "attrs='atsval'", '', '' ]

// input = "<tag></tag>";
// result = extractTagsAndContent(input);
// console.log(input, JSON.stringify(result));
// // Output: [ '', 'tag', '', '', '' ]

// input = "<tag><tags>Test</tags></tag>";
// result = extractTagsAndContent(input);
// console.log(input, JSON.stringify(result));
// // Output: [ '', 'tag', '', '<tags>Test</tags>', '' ]

// input = "<tag attrs='atsval'  attrs='atsval'><tags>Test</tags></tag>";
// result = extractTagsAndContent(input);
// console.log(input, JSON.stringify(result));
// // Output: [ '', 'tag', "attrs='atsval'", '<tags>Test</tags>', '' ]

// input = '<inner attribute="val" attributes="vals">Inner text</inner>';
// result = extractTagsAndContent(input);
// console.log(input, JSON.stringify(result));

// input = '<inner attribute="val" attributes="vals"><inner attributes="vals">Inner text</inner></inner>';
// result = extractTagsAndContent(input);
// console.log(input, JSON.stringify(result));

// input = "Test new here<tag> Some more text here</tag> Some othr here";
// result = extractTagsAndContent(input);
// console.log(input, JSON.stringify(result));

// input = "<tag> Some more text here</tag> Some othr here";
// result = extractTagsAndContent(input);
// console.log(input, JSON.stringify(result));

// input = "Test new here<tag> Some more text here</tag>";
// result = extractTagsAndContent(input);
// console.log(input, JSON.stringify(result));

// input = "<tag> Some more text here</tag>";
// result = extractTagsAndContent(input);
// console.log(input, JSON.stringify(result));

// input = '<inner attribute="val" attributes="vals">Inner text</inner>';
// result = extractTagsAndContent(input);
// console.log(input, JSON.stringify(result));

// input = '<inner attribute="val" attributes="vals"><inner attributes="vals">Inner text</inner></inner>';
// result = extractTagsAndContent(input);
// console.log(input, JSON.stringify(result));

// input = "Test new here<tag> Some more text here</tag> Some othr here";
// result = extractTagsAndContent(input);
// console.log(input, JSON.stringify(result));

// input = "<tag> Some more text here</tag> Some othr here";
// result = extractTagsAndContent(input);
// console.log(input, JSON.stringify(result));

// input = "Test new here<tag> Some more text here</tag>";
// result = extractTagsAndContent(input);
// console.log(input, JSON.stringify(result));

// input = "<tag attrs='ts' atr='vs'> Some more text here</tag>";
// result = extractTagsAndContent(input);
// console.log(input, JSON.stringify(result));

// input = "<tag attrs='ts' atr='vs'> Some more text here</tag><tag attrs='ts' atr='vs'> Some more text here</tag>";
// result = extractTagsAndContent(input);
// console.log(input, JSON.stringify(result));

// input = "<tag attrs='ts' atr='vs'> Some more text here</tag><tag attrs='ts'> Some more text here</tag>";
// result = extractTagsAndContent(input);
// console.log(input, JSON.stringify(result));

// input = "<tag attrs='ts' atr='vs'> Some more text here</tag><tag> Some more text here</tag> Some third text here";
// result = extractTagsAndContent(input);
// console.log(input, JSON.stringify(result));

input = 'some text <ElementNode/> more text <ElementNode>some text</ElementNode><!-- COMMENT TEXT      --> <ElementNode ATRRIBUTE ATTRIBUTE="VALUE"></ElementNode> <!ElementNode> <?ElementNode> ';
result = extractTagsAndContent(input);
console.log(input, extractTagsAndContent(input));


input = `<html>
<head>
<title>My Website</title>
</head>
<body>
<div attribute="value">
<p attributetwo="value">This is a paragraph</p>
<ul>
<li>Item 1</li>
<li>Item 2</li>
<!-- This is a comment -->
<li>Item 3</li>
<li>Item 4</li>
</ul>
<comment>This is a comment</comment>
</div>
</body>
</html>`;

result = extractTagsAndContent(input);
console.log(input, extractTagsAndContent(input));
