// Generated from RouterGrammar.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by RouterGrammarParser.
function RouterGrammarListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

RouterGrammarListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
RouterGrammarListener.prototype.constructor = RouterGrammarListener;

// Enter a parse tree produced by RouterGrammarParser#routerfile.
RouterGrammarListener.prototype.enterRouterfile = function(ctx) {
};

// Exit a parse tree produced by RouterGrammarParser#routerfile.
RouterGrammarListener.prototype.exitRouterfile = function(ctx) {
};


// Enter a parse tree produced by RouterGrammarParser#myline.
RouterGrammarListener.prototype.enterMyline = function(ctx) {
};

// Exit a parse tree produced by RouterGrammarParser#myline.
RouterGrammarListener.prototype.exitMyline = function(ctx) {
};


// Enter a parse tree produced by RouterGrammarParser#import_.
RouterGrammarListener.prototype.enterImport_ = function(ctx) {
};

// Exit a parse tree produced by RouterGrammarParser#import_.
RouterGrammarListener.prototype.exitImport_ = function(ctx) {
};



exports.RouterGrammarListener = RouterGrammarListener;