

function cssClass(ruleString) {
  // .CLASSNAME { KEY: VALUE, KEYTWO: VALUE }
  // const cssRuleRegex = /^\.([a-zA-Z][\w-]*)\s*\{\s*((?:[a-zA-Z-]+:\s*(?:\\[{}]|[^{}])+;\s*)*)\s*\}$/;

  const cssRuleRegex = /^\.([a-zA-Z][\w-]*)\s*\{\s*((?:[a-zA-Z-]+:\s*(?:\\[{}]|[^{}])+;\s*)*)\s*\}$/;
  const match = cssRuleRegex.exec(ruleString);
  if (!match) {
    return null; // Invalid CSS rule string
  }
  const className = match[1];
  const properties = match[2]
    .trim() // Remove leading/trailing whitespace
    .split(';') // Split into individual properties
    .filter(prop => prop.trim()) // Remove empty properties
    .map(prop => {
      const [key, value] = prop.split(':').map(part => part.trim());
      return { key, value };
    }); // Convert each property to a key/value object
  return { className, properties };
}


//   const ruleString = '.my-class { font-size: 14px; color: #333; }';
// const cssRule = parseCSSRule(ruleString);
// console.log(cssRule); // { className: 'my-class', properties: [{ key: 'font-size', value: '14px' }, { key: 'color', value: '#333' }] }


function cssHTMLTag(ruleString) {
  // `TAGNAME { KEY: VALUE, KEYTWO: VALUE }`
  // /^([a-zA-Z][\w-]*)\s*\{\s*((?:[a-zA-Z-]+:\s*(?:\\[{}]|[^{}])+;\s*)*)\s*\}$/

  const cssRuleRegex = /^([a-zA-Z][\w-]*)\s*\{\s*((?:[a-zA-Z-]+:\s*(?:\\[{}]|[^{}])+;\s*)*)\s*\}$/;

  const match = cssRuleRegex.exec(ruleString);

  if (match) {
    const tagName = match[1];
    const properties = match[2].trim().split(';').map(prop => {
      const [key, value] = prop.split(':').map(part => part.trim());
      return { key, value };
    });
    return { tagName, properties };
  } else {
    return null;
  }
}
  

//   const ruleString = 'h1 { font-size: 24px; color: #333; }';
// const rule = parseCssRule(ruleString);

// if (rule) {
//   console.log(rule.tagName, rule.properties);
// } else {
//   console.log('Invalid CSS rule');
// }


function cssElementID(rule) {
  // `#TAGNAME { KEY: VALUE, KEYTWO: VALUE }`
  // /#([^\s\{\}]+)\s*\{\s*([^{}]+)\s*\}/g

  const regex = /#([^\s\{\}]+)\s*\{\s*([^{}]+)\s*\}/g;
  const match = regex.exec(rule);
  
  if (!match) {
    return null;
  }
  
  const [, tagName, props] = match;
  const style = {};
  
  props.split(',').forEach(prop => {
    const [key, value] = prop.split(':');
    style[key.trim()] = value.trim();
  });
  
  return {
    tagName,
    style
  };
}
  

function starSeperated(cssString) {
  // ` * { KEY: VALUE, KEYTWO: VALUE }`
  // /\s*\*\s*{\s*([^{}]+)\s*}/g

  const regex = /\s*\*\s*{\s*([^{}]+)\s*}/g;
  let match = regex.exec(cssString);
  const styles = {};

  while (match !== null) {
    const keyValuePairs = match[1].split(',');
    const rule = {};

    keyValuePairs.forEach(pair => {
      const [key, value] = pair.split(':').map(str => str.trim());
      rule[key] = value;
    });

    styles['*'] = rule;
    match = regex.exec(cssString);
  }

  return styles;
}


function spaceSeperated(cssString) {
  // `#TAGNAME TAGNAME .CLASSNAME { KEY: VALUE, KEYTWO: VALUE }`
  // /#\w+\s+\w+(?:\.\w+)?\s*\{[^{}]+\}/

  const regex = /#\w+\s+\w+(?:\.\w+)?\s*\{[^{}]+\}/g;
  const matches = cssString.match(regex);
  return matches;
}
    

//   const cssString = `
//     #myDiv span.bold {
//       color: red;
//       font-weight: bold;
//     }
//     body {
//       background-color: white;
//     }
//     #header .logo {
//       width: 100px;
//       height: 50px;
//     }
//   `;
  
