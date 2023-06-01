

/**
 *
 *
 * @param {*} iniString
 * @return {*} 
 */
function iniToJson(iniString) {
  const result = {};
  let currentSection = result;
  const sectionStack = [];

  iniString.split(/\r?\n/).forEach((line) => {
    // Remove comments from the line
    const lineWithoutComment = line.replace(/#.*/, '').trim();
    if (!lineWithoutComment) {
      // empty or comment line, skip to next line
      return;
    }
    const matchSection = lineWithoutComment.match(/^\s*\[\s*([^\]]*)\s*\]\s*$/);
    if (matchSection) {
      const sectionName = matchSection[1];
      const sectionParts = sectionName.split('.');
      currentSection = result;
      sectionParts.forEach((part, index) => {
        if (!currentSection[part]) {
          currentSection[part] = {};
        }
        if (index === sectionParts.length - 1) {
          currentSection = currentSection[part];
        } else {
          sectionStack.push(currentSection);
          currentSection = currentSection[part];
        }
      });
      return;
    }
    const matchProperty = lineWithoutComment.match(/^\s*([\w.-]+)\s*=\s*(.*)$/);
    if (matchProperty) {
      let value = matchProperty[2];
      if (value.includes('\n')) {
        // multi-line value, parse each line and join with \n
        value = value.split('\n').map((line) => line.trim()).join('\n');
      }
      // check if the value is a nested object
      if (value.match(/^\{.*\}$/)) {
        value = JSON.parse(value);
      }
      currentSection[matchProperty[1]] = value;
    } else if (lineWithoutComment.trim() === '') {
      // empty line, pop the current section off the stack
      currentSection = sectionStack.pop() || result;
    }
  });

  return result;
}

module.exports.iniToJson = iniToJson;
