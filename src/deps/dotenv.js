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

const css = require("./css");
const ini = require("./ini");
const less = require("./less");
const sass = require("./sass");
const scss = require("./scss");
const xml = require("./xml");
const yaml = require("./yaml");


/**
 *
 *
 */
function Dotenv() {

    interfaces.InterfaceReader.call(this);

    this.parse = function (lines, options) {
        return
    }

    this.serialize = function (object, options) {
        return
    }

}


function DotenvConvertors(object) {

    interfaces.InterfaceJSObjectConvertor.call(this, object);
    Dotenv.call(this);

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


function DotenvParsers(object) {

    interfaces.InterfaceJSObjectParser.call(this, object);
    Dotenv.call(this);

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


module.exports.Dotenv = Dotenv;
module.exports.DotenvConvertors = DotenvConvertors;
module.exports.Dotenv = Dotenv;

