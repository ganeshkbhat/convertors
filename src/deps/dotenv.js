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
function Dotenv() {

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


function DotenvConvertors() {
    
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


function DotenvParsers() {

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


module.exports.Dotenv = Dotenv;
module.exports.DotenvConvertors = DotenvConvertors;


