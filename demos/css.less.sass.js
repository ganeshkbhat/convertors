
function findTextBetweenBraces(str) {
    const regex = /}(.*?)\{/gs;
    const matches = [];
    let match;
    while ((match = regex.exec(str)) !== null) {
      matches.push(match[1].trim());
    }
    return matches;
  }

  function findBraceContent(str) {
    const regex = /\{([^}]+)\}/g;
    const matches = [];
  
    let match;
    while ((match = regex.exec(str)) !== null) {
      matches.push(match[1]);
    }
  
    return matches;
  }
  
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
  
  
  const str = `
* {
some: text texter;
some: texts texter ;
some: texter 45px;
}

* html {
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

let strs = 'some {example} text {here}';
let textBetweenBraces = findTextBetweenBraces(str);
console.log(textBetweenBraces); // output: ["some: text texter;\nsome: texts texter ;\nsome: texter 45px;", "some: text texter;\nsome: texts texter ;\nsome: texter 45px;", "some: text texter;\nsome: texts texter ;\nsome: texter 45px;", "some: text texter;\nsome: texts texter ;\nsome: texter 45px;\nsome: texter;", "some: text;\nsome: text texter;\ns
let matches = findBraceContent(str);
console.log(matches);


// textBetweenBraces = findTextBetweenBraces(strs);
// console.log(textBetweenBraces); // output: ["some: text texter;\nsome: texts texter ;\nsome: texter 45px;", "some: text texter;\nsome: texts texter ;\nsome: texter 45px;", "some: text texter;\nsome: texts texter ;\nsome: texter 45px;", "some: text texter;\nsome: texts texter ;\nsome: texter 45px;\nsome: texter;", "some: text;\nsome: text texter;\ns

// matches = findBraceContent(strs);
// console.log(matches); // Output: ['example', 'here']
