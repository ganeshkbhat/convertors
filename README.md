# jsparsers

npm `jsparsers` module for file format to format convertors for `ini`, `yaml`, `yml`, `dotenv`, `conf`, `sys`, `tsv`, `csv`, `toml`, `json`, `xml`, `md`, `html`, `css`, `less`, `sass` to `json` and `json back to specific file formats`. This is not a javascript language parser. 



### DEMOS

Find the demos in the [demo folder](https://github.com/ganeshkbhat/convertors/tree/main/demos)



### INSTALLATION

`npm install jsparsers --save`

npm Package: [jsparsers](https://www.npmjs.com/package/jsparsers)



### USAGE

```

let jsp = require("jsparsers");
let ini = jsp.ini();

ini.readFile()
ini.writeFile()
ini.load()
ini.write()
ini.parse()
ini.serialize()
ini.ini()
ini.toml
ini.tsv
ini.sys
ini.yaml()
ini.yml()
ini.xml()
ini.json()
ini.css()
ini.less()
ini.scss()
ini.sass()

```

All the file format parsers will have the same functions as above in almost all instances with same usages. The file formats applicable are for `ini`, `toml`, `tsv`, `sys`, `yaml`, `xml`, `dotenv`, `css`, `scss`, `sass`, `less`, `html`.

Each of the parsers follow the following `interfaces` namely `InterfaceReader` and the parser follows `InterfaceJSObjectParser` for all formats and `InterfaceJSObjectParserCSS` for all css based parser formats


```

function InterfaceReader() {
    this.readFile
    this.writeFile
    this.load
    this.write
    this.parse
    this.serialize
}

```

```

function InterfaceJSObjectParser(jsObject) {
    this.ini
    this.toml
    this.tsv
    this.sys
    this.yaml
    this.yml
    this.xml
    this.json
}

```

```

function InterfaceJSObjectParserCSS(jsObject) {
    InterfaceJSObjectParser

    this.css
    this.less
    this.scss
    this.sass
}

```


Each of the convertors follow the following `interfaces` `InterfaceReader` for each of the file format and the convertors follow `InterfaceJSObjectConvertor` for all normal formats and `InterfaceJSObjectConvertorCSS` for css based string convertors 


```

function InterfaceReader() {
    this.readFile
    this.writeFile
    this.load
    this.write
    this.parse
    this.serialize
}

```

```

function InterfaceJSObjectConvertor(jsObject) {
    this.ini
    this.toml
    this.tsv
    this.sys
    this.yaml
    this.yml
    this.xml
    this.json
}

function InterfaceJSObjectConvertorCSS(jsObject) {
    InterfaceJSObjectConvertor

    this.css
    this.less
    this.scss
    this.sass
}

```

Both the `parsers and convertors` `will have` the following `final Interface structure`.

```

InterfaceFileFormat() {
    this.readFile
    this.writeFile
    this.load
    this.write
    this.parse
    this.serialize
    this.ini
    this.toml
    this.tsv
    this.sys
    this.yaml
    this.yml
    this.xml
    this.json
    this.css
    this.less
    this.scss
    this.sass
}

// ini: InterfaceFileFormat

```

## ini

```

let jsp = require("jsparsers");
let ini = jsp.ini();

ini.readFile()
ini.writeFile()
ini.load()
ini.write()
ini.parse()
ini.serialize()
ini.ini()
ini.toml
ini.tsv
ini.sys
ini.yaml()
ini.yml()
ini.xml()
ini.json()
ini.css()
ini.less()
ini.scss()
ini.sass()


```


## xml

```

let jsp = require("jsparsers");
let xml = jsp.xml();

```


## toml

```

let jsp = require("jsparsers");
let toml = jsp.toml();

```


## sys

```

let jsp = require("jsparsers");
let sys = jsp.sys();

```


## tsv

```

let jsp = require("jsparsers");
let tsv = jsp.tsv();

```


## dotenv

```

let jsp = require("jsparsers");
let dotenv = jsp.dotenv();

```


## yaml

```

let jsp = require("jsparsers");
let yaml = jsp.yaml();

```

<!-- 
## xls

```

let jsp = require("jsparsers");
let xls = jsp.xls();

``` -->

<!-- 
## pdf

```

let jsp = require("jsparsers");
let pdf = jsp.pdf();

``` -->


## css

```

let jsp = require("jsparsers");
let css = jsp.css();

```


## scss

```

let jsp = require("jsparsers");
let scss = jsp.scss();

```


## sass

```

let jsp = require("jsparsers");
let sass = jsp.sass();

```


## less

```

let jsp = require("jsparsers");
let less = jsp.less();

```


<!-- 


### parseIni

#### ini2json

`require("jsparsers").ini2json(str)`

```

const iniString = `
; This is a comment
[database]
host = localhost
port = 5432
user = myuser
password = mypassword

[database.config]
timeout = 5000
`;

const result = iniToJson(iniString);
console.log(result);

```

#### json2ini

`require("jsparsers").json2ini(jsonObject)`

```

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


```

### parseYaml

#### yaml2json

`require("jsparsers").yaml2json(str)`

```

const yamlString = `
# Example YAML file
section1:
  key1: value1
  key2:
    subkey1: |
      This is a
      multi-line value
    subkey2: value2

section2:
  key3: value3
`;

const jsonString = yamlToJson(yamlString);
console.log(jsonString);

```

#### json2yaml

`require("jsparsers").json2yaml(jsonObject)`

```

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

  const yamlString = jsonToYaml(jsonObject);
  console.log(yamlString);


``` 

-->


## TODO

- Seperate DOM and HTML parser Interface to be seperate from others.

<!-- 
- parseHtml
- parseDom
- parseXml
- parseCss
- parseSass
- parseLess 
-->

<!-- 
"alasql": "^4.2.3",
"isomorphic-dompurify": "^2.2.0",
"json-sql": "^0.5.0",
"json-sql-builder": "^1.0.26",
"json-sql-builder2": "^1.0.24",
"js-sql-from-json": "^1.0.12",
"pdf_neutralize": "^1.0.0",
"pdf-node": "^0.0.2",
"pdf2html": "^3.1.0",
"pdfjs-dist": "^4.0.379",
"pdfkit": "^0.14.0",
"marked-renderer-pdf": "^0.0.5",
"sql-ddl-to-json-schema": "^4.1.0",
"v8": "^0.1.0",
"canvas": "^2.11.2",
"@stevemao/pdf-extraction": "^1.0.3",
"knex": "^3.1.0",
"markdown-pdf": "^11.0.0",
"ghostscript-node": "^1.5.0",
"tough-cookie": "^4.1.3"
-->