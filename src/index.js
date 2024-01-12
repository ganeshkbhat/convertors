/**
 * 
 * Package: jsparsers
 * Author: Ganesh B
 * Description: 
 * Install: npm i jsparsers --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/jsparsers
 * File: src/index.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

var interfaces = require("./interfaces");
var base = require("./base");
var interfaceValidators = require("./implementInterface.js");

var ini = require("./ini.js");
var dotenv = require("./dotenv.js");
var yaml = require("./yaml.js");
var xml = require("./xml.js");
var less = require("./less.js");
var sass = require("./sass.js");
var css = require("./css.js");
var html = require("./html.js");
var md = require("./md.js");
var sys = require("./sys.js");
var toml = require("./toml.js");
var tsv = require("./tsv.js");


module.exports = {
    interfaces,
    interfaceValidators,
    base,
    ini,
    dotenv,
    yaml,
    xml,
    html,
    md,
    less,
    sass,
    css,
    sys,
    toml,
    tsv
}

module.exports.default = {
    interfaces,
    interfaceValidators,
    base,
    ini,
    dotenv,
    yaml,
    xml,
    html,
    md,
    less,
    sass,
    css,
    sys,
    toml,
    tsv
}

