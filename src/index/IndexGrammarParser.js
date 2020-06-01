// Generated from IndexGrammar.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var IndexGrammarListener = require('./IndexGrammarListener').IndexGrammarListener;
var IndexGrammarVisitor = require('./IndexGrammarVisitor').IndexGrammarVisitor;

var grammarFileName = "IndexGrammar.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001b9\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0003",
    "\u0002\u0006\u0002\u0010\n\u0002\r\u0002\u000e\u0002\u0011\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0018\n\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0002\u0002\b\u0002\u0004\u0006\b\n\f\u0002\u0003",
    "\u0003\u0002\n\f\u00026\u0002\u000f\u0003\u0002\u0002\u0002\u0004\u0017",
    "\u0003\u0002\u0002\u0002\u0006\u0019\u0003\u0002\u0002\u0002\b!\u0003",
    "\u0002\u0002\u0002\n+\u0003\u0002\u0002\u0002\f5\u0003\u0002\u0002\u0002",
    "\u000e\u0010\u0005\u0004\u0003\u0002\u000f\u000e\u0003\u0002\u0002\u0002",
    "\u0010\u0011\u0003\u0002\u0002\u0002\u0011\u000f\u0003\u0002\u0002\u0002",
    "\u0011\u0012\u0003\u0002\u0002\u0002\u0012\u0003\u0003\u0002\u0002\u0002",
    "\u0013\u0018\u0005\u0006\u0004\u0002\u0014\u0018\u0005\b\u0005\u0002",
    "\u0015\u0018\u0005\n\u0006\u0002\u0016\u0018\u0005\f\u0007\u0002\u0017",
    "\u0013\u0003\u0002\u0002\u0002\u0017\u0014\u0003\u0002\u0002\u0002\u0017",
    "\u0015\u0003\u0002\u0002\u0002\u0017\u0016\u0003\u0002\u0002\u0002\u0018",
    "\u0005\u0003\u0002\u0002\u0002\u0019\u001a\t\u0002\u0002\u0002\u001a",
    "\u001b\u0007\u0017\u0002\u0002\u001b\u001c\u0007\r\u0002\u0002\u001c",
    "\u001d\u0007\u0012\u0002\u0002\u001d\u001e\u0007\u0003\u0002\u0002\u001e",
    "\u001f\u0007\u0004\u0002\u0002\u001f \u0007\u0007\u0002\u0002 \u0007",
    "\u0003\u0002\u0002\u0002!\"\t\u0002\u0002\u0002\"#\u0007\u0017\u0002",
    "\u0002#$\u0007\r\u0002\u0002$%\u0007\u0010\u0002\u0002%&\u0007\u0003",
    "\u0002\u0002&\'\u0007\u0018\u0002\u0002\'(\u0007\u0004\u0002\u0002(",
    ")\u0007\u001a\u0002\u0002)*\u0007\u0007\u0002\u0002*\t\u0003\u0002\u0002",
    "\u0002+,\u0007\u0017\u0002\u0002,-\u0007\u000e\u0002\u0002-.\u0007\u000f",
    "\u0002\u0002./\u0007\u0003\u0002\u0002/0\u0007\u0018\u0002\u000201\u0007",
    "\t\u0002\u000212\u0007\u0017\u0002\u000223\u0007\u0004\u0002\u00023",
    "4\u0007\u0007\u0002\u00024\u000b\u0003\u0002\u0002\u000256\u0007\u0011",
    "\u0002\u000267\u0007\u0007\u0002\u00027\r\u0003\u0002\u0002\u0002\u0004",
    "\u0011\u0017"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", null, null, null, "';'", "','", 
                     "'const'", "'let'", "'var'", "'='", "'.'", "'use'", 
                     "'require'", "'import'", "'express'", null, null, "'from'" ];

