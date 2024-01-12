
/**
 *
 *
 * @param {*} yamlString
 * @return {*} 
 */
function yamlToJson(yamlString) {
  // Split the input string into lines
  const lines = yamlString.trim().split('\n');

  // Define variables for the output object and the current section
  let output = {};
  let currentSection = null;

  // Loop through each line
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Check if this is a section header
    if (line.startsWith('#')) {
      // Ignore comments
      continue;
    } else if (line.startsWith('---')) {
      // Ignore document headers
      continue;
    } else if (line.startsWith('[') && line.endsWith(']')) {
      // This is a section header, so set the current section
      currentSection = line.slice(1, -1);
      output[currentSection] = {};
    } else if (line.includes(':')) {
      // This is a key-value pair, so add it to the current section
      const [key, value] = line.split(':').map(s => s.trim());

      // Check for nested structure
      const keys = key.split('.');
      let currentObject = output[currentSection];

      for (let j = 0; j < keys.length - 1; j++) {
        const subKey = keys[j];
        if (!currentObject.hasOwnProperty(subKey)) {
          currentObject[subKey] = {};
        }
        currentObject = currentObject[subKey];
      }

      // Handle multiple lines for sub-values
      if (value.startsWith('|')) {
        currentObject[keys[keys.length - 1]] = value.slice(1).trim();
        while (i + 1 < lines.length && lines[i + 1].trim().startsWith('|')) {
          currentObject[keys[keys.length - 1]] += '\n' + lines[i + 1].slice(1).trim();
          i++;
        }
      } else {
        currentObject[keys[keys.length - 1]] = value;
      }
    }
  }

  // Convert the output object to JSON and return it
  return JSON.stringify(output);
}

module.exports.yamlToJson = yamlToJson;
