/**
 * 
 * Package: jsparsers
 * Author: Ganesh B
 * Description: 
 * Install: npm i jsparsers --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/jsparsers
 * File: src/sys.js
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
function Sys() {

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
        if (!typeof lines === "string") throw new Error("lines is not a string object");
        
        if (v.endsWith("\r\n")) {
            lines = lines.split("\r\n");
        } else if (v.endsWith("\n")) {
            lines = lines.split("\n");
        } else if (!!Array.isArray(lines)) {
            lines = lines;
        } else {
            lines = [lines];
        }
        
        let ini = require("multi-ini");
        let parser = new ini.Parser();
        return parser.parse(lines);
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
        let ini = require('multi-ini');
        let str = new ini.Serializer(object);
        return str;
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


function SysConvertors(object) {

    interfaces.InterfaceJSObjectConvertor.call(this, object);
    Sys.call(this);
    
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
}


function SysParsers(object) {
    
    interfaces.InterfaceJSObjectParser.call(this, object);
    Sys.call(this);
    
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
}


module.exports.Sys = Sys;
module.exports.SysConvertors = SysConvertors;
module.exports.SysParsers = SysParsers;
