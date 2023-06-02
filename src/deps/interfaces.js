

function InterfaceReader() {

    this.load = function () {
        return new Error("InterfaceReader: ");
    }

    this.parse = function () {
        return new Error("InterfaceReader: ");
    }
    this.serialize = function () {
        return new Error("InterfaceReader: ");
    }

    this.write = function () {
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

