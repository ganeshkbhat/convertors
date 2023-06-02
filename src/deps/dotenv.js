/**
 * 
 */

var interfaces = require("./interfaces");

/**
 *
 *
 */
function Dotenv() {

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

module.exports = Dotenv;

