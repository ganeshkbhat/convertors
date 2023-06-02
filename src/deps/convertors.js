/**
 * 
 * Package: jsparsers
 * Author: Ganesh B
 * Description: 
 * Install: npm i jsparsers --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/jsparsers
 * File: .js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';


var Interfaces = require("./interfaces");

var ini = require("./ini.js");
var env = require("./env.js");
var yaml = require("./yaml.js");
var xml = require("./xml.js");
var less = require("./less.js");
var sass = require("./sass.js");
var css = require("./css.js");


function js2Format(jsObject) {

    Interfaces.InterfaceJSObjectConvertor.call(this, jsObject);

    this.ini = function () {

    }

    this.dotenv = function () {

    }

    this.yaml = function () {

    }

    this.yml = function () {

    }

    this.xml = function () {

    }

    this.json = function () {

    }

}


function js2FormatCss(jsObject) {

    Interfaces.InterfaceJSObjectConvertorCSS.call(this, jsObject);

    this.css = function () {

    }

    this.less = function () {

    }

    this.scss = function () {

    }

    this.sass = function () {

    }
}


function format2js() {

    Interfaces.InterfaceJSObjectParser.call(this, jsObject);

    this.ini = function () {

    }

    this.dotenv = function () {

    }

    this.yaml = function () {

    }

    this.yml = function () {

    }

    this.xml = function () {

    }

    this.json = function () {

    }
}


function formatCss2js() {

    Interfaces.InterfaceJSObjectParserCSS.call(this, jsObject);

    this.css = function () {

    }

    this.less = function () {

    }

    this.scss = function () {

    }

    this.sass = function () {

    }

}

module.exports.format2js = format2js;
module.exports.formatCss2js = formatCss2js;
module.exports.js2Format = js2Format;
module.exports.js2FormatCss = js2FormatCss;

