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

/**
 *
 *
 * @param {*} str
 */
module.exports.parseHTML = function parseHTML(str) {

}

/**
 *
 *
 * @param {*} obj
 */
module.exports.stringifyHTML = function stringifyHTML(obj) {

}

/**
 *
 *
 * @param {*} str
 * @return {*} 
 */
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

/**
 *
 *
 * @param {*} obj
 * @return {*} 
 */
module.exports.stringifyINI = function stringifyINI(obj) {
  let ini = require('multi-ini');
  let str = new ini.Serializer(object);
  return str;
}

/**
 *
 *
 * @param {*} file
 * @param {*} options
 * @param {*} readOptions
 * @return {*} 
 */
module.exports.loadINIWithFilters = function loadINIWithFilters(file, options, readOptions) {
  let ini = require("multi-ini");
  let parser = new ini.Class(options || {});
  return parser.read(file, readOptions || { encoding: 'utf8' });
}

/**
 *
 *
 * @param {*} file
 * @param {*} object
 * @param {*} options
 * @return {*} 
 */
module.exports.writeToINIWithFilters = function writeToINIWithFilters(file, object, options) {
  let ini = require('multi-ini');
  ini.write(file, object, options || { encoding: 'utf8' });
  return true;
}

/**
 *
 *
 * @param {*} str
 */
module.exports.parseSASS = function parseSASS(str) {

}

/**
 *
 *
 * @param {*} obj
 */
module.exports.stringifySASS = function stringifySASS(obj) {

}

/**
 *
 *
 * @param {*} obj
 */
module.exports.sass2less = function SASS2LESS(obj) {

}

/**
 *
 *
 * @param {*} obj
 */
module.exports.less2sass = function less2sass(obj) {

}

/**
 *
 *
 * @param {*} str
 */
module.exports.parseConf = function parseConf(str) {

}

/**
 *
 *
 * @param {*} obj
 */
module.exports.stringifyConf = function stringifyConf(obj) {

}

/**
 *
 *
 * @param {*} str
 */
module.exports.parseSCSS = function parseSCSS(str) {

}

/**
 *
 *
 * @param {*} obj
 */
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
 * @param {*} str
 */
module.exports.parseYml = function parseYml(str) {

}

/**
 *
 *
 * @param {*} obj
 */
module.exports.stringifyYml = function stringifyYml(obj) {


}

// https://www.npmjs.com/package/@js-bits/dom-parser

/**
 *
 *
 * @param {*} str
 */
module.exports.parseDomXML = function parseDomXML(str) {
  const parse = require('@js-bits/dom-parser');
  return parse(str);
}

/**
 *
 *
 * @param {*} obj
 */
module.exports.stringifyDomXML = function stringifyDomXML(obj) {
  
}

/**
 *
 *
 * @param {*} str
 */
module.exports.parseDomHTML = function parseDomHTML(str) {

}

/**
 *
 *
 * @param {*} obj
 */
module.exports.stringifyDomHTML = function stringifyDomHTML(obj) {

}

/**
 *
 *
 * @param {*} str
 */
module.exports.parseDomMd = function parseDomMd(str) {

}

/**
 *
 *
 * @param {*} obj
 */
module.exports.stringifyDomMd = function stringifyDomMd(obj) {

}

/**
 *
 * https://www.npmjs.com/package/xml-js
 *
 * @param {*} str
 */
module.exports.parseXml = function parseXml(str, options) {
  var convert = require('xml-js');
  return convert.xml2js(str, { ignoreComments: false, alwaysChildren: true, ...options });
}

/**
 *
 * https://www.npmjs.com/package/xml-js
 *
 * @param {*} obj
 */
module.exports.stringifyXml = function stringifyXml(obj, options) {
  var convert = require('xml-js');
  return convert.js2xml(obj, options);
}

/**
 *
 *
 * @param {*} str
 */
module.exports.parseMd = function parseMd(str) {

}

/**
 *
 *
 * @param {*} obj
 */
module.exports.stringifyMd = function stringifyMd(obj) {

}

/**
 *
 *
 * @param {*} str
 * @returns {object} json object of html
 * 
 */
module.exports.parseHtml = async function parseHtml(str, options) {
  // consider using this for md, markdown files if works
  const { parse, parseDefaults } = require('himalaya');
  return parse(html, { ...parseDefaults, includePositions: true, encoding: 'utf8' });
}

