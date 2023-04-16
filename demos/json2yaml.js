const jsonObject = {
    section1: {
      key1: 'value1',
      key2: {
        subkey1: 'value2',
        subkey2: 'value3\nwith multiple lines\nand even more lines'
      }
    },
    section2: {
      key3: 'value4'
    }
  };
  
  const yamlString = jsonToYaml(jsonObject);
  console.log(yamlString);

// section1:
//   key1: value1
//   key2:
//     subkey1: value2
//     subkey2: |- 
//       with multiple lines
//       and even more lines
// section2:
//   key3: value4
