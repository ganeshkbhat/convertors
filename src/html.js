/**
 * 
 * Package: jsparsers
 * Author: Ganesh B
 * Description: 
 * Install: npm i jsparsers --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/jsparsers
 * File: src/html.js
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
function HTMLIParser() {

    interfaces.InterfaceReader.call(this);

    this.parse = function (str) {
        return base.Parsers().html(str);
    }

    this.serialize = function (object) {
        return base.Convertors().html(object);
    }

}

function HTMLIConvertor(object) {
    
    interfaces.InterfaceJSObjectConvertorMDHTML.call(this, object);
    HTMLIParser.call(this);
    base.Convertors.call(this);
    
}


function HTMLI(object) {

    interfaces.InterfaceJSObjectParser.call(this, object);
    HTMLIParser.call(this);
    HTMLIConvertor.call(this, object);

}


module.exports.HTMLI = HTMLI;
module.exports.HTMLIConvertor = HTMLIConvertor;
module.exports.HTMLIParser = HTMLIParser;

