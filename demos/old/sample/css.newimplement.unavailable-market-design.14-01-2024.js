const fs = require("fs");

function getOpenBracketIndexes(inputString) {
  const indexes = [];
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === '{') {
      indexes.push(i);
    }
  }
  return indexes;
}

// // Example usage:
// const inputString = "This is a {sample} string with {multiple} open {brackets}.";
// const openBracketIndexes = getOpenBracketIndexes(inputString);
// console.log(openBracketIndexes);

function getCloseBracketIndexes(inputString) {
  const indexes = [];
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === '}') {
      indexes.push(i);
    }
  }
  return indexes;
}

function splitViaComma(str) {
  return str.split(",");
}

function removeLineBreaks(str) {
  return str.split("\r\n").join("").split("\n").join("").split("\r").join("");
}

// // Example usage:
// const inputString = "This is a {sample} string with {multiple} close {brackets}.";
// const closeBracketIndexes = getCloseBracketIndexes(inputString);
// console.log(closeBracketIndexes);

function getIndexPairs(str) {
  let o = getOpenBracketIndexes(str).sort((a, b) => a - b);
  let c = getCloseBracketIndexes(str).sort((a, b) => a - b);
  let pairs = [];
  for (let i = o.length - 1; i >= 0; i--) {
    let x = c.filter(s => s > o[i]).sort((a, b) => a - b);
    pairs.push([o[i], x[0]])
  }
  return pairs.map(i => i.sort((a,b) => a - b)).sort((a,b) => a[0] - b[0]);
}

function parseCss(str) {
  str = removeLineBreaks(str);
  console.log(str)
  let si = getIndexPairs(str);
  let o = {};
  let tStr = str;
  for (let i = 0; i < si.length; i++) {
    let k = tStr.slice((i === 0)? 0 : si[i-1][1]+1, si[i][0]);
    let v = tStr.slice(si[i][0]+1, si[i][1]);
    o[k] = v;
  }
  return o;
}

// Example usage:
let inputString = `
sometest {
  somekey: somevalue,
  some: 10,
  som: #8934kn
}
sometest, a, div, html {
  somekey: somevalue,
  some: 10,
  som: #8934kn
}
.sometest {
  somekey: somevalue,
  some: 10,
  som: #8934kn
}
#sometest {
  somekey: somevalue,
  some: 10,
  som: #8934kn
}
#sometest .sometest {
  somekey: somevalue,
  some: 10,
  som: #8934kn
}
.sometest > .som {
  somekey: somevalue,
  some: 10,
  som: #8934kn
}
.sometest > .somr, .sometest > .som {
  somekey: somevalue,
  some: 10,
  som: #8934kn
}
@media screen(100xs) {
  sometest {
    somekey: somevalue,
    some: 10,
    som: #8934kn
  }
  .sometest {
    somekey: somevalue,
    some: 10,
    som: #8934kn
  }
  #sometest {
    somekey: somevalue,
    some: 10,
    som: #8934kn
  }
  #sometest .sometest {
    somekey: somevalue,
    some: 10,
    som: #8934kn
  }
  .sometest > .som {
    somekey: somevalue,
    some: 10,
    som: #8934kn
  }
  .sometest > .somr, .sometest > .som {
    somekey: somevalue,
    some: 10,
    som: #8934kn
  }
}
.somsdfetest > .sosdfmr, .sdfsometest > .somsdf { somekey: somevalue,
  some: 10,
  som: #8934kn
}
.sometest > .somr, 
.sometest > .som {
  somekey: somevalue,
  some: 10,
  som: #8934kn
}
`;

// console.log(getIndexPairs(inputString));
// console.log(parseCss(inputString));

let l = inputString.length;
inputString = inputString.replaceAll("{", "\':{\'")
inputString = inputString.replaceAll("}", "\'},\'");
inputString = "{'" + inputString + "'}";
inputString = removeLineBreaks(inputString);
inputString = inputString.replaceAll(",''}", "}").replaceAll("'", '"');
console.log(inputString);
// console.log(JSON.parse(inputString));
