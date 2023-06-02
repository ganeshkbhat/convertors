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

/**
 *
 *
 */
function Css() {

    interfaces.InterfaceReader.call(this);

    /**
     *
     *
     * @param {*} file
     * @param {*} options
     * @param {*} readOptions
     * @return {*} 
     * 
     * https://www.npmjs.com/package/css
     * 
     */
    this.load = function (file, options, readOptions) {
        let str = this.readFile(file, readOptions);
        return this.parse(str, options);
    }

    /**
     *
     *
     * @param {*} str
     * @param {*} options
     * options: 
     *      silent: silently fail on parse errors
     *      source: the path to the file containing css. Makes errors and source maps more helpful, by letting them know where code comes from.
     * 
     * @return {*} 
     * 
     * https://www.npmjs.com/package/css
     * 
     */
    this.parse = function (str, options) {
        return require("css").parse(str, options || { silent: false });
    }

    /**
     *
     *
     * @param {*} object
     * @param {*} options
     * options: 
     *      indent: the string used to indent the output. Defaults to two spaces.
     *      compress: omit comments and extraneous whitespace. 
     *      sourcemap: return a sourcemap along with the CSS output. Using the source option of css.parse is strongly recommended when creating a source map. 
     *          Specify sourcemap: 'generator' to return the SourceMapGenerator object instead of serializing the source map.
     *      inputSourcemaps: (enabled by default, specify false to disable) reads any source maps referenced by the input files when generating the output source map. 
     *          When enabled, file system access may be required for reading the referenced source maps.
     * @return {*} 
     * 
     * https://www.npmjs.com/package/css
     * 
     */
    this.serialize = function (object, options) {
        return require("css").stringify(object, options || { sourcemap: true });
    }

}


function CssConvertors() {
    
    interfaces.InterfaceJSObjectConvertorCSS.call(this, object);
}


function CssParsers() {

    interfaces.InterfaceJSObjectParserCSS.call(this, object);
}


module.exports.Css = Css;
module.exports.CssConvertors = CssConvertors;

