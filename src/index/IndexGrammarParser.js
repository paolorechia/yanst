// Generated from IndexGrammar.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var IndexGrammarListener = require('./IndexGrammarListener').IndexGrammarListener;
var grammarFileName = "IndexGrammar.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001a\u00c4\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0003\u0002\u0006\u0002\u0010\n\u0002\r\u0002\u000e\u0002\u0011\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0018\n\u0003",
    "\u0003\u0004\u0003\u0004\u0006\u0004\u001c\n\u0004\r\u0004\u000e\u0004",
    "\u001d\u0003\u0004\u0003\u0004\u0007\u0004\"\n\u0004\f\u0004\u000e\u0004",
    "%\u000b\u0004\u0003\u0004\u0003\u0004\u0007\u0004)\n\u0004\f\u0004\u000e",
    "\u0004,\u000b\u0004\u0003\u0004\u0003\u0004\u0007\u00040\n\u0004\f\u0004",
    "\u000e\u00043\u000b\u0004\u0003\u0004\u0003\u0004\u0007\u00047\n\u0004",
    "\f\u0004\u000e\u0004:\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0006\u0005A\n\u0005\r\u0005\u000e\u0005B\u0003",
    "\u0005\u0003\u0005\u0007\u0005G\n\u0005\f\u0005\u000e\u0005J\u000b\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005P\n\u0005",
    "\f\u0005\u000e\u0005S\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0007\u0005Y\n\u0005\f\u0005\u000e\u0005\\\u000b\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006g\n\u0006\f\u0006\u000e",
    "\u0006j\u000b\u0006\u0003\u0006\u0003\u0006\u0007\u0006n\n\u0006\f\u0006",
    "\u000e\u0006q\u000b\u0006\u0003\u0006\u0003\u0006\u0007\u0006u\n\u0006",
    "\f\u0006\u000e\u0006x\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0007\u0007\u007f\n\u0007\f\u0007\u000e\u0007",
    "\u0082\u000b\u0007\u0003\u0007\u0007\u0007\u0085\n\u0007\f\u0007\u000e",
    "\u0007\u0088\u000b\u0007\u0003\u0007\u0007\u0007\u008b\n\u0007\f\u0007",
    "\u000e\u0007\u008e\u000b\u0007\u0003\u0007\u0003\u0007\u0007\u0007\u0092",
    "\n\u0007\f\u0007\u000e\u0007\u0095\u000b\u0007\u0003\u0007\u0007\u0007",
    "\u0098\n\u0007\f\u0007\u000e\u0007\u009b\u000b\u0007\u0003\u0007\u0007",
    "\u0007\u009e\n\u0007\f\u0007\u000e\u0007\u00a1\u000b\u0007\u0003\u0007",
    "\u0007\u0007\u00a4\n\u0007\f\u0007\u000e\u0007\u00a7\u000b\u0007\u0003",
    "\u0007\u0007\u0007\u00aa\n\u0007\f\u0007\u000e\u0007\u00ad\u000b\u0007",
    "\u0007\u0007\u00af\n\u0007\f\u0007\u000e\u0007\u00b2\u000b\u0007\u0003",
    "\u0007\u0007\u0007\u00b5\n\u0007\f\u0007\u000e\u0007\u00b8\u000b\u0007",
    "\u0003\u0007\u0003\u0007\u0007\u0007\u00bc\n\u0007\f\u0007\u000e\u0007",
    "\u00bf\u000b\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0002",
    "\u0002\b\u0002\u0004\u0006\b\n\f\u0002\u0003\u0003\u0002\f\u000e\u0002",
    "\u00d8\u0002\u000f\u0003\u0002\u0002\u0002\u0004\u0017\u0003\u0002\u0002",
    "\u0002\u0006\u0019\u0003\u0002\u0002\u0002\b>\u0003\u0002\u0002\u0002",
    "\n`\u0003\u0002\u0002\u0002\f|\u0003\u0002\u0002\u0002\u000e\u0010\u0005",
    "\u0004\u0003\u0002\u000f\u000e\u0003\u0002\u0002\u0002\u0010\u0011\u0003",
    "\u0002\u0002\u0002\u0011\u000f\u0003\u0002\u0002\u0002\u0011\u0012\u0003",
    "\u0002\u0002\u0002\u0012\u0003\u0003\u0002\u0002\u0002\u0013\u0018\u0005",
    "\u0006\u0004\u0002\u0014\u0018\u0005\b\u0005\u0002\u0015\u0018\u0005",
    "\n\u0006\u0002\u0016\u0018\u0005\f\u0007\u0002\u0017\u0013\u0003\u0002",
    "\u0002\u0002\u0017\u0014\u0003\u0002\u0002\u0002\u0017\u0015\u0003\u0002",
    "\u0002\u0002\u0017\u0016\u0003\u0002\u0002\u0002\u0018\u0005\u0003\u0002",
    "\u0002\u0002\u0019\u001b\t\u0002\u0002\u0002\u001a\u001c\u0007\u0007",
    "\u0002\u0002\u001b\u001a\u0003\u0002\u0002\u0002\u001c\u001d\u0003\u0002",
    "\u0002\u0002\u001d\u001b\u0003\u0002\u0002\u0002\u001d\u001e\u0003\u0002",
    "\u0002\u0002\u001e\u001f\u0003\u0002\u0002\u0002\u001f#\u0007\u0017",
    "\u0002\u0002 \"\u0007\u0007\u0002\u0002! \u0003\u0002\u0002\u0002\"",
    "%\u0003\u0002\u0002\u0002#!\u0003\u0002\u0002\u0002#$\u0003\u0002\u0002",
    "\u0002$&\u0003\u0002\u0002\u0002%#\u0003\u0002\u0002\u0002&*\u0007\u000f",
    "\u0002\u0002\')\u0007\u0007\u0002\u0002(\'\u0003\u0002\u0002\u0002)",
    ",\u0003\u0002\u0002\u0002*(\u0003\u0002\u0002\u0002*+\u0003\u0002\u0002",
    "\u0002+-\u0003\u0002\u0002\u0002,*\u0003\u0002\u0002\u0002-1\u0007\u0014",
    "\u0002\u0002.0\u0007\u0007\u0002\u0002/.\u0003\u0002\u0002\u000203\u0003",
    "\u0002\u0002\u00021/\u0003\u0002\u0002\u000212\u0003\u0002\u0002\u0002",
    "24\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u000248\u0007\u0003\u0002",
    "\u000257\u0007\u0007\u0002\u000265\u0003\u0002\u0002\u00027:\u0003\u0002",
    "\u0002\u000286\u0003\u0002\u0002\u000289\u0003\u0002\u0002\u00029;\u0003",
    "\u0002\u0002\u0002:8\u0003\u0002\u0002\u0002;<\u0007\u0004\u0002\u0002",
    "<=\u0007\t\u0002\u0002=\u0007\u0003\u0002\u0002\u0002>@\t\u0002\u0002",
    "\u0002?A\u0007\u0007\u0002\u0002@?\u0003\u0002\u0002\u0002AB\u0003\u0002",
    "\u0002\u0002B@\u0003\u0002\u0002\u0002BC\u0003\u0002\u0002\u0002CD\u0003",
    "\u0002\u0002\u0002DH\u0007\u0017\u0002\u0002EG\u0007\u0007\u0002\u0002",
    "FE\u0003\u0002\u0002\u0002GJ\u0003\u0002\u0002\u0002HF\u0003\u0002\u0002",
    "\u0002HI\u0003\u0002\u0002\u0002IK\u0003\u0002\u0002\u0002JH\u0003\u0002",
    "\u0002\u0002KL\u0007\u000f\u0002\u0002LM\u0007\u0007\u0002\u0002MQ\u0007",
    "\u0012\u0002\u0002NP\u0007\u0007\u0002\u0002ON\u0003\u0002\u0002\u0002",
    "PS\u0003\u0002\u0002\u0002QO\u0003\u0002\u0002\u0002QR\u0003\u0002\u0002",
    "\u0002RT\u0003\u0002\u0002\u0002SQ\u0003\u0002\u0002\u0002TU\u0007\u0003",
    "\u0002\u0002UV\u0007\u0018\u0002\u0002VZ\u0007\u0004\u0002\u0002WY\u0007",
    "\u0007\u0002\u0002XW\u0003\u0002\u0002\u0002Y\\\u0003\u0002\u0002\u0002",
    "ZX\u0003\u0002\u0002\u0002Z[\u0003\u0002\u0002\u0002[]\u0003\u0002\u0002",
    "\u0002\\Z\u0003\u0002\u0002\u0002]^\u0007\u001a\u0002\u0002^_\u0007",
    "\t\u0002\u0002_\t\u0003\u0002\u0002\u0002`a\u0007\u0017\u0002\u0002",
    "ab\u0007\u0010\u0002\u0002bc\u0007\u0011\u0002\u0002cd\u0007\u0003\u0002",
    "\u0002dh\u0007\u0018\u0002\u0002eg\u0007\u0007\u0002\u0002fe\u0003\u0002",
    "\u0002\u0002gj\u0003\u0002\u0002\u0002hf\u0003\u0002\u0002\u0002hi\u0003",
    "\u0002\u0002\u0002ik\u0003\u0002\u0002\u0002jh\u0003\u0002\u0002\u0002",
    "ko\u0007\u000b\u0002\u0002ln\u0007\u0007\u0002\u0002ml\u0003\u0002\u0002",
    "\u0002nq\u0003\u0002\u0002\u0002om\u0003\u0002\u0002\u0002op\u0003\u0002",
    "\u0002\u0002pr\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002rv\u0007",
    "\u0017\u0002\u0002su\u0007\u0007\u0002\u0002ts\u0003\u0002\u0002\u0002",
    "ux\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002",
    "\u0002wy\u0003\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002yz\u0007\u0004",
    "\u0002\u0002z{\u0007\t\u0002\u0002{\u000b\u0003\u0002\u0002\u0002|\u0080",
    "\u0007\u0013\u0002\u0002}\u007f\u0007\u0007\u0002\u0002~}\u0003\u0002",
    "\u0002\u0002\u007f\u0082\u0003\u0002\u0002\u0002\u0080~\u0003\u0002",
    "\u0002\u0002\u0080\u0081\u0003\u0002\u0002\u0002\u0081\u00b0\u0003\u0002",
    "\u0002\u0002\u0082\u0080\u0003\u0002\u0002\u0002\u0083\u0085\u0007\u0005",
    "\u0002\u0002\u0084\u0083\u0003\u0002\u0002\u0002\u0085\u0088\u0003\u0002",
    "\u0002\u0002\u0086\u0084\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002",
    "\u0002\u0002\u0087\u008c\u0003\u0002\u0002\u0002\u0088\u0086\u0003\u0002",
    "\u0002\u0002\u0089\u008b\u0007\u0007\u0002\u0002\u008a\u0089\u0003\u0002",
    "\u0002\u0002\u008b\u008e\u0003\u0002\u0002\u0002\u008c\u008a\u0003\u0002",
    "\u0002\u0002\u008c\u008d\u0003\u0002\u0002\u0002\u008d\u008f\u0003\u0002",
    "\u0002\u0002\u008e\u008c\u0003\u0002\u0002\u0002\u008f\u0093\u0007\u0017",
    "\u0002\u0002\u0090\u0092\u0007\u0007\u0002\u0002\u0091\u0090\u0003\u0002",
    "\u0002\u0002\u0092\u0095\u0003\u0002\u0002\u0002\u0093\u0091\u0003\u0002",
    "\u0002\u0002\u0093\u0094\u0003\u0002\u0002\u0002\u0094\u0099\u0003\u0002",
    "\u0002\u0002\u0095\u0093\u0003\u0002\u0002\u0002\u0096\u0098\u0007\u0006",
    "\u0002\u0002\u0097\u0096\u0003\u0002\u0002\u0002\u0098\u009b\u0003\u0002",
    "\u0002\u0002\u0099\u0097\u0003\u0002\u0002\u0002\u0099\u009a\u0003\u0002",
    "\u0002\u0002\u009a\u009f\u0003\u0002\u0002\u0002\u009b\u0099\u0003\u0002",
    "\u0002\u0002\u009c\u009e\u0007\u0007\u0002\u0002\u009d\u009c\u0003\u0002",
    "\u0002\u0002\u009e\u00a1\u0003\u0002\u0002\u0002\u009f\u009d\u0003\u0002",
    "\u0002\u0002\u009f\u00a0\u0003\u0002\u0002\u0002\u00a0\u00a5\u0003\u0002",
    "\u0002\u0002\u00a1\u009f\u0003\u0002\u0002\u0002\u00a2\u00a4\u0007\u000b",
    "\u0002\u0002\u00a3\u00a2\u0003\u0002\u0002\u0002\u00a4\u00a7\u0003\u0002",
    "\u0002\u0002\u00a5\u00a3\u0003\u0002\u0002\u0002\u00a5\u00a6\u0003\u0002",
    "\u0002\u0002\u00a6\u00ab\u0003\u0002\u0002\u0002\u00a7\u00a5\u0003\u0002",
    "\u0002\u0002\u00a8\u00aa\u0007\u0007\u0002\u0002\u00a9\u00a8\u0003\u0002",
    "\u0002\u0002\u00aa\u00ad\u0003\u0002\u0002\u0002\u00ab\u00a9\u0003\u0002",
    "\u0002\u0002\u00ab\u00ac\u0003\u0002\u0002\u0002\u00ac\u00af\u0003\u0002",
    "\u0002\u0002\u00ad\u00ab\u0003\u0002\u0002\u0002\u00ae\u0086\u0003\u0002",
    "\u0002\u0002\u00af\u00b2\u0003\u0002\u0002\u0002\u00b0\u00ae\u0003\u0002",
    "\u0002\u0002\u00b0\u00b1\u0003\u0002\u0002\u0002\u00b1\u00b6\u0003\u0002",
    "\u0002\u0002\u00b2\u00b0\u0003\u0002\u0002\u0002\u00b3\u00b5\u0007\u0007",
    "\u0002\u0002\u00b4\u00b3\u0003\u0002\u0002\u0002\u00b5\u00b8\u0003\u0002",
    "\u0002\u0002\u00b6\u00b4\u0003\u0002\u0002\u0002\u00b6\u00b7\u0003\u0002",
    "\u0002\u0002\u00b7\u00b9\u0003\u0002\u0002\u0002\u00b8\u00b6\u0003\u0002",
    "\u0002\u0002\u00b9\u00bd\u0007\u0015\u0002\u0002\u00ba\u00bc\u0007\u0007",
    "\u0002\u0002\u00bb\u00ba\u0003\u0002\u0002\u0002\u00bc\u00bf\u0003\u0002",
    "\u0002\u0002\u00bd\u00bb\u0003\u0002\u0002\u0002\u00bd\u00be\u0003\u0002",
    "\u0002\u0002\u00be\u00c0\u0003\u0002\u0002\u0002\u00bf\u00bd\u0003\u0002",
    "\u0002\u0002\u00c0\u00c1\u0007\u0019\u0002\u0002\u00c1\u00c2\u0007\t",
    "\u0002\u0002\u00c2\r\u0003\u0002\u0002\u0002\u001b\u0011\u0017\u001d",
    "#*18BHQZhov\u0080\u0086\u008c\u0093\u0099\u009f\u00a5\u00ab\u00b0\u00b6",
    "\u00bd"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'{'", "'}'", null, null, null, 
                     "';'", "','", "'const'", "'let'", "'var'", "'='", "'.'", 
                     "'use'", "'require'", "'import'", "'express'", "'from'" ];

