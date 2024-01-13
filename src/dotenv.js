/**
 * 
 * Package: jsparsers
 * Author: Ganesh B
 * Description: 
 * Install: npm i jsparsers --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/jsparsers
 * File: src/dotenv.js
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
function DotenvParser() {

    interfaces.InterfaceReader.call(this);

    this.parse = function (str) {
        return base.Parsers().dotenv(str);
    }

    this.serialize = function (object) {
        return base.Convertors().dotenv(object);
    }

}


function DotenvConvertor(object) {

    interfaces.InterfaceJSObjectConvertor.call(this, object);
    DotenvParser.call(this);
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


function Dotenv(object) {

    interfaces.InterfaceJSObjectParser.call(this, object);
    DotenvParser.call(this);
    DotenvConvertor.call(this, object);

}


module.exports.Dotenv = Dotenv;
module.exports.DotenvConvertor = DotenvConvertor;
module.exports.Dotenv = Dotenv;

