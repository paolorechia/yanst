// Generated from IndexGrammar.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var IndexGrammarListener = require('./IndexGrammarListener').IndexGrammarListener;
var grammarFileName = "IndexGrammar.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0013L\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0006\u0003\r",
    "\n\u0003\r\u0003\u000e\u0003\u000e\u0003\u0003\u0003\u0003\u0007\u0003",
    "\u0013\n\u0003\f\u0003\u000e\u0003\u0016\u000b\u0003\u0003\u0003\u0003",
    "\u0003\u0007\u0003\u001a\n\u0003\f\u0003\u000e\u0003\u001d\u000b\u0003",
    "\u0003\u0003\u0003\u0003\u0007\u0003!\n\u0003\f\u0003\u000e\u0003$\u000b",
    "\u0003\u0003\u0003\u0003\u0003\u0007\u0003(\n\u0003\f\u0003\u000e\u0003",
    "+\u000b\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0006\u00042\n\u0004\r\u0004\u000e\u00043\u0003\u0004\u0003\u0004",
    "\u0007\u00048\n\u0004\f\u0004\u000e\u0004;\u000b\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0007\u0004A\n\u0004\f\u0004\u000e\u0004",
    "D\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0002\u0002\u0005\u0002\u0004\u0006\u0002",
    "\u0003\u0003\u0002\t\u000b\u0002P\u0002\b\u0003\u0002\u0002\u0002\u0004",
    "\n\u0003\u0002\u0002\u0002\u0006/\u0003\u0002\u0002\u0002\b\t\u0005",
    "\u0006\u0004\u0002\t\u0003\u0003\u0002\u0002\u0002\n\f\t\u0002\u0002",
    "\u0002\u000b\r\u0007\u0005\u0002\u0002\f\u000b\u0003\u0002\u0002\u0002",
    "\r\u000e\u0003\u0002\u0002\u0002\u000e\f\u0003\u0002\u0002\u0002\u000e",
    "\u000f\u0003\u0002\u0002\u0002\u000f\u0010\u0003\u0002\u0002\u0002\u0010",
    "\u0014\u0007\u0011\u0002\u0002\u0011\u0013\u0007\u0005\u0002\u0002\u0012",
    "\u0011\u0003\u0002\u0002\u0002\u0013\u0016\u0003\u0002\u0002\u0002\u0014",
    "\u0012\u0003\u0002\u0002\u0002\u0014\u0015\u0003\u0002\u0002\u0002\u0015",
    "\u0017\u0003\u0002\u0002\u0002\u0016\u0014\u0003\u0002\u0002\u0002\u0017",
    "\u001b\u0007\f\u0002\u0002\u0018\u001a\u0007\u0005\u0002\u0002\u0019",
    "\u0018\u0003\u0002\u0002\u0002\u001a\u001d\u0003\u0002\u0002\u0002\u001b",
    "\u0019\u0003\u0002\u0002\u0002\u001b\u001c\u0003\u0002\u0002\u0002\u001c",
    "\u001e\u0003\u0002\u0002\u0002\u001d\u001b\u0003\u0002\u0002\u0002\u001e",
    "\"\u0007\u000f\u0002\u0002\u001f!\u0007\u0005\u0002\u0002 \u001f\u0003",
    "\u0002\u0002\u0002!$\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002",
    "\"#\u0003\u0002\u0002\u0002#%\u0003\u0002\u0002\u0002$\"\u0003\u0002",
    "\u0002\u0002%)\u0007\u0003\u0002\u0002&(\u0007\u0005\u0002\u0002\'&",
    "\u0003\u0002\u0002\u0002(+\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002",
    "\u0002)*\u0003\u0002\u0002\u0002*,\u0003\u0002\u0002\u0002+)\u0003\u0002",
    "\u0002\u0002,-\u0007\u0004\u0002\u0002-.\u0007\u0007\u0002\u0002.\u0005",
    "\u0003\u0002\u0002\u0002/1\t\u0002\u0002\u000202\u0007\u0005\u0002\u0002",
    "10\u0003\u0002\u0002\u000223\u0003\u0002\u0002\u000231\u0003\u0002\u0002",
    "\u000234\u0003\u0002\u0002\u000245\u0003\u0002\u0002\u000259\u0007\u0011",
    "\u0002\u000268\u0007\u0005\u0002\u000276\u0003\u0002\u0002\u00028;\u0003",
    "\u0002\u0002\u000297\u0003\u0002\u0002\u00029:\u0003\u0002\u0002\u0002",
    ":<\u0003\u0002\u0002\u0002;9\u0003\u0002\u0002\u0002<=\u0007\f\u0002",
    "\u0002=>\u0007\u0005\u0002\u0002>B\u0007\r\u0002\u0002?A\u0007\u0005",
    "\u0002\u0002@?\u0003\u0002\u0002\u0002AD\u0003\u0002\u0002\u0002B@\u0003",
    "\u0002\u0002\u0002BC\u0003\u0002\u0002\u0002CE\u0003\u0002\u0002\u0002",
    "DB\u0003\u0002\u0002\u0002EF\u0007\u0003\u0002\u0002FG\u0007\u0012\u0002",
    "\u0002GH\u0007\u0004\u0002\u0002HI\u0007\u0013\u0002\u0002IJ\u0007\u0007",
    "\u0002\u0002J\u0007\u0003\u0002\u0002\u0002\n\u000e\u0014\u001b\")3",
    "9B"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", null, null, null, "';'", "'const'", 
                     "'let'", "'var'", "'='", "'require'", "'import'", "'express'" ];

