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
let instanceVariable;

function isString(str) {
 return typeof str == 'string' || str instanceof String;
}

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
  const identifiers = ctx.IDENT();
  if (ctx.ROUTER && ctx.ROUTER()) {
    console.log("Visit router instance");
    let variableName = '';
    if (identifiers) { if (identifiers.length) {
        variableName = identifiers[0].getText();
      } else {
        variableName = identifiers.getText();
      }
    }
    if (ctx.THIS && ctx.THIS()) {
      variableName = 'this.' + variableName;
    }
    instanceVariable = variableName;
    console.log(instanceVariable);
  }
  return null;
};

RouterVisitor.prototype.visitRoute = function (ctx) {
  const childrenNodes = this.visitChildren(ctx);
  if (ctx.URLPATH && ctx.URLPATH()) {
    // console.log("Visit valid route definition");
    const method = childrenNodes.filter(
      (node) => isString(node)
    )
    const urlpath = ctx.URLPATH().getText();
    console.log(method[0], urlpath);
  }
  return null;
};

RouterVisitor.prototype.visitHttpmethod = function (ctx) {
  // console.log("Visit method definition");
  let method = null;
  if (ctx.GET && ctx.GET()) {
    method = ctx.GET().getText();
  }
  if (ctx.POST && ctx.POST()) {
    method = ctx.POST().getText();
  }
  if (ctx.PUT && ctx.PUT()) {
    method = ctx.PUT().getText();
  }
  if (ctx.PATCH && ctx.PATCH()) {
    method = ctx.PATCH().getText();
  }
  if (ctx.DELETE && ctx.DELETE()) {
    method = ctx.DELETE().getText();
  }
  return method;
};

RouterVisitor.prototype.visitRouterfile = function (ctx) {
  console.log("Visit router file");
  routes = this.visitChildren(ctx);
  return routes;
};



exports.RouterVisitor = RouterVisitor;
