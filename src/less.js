/**
 * 
 * Package: jsparsers
 * Author: Ganesh B
 * Description: 
 * Install: npm i jsparsers --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/jsparsers
 * File: src/less.js
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
function LessParser() {

    interfaces.InterfaceReader.call(this);

    this.parse = function (str) {
        return base.Parsers().less(str);
    }

    this.serialize = function (object) {
        return base.Convertors().less(object);
    }

}


function LessConvertor(object) {

    interfaces.InterfaceJSObjectConvertorCSS.call(this, object);
    LessParser.call(this);
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


function Less(object) {

    interfaces.InterfaceJSObjectParser.call(this, object);
    LessParser.call(this);
    LessConvertor.call(this, object)
    
}


module.exports.Less = Less;
module.exports.LessConvertor = LessConvertor;
module.exports.LessParser = LessParser;
