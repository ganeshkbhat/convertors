/**
 * 
 */

function InterfaceReader() {

    /**
     *
     *
     * @param {*} file
     * @param {*} readOptions
     * @return {*} 
     */
    this.readFile = function (file, readOptions) {
        var fs = require("fs");
        return fs.readFileSync(file, readOptions);
    }
    
    /**
     *
     *
     * @param {*} file
     * @param {*} object
     * @param {*} writeOptions
     * @return {*} 
     */
    this.writeFile = function (file, object, writeOptions) {
        var fs = require("fs");
        return fs.writeFileSync(file, object, writeOptions);
    }

    /**
     *
     *
     * @param {*} file
     * @param {*} options
     * @param {*} readOptions
     * @return {*} 
     */
    this.load = function (file, options, readOptions) {
        let str = readFile(file, readOptions);
        return this.parse(str, options);
    }

    /**
     *
     *
     * @param {*} file
     * @param {*} object
     * @param {*} options
     * @param {*} writeOptions
     * @return {*} 
     */
    this.write = function (file, object, options, writeOptions) {
        let str = this.serialize(object, options);
        return writeFile(file, str, writeOptions);
    }

    this.parse = function (str, options) {
        return new Error("InterfaceReader: ");
    }

    this.serialize = function (object, options) {
        return new Error("InterfaceReader: ");
    }


}


function InterfaceJSObjectParser(jsObject) {
    this.ini = function () {
        return new Error("InterfaceJSObjectConvertor: ")
    }

    this.yaml = function () {
        return new Error("InterfaceJSObjectConvertor: ")
    }

    this.yml = function () {
        return new Error("InterfaceJSObjectConvertor: ")
    }

    this.xml = function () {
        return new Error("InterfaceJSObjectConvertor: ")
    }

    this.json = function () {
        return new Error("InterfaceJSObjectConvertor: ")
    }
}


function InterfaceJSObjectParserCSS(jsObject) {
    InterfaceJSObjectParser.call(this, jsObject)

    this.css = function () {
        return new Error("InterfaceJSObjectParserCSS: ")
    }

    this.less = function () {
        return new Error("InterfaceJSObjectParserCSS: ")
    }

    this.scss = function () {
        return new Error("InterfaceJSObjectParserCSS: ")
    }

    this.sass = function () {
        return new Error("InterfaceJSObjectParserCSS: ")
    }

}



function InterfaceJSObjectConvertor(jsObject) {
    this.ini = function () {
        return new Error("InterfaceJSObjectConvertor: ")
    }

    this.yaml = function () {
        return new Error("InterfaceJSObjectConvertor: ")
    }

    this.yml = function () {
        return new Error("InterfaceJSObjectConvertor: ")
    }

    this.xml = function () {
        return new Error("InterfaceJSObjectConvertor: ")
    }

    this.json = function () {
        return new Error("InterfaceJSObjectConvertor: ")
    }
}


function InterfaceJSObjectConvertorCSS(jsObject) {
    InterfaceJSObjectConvertor.call(this, jsObject)

    this.css = function () {
        return new Error("InterfaceJSObjectConvertorCSS: ")
    }

    this.less = function () {
        return new Error("InterfaceJSObjectConvertorCSS: ")
    }

    this.scss = function () {
        return new Error("InterfaceJSObjectConvertorCSS: ")
    }

    this.sass = function () {
        return new Error("InterfaceJSObjectConvertorCSS: ")
    }

}

module.exports.InterfaceReader = InterfaceReader;
module.exports.InterfaceJSObjectConvertor = InterfaceJSObjectConvertor;
module.exports.InterfaceJSObjectParser = InterfaceJSObjectParser;
module.exports.InterfaceJSObjectConvertorCSS = InterfaceJSObjectConvertorCSS;
module.exports.InterfaceJSObjectParserCSS = InterfaceJSObjectParserCSS;

