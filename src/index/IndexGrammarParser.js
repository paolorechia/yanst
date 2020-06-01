// Generated from IndexGrammar.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var IndexGrammarListener = require('./IndexGrammarListener').IndexGrammarListener;
var grammarFileName = "IndexGrammar.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0010=\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0006\u0003\u000b\n\u0003\r\u0003\u000e",
    "\u0003\f\u0003\u0003\u0003\u0003\u0007\u0003\u0011\n\u0003\f\u0003\u000e",
    "\u0003\u0014\u000b\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u0018\n",
    "\u0003\f\u0003\u000e\u0003\u001b\u000b\u0003\u0003\u0003\u0003\u0003",
    "\u0007\u0003\u001f\n\u0003\f\u0003\u000e\u0003\"\u000b\u0003\u0003\u0003",
    "\u0003\u0003\u0007\u0003&\n\u0003\f\u0003\u000e\u0003)\u000b\u0003\u0003",
    "\u0003\u0003\u0003\u0007\u0003-\n\u0003\f\u0003\u000e\u00030\u000b\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u00035\n\u0003\f\u0003\u000e",
    "\u00038\u000b\u0003\u0003\u0003\u0005\u0003;\n\u0003\u0003\u0003\u0002",
    "\u0002\u0004\u0002\u0004\u0002\u0003\u0003\u0002\b\n\u0002B\u0002\u0006",
    "\u0003\u0002\u0002\u0002\u0004\b\u0003\u0002\u0002\u0002\u0006\u0007",
    "\u0005\u0004\u0003\u0002\u0007\u0003\u0003\u0002\u0002\u0002\b\n\t\u0002",
    "\u0002\u0002\t\u000b\u0007\u0005\u0002\u0002\n\t\u0003\u0002\u0002\u0002",
    "\u000b\f\u0003\u0002\u0002\u0002\f\n\u0003\u0002\u0002\u0002\f\r\u0003",
    "\u0002\u0002\u0002\r\u000e\u0003\u0002\u0002\u0002\u000e\u0012\u0007",
    "\u0010\u0002\u0002\u000f\u0011\u0007\u0005\u0002\u0002\u0010\u000f\u0003",
    "\u0002\u0002\u0002\u0011\u0014\u0003\u0002\u0002\u0002\u0012\u0010\u0003",
    "\u0002\u0002\u0002\u0012\u0013\u0003\u0002\u0002\u0002\u0013\u0015\u0003",
    "\u0002\u0002\u0002\u0014\u0012\u0003\u0002\u0002\u0002\u0015\u0019\u0007",
    "\u000b\u0002\u0002\u0016\u0018\u0007\u0005\u0002\u0002\u0017\u0016\u0003",
    "\u0002\u0002\u0002\u0018\u001b\u0003\u0002\u0002\u0002\u0019\u0017\u0003",
    "\u0002\u0002\u0002\u0019\u001a\u0003\u0002\u0002\u0002\u001a\u001c\u0003",
    "\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001c \u0007",
    "\u000e\u0002\u0002\u001d\u001f\u0007\u0005\u0002\u0002\u001e\u001d\u0003",
    "\u0002\u0002\u0002\u001f\"\u0003\u0002\u0002\u0002 \u001e\u0003\u0002",
    "\u0002\u0002 !\u0003\u0002\u0002\u0002!#\u0003\u0002\u0002\u0002\" ",
    "\u0003\u0002\u0002\u0002#\'\u0007\u0003\u0002\u0002$&\u0007\u0005\u0002",
    "\u0002%$\u0003\u0002\u0002\u0002&)\u0003\u0002\u0002\u0002\'%\u0003",
    "\u0002\u0002\u0002\'(\u0003\u0002\u0002\u0002(*\u0003\u0002\u0002\u0002",
    ")\'\u0003\u0002\u0002\u0002*.\u0007\u0004\u0002\u0002+-\u0007\u0005",
    "\u0002\u0002,+\u0003\u0002\u0002\u0002-0\u0003\u0002\u0002\u0002.,\u0003",
    "\u0002\u0002\u0002./\u0003\u0002\u0002\u0002/:\u0003\u0002\u0002\u0002",
    "0.\u0003\u0002\u0002\u00021;\u0007\u0006\u0002\u000226\u0007\u0007\u0002",
    "\u000235\u0007\u0005\u0002\u000243\u0003\u0002\u0002\u000258\u0003\u0002",
    "\u0002\u000264\u0003\u0002\u0002\u000267\u0003\u0002\u0002\u000279\u0003",
    "\u0002\u0002\u000286\u0003\u0002\u0002\u00029;\u0007\u0006\u0002\u0002",
    ":1\u0003\u0002\u0002\u0002:2\u0003\u0002\u0002\u0002;\u0005\u0003\u0002",
    "\u0002\u0002\n\f\u0012\u0019 \'.6:"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", null, null, "';'", "'const'", "'let'", 
                     "'var'", "'='", "'require'", "'import'", "'express'" ];

