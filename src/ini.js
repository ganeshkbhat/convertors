/**
 * 
 * Package: jsparsers
 * Author: Ganesh B
 * Description: 
 * Install: npm i jsparsers --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/jsparsers
 * File: .js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';


var interfaces = require("./interfaces");

var ini = require("./ini.js");
var env = require("./env.js");
var yaml = require("./yaml.js");
var xml = require("./xml.js");
var less = require("./less.js");
var sass = require("./sass.js");
var css = require("./css.js");
var html = require("./html.js");
var md = require("./md.js");
var sys = require("./sys.js");
var toml = require("./toml.js");
var tsv = require("./tsv.js");


/**
 *
 *
/**
 *
 *
 */
function Ini() {

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


function IniConvertors(object) {

    interfaces.InterfaceJSObjectConvertor.call(this, object);
    Ini.call(this);
    
    this.ini = function () {

    }

    this.tsv = function () {

    }

    this.toml = function () {

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


function IniParsers(object) {
    
    interfaces.InterfaceJSObjectParser.call(this, object);
    Ini.call(this);
    
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


module.exports.Ini = Ini;
module.exports.IniConvertors = IniConvertors;
module.exports.IniParsers = IniParsers;
