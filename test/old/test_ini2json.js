
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

const { iniToJson } = require('../src/ini2json');

describe('iniToJson', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'error');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  // it('should convert a simple INI file with one section to a JSON object', function () {
  //   const ini = '[node]\ncompressiontype=zip\nurl=https://nodejs.org/dist/v18.16.0/node-v18.16.0-win-x86.zip\ntmp=./\ndest=./extract\n';
  //   const expected = { node: { compressiontype: 'zip', url: 'https://nodejs.org/dist/v18.16.0/node-v18.16.0-win-x86.zip', tmp: './', dest: './extract' } };

  //   const result = iniToJson(ini);
  //   expect(result).to.deep.equal(expected);
  // });

  // it('should convert an INI file with multiple sections and key-value pairs to a JSON object', function () {
  //   const ini = '[node]\ncompressiontype=zip\nurl=https://nodejs.org/dist/v18.16.0/node-v18.16.0-win-x86.zip\ntmp=./\ndest=./extract\n[secondnode]\ncompressiontype=zip\nurl=https://nodejs.org/dist/v18.16.0/node-v18.16.0-win-x86.zip\ntmp=./\ndest=./extract\n';
  //   const expected = {
  //     node: {
  //       compressiontype: 'zip',
  //       url: 'https://nodejs.org/dist/v18.16.0/node-v18.16.0-win-x86.zip',
  //       tmp: './',
  //       dest: './extract'
  //     },
  //     secondnode: {
  //       compressiontype: 'zip',
  //       url: 'https://nodejs.org/dist/v18.16.0/node-v18.16.0-win-x86.zip',
  //       tmp: './',
  //       dest: './extract'
  //     }
  //   };

  //   const result = iniToJson(ini);
  //   expect(result).to.deep.equal(expected);
  // });

  it('should throw an error if the input is not a string', function () {
    const ini = 123;
    const expectedError = 'Input is not a string';

    expect(() => iniToJson(ini)).to.throw(expectedError);
  });

  it('should call console.warn with a warning message if the input is an empty string', function () {
    const ini = '';
    const consoleWarnStub = sinon.stub(console, 'warn');
    const expectedWarning = 'Input INI file is empty';

    iniToJson(ini);
    expect(consoleWarnStub.calledOnceWith(expectedWarning)).to.be.true;

    consoleWarnStub.restore();
  });

  it('should convert a basic INI file to JSON', () => {
    const iniString = `
      [section]
      key1=value1
      key2=value2
    `;
    const expected = {
      section: {
        key1: 'value1',
        key2: 'value2',
      },
    };
    const result = iniToJson(iniString);
    expect(result).to.deep.equal(expected);
  });

  it('should handle nested INI sections', () => {
    const iniString = `
      [section.subsection]
      key1=value1
      key2=value2
    `;
    const expected = {
      section: {
        subsection: {
          key1: 'value1',
          key2: 'value2',
        },
      },
    };
    const result = iniToJson(iniString);
    expect(result).to.deep.equal(expected);
  });

  it('should handle multi-line INI values', () => {
    const iniString = `
      [section]
      key1=value1
      key2=this is a
            multi-line
            value
    `;
    const expected = {
      section: {
        key1: 'value1',
        key2: 'this is a\nmulti-line\nvalue',
      },
    };
    const result = iniToJson(iniString);
    expect(result).to.deep.equal(expected);
  });

  it('should handle INI values with nested objects', () => {
    const iniString = `
      [section]
      key1=value1
      key2={ "nestedKey": "nestedValue" }
    `;
    const expected = {
      section: {
        key1: 'value1',
        key2: { nestedKey: 'nestedValue' },
      },
    };
    const result = iniToJson(iniString);
    expect(result).to.deep.equal(expected);
  });

  it('should handle INI files with comments', () => {
    const iniString = `
      ; This is a comment
      [section]
      ; Another comment
      key1=value1 ; inline comment
      key2=value2
    `;
    const expected = {
      section: {
        key1: 'value1',
        key2: 'value2',
      },
    };
    const result = iniToJson(iniString);
    expect(result).to.deep.equal(expected);
  });

  it('should handle INI files with duplicate keys', () => {
    const iniString = `
      [section]
      key1=value1
      key1=value2
    `;
    const expected = {
      section: {
        key1: 'value2',
      },
    };
    const result = iniToJson(iniString);
    expect(result).to.deep.equal(expected);
    expect(consoleSpy.calledOnceWithExactly('Duplicate key found: key1')).to.be.true;
  });

  it('should convert INI string to JSON', () => {
    const iniString = `
      [database]
      host = localhost
      port = 5432
      user = myuser
      password = mypassword
      
      [database.config]
      timeout = 5000
      
      [databaseconfig]
      host = { test: "value", tester: "testing" }
    `;

    const expectedJson = {
      database: {
        host: 'localhost',
        port: '5432',
        user: 'myuser',
        password: 'mypassword',
        config: {
          timeout: '5000'
        }
      },
      databaseconfig: {
        host: { test: 'value', tester: 'testing' }
      }
    };

    const result = iniToJson(iniString);
    expect(result).to.deep.equal(expectedJson);
  });

  it('should handle multi-line values and nested objects', () => {
    const iniString = `
      [server]
      host = localhost
      port = 8080
      
      [database]
      connection = {
        host: "localhost",
        port: 5432,
        user: "myuser",
        password: "mypassword",
        database: "mydb"
      }
    `;

    const expectedJson = {
      server: {
        host: 'localhost',
        port: '8080'
      },
      database: {
        connection: {
          host: 'localhost',
          port: 5432,
          user: 'myuser',
          password: 'mypassword',
          database: 'mydb'
        }
      }
    };

    const result = iniToJson(iniString);
    expect(result).to.deep.equal(expectedJson);
  });

  it('should ignore comments and empty lines', () => {
    const iniString = `
      ; This is a comment
      
      [server]
      ; This is another comment
      host = localhost
      
      [database]
      user = myuser
      
      ; This is a comment between sections
      
      [database.config]
      timeout = 5000
    `;

    const expectedJson = {
      server: {
        host: 'localhost'
      },
      database: {
        user: 'myuser',
        config: {
          timeout: '5000'
        }
      }
    };

    const result = iniToJson(iniString);
    expect(result).to.deep.equal(expectedJson);
  });

  it('should handle sub-sections with nested properties', () => {
    const iniString = `
      [section.subsection]
      key1 = value1
      
      [section.subsection.subsubsection]
      key2 = value2
    `;

    const expectedJson = {
      section: {
        subsection: {
          key1: 'value1',
          subsubsection: {
            key2: 'value2'
          }
        }
      }
    };

    const result = iniToJson(iniString);
    expect(result).to.deep.equal(expectedJson);
  });

  it('should handle basic INI files', () => {
    const iniString = `
      ; This is a comment
      [database]
      host = localhost
      port = 5432
      user = myuser
      password = mypassword
      
      [database.config]
      timeout = 5000
      
      [databaseconfig]
      host = { test: "value", tester: "testing"  }
    `;

    const expectedResult = {
      database: {
        host: 'localhost',
        port: '5432',
        user: 'myuser',
        password: 'mypassword',
        config: {
          timeout: '5000',
        },
      },
      databaseconfig: {
        host: { test: 'value', tester: 'testing' },
      },
    };

    const result = iniToJson(iniString);
    assert.deepEqual(result, expectedResult);
  });

  it('should handle nested sub-sections with same name', () => {
    const iniString = `
      [foo.bar]
      baz = 1
      
      [foo.bar.baz]
      qux = 2
    `;

    const expectedResult = {
      foo: {
        bar: {
          baz: {
            qux: '2',
          },
          baz: '1',
        },
      },
    };

    const result = iniToJson(iniString);
    assert.deepEqual(result, expectedResult);
  });

  it('should handle INI files with malformed lines', () => {
    const iniString = `
      [foo]
      bar = baz
      
      This line is malformed
      
      [qux]
      quux = corge
      
      This line is also malformed
    `;

    const expectedResult = {
      foo: {
        bar: 'baz',
      },
      qux: {
        quux: 'corge',
      },
    };

    const result = iniToJson(iniString);
    assert.deepEqual(result, expectedResult);
  });

  it('should handle INI files with empty sections', () => {
    const iniString = `
      [foo]
      
      [bar]
      baz = qux
    `;

    const expectedResult = {
      foo: {},
      bar: {
        baz: 'qux',
      },
    };

    const result = iniToJson(iniString);
    assert.deepEqual(result, expectedResult);
  });

})


