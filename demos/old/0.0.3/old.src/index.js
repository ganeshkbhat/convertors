

const parseIni2Json = require("./ini2json");
const parseJson2Ini = require("./json2ini");

const parseYaml2Json = require("./yaml2json");
const parseJson2Yaml = require("./json2yaml");

const parseIni2Yaml = require("./ini2yaml");
const parseYaml2Ini = require("./yaml2ini");

const parseEnvToJson = require("./env2json");

// const parseEnv2Json = require("./src/env2json");
// const parseJson2Env = require("./src/json2env");

// const parseJson2Xml = require("./src/json2xml");
// const parseXml2Json = require("./src/xml2json");

// const parseObject = require("./src/parserObject");

// const parseCss = require("./src/parserCss");
// const parseDom = require("./src/parserDom");
// const parseLess = require("./src/parserLess");
// const parseSass = require("./src/parserSass");


module.exports.parseIni2Json = parseIni2Json;
module.exports.parseJson2Ini = parseJson2Ini;

module.exports.parseYaml2Json = parseYaml2Json;
module.exports.parseJson2Yaml = parseJson2Yaml;

module.exports.parseIni2Yaml = parseIni2Yaml;
module.exports.parseYaml2Ini = parseYaml2Ini;

// module.exports.parseEnv2Json = parseEnv2Json;
// module.exports.parseJson2Env = parseJson2Env;

// module.exports.parseJson2Xml = parseJson2Xml;
// module.exports.parseXml2Json = parseXml2Json;

// module.exports.parseObject = parseObject;

module.exports.default = {
    parseIni2Json, parseJson2Ini, parseYaml2Json, parseJson2Yaml, 
    parseIni2Yaml, parseYaml2Ini, parseEnvToJson
    // parseEnv2Json, parseJson2Env,
    // parseJson2Xml, parseXml2Json, parseObject
}

module.exports = {
    parseIni2Json, parseJson2Ini, parseYaml2Json, parseJson2Yaml, 
    parseIni2Yaml, parseYaml2Ini, parseEnvToJson
    // parseEnv2Json, parseJson2Env,
    // parseJson2Xml, parseXml2Json, parseObject
}
