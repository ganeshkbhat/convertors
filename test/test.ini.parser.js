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

describe('[Parser tests] ', () => {
  
  before(() => {
    // fs.writeFileSync('.env', envFile);
  });

  after(() => {
    // fs.unlinkSync('.env');
  });

  it('should parse file to JSON object', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

  it('should parse file to JSON Object and convert back to appropriate xxx string', () => {
    const expected = 0; // predefined
    const actual = 0; // do ops
    expect(actual).to.deep.equal(expected);
  });

});
