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

const fs = require('fs');
const { expect } = require('chai');

describe('[Convertor tests] ', () => {
  
  before(() => {
    // fs.writeFileSync('.env', envFile);
  });

  after(() => {
    // fs.unlinkSync('.env');
  });

  it('should convert file to JSON object', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

  it('should convert Converted JSON Object xxx string', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

});
