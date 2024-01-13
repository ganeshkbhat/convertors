/**
 * 
 * Package: jsparsers
 * Author: Ganesh B
 * Description: 
 * Install: npm i jsparsers --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/jsparsers
 * File: src/dockerfile.js
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
function DockerfileParser() {

    interfaces.InterfaceReader.call(this);

    this.parse = function (str) {
        return base.Parsers().dockerfile(str);
    }

    this.serialize = function (object) {
        return base.Convertors().dockerfile(object);
    }

}


function DockerfileConvertor(object) {

    interfaces.InterfaceJSObjectConvertor.call(this, object);
    DockerfileParser.call(this);
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


function Dockerfile(object) {

    interfaces.InterfaceJSObjectParser.call(this, object);
    DockerfileParser.call(this);
    DockerfileConvertor.call(this, object);

}


module.exports.Dockerfile = Dockerfile;
module.exports.DockerfileConvertor = DockerfileConvertor;
module.exports.DockerfileParser = DockerfileParser;

