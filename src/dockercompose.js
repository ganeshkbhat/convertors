/**
 * 
 * Package: jsparsers
 * Author: Ganesh B
 * Description: 
 * Install: npm i jsparsers --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/jsparsers
 * File: src/dotenv.js
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
function DockercomposeParser() {

    interfaces.InterfaceReader.call(this);

    this.parse = function (lines, options) {
        return base.Parsers().dockercompose(lines, options);
    }

    this.serialize = function (object, options) {
        return base.Convertors().dockercompose(object, options);
    }

}


function DockercomposeConvertor(object) {

    interfaces.InterfaceJSObjectConvertor.call(this, object);
    DockercomposeParser.call(this);
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


function Dockercompose(object) {

    interfaces.InterfaceJSObjectParser.call(this, object);
    DockercomposeParser.call(this);
    DockercomposeConvertor.call(this, object);

}


module.exports.Dockercompose = Dockercompose;
module.exports.DockercomposeConvertor = DockercomposeConvertor;
module.exports.DockercomposeParser = DockercomposeParser;

