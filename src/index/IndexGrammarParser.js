// Generated from IndexGrammar.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var IndexGrammarListener = require('./IndexGrammarListener').IndexGrammarListener;
var grammarFileName = "IndexGrammar.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0016d\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0006\u0003\u000f\n\u0003\r\u0003\u000e\u0003\u0010\u0003\u0003",
    "\u0003\u0003\u0007\u0003\u0015\n\u0003\f\u0003\u000e\u0003\u0018\u000b",
    "\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u001c\n\u0003\f\u0003\u000e",
    "\u0003\u001f\u000b\u0003\u0003\u0003\u0003\u0003\u0007\u0003#\n\u0003",
    "\f\u0003\u000e\u0003&\u000b\u0003\u0003\u0003\u0003\u0003\u0007\u0003",
    "*\n\u0003\f\u0003\u000e\u0003-\u000b\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0006\u00044\n\u0004\r\u0004\u000e\u0004",
    "5\u0003\u0004\u0003\u0004\u0007\u0004:\n\u0004\f\u0004\u000e\u0004=",
    "\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004",
    "C\n\u0004\f\u0004\u000e\u0004F\u000b\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005T\n\u0005\f\u0005",
    "\u000e\u0005W\u000b\u0005\u0003\u0005\u0003\u0005\u0007\u0005[\n\u0005",
    "\f\u0005\u000e\u0005^\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0002\u0002\u0006\u0002\u0004\u0006\b\u0002",
    "\u0003\u0003\u0002\n\f\u0002i\u0002\n\u0003\u0002\u0002\u0002\u0004",
    "\f\u0003\u0002\u0002\u0002\u00061\u0003\u0002\u0002\u0002\bM\u0003\u0002",
    "\u0002\u0002\n\u000b\u0005\b\u0005\u0002\u000b\u0003\u0003\u0002\u0002",
    "\u0002\f\u000e\t\u0002\u0002\u0002\r\u000f\u0007\u0005\u0002\u0002\u000e",
    "\r\u0003\u0002\u0002\u0002\u000f\u0010\u0003\u0002\u0002\u0002\u0010",
    "\u000e\u0003\u0002\u0002\u0002\u0010\u0011\u0003\u0002\u0002\u0002\u0011",
    "\u0012\u0003\u0002\u0002\u0002\u0012\u0016\u0007\u0014\u0002\u0002\u0013",
    "\u0015\u0007\u0005\u0002\u0002\u0014\u0013\u0003\u0002\u0002\u0002\u0015",
    "\u0018\u0003\u0002\u0002\u0002\u0016\u0014\u0003\u0002\u0002\u0002\u0016",
    "\u0017\u0003\u0002\u0002\u0002\u0017\u0019\u0003\u0002\u0002\u0002\u0018",
    "\u0016\u0003\u0002\u0002\u0002\u0019\u001d\u0007\r\u0002\u0002\u001a",
    "\u001c\u0007\u0005\u0002\u0002\u001b\u001a\u0003\u0002\u0002\u0002\u001c",
    "\u001f\u0003\u0002\u0002\u0002\u001d\u001b\u0003\u0002\u0002\u0002\u001d",
    "\u001e\u0003\u0002\u0002\u0002\u001e \u0003\u0002\u0002\u0002\u001f",
    "\u001d\u0003\u0002\u0002\u0002 $\u0007\u0012\u0002\u0002!#\u0007\u0005",
    "\u0002\u0002\"!\u0003\u0002\u0002\u0002#&\u0003\u0002\u0002\u0002$\"",
    "\u0003\u0002\u0002\u0002$%\u0003\u0002\u0002\u0002%\'\u0003\u0002\u0002",
    "\u0002&$\u0003\u0002\u0002\u0002\'+\u0007\u0003\u0002\u0002(*\u0007",
    "\u0005\u0002\u0002)(\u0003\u0002\u0002\u0002*-\u0003\u0002\u0002\u0002",
    "+)\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002,.\u0003\u0002\u0002",
    "\u0002-+\u0003\u0002\u0002\u0002./\u0007\u0004\u0002\u0002/0\u0007\u0007",
    "\u0002\u00020\u0005\u0003\u0002\u0002\u000213\t\u0002\u0002\u000224",
    "\u0007\u0005\u0002\u000232\u0003\u0002\u0002\u000245\u0003\u0002\u0002",
    "\u000253\u0003\u0002\u0002\u000256\u0003\u0002\u0002\u000267\u0003\u0002",
    "\u0002\u00027;\u0007\u0014\u0002\u00028:\u0007\u0005\u0002\u000298\u0003",
    "\u0002\u0002\u0002:=\u0003\u0002\u0002\u0002;9\u0003\u0002\u0002\u0002",
    ";<\u0003\u0002\u0002\u0002<>\u0003\u0002\u0002\u0002=;\u0003\u0002\u0002",
    "\u0002>?\u0007\r\u0002\u0002?@\u0007\u0005\u0002\u0002@D\u0007\u0010",
    "\u0002\u0002AC\u0007\u0005\u0002\u0002BA\u0003\u0002\u0002\u0002CF\u0003",
    "\u0002\u0002\u0002DB\u0003\u0002\u0002\u0002DE\u0003\u0002\u0002\u0002",
    "EG\u0003\u0002\u0002\u0002FD\u0003\u0002\u0002\u0002GH\u0007\u0003\u0002",
    "\u0002HI\u0007\u0015\u0002\u0002IJ\u0007\u0004\u0002\u0002JK\u0007\u0016",
    "\u0002\u0002KL\u0007\u0007\u0002\u0002L\u0007\u0003\u0002\u0002\u0002",
    "MN\u0007\u0014\u0002\u0002NO\u0007\u000e\u0002\u0002OP\u0007\u000f\u0002",
    "\u0002PQ\u0007\u0003\u0002\u0002QU\u0007\u0015\u0002\u0002RT\u0007\u0005",
    "\u0002\u0002SR\u0003\u0002\u0002\u0002TW\u0003\u0002\u0002\u0002US\u0003",
    "\u0002\u0002\u0002UV\u0003\u0002\u0002\u0002VX\u0003\u0002\u0002\u0002",
    "WU\u0003\u0002\u0002\u0002X\\\u0007\t\u0002\u0002Y[\u0007\u0005\u0002",
    "\u0002ZY\u0003\u0002\u0002\u0002[^\u0003\u0002\u0002\u0002\\Z\u0003",
    "\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002]_\u0003\u0002\u0002\u0002",
    "^\\\u0003\u0002\u0002\u0002_`\u0007\u0014\u0002\u0002`a\u0007\u0004",
    "\u0002\u0002ab\u0007\u0007\u0002\u0002b\t\u0003\u0002\u0002\u0002\f",
    "\u0010\u0016\u001d$+5;DU\\"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", null, null, null, "';'", "','", 
                     "'const'", "'let'", "'var'", "'='", "'.'", "'use'", 
                     "'require'", "'import'", "'express'" ];