var symbolicNames = [ null, null, null, "WHITESPACE", "NEWLINE", "SEMICOLON", 
                      "CONST", "LET", "VAR", "EQUAL", "REQUIRE", "IMPORT", 
                      "EXPRESS", "NUMBER", "IDENT" ];

var ruleNames =  [ "index_file", "express" ];

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
IndexGrammarParser.SEMICOLON = 5;
IndexGrammarParser.CONST = 6;
IndexGrammarParser.LET = 7;
IndexGrammarParser.VAR = 8;
IndexGrammarParser.EQUAL = 9;
IndexGrammarParser.REQUIRE = 10;
IndexGrammarParser.IMPORT = 11;
IndexGrammarParser.EXPRESS = 12;
IndexGrammarParser.NUMBER = 13;
IndexGrammarParser.IDENT = 14;

IndexGrammarParser.RULE_index_file = 0;
IndexGrammarParser.RULE_express = 1;


function Index_fileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IndexGrammarParser.RULE_index_file;
    return this;
}

Index_fileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Index_fileContext.prototype.constructor = Index_fileContext;

Index_fileContext.prototype.express = function() {
    return this.getTypedRuleContext(ExpressContext,0);
};

Index_fileContext.prototype.enterRule = function(listener) {
    if(listener instanceof IndexGrammarListener ) {
        listener.enterIndex_file(this);
	}
};

Index_fileContext.prototype.exitRule = function(listener) {
    if(listener instanceof IndexGrammarListener ) {
        listener.exitIndex_file(this);
	}
};




IndexGrammarParser.Index_fileContext = Index_fileContext;

IndexGrammarParser.prototype.index_file = function() {

    var localctx = new Index_fileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, IndexGrammarParser.RULE_index_file);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 4;
        this.express();
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

ExpressContext.prototype.CONST = function() {
    return this.getToken(IndexGrammarParser.CONST, 0);
};

ExpressContext.prototype.VAR = function() {
    return this.getToken(IndexGrammarParser.VAR, 0);
};

ExpressContext.prototype.LET = function() {
    return this.getToken(IndexGrammarParser.LET, 0);
};

ExpressContext.prototype.NEWLINE = function() {
    return this.getToken(IndexGrammarParser.NEWLINE, 0);
};

ExpressContext.prototype.SEMICOLON = function() {
    return this.getToken(IndexGrammarParser.SEMICOLON, 0);
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
        this.state = 6;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IndexGrammarParser.CONST) | (1 << IndexGrammarParser.LET) | (1 << IndexGrammarParser.VAR))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 8; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 7;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 10; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===IndexGrammarParser.WHITESPACE);
        this.state = 12;
        this.match(IndexGrammarParser.IDENT);
        this.state = 16;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IndexGrammarParser.WHITESPACE) {
            this.state = 13;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 18;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 19;
        this.match(IndexGrammarParser.EQUAL);
        this.state = 23;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IndexGrammarParser.WHITESPACE) {
            this.state = 20;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 25;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 26;
        this.match(IndexGrammarParser.EXPRESS);
        this.state = 30;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IndexGrammarParser.WHITESPACE) {
            this.state = 27;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 32;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 33;
        this.match(IndexGrammarParser.T__0);
        this.state = 37;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IndexGrammarParser.WHITESPACE) {
            this.state = 34;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 39;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 40;
        this.match(IndexGrammarParser.T__1);
        this.state = 44;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IndexGrammarParser.WHITESPACE) {
            this.state = 41;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 46;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 56;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case IndexGrammarParser.NEWLINE:
            this.state = 47;
            this.match(IndexGrammarParser.NEWLINE);
            break;
        case IndexGrammarParser.SEMICOLON:
            this.state = 48;
            this.match(IndexGrammarParser.SEMICOLON);
            this.state = 52;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===IndexGrammarParser.WHITESPACE) {
                this.state = 49;
                this.match(IndexGrammarParser.WHITESPACE);
                this.state = 54;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 55;
            this.match(IndexGrammarParser.NEWLINE);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
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
