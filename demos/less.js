function lessSyntaxArray(css) {
    const lines = css.split('\n');
    let selector = null;
    let declarations = [];
    let rules = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // Ignore empty lines and comments
        if (line === '' || line.startsWith('//')) {
            continue;
        }

        if (line.startsWith('@media')) {
            const query = line.slice(7, -1);
            const nestedRules = cssParser(lines.slice(i + 1).join('\n'));

            rules.push({
                type: 'media',
                query,
                rules: nestedRules,
            });

            break;
        }

        if (line.startsWith('@')) {
            continue;
        }

        if (line.endsWith('{')) {
            // New rule detected
            selector = line.slice(0, -1).trim();
            declarations = [];
        } else if (line.endsWith('}')) {
            // End of rule detected
            const cleanDeclarations = declarations[0] ? declarations[0].replace('}', '').trim().split(';') : [];
            const ruleDeclarations = {};

            for (let j = 0; j < cleanDeclarations.length; j++) {
                const declaration = cleanDeclarations[j].trim();

                if (declaration === '') {
                    continue;
                }

                const [property, ...values] = declaration.split(':');
                const value = values.join(':').trim();
                ruleDeclarations[property] = value;
            }

            rules.push({
                selector,
                declarations: ruleDeclarations,
            });

            selector = null;
            declarations = [];
        } else {
            // Declaration detected
            declarations.push(line);
        }
    }

    return rules;
}

function replaceVariables(value, variables) {
    let replacedValue = value;

    for (const variable in variables) {
        if (variables.hasOwnProperty(variable)) {
            const variableValue = variables[variable];
            const variableRegex = new RegExp(`@${variable}\\b`, 'g');
            replacedValue = replacedValue.replace(variableRegex, variableValue);
        }
    }

    return replacedValue;
}



const parseDeclaration = declaration => {
    const [name, value] = declaration.split(':');
    if (!name || !value) {
        return '';
    }
    if (name.trim() === '@color' && value.trim().startsWith('#')) {
        return `${name.trim().replace('@', '')}: ${value.trim()};`;
    }
    if (name.trim() === 'border-radius' && !isNaN(parseInt(value.trim()))) {
        return `${name.trim()}: ${value.trim()}px;`;
    }
    return '';
};

const parseRule = rule => {
    const [selector, declarations] = rule.split('{');
    if (!selector || !declarations) {
        return '';
    }
    const parsedDeclarations = declarations.split(';')
        .map(declaration => parseDeclaration(declaration))
        .filter(declaration => declaration !== '');
    return `${selector.trim()} { ${parsedDeclarations.join(' ')} }`;
};

const lessToCss = less => {
    const rules = less.split('}');
    const parsedRules = rules.slice(0, rules.length - 1)
        .map(rule => parseRule(`${rule}}`))
        .filter(rule => rule !== '');
    return parsedRules.join(' ');
};




const css = `
body {
  background-color: #F5F5F5;
  font-family: Arial, sans-serif;
}

h1 {
  color: red;
  font-size: 36px;
}

.button {
  display: inline-block;
  padding: 12px 24px;
  background-color: blue;
  color: white;
  border-radius: 4px;
}

@media (max-width: 600px) {
  body {
    font-size: 16px;
  }

  h1 {
    font-size: 24px;
  }

  .button {
    font-size: 14px;
  }
}
`;

const less = `
@color: #f938ab;

body {
  color: @color;
}

h1 {
  color: darken(@color, 10%);
}

.border-radius(@radius: 5px) {
  border-radius: @radius;
}

.button {
  .border-radius(10px);
  background-color: @color;
  color: white;
  padding: 12px 24px;
  display: inline-block;
}
`;


// let parsedLess = lessSyntaxArray(less);
// console.log(parsedLess);


parsedLess = lessToCss(less);
console.log(parsedLess);
