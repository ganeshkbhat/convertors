const { expect } = require('chai');
const sinon = require('sinon');

const { jsonToIni } = require('../src/json2ini');

describe('jsonToIni', () => {
    it('should convert a simple JSON object to an INI file', () => {
        const obj = {
            database: {
                host: 'localhost',
                port: 5432,
                user: 'myuser',
                password: 'mypassword',
            },
        };
        const expectedIni = '[database]\nhost=localhost\nport=5432\nuser=myuser\npassword=mypassword\n';

        const ini = jsonToIni(obj);

        expect(ini).to.equal(expectedIni);
    });

    it('should convert a nested JSON object to an INI file', () => {
        const obj = {
            database: {
                host: 'localhost',
                port: 5432,
                user: 'myuser',
                password: 'mypassword',
                config: {
                    timeout: 5000,
                },
            },
        };
        const expectedIni = '[database]\nhost=localhost\nport=5432\nuser=myuser\npassword=mypassword\n\n[database.config]\ntimeout=5000\n';

        const ini = jsonToIni(obj);

        expect(ini).to.equal(expectedIni);
    });

    it('should handle arrays in a nested JSON object', () => {
        const obj = {
            database: {
                hosts: ['localhost', '127.0.0.1'],
            },
        };
        const expectedIni = '[database]\nhosts[]=localhost\nhosts[]="127.0.0.1"\n';

        const ini = jsonToIni(obj);

        expect(ini).to.equal(expectedIni);
    });

    it('should handle objects in a nested JSON object', () => {
        const obj = {
            database: {
                config: {
                    timeout: 5000,
                    host: { test: 'value', tester: 'testing' },
                },
            },
        };
        const expectedIni = '[database.config]\ntimeout=5000\nhost={"test":"value","tester":"testing"}\n';

        const ini = jsonToIni(obj);

        expect(ini).to.equal(expectedIni);
    });

    it('should handle empty objects in a nested JSON object', () => {
        const obj = {
            database: {
                config: {},
            },
        };
        const expectedIni = '[database.config]\n';

        const ini = jsonToIni(obj);

        expect(ini).to.equal(expectedIni);
    });

    it('should handle empty arrays in a nested JSON object', () => {
        const obj = {
            database: {
                hosts: [],
            },
        };
        const expectedIni = '[database]\n';

        const ini = jsonToIni(obj);

        expect(ini).to.equal(expectedIni);
    });

    it('should handle malformed JSON', () => {
        const obj = {
            database: {
                config: {
                    timeout: 5000,
                    host: { test: 'value', tester: 'testing' },
                    // missing closing brace
                },
            },
        };
        const expectedIni = '[database.config]\ntimeout=5000\nhost={"test":"value","tester":"testing"\n';

        const ini = jsonToIni(obj);

        expect(ini).to.equal(expectedIni);
    });

    it('should convert a simple JSON object with one key-value pair to an INI file', () => {
        const json = { node: { compressiontype: 'zip', url: 'https://nodejs.org/dist/v18.16.0/node-v18.16.0-win-x86.zip', tmp: './', dest: './extract' } };
        const expected = '[node]\ncompressiontype=zip\nurl=https://nodejs.org/dist/v18.16.0/node-v18.16.0-win-x86.zip\ntmp=./\ndest=./extract\n';
        const result = jsonToIni(json);
        expect(result).to.equal(expected);
    });

    it('should convert a JSON object with multiple sections and key-value pairs to an INI file', () => {
        const json = {
            node: {
                compressiontype: 'zip',
                url: 'https://nodejs.org/dist/v18.16.0/node-v18.16.0-win-x86.zip',
                tmp: './',
                dest: './extract'
            },
            secondnode: {
                compressiontype: 'zip',
                url: 'https://nodejs.org/dist/v18.16.0/node-v18.16.0-win-x86.zip',
                tmp: './',
                dest: './extract'
            }
        };
        const expected = '[node]\ncompressiontype=zip\nurl=https://nodejs.org/dist/v18.16.0/node-v18.16.0-win-x86.zip\ntmp=./\ndest=./extract\n\n[secondnode]\ncompressiontype=zip\nurl=https://nodejs.org/dist/v18.16.0/node-v18.16.0-win-x86.zip\ntmp=./\ndest=./extract\n';
        const result = jsonToIni(json);
        expect(result).to.equal(expected);
    });

    it('should handle spaces and special characters in section names and keys', () => {
        const json = {
            'section with spaces': {
                'key-with-hyphens': 'value with spaces and special characters: !@#$%^&*()'
            },
            section2: {
                key3: 'value3'
            }
        };
        const expected = '[section with spaces]\nkey-with-hyphens=value with spaces and special characters: !@#$%^&*()\n\n[section2]\nkey3=value3\n';
        const result = jsonToIni(json);
        expect(result).to.equal(expected);
    });

    it('should handle values with multiple lines', () => {
        const json = {
            'test-key': 'test\nvalue',
            'nested': {
                'nested-key': 'nested\nvalue\nwith\nmultiple\nlines'
            }
        };
        const expectedIni = [
            '[root]',
            'test-key=test\\nvalue',
            '[root.nested]',
            'nested-key=nested\\nvalue\\nwith\\nmultiple\\nlines',
        ].join('\n');
        const resultIni = jsonToIni(json);
        expect(resultIni).to.equal(expectedIni);
    });

    it('should handle special characters in keys and values', () => {
        const json = {
            'test-key': 'test-value',
            'another-key': 'another&value',
            'nested': {
                'nested-key': 'nested/value'
            }
        };
        const expectedIni = [
            '[root]',
            'test-key=test-value',
            'another-key=another&value',
            '[root.nested]',
            'nested-key=nested/value',
        ].join('\n');
        const resultIni = jsonToIni(json);
        expect(resultIni).to.equal(expectedIni);
    });

})
