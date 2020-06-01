const antl4 = require("antlr4/index");
const IndexGrammarLexer = require("./index/IndexGrammarLexer");
const IndexGrammarParser = require("./index/IndexGrammarParser");
const IndexGrammarVisitor = require("./index/IndexGrammarVisitor")
  .IndexGrammarVisitor;

console.log("Building Visitor...");
IndexVisitor = function () {
  console.log("Inheriting...");
  IndexGrammarVisitor.call(this); // inherit default listener
  return this;
};

const symbols = {
  express_app: "",
  requires: {}
};

// inherit default listener
IndexVisitor.prototype = Object.create(IndexGrammarVisitor.prototype);
IndexVisitor.prototype.constructor = IndexVisitor;

// override default listener behavior
IndexVisitor.prototype.enterMyline= function (ctx) {
  if (ctx.MYLINE) {
    console.log(ctx.MYLINE().ctx.getText());
  }
};

IndexVisitor.prototype.visitExpress = function (ctx) {
  console.log("Visited express");
  symbols["express_app"] = ctx.IDENT().getText();
};

IndexVisitor.prototype.visitRequire = function (ctx) {
  if (ctx.IDENT && ctx.PATH && ctx.IDENT() && ctx.PATH()) {
    console.log("Visited valid require");
    const ident = ctx.IDENT().getText();
    const path = ctx.PATH().getText();
    symbols["requires"][ident] = {
      filepath: path.replace(/\"/g, '').replace(/'/g, ''),
    }
  }
};

IndexVisitor.prototype.visitUseroute = function (ctx) {
  if (ctx.PATH && ctx.PATH() && ctx.IDENT().length > 1) {
    console.log("Visited valid userroute");
    const ident = ctx.IDENT()[1].getText();
    console.log(ident);
    const path = ctx.PATH().getText();
    console.log(path);
    if (symbols["requires"][ident])
      symbols["requires"][ident]['urlpath'] = path.replace(/\"/g, '').replace(/'/g, '')
  }
}

IndexVisitor.prototype.visitIndexfile = function (ctx) {
  console.log("Visit index file");
  this.visitChildren(ctx);
  // console.log("Symbols found:", symbols);
  return symbols;
};

exports.IndexVisitor = IndexVisitor;
