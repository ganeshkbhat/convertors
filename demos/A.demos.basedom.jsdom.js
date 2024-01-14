
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
  contentType: "text/html",
  // second is XML, "text/xml" or "application/xml"
  // An XML MIME type is any MIME type 
  //    whose subtype ends in "+xml" or whose essence 
  //    is "text/xml" or "application/xml". [RFC7303]
  // contentType: "text/xml",
  includeNodeLocations: true,
  storageQuota: 10000000,
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

// // Getting the string format of the DOM [XML/ HTML]
// dom.serialize() === "<!DOCTYPE html><html><head></head><body>hello</body></html>";
// // Contrast with:
// dom.window.document.documentElement.outerHTML === "<html><head></head><body>hello</body></html>";

console.log(dom);