var symbolicNames = [ null, null, null, "WHITESPACE", "NEWLINE", "END_STATEMENT", 
                      "SEMICOLON", "CONST", "LET", "VAR", "EQUAL", "REQUIRE", 
                      "IMPORT", "EXPRESS", "NUMBER", "IDENT", "PATH", "DONT_CARE_ARGS" ];

var ruleNames =  [ "indexfile", "express", "require" ];

function IndexGrammarParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

IndexGrammarParser.prototype = Object.create(antlr4.Parser.prototype);
IndexGrammarParser.prototype.constructor = IndexGrammarParser;

Object.defineProperty(IndexGrammarParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

IndexGrammarParser.EOF = antlr4.Token.EOF;
IndexGrammarParser.T__0 = 1;
IndexGrammarParser.T__1 = 2;
IndexGrammarParser.WHITESPACE = 3;
IndexGrammarParser.NEWLINE = 4;
IndexGrammarParser.END_STATEMENT = 5;
IndexGrammarParser.SEMICOLON = 6;
IndexGrammarParser.CONST = 7;
IndexGrammarParser.LET = 8;
IndexGrammarParser.VAR = 9;
IndexGrammarParser.EQUAL = 10;
IndexGrammarParser.REQUIRE = 11;
IndexGrammarParser.IMPORT = 12;
IndexGrammarParser.EXPRESS = 13;
IndexGrammarParser.NUMBER = 14;
IndexGrammarParser.IDENT = 15;
IndexGrammarParser.PATH = 16;
IndexGrammarParser.DONT_CARE_ARGS = 17;

IndexGrammarParser.RULE_indexfile = 0;
IndexGrammarParser.RULE_express = 1;
IndexGrammarParser.RULE_require = 2;


function IndexfileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IndexGrammarParser.RULE_indexfile;
    return this;
}

IndexfileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IndexfileContext.prototype.constructor = IndexfileContext;

IndexfileContext.prototype.require = function() {
    return this.getTypedRuleContext(RequireContext,0);
};

IndexfileContext.prototype.enterRule = function(listener) {
    if(listener instanceof IndexGrammarListener ) {
        listener.enterIndexfile(this);
	}
};

IndexfileContext.prototype.exitRule = function(listener) {
    if(listener instanceof IndexGrammarListener ) {
        listener.exitIndexfile(this);
	}
};




IndexGrammarParser.IndexfileContext = IndexfileContext;

IndexGrammarParser.prototype.indexfile = function() {

    var localctx = new IndexfileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, IndexGrammarParser.RULE_indexfile);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 6;
        this.require();
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


function ExpressContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IndexGrammarParser.RULE_express;
    return this;
}

ExpressContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressContext.prototype.constructor = ExpressContext;

ExpressContext.prototype.IDENT = function() {
    return this.getToken(IndexGrammarParser.IDENT, 0);
};

ExpressContext.prototype.EQUAL = function() {
    return this.getToken(IndexGrammarParser.EQUAL, 0);
};

ExpressContext.prototype.EXPRESS = function() {
    return this.getToken(IndexGrammarParser.EXPRESS, 0);
};

ExpressContext.prototype.END_STATEMENT = function() {
    return this.getToken(IndexGrammarParser.END_STATEMENT, 0);
};

ExpressContext.prototype.CONST = function() {
    return this.getToken(IndexGrammarParser.CONST, 0);
};

ExpressContext.prototype.VAR = function() {
    return this.getToken(IndexGrammarParser.VAR, 0);
};

ExpressContext.prototype.LET = function() {
    return this.getToken(IndexGrammarParser.LET, 0);
};

ExpressContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(IndexGrammarParser.WHITESPACE);
    } else {
        return this.getToken(IndexGrammarParser.WHITESPACE, i);
    }
};


