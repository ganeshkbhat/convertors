

function envToJson(filePath) {
    const fs = require('fs');
    const envFile = fs.readFileSync(filePath, { encoding: 'utf-8' });
    const envJson = {};

    envFile.split('\n').forEach((line) => {
        const [key, value] = line.split('=');
        if (key) {
            envJson[key.trim()] = value.trim();
        }
    });

    return envJson;
}

module.exports.envToJson = envToJson;
