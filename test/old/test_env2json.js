const fs = require('fs');
const { expect } = require('chai');

describe('envToJson', () => {
  const envFile = `PORT=3000
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=user
    DB_PASS=pass`;

  before(() => {
    fs.writeFileSync('.env', envFile);
  });

  after(() => {
    fs.unlinkSync('.env');
  });

  const envToJson = require('../index').parseEnvToJson.envToJson;

  it('should convert .env file to JSON object', () => {
    const expected = {
      PORT: '3000',
      DB_HOST: 'localhost',
      DB_PORT: '5432',
      DB_USER: 'user',
      DB_PASS: 'pass'
    };

    const actual = envToJson('.env');
    expect(actual).to.deep.equal(expected);
  });

  it('should return empty object for empty .env file', () => {
    const expected = {};
    fs.writeFileSync('.env', '');
    const actual = envToJson('.env');
    expect(actual).to.deep.equal(expected);
  });

  it('should ignore comments and empty lines in .env file', () => {
    const expected = {
      PORT: '3000',
      DB_HOST: 'localhost',
      DB_PORT: '5432',
      DB_USER: 'user'
    };

    fs.writeFileSync('.env', `${envFile}
      # comment
      DB_PASS=pass
      
      `);

    const actual = envToJson('.env');
    expect(actual).to.deep.equal(expected);
  });
});