ExpressContext.prototype.enterRule = function(listener) {
    if(listener instanceof IndexGrammarListener ) {
        listener.enterExpress(this);
	}
};

ExpressContext.prototype.exitRule = function(listener) {
    if(listener instanceof IndexGrammarListener ) {
        listener.exitExpress(this);
	}
};




IndexGrammarParser.ExpressContext = ExpressContext;

IndexGrammarParser.prototype.express = function() {

    var localctx = new ExpressContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, IndexGrammarParser.RULE_express);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 8;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IndexGrammarParser.CONST) | (1 << IndexGrammarParser.LET) | (1 << IndexGrammarParser.VAR))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 10; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 9;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 12; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===IndexGrammarParser.WHITESPACE);
        this.state = 14;
        this.match(IndexGrammarParser.IDENT);
        this.state = 18;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IndexGrammarParser.WHITESPACE) {
            this.state = 15;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 20;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 21;
        this.match(IndexGrammarParser.EQUAL);
        this.state = 25;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IndexGrammarParser.WHITESPACE) {
            this.state = 22;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 27;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 28;
        this.match(IndexGrammarParser.EXPRESS);
        this.state = 32;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IndexGrammarParser.WHITESPACE) {
            this.state = 29;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 34;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 35;
        this.match(IndexGrammarParser.T__0);
        this.state = 39;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IndexGrammarParser.WHITESPACE) {
            this.state = 36;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 41;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 42;
        this.match(IndexGrammarParser.T__1);
        this.state = 43;
        this.match(IndexGrammarParser.END_STATEMENT);
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


function RequireContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IndexGrammarParser.RULE_require;
    return this;
}

RequireContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RequireContext.prototype.constructor = RequireContext;

RequireContext.prototype.IDENT = function() {
    return this.getToken(IndexGrammarParser.IDENT, 0);
};

RequireContext.prototype.EQUAL = function() {
    return this.getToken(IndexGrammarParser.EQUAL, 0);
};

RequireContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(IndexGrammarParser.WHITESPACE);
    } else {
        return this.getToken(IndexGrammarParser.WHITESPACE, i);
    }
};


RequireContext.prototype.REQUIRE = function() {
    return this.getToken(IndexGrammarParser.REQUIRE, 0);
};

RequireContext.prototype.PATH = function() {
    return this.getToken(IndexGrammarParser.PATH, 0);
};

RequireContext.prototype.DONT_CARE_ARGS = function() {
    return this.getToken(IndexGrammarParser.DONT_CARE_ARGS, 0);
};

RequireContext.prototype.END_STATEMENT = function() {
    return this.getToken(IndexGrammarParser.END_STATEMENT, 0);
};

RequireContext.prototype.CONST = function() {
    return this.getToken(IndexGrammarParser.CONST, 0);
};

RequireContext.prototype.VAR = function() {
    return this.getToken(IndexGrammarParser.VAR, 0);
};

RequireContext.prototype.LET = function() {
    return this.getToken(IndexGrammarParser.LET, 0);
};

RequireContext.prototype.enterRule = function(listener) {
    if(listener instanceof IndexGrammarListener ) {
        listener.enterRequire(this);
	}
};

RequireContext.prototype.exitRule = function(listener) {
    if(listener instanceof IndexGrammarListener ) {
        listener.exitRequire(this);
	}
};




IndexGrammarParser.RequireContext = RequireContext;

IndexGrammarParser.prototype.require = function() {

    var localctx = new RequireContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, IndexGrammarParser.RULE_require);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 45;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IndexGrammarParser.CONST) | (1 << IndexGrammarParser.LET) | (1 << IndexGrammarParser.VAR))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 47; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 46;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 49; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===IndexGrammarParser.WHITESPACE);
        this.state = 51;
        this.match(IndexGrammarParser.IDENT);
        this.state = 55;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IndexGrammarParser.WHITESPACE) {
            this.state = 52;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 57;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 58;
        this.match(IndexGrammarParser.EQUAL);
        this.state = 59;
        this.match(IndexGrammarParser.WHITESPACE);
        this.state = 60;
        this.match(IndexGrammarParser.REQUIRE);
        this.state = 64;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IndexGrammarParser.WHITESPACE) {
            this.state = 61;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 66;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 67;
        this.match(IndexGrammarParser.T__0);
        this.state = 68;
        this.match(IndexGrammarParser.PATH);
        this.state = 69;
        this.match(IndexGrammarParser.T__1);
        this.state = 70;
        this.match(IndexGrammarParser.DONT_CARE_ARGS);
        this.state = 71;
        this.match(IndexGrammarParser.END_STATEMENT);
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


exports.IndexGrammarParser = IndexGrammarParser;
