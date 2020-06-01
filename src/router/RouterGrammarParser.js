// Generated from RouterGrammar.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RouterGrammarListener = require('./RouterGrammarListener').RouterGrammarListener;
var RouterGrammarVisitor = require('./RouterGrammarVisitor').RouterGrammarVisitor;

var grammarFileName = "RouterGrammar.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001b\u0018\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0003\u0002\u0006\u0002\n\n\u0002\r\u0002\u000e\u0002\u000b",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0002\u0002",
    "\u0005\u0002\u0004\u0006\u0002\u0003\u0004\u0002\u0010\u0010\u0017\u0017",
    "\u0002\u0015\u0002\t\u0003\u0002\u0002\u0002\u0004\r\u0003\u0002\u0002",
    "\u0002\u0006\u000f\u0003\u0002\u0002\u0002\b\n\u0005\u0004\u0003\u0002",
    "\t\b\u0003\u0002\u0002\u0002\n\u000b\u0003\u0002\u0002\u0002\u000b\t",
    "\u0003\u0002\u0002\u0002\u000b\f\u0003\u0002\u0002\u0002\f\u0003\u0003",
    "\u0002\u0002\u0002\r\u000e\u0005\u0006\u0004\u0002\u000e\u0005\u0003",
    "\u0002\u0002\u0002\u000f\u0010\u0007\u000f\u0002\u0002\u0010\u0011\u0007",
    "\u0013\u0002\u0002\u0011\u0012\u0007\u0011\u0002\u0002\u0012\u0013\t",
    "\u0002\u0002\u0002\u0013\u0014\u0007\u0015\u0002\u0002\u0014\u0015\u0007",
    "\u0019\u0002\u0002\u0015\u0016\u0007\u0005\u0002\u0002\u0016\u0007\u0003",
    "\u0002\u0002\u0002\u0003\u000b"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, "';'", "','", "'const'", "'let'", 
                     "'var'", "'='", "'.'", "'use'", "'require'", "'import'", 
                     "'express'", "'as'", null, "'*'", null, "'from'" ];

var symbolicNames = [ null, "WHITESPACE", "NEWLINE", "END_STATEMENT", "SEMICOLON", 
                      "COMMA", "CONST", "LET", "VAR", "EQUAL", "DOT", "USE", 
                      "REQUIRE", "IMPORT", "EXPRESS", "AS", "LINE_COMMENT", 
                      "ASTERISK", "PROPERTY", "FROM", "NUMBER", "IDENT", 
                      "PATH", "MODULE", "DONT_CARE_ARGS", "ANY" ];

var ruleNames =  [ "routerfile", "myline", "import_" ];

function RouterGrammarParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

RouterGrammarParser.prototype = Object.create(antlr4.Parser.prototype);
RouterGrammarParser.prototype.constructor = RouterGrammarParser;

Object.defineProperty(RouterGrammarParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

RouterGrammarParser.EOF = antlr4.Token.EOF;
RouterGrammarParser.WHITESPACE = 1;
RouterGrammarParser.NEWLINE = 2;
RouterGrammarParser.END_STATEMENT = 3;
RouterGrammarParser.SEMICOLON = 4;
RouterGrammarParser.COMMA = 5;
RouterGrammarParser.CONST = 6;
RouterGrammarParser.LET = 7;
RouterGrammarParser.VAR = 8;
RouterGrammarParser.EQUAL = 9;
RouterGrammarParser.DOT = 10;
RouterGrammarParser.USE = 11;
RouterGrammarParser.REQUIRE = 12;
RouterGrammarParser.IMPORT = 13;
RouterGrammarParser.EXPRESS = 14;
RouterGrammarParser.AS = 15;
RouterGrammarParser.LINE_COMMENT = 16;
RouterGrammarParser.ASTERISK = 17;
RouterGrammarParser.PROPERTY = 18;
RouterGrammarParser.FROM = 19;
RouterGrammarParser.NUMBER = 20;
RouterGrammarParser.IDENT = 21;
RouterGrammarParser.PATH = 22;
RouterGrammarParser.MODULE = 23;
RouterGrammarParser.DONT_CARE_ARGS = 24;
RouterGrammarParser.ANY = 25;

RouterGrammarParser.RULE_routerfile = 0;
RouterGrammarParser.RULE_myline = 1;
RouterGrammarParser.RULE_import_ = 2;


function RouterfileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RouterGrammarParser.RULE_routerfile;
    return this;
}

RouterfileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RouterfileContext.prototype.constructor = RouterfileContext;

RouterfileContext.prototype.myline = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MylineContext);
    } else {
        return this.getTypedRuleContext(MylineContext,i);
    }
};

RouterfileContext.prototype.enterRule = function(listener) {
    if(listener instanceof RouterGrammarListener ) {
        listener.enterRouterfile(this);
	}
};

RouterfileContext.prototype.exitRule = function(listener) {
    if(listener instanceof RouterGrammarListener ) {
        listener.exitRouterfile(this);
	}
};

RouterfileContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RouterGrammarVisitor ) {
        return visitor.visitRouterfile(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RouterGrammarParser.RouterfileContext = RouterfileContext;

RouterGrammarParser.prototype.routerfile = function() {

    var localctx = new RouterfileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, RouterGrammarParser.RULE_routerfile);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 7; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 6;
            this.myline();
            this.state = 9; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===RouterGrammarParser.IMPORT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MylineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RouterGrammarParser.RULE_myline;
    return this;
}

MylineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MylineContext.prototype.constructor = MylineContext;

MylineContext.prototype.import_ = function() {
    return this.getTypedRuleContext(Import_Context,0);
};

MylineContext.prototype.enterRule = function(listener) {
    if(listener instanceof RouterGrammarListener ) {
        listener.enterMyline(this);
	}
};

MylineContext.prototype.exitRule = function(listener) {
    if(listener instanceof RouterGrammarListener ) {
        listener.exitMyline(this);
	}
};

MylineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RouterGrammarVisitor ) {
        return visitor.visitMyline(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RouterGrammarParser.MylineContext = MylineContext;

RouterGrammarParser.prototype.myline = function() {

    var localctx = new MylineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, RouterGrammarParser.RULE_myline);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 11;
        this.import_();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Import_Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RouterGrammarParser.RULE_import_;
    return this;
}

Import_Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Import_Context.prototype.constructor = Import_Context;

Import_Context.prototype.IMPORT = function() {
    return this.getToken(RouterGrammarParser.IMPORT, 0);
};

Import_Context.prototype.ASTERISK = function() {
    return this.getToken(RouterGrammarParser.ASTERISK, 0);
};

Import_Context.prototype.AS = function() {
    return this.getToken(RouterGrammarParser.AS, 0);
};

Import_Context.prototype.FROM = function() {
    return this.getToken(RouterGrammarParser.FROM, 0);
};

Import_Context.prototype.MODULE = function() {
    return this.getToken(RouterGrammarParser.MODULE, 0);
};

Import_Context.prototype.END_STATEMENT = function() {
    return this.getToken(RouterGrammarParser.END_STATEMENT, 0);
};

Import_Context.prototype.IDENT = function() {
    return this.getToken(RouterGrammarParser.IDENT, 0);
};

Import_Context.prototype.EXPRESS = function() {
    return this.getToken(RouterGrammarParser.EXPRESS, 0);
};

Import_Context.prototype.enterRule = function(listener) {
    if(listener instanceof RouterGrammarListener ) {
        listener.enterImport_(this);
	}
};

Import_Context.prototype.exitRule = function(listener) {
    if(listener instanceof RouterGrammarListener ) {
        listener.exitImport_(this);
	}
};

Import_Context.prototype.accept = function(visitor) {
    if ( visitor instanceof RouterGrammarVisitor ) {
        return visitor.visitImport_(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RouterGrammarParser.Import_Context = Import_Context;

RouterGrammarParser.prototype.import_ = function() {

    var localctx = new Import_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 4, RouterGrammarParser.RULE_import_);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 13;
        this.match(RouterGrammarParser.IMPORT);
        this.state = 14;
        this.match(RouterGrammarParser.ASTERISK);
        this.state = 15;
        this.match(RouterGrammarParser.AS);
        this.state = 16;
        _la = this._input.LA(1);
        if(!(_la===RouterGrammarParser.EXPRESS || _la===RouterGrammarParser.IDENT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 17;
        this.match(RouterGrammarParser.FROM);
        this.state = 18;
        this.match(RouterGrammarParser.MODULE);
        this.state = 19;
        this.match(RouterGrammarParser.END_STATEMENT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.RouterGrammarParser = RouterGrammarParser;
