// Generated from RouterGrammar.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RouterGrammarListener = require('./RouterGrammarListener').RouterGrammarListener;
var RouterGrammarVisitor = require('./RouterGrammarVisitor').RouterGrammarVisitor;

var grammarFileName = "RouterGrammar.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003)f\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0006\u0002\u0016\n\u0002\r",
    "\u0002\u000e\u0002\u0017\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003\u001f\n\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0005\u00061\n\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0006",
    "\u0007A\n\u0007\r\u0007\u000e\u0007B\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0005\bM\n\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0007\na",
    "\n\n\f\n\u000e\nd\u000b\n\u0003\n\u0002\u0002\u000b\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0002\u0005\u0004\u0002\u0011\u0011!!\u0005",
    "\u0002\r\r\u0011\u0011!!\u0003\u0002\u001a\u001e\u0002f\u0002\u0015",
    "\u0003\u0002\u0002\u0002\u0004\u001e\u0003\u0002\u0002\u0002\u0006 ",
    "\u0003\u0002\u0002\u0002\b(\u0003\u0002\u0002\u0002\n0\u0003\u0002\u0002",
    "\u0002\f:\u0003\u0002\u0002\u0002\u000eL\u0003\u0002\u0002\u0002\u0010",
    "[\u0003\u0002\u0002\u0002\u0012b\u0003\u0002\u0002\u0002\u0014\u0016",
    "\u0005\u0004\u0003\u0002\u0015\u0014\u0003\u0002\u0002\u0002\u0016\u0017",
    "\u0003\u0002\u0002\u0002\u0017\u0015\u0003\u0002\u0002\u0002\u0017\u0018",
    "\u0003\u0002\u0002\u0002\u0018\u0003\u0003\u0002\u0002\u0002\u0019\u001f",
    "\u0005\u0006\u0004\u0002\u001a\u001f\u0005\b\u0005\u0002\u001b\u001f",
    "\u0005\n\u0006\u0002\u001c\u001f\u0005\u000e\b\u0002\u001d\u001f\u0005",
    "\f\u0007\u0002\u001e\u0019\u0003\u0002\u0002\u0002\u001e\u001a\u0003",
    "\u0002\u0002\u0002\u001e\u001b\u0003\u0002\u0002\u0002\u001e\u001c\u0003",
    "\u0002\u0002\u0002\u001e\u001d\u0003\u0002\u0002\u0002\u001f\u0005\u0003",
    "\u0002\u0002\u0002 !\u0007\u0010\u0002\u0002!\"\u0007\u0015\u0002\u0002",
    "\"#\u0007\u0012\u0002\u0002#$\t\u0002\u0002\u0002$%\u0007\u0019\u0002",
    "\u0002%&\u0007%\u0002\u0002&\'\u0007\u0006\u0002\u0002\'\u0007\u0003",
    "\u0002\u0002\u0002()\u0007\u0010\u0002\u0002)*\u0007\'\u0002\u0002*",
    "+\u0007\u0006\u0002\u0002+\t\u0003\u0002\u0002\u0002,1\u0007!\u0002",
    "\u0002-.\u0007\u0013\u0002\u0002./\u0007\r\u0002\u0002/1\u0007!\u0002",
    "\u00020,\u0003\u0002\u0002\u00020-\u0003\u0002\u0002\u000212\u0003\u0002",
    "\u0002\u000223\u0007\f\u0002\u000234\t\u0002\u0002\u000245\u0007\r\u0002",
    "\u000256\u0007\u001f\u0002\u000267\u0007\u0017\u0002\u000278\u0007\u0018",
    "\u0002\u000289\u0007\u0006\u0002\u00029\u000b\u0003\u0002\u0002\u0002",
    ":;\u0007!\u0002\u0002;<\u0007\f\u0002\u0002<=\u0007\u0017\u0002\u0002",
    "=>\u0007\u0018\u0002\u0002>@\u0007\u0003\u0002\u0002?A\t\u0003\u0002",
    "\u0002@?\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002B@\u0003\u0002",
    "\u0002\u0002BC\u0003\u0002\u0002\u0002CD\u0003\u0002\u0002\u0002DE\u0007",
    "&\u0002\u0002EF\u0007\'\u0002\u0002FG\u0007\u0005\u0002\u0002G\r\u0003",
    "\u0002\u0002\u0002HM\u0007!\u0002\u0002IJ\u0007\u0013\u0002\u0002JK",
    "\u0007\r\u0002\u0002KM\u0007!\u0002\u0002LH\u0003\u0002\u0002\u0002",
    "LI\u0003\u0002\u0002\u0002MN\u0003\u0002\u0002\u0002NO\u0007\r\u0002",
    "\u0002OP\u0005\u0010\t\u0002PQ\u0007\u0017\u0002\u0002QR\u0007$\u0002",
    "\u0002RS\u0007#\u0002\u0002ST\u0007$\u0002\u0002TU\u0007\b\u0002\u0002",
    "UV\u0007\u0017\u0002\u0002VW\u0005\u0012\n\u0002WX\u0007\u0018\u0002",
    "\u0002XY\u0007&\u0002\u0002YZ\u0007\'\u0002\u0002Z\u000f\u0003\u0002",
    "\u0002\u0002[\\\t\u0004\u0002\u0002\\\u0011\u0003\u0002\u0002\u0002",
    "]a\u0007!\u0002\u0002^_\u0007!\u0002\u0002_a\u0007\b\u0002\u0002`]\u0003",
    "\u0002\u0002\u0002`^\u0003\u0002\u0002\u0002ad\u0003\u0002\u0002\u0002",
    "b`\u0003\u0002\u0002\u0002bc\u0003\u0002\u0002\u0002c\u0013\u0003\u0002",
    "\u0002\u0002db\u0003\u0002\u0002\u0002\t\u0017\u001e0BL`b"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "':'", null, null, null, "';'", "','", "'const'", 
                     "'let'", "'var'", "'='", "'.'", "'use'", "'require'", 
                     "'import'", "'express'", "'as'", "'this'", null, "'*'", 
                     null, "'('", "')'", "'from'", "'get'", "'post'", "'put'", 
                     "'patch'", "'delete'", "'Router'", null, null, null, 
                     null, null, null, "'=>'", "'{'", "'}'" ];

