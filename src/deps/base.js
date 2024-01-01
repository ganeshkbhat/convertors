

function parseCssAST(str, options) {
  var css = require('css');
  // str = 'body { font-size: 12px; }'
  var obj = css.parse(str, options || { silent: false });
  return obj;
}

function stringifyToCssAST(ast, options) {
  var css = require('css');
  // str = 'body { font-size: 12px; }'
  var obj = css.parse(ast, options || { sourcemap: true });
  return obj;
}

function parseCss(str) {
  var converter = require('cssobj')
  return converter(str, "css", {keepVendor: true, format: "css"});
}

function stringifyToCss(str) {
  var converter = require('cssobj')
  return converter(str, "css", {keepVendor: true, format: "css"});
}

// function cssParse(str) {
//   var converter = require('cssobj-converter')
//   return converter(str, "css", {keepVendor: true, format: "css"});
// }

function parseXML() {

}

function stringifyToXML() {

}

function parseHTML() {

}

function stringifyToHTML() {

}

function parseINI() {

}

function stringifyToINI() {

}

function parseSASS() {

}

function stringifyToSASS() {

}

function parseSCSS() {

}

function stringifyToSCSS() {

}

function parseYAML() {

}

function stringifyToYAML() {

}

function parseJSON() {

}

function stringifyToJSON() {

}

function parseSASS() {

}

function stringifyToSASS() {

}

function parseLess() {

}

function stringifyToLess() {

}

function parseDotenv() {

}

function stringifyToDotenv() {

}


