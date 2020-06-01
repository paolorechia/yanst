// Generated from RouterGrammar.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RouterGrammarListener = require('./RouterGrammarListener').RouterGrammarListener;
var RouterGrammarVisitor = require('./RouterGrammarVisitor').RouterGrammarVisitor;

var grammarFileName = "RouterGrammar.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003%N\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0003\u0002\u0006\u0002\u0012\n\u0002\r\u0002\u000e\u0002\u0013",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0019\n\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005",
    "\u0005\'\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0005\u00065\n\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\b\u0007\bI\n\b\f\b\u000e\bL\u000b\b\u0003",
    "\b\u0002\u0002\t\u0002\u0004\u0006\b\n\f\u000e\u0002\u0004\u0004\u0002",
    "\u0011\u0011\u001f\u001f\u0003\u0002\u001a\u001d\u0002M\u0002\u0011",
    "\u0003\u0002\u0002\u0002\u0004\u0018\u0003\u0002\u0002\u0002\u0006\u001a",
    "\u0003\u0002\u0002\u0002\b&\u0003\u0002\u0002\u0002\n4\u0003\u0002\u0002",
    "\u0002\fC\u0003\u0002\u0002\u0002\u000eJ\u0003\u0002\u0002\u0002\u0010",
    "\u0012\u0005\u0004\u0003\u0002\u0011\u0010\u0003\u0002\u0002\u0002\u0012",
    "\u0013\u0003\u0002\u0002\u0002\u0013\u0011\u0003\u0002\u0002\u0002\u0013",
    "\u0014\u0003\u0002\u0002\u0002\u0014\u0003\u0003\u0002\u0002\u0002\u0015",
    "\u0019\u0005\u0006\u0004\u0002\u0016\u0019\u0005\b\u0005\u0002\u0017",
    "\u0019\u0005\n\u0006\u0002\u0018\u0015\u0003\u0002\u0002\u0002\u0018",
    "\u0016\u0003\u0002\u0002\u0002\u0018\u0017\u0003\u0002\u0002\u0002\u0019",
    "\u0005\u0003\u0002\u0002\u0002\u001a\u001b\u0007\u0010\u0002\u0002\u001b",
    "\u001c\u0007\u0015\u0002\u0002\u001c\u001d\u0007\u0012\u0002\u0002\u001d",
    "\u001e\t\u0002\u0002\u0002\u001e\u001f\u0007\u0019\u0002\u0002\u001f",
    " \u0007\"\u0002\u0002 !\u0007\u0006\u0002\u0002!\u0007\u0003\u0002\u0002",
    "\u0002\"\'\u0007\u001f\u0002\u0002#$\u0007\u0013\u0002\u0002$%\u0007",
    "\r\u0002\u0002%\'\u0007\u001f\u0002\u0002&\"\u0003\u0002\u0002\u0002",
    "&#\u0003\u0002\u0002\u0002\'(\u0003\u0002\u0002\u0002()\u0007\f\u0002",
    "\u0002)*\t\u0002\u0002\u0002*+\u0007\r\u0002\u0002+,\u0007\u0003\u0002",
    "\u0002,-\u0007\u0017\u0002\u0002-.\u0007\u0018\u0002\u0002./\u0007\u0006",
    "\u0002\u0002/\t\u0003\u0002\u0002\u000205\u0007\u001f\u0002\u000212",
    "\u0007\u0013\u0002\u000223\u0007\r\u0002\u000235\u0007\u001f\u0002\u0002",
    "40\u0003\u0002\u0002\u000241\u0003\u0002\u0002\u000256\u0003\u0002\u0002",
    "\u000267\u0007\r\u0002\u000278\u0005\f\u0007\u000289\u0007\u0017\u0002",
    "\u00029:\u0007!\u0002\u0002:;\u0007 \u0002\u0002;<\u0007!\u0002\u0002",
    "<=\u0007\b\u0002\u0002=>\u0007\u0017\u0002\u0002>?\u0005\u000e\b\u0002",
    "?@\u0007\u0018\u0002\u0002@A\u0007#\u0002\u0002AB\u0007$\u0002\u0002",
    "B\u000b\u0003\u0002\u0002\u0002CD\t\u0003\u0002\u0002D\r\u0003\u0002",
    "\u0002\u0002EI\u0007\u001f\u0002\u0002FG\u0007\u001f\u0002\u0002GI\u0007",
    "\b\u0002\u0002HE\u0003\u0002\u0002\u0002HF\u0003\u0002\u0002\u0002I",
    "L\u0003\u0002\u0002\u0002JH\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002",
    "\u0002K\u000f\u0003\u0002\u0002\u0002LJ\u0003\u0002\u0002\u0002\b\u0013",
    "\u0018&4HJ"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'Router'", null, null, null, "';'", "','", "'const'", 
                     "'let'", "'var'", "'='", "'.'", "'use'", "'require'", 
                     "'import'", "'express'", "'as'", "'this'", null, "'*'", 
                     null, "'('", "')'", "'from'", "'get'", "'post'", "'put'", 
                     "'delete'", null, null, null, null, null, "'=>'", "'{'" ];

