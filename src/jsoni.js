/**
 * 
 * Package: jsparsers
 * Author: Ganesh B
 * Description: 
 * Install: npm i jsparsers --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/jsparsers
 * File: src/jsoni.js
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
function JSONIParser() {

    interfaces.InterfaceReader.call(this);

    this.parse = function (str) {
        return base.Parsers().json(str);
    }

    this.serialize = function (object) {
        return base.Convertors().json(object);
    }

}


function JSONIConvertor(object) {

    interfaces.InterfaceJSObjectConvertorCSS.call(this, object);
    JSONIParser.call(this);
    base.Convertors.call(this);

    // this.ini = function () {

    // }

    // this.tsv = function () {

    // }

    // this.toml = function () {

    // }

    // this.sys = function () {

    // }

    // this.dotenv = function () {

    // }

    // this.yaml = function () {

    // }

    // this.yml = function () {

    // }

    // this.xml = function () {

    // }

    // this.json = function () {

    // }

    // this.conf = function () {

    // }

    // this.css = function () {

    // }

    // this.less = function () {

    // }

    // this.scss = function () {

    // }

    // this.sass = function () {

    // }
}


function JSONI(object) {

    interfaces.InterfaceJSObjectParser.call(this, object);
    JSONIParser.call(this);
    JSONIConvertor.call(this, object);
  
}


module.exports.JSONI = JSONI;
module.exports.JSONIConvertor = JSONConvertor;
module.exports.JSONIParser = JSONParser;
