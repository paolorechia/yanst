// Generated from IndexGrammar.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0013\u0091\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0007\u0006/\n\u0006\f\u0006\u000e\u00062\u000b\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0007\u00067\n\u0006\f\u0006\u000e\u0006",
    ":\u000b\u0006\u0003\u0006\u0003\u0006\u0005\u0006>\n\u0006\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0006\u000fj\n\u000f\r\u000f\u000e\u000f",
    "k\u0003\u0010\u0006\u0010o\n\u0010\r\u0010\u000e\u0010p\u0003\u0010",
    "\u0007\u0010t\n\u0010\f\u0010\u000e\u0010w\u000b\u0010\u0003\u0011\u0003",
    "\u0011\u0007\u0011{\n\u0011\f\u0011\u000e\u0011~\u000b\u0011\u0003\u0011",
    "\u0003\u0011\u0006\u0011\u0082\n\u0011\r\u0011\u000e\u0011\u0083\u0003",
    "\u0011\u0007\u0011\u0087\n\u0011\f\u0011\u000e\u0011\u008a\u000b\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0002\u0002\u0013\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b",
    "\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b",
    "\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013\u0003\u0002\b\u0004\u0002",
    "\u000b\u000b\"\"\u0004\u0002\f\f\u000f\u000f\u0003\u00022;\u0004\u0002",
    "C\\c|\u0005\u00022;C\\c|\u0004\u0002$$))\u0002\u0099\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003",
    "\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003",
    "\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003",
    "\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003",
    "\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003",
    "\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002",
    "\u0002\u0002\u0003%\u0003\u0002\u0002\u0002\u0005\'\u0003\u0002\u0002",
    "\u0002\u0007)\u0003\u0002\u0002\u0002\t+\u0003\u0002\u0002\u0002\u000b",
    "0\u0003\u0002\u0002\u0002\r?\u0003\u0002\u0002\u0002\u000fA\u0003\u0002",
    "\u0002\u0002\u0011G\u0003\u0002\u0002\u0002\u0013K\u0003\u0002\u0002",
    "\u0002\u0015O\u0003\u0002\u0002\u0002\u0017Q\u0003\u0002\u0002\u0002",
    "\u0019Y\u0003\u0002\u0002\u0002\u001b`\u0003\u0002\u0002\u0002\u001d",
    "i\u0003\u0002\u0002\u0002\u001fn\u0003\u0002\u0002\u0002!x\u0003\u0002",
    "\u0002\u0002#\u008d\u0003\u0002\u0002\u0002%&\u0007*\u0002\u0002&\u0004",
    "\u0003\u0002\u0002\u0002\'(\u0007+\u0002\u0002(\u0006\u0003\u0002\u0002",
    "\u0002)*\t\u0002\u0002\u0002*\b\u0003\u0002\u0002\u0002+,\t\u0003\u0002",
    "\u0002,\n\u0003\u0002\u0002\u0002-/\u0005\u0007\u0004\u0002.-\u0003",
    "\u0002\u0002\u0002/2\u0003\u0002\u0002\u00020.\u0003\u0002\u0002\u0002",
    "01\u0003\u0002\u0002\u00021=\u0003\u0002\u0002\u000220\u0003\u0002\u0002",
    "\u00023>\u0005\t\u0005\u000248\u0005\r\u0007\u000257\u0005\u0007\u0004",
    "\u000265\u0003\u0002\u0002\u00027:\u0003\u0002\u0002\u000286\u0003\u0002",
    "\u0002\u000289\u0003\u0002\u0002\u00029;\u0003\u0002\u0002\u0002:8\u0003",
    "\u0002\u0002\u0002;<\u0005\t\u0005\u0002<>\u0003\u0002\u0002\u0002=",
    "3\u0003\u0002\u0002\u0002=4\u0003\u0002\u0002\u0002>\f\u0003\u0002\u0002",
    "\u0002?@\u0007=\u0002\u0002@\u000e\u0003\u0002\u0002\u0002AB\u0007e",
    "\u0002\u0002BC\u0007q\u0002\u0002CD\u0007p\u0002\u0002DE\u0007u\u0002",
    "\u0002EF\u0007v\u0002\u0002F\u0010\u0003\u0002\u0002\u0002GH\u0007n",
    "\u0002\u0002HI\u0007g\u0002\u0002IJ\u0007v\u0002\u0002J\u0012\u0003",
    "\u0002\u0002\u0002KL\u0007x\u0002\u0002LM\u0007c\u0002\u0002MN\u0007",
    "t\u0002\u0002N\u0014\u0003\u0002\u0002\u0002OP\u0007?\u0002\u0002P\u0016",
    "\u0003\u0002\u0002\u0002QR\u0007t\u0002\u0002RS\u0007g\u0002\u0002S",
    "T\u0007s\u0002\u0002TU\u0007w\u0002\u0002UV\u0007k\u0002\u0002VW\u0007",
    "t\u0002\u0002WX\u0007g\u0002\u0002X\u0018\u0003\u0002\u0002\u0002YZ",
    "\u0007k\u0002\u0002Z[\u0007o\u0002\u0002[\\\u0007r\u0002\u0002\\]\u0007",
    "q\u0002\u0002]^\u0007t\u0002\u0002^_\u0007v\u0002\u0002_\u001a\u0003",
    "\u0002\u0002\u0002`a\u0007g\u0002\u0002ab\u0007z\u0002\u0002bc\u0007",
    "r\u0002\u0002cd\u0007t\u0002\u0002de\u0007g\u0002\u0002ef\u0007u\u0002",
    "\u0002fg\u0007u\u0002\u0002g\u001c\u0003\u0002\u0002\u0002hj\t\u0004",
    "\u0002\u0002ih\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002\u0002ki\u0003",
    "\u0002\u0002\u0002kl\u0003\u0002\u0002\u0002l\u001e\u0003\u0002\u0002",
    "\u0002mo\t\u0005\u0002\u0002nm\u0003\u0002\u0002\u0002op\u0003\u0002",
    "\u0002\u0002pn\u0003\u0002\u0002\u0002pq\u0003\u0002\u0002\u0002qu\u0003",
    "\u0002\u0002\u0002rt\t\u0006\u0002\u0002sr\u0003\u0002\u0002\u0002t",
    "w\u0003\u0002\u0002\u0002us\u0003\u0002\u0002\u0002uv\u0003\u0002\u0002",
    "\u0002v \u0003\u0002\u0002\u0002wu\u0003\u0002\u0002\u0002x|\t\u0007",
    "\u0002\u0002y{\u00070\u0002\u0002zy\u0003\u0002\u0002\u0002{~\u0003",
    "\u0002\u0002\u0002|z\u0003\u0002\u0002\u0002|}\u0003\u0002\u0002\u0002",
    "}\u0081\u0003\u0002\u0002\u0002~|\u0003\u0002\u0002\u0002\u007f\u0080",
    "\u00071\u0002\u0002\u0080\u0082\u0005\u001f\u0010\u0002\u0081\u007f",
    "\u0003\u0002\u0002\u0002\u0082\u0083\u0003\u0002\u0002\u0002\u0083\u0081",
    "\u0003\u0002\u0002\u0002\u0083\u0084\u0003\u0002\u0002\u0002\u0084\u0088",
    "\u0003\u0002\u0002\u0002\u0085\u0087\u00071\u0002\u0002\u0086\u0085",
    "\u0003\u0002\u0002\u0002\u0087\u008a\u0003\u0002\u0002\u0002\u0088\u0086",
    "\u0003\u0002\u0002\u0002\u0088\u0089\u0003\u0002\u0002\u0002\u0089\u008b",
    "\u0003\u0002\u0002\u0002\u008a\u0088\u0003\u0002\u0002\u0002\u008b\u008c",
    "\t\u0007\u0002\u0002\u008c\"\u0003\u0002\u0002\u0002\u008d\u008e\u0007",
    "*\u0002\u0002\u008e\u008f\u0005\u001f\u0010\u0002\u008f\u0090\u0007",
    "+\u0002\u0002\u0090$\u0003\u0002\u0002\u0002\f\u000208=kpu|\u0083\u0088",
    "\u0002"].join("");


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
IndexGrammarLexer.END_STATEMENT = 5;
IndexGrammarLexer.SEMICOLON = 6;
IndexGrammarLexer.CONST = 7;
IndexGrammarLexer.LET = 8;
IndexGrammarLexer.VAR = 9;
IndexGrammarLexer.EQUAL = 10;
IndexGrammarLexer.REQUIRE = 11;
IndexGrammarLexer.IMPORT = 12;
IndexGrammarLexer.EXPRESS = 13;
IndexGrammarLexer.NUMBER = 14;
IndexGrammarLexer.IDENT = 15;
IndexGrammarLexer.PATH = 16;
IndexGrammarLexer.DONT_CARE_ARGS = 17;

IndexGrammarLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

IndexGrammarLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

IndexGrammarLexer.prototype.literalNames = [ null, "'('", "')'", null, null, 
                                             null, "';'", "'const'", "'let'", 
                                             "'var'", "'='", "'require'", 
                                             "'import'", "'express'" ];

IndexGrammarLexer.prototype.symbolicNames = [ null, null, null, "WHITESPACE", 
                                              "NEWLINE", "END_STATEMENT", 
                                              "SEMICOLON", "CONST", "LET", 
                                              "VAR", "EQUAL", "REQUIRE", 
                                              "IMPORT", "EXPRESS", "NUMBER", 
                                              "IDENT", "PATH", "DONT_CARE_ARGS" ];

IndexGrammarLexer.prototype.ruleNames = [ "T__0", "T__1", "WHITESPACE", 
                                          "NEWLINE", "END_STATEMENT", "SEMICOLON", 
                                          "CONST", "LET", "VAR", "EQUAL", 
                                          "REQUIRE", "IMPORT", "EXPRESS", 
                                          "NUMBER", "IDENT", "PATH", "DONT_CARE_ARGS" ];

IndexGrammarLexer.prototype.grammarFileName = "IndexGrammar.g4";


exports.IndexGrammarLexer = IndexGrammarLexer;