var symbolicNames = [ null, null, null, "WHITESPACE", "NEWLINE", "END_STATEMENT", 
                      "SEMICOLON", "COMMA", "CONST", "LET", "VAR", "EQUAL", 
                      "DOT", "USE", "REQUIRE", "IMPORT", "EXPRESS", "NUMBER", 
                      "IDENT", "PATH", "DONT_CARE_ARGS" ];

var ruleNames =  [ "indexfile", "express", "require", "useroute" ];

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
IndexGrammarParser.COMMA = 7;
IndexGrammarParser.CONST = 8;
IndexGrammarParser.LET = 9;
IndexGrammarParser.VAR = 10;
IndexGrammarParser.EQUAL = 11;
IndexGrammarParser.DOT = 12;
IndexGrammarParser.USE = 13;
IndexGrammarParser.REQUIRE = 14;
IndexGrammarParser.IMPORT = 15;
IndexGrammarParser.EXPRESS = 16;
IndexGrammarParser.NUMBER = 17;
IndexGrammarParser.IDENT = 18;
IndexGrammarParser.PATH = 19;
IndexGrammarParser.DONT_CARE_ARGS = 20;

IndexGrammarParser.RULE_indexfile = 0;
IndexGrammarParser.RULE_express = 1;
IndexGrammarParser.RULE_require = 2;
IndexGrammarParser.RULE_useroute = 3;


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

