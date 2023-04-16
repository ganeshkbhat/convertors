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

const result = iniToJson(iniString);

console.log(result);
// Output: 
// {
//   "database": {
//     "host": "localhost",
//     "port": "5432",
//     "user": "myuser",
//     "password": "mypassword",
//     "config": {
//       "timeout": "5000"
//     }
//   }
// }

const iniString2 = `
[database]
host = localhost
port = 5432
user = myuser
password = mypassword

[database.config]
timeout = 5000
`;

const result2 = iniToJson(iniString2);

console.log(result2);
// Output: 
// {
//   "database": {
//     "host": "localhost",
//     "port": "5432",
//     "user": "myuser",
//     "password": "mypassword",
//     "config": {
//       "timeout": "5000"
//     }
//   }
// }


const iniString3 = `
[database]
host = localhost
port = 5432
user = myuser
password = mypassword

[database.config]
timeout = 5000

[databaseconfig]
timeout = { test: "value", tester: "value" }
`;

const result3 = iniToJson(iniString3);

console.log(result3);


// Output: 
// {
//     "database": {
//       "host": "localhost",
//       "port": "5432",
//       "user": "myuser",
//       "password": "mypassword",
//       "config": {
//         "timeout": "5000"
//       }
//     },
//     "databaseconfig": {
//       "host": {
//         "test": "value",
//         "tester": "testing"
//       }
//     }
//   }
  