var symbolicNames = [ null, null, null, null, null, "WHITESPACE", "NEWLINE", 
                      "END_STATEMENT", "SEMICOLON", "COMMA", "CONST", "LET", 
                      "VAR", "EQUAL", "DOT", "USE", "REQUIRE", "IMPORT", 
                      "EXPRESS", "FROM", "NUMBER", "IDENT", "PATH", "MODULE", 
                      "DONT_CARE_ARGS" ];

var ruleNames =  [ "indexfile", "line", "express", "require", "useroute", 
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
IndexGrammarParser.T__2 = 3;
IndexGrammarParser.T__3 = 4;
IndexGrammarParser.WHITESPACE = 5;
IndexGrammarParser.NEWLINE = 6;
IndexGrammarParser.END_STATEMENT = 7;
IndexGrammarParser.SEMICOLON = 8;
IndexGrammarParser.COMMA = 9;
IndexGrammarParser.CONST = 10;
IndexGrammarParser.LET = 11;
IndexGrammarParser.VAR = 12;
IndexGrammarParser.EQUAL = 13;
IndexGrammarParser.DOT = 14;
IndexGrammarParser.USE = 15;
IndexGrammarParser.REQUIRE = 16;
IndexGrammarParser.IMPORT = 17;
IndexGrammarParser.EXPRESS = 18;
IndexGrammarParser.FROM = 19;
IndexGrammarParser.NUMBER = 20;
IndexGrammarParser.IDENT = 21;
IndexGrammarParser.PATH = 22;
IndexGrammarParser.MODULE = 23;
IndexGrammarParser.DONT_CARE_ARGS = 24;

IndexGrammarParser.RULE_indexfile = 0;
IndexGrammarParser.RULE_line = 1;
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

IndexfileContext.prototype.line = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LineContext);
    } else {
        return this.getTypedRuleContext(LineContext,i);
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
            this.line();
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


function LineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IndexGrammarParser.RULE_line;
    return this;
}

LineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LineContext.prototype.constructor = LineContext;

LineContext.prototype.express = function() {
    return this.getTypedRuleContext(ExpressContext,0);
};

LineContext.prototype.require = function() {
    return this.getTypedRuleContext(RequireContext,0);
};

LineContext.prototype.useroute = function() {
    return this.getTypedRuleContext(UserouteContext,0);
};

LineContext.prototype.import_statement = function() {
    return this.getTypedRuleContext(Import_statementContext,0);
};

LineContext.prototype.enterRule = function(listener) {
    if(listener instanceof IndexGrammarListener ) {
        listener.enterLine(this);
	}
};

LineContext.prototype.exitRule = function(listener) {
    if(listener instanceof IndexGrammarListener ) {
        listener.exitLine(this);
	}
};




IndexGrammarParser.LineContext = LineContext;

IndexGrammarParser.prototype.line = function() {

    var localctx = new LineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, IndexGrammarParser.RULE_line);
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
        this.state = 25; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 24;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 27; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===IndexGrammarParser.WHITESPACE);
        this.state = 29;
        this.match(IndexGrammarParser.IDENT);
        this.state = 33;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IndexGrammarParser.WHITESPACE) {
            this.state = 30;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 35;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 36;
        this.match(IndexGrammarParser.EQUAL);
        this.state = 40;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IndexGrammarParser.WHITESPACE) {
            this.state = 37;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 42;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 43;
        this.match(IndexGrammarParser.EXPRESS);
        this.state = 47;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IndexGrammarParser.WHITESPACE) {
            this.state = 44;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 49;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 50;
        this.match(IndexGrammarParser.T__0);
        this.state = 54;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IndexGrammarParser.WHITESPACE) {
            this.state = 51;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 56;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 57;
        this.match(IndexGrammarParser.T__1);
        this.state = 58;
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
    this.enterRule(localctx, 6, IndexGrammarParser.RULE_require);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 60;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << IndexGrammarParser.CONST) | (1 << IndexGrammarParser.LET) | (1 << IndexGrammarParser.VAR))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 62; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 61;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 64; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===IndexGrammarParser.WHITESPACE);
        this.state = 66;
        this.match(IndexGrammarParser.IDENT);
        this.state = 70;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IndexGrammarParser.WHITESPACE) {
            this.state = 67;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 72;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 73;
        this.match(IndexGrammarParser.EQUAL);
        this.state = 74;
        this.match(IndexGrammarParser.WHITESPACE);
        this.state = 75;
        this.match(IndexGrammarParser.REQUIRE);
        this.state = 79;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IndexGrammarParser.WHITESPACE) {
            this.state = 76;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 81;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 82;
        this.match(IndexGrammarParser.T__0);
        this.state = 83;
        this.match(IndexGrammarParser.PATH);
        this.state = 84;
        this.match(IndexGrammarParser.T__1);
        this.state = 88;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IndexGrammarParser.WHITESPACE) {
            this.state = 85;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 90;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 91;
        this.match(IndexGrammarParser.DONT_CARE_ARGS);
        this.state = 92;
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
    this.enterRule(localctx, 8, IndexGrammarParser.RULE_useroute);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 94;
        this.match(IndexGrammarParser.IDENT);
        this.state = 95;
        this.match(IndexGrammarParser.DOT);
        this.state = 96;
        this.match(IndexGrammarParser.USE);
        this.state = 97;
        this.match(IndexGrammarParser.T__0);
        this.state = 98;
        this.match(IndexGrammarParser.PATH);
        this.state = 102;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IndexGrammarParser.WHITESPACE) {
            this.state = 99;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 104;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 105;
        this.match(IndexGrammarParser.COMMA);
        this.state = 109;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IndexGrammarParser.WHITESPACE) {
            this.state = 106;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 111;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 112;
        this.match(IndexGrammarParser.IDENT);
        this.state = 116;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IndexGrammarParser.WHITESPACE) {
            this.state = 113;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 118;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 119;
        this.match(IndexGrammarParser.T__1);
        this.state = 120;
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

Import_statementContext.prototype.FROM = function() {
    return this.getToken(IndexGrammarParser.FROM, 0);
};

Import_statementContext.prototype.MODULE = function() {
    return this.getToken(IndexGrammarParser.MODULE, 0);
};

Import_statementContext.prototype.END_STATEMENT = function() {
    return this.getToken(IndexGrammarParser.END_STATEMENT, 0);
};

Import_statementContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(IndexGrammarParser.WHITESPACE);
    } else {
        return this.getToken(IndexGrammarParser.WHITESPACE, i);
    }
};


