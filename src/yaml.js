/**
 * 
 * Package: jsparsers
 * Author: Ganesh B
 * Description: 
 * Install: npm i jsparsers --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/jsparsers
 * File: src/yaml.js
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
 */
function Yaml() {

    interfaces.InterfaceReader.call(this);

    /**
     *
     *
     * @param {*} lines
     * @param {*} options
     * @return {*} 
     */
    this.parse = function (lines, options) {
        
    }

    /**
     *
     *
     * @param {*} object
     * @param {*} options
     * @return {*} 
     */
    this.serialize = function (object, options) {
        
    }
}


function YamlConvertors() {
    
    interfaces.InterfaceJSObjectConvertor.call(this, object);
    Yaml.call(this, object);
    
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


function YamlParsers() {

    interfaces.InterfaceJSObjectParser.call(this, object);
    Yaml.call(this, object);

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


module.exports.Yaml = Yaml;
module.exports.YamlConvertors = YamlConvertors;
module.exports.YamlParsers = YamlParsers;