var symbolicNames = [ null, null, "WHITESPACE", "NEWLINE", "END_STATEMENT", 
                      "SEMICOLON", "COMMA", "CONST", "LET", "VAR", "EQUAL", 
                      "DOT", "USE", "REQUIRE", "IMPORT", "EXPRESS", "AS", 
                      "THIS", "LINE_COMMENT", "ASTERISK", "PROPERTY", "LPAREN", 
                      "RPAREN", "FROM", "GET", "POST", "PUT", "DELETE", 
                      "NUMBER", "IDENT", "URLPATH", "QUOTE", "MODULE", "ARROW", 
                      "LBRACKET", "ANY" ];

var ruleNames =  [ "routerfile", "routerline", "import_", "instance", "route", 
                   "httpmethod", "args" ];

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
RouterGrammarParser.GET = 24;
RouterGrammarParser.POST = 25;
RouterGrammarParser.PUT = 26;
RouterGrammarParser.DELETE = 27;
RouterGrammarParser.NUMBER = 28;
RouterGrammarParser.IDENT = 29;
RouterGrammarParser.URLPATH = 30;
RouterGrammarParser.QUOTE = 31;
RouterGrammarParser.MODULE = 32;
RouterGrammarParser.ARROW = 33;
RouterGrammarParser.LBRACKET = 34;
RouterGrammarParser.ANY = 35;

RouterGrammarParser.RULE_routerfile = 0;
RouterGrammarParser.RULE_routerline = 1;
RouterGrammarParser.RULE_import_ = 2;
RouterGrammarParser.RULE_instance = 3;
RouterGrammarParser.RULE_route = 4;
RouterGrammarParser.RULE_httpmethod = 5;
RouterGrammarParser.RULE_args = 6;


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
        this.state = 15; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 14;
            this.routerline();
            this.state = 17; 
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

RouterlineContext.prototype.route = function() {
    return this.getTypedRuleContext(RouteContext,0);
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
        this.state = 22;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.state = 19;
            this.import_();
            break;

        case 2:
            this.state = 20;
            this.instance();
            break;

        case 3:
            this.state = 21;
            this.route();
            break;

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
        this.state = 24;
        this.match(RouterGrammarParser.IMPORT);
        this.state = 25;
        this.match(RouterGrammarParser.ASTERISK);
        this.state = 26;
        this.match(RouterGrammarParser.AS);
        this.state = 27;
        _la = this._input.LA(1);
        if(!(_la===RouterGrammarParser.EXPRESS || _la===RouterGrammarParser.IDENT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 28;
        this.match(RouterGrammarParser.FROM);
        this.state = 29;
        this.match(RouterGrammarParser.MODULE);
        this.state = 30;
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
        this.state = 36;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RouterGrammarParser.IDENT:
            this.state = 32;
            this.match(RouterGrammarParser.IDENT);
            break;
        case RouterGrammarParser.THIS:
            this.state = 33;
            this.match(RouterGrammarParser.THIS);
            this.state = 34;
            this.match(RouterGrammarParser.DOT);
            this.state = 35;
            this.match(RouterGrammarParser.IDENT);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 38;
        this.match(RouterGrammarParser.EQUAL);
        this.state = 39;
        _la = this._input.LA(1);
        if(!(_la===RouterGrammarParser.EXPRESS || _la===RouterGrammarParser.IDENT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 40;
        this.match(RouterGrammarParser.DOT);
        this.state = 41;
        this.match(RouterGrammarParser.T__0);
        this.state = 42;
        this.match(RouterGrammarParser.LPAREN);
        this.state = 43;
        this.match(RouterGrammarParser.RPAREN);
        this.state = 44;
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


function RouteContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RouterGrammarParser.RULE_route;
    return this;
}

RouteContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RouteContext.prototype.constructor = RouteContext;

RouteContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RouterGrammarParser.DOT);
    } else {
        return this.getToken(RouterGrammarParser.DOT, i);
    }
};


RouteContext.prototype.httpmethod = function() {
    return this.getTypedRuleContext(HttpmethodContext,0);
};

RouteContext.prototype.LPAREN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RouterGrammarParser.LPAREN);
    } else {
        return this.getToken(RouterGrammarParser.LPAREN, i);
    }
};


RouteContext.prototype.QUOTE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RouterGrammarParser.QUOTE);
    } else {
        return this.getToken(RouterGrammarParser.QUOTE, i);
    }
};


RouteContext.prototype.URLPATH = function() {
    return this.getToken(RouterGrammarParser.URLPATH, 0);
};

RouteContext.prototype.COMMA = function() {
    return this.getToken(RouterGrammarParser.COMMA, 0);
};

RouteContext.prototype.args = function() {
    return this.getTypedRuleContext(ArgsContext,0);
};

RouteContext.prototype.RPAREN = function() {
    return this.getToken(RouterGrammarParser.RPAREN, 0);
};

RouteContext.prototype.ARROW = function() {
    return this.getToken(RouterGrammarParser.ARROW, 0);
};

RouteContext.prototype.LBRACKET = function() {
    return this.getToken(RouterGrammarParser.LBRACKET, 0);
};

