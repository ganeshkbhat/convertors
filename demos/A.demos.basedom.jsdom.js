
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { Script } = require("vm");

const frag = JSDOM.fragment(`<p>Hello</p><p><strong>Hi!</strong>`);
console.log(frag);

const resourceLoader = new jsdom.ResourceLoader({
  proxy: "http://127.0.0.1:9001",
  strictSSL: false,
  userAgent: "Mellblomenator/9000",
});
const virtualConsole = new jsdom.VirtualConsole();
// https://github.com/jsdom/jsdom/tree/main?tab=readme-ov-file#virtual-consoles
// sends messages or console messages to nodejs console
// virtualConsole.sendTo(console);
// virtualConsole.sendTo(c, { omitJSDOMErrors: true });

// const cookieJar = new jsdom.CookieJar(store, options);
// const cookieJar = new jsdom.CookieJar(store, {});
// https://www.npmjs.com/package/tough-cookie
// https://github.com/jsdom/jsdom/tree/main?tab=readme-ov-file#cookie-jars

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p><div id="content"></div>
<script>document.getElementById("content").append(document.createElement("hr"));</script>`, { 
  runScripts: "outside-only",
  // runScripts: "dangerously"  
  // runScripts: "outside-only" , 
  // https://github.com/jsdom/jsdom/tree/main?tab=readme-ov-file#interfacing-with-the-nodejs-vm-module-using-getinternalvmcontext
  // pretendToBeVisual: true,
  // resources: "usable",
  // resources: resourceLoader,
  //https://github.com/jsdom/jsdom/tree/main?tab=readme-ov-file#loading-subresources
  // virtualConsole
  // https://github.com/jsdom/jsdom/tree/main?tab=readme-ov-file#virtual-consoles
  // cookieJar
  // https://github.com/jsdom/jsdom/tree/main?tab=readme-ov-file#cookie-jars
  // 
  // beforeParse(window) {
  //   window.document.childNodes.length === 0;
  //   window.someCoolAPI = () => { /* ... */ };
  // }
  // https://github.com/jsdom/jsdom/tree/main?tab=readme-ov-file#intervening-before-parsing
  // includeNodeLocations: true
  // https://github.com/jsdom/jsdom/tree/main?tab=readme-ov-file#getting-the-source-location-of-a-node-with-nodelocationnode
});

// const vmContext = dom.getInternalVMContext();
// script.runInContext(vmContext);
// script.runInContext(vmContext);
// script.runInContext(vmContext);
// console.assert(dom.window.ran === 3);
// https://github.com/jsdom/jsdom/tree/main?tab=readme-ov-file#interfacing-with-the-nodejs-vm-module-using-getinternalvmcontext


// dom.serialize() === "<!DOCTYPE html><html><head></head><body>hello</body></html>";
// // Contrast with:
// dom.window.document.documentElement.outerHTML === "<html><head></head><body>hello</body></html>";


console.log(dom);


// https://www.npmjs.com/package/canvas


// const { createCanvas, loadImage } = require('canvas')
// const canvas = createCanvas(200, 200)
// const ctx = canvas.getContext('2d')

// // Write "Awesome!"
// ctx.font = '30px Impact'
// ctx.rotate(0.1)
// ctx.fillText('Awesome!', 50, 100)

// // Draw line under text
// var text = ctx.measureText('Awesome!')
// ctx.strokeStyle = 'rgba(0,0,0,0.5)'
// ctx.beginPath()
// ctx.lineTo(50, 102)
// ctx.lineTo(50 + text.width, 102)
// ctx.stroke()
