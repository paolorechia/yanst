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


// Enter a parse tree produced by RouterGrammarParser#routerline.
RouterGrammarListener.prototype.enterRouterline = function(ctx) {
};

// Exit a parse tree produced by RouterGrammarParser#routerline.
RouterGrammarListener.prototype.exitRouterline = function(ctx) {
};


// Enter a parse tree produced by RouterGrammarParser#import_.
RouterGrammarListener.prototype.enterImport_ = function(ctx) {
};

// Exit a parse tree produced by RouterGrammarParser#import_.
RouterGrammarListener.prototype.exitImport_ = function(ctx) {
};


// Enter a parse tree produced by RouterGrammarParser#ignored_import.
RouterGrammarListener.prototype.enterIgnored_import = function(ctx) {
};

// Exit a parse tree produced by RouterGrammarParser#ignored_import.
RouterGrammarListener.prototype.exitIgnored_import = function(ctx) {
};


// Enter a parse tree produced by RouterGrammarParser#instance.
RouterGrammarListener.prototype.enterInstance = function(ctx) {
};

// Exit a parse tree produced by RouterGrammarParser#instance.
RouterGrammarListener.prototype.exitInstance = function(ctx) {
};


// Enter a parse tree produced by RouterGrammarParser#function.
RouterGrammarListener.prototype.enterFunction = function(ctx) {
};

// Exit a parse tree produced by RouterGrammarParser#function.
RouterGrammarListener.prototype.exitFunction = function(ctx) {
};


// Enter a parse tree produced by RouterGrammarParser#route.
RouterGrammarListener.prototype.enterRoute = function(ctx) {
};

// Exit a parse tree produced by RouterGrammarParser#route.
RouterGrammarListener.prototype.exitRoute = function(ctx) {
};


// Enter a parse tree produced by RouterGrammarParser#httpmethod.
RouterGrammarListener.prototype.enterHttpmethod = function(ctx) {
};

// Exit a parse tree produced by RouterGrammarParser#httpmethod.
RouterGrammarListener.prototype.exitHttpmethod = function(ctx) {
};


// Enter a parse tree produced by RouterGrammarParser#args.
RouterGrammarListener.prototype.enterArgs = function(ctx) {
};

// Exit a parse tree produced by RouterGrammarParser#args.
RouterGrammarListener.prototype.exitArgs = function(ctx) {
};



exports.RouterGrammarListener = RouterGrammarListener;