IndexfileContext.prototype.useroute = function() {
    return this.getTypedRuleContext(UserouteContext,0);
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
        this.state = 8;
        this.useroute();
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
        this.state = 10;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IndexGrammarParser.CONST) | (1 << IndexGrammarParser.LET) | (1 << IndexGrammarParser.VAR))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 12; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 11;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 14; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===IndexGrammarParser.WHITESPACE);
        this.state = 16;
        this.match(IndexGrammarParser.IDENT);
        this.state = 20;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IndexGrammarParser.WHITESPACE) {
            this.state = 17;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 22;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 23;
        this.match(IndexGrammarParser.EQUAL);
        this.state = 27;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IndexGrammarParser.WHITESPACE) {
            this.state = 24;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 29;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 30;
        this.match(IndexGrammarParser.EXPRESS);
        this.state = 34;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IndexGrammarParser.WHITESPACE) {
            this.state = 31;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 36;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 37;
        this.match(IndexGrammarParser.T__0);
        this.state = 41;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IndexGrammarParser.WHITESPACE) {
            this.state = 38;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 43;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 44;
        this.match(IndexGrammarParser.T__1);
        this.state = 45;
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
        this.state = 47;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IndexGrammarParser.CONST) | (1 << IndexGrammarParser.LET) | (1 << IndexGrammarParser.VAR))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 49; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 48;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 51; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===IndexGrammarParser.WHITESPACE);
        this.state = 53;
        this.match(IndexGrammarParser.IDENT);
        this.state = 57;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IndexGrammarParser.WHITESPACE) {
            this.state = 54;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 59;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 60;
        this.match(IndexGrammarParser.EQUAL);
        this.state = 61;
        this.match(IndexGrammarParser.WHITESPACE);
        this.state = 62;
        this.match(IndexGrammarParser.REQUIRE);
        this.state = 66;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IndexGrammarParser.WHITESPACE) {
            this.state = 63;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 68;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 69;
        this.match(IndexGrammarParser.T__0);
        this.state = 70;
        this.match(IndexGrammarParser.PATH);
        this.state = 71;
        this.match(IndexGrammarParser.T__1);
        this.state = 72;
        this.match(IndexGrammarParser.DONT_CARE_ARGS);
        this.state = 73;
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


function UserouteContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IndexGrammarParser.RULE_useroute;
    return this;
}

UserouteContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UserouteContext.prototype.constructor = UserouteContext;

UserouteContext.prototype.IDENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(IndexGrammarParser.IDENT);
    } else {
        return this.getToken(IndexGrammarParser.IDENT, i);
    }
};


UserouteContext.prototype.DOT = function() {
    return this.getToken(IndexGrammarParser.DOT, 0);
};

UserouteContext.prototype.USE = function() {
    return this.getToken(IndexGrammarParser.USE, 0);
};

UserouteContext.prototype.PATH = function() {
    return this.getToken(IndexGrammarParser.PATH, 0);
};

UserouteContext.prototype.COMMA = function() {
    return this.getToken(IndexGrammarParser.COMMA, 0);
};

UserouteContext.prototype.END_STATEMENT = function() {
    return this.getToken(IndexGrammarParser.END_STATEMENT, 0);
};

UserouteContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(IndexGrammarParser.WHITESPACE);
    } else {
        return this.getToken(IndexGrammarParser.WHITESPACE, i);
    }
};


UserouteContext.prototype.enterRule = function(listener) {
    if(listener instanceof IndexGrammarListener ) {
        listener.enterUseroute(this);
	}
};

UserouteContext.prototype.exitRule = function(listener) {
    if(listener instanceof IndexGrammarListener ) {
        listener.exitUseroute(this);
	}
};




IndexGrammarParser.UserouteContext = UserouteContext;

IndexGrammarParser.prototype.useroute = function() {

    var localctx = new UserouteContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, IndexGrammarParser.RULE_useroute);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        this.match(IndexGrammarParser.IDENT);
        this.state = 76;
        this.match(IndexGrammarParser.DOT);
        this.state = 77;
        this.match(IndexGrammarParser.USE);
        this.state = 78;
        this.match(IndexGrammarParser.T__0);
        this.state = 79;
        this.match(IndexGrammarParser.PATH);
        this.state = 83;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IndexGrammarParser.WHITESPACE) {
            this.state = 80;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 85;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 86;
        this.match(IndexGrammarParser.COMMA);
        this.state = 90;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IndexGrammarParser.WHITESPACE) {
            this.state = 87;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 92;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 93;
        this.match(IndexGrammarParser.IDENT);
        this.state = 94;
        this.match(IndexGrammarParser.T__1);
        this.state = 95;
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
