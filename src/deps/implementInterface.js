/**
 * 
 * Package: jsparsers
 * Author: Ganesh B
 * Description: 
 * Install: npm i jsparsers --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/jsparsers
 * File: .js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';


/**
 *
 *
 * @param {*} object
 * @return {*} 
 */
function getProperties(object) {
    var p = [];
    for (; object != null; object = Object.getPrototypeOf(object)) {
        var op = Object.getOwnPropertyNames(object);
        for (var i = 0; i < op.length; i++)
            if (p.indexOf(op[i]) == -1)
                p.push(op[i]);
    }
    return p;
}


/**
 *
 *
 * @param {*} interface
 * @param {*} object
 * @return {*} 
 */
function validateInterface(interface, object) {
    let o = getProperties(object);
    let it = getProperties(object);
    let itk = Object.keys(interface);
    for (let i = 0; i < it.length; i++) {
        if (o.includes(it[i])) {
            let idx = o.indexOf(it[i]);
            if (!idx) return new Error("Interface Object not implemented");
            let intr = object[o[idx]];
            if (typeof intr !== it[i]) return new Error("Interface Object not of the same type");
        }
    }
}


/**
 *
 *
 * @param {*} target
 * @param {*} interfaces
 * @return {*} 
 */
function implement(target, ...interfaces) {
    const set = new Set(),
        defineProperties = (proto, iface) => {
            if (!set.has(iface)) {
                set.add(iface);
                Object.defineProperties(
                    proto,
                    Object.getOwnPropertyDescriptors(iface)
                );
            }
            return proto;
        };

    return Object.setPrototypeOf(
        target,
        interfaces.reduce(
            (proto, iface) => {
                if (implement.symbol in iface)
                    Array.from(iface[implement.symbol])
                        .forEach(iface => defineProperties(proto, iface));
                return defineProperties(proto, iface);
            },
            Object.create(
                Object.getPrototypeOf(target),
                {
                    [implement.symbol]: {
                        configurable: true,
                        value: set
                    }
                }
            )
        )
    );
}


implement.symbol = typeof Symbol === 'function' ? Symbol.for('implements') : '__implements__';


/**
 *
 *
 * @param {*} target
 * @param {*} iface
 * @return {*} 
 */
implement.interface = function (target, iface) {
    while (target && implement.symbol in target) {
        if (target[implement.symbol].has(iface)) {
            return true;
        }
        target = Object.getPrototypeOf(target);
    }
    return false;
};


module.exports.implement = implement;
module.exports.validateInterface = validateInterface;
module.exports.getProperties = getProperties;

