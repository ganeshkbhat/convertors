/**
 * 
 * Package: jsparsers
 * Author: Ganesh B
 * Description: 
 * Install: npm i jsparsers --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/jsparsers
 * File: src/error.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';


// Snippet from 
// https://www.npmjs.com/package/@walletconnect/jsonrpc-utils?activeTab=code

// ------------ConstantS.js--------------

export const PARSE_ERROR = "PARSE_ERROR";
export const INVALID_REQUEST = "INVALID_REQUEST";
export const METHOD_NOT_FOUND = "METHOD_NOT_FOUND";
export const INVALID_PARAMS = "INVALID_PARAMS";
export const INTERNAL_ERROR = "INTERNAL_ERROR";
export const SERVER_ERROR = "SERVER_ERROR";
export const RESERVED_ERROR_CODES = [];
export const SERVER_ERROR_CODE_RANGE = [];
export const STANDARD_ERROR_MAP = {
    [PARSE_ERROR]: { code: -32700, message: "Parse error" },
    [INVALID_REQUEST]: { code: -32600, message: "Invalid Request" },
    [METHOD_NOT_FOUND]: { code: -32601, message: "Method not found" },
    [INVALID_PARAMS]: { code: -32602, message: "Invalid params" },
    [INTERNAL_ERROR]: { code: -32603, message: "Internal error" },
    [SERVER_ERROR]: { code: -32000, message: "Server error" },
};
export const DEFAULT_ERROR = SERVER_ERROR;

// -----------ERROR.js-----------

export function isServerErrorCode(code) {
    return code <= SERVER_ERROR_CODE_RANGE[0] && code >= SERVER_ERROR_CODE_RANGE[1];
}
export function isReservedErrorCode(code) {
    return RESERVED_ERROR_CODES.includes(code);
}
export function isValidErrorCode(code) {
    return typeof code === "number";
}
export function getError(type) {
    if (!Object.keys(STANDARD_ERROR_MAP).includes(type)) {
        return STANDARD_ERROR_MAP[DEFAULT_ERROR];
    }
    return STANDARD_ERROR_MAP[type];
}
export function getErrorByCode(code) {
    const match = Object.values(STANDARD_ERROR_MAP).find(e => e.code === code);
    if (!match) {
        return STANDARD_ERROR_MAP[DEFAULT_ERROR];
    }
    return match;
}


// -------------FORMAT.js-------------

export function payloadId(entropy = 3) {
    const date = Date.now() * Math.pow(10, entropy);
    const extra = Math.floor(Math.random() * Math.pow(10, entropy));
    return date + extra;
}
export function getBigIntRpcId(entropy = 6) {
    return BigInt(payloadId(entropy));
}

// export function formatJsonRpcRequest(method, params, id) {
//     return {
//         id: id || payloadId(),
//         jsonrpc: "2.0",
//         method,
//         params,
//     };
// }
// export function formatJsonRpcResult(id, result) {
//     return {
//         id,
//         jsonrpc: "2.0",
//         result,
//     };
// }
// export function formatJsonRpcError(id, error, data) {
//     return {
//         id,
//         jsonrpc: "2.0",
//         error: formatErrorMessage(error, data),
//     };
// }
// export function formatErrorMessage(error, data) {
//     if (typeof error === "undefined") {
//         return getError(INTERNAL_ERROR);
//     }
//     if (typeof error === "string") {
//         error = Object.assign(Object.assign({}, getError(SERVER_ERROR)), { message: error });
//     }
//     if (typeof data !== "undefined") {
//         error.data = data;
//     }
//     if (isReservedErrorCode(error.code)) {
//         error = getErrorByCode(error.code);
//     }
//     return error;
// }

// export function isServerErrorCode(code) {
//     return code <= SERVER_ERROR_CODE_RANGE[0] && code >= SERVER_ERROR_CODE_RANGE[1];
// }
// export function isReservedErrorCode(code) {
//     return RESERVED_ERROR_CODES.includes(code);
// }
// export function isValidErrorCode(code) {
//     return typeof code === "number";
// }
// export function getError(type) {
//     if (!Object.keys(STANDARD_ERROR_MAP).includes(type)) {
//         return STANDARD_ERROR_MAP[DEFAULT_ERROR];
//     }
//     return STANDARD_ERROR_MAP[type];
// }
// export function getErrorByCode(code) {
//     const match = Object.values(STANDARD_ERROR_MAP).find(e => e.code === code);
//     if (!match) {
//         return STANDARD_ERROR_MAP[DEFAULT_ERROR];
//     }
//     return match;
// }
