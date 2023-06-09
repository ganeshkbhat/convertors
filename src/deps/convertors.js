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

var ini = require("./ini.js");
var env = require("./env.js");
var yaml = require("./yaml.js");
var xml = require("./xml.js");
var less = require("./less.js");
var sass = require("./sass.js");
var css = require("./css.js");

module.exports = {
    ini,
    env,
    yaml,
    xml,
    less,
    sass,
    css
}

