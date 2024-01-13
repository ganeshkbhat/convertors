/**
 * 
 * Package: jsparsers
 * Author: Ganesh B
 * Description: 
 * Install: npm i jsparsers --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/jsparsers
 * File: src/conf.js
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
function ConfParser() {

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

/**
 *
 *
 * @param {*} object
 */
function ConfConvertor(object) {

    interfaces.InterfaceJSObjectConvertor.call(this, object);
    ConfParser.call(this);
    base.Convertors.call(this);
}

/**
 *
 *
 * @param {*} object
 */
function Conf(object) {

    interfaces.InterfaceJSObjectParser.call(this, object);
    ConfParser.call(this);
    ConfConvertor.call(this, object);

}


module.exports.Conf = Conf;
module.exports.ConfConvertor = ConfConvertor;
module.exports.ConfParser = ConfParser;

