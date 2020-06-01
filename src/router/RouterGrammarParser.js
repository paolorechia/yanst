// Generated from RouterGrammar.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RouterGrammarListener = require('./RouterGrammarListener').RouterGrammarListener;
var RouterGrammarVisitor = require('./RouterGrammarVisitor').RouterGrammarVisitor;

var grammarFileName = "RouterGrammar.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001f*\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0003\u0002\u0006\u0002\f\n\u0002\r\u0002",
    "\u000e\u0002\r\u0003\u0003\u0003\u0003\u0005\u0003\u0012\n\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005",
    "\u0005 \n\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0002\u0002\u0006",
    "\u0002\u0004\u0006\b\u0002\u0003\u0004\u0002\u0011\u0011\u001b\u001b",
    "\u0002(\u0002\u000b\u0003\u0002\u0002\u0002\u0004\u0011\u0003\u0002",
    "\u0002\u0002\u0006\u0013\u0003\u0002\u0002\u0002\b\u001f\u0003\u0002",
    "\u0002\u0002\n\f\u0005\u0004\u0003\u0002\u000b\n\u0003\u0002\u0002\u0002",
    "\f\r\u0003\u0002\u0002\u0002\r\u000b\u0003\u0002\u0002\u0002\r\u000e",
    "\u0003\u0002\u0002\u0002\u000e\u0003\u0003\u0002\u0002\u0002\u000f\u0012",
    "\u0005\u0006\u0004\u0002\u0010\u0012\u0005\b\u0005\u0002\u0011\u000f",
    "\u0003\u0002\u0002\u0002\u0011\u0010\u0003\u0002\u0002\u0002\u0012\u0005",
    "\u0003\u0002\u0002\u0002\u0013\u0014\u0007\u0010\u0002\u0002\u0014\u0015",
    "\u0007\u0015\u0002\u0002\u0015\u0016\u0007\u0012\u0002\u0002\u0016\u0017",
    "\t\u0002\u0002\u0002\u0017\u0018\u0007\u0019\u0002\u0002\u0018\u0019",
    "\u0007\u001d\u0002\u0002\u0019\u001a\u0007\u0006\u0002\u0002\u001a\u0007",
    "\u0003\u0002\u0002\u0002\u001b \u0007\u001b\u0002\u0002\u001c\u001d",
    "\u0007\u0013\u0002\u0002\u001d\u001e\u0007\r\u0002\u0002\u001e \u0007",
    "\u001b\u0002\u0002\u001f\u001b\u0003\u0002\u0002\u0002\u001f\u001c\u0003",
    "\u0002\u0002\u0002 !\u0003\u0002\u0002\u0002!\"\u0007\f\u0002\u0002",
    "\"#\t\u0002\u0002\u0002#$\u0007\r\u0002\u0002$%\u0007\u0003\u0002\u0002",
    "%&\u0007\u0017\u0002\u0002&\'\u0007\u0018\u0002\u0002\'(\u0007\u0006",
    "\u0002\u0002(\t\u0003\u0002\u0002\u0002\u0005\r\u0011\u001f"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'Router'", null, null, null, "';'", "','", "'const'", 
                     "'let'", "'var'", "'='", "'.'", "'use'", "'require'", 
                     "'import'", "'express'", "'as'", "'this'", null, "'*'", 
                     null, "'('", "')'", "'from'" ];

var symbolicNames = [ null, null, "WHITESPACE", "NEWLINE", "END_STATEMENT", 
                      "SEMICOLON", "COMMA", "CONST", "LET", "VAR", "EQUAL", 
                      "DOT", "USE", "REQUIRE", "IMPORT", "EXPRESS", "AS", 
                      "THIS", "LINE_COMMENT", "ASTERISK", "PROPERTY", "LPAREN", 
                      "RPAREN", "FROM", "NUMBER", "IDENT", "PATH", "MODULE", 
                      "DONT_CARE_ARGS", "ANY" ];

var ruleNames =  [ "routerfile", "routerline", "import_", "instance" ];

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
RouterGrammarParser.T__0 = 1;
RouterGrammarParser.WHITESPACE = 2;
RouterGrammarParser.NEWLINE = 3;
RouterGrammarParser.END_STATEMENT = 4;
RouterGrammarParser.SEMICOLON = 5;
RouterGrammarParser.COMMA = 6;
RouterGrammarParser.CONST = 7;
RouterGrammarParser.LET = 8;
RouterGrammarParser.VAR = 9;
RouterGrammarParser.EQUAL = 10;
RouterGrammarParser.DOT = 11;
RouterGrammarParser.USE = 12;
RouterGrammarParser.REQUIRE = 13;
RouterGrammarParser.IMPORT = 14;
RouterGrammarParser.EXPRESS = 15;
RouterGrammarParser.AS = 16;
RouterGrammarParser.THIS = 17;
RouterGrammarParser.LINE_COMMENT = 18;
RouterGrammarParser.ASTERISK = 19;
RouterGrammarParser.PROPERTY = 20;
RouterGrammarParser.LPAREN = 21;
RouterGrammarParser.RPAREN = 22;
RouterGrammarParser.FROM = 23;
RouterGrammarParser.NUMBER = 24;
RouterGrammarParser.IDENT = 25;
RouterGrammarParser.PATH = 26;
RouterGrammarParser.MODULE = 27;
RouterGrammarParser.DONT_CARE_ARGS = 28;
RouterGrammarParser.ANY = 29;

