

/**
 *
 *
 * @param {*} yamlToIni
 * @return {*} 
 */
function yamlToIni(iniString) {
    var yaml2json = require("./yaml2json").yamlToJson;
    var json2ini = require("./json2ini").jsonToIni;
    return json2ini(yaml2json(iniString));
}

module.exports.yamlToIni = yamlToIni;