var symbolicNames = [ null, null, "WHITESPACE", "NEWLINE", "END_STATEMENT", 
                      "SEMICOLON", "COMMA", "CONST", "LET", "VAR", "EQUAL", 
                      "DOT", "USE", "REQUIRE", "IMPORT", "EXPRESS", "AS", 
                      "THIS", "LINE_COMMENT", "ASTERISK", "PROPERTY", "LPAREN", 
                      "RPAREN", "FROM", "GET", "POST", "PUT", "PATCH", "DELETE", 
                      "ROUTER", "NUMBER", "IDENT", "URLARG", "URLPATH", 
                      "QUOTE", "MODULE", "ARROW", "LBRACKET", "RBRACKET", 
                      "ANY" ];

var ruleNames =  [ "routerfile", "routerline", "import_", "ignored_import", 
                   "instance", "function", "route", "httpmethod", "args" ];

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
RouterGrammarParser.PATCH = 27;
RouterGrammarParser.DELETE = 28;
RouterGrammarParser.ROUTER = 29;
RouterGrammarParser.NUMBER = 30;
RouterGrammarParser.IDENT = 31;
RouterGrammarParser.URLARG = 32;
RouterGrammarParser.URLPATH = 33;
RouterGrammarParser.QUOTE = 34;
RouterGrammarParser.MODULE = 35;
RouterGrammarParser.ARROW = 36;
RouterGrammarParser.LBRACKET = 37;
RouterGrammarParser.RBRACKET = 38;
RouterGrammarParser.ANY = 39;

RouterGrammarParser.RULE_routerfile = 0;
RouterGrammarParser.RULE_routerline = 1;
RouterGrammarParser.RULE_import_ = 2;
RouterGrammarParser.RULE_ignored_import = 3;
RouterGrammarParser.RULE_instance = 4;
RouterGrammarParser.RULE_function = 5;
RouterGrammarParser.RULE_route = 6;
RouterGrammarParser.RULE_httpmethod = 7;
RouterGrammarParser.RULE_args = 8;


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
        this.state = 19; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 18;
            this.routerline();
            this.state = 21; 
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

RouterlineContext.prototype.ignored_import = function() {
    return this.getTypedRuleContext(Ignored_importContext,0);
};

RouterlineContext.prototype.instance = function() {
    return this.getTypedRuleContext(InstanceContext,0);
};

RouterlineContext.prototype.route = function() {
    return this.getTypedRuleContext(RouteContext,0);
};

