/**
 * 
 * Package: jsparsers
 * Author: Ganesh B
 * Description: 
 * Install: npm i jsparsers --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/jsparsers
 * File: src/ini.js
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
function IniParser() {

    interfaces.InterfaceReader.call(this);

    /**
     *
     *
     * @param {*} file
     * @param {*} options
     * @param {*} readOptions
     * @return {*} 
     * 
     * https://www.npmjs.com/package/multi-ini
     * 
     */
    this.loadWithFilters = function (file, options, readOptions) {
        let ini = require("multi-ini");
        let parser = new ini.Class(options || {});
        return parser.read(file, readOptions || { encoding: 'utf8' });
    }

    /**
     *
     *
     * @param {*} lines
     * @return {*} 
     * 
     * https://www.npmjs.com/package/multi-ini
     * 
     */
    this.parse = function (lines) {
        return base.Parsers().ini(lines);
    }

    /**
     *
     *
     * @param {*} object
     * @return {*} 
     * 
     * https://www.npmjs.com/package/multi-ini
     * 
     */
    this.serialize = function (object) {
        return base.Convertors().ini(object);
    }

    /**
     *
     *
     * @param {*} file
     * @param {*} object
     * @param {*} options
     * @return {*} 
     * 
     * https://www.npmjs.com/package/multi-ini
     * 
     */
    this.writeWithFilters = function (file, object, options) {
        let ini = require('multi-ini');
        ini.write(file, object, options || { encoding: 'utf8' });
        return true;
    }

}


function IniConvertor(object) {

    interfaces.InterfaceJSObjectConvertor.call(this, object);
    IniParser.call(this);
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


function Ini(object) {
    
    interfaces.InterfaceJSObjectParser.call(this, object);
    IniParser.call(this);
    IniConvertor.call(this, object);

}


module.exports.Ini = Ini;
module.exports.IniConvertor = IniConvertor;
module.exports.IniParser = IniParser;
