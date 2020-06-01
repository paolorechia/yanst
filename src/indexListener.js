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

}


// inherit default listener
IndexListener.prototype = Object.create(IndexGrammarListener.prototype);
IndexListener.prototype.constructor = IndexListener;

// override default listener behavior
IndexListener.prototype.enterExpress = function (ctx) {
  console.log("Entered express");
  symbols['express'] = ctx.IDENT().getText();
  console.log(symbols);
};

IndexListener.prototype.exitExpress = function (ctx) {
  console.log("Exited express");
};

exports.IndexListener = IndexListener;
