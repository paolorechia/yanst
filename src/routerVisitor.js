const antl4 = require("antlr4/index");
const RouterGrammarLexer = require("./router/RouterGrammarLexer");
const RouterGrammarParser = require("./router/RouterGrammarParser");
const RouterGrammarVisitor = require("./router/RouterGrammarVisitor")
  .RouterGrammarVisitor;

RouterVisitor = function () {
  RouterGrammarVisitor.call(this); // inherit default listener
  return this;
};


let expressVariable;

// inherit default visitor
RouterVisitor.prototype = Object.create(RouterGrammarVisitor.prototype);
RouterVisitor.prototype.constructor = RouterVisitor;

// override default visitor behavior
RouterVisitor.prototype.visitImport_ = function (ctx) {
  console.log("Visited import ");
  if (ctx.IDENT) {
    expressVariable = ctx.IDENT().getText();  
  }
  if (ctx.EXPRESS) {
    expressVariable = ctx.EXPRESS().getText();  
  }
  console.log(expressVariable);
};

IndexVisitor.prototype.visitRouterfile = function (ctx) {
  console.log("Visit router file");
  this.visitChildren(ctx);
  return null;
};

exports.RouterVisitor = RouterVisitor;
