

var yamlToJson = require("../index").parseYaml2Json.yamlToJson;


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

const jsonString = yamlToJson(yamlString);
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


yamlString = `
person:
  name: John
  age: 30
car:
  make: Tesla
  model: Model S
`;

jsonString = yamlToJson(yamlString);
console.log(jsonString);

yamlString = `
      person:
        name: John
        bio: |
          John is a software engineer
          with 5 years of experience.
    `

jsonString = yamlToJson(yamlString);
console.log(jsonString);

yamlString =  `
    person:
      name: John
      age: 30
      address:
        street: 123 Main St.
        city: New York
        state: NY
  `

jsonString = yamlToJson(yamlString);
console.log(jsonString);

yamlString = `
  person:
    name: John
    age: 30
    city: New York
`

jsonString = yamlToJson(yamlString);
console.log(jsonString);

yamlString = `
      name: John
      age: 30
      city: New York
    `

jsonString = yamlToJson(yamlString);
console.log(jsonString);
