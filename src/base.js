/**
 * 
 * Package: jsparsers
 * Author: Ganesh B
 * Description: 
 * Install: npm i jsparsers --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/jsparsers
 * File: src/base.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';



/**
 *
 *
 * @param {*} str
 * @param {*} options
 * @return {*} 
 */
function parseCssAST(str, options) {
  var css = require('css');
  // str = 'body { font-size: 12px; }'
  return css.parse(str, options || { silent: false });
}

/**
 *
 *
 * @param {*} astObj
 * @param {*} options
 * @return {*} 
 */
function stringifyToCssAST(astObj, options) {
  var css = require('css');
  // str = 'body { font-size: 12px; }'
  return css.stringify(astObj, options || { sourcemap: true });
}

/**
 *
 *
 * @param {*} str
 * @return {*} 
 */
function parseCss(str, options) {
  // import * as v8 from 'v8'
  // import postcss, { Declaration, Input, Root, Rule } from '../lib/postcss.js'
  // import { parse, stringify } from '../lib/postcss.js'
  let css = require('postcss');
  let v8 = require("v8");
  // let root = css.Parser(str, options);
  let root = css.parser(str, options);
  let json = root.toJSON();
  let serialized = v8.serialize(json);
  let deserialized = v8.deserialize(serialized);
  return deserialized;
}

/**
 *
 *
 * @param {*} str
 * @return {*} 
 */
function stringifyToCss(obj, options) {
  let css = require('postcss');
  // let v8 = require("v8");
  // // import { parse, stringify } from '../lib/postcss.js'
  // let result = '';
  // stringify(str, i => {
  //   result += i
  // })
  return css.fromJSON(JSON.stringify(obj));
}

/**
 *
 *
 * @param {*} str
 * @returns {*} Promise
 */
function parseXML(str, options) {
  let xml = require('xml2js');
  let parser = new xml2js.Parser(options);
  return parser.parseStringPromise(str);
}

/**
 *
 *
 * @param {*} obj
 */
function stringifyToXML(obj, options) {
  let xml = require('xml2js');
  let builder = new xml.Builder(options);
  return builder.buildObject(obj);
}


function parseHTML(str) {

}


function stringifyToHTML(obj) {

}

function parseINI(str) {
  if (!typeof lines === "string") throw new Error("lines is not a string object");

  if (v.endsWith("\r\n")) {
    lines = lines.split("\r\n");
  } else if (v.endsWith("\n")) {
    lines = lines.split("\n");
  } else if (!!Array.isArray(lines)) {
    lines = lines;
  } else {
    lines = [lines];
  }

  let ini = require("multi-ini");
  let parser = new ini.Parser();
  return parser.parse(lines);
}

function stringifyToINI(obj) {
  let ini = require('multi-ini');
  let str = new ini.Serializer(object);
  return str;
}

function loadINIWithFilters(file, options, readOptions) {
  let ini = require("multi-ini");
  let parser = new ini.Class(options || {});
  return parser.read(file, readOptions || { encoding: 'utf8' });
}

function writeToINIWithFilters(file, object, options) {
  let ini = require('multi-ini');
  ini.write(file, object, options || { encoding: 'utf8' });
  return true;
}

function parseSASS(str) {

}

function stringifyToSASS(obj) {

}

function parseConf(str) {

}

function stringifyToConf(obj) {

}

function parseSCSS(str) {

}

function stringifyToSCSS(obj) {

}

/**
 * parse YAML string: nativeObject 
 *
 * @param {*} str
 * @return {*} 
 */
function parseYAML(str) {
  // const yaml = require('js-yaml');
  // return yaml.load(lines, options);
  let yaml = require("yamljs");
  return yaml.parse(str);
}

/**
 * Generate YAML: yamlString 
 *
 * @param {*} obj
 * @return {*} 
 */
function stringifyToYAML(obj) {
  // const yaml = require('js-yaml');
  // return yaml.dump(object, options);
  let yaml = require("yamljs");
  return yaml.stringify(obj, 4);
}

/**
 *
 *
 * @param {*} obj
 * @return {*} 
 */
function parseJSON(obj) {
  return JSON.parse(obj);
}

/**
 *
 *
 * @param {*} obj
 * @return {*} 
 */
function stringifyToJSON(obj) {
  return JSON.stringify(obj);
}

function parseSys() {

}

function stringifyToSys() {

}

function parseDotenv() {

}

function stringifyToDotenv() {

}

function parseToml() {

}

function stringifyToToml() {

}

function parseTsv() {

}

function stringifyToTsv() {

}

function parsePdf() {

}

function stringifyToPdf() {

}

function parseXls() {

}

function stringifyToXls() {

}

function parseSASS() {

}

function stringifyToSASS() {

}

function parseLess() {

}

function stringifyToLess() {

}


