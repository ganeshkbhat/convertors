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


var interfaces = require("./interfaces");

const css = require("./css");
const dotenv = require("./dotenv");
const ini = require("./ini");
const less = require("./less");
const sass = require("./sass");
const scss = require("./scss");
const yaml = require("./yaml");

/**
 *
 *
 */
function HTML() {

    interfaces.InterfaceReader.call(this);

    this.load = function (file, options, readOptions) {
        return
    }

    this.parse = function (lines, options) {
        return
    }

    this.serialize = function (object, options) {
        return
    }

    this.write = function (file, object, options, writeOptions) {
        return
    }
}

function HTMLConvertors() {
    
    interfaces.InterfaceJSObjectConvertor.call(this, object);
    HTML.call(this, object);

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


function HTMLParsers() {

    interfaces.InterfaceJSObjectParser.call(this, object);
    HTML.call(this, object);

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


module.exports.HTML = HTML;
module.exports.HTMLConvertors = HTMLConvertors;
module.exports.HTMLParsers = HTMLParsers;

