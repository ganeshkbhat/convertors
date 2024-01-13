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
function SysParser() {

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
        return base.Parsers().sys(str);
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
        return base.Convertors().sys(object);
    }

}


function SysConvertor(object) {

    interfaces.InterfaceJSObjectConvertor.call(this, object);
    SysParser.call(this);
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


function Sys(object) {
    
    interfaces.InterfaceJSObjectParser.call(this, object);
    SysParser.call(this);
    SysConvertor.call(this, object);
    
}


module.exports.Sys = Sys;
module.exports.SysConvertor = SysConvertor;
module.exports.SysParser = SysParser;
