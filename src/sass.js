/**
 * 
 * Package: jsparsers
 * Author: Ganesh B
 * Description: 
 * Install: npm i jsparsers --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/jsparsers
 * File: src/sass.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';


var interfaces = require("./interfaces");
var base = require("./base");


/**
 *
 *
 */
function Sass() {

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


function SassConvertors() {

    interfaces.InterfaceJSObjectConvertorCSS.call(this, object);
    Sass.call(this, object);

    this.ini = function () {

    }

    this.tsv = function () {

    }

    this.toml = function () {

    }

    this.sys = function () {

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

    this.css = function () {

    }

    this.less = function () {

    }

    this.scss = function () {

    }

    this.sass = function () {

    }
    
}


function SassParsers() {
    
    interfaces.InterfaceJSObjectParserCSS.call(this, object);
    Sass.call(this, object);

    this.ini = function () {

    }

    this.tsv = function () {

    }

    this.toml = function () {

    }

    this.sys = function () {

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

    this.css = function () {

    }

    this.less = function () {

    }

    this.scss = function () {

    }

    this.sass = function () {

    }
}


module.exports.Sass = Sass;
module.exports.SassConvertors = SassConvertors;
module.exports.SassParsers = SassParsers;