//   const rules = parseCssRules(cssString);
//   console.log(rules);
//   // Output:
//   // [
//   //   "#myDiv span.bold {\n  color: red;\n  font-weight: bold;\n}",
//   //   "#header .logo {\n  width: 100px;\n  height: 50px;\n}"
//   // ]


function arrowSeperated(cssString) {
  // `#TAGNAME > TAGNAME >  .CLASSNAME { KEY: VALUE, KEYTWO: VALUE }`
  // /^#\w+\s*>*\s*\w+\s*>*\s*\.\w+\s*\{\s*[\w-]+\s*:\s*[^;}]+(;[\w-]+\s*:\s*[^;}]+)*\s*\}/

  const regex = /^#\w+\s*>*\s*\w+\s*>*\s*\.\w+\s*\{\s*([\w-]+\s*:\s*[^;}]+(;[\w-]+\s*:\s*[^;}]+)*)\s*\}/;
  const match = cssString.match(regex);
  if (!match) return null;

  const declarations = match[1]
    .split(';')
    .filter((d) => d.trim() !== '')
    .map((d) => {
      const [property, value] = d.split(':');
      return { property: property.trim(), value: value.trim() };
    });

  const selectors = match[0]
    .split('{')[0]
    .split('>')
    .map((s) => s.trim());

  const idSelector = selectors[0].slice(1);
  const elementSelector = selectors[1];
  const classSelector = selectors[2].slice(1);

  return {
    id: idSelector,
    element: elementSelector,
    class: classSelector,
    declarations: declarations,
  };
}
  

