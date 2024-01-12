
// var { parseCss, extractCssRules } = require("../src/parserCss");

var cssstring = `*,
*:before,
*:after {
  box-sizing: inherit;
}

style {
  display: none;
}
html,
body {
  font-family: Verdana, sans-serif;
  font-size: 15px;
  line-height: 1.5;
}
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
ELEMENTSELECTOR {
  key1: value;
  key2: value;
}
p {
  key1: value;
  key2: value;
}
p.ex {
  key1: value;
  key2: value;
}
a {
  key1: value;
  key2: value;
}
p > div > a {
  key1: value;
  key2: value;
}
.CLASSSELECTOR {
  key1: value;
  key2: value;
}

.CLASSSELECTOR > .clsa > a {
  key1: value;
  key2: value;
}

.cssclass {
  key1: value;
  key2: value;
}

.cssclass .clsa a {
  key1: value;
  key2: value;
}

.css-class-two {
  key1: value;
  key2: value;
}
#IDSELECTOR {
  key1: value;
  key2: value;
}
#element-id {
  key1: value;
  key2: value;
}
#elementid2 {
  key1: value;
  key2: value;
  key1: value;
  key2: value;
  key11: value;
  key21: value;
}
.snigel-cmp-framework .sn-inner {
  background-color: #fffefe !important;
}
.snigel-cmp-framework .sn-b-def {
  border-color: #04aa6d !important;
  color: #04aa6d !important;
}
.snigel-cmp-framework .sn-b-def.sn-blue {
  color: #ffffff !important;
  background-color: #04aa6d !important;
  border-color: #04aa6d !important;
}
.snigel-cmp-framework .sn-selector ul li {
  color: #04aa6d !important;
}
.snigel-cmp-framework .sn-selector ul li:after {
  background-color: #04aa6d !important;
}
.snigel-cmp-framework .sn-footer-tab .sn-privacy a {
  color: #04aa6d !important;
}
.snigel-cmp-framework .sn-arrow:after,
.snigel-cmp-framework .sn-arrow:before {
  background-color: #04aa6d !important;
}
.snigel-cmp-framework .sn-switch input:checked + span::before {
  background-color: #04aa6d !important;
}
#adconsent-usp-link {
  border: 1px solid #04aa6d !important;
  color: #04aa6d !important;
}
#adconsent-usp-banner-optout input:checked + .adconsent-usp-slider {
  background-color: #04aa6d !important;
}
#adconsent-usp-banner-btn {
  color: #ffffff;
  border: solid 1px #04aa6d !important;
  background-color: #04aa6d !important;
}
`

const css = `
  *,
  html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #header {
    background-color: blue;
    color: white;
  }

  @media screen and (max-width: 600px) {
    body {
      font-size: 16px;
    }
  }

  .box {
    width: 100px;
    height: 100px;
    background-color: red;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
  }

  .box > .inner {
    background-color: green;
    color: white;
  }

  .box .inner span {
    font-weight: bold;
  }

  @keyframes my-animation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

// const rules = parseCSS(css);
// console.log(rules);


console.log(JSON.stringify(extractCssRules(cssstring)));


