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

    var jsobject = jsObject;

    this.set = function (jsObject) {
        jsobject = !!jsObject ? jsObject : jsobject;
        return true;
    }

    this.get = function () {
        return jsobject;
    }

    this.ini = function () {
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

    this.json = function () {
        return new Error("InterfaceJSObjectConvertor: ")
    }
}


function InterfaceJSObjectParserHTML(jsObject) {

    InterfaceJSObjectParser.call(this, jsObject)

    this.html = function () {
        return new Error("InterfaceJSObjectConvertor: ")
    }

}


function InterfaceJSObjectParserCSS(jsObject) {

    InterfaceJSObjectParser.call(this, jsObject)

    this.css = function () {
        return new Error("InterfaceJSObjectParserCSS: ")
    }

    this.less = function () {
        return new Error("InterfaceJSObjectParserCSS: ")
    }

    this.scss = function () {
        return new Error("InterfaceJSObjectParserCSS: ")
    }

    this.sass = function () {
        return new Error("InterfaceJSObjectParserCSS: ")
    }

}


function InterfaceJSObjectConvertor(jsObject = "") {

    var jsobject = jsObject;

    this.set = function (jsObject) {
        jsobject = !!jsObject ? jsObject : jsobject;
        return true;
    }

    this.get = function () {
        return jsobject;
    }

    this.ini = function () {
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

    this.html = function () {
        return new Error("InterfaceJSObjectConvertor: ")
    }

    this.json = function () {
        return new Error("InterfaceJSObjectConvertor: ")
    }
}


function InterfaceJSObjectConvertorHTML(jsObject = "") {

    InterfaceJSObjectConvertor.call(this, jsObject);

    this.html = function () {
        return new Error("InterfaceJSObjectConvertor: ")
    }

}


function InterfaceJSObjectConvertorCSS(jsObject) {

    InterfaceJSObjectConvertor.call(this, jsObject);

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
module.exports.InterfaceJSObjectParserHTML = InterfaceJSObjectParserHTML;
module.exports.InterfaceJSObjectParserCSS = InterfaceJSObjectParserCSS;
module.exports.InterfaceJSObjectConvertor = InterfaceJSObjectConvertor;
module.exports.InterfaceJSObjectConvertorHTML = InterfaceJSObjectConvertorHTML;
module.exports.InterfaceJSObjectConvertorCSS = InterfaceJSObjectConvertorCSS;