function commaSpaceArrowSeperated(cssString) {
  // `#TAGNAME TAGNAME .CLASSNAME,  #TAGNAME > TAGNAME > .CLASSNAME  { KEY: VALUE, KEYTWO: VALUE }`
  // /(?:^|\s*)([#\.\w\s>,]+)\s*\{([^}]+)\}/g

  const regex = /(?:^|\s*)([#\.\w\s>,]+)\s*\{([^}]+)\}/g;
  let match;
  const rules = [];

  while ((match = regex.exec(cssString)) !== null) {
    const selector = match[1].trim();
    const rule = match[2].trim();
    rules.push({ selector, rule });
  }

  return rules;
}

  
function commaSpaceArrowSeperated(cssString) {
  // `#TAGNAME, TAGNAME, .CLASSNAME, #TAGNAME TAGNAME .CLASSNAME,  #TAGNAME > TAGNAME > .CLASSNAME  { KEY: VALUE, KEYTWO: VALUE }`
  // /([#.\w\s,>+]+)\s*\{([^}]*)\}/g

  const ruleRegex = /([#.\w\s,>+]+)\s*\{([^}]*)\}/g;
  let match, rules = {};
  
  while (match = ruleRegex.exec(cssString)) {
    const selectors = match[1].split(/\s*,\s*/);
    const properties = match[2].split(';').filter(Boolean).map(prop => prop.trim().split(':'));
    
    selectors.forEach(selector => {
      if (!rules[selector]) {
        rules[selector] = {};
      }
      properties.forEach(([name, value]) => {
        rules[selector][name.trim()] = value.trim();
      });
    });
  }
  
  return rules;
}
  

//   const cssString = '#TAGNAME, TAGNAME, .CLASSNAME, #TAGNAME TAGNAME .CLASSNAME,  #TAGNAME > TAGNAME > .CLASSNAME  { color: red; font-size: 16px; }';
// const rules = parseCSS(cssString);

// console.log(rules);
// // Output:
// // {
// //   "#TAGNAME": { "color": "red", "font-size": "16px" },
// //   "TAGNAME": { "color": "red", "font-size": "16px" },
// //   ".CLASSNAME": { "color": "red", "font-size": "16px" },
// //   "#TAGNAME TAGNAME .CLASSNAME": { "color": "red", "font-size": "16px" },
// //   "#TAGNAME > TAGNAME > .CLASSNAME": { "color": "red", "font-size": "16px" }
// // }


// function cssIndividualsComma(rule) {
//   // `* TAGNAME, TAGNAME, TAGNAME  { KEY: VALUE, KEYTWO: VALUE }`
//   // /^\s*\*\s*|\s*[\w-]+(?:\s+[\w-]+)*\s*(?:,\s*[\w-]+(?:\s+[\w-]+)*)*\s*{\s*(?:[\w-]+\s*:\s*[^;{}]*[;}]?\s*)+\s*}/
//   const regex = /^\s*\*\s*|\s*[\w-]+(?:\s+[\w-]+)*\s*(?:,\s*[\w-]+(?:\s+[\w-]+)*)*\s*{\s*(?:[\w-]+\s*:\s*[^;{}]*[;}]?\s*)+\s*}/;
//   const match = rule.match(regex);
//   if (match) {
//     const selectors = match[0].split(/\s*,\s*/);
//     const declarations = match[0].match(/\s*[\w-]+\s*:\s*[^;{}]*[;}]?\s*/g);
//     return { selectors, declarations };
//   }
  
//   return null;
// }
  

function commaSeperatedClasses(cssString) {
  //  `*, TAGNAME, TAGNAME, TAGNAME  { KEY: VALUE, KEYTWO: VALUE }`
  // /^(\s*\*\s*|[a-zA-Z][a-zA-Z0-9-]*)(\s*,\s*[a-zA-Z][a-zA-Z0-9-]*)*\s*\{\s*[^{}]*\s*\}/

  const regex = /^(\s*\*\s*|[a-zA-Z][a-zA-Z0-9-]*)(\s*,\s*[a-zA-Z][a-zA-Z0-9-]*)*\s*\{\s*[^{}]*\s*\}/;
  const match = cssString.match(regex);
  if (match) {
    return match[0];
  } else {
    return null;
  }
}
  

function commaSeperatedElementID(cssString) {
  // `*, #TAGNAME, #TAGNAME, #TAGNAME  { KEY: VALUE, KEYTWO: VALUE }`
  // /^\s*(?:\*|#\w+|\.\w+|\w+)(?:\s*(?:,\s*)\s*(?:\*|#\w+|\.\w+|\w+))*\s*\{[\s\S]*?\}/gm

  const selectorRegex = /(?:\*|#?\w+)(?:\s*>?\s*(?:\*|#?\w+))*\s*,?\s*/g;
  const declarationRegex = /\s*([\w-]+)\s*:\s*([^;]+)\s*(?=;|$)/g;
  const selectors = cssString.match(selectorRegex);
  const styles = cssString.split(selectorRegex).slice(1);
  const result = [];
  for (let i = 0; i < selectors.length; i++) {
    const selector = selectors[i].trim();
    const declarationMatches = styles[i].matchAll(declarationRegex);
    const declarations = Array.from(declarationMatches, match => ({ [match[1]]: match[2] }));
    result.push({ selector, declarations });
  }
  return result;
}
  

//   const cssString = `*, #TAGNAME, #TAGNAME, #TAGNAME {
//     KEY: VALUE;
//     KEYTWO: VALUE;
//   }`;
  
//   const result = parseCSS(cssString);
//   console.log(result);
//   // Output:
//   // [
//   //   {
//   //     selector: '*',
//   //     declarations: [
//   //       { KEY: 'VALUE' },
//   //       { KEYTWO: 'VALUE' }
//   //     ]
//   //   },
//   //   {
//   //     selector: '#TAGNAME',
//   //     declarations: [
//   //       { KEY: 'VALUE' },
//   //       { KEYTWO: 'VALUE' }
//   //     ]
//   //   },
//   //   {
//   //     selector: '#TAGNAME',
//   //     declarations: [
//   //       { KEY: 'VALUE' },
//   //       { KEYTWO: 'VALUE' }
//   //     ]
//   //   },
//   //   {
//   //     selector: '#TAGNAME',
//   //     declarations: [
//   //       { KEY: 'VALUE' },
//   //       { KEYTWO: 'VALUE' }
//   //     ]
//   //   }
//   // ]
  

function selectors(cssString) {
  // `@MEDIATAGNAME  { .CLASSNAME { KEY: VALUE, KEYTWO: VALUE }, #TAGNAME { KEY: VALUE, KEYTWO: VALUE }, TAGNAME { KEY: VALUE, KEYTWO: VALUE } }` the structure for @MEDIATAGNAME is not a nested structure
  // /@media\s*[^\{\}]*\s*\{(?:\s*[\.\#]?[\w-]+\s*\{[^{}]*\}\s*,?)+\s*\}/g

  const regex = /@media\s*[^\{\}]*\s*\{(?:\s*[\.\#]?[\w-]+\s*\{[^{}]*\}\s*,?)+\s*\}/g;
  const matches = cssString.match(regex);
  return matches || [];
}


function selectors(cssString) {
  // `@MEDIATAGNAME SCREENTAG CSSSELECTOR and ( hover: hover )    { .CLASSNAME { KEY: VALUE, KEYTWO: VALUE }, #TAGNAME { KEY: VALUE, KEYTWO: VALUE }, TAGNAME { KEY: VALUE, KEYTWO: VALUE } }` the structure for @MEDIATAGNAME is not a nested structure
  // /@\w+\s+\w+\s+\w+\s+\([^)]*\)\s*{\s*((?:\s*[.#]?[\w-]+\s*{[^{}]*}\s*,?\s*)+)\s*}/g

  const regex = /@\w+\s+\w+\s+\w+\s+\([^)]*\)\s*{\s*((?:\s*[.#]?[\w-]+\s*{[^{}]*}\s*,?\s*)+)\s*}/g;
  const matches = cssString.matchAll(regex);
  const result = [];

  for (const match of matches) {
    const selectors = match[1].split(',').map(s => s.trim());
    const styles = {};
    const styleRegex = /\.?([\w-]+)\s*{\s*([^{}]+)\s*}/g;
    let styleMatch;

    while ((styleMatch = styleRegex.exec(match[1])) !== null) {
      const key = styleMatch[1];
      const value = styleMatch[2].trim();
      styles[key] = value;
    }

    result.push({ selectors, styles });
  }

  return result;
}
  
  
/** PARSER */

function selectors(cssString) {
  // `@MEDIATAGNAME SCREENTAG and ( hover: hover )    { .CLASSNAME { KEY: VALUE, KEYTWO: VALUE }, #TAGNAME { KEY: VALUE, KEYTWO: VALUE }, TAGNAME { KEY: VALUE, KEYTWO: VALUE } *, #TAGNAME, #TAGNAME, #TAGNAME  { KEY: VALUE, KEYTWO: VALUE } #TAGNAME, TAGNAME, .CLASSNAME, #TAGNAME TAGNAME .CLASSNAME,  #TAGNAME > TAGNAME > .CLASSNAME,   { KEY: VALUE, KEYTWO: VALUE }, * { KEY: VALUE, KEYTWO: VALUE } #TAGNAME { KEY: VALUE, KEYTWO: VALUE } , TAGNAME { KEY: VALUE, KEYTWO: VALUE }  .CLASSNAME { KEY: VALUE, KEYTWO: VALUE }  }`
  // /@media\s+([^{]+)\s*\{((?:[^{}]*\{[^{}]*\}[^{}]*)+)\}/g


  const regex = /@media\s+([^{]*)\{([^}]+)\}/g;
  const mediaQueries = [];
  let match;
  while (match = regex.exec(cssString)) {
    const mediaQuery = {
      selector: match[1].trim(),
      styles: parseStyles(match[2]),
    };
    mediaQueries.push(mediaQuery);
  }
  return mediaQueries;
}
  

function parseStyles(stylesString) {
  const regex = /([^{]+)\{([^}]+)\}/g;
  const styles = [];
  let match;
  while (match = regex.exec(stylesString)) {
    const selector = match[1].trim();
    const properties = match[2].split(';').filter(s => s.trim() !== '');
    const stylesObj = {};
    properties.forEach(prop => {
      const parts = prop.split(':');
      const key = parts[0].trim();
      const value = parts[1].trim();
      stylesObj[key] = value;
    });
    styles.push({ selector, styles: stylesObj });
  }
  return styles;
}
  

  /** PARSER */


function selectors(cssString) {
  // `@MEDIATAGNAME SCREENTAG and ( hover: hover )    { .CLASSNAME { KEY: VALUE, KEYTWO: VALUE }, #TAGNAME { KEY: VALUE, KEYTWO: VALUE }, TAGNAME { KEY: VALUE, KEYTWO: VALUE } }`
  // /@([a-zA-Z][\w-]*)\s+([\w-]+)\s+and\s*\(\s*([\w-]+)\s*:\s*([\w-]+)\s*\)\s*\{\s*((?:\s*(?:#|\.)[\w-]+\s*\{\s*[\w-]+\s*:\s*[\w-]+\s*,?\s*\})+)\s*\}/gs

  const regex = /@media\s+([\w\s]+?)\s+and\s*\([\w\s-:]+\)\s*{([^}]+)}/g;
  const cssData = {};
  let match;
  
  while ((match = regex.exec(cssString)) !== null) {
    const mediaQuery = match[1];
    const mediaStyles = match[2].trim();
    const styles = {};
    const nestedRegex = /([^{]+?)\s*{([^}]+)}/g;
    let nestedMatch;

    while ((nestedMatch = nestedRegex.exec(mediaStyles)) !== null) {
      const selector = nestedMatch[1].trim();
      const properties = nestedMatch[2].trim().split(';').filter(p => p !== '');

      styles[selector] = {};
      properties.forEach(prop => {
        const [key, value] = prop.split(':').map(p => p.trim());
        styles[selector][key] = value;
      });
    }

    cssData[mediaQuery] = styles;
  }

  return cssData;
}

  
//   const cssString = `@media screen and (hover: hover) {
//     .CLASSNAME {
//       KEY: VALUE;
//       KEYTWO: VALUE;
//     }
//     #TAGNAME {
//       KEY: VALUE;
//       KEYTWO: VALUE;
//     }
//     TAGNAME {
//       KEY: VALUE;
//       KEYTWO: VALUE;
//     }
//   }`;
  
//   const parsedCSS = parseCSS(cssString);
//   console.log(parsedCSS);


function selectors(cssString) {
  // `@MEDIATAGNAME SCREENTAG and ( hover: hover )    { .CLASSNAME { KEY: VALUE, KEYTWO: VALUE }, #TAGNAME { KEY: VALUE, KEYTWO: VALUE }, TAGNAME { KEY: VALUE, KEYTWO: VALUE } *, #TAGNAME, #TAGNAME, #TAGNAME  { KEY: VALUE, KEYTWO: VALUE } #TAGNAME, TAGNAME, .CLASSNAME, #TAGNAME TAGNAME .CLASSNAME,  #TAGNAME > TAGNAME > .CLASSNAME,   { KEY: VALUE, KEYTWO: VALUE }, * { KEY: VALUE, KEYTWO: VALUE } #TAGNAME { KEY: VALUE, KEYTWO: VALUE } , TAGNAME { KEY: VALUE, KEYTWO: VALUE }  .CLASSNAME { KEY: VALUE, KEYTWO: VALUE }  }`
  // /@\w+\s+\w+\s+and\s*\(\s*[\w-]+\s*:\s*[\w-]+\s*\)\s*{(?:\s*[\w.#-]+\s*\{\s*\w+\s*:\s*[\w.#%]+(?:\s*!important)?\s*,?\s*)+\s*}/g

  const mediaRegex = /@(?<media>\w+)\s+(?<screen>\w+)\s+and\s+\((?<hover>hover):\s+(?<hoverValue>\w+)\)\s*\{(?<cssCode>[^}]+)\}/gm;
  const selectorRegex = /(?<selectors>[^{}]+)\s*\{(?<styles>[^{}]+)\}/g;
  const keyValRegex = /(?<key>\w+)\s*:\s*(?<value>[^;]+);?/g;
  let result = {};
  let match;
  while ((match = mediaRegex.exec(  cssString))) {
    let media = match.groups.media;
    let screen = match.groups.screen;
    let hover = match.groups.hover;
    let hoverValue = match.groups.hoverValue;
    let cssCode = match.groups.cssCode;
    let styles = {};
    let selectorMatch;
    while ((selectorMatch = selectorRegex.exec(cssCode))) {
      let selectors = selectorMatch.groups.selectors.trim().split(/,\s*/);
      let keyValMatch;
      let selectorStyles = {};
      while ((keyValMatch = keyValRegex.exec(selectorMatch.groups.styles))) {
        let key = keyValMatch.groups.key;
        let value = keyValMatch.groups.value.trim();
        selectorStyles[key] = value;
      }
      selectors.forEach(selector => {
        if (result[media] === undefined) {
          result[media] = {};
        }
        if (result[media][screen] === undefined) {
          result[media][screen] = {};
        }
        if (result[media][screen][hover] === undefined) {
          result[media][screen][hover] = {};
        }
        if (result[media][screen][hover][selector] === undefined) {
          result[media][screen][hover][selector] = {};
        }
        result[media][screen][hover][selector] = selectorStyles;
      });
    }
  }
  return result;
}


//   let   cssString = `@MEDIATAGNAME SCREENTAG and ( hover: hover )    { .CLASSNAME { KEY: VALUE, KEYTWO: VALUE }, #TAGNAME { KEY: VALUE, KEYTWO: VALUE }, TAGNAME { KEY: VALUE, KEYTWO: VALUE } *, #TAGNAME, #TAGNAME, #TAGNAME  { KEY: VALUE, KEYTWO: VALUE } #TAGNAME, TAGNAME, .CLASSNAME, #TAGNAME TAGNAME .CLASSNAME,  #TAGNAME > TAGNAME > .CLASSNAME,   { KEY: VALUE, KEYTWO: VALUE }, * { KEY: VALUE, KEYTWO: VALUE } #TAGNAME { KEY: VALUE, KEYTWO: VALUE } , TAGNAME { KEY: VALUE, KEYTWO: VALUE }  .CLASSNAME { KEY: VALUE, KEYTWO: VALUE }  }`;
// let parsedCSS = parseCSS(cssString);
// console.log(parsedCSS);


function selectors(cssString) {
  // `@SOMETAGNAME SCREENTAG and ( hover: hover )    { .CLASSNAME { KEY: VALUE, KEYTWO: VALUE }, #TAGNAME { KEY: VALUE, KEYTWO: VALUE }, TAGNAME { KEY: VALUE, KEYTWO: VALUE } }`
  // /@\w+\s+\w+\s+and\s*\([^)]*\)\s*{(?:\s*[.#]?[\w-]+\s*(?:[>,+\s~]+[.#]?[\w-]+)*\s*{(?:\s*[\w-]+\s*:\s*[^;{}]+;\s*)*}\s*,?\s*)*}/g

  const regex = /^@([^\s]+)\s+([^\{\s]+)\s+(.*)\s*\{([^}]*)\}/s;
  const matches = cssString.match(regex);
  if (matches === null) {
    throw new Error('Invalid CSS string');
  }
  const mediaTag = matches[1];
  const screenTag = matches[2];
  const selectors = matches[3];
  const rules = matches[4].split(';')
    .filter((rule) => rule.trim() !== '')
    .map((rule) => {
      const [key, value] = rule.split(':').map((part) => part.trim());
      return { key, value };
    });
  return { mediaTag, screenTag, selectors, rules };
}
  
//  const cssString = '@SOMETAGNAME SCREENTAG and ( hover: hover )    { .CLASSNAME { KEY: VALUE, KEYTWO: VALUE }, #TAGNAME { KEY: VALUE, KEYTWO: VALUE }, TAGNAME { KEY: VALUE, KEYTWO: VALUE } }';
//  const cssObject = parseCSS(cssString);
//  console.log(cssObject);
  

//  `@MEDIATAGNAME SCREENTAG and ( hover: hover )    { .CLASSNAME { KEY: VALUE, KEYTWO: VALUE }, #TAGNAME { KEY: VALUE, KEYTWO: VALUE }, TAGNAME { KEY: VALUE, KEYTWO: VALUE } }`
// /@([a-zA-Z][\w-]*)\s+([\w-]+)\s+and\s*\(\s*([\w-]+)\s*:\s*([\w-]+)\s*\)\s*\{\s*((?:\s*(?:#|\.)[\w-]+\s*\{\s*[\w-]+\s*:\s*[\w-]+\s*,?\s*\})+)\s*\}/gs


// `@MEDIATAGNAME SCREENTAG and ( hover: hover )    { .CLASSNAME { KEY: VALUE, KEYTWO: VALUE }, #TAGNAME { KEY: VALUE, KEYTWO: VALUE }, TAGNAME { KEY: VALUE, KEYTWO: VALUE } }`
// /@\w+\s+\w+\s+and\s+\(\s*\w+\s*:\s*\w+\s*\)\s*{\s*(\.|#|)\w+\s*{\s*[a-zA-Z-]+:\s*[a-zA-Z0-9]+(?:\s*;\s*[a-zA-Z-]+:\s*[a-zA-Z0-9]+)*\s*}\s*}/g
