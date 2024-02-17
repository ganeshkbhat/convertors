/**
 * 
 * Package: jsparsers
 * Author: Ganesh B
 * Description: 
 * Install: npm i jsparsers --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/jsparsers
 * File: src/less.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

/**
 * JSONStringify & JSONParse inspired by json-with-bigint
 * source: https://github.com/Ivan-Korolenko/json-with-bigint
 */
/* 
  Function to serialize data to JSON string.
  Converts all BigInt values to strings with "n" character at the end.
*/

// // https://github.com/serde-rs/json
// enum Value {
//   Null,
//   Bool(bool),
//   Number(Number),
//   String(String),
//   Array(Vec<Value>),
//   Object(Map<String, Value>),
// }

/** 
 * 
 * https://github.com/WalletConnect/walletconnect-utils/blob/7c6656163001584e898d741bb9173cca4499ae43/misc/safe-json/src/index.ts
 * 
 */
const JSONStringify = data => JSON.stringify(data, (_, value) => typeof value === "bigint" ? value.toString() + "n" : value);

const JSONParse = json => {
  const numbersBiggerThanMaxInt = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g;
  const serializedData = json.replace(numbersBiggerThanMaxInt, "$1\"$2n\"$3");
  return JSON.parse(serializedData, (_, value) => {
    const isCustomFormatBigInt = typeof value === "string" && value.match(/^\d+n$/);
    if (isCustomFormatBigInt)
      return BigInt(value.substring(0, value.length - 1));
    return value;
  });
};

function safeJsonParse(value) {
  if (typeof value !== "string") {
    throw new Error(`Cannot safe json parse value of type ${typeof value}`);
  }
  try {
    return JSONParse(value);
  }
  catch (_a) {
    return value;
  }
}

module.exports.safeJsonParse = safeJsonParse;

function safeJsonStringify(value) {
  return typeof value === "string" ? JSONStringify(safeJsonParse(value)) : JSONStringify(value) || "";
}

module.exports.safeJsonStringify = safeJsonStringify;
