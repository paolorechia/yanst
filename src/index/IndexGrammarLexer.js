// Generated from IndexGrammar.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0010`\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0006",
    "\u000eR\n\u000e\r\u000e\u000e\u000eS\u0003\u000f\u0006\u000fW\n\u000f",
    "\r\u000f\u000e\u000fX\u0003\u000f\u0007\u000f\\\n\u000f\f\u000f\u000e",
    "\u000f_\u000b\u000f\u0002\u0002\u0010\u0003\u0003\u0005\u0004\u0007",
    "\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017",
    "\r\u0019\u000e\u001b\u000f\u001d\u0010\u0003\u0002\u0007\u0004\u0002",
    "\u000b\u000b\"\"\u0004\u0002\f\f\u000f\u000f\u0003\u00022;\u0004\u0002",
    "C\\c|\u0005\u00022;C\\c|\u0002b\u0002\u0003\u0003\u0002\u0002\u0002",
    "\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002",
    "\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002",
    "\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002",
    "\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002",
    "\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002",
    "\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002",
    "\u0002\u001d\u0003\u0002\u0002\u0002\u0003\u001f\u0003\u0002\u0002\u0002",
    "\u0005!\u0003\u0002\u0002\u0002\u0007#\u0003\u0002\u0002\u0002\t%\u0003",
    "\u0002\u0002\u0002\u000b\'\u0003\u0002\u0002\u0002\r)\u0003\u0002\u0002",
    "\u0002\u000f/\u0003\u0002\u0002\u0002\u00113\u0003\u0002\u0002\u0002",
    "\u00137\u0003\u0002\u0002\u0002\u00159\u0003\u0002\u0002\u0002\u0017",
    "A\u0003\u0002\u0002\u0002\u0019H\u0003\u0002\u0002\u0002\u001bQ\u0003",
    "\u0002\u0002\u0002\u001dV\u0003\u0002\u0002\u0002\u001f \u0007*\u0002",
    "\u0002 \u0004\u0003\u0002\u0002\u0002!\"\u0007+\u0002\u0002\"\u0006",
    "\u0003\u0002\u0002\u0002#$\t\u0002\u0002\u0002$\b\u0003\u0002\u0002",
    "\u0002%&\t\u0003\u0002\u0002&\n\u0003\u0002\u0002\u0002\'(\u0007=\u0002",
    "\u0002(\f\u0003\u0002\u0002\u0002)*\u0007e\u0002\u0002*+\u0007q\u0002",
    "\u0002+,\u0007p\u0002\u0002,-\u0007u\u0002\u0002-.\u0007v\u0002\u0002",
    ".\u000e\u0003\u0002\u0002\u0002/0\u0007n\u0002\u000201\u0007g\u0002",
    "\u000212\u0007v\u0002\u00022\u0010\u0003\u0002\u0002\u000234\u0007x",
    "\u0002\u000245\u0007c\u0002\u000256\u0007t\u0002\u00026\u0012\u0003",
    "\u0002\u0002\u000278\u0007?\u0002\u00028\u0014\u0003\u0002\u0002\u0002",
    "9:\u0007t\u0002\u0002:;\u0007g\u0002\u0002;<\u0007s\u0002\u0002<=\u0007",
    "w\u0002\u0002=>\u0007k\u0002\u0002>?\u0007t\u0002\u0002?@\u0007g\u0002",
    "\u0002@\u0016\u0003\u0002\u0002\u0002AB\u0007k\u0002\u0002BC\u0007o",
    "\u0002\u0002CD\u0007r\u0002\u0002DE\u0007q\u0002\u0002EF\u0007t\u0002",
    "\u0002FG\u0007v\u0002\u0002G\u0018\u0003\u0002\u0002\u0002HI\u0007g",
    "\u0002\u0002IJ\u0007z\u0002\u0002JK\u0007r\u0002\u0002KL\u0007t\u0002",
    "\u0002LM\u0007g\u0002\u0002MN\u0007u\u0002\u0002NO\u0007u\u0002\u0002",
    "O\u001a\u0003\u0002\u0002\u0002PR\t\u0004\u0002\u0002QP\u0003\u0002",
    "\u0002\u0002RS\u0003\u0002\u0002\u0002SQ\u0003\u0002\u0002\u0002ST\u0003",
    "\u0002\u0002\u0002T\u001c\u0003\u0002\u0002\u0002UW\t\u0005\u0002\u0002",
    "VU\u0003\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002XV\u0003\u0002\u0002",
    "\u0002XY\u0003\u0002\u0002\u0002Y]\u0003\u0002\u0002\u0002Z\\\t\u0006",
    "\u0002\u0002[Z\u0003\u0002\u0002\u0002\\_\u0003\u0002\u0002\u0002][",
    "\u0003\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002^\u001e\u0003\u0002",
    "\u0002\u0002_]\u0003\u0002\u0002\u0002\u0006\u0002SX]\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function IndexGrammarLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

IndexGrammarLexer.prototype = Object.create(antlr4.Lexer.prototype);
IndexGrammarLexer.prototype.constructor = IndexGrammarLexer;

Object.defineProperty(IndexGrammarLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

IndexGrammarLexer.EOF = antlr4.Token.EOF;
IndexGrammarLexer.T__0 = 1;
IndexGrammarLexer.T__1 = 2;
IndexGrammarLexer.WHITESPACE = 3;
IndexGrammarLexer.NEWLINE = 4;
IndexGrammarLexer.SEMICOLON = 5;
IndexGrammarLexer.CONST = 6;
IndexGrammarLexer.LET = 7;
IndexGrammarLexer.VAR = 8;
IndexGrammarLexer.EQUAL = 9;
IndexGrammarLexer.REQUIRE = 10;
IndexGrammarLexer.IMPORT = 11;
IndexGrammarLexer.EXPRESS = 12;
IndexGrammarLexer.NUMBER = 13;
IndexGrammarLexer.IDENT = 14;

IndexGrammarLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

IndexGrammarLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

IndexGrammarLexer.prototype.literalNames = [ null, "'('", "')'", null, null, 
                                             "';'", "'const'", "'let'", 
                                             "'var'", "'='", "'require'", 
                                             "'import'", "'express'" ];

IndexGrammarLexer.prototype.symbolicNames = [ null, null, null, "WHITESPACE", 
                                              "NEWLINE", "SEMICOLON", "CONST", 
                                              "LET", "VAR", "EQUAL", "REQUIRE", 
                                              "IMPORT", "EXPRESS", "NUMBER", 
                                              "IDENT" ];

IndexGrammarLexer.prototype.ruleNames = [ "T__0", "T__1", "WHITESPACE", 
                                          "NEWLINE", "SEMICOLON", "CONST", 
                                          "LET", "VAR", "EQUAL", "REQUIRE", 
                                          "IMPORT", "EXPRESS", "NUMBER", 
                                          "IDENT" ];

IndexGrammarLexer.prototype.grammarFileName = "IndexGrammar.g4";


exports.IndexGrammarLexer = IndexGrammarLexer;

