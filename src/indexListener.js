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
  requires: [],
};

// inherit default listener
IndexListener.prototype = Object.create(IndexGrammarListener.prototype);
IndexListener.prototype.constructor = IndexListener;

// override default listener behavior
IndexListener.prototype.enterExpress = function (ctx) {
  console.log("Entered express");
  symbols["express_app"] = ctx.IDENT().getText();
};

IndexListener.prototype.enterRequire = function (ctx) {
  console.log("Entered require");
  const ident = ctx.IDENT().getText();
  const path = ctx.PATH().getText();
  symbols["requires"].push({
    ident: ident,
    path: path.replace(/\"/g, '').replace(/'/g, ''),
  });
};

IndexListener.prototype.exitIndexfile = function (ctx) {
  console.log("Finished parsing index file");
  console.log("Symbols found:", symbols);
};

exports.IndexListener = IndexListener;