RouteContext.prototype.IDENT = function() {
    return this.getToken(RouterGrammarParser.IDENT, 0);
};

RouteContext.prototype.THIS = function() {
    return this.getToken(RouterGrammarParser.THIS, 0);
};

RouteContext.prototype.enterRule = function(listener) {
    if(listener instanceof RouterGrammarListener ) {
        listener.enterRoute(this);
	}
};

RouteContext.prototype.exitRule = function(listener) {
    if(listener instanceof RouterGrammarListener ) {
        listener.exitRoute(this);
	}
};

RouteContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RouterGrammarVisitor ) {
        return visitor.visitRoute(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RouterGrammarParser.RouteContext = RouteContext;

RouterGrammarParser.prototype.route = function() {

    var localctx = new RouteContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, RouterGrammarParser.RULE_route);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RouterGrammarParser.IDENT:
            this.state = 46;
            this.match(RouterGrammarParser.IDENT);
            break;
        case RouterGrammarParser.THIS:
            this.state = 47;
            this.match(RouterGrammarParser.THIS);
            this.state = 48;
            this.match(RouterGrammarParser.DOT);
            this.state = 49;
            this.match(RouterGrammarParser.IDENT);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 52;
        this.match(RouterGrammarParser.DOT);
        this.state = 53;
        this.httpmethod();
        this.state = 54;
        this.match(RouterGrammarParser.LPAREN);
        this.state = 55;
        this.match(RouterGrammarParser.QUOTE);
        this.state = 56;
        this.match(RouterGrammarParser.URLPATH);
        this.state = 57;
        this.match(RouterGrammarParser.QUOTE);
        this.state = 58;
        this.match(RouterGrammarParser.COMMA);
        this.state = 59;
        this.match(RouterGrammarParser.LPAREN);
        this.state = 60;
        this.args();
        this.state = 61;
        this.match(RouterGrammarParser.RPAREN);
        this.state = 62;
        this.match(RouterGrammarParser.ARROW);
        this.state = 63;
        this.match(RouterGrammarParser.LBRACKET);
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


function HttpmethodContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RouterGrammarParser.RULE_httpmethod;
    return this;
}

HttpmethodContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HttpmethodContext.prototype.constructor = HttpmethodContext;

HttpmethodContext.prototype.GET = function() {
    return this.getToken(RouterGrammarParser.GET, 0);
};

HttpmethodContext.prototype.POST = function() {
    return this.getToken(RouterGrammarParser.POST, 0);
};

HttpmethodContext.prototype.PUT = function() {
    return this.getToken(RouterGrammarParser.PUT, 0);
};

HttpmethodContext.prototype.DELETE = function() {
    return this.getToken(RouterGrammarParser.DELETE, 0);
};

HttpmethodContext.prototype.enterRule = function(listener) {
    if(listener instanceof RouterGrammarListener ) {
        listener.enterHttpmethod(this);
	}
};

HttpmethodContext.prototype.exitRule = function(listener) {
    if(listener instanceof RouterGrammarListener ) {
        listener.exitHttpmethod(this);
	}
};

HttpmethodContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RouterGrammarVisitor ) {
        return visitor.visitHttpmethod(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RouterGrammarParser.HttpmethodContext = HttpmethodContext;

RouterGrammarParser.prototype.httpmethod = function() {

    var localctx = new HttpmethodContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, RouterGrammarParser.RULE_httpmethod);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 65;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RouterGrammarParser.GET) | (1 << RouterGrammarParser.POST) | (1 << RouterGrammarParser.PUT) | (1 << RouterGrammarParser.DELETE))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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


function ArgsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RouterGrammarParser.RULE_args;
    return this;
}

ArgsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgsContext.prototype.constructor = ArgsContext;

ArgsContext.prototype.IDENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RouterGrammarParser.IDENT);
    } else {
        return this.getToken(RouterGrammarParser.IDENT, i);
    }
};


ArgsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RouterGrammarParser.COMMA);
    } else {
        return this.getToken(RouterGrammarParser.COMMA, i);
    }
};


ArgsContext.prototype.enterRule = function(listener) {
    if(listener instanceof RouterGrammarListener ) {
        listener.enterArgs(this);
	}
};

ArgsContext.prototype.exitRule = function(listener) {
    if(listener instanceof RouterGrammarListener ) {
        listener.exitArgs(this);
	}
};

ArgsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RouterGrammarVisitor ) {
        return visitor.visitArgs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RouterGrammarParser.ArgsContext = ArgsContext;

RouterGrammarParser.prototype.args = function() {

    var localctx = new ArgsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, RouterGrammarParser.RULE_args);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 72;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RouterGrammarParser.IDENT) {
            this.state = 70;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
            switch(la_) {
            case 1:
                this.state = 67;
                this.match(RouterGrammarParser.IDENT);
                break;

            case 2:
                this.state = 68;
                this.match(RouterGrammarParser.IDENT);
                this.state = 69;
                this.match(RouterGrammarParser.COMMA);
                break;

            }
            this.state = 74;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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


exports.RouterGrammarParser = RouterGrammarParser;
