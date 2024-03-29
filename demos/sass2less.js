let less = require('less')
let sass2less = require('less-plugin-sass2less');

// https://raw.githubusercontent.com/google/material-design-lite/mdl-1.x/src/_variables.scss

let scssfile = `
/**
* Copyright 2015 Google Inc. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* ==========  Color Palettes  ========== */

// Color order: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, A100, A200,
// A400, A700.

$palette-red:
"255,235,238"
"255,205,210"
"239,154,154"
"229,115,115"
"239,83,80"
"244,67,54"
"229,57,53"
"211,47,47"
"198,40,40"
"183,28,28"
"255,138,128"
"255,82,82"
"255,23,68"
"213,0,0";

$palette-red-50: nth($palette-red, 1);
$palette-red-100: nth($palette-red, 2);
$palette-red-200: nth($palette-red, 3);
$palette-red-300: nth($palette-red, 4);
$palette-red-400: nth($palette-red, 5);
$palette-red-500: nth($palette-red, 6);
$palette-red-600: nth($palette-red, 7);
$palette-red-700: nth($palette-red, 8);
$palette-red-800: nth($palette-red, 9);
$palette-red-900: nth($palette-red, 10);
$palette-red-A100: nth($palette-red, 11);
$palette-red-A200: nth($palette-red, 12);
$palette-red-A400: nth($palette-red, 13);
$palette-red-A700: nth($palette-red, 14);

$palette-pink:
"252,228,236"
"248,187,208"
"244,143,177"
"240,98,146"
"236,64,122"
"233,30,99"
"216,27,96"
"194,24,91"
"173,20,87"
"136,14,79"
"255,128,171"
"255,64,129"
"245,0,87"
"197,17,98";

$palette-pink-50: nth($palette-pink, 1);
$palette-pink-100: nth($palette-pink, 2);
$palette-pink-200: nth($palette-pink, 3);
$palette-pink-300: nth($palette-pink, 4);
$palette-pink-400: nth($palette-pink, 5);
$palette-pink-500: nth($palette-pink, 6);
$palette-pink-600: nth($palette-pink, 7);
$palette-pink-700: nth($palette-pink, 8);
$palette-pink-800: nth($palette-pink, 9);
$palette-pink-900: nth($palette-pink, 10);
$palette-pink-A100: nth($palette-pink, 11);
$palette-pink-A200: nth($palette-pink, 12);
$palette-pink-A400: nth($palette-pink, 13);
$palette-pink-A700: nth($palette-pink, 14);

$palette-purple:
"243,229,245"
"225,190,231"
"206,147,216"
"186,104,200"
"171,71,188"
"156,39,176"
"142,36,170"
"123,31,162"
"106,27,154"
"74,20,140"
"234,128,252"
"224,64,251"
"213,0,249"
"170,0,255";

$palette-purple-50: nth($palette-purple, 1);
$palette-purple-100: nth($palette-purple, 2);
$palette-purple-200: nth($palette-purple, 3);
$palette-purple-300: nth($palette-purple, 4);
$palette-purple-400: nth($palette-purple, 5);
$palette-purple-500: nth($palette-purple, 6);
$palette-purple-600: nth($palette-purple, 7);
$palette-purple-700: nth($palette-purple, 8);
$palette-purple-800: nth($palette-purple, 9);
$palette-purple-900: nth($palette-purple, 10);
$palette-purple-A100: nth($palette-purple, 11);
$palette-purple-A200: nth($palette-purple, 12);
$palette-purple-A400: nth($palette-purple, 13);
$palette-purple-A700: nth($palette-purple, 14);

$palette-deep-purple:
"237,231,246"
"209,196,233"
"179,157,219"
"149,117,205"
"126,87,194"
"103,58,183"
"94,53,177"
"81,45,168"
"69,39,160"
"49,27,146"
"179,136,255"
"124,77,255"
"101,31,255"
"98,0,234";

$palette-deep-purple-50: nth($palette-deep-purple, 1);
$palette-deep-purple-100: nth($palette-deep-purple, 2);
$palette-deep-purple-200: nth($palette-deep-purple, 3);
$palette-deep-purple-300: nth($palette-deep-purple, 4);
$palette-deep-purple-400: nth($palette-deep-purple, 5);
$palette-deep-purple-500: nth($palette-deep-purple, 6);
$palette-deep-purple-600: nth($palette-deep-purple, 7);
$palette-deep-purple-700: nth($palette-deep-purple, 8);
$palette-deep-purple-800: nth($palette-deep-purple, 9);
$palette-deep-purple-900: nth($palette-deep-purple, 10);
$palette-deep-purple-A100: nth($palette-deep-purple, 11);
$palette-deep-purple-A200: nth($palette-deep-purple, 12);
$palette-deep-purple-A400: nth($palette-deep-purple, 13);
$palette-deep-purple-A700: nth($palette-deep-purple, 14);

$palette-indigo:
"232,234,246"
"197,202,233"
"159,168,218"
"121,134,203"
"92,107,192"
"63,81,181"
"57,73,171"
"48,63,159"
"40,53,147"
"26,35,126"
"140,158,255"
"83,109,254"
"61,90,254"
"48,79,254";

$palette-indigo-50: nth($palette-indigo, 1);
$palette-indigo-100: nth($palette-indigo, 2);
$palette-indigo-200: nth($palette-indigo, 3);
$palette-indigo-300: nth($palette-indigo, 4);
$palette-indigo-400: nth($palette-indigo, 5);
$palette-indigo-500: nth($palette-indigo, 6);
$palette-indigo-600: nth($palette-indigo, 7);
$palette-indigo-700: nth($palette-indigo, 8);
$palette-indigo-800: nth($palette-indigo, 9);
$palette-indigo-900: nth($palette-indigo, 10);
$palette-indigo-A100: nth($palette-indigo, 11);
$palette-indigo-A200: nth($palette-indigo, 12);
$palette-indigo-A400: nth($palette-indigo, 13);
$palette-indigo-A700: nth($palette-indigo, 14);

$palette-blue:
"227,242,253"
"187,222,251"
"144,202,249"
"100,181,246"
"66,165,245"
"33,150,243"
"30,136,229"
"25,118,210"
"21,101,192"
"13,71,161"
"130,177,255"
"68,138,255"
"41,121,255"
"41,98,255";

$palette-blue-50: nth($palette-blue, 1);
$palette-blue-100: nth($palette-blue, 2);
$palette-blue-200: nth($palette-blue, 3);
$palette-blue-300: nth($palette-blue, 4);
$palette-blue-400: nth($palette-blue, 5);
$palette-blue-500: nth($palette-blue, 6);
$palette-blue-600: nth($palette-blue, 7);
$palette-blue-700: nth($palette-blue, 8);
$palette-blue-800: nth($palette-blue, 9);
$palette-blue-900: nth($palette-blue, 10);
$palette-blue-A100: nth($palette-blue, 11);
$palette-blue-A200: nth($palette-blue, 12);
$palette-blue-A400: nth($palette-blue, 13);
$palette-blue-A700: nth($palette-blue, 14);

$palette-light-blue:
"225,245,254"
"179,229,252"
"129,212,250"
"79,195,247"
"41,182,246"
"3,169,244"
"3,155,229"
"2,136,209"
"2,119,189"
"1,87,155"
"128,216,255"
"64,196,255"
"0,176,255"
"0,145,234";

$palette-light-blue-50: nth($palette-light-blue, 1);
$palette-light-blue-100: nth($palette-light-blue, 2);
$palette-light-blue-200: nth($palette-light-blue, 3);
$palette-light-blue-300: nth($palette-light-blue, 4);
$palette-light-blue-400: nth($palette-light-blue, 5);
$palette-light-blue-500: nth($palette-light-blue, 6);
$palette-light-blue-600: nth($palette-light-blue, 7);
$palette-light-blue-700: nth($palette-light-blue, 8);
$palette-light-blue-800: nth($palette-light-blue, 9);
$palette-light-blue-900: nth($palette-light-blue, 10);
$palette-light-blue-A100: nth($palette-light-blue, 11);
$palette-light-blue-A200: nth($palette-light-blue, 12);
$palette-light-blue-A400: nth($palette-light-blue, 13);
$palette-light-blue-A700: nth($palette-light-blue, 14);

$palette-cyan:
"224,247,250"
"178,235,242"
"128,222,234"
"77,208,225"
"38,198,218"
"0,188,212"
"0,172,193"
"0,151,167"
"0,131,143"
"0,96,100"
"132,255,255"
"24,255,255"
"0,229,255"
"0,184,212";

$palette-cyan-50: nth($palette-cyan, 1);
$palette-cyan-100: nth($palette-cyan, 2);
$palette-cyan-200: nth($palette-cyan, 3);
$palette-cyan-300: nth($palette-cyan, 4);
$palette-cyan-400: nth($palette-cyan, 5);
$palette-cyan-500: nth($palette-cyan, 6);
$palette-cyan-600: nth($palette-cyan, 7);
$palette-cyan-700: nth($palette-cyan, 8);
$palette-cyan-800: nth($palette-cyan, 9);
$palette-cyan-900: nth($palette-cyan, 10);
$palette-cyan-A100: nth($palette-cyan, 11);
$palette-cyan-A200: nth($palette-cyan, 12);
$palette-cyan-A400: nth($palette-cyan, 13);
$palette-cyan-A700: nth($palette-cyan, 14);

$palette-teal:
"224,242,241"
"178,223,219"
"128,203,196"
"77,182,172"
"38,166,154"
"0,150,136"
"0,137,123"
"0,121,107"
"0,105,92"
"0,77,64"
"167,255,235"
"100,255,218"
"29,233,182"
"0,191,165";

$palette-teal-50: nth($palette-teal, 1);
$palette-teal-100: nth($palette-teal, 2);
$palette-teal-200: nth($palette-teal, 3);
$palette-teal-300: nth($palette-teal, 4);
$palette-teal-400: nth($palette-teal, 5);
$palette-teal-500: nth($palette-teal, 6);
$palette-teal-600: nth($palette-teal, 7);
$palette-teal-700: nth($palette-teal, 8);
$palette-teal-800: nth($palette-teal, 9);
$palette-teal-900: nth($palette-teal, 10);
$palette-teal-A100: nth($palette-teal, 11);
$palette-teal-A200: nth($palette-teal, 12);
$palette-teal-A400: nth($palette-teal, 13);
$palette-teal-A700: nth($palette-teal, 14);

$palette-green:
"232,245,233"
"200,230,201"
"165,214,167"
"129,199,132"
"102,187,106"
"76,175,80"
"67,160,71"
"56,142,60"
"46,125,50"
"27,94,32"
"185,246,202"
"105,240,174"
"0,230,118"
"0,200,83";

$palette-green-50: nth($palette-green, 1);
$palette-green-100: nth($palette-green, 2);
$palette-green-200: nth($palette-green, 3);
$palette-green-300: nth($palette-green, 4);
$palette-green-400: nth($palette-green, 5);
$palette-green-500: nth($palette-green, 6);
$palette-green-600: nth($palette-green, 7);
$palette-green-700: nth($palette-green, 8);
$palette-green-800: nth($palette-green, 9);
$palette-green-900: nth($palette-green, 10);
$palette-green-A100: nth($palette-green, 11);
$palette-green-A200: nth($palette-green, 12);
$palette-green-A400: nth($palette-green, 13);
$palette-green-A700: nth($palette-green, 14);

$palette-light-green:
"241,248,233"
"220,237,200"
"197,225,165"
"174,213,129"
"156,204,101"
"139,195,74"
"124,179,66"
"104,159,56"
"85,139,47"
"51,105,30"
"204,255,144"
"178,255,89"
"118,255,3"
"100,221,23";

$palette-light-green-50: nth($palette-light-green, 1);
$palette-light-green-100: nth($palette-light-green, 2);
$palette-light-green-200: nth($palette-light-green, 3);
$palette-light-green-300: nth($palette-light-green, 4);
$palette-light-green-400: nth($palette-light-green, 5);
$palette-light-green-500: nth($palette-light-green, 6);
$palette-light-green-600: nth($palette-light-green, 7);
$palette-light-green-700: nth($palette-light-green, 8);
$palette-light-green-800: nth($palette-light-green, 9);
$palette-light-green-900: nth($palette-light-green, 10);
$palette-light-green-A100: nth($palette-light-green, 11);
$palette-light-green-A200: nth($palette-light-green, 12);
$palette-light-green-A400: nth($palette-light-green, 13);
$palette-light-green-A700: nth($palette-light-green, 14);

$palette-lime:
"249,251,231"
"240,244,195"
"230,238,156"
"220,231,117"
"212,225,87"
"205,220,57"
"192,202,51"
"175,180,43"
"158,157,36"
"130,119,23"
"244,255,129"
"238,255,65"
"198,255,0"
"174,234,0";

$palette-lime-50: nth($palette-lime, 1);
$palette-lime-100: nth($palette-lime, 2);
$palette-lime-200: nth($palette-lime, 3);
$palette-lime-300: nth($palette-lime, 4);
$palette-lime-400: nth($palette-lime, 5);
$palette-lime-500: nth($palette-lime, 6);
$palette-lime-600: nth($palette-lime, 7);
$palette-lime-700: nth($palette-lime, 8);
$palette-lime-800: nth($palette-lime, 9);
$palette-lime-900: nth($palette-lime, 10);
$palette-lime-A100: nth($palette-lime, 11);
$palette-lime-A200: nth($palette-lime, 12);
$palette-lime-A400: nth($palette-lime, 13);
$palette-lime-A700: nth($palette-lime, 14);

$palette-yellow:
"255,253,231"
"255,249,196"
"255,245,157"
"255,241,118"
"255,238,88"
"255,235,59"
"253,216,53"
"251,192,45"
"249,168,37"
"245,127,23"
"255,255,141"
"255,255,0"
"255,234,0"
"255,214,0";

$palette-yellow-50: nth($palette-yellow, 1);
$palette-yellow-100: nth($palette-yellow, 2);
$palette-yellow-200: nth($palette-yellow, 3);
$palette-yellow-300: nth($palette-yellow, 4);
$palette-yellow-400: nth($palette-yellow, 5);
$palette-yellow-500: nth($palette-yellow, 6);
$palette-yellow-600: nth($palette-yellow, 7);
$palette-yellow-700: nth($palette-yellow, 8);
$palette-yellow-800: nth($palette-yellow, 9);
$palette-yellow-900: nth($palette-yellow, 10);
$palette-yellow-A100: nth($palette-yellow, 11);
$palette-yellow-A200: nth($palette-yellow, 12);
$palette-yellow-A400: nth($palette-yellow, 13);
$palette-yellow-A700: nth($palette-yellow, 14);

$palette-amber:
"255,248,225"
"255,236,179"
"255,224,130"
"255,213,79"
"255,202,40"
"255,193,7"
"255,179,0"
"255,160,0"
"255,143,0"
"255,111,0"
"255,229,127"
"255,215,64"
"255,196,0"
"255,171,0";

$palette-amber-50: nth($palette-amber, 1);
$palette-amber-100: nth($palette-amber, 2);
$palette-amber-200: nth($palette-amber, 3);
$palette-amber-300: nth($palette-amber, 4);
$palette-amber-400: nth($palette-amber, 5);
$palette-amber-500: nth($palette-amber, 6);
$palette-amber-600: nth($palette-amber, 7);
$palette-amber-700: nth($palette-amber, 8);
$palette-amber-800: nth($palette-amber, 9);
$palette-amber-900: nth($palette-amber, 10);
$palette-amber-A100: nth($palette-amber, 11);
$palette-amber-A200: nth($palette-amber, 12);
$palette-amber-A400: nth($palette-amber, 13);
$palette-amber-A700: nth($palette-amber, 14);

$palette-orange:
"255,243,224"
"255,224,178"
"255,204,128"
"255,183,77"
"255,167,38"
"255,152,0"
"251,140,0"
"245,124,0"
"239,108,0"
"230,81,0"
"255,209,128"
"255,171,64"
"255,145,0"
"255,109,0";

$palette-orange-50: nth($palette-orange, 1);
$palette-orange-100: nth($palette-orange, 2);
$palette-orange-200: nth($palette-orange, 3);
$palette-orange-300: nth($palette-orange, 4);
$palette-orange-400: nth($palette-orange, 5);
$palette-orange-500: nth($palette-orange, 6);
$palette-orange-600: nth($palette-orange, 7);
$palette-orange-700: nth($palette-orange, 8);
$palette-orange-800: nth($palette-orange, 9);
$palette-orange-900: nth($palette-orange, 10);
$palette-orange-A100: nth($palette-orange, 11);
$palette-orange-A200: nth($palette-orange, 12);
$palette-orange-A400: nth($palette-orange, 13);
$palette-orange-A700: nth($palette-orange, 14);

$palette-deep-orange:
"251,233,231"
"255,204,188"
"255,171,145"
"255,138,101"
"255,112,67"
"255,87,34"
"244,81,30"
"230,74,25"
"216,67,21"
"191,54,12"
"255,158,128"
"255,110,64"
"255,61,0"
"221,44,0";

$palette-deep-orange-50: nth($palette-deep-orange, 1);
$palette-deep-orange-100: nth($palette-deep-orange, 2);
$palette-deep-orange-200: nth($palette-deep-orange, 3);
$palette-deep-orange-300: nth($palette-deep-orange, 4);
$palette-deep-orange-400: nth($palette-deep-orange, 5);
$palette-deep-orange-500: nth($palette-deep-orange, 6);
$palette-deep-orange-600: nth($palette-deep-orange, 7);
$palette-deep-orange-700: nth($palette-deep-orange, 8);
$palette-deep-orange-800: nth($palette-deep-orange, 9);
$palette-deep-orange-900: nth($palette-deep-orange, 10);
$palette-deep-orange-A100: nth($palette-deep-orange, 11);
$palette-deep-orange-A200: nth($palette-deep-orange, 12);
$palette-deep-orange-A400: nth($palette-deep-orange, 13);
$palette-deep-orange-A700: nth($palette-deep-orange, 14);


// Color order: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900.

$palette-brown:
"239,235,233"
"215,204,200"
"188,170,164"
"161,136,127"
"141,110,99"
"121,85,72"
"109,76,65"
"93,64,55"
"78,52,46"
"62,39,35";

$palette-brown-50: nth($palette-brown, 1);
$palette-brown-100: nth($palette-brown, 2);
$palette-brown-200: nth($palette-brown, 3);
$palette-brown-300: nth($palette-brown, 4);
$palette-brown-400: nth($palette-brown, 5);
$palette-brown-500: nth($palette-brown, 6);
$palette-brown-600: nth($palette-brown, 7);
$palette-brown-700: nth($palette-brown, 8);
$palette-brown-800: nth($palette-brown, 9);
$palette-brown-900: nth($palette-brown, 10);

$palette-grey:
"250,250,250"
"245,245,245"
"238,238,238"
"224,224,224"
"189,189,189"
"158,158,158"
"117,117,117"
"97,97,97"
"66,66,66"
"33,33,33";

$palette-grey-50: nth($palette-grey, 1);
$palette-grey-100: nth($palette-grey, 2);
$palette-grey-200: nth($palette-grey, 3);
$palette-grey-300: nth($palette-grey, 4);
$palette-grey-400: nth($palette-grey, 5);
$palette-grey-500: nth($palette-grey, 6);
$palette-grey-600: nth($palette-grey, 7);
$palette-grey-700: nth($palette-grey, 8);
$palette-grey-800: nth($palette-grey, 9);
$palette-grey-900: nth($palette-grey, 10);

$palette-blue-grey:
"236,239,241"
"207,216,220"
"176,190,197"
"144,164,174"
"120,144,156"
"96,125,139"
"84,110,122"
"69,90,100"
"55,71,79"
"38,50,56";

$palette-blue-grey-50: nth($palette-blue-grey, 1);
$palette-blue-grey-100: nth($palette-blue-grey, 2);
$palette-blue-grey-200: nth($palette-blue-grey, 3);
$palette-blue-grey-300: nth($palette-blue-grey, 4);
$palette-blue-grey-400: nth($palette-blue-grey, 5);
$palette-blue-grey-500: nth($palette-blue-grey, 6);
$palette-blue-grey-600: nth($palette-blue-grey, 7);
$palette-blue-grey-700: nth($palette-blue-grey, 8);
$palette-blue-grey-800: nth($palette-blue-grey, 9);
$palette-blue-grey-900: nth($palette-blue-grey, 10);

$color-black: "0,0,0";
$color-white: "255,255,255";


/* colors.scss */
$styleguide-generate-template: false !default;

// The two possible colors for overlayed text.
$color-dark-contrast: $color-white !default;
$color-light-contrast: $color-black !default;

/**
* Copyright 2015 Google Inc. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* Typography */

@mixin typo-preferred-font($usePreferred: true) {
@if $usePreferred {
font-family: $preferred_font;
}
}

@mixin typo-display-4($colorContrast: false, $usePreferred: true) {
@include typo-preferred-font($usePreferred);
font-size: 112px;
font-weight: 300;
line-height: 1;
letter-spacing: -0.04em;

@if $colorContrast {
opacity: 0.54;
}
}

@mixin typo-display-3($colorContrast: false, $usePreferred: true) {
@include typo-preferred-font($usePreferred);
font-size: 56px;
font-weight: 400;
line-height: 1.35;
letter-spacing: -0.02em;

@if $colorContrast {
opacity: 0.54;
}
}

@mixin typo-display-2($colorContrast: false, $usePreferred: true) {
@include typo-preferred-font($usePreferred);
font-size: 45px;
font-weight: 400;
line-height: 48px;

@if $colorContrast {
opacity: 0.54;
}
}

@mixin typo-display-1($colorContrast: false, $usePreferred: true) {
@include typo-preferred-font($usePreferred);
font-size: 34px;
font-weight: 400;
line-height: 40px;

@if $colorContrast {
opacity: 0.54;
}
}

@mixin typo-headline($colorContrast: false, $usePreferred: true) {
@include typo-preferred-font($usePreferred);
font-size: 24px;
font-weight: 400;
line-height: 32px;
-moz-osx-font-smoothing: grayscale;

@if $colorContrast {
opacity: 0.87;
}
}

@mixin typo-title($colorContrast: false, $usePreferred: true) {
@include typo-preferred-font($usePreferred);
font-size: 20px;
font-weight: 500;
line-height: 1;
letter-spacing: 0.02em;

@if $colorContrast {
opacity: 0.87;
}
}

@mixin typo-subhead($colorContrast: false, $usePreferred: true) {
@include typo-preferred-font($usePreferred);
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.04em;

@if $colorContrast {
opacity: 0.87;
}
}

@mixin typo-subhead-2($colorContrast: false, $usePreferred: true) {
@include typo-preferred-font($usePreferred);
font-size: 16px;
font-weight: 400;
line-height: 28px;
letter-spacing: 0.04em;

@if $colorContrast {
opacity: 0.87;
}
}

@mixin typo-body-2($colorContrast: false, $usePreferred: false) {
@include typo-preferred-font($usePreferred);
font-size: 14px;
@if $usePreferred {
font-weight: 500;
} @else {
font-weight: bold;
}
line-height: 24px;
letter-spacing: 0;

@if $colorContrast {
opacity: 0.87;
}
}

@mixin typo-body-1($colorContrast: false, $usePreferred: false) {
@include typo-preferred-font($usePreferred);
font-size: 14px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0;

@if $colorContrast {
opacity: 0.87;
}
}

@mixin typo-caption($colorContrast: false, $usePreferred: false) {
@include typo-preferred-font($usePreferred);
font-size: 12px;
font-weight: 400;
line-height: 1;
letter-spacing: 0;

@if $colorContrast {
opacity: 0.54;
}
}

@mixin typo-blockquote($colorContrast: false, $usePreferred: true) {
@include typo-preferred-font($usePreferred);
position: relative;
font-size: 24px;
font-weight: 300;
font-style: italic;
line-height: 1.35;
letter-spacing: 0.08em;

&:before {
position: absolute;
left: -0.5em;
content: '“';
}

&:after {
content: '”';
margin-left: -0.05em;
}

@if $colorContrast {
opacity: 0.54;
}
}

@mixin typo-menu($colorContrast: false, $usePreferred: true) {
@include typo-preferred-font($usePreferred);
font-size: 14px;
font-weight: 500;
line-height: 1;
letter-spacing: 0;

@if $colorContrast {
opacity: 0.87;
}
}

@mixin typo-button($colorContrast: false, $usePreferred: true) {
@include typo-preferred-font($usePreferred);
font-size: 14px;
font-weight: 500;
text-transform: uppercase;
line-height: 1;
letter-spacing: 0;

@if $colorContrast {
opacity: 0.87;
}
}

@mixin typo-icon() {
font-family: 'Material Icons';
font-weight: normal;
font-style: normal;
font-size: 24px;
line-height: 1;
letter-spacing: normal;
text-transform: none;
display: inline-block;
word-wrap: normal;
font-feature-settings: 'liga';
-webkit-font-feature-settings: 'liga';
-webkit-font-smoothing: antialiased;
}

/* Shadows */

// Focus shadow mixin.
@mixin focus-shadow() {
box-shadow: 0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36);
}

@mixin shadow-2dp() {
box-shadow: 0 2px 2px 0 rgba(0, 0, 0, $shadow-key-penumbra-opacity),
          0 3px 1px -2px rgba(0, 0, 0, $shadow-key-umbra-opacity),
          0 1px 5px 0 rgba(0, 0, 0, $shadow-ambient-shadow-opacity);
}
@mixin shadow-3dp() {
box-shadow: 0 3px 4px 0 rgba(0, 0, 0, $shadow-key-penumbra-opacity),
          0 3px 3px -2px rgba(0, 0, 0, $shadow-key-umbra-opacity),
          0 1px 8px 0 rgba(0, 0, 0, $shadow-ambient-shadow-opacity);
}
@mixin shadow-4dp() {
box-shadow: 0 4px 5px 0 rgba(0, 0, 0, $shadow-key-penumbra-opacity),
          0 1px 10px 0 rgba(0, 0, 0, $shadow-ambient-shadow-opacity),
          0 2px 4px -1px rgba(0, 0, 0, $shadow-key-umbra-opacity);
}
@mixin shadow-6dp() {
box-shadow: 0 6px 10px 0 rgba(0, 0, 0, $shadow-key-penumbra-opacity),
          0 1px 18px 0 rgba(0, 0, 0, $shadow-ambient-shadow-opacity),
          0 3px 5px -1px rgba(0, 0, 0, $shadow-key-umbra-opacity);
}
@mixin shadow-8dp() {
box-shadow: 0 8px 10px 1px rgba(0, 0, 0, $shadow-key-penumbra-opacity),
          0 3px 14px 2px rgba(0, 0, 0, $shadow-ambient-shadow-opacity),
          0 5px 5px -3px rgba(0, 0, 0, $shadow-key-umbra-opacity);
}

@mixin shadow-16dp() {
box-shadow: 0 16px 24px 2px rgba(0, 0, 0, $shadow-key-penumbra-opacity),
          0  6px 30px 5px rgba(0, 0, 0, $shadow-ambient-shadow-opacity),
          0  8px 10px -5px rgba(0, 0, 0, $shadow-key-umbra-opacity);
}

@mixin shadow-24dp() {
box-shadow: 0  9px 46px  8px rgba(0, 0, 0, $shadow-key-penumbra-opacity),
          0 11px 15px -7px rgba(0, 0, 0, $shadow-ambient-shadow-opacity),
          0 24px 38px  3px rgba(0, 0, 0, $shadow-key-umbra-opacity);
}

/* Animations */

@mixin material-animation-fast-out-slow-in($duration:0.2s) {
transition-duration: $duration;
transition-timing-function: $animation-curve-fast-out-slow-in;
}

@mixin material-animation-linear-out-slow-in($duration:0.2s) {
transition-duration: $duration;
transition-timing-function: $animation-curve-linear-out-slow-in;
}

@mixin material-animation-fast-out-linear-in($duration:0.2s) {
transition-duration: $duration;
transition-timing-function: $animation-curve-fast-out-linear-in;
}

@mixin material-animation-default($duration:0.2s) {
transition-duration: $duration;
transition-timing-function: $animation-curve-default;
}

/* Dialog */

@mixin dialog-width($units:5) {
@if(type_of($units) != 'number') {
@error "The unit given to dialog-width should be a number.";
}
// 56dp is the base unit width for Dialogs.
// With 5 units being the number of units for a mobile device.
// https://goo.gl/sK2O5o
width: $units * 56px;
}

/**
* Copyright 2015 Google Inc. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

@function strip-units($number) {
@return $number / ($number * 0 + 1);
}

/**
* Copyright 2015 Google Inc. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/*------------------------------------*\
$CONTENTS
\*------------------------------------*/
/**
* STYLE GUIDE VARIABLES------------------Declarations of Sass variables
* -----Typography
* -----Colors
* -----Textfield
* -----Switch
* -----Spinner
* -----Radio
* -----Menu
* -----List
* -----Layout
* -----Icon toggles
* -----Footer
* -----Column
* -----Checkbox
* -----Card
* -----Button
* -----Animation
* -----Progress
* -----Badge
* -----Shadows
* -----Grid
* -----Data table
* -----Dialog
* -----Snackbar
* -----Tooltip
* -----Chip
*
* Even though all variables have the '!default' directive, most of them
* should not be changed as they are dependent one another. This can cause
* visual distortions (like alignment issues) that are hard to track down
* and fix.
*/


/* ==========  TYPOGRAPHY  ========== */

/* We're splitting fonts into "preferred" and "performance" in order to optimize
page loading. For important text, such as the body, we want it to load
immediately and not wait for the web font load, whereas for other sections,
such as headers and titles, we're OK with things taking a bit longer to load.
We do have some optional classes and parameters in the mixins, in case you
definitely want to make sure you're using the preferred font and don't mind
the performance hit.
We should be able to improve on this once CSS Font Loading L3 becomes more
widely available.
*/
$preferred_font: 'Roboto', 'Helvetica', 'Arial', sans-serif !default;
$performance_font: 'Helvetica', 'Arial', sans-serif !default;

/* ==========  COLORS  ========== */

/**
*
* Material design color palettes.
* @see http://www.google.com/design/spec/style/color.html
*
**/

@import "color-definitions";
@import "functions";

/* ==========  IMAGES  ========== */
$image_path: '/images' !default;

/* ==========  Color & Themes  ========== */

// Define whether individual color palette items should have classes created.
// Setting this to true will remove individual color classes for each color in the palettes.
// To improve overall performance (assuming they aren't used) by:
// * Saving server bandwidth sending the extra classes
// * Save client computation against the classes
// it is RECOMMENDED you set this to true.
$trim-color-classes: false !default;

// Use color primarily for emphasis. Choose colors that fit with
// your brand and provide good contrast between visual components.
$color-primary: $palette-indigo-500 !default;
$color-primary-dark: $palette-indigo-700 !default;
$color-accent: $palette-pink-A200 !default;

// Our primary is dark, so use $color-dark-contrast for overlaid text.
$color-primary-contrast: $color-dark-contrast !default;
// Our accent is dark, so use $color-dark-contrast for overlaid text.
$color-accent-contrast: $color-dark-contrast !default;

// Replace all colors with placeholders if we're generating a template.
@if $styleguide-generate-template == true {
$color-primary: '$color-primary';
$color-primary-dark: '$color-primary-dark';
$color-accent: '$color-accent';
$color-primary-contrast: '$color-primary-contrast';
$color-accent-contrast: '$color-accent-contrast';
}

/* ==========  Typography  ========== */

// We use the following default color styles: text-color-primary and
// text-color-secondary. For light themes, use text-color-primary-inverse
// and text-color-secondary-inverse.

$text-color-primary: unquote("rgba(#{$color-black}, 0.87)") !default;
$text-link-color: unquote("rgb(#{$color-accent})") !default;

// Define whether to target elements directly for typographic enhancements.
// Turning this off means you need to use mdl-* classes more often.
// Other components may also fail to adhere to MD without these rules.
// It is strongly recommended you leave this as true.

$target-elements-directly: true !default;

/* ==========  Components  ========== */

/* ==========  Standard Buttons  ========== */

// Default button colors.
$button-primary-color: unquote("rgba(#{$palette-grey-500}, 0.20)") !default;
$button-secondary-color: unquote("rgb(#{$color-black})") !default;
$button-hover-color: $button-primary-color !default;
$button-active-color: unquote("rgba(#{$palette-grey-500}, 0.40)") !default;
$button-focus-color: unquote("rgba(#{$color-black}, 0.12)") !default;

// Colored button colors.
$button-primary-color-alt: unquote("rgb(#{$color-primary})") !default;
$button-secondary-color-alt: unquote("rgb(#{$color-primary-contrast})") !default;
$button-hover-color-alt: unquote("rgb(#{$color-primary})") !default;
$button-active-color-alt: unquote("rgb(#{$color-primary})") !default;
$button-focus-color-alt: $button-focus-color !default;

// Ripple color for colored raised buttons.
$button-ripple-color-alt: unquote("rgb(#{$color-primary-contrast})") !default;

// Disabled button colors.
$button-primary-color-disabled: unquote("rgba(#{$color-black}, 0.12)") !default;
$button-secondary-color-disabled: unquote("rgba(#{$color-black}, 0.26)") !default;

// FAB colors and sizes.
$button-fab-color-alt: unquote("rgb(#{$color-accent})") !default;
$button-fab-hover-color-alt: unquote("rgb(#{$color-accent})") !default;
$button-fab-active-color-alt: unquote("rgb(#{$color-accent})") !default;
$button-fab-text-color-alt: unquote("rgb(#{$color-accent-contrast})") !default;
$button-fab-ripple-color-alt: unquote("rgb(#{$color-accent-contrast})") !default;

// Icon button colors and sizes.
$button-icon-color: unquote("rgb(#{$palette-grey-700})") !default;
$button-icon-focus-color: $button-focus-color !default;

/* ==========  Icon Toggles  ========== */

$icon-toggle-color: unquote("rgb(#{$palette-grey-700})") !default;
$icon-toggle-focus-color: $button-focus-color !default;
$icon-toggle-checked-color: unquote("rgb(#{$color-primary})") !default;
$icon-toggle-checked-focus-color: unquote("rgba(#{$color-primary}, 0.26)") !default;
$icon-toggle-disabled-color: unquote("rgba(#{$color-black}, 0.26)") !default;

/* ==========  Radio Buttons  ========== */

$radio-color: unquote("rgb(#{$color-primary})") !default;
$radio-off-color: unquote("rgba(#{$color-black}, 0.54)") !default;
$radio-disabled-color: unquote("rgba(#{$color-black}, 0.26)") !default;

/* ==========  Ripple effect  ========== */

$ripple-bg-color: unquote("rgb(#{$color-light-contrast})") !default;

/* ==========  Layout  ========== */

$layout-nav-color: unquote("rgb(#{$palette-grey-300})") !default;

// Drawer
$layout-drawer-bg-color: unquote("rgb(#{$palette-grey-50})") !default;
$layout-drawer-border-color: unquote("rgb(#{$palette-grey-300})") !default;
$layout-text-color: unquote("rgb(#{$palette-grey-800})") !default;
$layout-drawer-navigation-color: #757575 !default;
$layout-drawer-navigation-link-active-background: unquote("rgb(#{$palette-grey-300})") !default;
$layout-drawer-navigation-link-active-color: unquote("rgb(#{$color-light-contrast})") !default;

// Header
$layout-header-bg-color: unquote("rgb(#{$color-primary})") !default;
$layout-header-text-color: unquote("rgb(#{$color-primary-contrast})") !default;
$layout-header-nav-hover-color: unquote("rgba(#{$palette-grey-700}, 0.6)") !default;
$layout-header-tab-text-color: unquote("rgba(#{$color-primary-contrast}, 0.6)") !default;

// Tabs
$layout-header-tab-highlight: unquote("rgb(#{$color-accent})") !default;

/* ==========  Content Tabs  ========== */

$tab-highlight-color: unquote("rgb(#{$color-primary})") !default;
$tab-text-color: unquote("rgba(#{$color-black}, 0.54)") !default;
$tab-active-text-color: unquote("rgba(#{$color-black}, 0.87)") !default;
$tab-border-color: unquote("rgb(#{$palette-grey-300})") !default;

/* ==========  Checkboxes  ========== */

$checkbox-color: unquote("rgb(#{$color-primary})") !default;
$checkbox-off-color: unquote("rgba(#{$color-black}, 0.54)") !default;
$checkbox-disabled-color: unquote("rgba(#{$color-black}, 0.26)") !default;
$checkbox-focus-color: unquote("rgba(#{$color-primary}, 0.26)") !default;
$checkbox-image-path: $image_path;

/* ==========  Switches  ========== */

$switch-color: unquote("rgb(#{$color-primary})") !default;
$switch-faded-color: unquote("rgba(#{$color-primary}, 0.26)") !default;
$switch-thumb-color: $switch-color !default;
$switch-track-color: unquote("rgba(#{$color-primary}, 0.5)") !default;

$switch-off-thumb-color: unquote("rgb(#{$palette-grey-50})") !default;
$switch-off-track-color: unquote("rgba(#{$color-black}, 0.26)") !default;
$switch-disabled-thumb-color: unquote("rgb(#{$palette-grey-400})") !default;
$switch-disabled-track-color: unquote("rgba(#{$color-black}, 0.12)") !default;

/* ==========  Spinner  ========== */

$spinner-color-1: unquote("rgb(#{$palette-blue-400})") !default;
$spinner-color-2: unquote("rgb(#{$palette-red-500})") !default;
$spinner-color-3: unquote("rgb(#{$palette-yellow-600})") !default;
$spinner-color-4: unquote("rgb(#{$palette-green-500})") !default;

$spinner-single-color: unquote("rgb(#{$color-primary})") !default;

/* ==========  Text fields  ========== */

$input-text-background-color: transparent !default;
$input-text-label-color: unquote("rgba(#{$color-black}, 0.26)") !default;
$input-text-bottom-border-color: unquote("rgba(#{$color-black}, 0.12)") !default;
$input-text-highlight-color: unquote("rgb(#{$color-primary})") !default;
$input-text-disabled-color: $input-text-bottom-border-color !default;
$input-text-disabled-text-color: $input-text-label-color !default;
$input-text-error-color: unquote("rgb(#{$palette-red-A700})") !default;

/* ==========  Card  ========== */

$card-background-color: unquote("rgb(#{$color-white})") !default;
$card-text-color: unquote("rgb(#{$color-black})") !default;
$card-image-placeholder-color: unquote("rgb(#{$color-accent})") !default;
$card-supporting-text-text-color: unquote("rgba(#{$color-black}, 0.54)") !default;
$card-border-color: rgba(0,0,0,0.1) !default;
$card-subtitle-color: unquote("rgba(#{$color-black}, 0.54)") !default;

/* ==========  Sliders ========== */

$range-bg-color: unquote("rgba(#{$color-black}, 0.26)") !default;
$range-color: unquote("rgb(#{$color-primary})") !default;
$range-faded-color: unquote("rgba(#{$color-primary}, 0.26)") !default;
$range-bg-focus-color: unquote("rgba(#{$color-black}, 0.12)") !default;

/* ========== Progress ========== */
$progress-main-color: unquote("rgb(#{$color-primary})") !default;
$progress-secondary-color: unquote("rgba(#{$color-primary-contrast}, 0.7)") !default;
$progress-fallback-buffer-color: unquote("rgba(#{$color-primary-contrast}, 0.9)") !default;
$progress-image-path: $image_path;

/* ==========  List ========== */

$list-main-text-text-color: unquote("rgba(#{$color-black}, 0.87)") !default;
$list-supporting-text-text-color: unquote("rgba(#{$color-black}, 0.54)") !default;
$list-icon-color: unquote("rgb(#{$palette-grey-600})") !default;
$list-avatar-color: white !default;

/* ==========  Item ========== */

// Default Item Colors
$default-item-text-color: unquote("rgba(#{$color-black}, 0.87)") !default;
$default-item-outline-color: unquote("rgb(#{$palette-grey-400})") !default;
$default-item-hover-bg-color: unquote("rgb(#{$palette-grey-200})") !default;
$default-item-focus-bg-color: unquote("rgb(#{$palette-grey-200})") !default;
$default-item-active-bg-color: unquote("rgb(#{$palette-grey-300})") !default;
$default-item-divider-color: unquote("rgba(#{$color-black}, 0.12)") !default;

// Disabled Button Colors
$disabled-item-text-color: unquote("rgb(#{$palette-grey-400})") !default;

/* ==========  Dropdown menu ========== */

$default-dropdown-bg-color: unquote("rgb(#{$color-white})") !default;

/* ==========  Tooltips  ========== */

$tooltip-text-color: unquote("rgb(#{$color-white})") !default;
$tooltip-background-color: unquote("rgba(#{$palette-grey-700}, 0.9)") !default;

/* ==========  Footer  ========== */

$footer-bg-color: unquote("rgb(#{$palette-grey-800})") !default;
$footer-color: unquote("rgb(#{$palette-grey-500})") !default;
$footer-heading-color: unquote("rgb(#{$palette-grey-300})") !default;
$footer-button-fill-color: $footer-color !default;
$footer-underline-color: $footer-color !default;


/* TEXTFIELD */

$input-text-font-size: 16px !default;
$input-text-width: 100% !default;
$input-text-padding: 4px !default;
$input-text-vertical-spacing: 20px !default;

$input-text-button-size: 32px !default;
$input-text-floating-label-fontsize: 12px !default;
$input-text-expandable-icon-top: 16px !default;


/* SWITCH */

$switch-label-font-size: 16px !default;
$switch-label-height: 24px !default;
$switch-track-height: 14px !default;
$switch-track-length: 36px !default;
$switch-thumb-size: 20px !default;
$switch-track-top: ($switch-label-height - $switch-track-height) / 2 !default;
$switch-thumb-top: ($switch-label-height - $switch-thumb-size) / 2 !default;
$switch-ripple-size: $switch-label-height * 2 !default;
$switch-helper-size: 8px !default;

/* SPINNER */

$spinner-size: 28px !default;
$spinner-stroke-width: 3px !default;

// Amount of circle the arc takes up.
$spinner-arc-size: 270deg !default;
// Time it takes to expand and contract arc.
$spinner-arc-time: 1333ms !default;
// How much the start location of the arc should rotate each time.
$spinner-arc-start-rot: 216deg !default;

$spinner-duration: 360 * $spinner-arc-time / (
strip-units($spinner-arc-start-rot + (360deg - $spinner-arc-size)));


/* RADIO */

$radio-label-font-size: 16px !default;
$radio-label-height: 24px !default;
$radio-button-size: 16px !default;
$radio-inner-margin: $radio-button-size / 4;
$radio-padding: 8px !default;
$radio-top-offset: ($radio-label-height - $radio-button-size) / 2;
$radio-ripple-size: 42px !default;


/* MENU */

$menu-expand-duration: 0.3s !default;
$menu-fade-duration: 0.2s !default;

/* LIST */

$list-border: 8px !default;
$list-min-height: 48px !default;
$list-min-padding: 16px !default;
$list-bottom-padding: 20px !default;
$list-avatar-text-left-distance: 72px !default;
$list-icon-text-left-distance: 72px !default;

$list-avatar-size: 40px !default;
$list-icon-size: 24px !default;

$list-two-line-height: 72px !default;
$list-three-line-height: 88px !default;

/* LAYOUT */

$layout-drawer-narrow: 240px !default;
$layout-drawer-wide: 456px !default;
$layout-drawer-width: $layout-drawer-narrow !default;

$layout-header-icon-size: 32px !default;
$layout-screen-size-threshold: 1024px !default;
$layout-header-icon-margin: 24px !default;
$layout-drawer-button-mobile-size: 32px !default;
$layout-drawer-button-desktop-size: 48px !default;

$layout-header-mobile-row-height: 56px !default;
$layout-mobile-header-height: $layout-header-mobile-row-height;
$layout-header-desktop-row-height: 64px !default;
$layout-desktop-header-height: $layout-header-desktop-row-height;

$layout-header-desktop-baseline: 80px !default;
$layout-header-mobile-baseline: 72px !default;
$layout-header-mobile-indent: 16px !default;
$layout-header-desktop-indent: 40px !default;

$layout-tab-font-size: 14px !default;
$layout-tab-bar-height: 48px !default;
$layout-tab-mobile-padding: 12px !default;
$layout-tab-desktop-padding: 24px !default;
$layout-tab-highlight-thickness: 2px !default;


/* ICON TOGGLE */

$icon-toggle-size: 32px !default;
$icon-toggle-font-size: 24px !default;
$icon-toggle-ripple-size: 36px !default;

/* FOOTER */

/*mega-footer*/
$footer-min-padding: 16px !default;
$footer-padding-sides: 40px !default;
$footer-heading-font-size: 14px !default;
$footer-heading-line-height: (1.7 * $footer-heading-font-size) !default;
$footer-btn-size: 36px  !default;

/*mini-footer*/
$padding: 16px !default;
$footer-heading-font-size: 24px !default;
$footer-heading-line-height: (1.5 * $footer-heading-font-size) !default;
$footer-btn-size: 36px !default;

/* CHECKBOX */

$checkbox-label-font-size: 16px !default;
$checkbox-label-height: 24px !default;
$checkbox-button-size: 16px !default;
$checkbox-inner-margin: 2px !default;
$checkbox-padding: 8px !default;
$checkbox-top-offset:
($checkbox-label-height - $checkbox-button-size - $checkbox-inner-margin) / 2;
$checkbox-ripple-size: $checkbox-label-height * 1.5;

/* CARD */

/* Card dimensions */
$card-width: 330px !default;
$card-height: 200px !default;
$card-font-size: 16px !default;
$card-title-font-size: 24px !default;
$card-subtitle-font-size: 14px !default;
$card-horizontal-padding: 16px !default;
$card-vertical-padding: 16px !default;

$card-title-perspective-origin-x: 165px !default;
$card-title-perspective-origin-y: 56px !default;

$card-title-transform-origin-x: 165px !default;
$card-title-transform-origin-y: 56px !default;

$card-title-text-transform-origin-x: 149px !default;
$card-title-text-transform-origin-y: 48px !default;

$card-supporting-text-font-size: 1rem !default;
$card-supporting-text-line-height: 18px !default;

$card-actions-font-size: 16px !default;

$card-title-text-font-weight: 300 !default;
$card-z-index: 1 !default;

/* Cover image */
$card-cover-image-height: 186px !default;
$card-background-image-url: '' !default;


/* BUTTON */
/**
*
* Dimensions
*
*/
$button-min-width: 64px !default;
$button-height: 36px !default;
$button-padding: 16px !default;
$button-margin: 4px !default;
$button-border-radius: 2px !default;

$button-fab-size: 56px !default;
$button-fab-size-mini: 40px !default;
$button-fab-font-size: 24px !default;

$button-icon-size: 32px !default;
$button-icon-size-mini: 24px !default;


/* ANIMATION */
$animation-curve-fast-out-slow-in: cubic-bezier(0.4, 0, 0.2, 1) !default;
$animation-curve-linear-out-slow-in: cubic-bezier(0, 0, 0.2, 1) !default;
$animation-curve-fast-out-linear-in: cubic-bezier(0.4, 0, 1, 1) !default;

$animation-curve-default: $animation-curve-fast-out-slow-in !default;


/* PROGRESS */
$bar-height: 4px !default;

/* BADGE */
$badge-font-size: 12px !default;
$badge-color: unquote("rgb(#{$color-accent-contrast})") !default;
$badge-color-inverse: unquote("rgb(#{$color-accent})") !default;
$badge-background: unquote("rgb(#{$color-accent})") !default;
$badge-background-inverse: unquote("rgba(#{$color-accent-contrast},0.2)") !default;
$badge-size : 22px !default;
$badge-padding: 2px !default;
$badge-overlap: 12px !default;

/* SHADOWS */

$shadow-key-umbra-opacity: 0.2 !default;
$shadow-key-penumbra-opacity: 0.14 !default;
$shadow-ambient-shadow-opacity: 0.12 !default;

/* GRID */

$grid-desktop-columns: 12 !default;
$grid-desktop-gutter: 16px !default;
$grid-desktop-margin: 16px !default;

$grid-desktop-breakpoint: 840px !default;

$grid-tablet-columns: 8 !default;
$grid-tablet-gutter: $grid-desktop-gutter !default;
$grid-tablet-margin: $grid-desktop-margin !default;

$grid-tablet-breakpoint: 480px !default;

$grid-phone-columns: 4 !default;
$grid-phone-gutter: $grid-desktop-gutter !default;
$grid-phone-margin: $grid-desktop-margin !default;

$grid-cell-default-columns: $grid-phone-columns !default;
$grid-max-columns: $grid-desktop-columns !default;

/* DATA TABLE */

$data-table-font-size: 13px !default;
$data-table-header-font-size: 12px !default;
$data-table-header-sort-icon-size: 16px !default;

$data-table-header-color: rgba(#000, 0.54) !default;
$data-table-header-sorted-color: rgba(#000, 0.87) !default;
$data-table-header-sorted-icon-hover-color: rgba(#000, 0.26) !default;
$data-table-divider-color: rgba(#000, 0.12) !default;

$data-table-hover-color: #eeeeee !default;
$data-table-selection-color: #e0e0e0 !default;

$data-table-dividers: 1px solid $data-table-divider-color !default;

$data-table-row-height: 48px !default;
$data-table-last-row-height: 56px !default;
$data-table-header-height: 56px !default;

$data-table-column-spacing: 36px !default;
$data-table-column-padding: $data-table-column-spacing / 2;

$data-table-card-header-height: 64px !default;
$data-table-card-title-top: 20px !default;
$data-table-card-padding: 24px !default;
$data-table-button-padding-right: 16px !default;
$data-table-cell-top: $data-table-card-padding / 2;

/* DIALOG */
$dialog-content-color: $card-supporting-text-text-color;

/* SNACKBAR */

// Hard coded since the color is not present in any palette.
$snackbar-background-color: #323232 !default;
$snackbar-tablet-breakpoint: $grid-tablet-breakpoint;
$snackbar-action-color: unquote("rgb(#{$color-accent})") !default;

/* TOOLTIP */
$tooltip-font-size: 10px !default;
$tooltip-font-size-large: 14px !default;

/* CHIP */
$chip-bg-color: rgb(222, 222, 222) !default;
$chip-bg-active-color: rgb(214, 214, 214) !default;
$chip-height: 32px !default;
$chip-font-size: 13px !default; 
`

// let sass2less = require('../lib')
sass2less = require('less-plugin-sass2less/lib')
let path = require('path')

const PATTERN_KEYS = Object.keys(path.parse(''))

// create instance
let converter = new sass2less()
let files = []

// https://www.npmjs.com/package/less-plugin-sass2less

let result = converter.process(scssfile, { fileInfo: { filename: 'anything.scss' } })
console.log(result);
// less.render(result, {
//   plugins: [sass2less]
// }).then(function (output) {
//   console.log(output.css);
// }, function (error) {
//   console.log(error)
// });
