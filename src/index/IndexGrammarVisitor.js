// Generated from IndexGrammar.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by IndexGrammarParser.

function IndexGrammarVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

IndexGrammarVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
IndexGrammarVisitor.prototype.constructor = IndexGrammarVisitor;

// Visit a parse tree produced by IndexGrammarParser#indexfile.
IndexGrammarVisitor.prototype.visitIndexfile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by IndexGrammarParser#myline.
IndexGrammarVisitor.prototype.visitMyline = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by IndexGrammarParser#express.
IndexGrammarVisitor.prototype.visitExpress = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by IndexGrammarParser#require.
IndexGrammarVisitor.prototype.visitRequire = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by IndexGrammarParser#useroute.
IndexGrammarVisitor.prototype.visitUseroute = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by IndexGrammarParser#import_statement.
IndexGrammarVisitor.prototype.visitImport_statement = function(ctx) {
  return this.visitChildren(ctx);
};



exports.IndexGrammarVisitor = IndexGrammarVisitor;