Import_statementContext.prototype.IDENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(IndexGrammarParser.IDENT);
    } else {
        return this.getToken(IndexGrammarParser.IDENT, i);
    }
};


Import_statementContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(IndexGrammarParser.COMMA);
    } else {
        return this.getToken(IndexGrammarParser.COMMA, i);
    }
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




IndexGrammarParser.Import_statementContext = Import_statementContext;

IndexGrammarParser.prototype.import_statement = function() {

    var localctx = new Import_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, IndexGrammarParser.RULE_import_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 122;
        this.match(IndexGrammarParser.IMPORT);
        this.state = 126;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 123;
                this.match(IndexGrammarParser.WHITESPACE); 
            }
            this.state = 128;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
        }

        this.state = 174;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 132;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===IndexGrammarParser.T__2) {
                    this.state = 129;
                    this.match(IndexGrammarParser.T__2);
                    this.state = 134;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 138;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===IndexGrammarParser.WHITESPACE) {
                    this.state = 135;
                    this.match(IndexGrammarParser.WHITESPACE);
                    this.state = 140;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 141;
                this.match(IndexGrammarParser.IDENT);
                this.state = 145;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 142;
                        this.match(IndexGrammarParser.WHITESPACE); 
                    }
                    this.state = 147;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
                }

                this.state = 151;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===IndexGrammarParser.T__3) {
                    this.state = 148;
                    this.match(IndexGrammarParser.T__3);
                    this.state = 153;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 157;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 154;
                        this.match(IndexGrammarParser.WHITESPACE); 
                    }
                    this.state = 159;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
                }

                this.state = 163;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===IndexGrammarParser.COMMA) {
                    this.state = 160;
                    this.match(IndexGrammarParser.COMMA);
                    this.state = 165;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 169;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 166;
                        this.match(IndexGrammarParser.WHITESPACE); 
                    }
                    this.state = 171;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
                }
         
            }
            this.state = 176;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
        }

        this.state = 180;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IndexGrammarParser.WHITESPACE) {
            this.state = 177;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 182;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 183;
        this.match(IndexGrammarParser.FROM);
        this.state = 187;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IndexGrammarParser.WHITESPACE) {
            this.state = 184;
            this.match(IndexGrammarParser.WHITESPACE);
            this.state = 189;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 190;
        this.match(IndexGrammarParser.MODULE);
        this.state = 191;
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
