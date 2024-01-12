/**
 * 
 * Package: jsparsers
 * Author: Ganesh B
 * Description: 
 * Install: npm i jsparsers --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/jsparsers
 * File: index.mjs
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

import * as convertor from "./src";
import { default as convertorsd } from "./src";

export default convertorsd;

export const convertors = {
  ...convertor
};