var symbolicNames = [ null, null, null, "WHITESPACE", "NEWLINE", "END_STATEMENT", 
                      "SEMICOLON", "COMMA", "CONST", "LET", "VAR", "EQUAL", 
                      "DOT", "USE", "REQUIRE", "IMPORT", "EXPRESS", "LINE_COMMENT", 
                      "PROPERTY", "FROM", "NUMBER", "IDENT", "PATH", "MODULE", 
                      "DONT_CARE_ARGS", "ANY" ];

var ruleNames =  [ "indexfile", "myline", "express", "require", "useroute", 
                   "import_statement" ];

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
IndexGrammarParser.LINE_COMMENT = 17;
IndexGrammarParser.PROPERTY = 18;
IndexGrammarParser.FROM = 19;
IndexGrammarParser.NUMBER = 20;
IndexGrammarParser.IDENT = 21;
IndexGrammarParser.PATH = 22;
IndexGrammarParser.MODULE = 23;
IndexGrammarParser.DONT_CARE_ARGS = 24;
IndexGrammarParser.ANY = 25;

IndexGrammarParser.RULE_indexfile = 0;
IndexGrammarParser.RULE_myline = 1;
IndexGrammarParser.RULE_express = 2;
IndexGrammarParser.RULE_require = 3;
IndexGrammarParser.RULE_useroute = 4;
IndexGrammarParser.RULE_import_statement = 5;


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

IndexfileContext.prototype.myline = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MylineContext);
    } else {
        return this.getTypedRuleContext(MylineContext,i);
    }
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

IndexfileContext.prototype.accept = function(visitor) {
    if ( visitor instanceof IndexGrammarVisitor ) {
        return visitor.visitIndexfile(this);
    } else {
        return visitor.visitChildren(this);
    }
};




IndexGrammarParser.IndexfileContext = IndexfileContext;

IndexGrammarParser.prototype.indexfile = function() {

    var localctx = new IndexfileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, IndexGrammarParser.RULE_indexfile);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 13; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 12;
            this.myline();
            this.state = 15; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IndexGrammarParser.CONST) | (1 << IndexGrammarParser.LET) | (1 << IndexGrammarParser.VAR) | (1 << IndexGrammarParser.IMPORT) | (1 << IndexGrammarParser.IDENT))) !== 0));
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
    this.ruleIndex = IndexGrammarParser.RULE_myline;
    return this;
}

MylineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MylineContext.prototype.constructor = MylineContext;

MylineContext.prototype.express = function() {
    return this.getTypedRuleContext(ExpressContext,0);
};

MylineContext.prototype.require = function() {
    return this.getTypedRuleContext(RequireContext,0);
};

MylineContext.prototype.useroute = function() {
    return this.getTypedRuleContext(UserouteContext,0);
};

MylineContext.prototype.import_statement = function() {
    return this.getTypedRuleContext(Import_statementContext,0);
};

MylineContext.prototype.enterRule = function(listener) {
    if(listener instanceof IndexGrammarListener ) {
        listener.enterMyline(this);
	}
};

MylineContext.prototype.exitRule = function(listener) {
    if(listener instanceof IndexGrammarListener ) {
        listener.exitMyline(this);
	}
};

MylineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof IndexGrammarVisitor ) {
        return visitor.visitMyline(this);
    } else {
        return visitor.visitChildren(this);
    }
};




IndexGrammarParser.MylineContext = MylineContext;

IndexGrammarParser.prototype.myline = function() {

    var localctx = new MylineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, IndexGrammarParser.RULE_myline);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 21;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.state = 17;
            this.express();
            break;

        case 2:
            this.state = 18;
            this.require();
            break;

        case 3:
            this.state = 19;
            this.useroute();
            break;

        case 4:
            this.state = 20;
            this.import_statement();
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

ExpressContext.prototype.accept = function(visitor) {
    if ( visitor instanceof IndexGrammarVisitor ) {
        return visitor.visitExpress(this);
    } else {
        return visitor.visitChildren(this);
    }
};




