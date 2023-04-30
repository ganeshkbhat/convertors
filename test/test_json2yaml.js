const { expect } = require('chai');
const sinon = require('sinon');

const { jsonToYaml } = require('../src/yaml2json');

describe('jsonToYaml', () => {
    it('should convert a simple JSON object to YAML', () => {
        const jsonObject = {
            section1: {
                key1: 'value1',
                key2: 'value2'
            },
            section2: {
                key3: 'value3'
            }
        };
        const expectedYaml = `section1:
  key1: value1
  key2: value2
section2:
  key3: value3
`;
        expect(jsonToYaml(jsonObject)).to.equal(expectedYaml);
    });

    it('should convert a JSON object with multiple levels of nesting and multi-line strings to YAML', () => {
        const jsonObject = {
            section1: {
                key1: 'value1',
                key2: {
                    subkey1: 'value2',
                    subkey2: 'value3\nwith multiple lines\nand even more lines'
                }
            },
            section2: {
                key3: 'value4'
            }
        };
        const expectedYaml = `section1:
  key1: value1
  key2:
    subkey1: value2
    subkey2: |- 
      with multiple lines
      and even more lines
section2:
  key3: value4
`;
        expect(jsonToYaml(jsonObject)).to.equal(expectedYaml);
    });

    it('should convert a JSON object with empty values to YAML', () => {
        const jsonObject = {
            section1: {
                key1: '',
                key2: null
            },
            section2: {}
        };
        const expectedYaml = `section1:
  key1: ''
  key2: null
section2: {}
`;
        expect(jsonToYaml(jsonObject)).to.equal(expectedYaml);
    });

    it('should convert a JSON object with arrays to YAML', () => {
        const jsonObject = {
            section1: {
                key1: ['value1', 'value2'],
                key2: [{ 'subkey1': 'value3' }, { 'subkey2': 'value4' }]
            }
        };
        const expectedYaml = `section1:
  key1:
    - value1
    - value2
  key2:
    - subkey1: value3
    - subkey2: value4
`;
        expect(jsonToYaml(jsonObject)).to.equal(expectedYaml);
    });

    it('should throw an error if the input is not a valid JSON object', () => {
        const invalidInput = 'not a JSON object';
        expect(() => jsonToYaml(invalidInput)).to.throw();
    });

    it('should call console.error and return an empty string if the input is an empty object', () => {
        const consoleErrorSpy = sinon.spy(console, 'error');
        const emptyObject = {};
        expect(jsonToYaml(emptyObject)).to.equal('');
        expect(consoleErrorSpy.calledOnceWith('Empty object passed to jsonToYaml')).to.be.true;
        consoleErrorSpy.restore();
    });
});
