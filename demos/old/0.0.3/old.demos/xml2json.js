var xmlString = `
<?xml version="1.0" encoding="UTF-8"?>
<catalog>
  <!-- This is a catalog of books -->
  <book id="bk101">
    <author>Gambardella, Matthew</author>
    <title>XML Developer's Guide</title>
    <genre>Computer</genre>
    <price>44.95</price>
    <publish_date>2000-10-01</publish_date>
    <description>An in-depth look at creating applications 
      with XML.</description>
  </book>
  <!-- This is a comment in the catalog -->
  <book id="bk102">
    <author>Ralls, Kim</author>
    <title>Midnight Rain</title>
    <genre>Fantasy</genre>
    <price>5.95</price>
    <publish_date>2000-12-16</publish_date>
    <description>A former architect battles corporate zombies, 
      an evil sorceress, and her own childhood to become queen 
      of the world.</description>
    <!-- This is a comment in the book -->
  </book>
</catalog>
`;

console.log(xml2json(xmlString));


// {
//     "?xml": {
//       "@version": "1.0",
//       "@encoding": "UTF-8"
//     },
//     "catalog": {
//       "#comment-1": " This is a catalog of books ",
//       "book": [
//         {
//           "@id": "bk101",
//           "author": "Gambardella, Matthew",
//           "title": "XML Developer's Guide",
//           "genre": "Computer",
//           "price": "44.95",
//           "publish_date": "2000-10-01",
//           "description": "An in-depth look at creating applications \n      with XML."
//         },
//         {
//           "#comment-2": " This is a comment in the book ",
//           "@id": "bk102",
//           "author": "Ralls, Kim",
//           "title": "Midnight Rain",
//           "genre": "Fantasy",
//           "price": "5.95",
//           "publish_date": "2000-12-16",
//           "description": "A former architect battles corporate zombies, \n      an evil sorceress, and her own childhood to become queen \n      of the world."
//         }
//       ],
//       "#comment-3": " This is a comment in the catalog "
//     }
//   }


xmlString = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<root>
  <!-- Comment 1 -->
  <element1 attr1="value1">
    <![CDATA[This is some CDATA]]>
  </element1>
  <?processing-instruction?>
  <element2>
    <!-- Comment 2 -->
    <subelement1>Text 1</subelement1>
    <subelement2>Text 2</subelement2>
    <!-- Comment 3 -->
  </element2>
</root>`;

result = xml2json(xmlString);
console.log(result);


// {
//     "#processing-instruction": "processing-instruction",
//     "#comment1": "Comment 1",
//     "root": {
//       "@version": "1.0",
//       "@encoding": "UTF-8",
//       "@standalone": "no",
//       "element1": {
//         "@attr1": "value1",
//         "#cdata": "This is some CDATA"
//       },
//       "element2": {
//         "subelement1": {
//           "#text": "Text 1"
//         },
//         "subelement2": {
//           "#text": "Text 2"
//         },
//         "#comment2": "Comment 2",
//         "#comment3": "Comment 3"
//       }
//     }
//   }

xmlString = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<root>
  <!-- This is a comment -->
  <level1>
    <![CDATA[This is some CDATA]]>
    <level2>
      <element attribute="value">Some text</element>
      <level3>
        <!-- This is another comment -->
        <subelement>Some more text</subelement>
        <level4>
          <subsubelement>Even more text</subsubelement>
          <!-- This is yet another comment -->
        </level4>
      </level3>
    </level2>
  </level1>
  <?processing instruction?>
</root>`;

jsonObj = xml2json(xmlString);
console.log(jsonObj);

// {
//     "#encoding": "UTF-8",
//     "#standalone": "no",
//     "root": {
//       "#comment1": "This is a comment",
//       "level1": {
//         "#cdata": "This is some CDATA",
//         "level2": {
//           "element": {
//             "@attribute": "value",
//             "#text": "Some text"
//           },
//           "level3": {
//             "#comment1": "This is another comment",
//             "subelement": {
//               "#text": "Some more text"
//             },
//             "level4": {
//               "subsubelement": {
//                 "#text": "Even more text"
//               },
//               "#comment1": "This is yet another comment"
//             }
//           }
//         }
//       },
//       "?processing instruction": ""
//     }
//   }
  
xmlString = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<root>
  <level1>
    <level2>
      <name>John Doe</name>
      <age>25</age>
      <comment>Personal information</comment>
      <![CDATA[This is some CDATA text]]>
      <level3>
        <address>
          <street>123 Main St</street>
          <city>Anytown</city>
          <state>CA</state>
        </address>
        <comment>This is some nested data</comment>
      </level3>
      <level3>
        <address>
          <street>456 Elm St</street>
          <city>Another town</city>
          <state>TX</state>
        </address>
        <comment>This is some more nested data</comment>
      </level3>
      <comment>End of level2</comment>
    </level2>
  </level1>
  <comment>End of root</comment>
</root>`;

const json = xml2json(xmlString);
console.log(json);

// {
//     "root": {
//       "#comment1": "End of root",
//       "level1": {
//         "level2": {
//           "name": "John Doe",
//           "age": "25",
//           "comment1": "Personal information",
//           "#cdata": "This is some CDATA text",
//           "level3": [
//             {
//               "address": {
//                 "street": "123 Main St",
//                 "city": "Anytown",
//                 "state": "CA"
//               },
//               "comment1": "This is some nested data"
//             },
//             {
//               "address": {
//                 "street": "456 Elm St",
//                 "city": "Another town",
//                 "state": "TX"
//               },
//               "comment1": "This is some more nested data"
//             }
//           ],
//           "comment2": "End of level2"
//         }
//       }
//     }
//   }
  