RouterlineContext.prototype.function = function() {
    return this.getTypedRuleContext(FunctionContext,0);
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
        this.state = 28;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.state = 23;
            this.import_();
            break;

        case 2:
            this.state = 24;
            this.ignored_import();
            break;

        case 3:
            this.state = 25;
            this.instance();
            break;

        case 4:
            this.state = 26;
            this.route();
            break;

        case 5:
            this.state = 27;
            this.function();
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
        this.state = 30;
        this.match(RouterGrammarParser.IMPORT);
        this.state = 31;
        this.match(RouterGrammarParser.ASTERISK);
        this.state = 32;
        this.match(RouterGrammarParser.AS);
        this.state = 33;
        _la = this._input.LA(1);
        if(!(_la===RouterGrammarParser.EXPRESS || _la===RouterGrammarParser.IDENT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 34;
        this.match(RouterGrammarParser.FROM);
        this.state = 35;
        this.match(RouterGrammarParser.MODULE);
        this.state = 36;
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


function Ignored_importContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RouterGrammarParser.RULE_ignored_import;
    return this;
}

Ignored_importContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ignored_importContext.prototype.constructor = Ignored_importContext;

Ignored_importContext.prototype.IMPORT = function() {
    return this.getToken(RouterGrammarParser.IMPORT, 0);
};

Ignored_importContext.prototype.LBRACKET = function() {
    return this.getToken(RouterGrammarParser.LBRACKET, 0);
};

Ignored_importContext.prototype.END_STATEMENT = function() {
    return this.getToken(RouterGrammarParser.END_STATEMENT, 0);
};

Ignored_importContext.prototype.enterRule = function(listener) {
    if(listener instanceof RouterGrammarListener ) {
        listener.enterIgnored_import(this);
	}
};

Ignored_importContext.prototype.exitRule = function(listener) {
    if(listener instanceof RouterGrammarListener ) {
        listener.exitIgnored_import(this);
	}
};

Ignored_importContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RouterGrammarVisitor ) {
        return visitor.visitIgnored_import(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RouterGrammarParser.Ignored_importContext = Ignored_importContext;

RouterGrammarParser.prototype.ignored_import = function() {

    var localctx = new Ignored_importContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, RouterGrammarParser.RULE_ignored_import);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 38;
        this.match(RouterGrammarParser.IMPORT);
        this.state = 39;
        this.match(RouterGrammarParser.LBRACKET);
        this.state = 40;
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


InstanceContext.prototype.ROUTER = function() {
    return this.getToken(RouterGrammarParser.ROUTER, 0);
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
    this.enterRule(localctx, 8, RouterGrammarParser.RULE_instance);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RouterGrammarParser.IDENT:
            this.state = 42;
            this.match(RouterGrammarParser.IDENT);
            break;
        case RouterGrammarParser.THIS:
            this.state = 43;
            this.match(RouterGrammarParser.THIS);
            this.state = 44;
            this.match(RouterGrammarParser.DOT);
            this.state = 45;
            this.match(RouterGrammarParser.IDENT);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 48;
        this.match(RouterGrammarParser.EQUAL);
        this.state = 49;
        _la = this._input.LA(1);
        if(!(_la===RouterGrammarParser.EXPRESS || _la===RouterGrammarParser.IDENT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 50;
        this.match(RouterGrammarParser.DOT);
        this.state = 51;
        this.match(RouterGrammarParser.ROUTER);
        this.state = 52;
        this.match(RouterGrammarParser.LPAREN);
        this.state = 53;
        this.match(RouterGrammarParser.RPAREN);
        this.state = 54;
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


function FunctionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RouterGrammarParser.RULE_function;
    return this;
}

FunctionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionContext.prototype.constructor = FunctionContext;

FunctionContext.prototype.IDENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RouterGrammarParser.IDENT);
    } else {
        return this.getToken(RouterGrammarParser.IDENT, i);
    }
};


FunctionContext.prototype.EQUAL = function() {
    return this.getToken(RouterGrammarParser.EQUAL, 0);
};

FunctionContext.prototype.LPAREN = function() {
    return this.getToken(RouterGrammarParser.LPAREN, 0);
};

FunctionContext.prototype.RPAREN = function() {
    return this.getToken(RouterGrammarParser.RPAREN, 0);
};

FunctionContext.prototype.ARROW = function() {
    return this.getToken(RouterGrammarParser.ARROW, 0);
};

FunctionContext.prototype.LBRACKET = function() {
    return this.getToken(RouterGrammarParser.LBRACKET, 0);
};

FunctionContext.prototype.NEWLINE = function() {
    return this.getToken(RouterGrammarParser.NEWLINE, 0);
};

FunctionContext.prototype.EXPRESS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RouterGrammarParser.EXPRESS);
    } else {
        return this.getToken(RouterGrammarParser.EXPRESS, i);
    }
};


FunctionContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RouterGrammarParser.DOT);
    } else {
        return this.getToken(RouterGrammarParser.DOT, i);
    }
};


FunctionContext.prototype.enterRule = function(listener) {
    if(listener instanceof RouterGrammarListener ) {
        listener.enterFunction(this);
	}
};

FunctionContext.prototype.exitRule = function(listener) {
    if(listener instanceof RouterGrammarListener ) {
        listener.exitFunction(this);
	}
};

FunctionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RouterGrammarVisitor ) {
        return visitor.visitFunction(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RouterGrammarParser.FunctionContext = FunctionContext;

RouterGrammarParser.prototype.function = function() {

    var localctx = new FunctionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, RouterGrammarParser.RULE_function);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 56;
        this.match(RouterGrammarParser.IDENT);
        this.state = 57;
        this.match(RouterGrammarParser.EQUAL);
        this.state = 58;
        this.match(RouterGrammarParser.LPAREN);
        this.state = 59;
        this.match(RouterGrammarParser.RPAREN);
        this.state = 60;
        this.match(RouterGrammarParser.T__0);
        this.state = 62; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 61;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RouterGrammarParser.DOT) | (1 << RouterGrammarParser.EXPRESS) | (1 << RouterGrammarParser.IDENT))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 64; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RouterGrammarParser.DOT) | (1 << RouterGrammarParser.EXPRESS) | (1 << RouterGrammarParser.IDENT))) !== 0));
        this.state = 66;
        this.match(RouterGrammarParser.ARROW);
        this.state = 67;
        this.match(RouterGrammarParser.LBRACKET);
        this.state = 68;
        this.match(RouterGrammarParser.NEWLINE);
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
    this.enterRule(localctx, 12, RouterGrammarParser.RULE_route);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RouterGrammarParser.IDENT:
            this.state = 70;
            this.match(RouterGrammarParser.IDENT);
            break;
        case RouterGrammarParser.THIS:
            this.state = 71;
            this.match(RouterGrammarParser.THIS);
            this.state = 72;
            this.match(RouterGrammarParser.DOT);
            this.state = 73;
            this.match(RouterGrammarParser.IDENT);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 76;
        this.match(RouterGrammarParser.DOT);
        this.state = 77;
        this.httpmethod();
        this.state = 78;
        this.match(RouterGrammarParser.LPAREN);
        this.state = 79;
        this.match(RouterGrammarParser.QUOTE);
        this.state = 80;
        this.match(RouterGrammarParser.URLPATH);
        this.state = 81;
        this.match(RouterGrammarParser.QUOTE);
        this.state = 82;
        this.match(RouterGrammarParser.COMMA);
        this.state = 83;
        this.match(RouterGrammarParser.LPAREN);
        this.state = 84;
        this.args();
        this.state = 85;
        this.match(RouterGrammarParser.RPAREN);
        this.state = 86;
        this.match(RouterGrammarParser.ARROW);
        this.state = 87;
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

HttpmethodContext.prototype.PATCH = function() {
    return this.getToken(RouterGrammarParser.PATCH, 0);
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
    this.enterRule(localctx, 14, RouterGrammarParser.RULE_httpmethod);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 89;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RouterGrammarParser.GET) | (1 << RouterGrammarParser.POST) | (1 << RouterGrammarParser.PUT) | (1 << RouterGrammarParser.PATCH) | (1 << RouterGrammarParser.DELETE))) !== 0))) {
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
    this.enterRule(localctx, 16, RouterGrammarParser.RULE_args);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 96;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RouterGrammarParser.IDENT) {
            this.state = 94;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
            switch(la_) {
            case 1:
                this.state = 91;
                this.match(RouterGrammarParser.IDENT);
                break;

            case 2:
                this.state = 92;
                this.match(RouterGrammarParser.IDENT);
                this.state = 93;
                this.match(RouterGrammarParser.COMMA);
                break;

            }
            this.state = 98;
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
