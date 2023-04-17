

/**
 *
 *
 * @param {*} jsonObject
 * @param {number} [indentLevel=0]
 * @return {*} 
 */
function jsonToYaml(jsonObject, indentLevel = 0) {
  // Define a variable to store the resulting YAML string
  let result = '';

  // Loop through each key-value pair in the object
  for (const key in jsonObject) {
    if (Object.hasOwnProperty.call(jsonObject, key)) {
      const value = jsonObject[key];

      // If the value is an object, recursively convert it to YAML
      if (typeof value === 'object' && value !== null) {
        result += `${'  '.repeat(indentLevel)}${key}:\n${jsonToYaml(value, indentLevel + 1)}`;
      } else {
        // Otherwise, add the key-value pair to the result
        let valueString = value;
        if (typeof value === 'string' && value.includes('\n')) {
          valueString = '|-\n' + value.split('\n').map(line => `${'  '.repeat(indentLevel + 1)}${line}`).join('\n');
        }
        result += `${'  '.repeat(indentLevel)}${key}: ${valueString}\n`;
      }
    }
  }

  // Return the resulting YAML string
  return result;
}

module.exports = jsonToYaml;
