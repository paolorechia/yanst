const antl4 = require("antlr4/index");
const IndexGrammarLexer = require("./index/IndexGrammarLexer");
const IndexGrammarParser = require("./index/IndexGrammarParser");
const IndexGrammarListener = require("./index/IndexGrammarListener")
  .IndexGrammarListener;

console.log("Building Listener...");
IndexListener = function () {
  console.log("Inheriting...");
  IndexGrammarListener.call(this); // inherit default listener
  return this;
};

const symbols = {
  express_app: "",
  requires: {}
};

// inherit default listener
IndexListener.prototype = Object.create(IndexGrammarListener.prototype);
IndexListener.prototype.constructor = IndexListener;

// override default listener behavior
IndexListener.prototype.enterMyline= function (ctx) {
  console.log("Entered Line ");
  if (ctx.MYLINE) {
    console.log(ctx.MYLINE().ctx.getText());
  }
};

IndexListener.prototype.enterExpress = function (ctx) {
  console.log("Entered express");
  symbols["express_app"] = ctx.IDENT().getText();
};

IndexListener.prototype.enterRequire = function (ctx) {
  console.log("Entered require");
  if (ctx.IDENT && ctx.PATH) {
    const ident = ctx.IDENT().getText();
    const path = ctx.PATH().getText();
    symbols["requires"][ident] = {
      filepath: path.replace(/\"/g, '').replace(/'/g, ''),
    }
  }
};

IndexListener.prototype.enterUseroute = function (ctx) {
  console.log("Entered userroute");
  if (ctx.PATH && ctx.PATH() && ctx.IDENT().length > 1) {
    const ident = ctx.IDENT()[1].getText();
    console.log(ident);
    const path = ctx.PATH().getText();
    console.log(path);
    if (symbols["requires"][ident])
      symbols["requires"][ident]['urlpath'] = path.replace(/\"/g, '').replace(/'/g, '')
  }
}

IndexListener.prototype.exitIndexfile = function (ctx) {
  console.log("Finished parsing index file");
  console.log("Symbols found:", symbols);
};

exports.IndexListener = IndexListener;
