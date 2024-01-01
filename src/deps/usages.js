

function parseCssObjAST(str, options) {
  var css = require('css');
  // str = 'body { font-size: 12px; }'
  var obj = css.parse(str, options || { silent: false });
  return obj;
}

function stringifyObjCssAST(ast, options) {
  var css = require('css');
  // str = 'body { font-size: 12px; }'
  var obj = css.parse(ast, options || { sourcemap: true });
  return obj;
}

function parseCssObj(str) {
  var converter = require('cssobj')
  return converter(str, "css", {keepVendor: true, format: "css"});
}

function stringifyObjCss(str) {
  var converter = require('cssobj')
  return converter(str, "css", {keepVendor: true, format: "css"});
}

// function cssParse(str) {
//   var converter = require('cssobj-converter')
//   return converter(str, "css", {keepVendor: true, format: "css"});
// }

function parseXMLObj() {

}

function stringifyObjXML() {

}

function parseXMLObj() {

}

function stringifyObjXML() {

}

function parseINIObj() {

}

function stringifyObjINI() {

}

function parseSASSObj() {

}

function stringifyObjSASS() {

}

function parseSCSSObj() {

}

function stringifyObjSCSS() {

}

function parseYAMLObj() {

}

function stringifyObjYAML() {

}
