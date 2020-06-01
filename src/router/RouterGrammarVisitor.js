// Generated from RouterGrammar.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by RouterGrammarParser.

function RouterGrammarVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

RouterGrammarVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
RouterGrammarVisitor.prototype.constructor = RouterGrammarVisitor;

// Visit a parse tree produced by RouterGrammarParser#routerfile.
RouterGrammarVisitor.prototype.visitRouterfile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RouterGrammarParser#routerline.
RouterGrammarVisitor.prototype.visitRouterline = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RouterGrammarParser#import_.
RouterGrammarVisitor.prototype.visitImport_ = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RouterGrammarParser#ignored_import.
RouterGrammarVisitor.prototype.visitIgnored_import = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RouterGrammarParser#instance.
RouterGrammarVisitor.prototype.visitInstance = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RouterGrammarParser#function.
RouterGrammarVisitor.prototype.visitFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RouterGrammarParser#route.
RouterGrammarVisitor.prototype.visitRoute = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RouterGrammarParser#httpmethod.
RouterGrammarVisitor.prototype.visitHttpmethod = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RouterGrammarParser#args.
RouterGrammarVisitor.prototype.visitArgs = function(ctx) {
  return this.visitChildren(ctx);
};



exports.RouterGrammarVisitor = RouterGrammarVisitor;