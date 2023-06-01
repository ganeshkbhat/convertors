/**
 * 
 */

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
     * @param {*} str
     * @param {*} options
     * options: 
     *      silent: silently fail on parse errors
     *      source: the path to the file containing css. Makes errors and source maps more helpful, by letting them know where code comes from.
     * 
     * https://www.npmjs.com/package/css
     * 
     * @return {*} 
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
     * 
     * https://www.npmjs.com/package/css
     * 
     */
    this.serialize = function (object, options) {
        return require("css").stringify(object, options || { sourcemap: true });
    }

}

module.exports = Css;

