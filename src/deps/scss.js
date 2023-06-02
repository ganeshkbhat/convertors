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
 */
function Scss() {

    interfaces.InterfaceReader.call(this);

    this.load = function (file, options, readOptions) {
        return
    }

    this.parse = function (lines, options) {
        return
    }

    this.serialize = function (object, options) {
        return
    }

    this.write = function (file, object, options, writeOptions) {
        return
    }

}


function ScssConvertors() {

    interfaces.InterfaceJSObjectConvertorCSS.call(this, object);

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

    this.css = function () {

    }

    this.less = function () {

    }

    this.scss = function () {

    }

    this.sass = function () {

    }

}


function ScssParsers() {
    
    interfaces.InterfaceJSObjectParserCSS.call(this, object);

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

    this.css = function () {

    }

    this.less = function () {

    }

    this.scss = function () {

    }

    this.sass = function () {

    }
    
}

module.exports.Scss = Scss;
module.exports.ScssConvertors = ScssConvertors;


