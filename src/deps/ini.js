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
    this.load = function (file, options, readOptions) {
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
        if (v.endsWith("\r\n")) {
            lines = lines.split("\r\n");
        } else if (v.endsWith("\n")) {
            lines = lines.split("\n");
        } else {
            lines = lines;
        }
        return this.parseLines(lines);
    }

    /**
     *
     *
     * @param {*} lines : lines array
     * @return {*} 
     * 
     * https://www.npmjs.com/package/multi-ini
     * 
     */
    this.parseLines = function (lines) {
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
    this.write = function (file, object, options) {
        let ini = require('multi-ini');
        ini.write(file, object, options || { encoding: 'utf8' });
        return true;
    }

}


function IniConvertors() {

    interfaces.InterfaceJSObjectConvertor.call(this, object);

    
    this.ini = function () {

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


function IniParsers() {
    
    interfaces.InterfaceJSObjectParser.call(this, object);
    
    this.ini = function () {

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

