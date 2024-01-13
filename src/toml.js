/**
 * 
 * Package: jsparsers
 * Author: Ganesh B
 * Description: 
 * Install: npm i jsparsers --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/jsparsers
 * File: src/toml.js
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
/**
 *
 *
 */
function TomlParser() {

    interfaces.InterfaceReader.call(this);

    /**
     *
     *
     * @param {*} str
     * @return {*} 
     * 
     * https://www.npmjs.com/package/multi-ini
     * 
     */
    this.parse = function (str) {
        return base.Parser().TOML(str);
    }

    /**
     *
     *
     * @param {*} object
     * @return {*} 
     * 
     * 
     */
    this.serialize = function (object) {
        return base.Convertors().TOML(object);
    }

}


function TomlConvertor(object) {

    interfaces.InterfaceJSObjectConvertor.call(this, object);
    TomlParser.call(this);
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


function Toml(object) {
    
    interfaces.InterfaceJSObjectParser.call(this, object);
    TomlParser.call(this);
    TomlConvertor.call(this, object);
    
}


module.exports.Toml = Toml;
module.exports.TomlConvertor = TomlConvertor;
module.exports.TomlParser = TomlParser;
