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
function SassParser() {

    interfaces.InterfaceReader.call(this);

    this.parse = function (str) {
        return base.Parsers().sass(str);
    }

    this.serialize = function (object) {
        return base.Convertors().sass(object);
    }

}


function SassConvertor(object) {

    interfaces.InterfaceJSObjectConvertorCSS.call(this, object);
    SassParser.call(this);
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


function Sass(object) {
    
    interfaces.InterfaceJSObjectParser.call(this, object);
    SassParser.call(this);
    SassConvertor.call(this, object);

}


module.exports.Sass = Sass;
module.exports.SassConvertor = SassConvertor;
module.exports.SassParser = SassParser;

