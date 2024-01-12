/**
 * 
 * Package: jsparsers
 * Author: Ganesh B
 * Description: 
 * Install: npm i jsparsers --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/jsparsers
 * File: src/toml.js
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
function Toml() {

    interfaces.InterfaceReader.call(this);

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
        
    }

}


function TomlConvertors(object) {

    interfaces.InterfaceJSObjectConvertor.call(this, object);
    Toml.call(this);
    
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


function TomlParsers(object) {
    
    interfaces.InterfaceJSObjectParser.call(this, object);
    Toml.call(this);
    
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


module.exports.Toml = Toml;
module.exports.TomlConvertors = TomlConvertors;
module.exports.TomlParsers = TomlParsers;
