// Generated from IndexGrammar.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by IndexGrammarParser.
function IndexGrammarListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

IndexGrammarListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
IndexGrammarListener.prototype.constructor = IndexGrammarListener;

// Enter a parse tree produced by IndexGrammarParser#indexfile.
IndexGrammarListener.prototype.enterIndexfile = function(ctx) {
};

// Exit a parse tree produced by IndexGrammarParser#indexfile.
IndexGrammarListener.prototype.exitIndexfile = function(ctx) {
};


// Enter a parse tree produced by IndexGrammarParser#express.
IndexGrammarListener.prototype.enterExpress = function(ctx) {
};

// Exit a parse tree produced by IndexGrammarParser#express.
IndexGrammarListener.prototype.exitExpress = function(ctx) {
};


// Enter a parse tree produced by IndexGrammarParser#require.
IndexGrammarListener.prototype.enterRequire = function(ctx) {
};

// Exit a parse tree produced by IndexGrammarParser#require.
IndexGrammarListener.prototype.exitRequire = function(ctx) {
};


// Enter a parse tree produced by IndexGrammarParser#useroute.
IndexGrammarListener.prototype.enterUseroute = function(ctx) {
};

// Exit a parse tree produced by IndexGrammarParser#useroute.
IndexGrammarListener.prototype.exitUseroute = function(ctx) {
};



exports.IndexGrammarListener = IndexGrammarListener;