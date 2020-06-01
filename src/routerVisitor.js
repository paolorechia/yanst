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

let routerVariable;

// inherit default visitor
RouterVisitor.prototype = Object.create(RouterGrammarVisitor.prototype);
RouterVisitor.prototype.constructor = RouterVisitor;

// override default visitor behavior
RouterVisitor.prototype.visitImport_ = function (ctx) {
  console.log("Visited router import ");
  if (ctx.IDENT && ctx.IDENT()) {
    expressVariable = ctx.IDENT().getText();  
  }
  if (ctx.EXPRESS && ctx.EXPRESS()) {
    expressVariable = ctx.EXPRESS().getText();  
  }
  console.log(expressVariable);
  return null;
};

RouterVisitor.prototype.visitInstance = function (ctx) {
  console.log("Visit instance");
  const identifiers = ctx.IDENT();
  let variableName = '';
  if (identifiers) {
    if (identifiers.length) {
      variableName = identifiers[0].getText();
    } else {
      variableName = identifiers.getText();
    }
  }
  if (ctx.THIS && ctx.THIS()) {
    variableName = 'this.' + variableName;
  }
  console.log(variableName);
  return null;
};

RouterVisitor.prototype.visitRoute = function (ctx) {
  console.log("Visit route definition");
  this.visitChildren(ctx);
  console.log(ctx.URLPATH().getText());
  return null;
};

RouterVisitor.prototype.visitHttpmethod = function (ctx) {
  console.log("Visit method definition");
  if (ctx.GET && ctx.GET()) {
    console.log(ctx.GET().getText());
  }
  if (ctx.POST && ctx.POST()) {
    console.log(ctx.POST().getText());
  }
  if (ctx.PUT && ctx.PUT()) {
    console.log(ctx.PUT().getText());
  }
  if (ctx.DELETE && ctx.DELETE()) {
    console.log(ctx.DELETE().getText());
  }
  return null;
};

RouterVisitor.prototype.visitRouterfile = function (ctx) {
  console.log("Visit router file");
  this.visitChildren(ctx);
  return null;
};



exports.RouterVisitor = RouterVisitor;