/**
 *
 *
 * @param {*} obj
 * @returns {string} html string 
 */
module.exports.stringifyHtml = function stringifyHtml(obj, filename) {
  const { stringify, parseDefaults } = require('himalaya');
  return stringify(obj, { ...parseDefaults, includePositions: true, encoding: 'utf8' });
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

/**
 *
 *
 * @param {*} str
 */
module.exports.parseSys = function parseSys(str) {

}

/**
 *
 *
 * @param {*} obj
 */
module.exports.stringifySys = function stringifySys(obj) {

}

/**
 *
 *
 * @param {*} str
 */
module.exports.parseDotenv = function parseDotenv(str) {

}

/**
 *
 *
 * @param {*} obj
 */
module.exports.stringifyDotenv = function stringifyDotenv(obj) {

}

/**
 *
 *
 * @param {*} str
 */
module.exports.parseToml = function parseToml(str) {
  var toml = require('toml');
  return toml.parse(str);
}

/**
 *
 *
 * @param {*} filename
 */
module.exports.parseStreamToml = function parseToml(filename) {
  var toml = require('toml');
  var concat = require('concat-stream');
  var fs = require('fs');
  return new Promise((resolve, reject) => {
    try {
      fs.createReadStream(filename, 'utf8').pipe(concat(function (data) {
        resolve(toml.parse(data));
      }));
    } catch (e) {
      reject(e);
    }
  });
}

/**
 *
 *
 * @param {*} obj
 */
module.exports.stringifyToml = function stringifyToml(obj) {
  var toml = require('toml');
  return toml.compile(obj);
}

/**
 *
 *
 * @param {*} str
 * @param {string} [seperator="|"]
 * @return {*} 
 */
module.exports.parseTsv = function parseTsv(str, headers, seperator = "\t") {
  // var TSV = require('tsv');
  // // var TSV = require('xsv').tsv;
  // var PSV = new TSV.Parser(seperator);
  // return PSV.parse(str);
  // 
  // https://www.npmjs.com/package/tsvtojson?activeTab=readme
  try {
    let header = headers || [];
    let json = [];
    str.split('\n').forEach((line, index) => {
      if (!index && !header.length) {
        header = line.split(seperator);
      } else {
        let obj = {}
        line.split(seperator).forEach((value, index) => {
          value ? obj[header[index]] = value : '';
        });
        Object.keys(obj).length ? json.push(obj) : '';
      }
    });
    return json;
  }
  catch (err) {
    return err;
  }
}

/**
 *
 *
 * @param {*} obj
 * @param {string} [seperator="|"]
 * @return {*} 
 */
module.exports.stringifyTsv = function stringifyTsv(obj, headers, seperator = "\t") {
  // var TSV = require('tsv');
  // // var TSV = require('xsv').tsv;
  // var PSV = new TSV.Parser(seperator);
  // return PSV.stringify(obj);
  let header = headers || [];
  let json = obj;
  let tsv = "";
  if (Array.isArray(json)) {
    for (let i = 0; i < json.length; i++) {
      for (let j = 0; j < headers.length; j++) {
        if (j === headers.length - 1) {
          tsv = tsv + json[i][headers[j]] + seperator;
        } else {
          tsv = tsv + json[i][headers[j]] + "\n";
        }
      }
    }
    return tsv;
  }
  throw new Error("JSON has to be a TSV structured JSON Array Object");
}

/**
 *
 *
 * @param {*} str
 * @param {string} [seperator=","]
 * @return {*} 
 */
module.exports.parseCsv = function parseCsv(str, seperator = ",") {
  // https://github.com/adaltas/node-csv/blob/master/demo/cjs/lib/csv_sync.js
  // var Parser = require('tsv').Parser
  // var CSV = new Parser(seperator, { header: false })
  // return CSV.parse(str);
  // const parse = require('csv-parse/sync');
  const parse = require('csv/sync');
  return csv.parse(str, {
    delimiter: seperator
  });
}

/**
 *
 *
 * @param {*} obj
 * @param {string} [seperator=","]
 * @return {*} 
 */
module.exports.stringifyCsv = function stringifyCsv(obj, seperator = ",") {
  // https://github.com/adaltas/node-csv/blob/master/demo/cjs/lib/csv.js
  // var Parser = require('tsv').Parser
  // var CSV = new Parser(seperator, { header: false })
  // return CSV.stringify(obj)
  const csv = require('csv/sync');
  return csv.stringify(obj, {
    quoted: true,
    encoding: 'utf8' // Support for Node.js 8
  })
}

/**
 *
 *
 * @param {*} str
 */
module.exports.parsePdf = function parsePdf(str) {

}

/**
 *
 *
 * @param {*} obj
 */
module.exports.stringifyPdf = function stringifyPdf(obj) {

}

// cd node_modules/pdf2html/vendor
// # These URLs come from https://github.com/shebinleo/pdf2html/blob/master/postinstall.js#L6-L7
// wget https://archive.apache.org/dist/pdfbox/2.0.27/pdfbox-app-2.0.27.jar
// wget https://archive.apache.org/dist/tika/2.6.0/tika-app-2.6.0.jar

/**
 * Generates the PDF file into a HTML file
 *
 * @param {*} file
 */
module.exports.pdfToHTML = async function pdfToHTML(file, pages = true) {
  const pdf2html = require('pdf2html');
  return (!!pages) ? await pdf2html.html(file) : await pdf2html.pages(file);
}

/**
 * Generates the PDF file into a text file
 *
 * @param {*} file
 */
module.exports.pdfToText = async function pdfToText(file, pages = true) {
  const pdf2html = require('pdf2html');
  return (!!pages) ? await pdf2html.text(file) : await pdf2html.pages(file, { pages: pages });
}

/**
 * Generates the PDF file meta 
 *
 * @param {*} file
 */
module.exports.pdfToMetadata = async function pdfToMetadata(file) {
  const pdf2html = require('pdf2html');
  return await pdf2html.meta(file);
}

/**
 * Creates the first page (default) PDF file thumbnail 
 *
 * @param {*} file
 */
module.exports.pdfThumbnail = async function pdfThumbnail(file, options = { page: 1, imageType: 'png', width: 160, height: 226 }) {
  const pdf2html = require('pdf2html');
  return await pdf2html.thumbnail(file, { ...options });
}

/**
 *
 *
 * @param {*} str
 */
module.exports.parsePdfMd = async function parsePdfMd(file) {

}

/**
 *
 *
 * @param {*} obj
 */
module.exports.stringifyPdfMd = async function stringifyPdfMd(obj) {

}

/**
 * Creates a PDF Doc Nodejs File Writer or PDF Doc Browser Blob Writer 
 *    and return the PDF doc object for manipulating PDF files
 *
 * @param {*} file
 * @param {*} writerType
 * @returns pdfDocFsWriter | pdfDocBrowserBlobWriter https://www.npmjs.com/package/pdfkit
 */
module.exports.pdfkitWrite = async function pdfkitWrite(file, writerType = "file") {
  const fs = require('fs');
  const pdfkit = require('pdfkit');
  const blobStream = require('blob-stream');
  let stream;
  let doc = new PDFDocument();
  if (!!writerType === "file") {
    stream = doc.pipe(fs.createWriteStream(file));
    stream.finished();
    fs.finished(stream, (err) => {
      if (err) { console.log("[Error]: Error Occured in file write stream: \n") }
      throw new Error(JSON.stringify(err));
    });
  } else if (!!writerType === "blob") {
    stream = doc.pipe(blobStream());
    stream.on('finish', function () {
      const blob = stream.toBlob('application/pdf');
      const url = stream.toBlobURL('application/pdf');
      !!iframe ? iframe.src = url : null;
    });
  }
  return doc;
}

/**
 *
 *
 * @param {*} str
 */
module.exports.parseXls = function parseXls(str) {

}

/**
 *
 *
 * @param {*} obj
 */
module.exports.stringifyXls = function stringifyXls(obj) {

}

/**
 * use a SASS string to convert back to SASS JS OBject/ AST
 *
 * @param {*} str
 */
module.exports.parseSASS = function parseSASS(str) {
  const sass = require("sass");

}

/**
 * use a SASS JS OBject/ AST to convert back to SASS string
 *
 * @param {*} obj
 */
module.exports.stringifySASS = function stringifySASS(obj) {
  const sass = require("sass");

}

/**
 *  use SASS and convert SASS string to CSS string
 *
 * @param {*} str
 */
module.exports.compileSASS = function compileSASS(scssFilename) {
  const sass = require('sass');
  return sass.compile(scssFilename);
}

// /**
//  *
//  *
//  * @param {string} str
//  * @param { function } callback
//  * @param {object | undefined} [options={
//  *     env: "production",
//  *     logLevel: 2,
//  *     errorReporting: "console",
//  *     async: false,
//  *     fileAsync: false,
//  *     poll: 1000,
//  *     functions: {},
//  *     dumpLineNumbers: "comments",
//  *     relativeUrls: false,
//  *     useFileCache: true,
//  *     paths: [], // include paths ['PATH1', 'PATH2']
//  *     rewriteUrls: 'all',
//  *     urlArgs: '',
//  *     globalVars: {
//  *       var1: '"quoted value"',
//  *       var2: 'regular value'
//  *     },
//  *     modifyVars: null,
//  *     rootpath: "", // ":/a.com/"
//  *     math: 1,
//  *     javascriptEnabled: false,
//  *     depends: false,
//  *     color: true,
//  *     strictUnits: true,
//  *     lint: true,
//  *     compress: true,
//  *     insecure: false,
//  *     plugins: [],
//  *     sourceMap: {
//  *       outputFilename: 'file.map',
//  *       sourceMapRootpath: 'dist/',
//  *       sourceMapBasepath: 'less-files/',
//  *       sourceMapFileInline: false,
//  *       outputSourceFiles: true
//  *     }
//  *   }]
//  * @return {*} 
//  */
// module.exports.parseLess = function parseLess(str, callback, options = {}) {
//   options = (!!Object.keys(options).length) ? options : {
//     env: "production",
//     logLevel: 2,
//     errorReporting: "console",
//     async: false,
//     fileAsync: false,
//     poll: 1000,
//     functions: {},
//     dumpLineNumbers: "comments",
//     relativeUrls: false,
//     useFileCache: true,
//     paths: [], // include paths ['PATH1', 'PATH2']
//     rewriteUrls: 'all',
//     urlArgs: '',
//     globalVars: {
//       var1: '"quoted value"',
//       var2: 'regular value'
//     },
//     modifyVars: null,
//     rootpath: "", // ":/a.com/"
//     math: 1,
//     javascriptEnabled: false,
//     depends: false,
//     color: true,
//     strictUnits: true,
//     lint: true,
//     compress: true,
//     insecure: false,
//     plugins: [],
//     sourceMap: {
//       outputFilename: 'file.map',
//       sourceMapRootpath: 'dist/',
//       sourceMapBasepath: 'less-files/',
//       sourceMapFileInline: false,
//       outputSourceFiles: true
//     }
//   }
//   const lessParser = require("less").Parser();
//   return lessParser.parse(str, callback, options);
// }

/**
 *
 *
 * @param {object} obj
 * @param {object | undefined} { from: 'app.less' }
 * @param {function} callback
 * @return {*} 
 */
module.exports.parseLess = function parseLess(str, options = { from: 'app.less' }, callback) {
  const less = require("postcss");
  return less.parse(str, { from: 'app.less' });
}

/**
 *
 *
 * @param {object} obj
 * @param {object | undefined} 
 * @param {function} callback
 * @return {*} 
 */
module.exports.stringifyLess = function stringifyLess(obj, options = {}, callback) {

}

/**
 *
 *
 * @param {object} obj
 * @param {object | undefined} [options={
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
 * @param {function} callback
 * @return {*} 
 */
module.exports.compileLess = function compileLess(obj, options = {}, callback) {
  options = (!!Object.keys(options).length) ? options : {
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
  }
  const less = require("less");
  return less.render(obj, options, callback || function (error, output) { });
}

/**
 * using postcss and postcss-less to compile to css string
 *
 * @param {*} str
 * @param {*} [options={}]
 * @param {*} callback
 * @return {*} 
 */
module.exports.compileLess = async function compileLess(str, options = { syntax: less }, callback) {
  const postcss = require("postcss");
  const less = require('postcss-less');
  return await postcss(plugins).process(str, { syntax: less });
}

/**
 *
 *
 */
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

  this.conf = function (obj) {
    return parseConf(obj);
  }

  this.csv = function (str) {
    return parseCsv(str);
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

  this.pdf = function (obj) {
    return parseConf(obj);
  }

}

/**
 *
 *
 */
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

  this.conf = function (obj) {
    return stringifyConf(obj);
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

  this.csv = function (obj) {
    return stringifyCsv(obj);
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

  this.pdf = function (obj) {
    return parseConf(obj);
  }

}