IndexGrammarParser.ExpressContext = ExpressContext;

IndexGrammarParser.prototype.express = function() {

    var localctx = new ExpressContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, IndexGrammarParser.RULE_express);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 23;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IndexGrammarParser.CONST) | (1 << IndexGrammarParser.LET) | (1 << IndexGrammarParser.VAR))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 24;
        this.match(IndexGrammarParser.IDENT);
        this.state = 25;
        this.match(IndexGrammarParser.EQUAL);
        this.state = 26;
        this.match(IndexGrammarParser.EXPRESS);
        this.state = 27;
        this.match(IndexGrammarParser.T__0);
        this.state = 28;
        this.match(IndexGrammarParser.T__1);
        this.state = 29;
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

RequireContext.prototype.accept = function(visitor) {
    if ( visitor instanceof IndexGrammarVisitor ) {
        return visitor.visitRequire(this);
    } else {
        return visitor.visitChildren(this);
    }
};




IndexGrammarParser.RequireContext = RequireContext;

IndexGrammarParser.prototype.require = function() {

    var localctx = new RequireContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, IndexGrammarParser.RULE_require);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 31;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IndexGrammarParser.CONST) | (1 << IndexGrammarParser.LET) | (1 << IndexGrammarParser.VAR))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 32;
        this.match(IndexGrammarParser.IDENT);
        this.state = 33;
        this.match(IndexGrammarParser.EQUAL);
        this.state = 34;
        this.match(IndexGrammarParser.REQUIRE);
        this.state = 35;
        this.match(IndexGrammarParser.T__0);
        this.state = 36;
        this.match(IndexGrammarParser.PATH);
        this.state = 37;
        this.match(IndexGrammarParser.T__1);
        this.state = 38;
        this.match(IndexGrammarParser.DONT_CARE_ARGS);
        this.state = 39;
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

UserouteContext.prototype.accept = function(visitor) {
    if ( visitor instanceof IndexGrammarVisitor ) {
        return visitor.visitUseroute(this);
    } else {
        return visitor.visitChildren(this);
    }
};




IndexGrammarParser.UserouteContext = UserouteContext;

IndexGrammarParser.prototype.useroute = function() {

    var localctx = new UserouteContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, IndexGrammarParser.RULE_useroute);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 41;
        this.match(IndexGrammarParser.IDENT);
        this.state = 42;
        this.match(IndexGrammarParser.DOT);
        this.state = 43;
        this.match(IndexGrammarParser.USE);
        this.state = 44;
        this.match(IndexGrammarParser.T__0);
        this.state = 45;
        this.match(IndexGrammarParser.PATH);
        this.state = 46;
        this.match(IndexGrammarParser.COMMA);
        this.state = 47;
        this.match(IndexGrammarParser.IDENT);
        this.state = 48;
        this.match(IndexGrammarParser.T__1);
        this.state = 49;
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


function Import_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IndexGrammarParser.RULE_import_statement;
    return this;
}

Import_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Import_statementContext.prototype.constructor = Import_statementContext;

Import_statementContext.prototype.IMPORT = function() {
    return this.getToken(IndexGrammarParser.IMPORT, 0);
};

Import_statementContext.prototype.END_STATEMENT = function() {
    return this.getToken(IndexGrammarParser.END_STATEMENT, 0);
};

Import_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof IndexGrammarListener ) {
        listener.enterImport_statement(this);
	}
};

Import_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof IndexGrammarListener ) {
        listener.exitImport_statement(this);
	}
};

Import_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof IndexGrammarVisitor ) {
        return visitor.visitImport_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




IndexGrammarParser.Import_statementContext = Import_statementContext;

IndexGrammarParser.prototype.import_statement = function() {

    var localctx = new Import_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, IndexGrammarParser.RULE_import_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 51;
        this.match(IndexGrammarParser.IMPORT);
        this.state = 52;
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
