/**
 * 
 * Package: jsparsers
 * Author: Ganesh B
 * Description: 
 * Install: npm i jsparsers --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/jsparsers
 * File: src/md.js
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
function MdParser() {

    interfaces.InterfaceReader.call(this);

    /**
     *
     *
     * @param {*} file
     * @param {*} options
     * @param {*} readOptions
     * @return {*} 
     * 
     */
    this.loadWithFilters = function (file, options, readOptions) {

    }

    /**
     *
     *
     * @param {*} lines
     * @return {*} 
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
     */
    this.serialize = function (object) {

    }

    /**
     *
     *
     * @param {*} file
     * @param {*} object
     * @param {*} options
     * @return {*} 
     * 
     */
    this.writeWithFilters = function (file, object, options) {

    }

}


function MdConvertor(object) {

    interfaces.InterfaceJSObjectConvertor.call(this, object);
    MdParser.call(this);

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

    this.conf = function () {

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


function Md(object) {

    interfaces.InterfaceJSObjectParser.call(this, object);
    MdParser.call(this);
    MdConvertor.call(this, object);

}


module.exports.Md = Md;
module.exports.MdConvertor = MdConvertor;
module.exports.MdParser = MdParser;
