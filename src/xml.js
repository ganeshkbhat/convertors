/**
 * 
 * Package: jsparsers
 * Author: Ganesh B
 * Description: 
 * Install: npm i jsparsers --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/jsparsers
 * File: src/xml.js
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
function XmlParser() {

    interfaces.InterfaceReader.call(this);

    this.parse = function (str) {
        return base.Parsers().xml(str);
    }

    this.serialize = function (object) {
        return base.Convertors().xml(object);
    }

}

function XmlConvertor(object) {
    
    interfaces.InterfaceJSObjectConvertor.call(this, object);
    XmlParser.call(this);
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

}


function Xml(object) {

    interfaces.InterfaceJSObjectParser.call(this, object);
    XmlParser.call(this);
    XmlConvertor.call(this, object);

}


module.exports.Xml = Xml;
module.exports.XmlConvertor = XmlConvertor;
module.exports.XmlParser = XmlParser;

