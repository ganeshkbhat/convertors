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
function YamlParser() {

    interfaces.InterfaceReader.call(this);

    /**
     *
     *
     * @param {*} lines
     * @return {*} 
     */
    this.parse = function (str) {
        return  base.Parsers().yaml(str);
    }

    /**
     *
     *
     * @param {*} object
     * @return {*} 
     */
    this.serialize = function (object) {
        return base.Convertors().yaml(object)
    }
}


function YamlConvertor(object) {
    
    interfaces.InterfaceJSObjectConvertor.call(this, object);
    YamlParser.call(this);
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


function Yaml(object) {

    interfaces.InterfaceJSObjectParser.call(this, object);
    YamlParser.call(this);
    YamlConvertor.call(this, object);

}


module.exports.Yaml = Yaml;
module.exports.YamlConvertor = YamlConvertor;
module.exports.YamlParser = YamlParser;

