

/**
 *
 *
 * @param {*} obj
 * @return {*} 
 */
function jsonToIni(obj) {
    const sections = [];

    function stringifySection(section, body) {
        const keys = Object.keys(body);
        if (keys.length === 0) {
            return `[${section}]\n`;
        }
        const properties = keys
            .map((key) => {
                const value = body[key];
                if (typeof value === 'object') {
                    return stringifySection(`${section}.${key}`, value);
                } else {
                    return `${key}=${value}\n`;
                }
            })
            .join('');
        return `[${section}]\n${properties}`;
    }

    const keys = Object.keys(obj);
    for (const key of keys) {
        const value = obj[key];
        if (typeof value === 'object') {
            sections.push(stringifySection(key, value));
        } else {
            sections.push(`${key}=${value}\n`);
        }
    }
    return sections.join('');
}

module.exports.jsonToIni = jsonToIni;
