# jsparsers

npm `jsparsers` module for file format to format convertors for `ini`, `yaml`, `json`, `xml`, `html`, `css`, `less`, `sass` to `json` and `json back to specific file formats`.



### DEMOS

Find the demos in the [demo folder](https://github.com/ganeshkbhat/convertors/tree/main/demos)



### INSTALLATION

`npm install jsparsers --save`

npm Package: [jsparsers](https://www.npmjs.com/package/jsparsers)



### USAGE

```

let jsp = require("jsparsers");

```

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
    this.yaml
    this.yml
    this.xml
    this.json
}

```

```

function InterfaceJSObjectParserCSS(jsObject) {
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

## ini

```

let jsp = require("jsparsers");

```


## xml

```

let jsp = require("jsparsers");

```


## dotenv

```

let jsp = require("jsparsers");

```


## yaml

```

let jsp = require("jsparsers");

```


## css

```

let jsp = require("jsparsers");

```


## scss

```

let jsp = require("jsparsers");

```


## sass

```

let jsp = require("jsparsers");

```


## less

```

let jsp = require("jsparsers");

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


``` -->

<!-- 
### Yaml to Ini OR Ini to Yaml

#### yaml2ini

`require("jsparsers").yaml2ini(str)`

```



```

#### ini2yaml

`require("jsparsers").ini2yaml(str)`

```



```

### parseObjectKey

#### setKey

`require("jsparsers").setKey(key, value, object)`

```



```

#### getKey

`require("jsparsers").getKey(key, object)`

```



``` -->

<!--
### parseDom


##### json2dom

`require("jsparsers").json2dom(jsonObject)`

``

```



```


##### dom2json

`require("jsparsers").dom2json(str)`

```



```


### parseXML


##### json2xml

`require("jsparsers").json2xml(jsonObject)`

```



```

##### xml2json

`require("jsparsers").xml2json(str)`

```



```


### parseCss


##### css2json

`require("jsparsers").css2json(str)`

```



```

##### json2css

`require("jsparsers").json2css(jsonObject)`

```



```


### parseLess


##### less2json

`require("jsparsers").less2json(str)`

```



```


##### json2less

`require("jsparsers").json2less(jsonObject)`

```



```


##### less2css

`require("jsparsers").less2css(str)`

```



```


### parseSass


##### sass2json

`require("jsparsers").sass2json(str)`

```



```


##### json2sass

`require("jsparsers").json2sass(jsonObject)`

```



```


##### sass2css

`require("jsparsers").sass2css(str)`

```



``` -->

## TODO

- parseDom, parseHtml
- parseXml
- parseCss
- parseSass
- parseLess
