const nestedObj = {
    section1: {
        value1: 'hello',
        value2: 'world',
    },
    section2: {
        value1: 'foo',
        value2: 'bar',
        subSection: {
            value1: 'nested value',
        },
    },
};

const iniString = jsonToIni(nestedObj);

console.log(iniString);

// [section1]
// value1 = hello
// value2 = world

// [section2]
// value1 = foo
// value2 = bar

// [section2.subSection]
// value1 = nested value
