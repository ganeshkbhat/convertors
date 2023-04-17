
var { parseCss, parser } = require("../src/parserCss");

const cssstring = `
    ELEMENTSELECTOR { 
        key1: value;
        key2:value;
    }
p{ 
        key1: value;
        key2:value;
    }
    p.ex{ 
        key1: value;
        key2:value;
    }
a     { 
        key1: value;
        key2:value;
    }
    p > div > a     { 
        key1: value;
        key2:value;
    }
    .CLASSSELECTOR { 
        key1: value;
        key2:value;
    }

    .CLASSSELECTOR > .clsa > a { 
        key1: value;
        key2:value;
    }

    .cssclass { 
        key1: value;
        key2:value;
    }
    
    .cssclass .clsa a { 
        key1: value;
        key2:value;
    }

    .css-class-two { 
        key1: value;
        key2:value;
    }
    #IDSELECTOR { 
        key1: value;
        key2:value;
    }
    #element-id { 
        key1: value;
        key2:value;
    }
    #elementid2 { 
        key1: value;
        key2:value;
        key1: value;
        key2:value;
        key11: value;
        key21:value;
    }
`;

const cssnamedsample = `
/* SOME CSS COMMENT */

@css-name {
  font-family: "Google Sans";
  src: url(//fonts.gstatic.com/s/googlesans/v29/4UairENHsxJlGDuGo1OIlL3L2JB80eWHxVA9_Iou-BqGpjmscm43kO8Q5nYku74vu-A.woff2)
    format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

@csstagname {
  font-family: "Google Sans";
  src: url(//fonts.gstatic.com/s/googlesans/v29/4UairENHsxJlGDuGo1OIlL3L2JB80eWHxVA9_Iou-BqGpjmscm43kO8Q5nYku74vu-A.woff2)
    format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

@csstagname .csstagname_string {
  100% {
    opacity: 1;
  }
  0% {
    transform: translateX(-300px);
  }
  5% {
    transform: translateX(-240px);
  }
  15% {
    transform: translateX(-30px);
  }
  24% {
    animation-timing-function: cubic-bezier(0.8, 0, 0.6, 1);
    transform: rotate(-25deg);
  }
  100% {
    transform: rotate(-43deg);
  }
}

@csstagname csstagname_string {
  100% {
    opacity: 1;
  }
  0% {
    transform: translateX(-300px);
  }
  5% {
    transform: translateX(-240px);
  }
  15% {
    transform: translateX(-30px);
  }
  24% {
    animation-timing-function: cubic-bezier(0.8, 0, 0.6, 1);
    transform: rotate(-25deg);
  }
  100% {
    transform: rotate(-43deg);
  }
}

@csstagname #csstagname_string {
  100% {
    opacity: 1;
  }
  0% {
    transform: translateX(-300px);
  }
  5% {
    transform: translateX(-240px);
  }
  15% {
    transform: translateX(-30px);
  }
  24% {
    animation-timing-function: cubic-bezier(0.8, 0, 0.6, 1);
    transform: rotate(-25deg);
  }
  100% {
    transform: rotate(-43deg);
  }
}

@csstagname (min-resolution: 144dpi) {
  .csstagname {
    background-image: url(https://ssl.gstatic.com/cloudsearch/static/o/d/0016-a3cdcdc31a16b3497ed6ffcdaee4f325/qicons-hdpi.png);
  }
}

@csstagname (min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5) {
  .csstagname {
    background-image: url(https://ssl.gstatic.com/cloudsearch/static/o/d/0016-a3cdcdc31a16b3497ed6ffcdaee4f325/qicons-hdpi.png);
  }
}

* tagname .csstagname-css-block {
  display: inline;
}

* tagname .csstagname-css_block {
  display: inline;
}

* tagname tagnamecss .csstagname-css-block {
  display: inline;
}

*:childnumbering-child + tagname .csstagname_css-block {
  display: inline;
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: arial, sans-serif;
}

tagname {
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: arial, sans-serif;
}

tagname,
tagnamecss,
tagname_one,
.csstagname_one,
#csstagname {
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: arial, sans-serif;
}

#csstagname {
  animation: a-s 0.5s 2.5s 1 forwards;
  background-color: #f1f1f1;
  height: 4px;
  margin: 56px auto 20px;
  opacity: 0;
  overflow: hidden;
  position: relative;
  width: 300px;
}

#csstagname::before {
  animation: a-lb 20s 3s linear forwards;
  background-color: #db4437;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transform: translateX(-300px);
  width: 100%;
}

.csstagname {
  color: #757575;
  font-size: 20px;
  letter-spacing: 0.2px;
  line-height: 20px;
  text-align: center;
}

.csstagname_string-seven {
  animation: 3.6s cubic-bezier(0.03, 0, 0.17, 0.67) kf-e;
  margin: 0 auto;
  position: relative;
}

.csstagname_string-seven,
.csstagname_string-fifth {
  height: 165px;
  width: 220px;
}

.csstagname_string-fourth,
.csstagname_string-fifth,
 .csstagname_string-sixth,
 .csstagname_string-seventh,
 .csstagname_string-eight > * {
  position: absolute;
}

..csstagname_string-fourth {
  border-radius: 22px 22px 15px 15px;
  overflow: hidden;
}
.csstagname_string-second .csstagname_string-third,
.csstagname_string-fourth .csstagname_string-fifth,
.csstagname_string-seventh .csstagname_string-sixth {
  background: #f1f3f4;
}


.csstagname_string-second > .csstagname_string-third,
.csstagname_string-fifth > .csstagname_string-fourth {
  border-color: #fafbfb;
}
.csstagname_string-second > .csstagname_string-third {
  background: #fafbfb;
}

.csstagname_string-second {
  position: relative;
  display: -moz-inline-box;
  display: inline-block;
}

.csstagname_string-second {
  border-color: #bbb #bbb #a8a8a8;
  padding: 16px;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  border: 1px solid;
  background: url("//ssl.gstatic.com/ui/v1/icons/common/x_8px.png") no-repeat;
  border: 1px solid transparent;
  height: 21px;
  opacity: 0.4;
  outline: 0;
  position: absolute;
  right: 2px;
  top: 2px;
  width: 21px;
}

.csstagname_string-second:focus {
  border: 1px solid #4d90fe;
  opacity: 0.8;
}

.csstagname_string-second .csstagname_string-third {
  position: absolute;
}

.csstagname_string-second .csstagname_string-third:before,
.csstagname_string-second .csstagname_string-third:after {
  display: block;
  height: 0;
  position: absolute;
  width: 0;
}

.csstagname_string-second .csstagname_string-third::before {
  border: 9px solid;
}

.csstagname_string-second {
  right: 0;
}
.csstagname_string-second .csstagname_string-third::before,
.csstagname_string-second .csstagname_string-third::before {
  border-color: #bbb transparent;
  left: -9px;
}

.csstagname_string-second .csstagname_string-third::before {
  border-color: #a8a8a8 transparent;
}

.csstagname_string-second .csstagname_string-third::after,
.csstagname_string-second .csstagname_string-third::after {
  border-color: #fff transparent;
  left: -8px;
}
.csstagname_string-second .csstagname_string-third::before {
  border-bottom-width: 0;
}
.csstagname_string-second .csstagname_string-third::after {
  border-bottom-width: 0;
}

.csstagname_string-second:left .csstagname_string-third::before,
.csstagname_string-second:right .csstagname_string-third::before {
  border-color: transparent #bbb;
  top: -9px;
}
.csstagname_string-second .csstagname_string-third::after,
.csstagname_string-second .csstagname_string-third::after {
  border-color: transparent #fff;
  top: -8px;
}

.csstagname {
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  -webkit-transition: visibility 0, opacity 0.13s ease-in;
  -moz-transition: visibility 0, opacity 0.13s ease-in;
  -o-transition: visibility 0, opacity 0.13s ease-in;
  transition: visibility 0, opacity 0.13s ease-in;
  background-color: #2a2a2a;
  border: 1px solid #fff;
  color: #fff;
  cursor: default;
  display: block;
  font-size: 11px;
  font-weight: bold;
  margin-left: -1px;
  opacity: 1;
  padding: 7px 9px;
  position: absolute;
  visibility: visible;
  white-space: pre-wrap;
  word-break: break-all;
  word-break: break-word;
}

.csstagname {
  -webkit-transition: visibility 0.13s, opacity 0.13s ease-out,
    left 0 linear 0.13s, top 0 linear 0.13s;
  -moz-transition: visibility 0.13s, opacity 0.13s ease-out, left 0 linear 0.13s,
    top 0 linear 0.13s;
  -o-transition: visibility 0.13s, opacity 0.13s ease-out, left 0 linear 0.13s,
    top 0 linear 0.13s;
  transition: visibility 0.13s, opacity 0.13s ease-out, left 0 linear 0.13s,
    top 0 linear 0.13s;
  opacity: 0;
  left: 20px !important;
  top: 20px !important;
  visibility: hidden;
}

.csstagname_string-second {
  -webkit-transition: visibility 0.13s, opacity 0.13s ease-out,
    left 0 linear 0.13s, top 0 linear 0.13s;
  -moz-transition: visibility 0.13s, opacity 0.13s ease-out, left 0 linear 0.13s,
    top 0 linear 0.13s;
  -o-transition: visibility 0.13s, opacity 0.13s ease-out, left 0 linear 0.13s,
    top 0 linear 0.13s;
  transition: visibility 0.13s, opacity 0.13s ease-out, left 0 linear 0.13s,
    top 0 linear 0.13s;
  opacity: 0;
  left: 20px !important;
  top: 20px !important;
  visibility: hidden;
}

.csstagname_string-second .csstagname_string-third:before,
.csstagname_string-second .csstagname_string-third:after {
  content: "";
  display: block;
  height: 0;
  position: absolute;
  width: 0;
}
.csstagname_string-second .csstagname_string-third:before {
  border: 6px solid;
}
.csstagname_string-second .csstagname_string-third:after {
  border: 5px solid;
}

.csstagname_string-second:left {
  left: -6px;
}
.csstagname_string-second:right {
  right: 0;
}

.csstagname_string {
  margin: 5px 0;
  font: 14px arial, sans-serif;
}

.csstagname_string {
  background: url("//ssl.gstatic.com/ui/v1/icons/mail/sprite_black2.png");
  width: 21px;
  height: 16px;
  margin-top: -5px;
  margin-right: 3px;
  border: 1px solid #fff;
  color: #777;
  margin-bottom: 3px;
  font: 14px arial, sans-serif;
  background: url("//ssl.gstatic.com/mail/sprites/general-28e9627ce25f296789298024751a0d39.png") -0px -290px
    no-repeat;
  width: 16px;
  height: 16px;
  background-image: url(https://ssl.gstatic.com/cloudsearch/static/o/d/0016-a3cdcdc31a16b3497ed6ffcdaee4f325/qicons.png);
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 32px;
  height: 32px;

}

.csstagname_string:hover {
  border: 1px solid #4d90fe;
}

.csstagname_string {
  margin-top: 5px;
}

.csstagname_string2 {
  background-position: 5px -32px;
  opacity: 0.55;
  background-position: 0 0;
  margin: 5px -5px 2px 5px;
  background-position: 5px -64px;
  opacity: 0.55;
}


@keyframes .csstagname_string {
  100% {
    opacity: 1;
  }
  0% {
    transform: translateX(-300px);
  }
  5% {
    transform: translateX(-240px);
  }
  15% {
    transform: translateX(-30px);
  }
  24% {
    animation-timing-function: cubic-bezier(0.8, 0, 0.6, 1);
    transform: rotate(-25deg);
  }
  100% {
    transform: rotate(-43deg);
  }
}

@keyframes csstagname_string {
  100% {
    opacity: 1;
  }
  0% {
    transform: translateX(-300px);
  }
  5% {
    transform: translateX(-240px);
  }
  15% {
    transform: translateX(-30px);
  }
  24% {
    animation-timing-function: cubic-bezier(0.8, 0, 0.6, 1);
    transform: rotate(-25deg);
  }
  100% {
    transform: rotate(-43deg);
  }
}

@keyframes #csstagname_string {
  100% {
    opacity: 1;
  }
  0% {
    transform: translateX(-300px);
  }
  5% {
    transform: translateX(-240px);
  }
  15% {
    transform: translateX(-30px);
  }
  24% {
    animation-timing-function: cubic-bezier(0.8, 0, 0.6, 1);
    transform: rotate(-25deg);
  }
  100% {
    transform: rotate(-43deg);
  }
}


@media (min-resolution: 144dpi) {
  .csstagname {
    background-image: url(https://ssl.gstatic.com/cloudsearch/static/o/d/0016-a3cdcdc31a16b3497ed6ffcdaee4f325/qicons-hdpi.png);
  }
}

@media (min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5) {
  .csstagname {
    background-image: url(https://ssl.gstatic.com/cloudsearch/static/o/d/0016-a3cdcdc31a16b3497ed6ffcdaee4f325/qicons-hdpi.png);
  }
}

/* SOME CSS COMMENT */

@font-face {
  font-family: "Google Sans";
  src: url(//fonts.gstatic.com/s/googlesans/v29/4UairENHsxJlGDuGo1OIlL3L2JB80eWHxVA9_Iou-BqGpjmscm43kO8Q5nYku74vu-A.woff2)
    format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

@font-face {
  font-family: "Google Sans";
  src: url(//fonts.gstatic.com/s/googlesans/v29/4UairENHsxJlGDuGo1OIlL3L2JB80eWHxVA9_Iou-BqGpjmscm43kO8Q5nYku74vu-A.woff2)
    format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

* html .goog-inline-block {
  display: inline;
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: arial, sans-serif;
}

*:first-child + html .goog-inline-block {
  display: inline;
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: arial, sans-serif;
}

body {
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: arial, sans-serif;
}

body,
input,
textarea,
select,
#loading {
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: arial, sans-serif;
}

.msg {
  color: #757575;
  font-size: 20px;
  letter-spacing: 0.2px;
  line-height: 20px;
  text-align: center;
}

#loading {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: #fff;
}

@keyframes a-s {
  100% {
    opacity: 1;
  }
  0% {
    transform: translateX(-300px);
  }
  5% {
    transform: translateX(-240px);
  }
  15% {
    transform: translateX(-30px);
  }
  24% {
    animation-timing-function: cubic-bezier(0.8, 0, 0.6, 1);
    transform: rotate(-25deg);
  }
  100% {
    transform: rotate(-43deg);
  }
}

@keyframes #a-s {
  100% {
    opacity: 1;
  }
  0% {
    transform: translateX(-300px);
  }
  5% {
    transform: translateX(-240px);
  }
  15% {
    transform: translateX(-30px);
  }
  24% {
    animation-timing-function: cubic-bezier(0.8, 0, 0.6, 1);
    transform: rotate(-25deg);
  }
  100% {
    transform: rotate(-43deg);
  }
}


@keyframes a-lb {
  100% {
    opacity: 1;
  }
  0% {
    transform: translateX(-300px);
  }
  5% {
    transform: translateX(-240px);
  }
  15% {
    transform: translateX(-30px);
  }
  24% {
    animation-timing-function: cubic-bezier(0.8, 0, 0.6, 1);
    transform: rotate(-25deg);
  }
  100% {
    transform: rotate(-43deg);
  }
}

.csstagname_string-seven {
  animation: 3.6s cubic-bezier(0.03, 0, 0.17, 0.67) kf-e;
  margin: 0 auto;
  position: relative;
}

.csstagname_string-seven,
.csstagname_string-fifth {
  height: 165px;
  width: 220px;
}

.csstagname_string-fourth,
.csstagname_string-fifth,
 .csstagname_string-sixth,
 .csstagname_string-seventh,
 .csstagname_string-eight > * {
  position: absolute;
}

..csstagname_string-fourth {
  border-radius: 22px 22px 15px 15px;
  overflow: hidden;
}
.csstagname_string-second .csstagname_string-third,
.csstagname_string-fourth .csstagname_string-fifth,
.csstagname_string-seventh .csstagname_string-sixth {
  background: #f1f3f4;
}


.csstagname_string-second > .csstagname_string-third,
.csstagname_string-fifth > .csstagname_string-fourth {
  border-color: #fafbfb;
}
.csstagname_string-second > .csstagname_string-third {
  background: #fafbfb;
}

.csstagname_string-second {
  position: relative;
  display: -moz-inline-box;
  display: inline-block;
}

.csstagname_string-second {
  border-color: #bbb #bbb #a8a8a8;
  padding: 16px;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  border: 1px solid;
  background: url("//ssl.gstatic.com/ui/v1/icons/common/x_8px.png") no-repeat;
  border: 1px solid transparent;
  height: 21px;
  opacity: 0.4;
  outline: 0;
  position: absolute;
  right: 2px;
  top: 2px;
  width: 21px;
}

.csstagname_string-second:focus {
  border: 1px solid #4d90fe;
  opacity: 0.8;
}

.csstagname_string-second .csstagname_string-third {
  position: absolute;
}

.csstagname_string-second .csstagname_string-third:before,
.csstagname_string-second .csstagname_string-third:after {
  display: block;
  height: 0;
  position: absolute;
  width: 0;
}

.csstagname_string-second .csstagname_string-third:before {
  border: 9px solid;
}

.csstagname_string-second {
  right: 0;
}
.csstagname_string-second .csstagname_string-third:before,
.csstagname_string-second .csstagname_string-third:before {
  border-color: #bbb transparent;
  left: -9px;
}

.csstagname_string-second .csstagname_string-third:after,
.csstagname_string-second .csstagname_string-third:after {
  border-color: #fff transparent;
  left: -8px;
}

.csstagname_string-second .csstagname_string-third:before {
  border-color: #a8a8a8 transparent;
}

.csstagname_string-second .csstagname_string-third:after {
  border-color: #a8a8a8 transparent;
  border-bottom-width: 0;
}

.csstagname_string-second .csstagname_string-third:eventname {
  border-color: #a8a8a8 transparent;
  border-bottom-width: 0;
}


.csstagname_string-second:left .csstagname_string-third:before,
.csstagname_string-second:right .csstagname_string-third:before {
  border-color: transparent #bbb;
  top: -9px;
}
.csstagname_string-second .csstagname_string-third:after,
.csstagname_string-second .csstagname_string-third:after {
  border-color: transparent #fff;
  top: -8px;
}

.csstagname {
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  -webkit-transition: visibility 0, opacity 0.13s ease-in;
  -moz-transition: visibility 0, opacity 0.13s ease-in;
  -o-transition: visibility 0, opacity 0.13s ease-in;
  transition: visibility 0, opacity 0.13s ease-in;
  background-color: #2a2a2a;
  border: 1px solid #fff;
  color: #fff;
  cursor: default;
  display: block;
  font-size: 11px;
  font-weight: bold;
  margin-left: -1px;
  opacity: 1;
  padding: 7px 9px;
  position: absolute;
  visibility: visible;
  white-space: pre-wrap;
  word-break: break-all;
  word-break: break-word;
}

.csstagname {
  -webkit-transition: visibility 0.13s, opacity 0.13s ease-out,
    left 0 linear 0.13s, top 0 linear 0.13s;
  -moz-transition: visibility 0.13s, opacity 0.13s ease-out, left 0 linear 0.13s,
    top 0 linear 0.13s;
  -o-transition: visibility 0.13s, opacity 0.13s ease-out, left 0 linear 0.13s,
    top 0 linear 0.13s;
  transition: visibility 0.13s, opacity 0.13s ease-out, left 0 linear 0.13s,
    top 0 linear 0.13s;
  opacity: 0;
  left: 20px !important;
  top: 20px !important;
  visibility: hidden;
}

.csstagname_string-second {
  -webkit-transition: visibility 0.13s, opacity 0.13s ease-out,
    left 0 linear 0.13s, top 0 linear 0.13s;
  -moz-transition: visibility 0.13s, opacity 0.13s ease-out, left 0 linear 0.13s,
    top 0 linear 0.13s;
  -o-transition: visibility 0.13s, opacity 0.13s ease-out, left 0 linear 0.13s,
    top 0 linear 0.13s;
  transition: visibility 0.13s, opacity 0.13s ease-out, left 0 linear 0.13s,
    top 0 linear 0.13s;
  opacity: 0;
  left: 20px !important;
  top: 20px !important;
  visibility: hidden;
}

.csstagname_string-second .csstagname_string-third:before,
.csstagname_string-second .csstagname_string-third:after {
  content: "";
  display: block;
  height: 0;
  position: absolute;
  width: 0;
}
.csstagname_string-second .csstagname_string-third:before {
  border: 6px solid;
}
.csstagname_string-second .csstagname_string-third:after {
  border: 5px solid;
}

.csstagname_string-second:left {
  left: -6px;
}
.csstagname_string-second:right {
  right: 0;
}

.csstagname_string {
  margin: 5px 0;
  font: 14px arial, sans-serif;
}

.csstagname_string {
  background: url("//ssl.gstatic.com/ui/v1/icons/mail/sprite_black2.png");
  width: 21px;
  height: 16px;
  margin-top: -5px;
  margin-right: 3px;
  border: 1px solid #fff;
  color: #777;
  margin-bottom: 3px;
  font: 14px arial, sans-serif;
  background: url("//ssl.gstatic.com/mail/sprites/general-28e9627ce25f296789298024751a0d39.png") -0px -290px
    no-repeat;
  width: 16px;
  height: 16px;
  background-image: url(https://ssl.gstatic.com/cloudsearch/static/o/d/0016-a3cdcdc31a16b3497ed6ffcdaee4f325/qicons.png);
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 32px;
  height: 32px;
}

.csstagname_string {
  margin-top: 5px;
}

.csstagname_string:hover {
  border: 1px solid #4d90fe;
}

.csstagname_string2 {
  background-position: 5px -32px;
  opacity: 0.55;
  background-position: 0 0;
  margin: 5px -5px 2px 5px;
  background-position: 5px -64px;
  opacity: 0.55;
}


#csstagname_string {
  margin-top: 5px;
}

#csstagname_string:hover {
  border: 1px solid #4d90fe;
}

#csstagname_string2 {
  background-position: 5px -32px;
  opacity: 0.55;
  background-position: 0 0;
  margin: 5px -5px 2px 5px;
  background-position: 5px -64px;
  opacity: 0.55;
}

@media (min-resolution: 144dpi) {
  .csstagname {
    background-image: url(https://ssl.gstatic.com/cloudsearch/static/o/d/0016-a3cdcdc31a16b3497ed6ffcdaee4f325/qicons-hdpi.png);
  }
}

@media (min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5) {
  .csstagname {
    background-image: url(https://ssl.gstatic.com/cloudsearch/static/o/d/0016-a3cdcdc31a16b3497ed6ffcdaee4f325/qicons-hdpi.png);
  }
}

`



console.log(JSON.stringify(parseCss(cssnamedsample)));
console.log(JSON.stringify(parseCss(cssstring)));
// console.log(JSON.stringify(parser(cssnamedsample)));
