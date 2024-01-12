

var yamlToIni = require("../../../../index").parseYaml2Ini.yamlToIni;


const yamlString = `
# Example YAML file
section1:
  key1: value1
  key2:
    subkey1: |
      This is a
      multi-line value
    subkey2: value2

section2:
  key3: value3
`;

const jsonString = yamlToIni(yamlString);
console.log(jsonString);

// {
//     "section1": {
//       "key1": "value1",
//       "key2": {
//         "subkey1": "This is a\nmulti-line value",
//         "subkey2": "value2"
//       }
//     },
//     "section2": {
//       "key3": "value3"
//     }
//   }
  