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
module.exports.parseCssAST = function parseCssAST(str, options) {
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
module.exports.stringifyCssAST = function stringifyCssAST(astObj, options) {
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
module.exports.parseCss = function parseCss(str, options) {
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
module.exports.stringifyCss = function stringifyCss(obj, options) {
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
module.exports.parseXML = function parseXML(str, options) {
  let xml = require('xml2js');
  let parser = new xml2js.Parser(options);
  return parser.parseStringPromise(str);
}

/**
 *
 *
 * @param {*} obj
 */
module.exports.stringifyXML = function stringifyXML(obj, options) {
  let xml = require('xml2js');
  let builder = new xml.Builder(options);
  return builder.buildObject(obj);
}


module.exports.parseHTML = function parseHTML(str) {

}


module.exports.stringifyHTML = function stringifyHTML(obj) {

}

module.exports.parseINI = function parseINI(str) {
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

module.exports.stringifyINI = function stringifyINI(obj) {
  let ini = require('multi-ini');
  let str = new ini.Serializer(object);
  return str;
}

module.exports.loadINIWithFilters = function loadINIWithFilters(file, options, readOptions) {
  let ini = require("multi-ini");
  let parser = new ini.Class(options || {});
  return parser.read(file, readOptions || { encoding: 'utf8' });
}

module.exports.writeToINIWithFilters = function writeToINIWithFilters(file, object, options) {
  let ini = require('multi-ini');
  ini.write(file, object, options || { encoding: 'utf8' });
  return true;
}

module.exports.parseSASS = function parseSASS(str) {

}

module.exports.stringifySASS = function stringifySASS(obj) {

}

module.exports.sass2less = function SASS2LESS(obj) {

}

module.exports.less2sass = function less2sass(obj) {

}

module.exports.parseConf = function parseConf(str) {

}

module.exports.stringifyConf = function stringifyConf(obj) {

}

module.exports.parseSCSS = function parseSCSS(str) {

}

module.exports.stringifySCSS = function stringifySCSS(obj) {

}

/**
 * parse YAML string: nativeObject 
 *
 * @param {*} str
 * @return {*} 
 */
module.exports.parseYAML = function parseYAML(str) {
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
module.exports.stringifyYAML = function stringifyYAML(obj) {
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
module.exports.parseJSON = function parseJSON(obj) {
  return JSON.parse(obj);
}

/**
 *
 *
 * @param {*} obj
 * @return {*} 
 */
module.exports.stringifyJSON = function stringifyJSON(obj) {
  return JSON.stringify(obj);
}

module.exports.parseSys = function parseSys(str) {

}

module.exports.stringifySys = function stringifySys(obj) {

}

module.exports.parseDotenv = function parseDotenv(str) {

}

module.exports.stringifyDotenv = function stringifyDotenv(obj) {

}

module.exports.parseToml = function parseToml(str) {

}

module.exports.stringifyml = function stringifyml(obj) {

}

module.exports.parseTsv = function parseTsv(str) {

}

module.exports.stringifyTsv = function stringifyTsv(obj) {

}

module.exports.parsePdf = function parsePdf(str) {

}

module.exports.stringifyPdf = function stringifyPdf(obj) {

}

module.exports.parseXls = function parseXls(str) {

}

module.exports.stringifyXls = function stringifyXls(obj) {

}

module.exports.parseSASS = function parseSASS(str) {

}

module.exports.stringifySASS = function stringifySASS(obj) {

}

/**
 *
 *
 * @param {*} str
 * @param {*} callback
 * @param {string} [options={
 *     env: "production",
 *     logLevel: 2,
 *     errorReporting: "console",
 *     async: false,
 *     fileAsync: false,
 *     poll: 1000,
 *     functions: {},
 *     dumpLineNumbers: "comments",
 *     relativeUrls: false,
 *     useFileCache: true,
 *     paths: [], // include paths ['PATH1', 'PATH2']
 *     rewriteUrls: 'all',
 *     urlArgs: '',
 *     globalVars: {
 *       var1: '"quoted value"',
 *       var2: 'regular value'
 *     },
 *     modifyVars: null,
 *     rootpath: "", // ":/a.com/"
 *     math: 1,
 *     javascriptEnabled: false,
 *     depends: false,
 *     color: true,
 *     strictUnits: true,
 *     lint: true,
 *     compress: true,
 *     insecure: false,
 *     plugins: [],
 *     sourceMap: {
 *       outputFilename: 'file.map',
 *       sourceMapRootpath: 'dist/',
 *       sourceMapBasepath: 'less-files/',
 *       sourceMapFileInline: false,
 *       outputSourceFiles: true
 *     }
 *   }]
 * @return {*} 
 */
module.exports.parseLess = function parseLess(str, callback,
  options = {
    env: "production",
    logLevel: 2,
    errorReporting: "console",
    async: false,
    fileAsync: false,
    poll: 1000,
    functions: {},
    dumpLineNumbers: "comments",
    relativeUrls: false,
    useFileCache: true,
    paths: [], // include paths ['PATH1', 'PATH2']
    rewriteUrls: 'all',
    urlArgs: '',
    globalVars: {
      var1: '"quoted value"',
      var2: 'regular value'
    },
    modifyVars: null,
    rootpath: "", // ":/a.com/"
    math: 1,
    javascriptEnabled: false,
    depends: false,
    color: true,
    strictUnits: true,
    lint: true,
    compress: true,
    insecure: false,
    plugins: [],
    sourceMap: {
      outputFilename: 'file.map',
      sourceMapRootpath: 'dist/',
      sourceMapBasepath: 'less-files/',
      sourceMapFileInline: false,
      outputSourceFiles: true
    }
  }) {
  const lessParser = require("less").Parser();
  return lessParser.parse(str, callback, options);
}

/**
 *
 *
 * @param {*} obj
 * @param {string} [options={
 *     env: "production",
 *     logLevel: 2,
 *     errorReporting: "console",
 *     async: false,
 *     fileAsync: false,
 *     poll: 1000,
 *     functions: {},
 *     dumpLineNumbers: "comments",
 *     relativeUrls: false,
 *     useFileCache: true,
 *     paths: [], // include paths ['PATH1', 'PATH2']
 *     rewriteUrls: 'all',
 *     urlArgs: '',
 *     globalVars: {
 *       var1: '"quoted value"',
 *       var2: 'regular value'
 *     },
 *     modifyVars: null,
 *     rootpath: "", // ":/a.com/"
 *     math: 1,
 *     javascriptEnabled: false,
 *     depends: false,
 *     color: true,
 *     strictUnits: true,
 *     lint: true,
 *     compress: true,
 *     insecure: false,
 *     plugins: [],
 *     sourceMap: {
 *       outputFilename: 'file.map',
 *       sourceMapRootpath: 'dist/',
 *       sourceMapBasepath: 'less-files/',
 *       sourceMapFileInline: false,
 *       outputSourceFiles: true
 *     }
 *   }]
 * @param {*} callback
 * @return {*} 
 */
module.exports.stringifyLess = function stringifyLess(obj,
  options = {
    env: "production",
    logLevel: 2,
    errorReporting: "console",
    async: false,
    fileAsync: false,
    poll: 1000,
    functions: {},
    dumpLineNumbers: "comments",
    relativeUrls: false,
    useFileCache: true,
    paths: [], // include paths ['PATH1', 'PATH2']
    rewriteUrls: 'all',
    urlArgs: '',
    globalVars: {
      var1: '"quoted value"',
      var2: 'regular value'
    },
    modifyVars: null,
    rootpath: "", // ":/a.com/"
    math: 1,
    javascriptEnabled: false,
    depends: false,
    color: true,
    strictUnits: true,
    lint: true,
    compress: true,
    insecure: false,
    plugins: [],
    sourceMap: {
      outputFilename: 'file.map',
      sourceMapRootpath: 'dist/',
      sourceMapBasepath: 'less-files/',
      sourceMapFileInline: false,
      outputSourceFiles: true
    }
  },
  callback) {
  const less = require("less");
  return less.render(obj, options, callback || function (error, output) { });
}

module.exports.Parsers = function ParserFormats() {

  this.ini = function (str) {
    return parseINI(str);
  }

  this.tsv = function (str) {
    return parseTsv(str);
  }

  this.toml = function (str) {
    return parseToml(str);
  }

  this.dotenv = function (str) {
    return parseDotenv(str);
  }

  this.yaml = function (str) {
    return parseYAML(str);
  }

  this.yml = function (str) {
    return parseYAML(str);
  }

  this.xml = function (str) {
    return parseXML(str);
  }

  this.json = function (str) {
    return parseJSON(str);
  }

  this.css = function (str) {
    return parseCss(str);
  }

  this.less = function (str) {
    return parseLess(str);
  }

  this.scss = function (str) {
    return parseSCSS(str);
  }

  this.sass = function (str) {
    return parseSASS(str);
  }

  this.md = function (obj) {
    return parseMd(obj);
  }

  this.html = function (obj) {
    return parseHTML(obj);
  }

  this.conf = function (obj) {
    return parseConf(obj);
  }

}

module.exports.Convertors = function ConvertorFormats() {

  this.ini = function (obj) {
    return stringifyINI(obj);
  }

  this.tsv = function (obj) {
    return stringifyTsv(obj);
  }

  this.toml = function (obj) {
    return stringifyToml(obj);
  }

  this.dotenv = function (obj) {
    return stringifyDotenv(obj);
  }

  this.yaml = function (obj) {
    return stringifyYAML(obj);
  }

  this.yml = function (obj) {
    return stringifyYAML(obj);
  }

  this.xml = function (obj) {
    return stringifyXML(obj);
  }

  this.json = function (obj) {
    return stringifyJSON(obj);
  }

  this.css = function (obj) {
    return stringifyCss(obj);
  }

  this.less = function (obj) {
    return stringifyLess(obj);
  }

  this.scss = function (obj) {
    return stringifySCSS(obj);
  }

  this.sass = function (obj) {
    return stringifySASS(obj);
  }

  this.md = function (obj) {
    return stringifyMd(obj);
  }

  this.html = function (obj) {
    return stringifyHTML(obj);
  }

  this.conf = function (obj) {
    return stringifyConf(obj);
  }

}

