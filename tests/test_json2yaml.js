const { expect } = require('chai');
const sinon = require('sinon');

const { yamlToJson } = require('./yaml2json');

describe('yamlToJson', () => {
    it('should convert a simple YAML string to a JSON object', () => {
        const yamlString = `section1:
  key1: value1
  key2: value2
section2:
  key3: value3
`;
        const expectedJson = {
            section1: {
                key1: 'value1',
                key2: 'value2'
            },
            section2: {
                key3: 'value3'
            }
        };
        expect(yamlToJson(yamlString)).to.deep.equal(expectedJson);
    });

    it('should convert a YAML string with multiple levels of nesting and multi-line strings to a JSON object', () => {
        const yamlString = `section1:
  key1: value1
  key2:
    subkey1: value2
    subkey2: |- 
      with multiple lines
      and even more lines
section2:
  key3: value4
`;
        const expectedJson = {
            section1: {
                key1: 'value1',
                key2: {
                    subkey1: 'value2',
                    subkey2: 'with multiple lines\nand even more lines'
                }
            },
            section2: {
                key3: 'value4'
            }
        };
        expect(yamlToJson(yamlString)).to.deep.equal(expectedJson);
    });

    it('should convert a YAML string with empty values to a JSON object', () => {
        const yamlString = `section1:
  key1: ''
  key2: null
section2: {}
`;
        const expectedJson = {
            section1: {
                key1: '',
                key2: null
            },
            section2: {}
        };
        expect(yamlToJson(yamlString)).to.deep.equal(expectedJson);
    });

    it('should convert a YAML string with arrays to a JSON object', () => {
        const yamlString = `section1:
  key1:
    - value1
    - value2
  key2:
    - subkey1: value3
    - subkey2: value4
`;
        const expectedJson = {
            section1: {
                key1: ['value1', 'value2'],
                key2: [{ 'subkey1': 'value3' }, { 'subkey2': 'value4' }]
            }
        };
        expect(yamlToJson(yamlString)).to.deep.equal(expectedJson);
    });

    it('should throw an error if the input is not a valid YAML string', () => {
        const invalidInput = 'not a YAML string';
        expect(() => yamlToJson(invalidInput)).to.throw();
    });

    it('should call console.error and return an empty object if the input is an empty string', () => {
        const consoleErrorSpy = sinon.spy(console, 'error');
        const emptyString = '';
        expect(yamlToJson(emptyString)).to.deep.equal({});
        expect(consoleErrorSpy.calledOnceWith('Empty string passed to yamlToJson')).to.be.true;
        consoleErrorSpy.restore();
    });

    it('should convert a simple YAML string to a JSON object', () => {
        const yamlString = `section1:
  key1: value1
  key2: value2
section2:
  key3: value3
`;
        const expectedJson = {
            section1: {
                key1: 'value1',
                key2: 'value2'
            },
            section2: {
                key3: 'value3'
            }
        };
        expect(yamlToJson(yamlString)).to.deep.equal(expectedJson);
    });

    it('should convert a YAML string with comments to a JSON object', () => {
        const yamlString = `# This is a comment
section1:
  key1: value1 # This is another comment
  key2: value2
# This is a comment for section2
section2:
  key3: value3
`;
        const expectedJson = {
            section1: {
                key1: 'value1',
                key2: 'value2'
            },
            section2: {
                key3: 'value3'
            }
        };
        expect(yamlToJson(yamlString)).to.deep.equal(expectedJson);
    });

    it('should throw an error if the input is not a valid YAML string', () => {
        const invalidInput = 'not a YAML string';
        expect(() => yamlToJson(invalidInput)).to.throw();
    });

    it('should call console.error and return an empty object if the input is an empty string', () => {
        const consoleErrorSpy = sinon.spy(console, 'error');
        const emptyString = '';
        expect(yamlToJson(emptyString)).to.deep.equal({});
        expect(consoleErrorSpy.calledOnceWith('Empty string passed to yamlToJson')).to.be.true;
        consoleErrorSpy.restore();
    });

    it('should call console.error and return an empty object if the input is a malformed YAML string', () => {
        const consoleErrorSpy = sinon.spy(console, 'error');
        const malformedYamlString = `section1:
  key1: value1
  key2: value2
  key3
section2:
  key4: value4
`;
        expect(yamlToJson(malformedYamlString)).to.deep.equal({});
        expect(consoleErrorSpy.calledOnceWith('Malformed YAML string passed to yamlToJson')).to.be.true;
        consoleErrorSpy.restore();
    });

});