RouterGrammarParser.RULE_routerfile = 0;
RouterGrammarParser.RULE_routerline = 1;
RouterGrammarParser.RULE_import_ = 2;
RouterGrammarParser.RULE_instance = 3;


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

RouterfileContext.prototype.routerline = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RouterlineContext);
    } else {
        return this.getTypedRuleContext(RouterlineContext,i);
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
        this.state = 9; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 8;
            this.routerline();
            this.state = 11; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RouterGrammarParser.IMPORT) | (1 << RouterGrammarParser.THIS) | (1 << RouterGrammarParser.IDENT))) !== 0));
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


function RouterlineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RouterGrammarParser.RULE_routerline;
    return this;
}

RouterlineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RouterlineContext.prototype.constructor = RouterlineContext;

RouterlineContext.prototype.import_ = function() {
    return this.getTypedRuleContext(Import_Context,0);
};

RouterlineContext.prototype.instance = function() {
    return this.getTypedRuleContext(InstanceContext,0);
};

RouterlineContext.prototype.enterRule = function(listener) {
    if(listener instanceof RouterGrammarListener ) {
        listener.enterRouterline(this);
	}
};

RouterlineContext.prototype.exitRule = function(listener) {
    if(listener instanceof RouterGrammarListener ) {
        listener.exitRouterline(this);
	}
};

RouterlineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RouterGrammarVisitor ) {
        return visitor.visitRouterline(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RouterGrammarParser.RouterlineContext = RouterlineContext;

RouterGrammarParser.prototype.routerline = function() {

    var localctx = new RouterlineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, RouterGrammarParser.RULE_routerline);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 15;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RouterGrammarParser.IMPORT:
            this.state = 13;
            this.import_();
            break;
        case RouterGrammarParser.THIS:
        case RouterGrammarParser.IDENT:
            this.state = 14;
            this.instance();
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
        this.state = 17;
        this.match(RouterGrammarParser.IMPORT);
        this.state = 18;
        this.match(RouterGrammarParser.ASTERISK);
        this.state = 19;
        this.match(RouterGrammarParser.AS);
        this.state = 20;
        _la = this._input.LA(1);
        if(!(_la===RouterGrammarParser.EXPRESS || _la===RouterGrammarParser.IDENT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 21;
        this.match(RouterGrammarParser.FROM);
        this.state = 22;
        this.match(RouterGrammarParser.MODULE);
        this.state = 23;
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


function InstanceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RouterGrammarParser.RULE_instance;
    return this;
}

InstanceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InstanceContext.prototype.constructor = InstanceContext;

InstanceContext.prototype.EQUAL = function() {
    return this.getToken(RouterGrammarParser.EQUAL, 0);
};

InstanceContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RouterGrammarParser.DOT);
    } else {
        return this.getToken(RouterGrammarParser.DOT, i);
    }
};


InstanceContext.prototype.LPAREN = function() {
    return this.getToken(RouterGrammarParser.LPAREN, 0);
};

InstanceContext.prototype.RPAREN = function() {
    return this.getToken(RouterGrammarParser.RPAREN, 0);
};

InstanceContext.prototype.END_STATEMENT = function() {
    return this.getToken(RouterGrammarParser.END_STATEMENT, 0);
};

InstanceContext.prototype.IDENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RouterGrammarParser.IDENT);
    } else {
        return this.getToken(RouterGrammarParser.IDENT, i);
    }
};


InstanceContext.prototype.EXPRESS = function() {
    return this.getToken(RouterGrammarParser.EXPRESS, 0);
};

InstanceContext.prototype.THIS = function() {
    return this.getToken(RouterGrammarParser.THIS, 0);
};

InstanceContext.prototype.enterRule = function(listener) {
    if(listener instanceof RouterGrammarListener ) {
        listener.enterInstance(this);
	}
};

InstanceContext.prototype.exitRule = function(listener) {
    if(listener instanceof RouterGrammarListener ) {
        listener.exitInstance(this);
	}
};

InstanceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RouterGrammarVisitor ) {
        return visitor.visitInstance(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RouterGrammarParser.InstanceContext = InstanceContext;

RouterGrammarParser.prototype.instance = function() {

    var localctx = new InstanceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, RouterGrammarParser.RULE_instance);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 29;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RouterGrammarParser.IDENT:
            this.state = 25;
            this.match(RouterGrammarParser.IDENT);
            break;
        case RouterGrammarParser.THIS:
            this.state = 26;
            this.match(RouterGrammarParser.THIS);
            this.state = 27;
            this.match(RouterGrammarParser.DOT);
            this.state = 28;
            this.match(RouterGrammarParser.IDENT);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 31;
        this.match(RouterGrammarParser.EQUAL);
        this.state = 32;
        _la = this._input.LA(1);
        if(!(_la===RouterGrammarParser.EXPRESS || _la===RouterGrammarParser.IDENT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 33;
        this.match(RouterGrammarParser.DOT);
        this.state = 34;
        this.match(RouterGrammarParser.T__0);
        this.state = 35;
        this.match(RouterGrammarParser.LPAREN);
        this.state = 36;
        this.match(RouterGrammarParser.RPAREN);
        this.state = 37;
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
