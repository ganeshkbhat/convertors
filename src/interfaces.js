/**
 * 
 * Package: jsparsers
 * Author: Ganesh B
 * Description: 
 * Install: npm i jsparsers --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/jsparsers
 * File: src/interfaces.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';


var getProperties = require("./implementInterface").getProperties;


const BaseReader = {
    "readFile": "function",
    "writeFile": "function",
    "load": "function",
    "serialiser": "function",
    "write": "function"
}


const BaseCSSReader = {
    "css": "function",
    "less": "function",
    "scss": "function",
    "sass": "function"
}


function InterfaceReader() {

    /**
     *
     *
     * @param {*} file
     * @param {*} readOptions
     * @return {*} 
     */
    this.readFile = function (file, readOptions) {
        var fs = require("fs");
        return fs.readFileSync(file, readOptions);
    }

    /**
     *
     *
     * @param {*} file
     * @param {*} object
     * @param {*} writeOptions
     * @return {*} 
     */
    this.writeFile = function (file, object, writeOptions) {
        var fs = require("fs");
        return fs.writeFileSync(file, object, writeOptions);
    }

    /**
     *
     *
     * @param {*} file
     * @param {*} options
     * @param {*} readOptions
     * @return {*} 
     */
    this.load = function (file, options, readOptions) {
        let str = this.readFile(file, readOptions);
        return this.parse(str, options);
    }

    /**
     *
     *
     * @param {*} file
     * @param {*} object
     * @param {*} options
     * @param {*} writeOptions
     * @return {*} 
     */
    this.write = function (file, object, options, writeOptions) {
        let str = this.serialize(object, options);
        return this.writeFile(file, str, writeOptions);
    }

    this.parse = function (str, options) {
        return new Error("InterfaceReader: ");
    }

    this.serialize = function (object, options) {
        return new Error("InterfaceReader: ");
    }

}


function InterfaceJSObjectParser(jsObject = "") {

    InterfaceReader.call(this);

    var jsobject = jsObject;

    this.set = function (jsObject) {
        jsobject = !!jsObject ? jsObject : jsobject;
        return true;
    }

    this.get = function () {
        return jsobject;
    }

    this.parse = function () {
        return new Error("InterfaceJSObjectConvertor: ")
    }

    this.serialize = function (object, options) {
        return new Error("InterfaceJSObjectConvertor: ");
    }
}


function InterfaceJSObjectConvertor(jsObject = "") {

    InterfaceReader.call(this);
    InterfaceJSObjectParser.call(this, this, jsObject);

    this.ini = function () {
        return new Error("InterfaceJSObjectConvertor: ")
    }

    this.tsv = function () {
        return new Error("InterfaceJSObjectConvertor: ")
    }

    this.toml = function () {
        return new Error("InterfaceJSObjectConvertor: ")
    }

    this.sys = function () {
        return new Error("InterfaceJSObjectConvertor: ")
    }

    this.yaml = function () {
        return new Error("InterfaceJSObjectConvertor: ")
    }

    this.yml = function () {
        return new Error("InterfaceJSObjectConvertor: ")
    }

    this.xml = function () {
        return new Error("InterfaceJSObjectConvertor: ")
    }

    this.csv = function () {
        return new Error("InterfaceJSObjectConvertor: ")
    }

    this.conf = function () {
        return new Error("InterfaceJSObjectConvertor: ")
    }

    this.json = function () {
        return new Error("InterfaceJSObjectConvertor: ")
    }
}


function InterfaceJSObjectConvertorMDHTML(jsObject = "") {

    var jsobject = jsObject;

    InterfaceReader.call(this);
    InterfaceJSObjectConvertor.call(this, this, jsObject);

    this.xml = function () {
        return new Error("InterfaceJSObjectConvertor: ")
    }

    this.md = function () {
        return new Error("InterfaceJSObjectConvertor: ")
    }

    this.html = function () {
        return new Error("InterfaceJSObjectConvertor: ")
    }
        
    this.pdf = function (obj) {
        return new Error("InterfaceJSObjectConvertor: ")
    }

}


function InterfaceJSObjectConvertorCSS(jsObject) {

    InterfaceJSObjectConvertor.call(this, this, jsObject);

    this.css = function () {
        return new Error("InterfaceJSObjectConvertorCSS: ")
    }

    this.less = function () {
        return new Error("InterfaceJSObjectConvertorCSS: ")
    }

    this.scss = function () {
        return new Error("InterfaceJSObjectConvertorCSS: ")
    }

    this.sass = function () {
        return new Error("InterfaceJSObjectConvertorCSS: ")
    }

}


module.exports.InterfaceReader = InterfaceReader;
module.exports.InterfaceJSObjectParser = InterfaceJSObjectParser;
module.exports.InterfaceJSObjectConvertor = InterfaceJSObjectConvertor;
module.exports.InterfaceJSObjectConvertorMDHTML = InterfaceJSObjectConvertorMDHTML;
module.exports.InterfaceJSObjectConvertorCSS = InterfaceJSObjectConvertorCSS;
