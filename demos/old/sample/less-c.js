
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

function getTextBetweenBraces(str) {
    let result = [];
    let stack = [];
    let lastIdx = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '{') {
            if (stack.length === 0) {
                lastIdx = i + 1;
            }
            stack.push(str[i]);
        } else if (str[i] === '}') {
            stack.pop();
            if (stack.length === 0) {
                result.push(str.substring(lastIdx, i));
            }
        }
    }

    return result;
}


const css = `
  * {
    some: text texter;
    some: texts texter ;
    some: texter 45px;
  }
  
  html {
    some: text texter;
    some: texts texter ;
    some: texter 45px;
  }
  
  SOMETAG {
    some: text texter;
    some: texts texter ;
    some: texter 45px;
  }
  
  .SOMETAG {
    some: text texter;
    some: texts texter ;
    some: texter 45px;
    some: texter;
  }
  
  #SOMETAG, .SOMETAG {
    some: text;
    some: text texter;
    some: texts texter ;
    some: texter 45px;
    some: texter;
  }
  
  #SOMETAG .SOMETAG {
    some: text;
    some: text texter;
    some: texts texter ;
    some: texter 45px;
    some: texter;
  }
  
  #SOMETAG > .SOMETAG {
    some: text;
    some: text texter;
    some: texts texter ;
    some: texter 45px;
    some: texter;
  }
  
  #SOMETAG .SOMETAG, SOMETAG > SOMETAG{
    some: text;
    some: text texter;
    some: texts texter ;
    some: texter 45px;
    some: texter;
  }
  
  
  @SOMETAG  {
  
  
  #SOMETAG .SOMETAG, SOMETAG > SOMETAG{
    some: text;
    some: text texter;
    some: texts texter ;
    some: texter 45px;
    some: texter;
  }
  
  
  .SOMETAG {
    some: text texter;
    some: texts texter ;
    some: texter 45px;
    some: texter;
  }
  
  }
  
  
  @SOMETAG screen and (some: text)  {
  
  
  #SOMETAG .SOMETAG, SOMETAG > SOMETAG{
    some: text;
    some: text texter;
    some: texts texter ;
    some: texter 45px;
    some: texter;
  }
  
  
  .SOMETAG {
    some: text texter;
    some: texts texter ;
    some: texter 45px;
    some: texter;
  }
  }`;


function parseNestedTags(input, returns = "object") {
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
                result[result.length - 1][1] = parseNestedTags(currentContent);
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
        result[result.length - 1][1] = parseNestedTags(currentContent);
        (returns === "object") ? result[result.length - 1] = { [result[result.length - 1][0]]: result[result.length - 1][1] } : null;
    }

    return result;
}



const input = `
  * {
      some: text texter;
  }
  html {
      some: text texter;
  }
  SOMETAG {
      some: text texter;
  }
  .SOMETAG {
      some: text texter;
      some: texts texter ;
      some: texter 45px;
      some: texter;
  }
  #SOMETAG, .SOMETAG {
      some: text;
      some: text texter;
      some: texts texter ;
      some: texter 45px;
      some: texter;
  }
  #SOMETAG .SOMETAG {
      some: text;
      some: text texter;
      some: texts texter ;
      some: texter 45px;
      some: texter;
  }
  #SOMETAG > .SOMETAG {
      some: text;
      some: text texter;
      some: texts texter ;
      some: texter 45px;
      some: texter;
  }
  #SOMETAG .SOMETAG, SOMETAG > SOMETAG {
      some: text;
      some: text texter;
      some: texts texter ;
      some: texter 45px;
      some: texter;
  }
  @SOMETAG {
      #SOMETAG .SOMETAG, SOMETAG > SOMETAG {
          some: text;
          some: text texter;
          some: texts texter ;
          some: texter 45px;
          some: texter;
      }
      .SOMETAG {
          some: text texter;
          some: texts texter ;
          some: texter 45px;
          some: texter;
      }
  }
  @SOMETAG screen and (some: text) {
      #SOMETAG .SOMETAG, SOMETAG > SOMETAG {
          some: text;
          some: text texter;
          some: texts texter ;
          some: texter 45px;
          some: texter;
      }
      .SOMETAG {
          some: text texter;
          some: texts texter ;
          some: texter 45px;
          some: texter;
      }
  }`;

// const rules = input.split('\n')
//     .filter(line => line.trim() !== '')
//     .map(line => line.trim())
//     .map(line => line.endsWith(';') ? line : line + ';')
//     .join('\n');

console.log(JSON.stringify(parseNestedTags(css)));
console.log(JSON.stringify(parseNestedTags(input)));


