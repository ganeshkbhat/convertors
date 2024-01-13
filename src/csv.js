/**
 * 
 * Package: jsparsers
 * Author: Ganesh B
 * Description: 
 * Install: npm i jsparsers --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/jsparsers
 * File: src/Csv.js
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
function CsvParser() {

    interfaces.InterfaceReader.call(this);
    
    /**
     *
     *
     * @param {*} str
     * @return {*} 
     * 
     * 
     */
    this.parse = function (str) {
        return base.Parsers().csv(str);
    }

    /**
     *
     *
     * @param {*} object
     * @return {*} 
     * 
     */
    this.serialize = function (object, options) {
        return base.Convertors().csv(object, options);
    }
}

/**
 *
 *
 * @param {*} object
 */
function CsvConvertor(object) {

    interfaces.InterfaceJSObjectConvertor.call(this, object);
    CsvParser.call(this);
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
function Csv(object) {

    interfaces.InterfaceJSObjectParser.call(this, object);
    CsvParser.call(this);
    CsvConvertor.call(this, object);

}

module.exports.Csv = Csv;
module.exports.CsvConvertor = CsvConvertor;
module.exports.CsvParser = CsvParser;
