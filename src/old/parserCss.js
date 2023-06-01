

/**
 *
 * parseCss
 *
 * @param {*} cssstring the css single or multiline string
 * @param {string} [returns="object"] can return an array or object
 * 
 * [ 
 *    ["*", "color: #ccc"] , [ "html", "color: #ccc" ] , [ ".cssclass", "color: #ccc; \n font-weight: bold" ] , 
 *    [ "#elementid", "color: #ccc; \n font-weight: bold" ] , [ "#elementid .cssclass", "color: #ccc; \n font-weight: bold" ] , 
 *    [ "#elementid, htmltag", "color: #ccc; \n font-weight: bold" ], [ "#elementid > htmltag", "color: #ccc; \n font-weight: bold" ] 
 * ]
 * 
 * [ 
 *    {"*", "color: #ccc"} , { "html", "color: #ccc" } , { ".cssclass", "color: #ccc; \n font-weight: bold" } , 
 *    { "#elementid", "color: #ccc; \n font-weight: bold" } , { "#elementid .cssclass", "color: #ccc; \n font-weight: bold" } , 
 *    { "#elementid, htmltag", "color: #ccc; \n font-weight: bold" }, { "#elementid > htmltag", "color: #ccc; \n font-weight: bold" }
 * ] 
 * 
 */
function parseCss(input, returns = "object") {
  const result = [];
  let currentTag = '';
  let currentContent = '';
  let depth = 0;

  for (let i = 0; i < input.length; i++) {
    const char = input.charAt(i);

    if (char === '{') {
      if (depth === 0) {
        result.push([currentTag.trim()]);
        currentTag = '';
      } else {
        currentContent += char;
      }
      depth++;
    } else if (char === '}') {
      depth--;
      if (depth === 0) {
        result[result.length - 1][1] = parseCss(currentContent);
        (returns === "object") ? result[result.length - 1] = { [result[result.length - 1][0]]: result[result.length - 1][1] } : null;
        currentContent = '';
      } else {
        currentContent += char;
      }
    } else {
      if (depth === 0) {
        currentTag += char;
      } else {
        currentContent += char;
      }
    }
  }

  if (currentTag.trim() !== '') {
    result.push(currentTag.trim());
  }

  if (currentContent !== '') {
    result[result.length - 1][1] = parseCss(currentContent);
    (returns === "object") ? result[result.length - 1] = { [result[result.length - 1][0]]: result[result.length - 1][1] } : null;
  }

  return result;
}


/**
 *
 *
 * @param {*} cssstring the css single or multiline string
 * @param {string} [returns="object"] can return an array or object
 * @param {boolean} [finalcss=true] finalcss will override same keys in same definitions like css would
 * 
 * 
 * 
 */
function parser(cssstring, returns = "object", finalcss = true) {

}

module.exports.parseCss = parseCss;
module.exports.parser = parser;

