

/**
 *
 *
 * @param {*} iniToYaml
 * @return {*} 
 */
function iniToYaml(iniString) {
    var ini2json = require("./ini2json").iniToJson;
    var json2yaml = require("./json2yaml").jsonToYaml;
    return json2yaml(ini2json(iniString));
}

module.exports.iniToYaml = iniToYaml;

