/**
 * 
 * Package: jsparsers
 * Author: Ganesh B
 * Description: 
 * Install: npm i jsparsers --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/jsparsers
 * File: src/conf.js
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
function ConfParser() {

    interfaces.InterfaceReader.call(this);

    this.parse = function (str) {
        return base.Parsers().conf(str);
    }

    this.serialize = function (object) {
        return base.Convertors().conf(object);
    }

}

/**
 *
 *
 * @param {*} object
 */
function ConfConvertor(object) {

    interfaces.InterfaceJSObjectConvertor.call(this, object);
    ConfParser.call(this);
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

/**
 *
 *
 * @param {*} object
 */
function Conf(object) {

    interfaces.InterfaceJSObjectParser.call(this, object);
    ConfParser.call(this);
    ConfConvertor.call(this, object);

}


module.exports.Conf = Conf;
module.exports.ConfConvertor = ConfConvertor;
module.exports.ConfParser = ConfParser;

