
var iniToYaml = require("../index").parseIni2Yaml.iniToYaml;

const iniString = `
; This is a comment
[database]
host = localhost
port = 5432
user = myuser
password = mypassword

[database.config]
timeout = 5000
`;

const result = iniToYaml(iniString);
console.log(result);
// Output: 


const iniString2 = `
[database]
host = localhost
port = 5432
user = myuser
password = mypassword

[database.config]
timeout = 5000
`;

const result2 = iniToYaml(iniString2);

console.log(result2);
// Output: 


const iniString3 = `
[database]
host = localhost
port = 5432
user = myuser
password = mypassword

[database.config]
timeout = 5000

[databaseconfig]
timeout = { "test": "value", "tester": "value" }
`;

const result3 = iniToYaml(iniString3);

console.log(result3);


// Output: 

