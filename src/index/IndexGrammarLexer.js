// Generated from IndexGrammar.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0016\u009f\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0007\u00065\n\u0006\f\u0006\u000e\u00068\u000b\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0007\u0006=\n\u0006\f\u0006\u000e\u0006@\u000b",
    "\u0006\u0003\u0006\u0003\u0006\u0005\u0006D\n\u0006\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0012\u0006\u0012x\n\u0012\r\u0012\u000e\u0012y\u0003",
    "\u0013\u0006\u0013}\n\u0013\r\u0013\u000e\u0013~\u0003\u0013\u0007\u0013",
    "\u0082\n\u0013\f\u0013\u000e\u0013\u0085\u000b\u0013\u0003\u0014\u0003",
    "\u0014\u0007\u0014\u0089\n\u0014\f\u0014\u000e\u0014\u008c\u000b\u0014",
    "\u0003\u0014\u0003\u0014\u0006\u0014\u0090\n\u0014\r\u0014\u000e\u0014",
    "\u0091\u0003\u0014\u0007\u0014\u0095\n\u0014\f\u0014\u000e\u0014\u0098",
    "\u000b\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0002\u0002\u0016\u0003\u0003\u0005\u0004\u0007\u0005\t",
    "\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019",
    "\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015",
    ")\u0016\u0003\u0002\b\u0004\u0002\u000b\u000b\"\"\u0004\u0002\f\f\u000f",
    "\u000f\u0003\u00022;\u0004\u0002C\\c|\u0005\u00022;C\\c|\u0004\u0002",
    "$$))\u0002\u00a7\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003",
    "\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003",
    "\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003",
    "\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003",
    "\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003",
    "\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003",
    "\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003",
    "\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003",
    "\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002",
    "\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002",
    "\u0002\u0003+\u0003\u0002\u0002\u0002\u0005-\u0003\u0002\u0002\u0002",
    "\u0007/\u0003\u0002\u0002\u0002\t1\u0003\u0002\u0002\u0002\u000b6\u0003",
    "\u0002\u0002\u0002\rE\u0003\u0002\u0002\u0002\u000fG\u0003\u0002\u0002",
    "\u0002\u0011I\u0003\u0002\u0002\u0002\u0013O\u0003\u0002\u0002\u0002",
    "\u0015S\u0003\u0002\u0002\u0002\u0017W\u0003\u0002\u0002\u0002\u0019",
    "Y\u0003\u0002\u0002\u0002\u001b[\u0003\u0002\u0002\u0002\u001d_\u0003",
    "\u0002\u0002\u0002\u001fg\u0003\u0002\u0002\u0002!n\u0003\u0002\u0002",
    "\u0002#w\u0003\u0002\u0002\u0002%|\u0003\u0002\u0002\u0002\'\u0086\u0003",
    "\u0002\u0002\u0002)\u009b\u0003\u0002\u0002\u0002+,\u0007*\u0002\u0002",
    ",\u0004\u0003\u0002\u0002\u0002-.\u0007+\u0002\u0002.\u0006\u0003\u0002",
    "\u0002\u0002/0\t\u0002\u0002\u00020\b\u0003\u0002\u0002\u000212\t\u0003",
    "\u0002\u00022\n\u0003\u0002\u0002\u000235\u0005\u0007\u0004\u000243",
    "\u0003\u0002\u0002\u000258\u0003\u0002\u0002\u000264\u0003\u0002\u0002",
    "\u000267\u0003\u0002\u0002\u00027C\u0003\u0002\u0002\u000286\u0003\u0002",
    "\u0002\u00029D\u0005\t\u0005\u0002:>\u0005\r\u0007\u0002;=\u0005\u0007",
    "\u0004\u0002<;\u0003\u0002\u0002\u0002=@\u0003\u0002\u0002\u0002><\u0003",
    "\u0002\u0002\u0002>?\u0003\u0002\u0002\u0002?A\u0003\u0002\u0002\u0002",
    "@>\u0003\u0002\u0002\u0002AB\u0005\t\u0005\u0002BD\u0003\u0002\u0002",
    "\u0002C9\u0003\u0002\u0002\u0002C:\u0003\u0002\u0002\u0002D\f\u0003",
    "\u0002\u0002\u0002EF\u0007=\u0002\u0002F\u000e\u0003\u0002\u0002\u0002",
    "GH\u0007.\u0002\u0002H\u0010\u0003\u0002\u0002\u0002IJ\u0007e\u0002",
    "\u0002JK\u0007q\u0002\u0002KL\u0007p\u0002\u0002LM\u0007u\u0002\u0002",
    "MN\u0007v\u0002\u0002N\u0012\u0003\u0002\u0002\u0002OP\u0007n\u0002",
    "\u0002PQ\u0007g\u0002\u0002QR\u0007v\u0002\u0002R\u0014\u0003\u0002",
    "\u0002\u0002ST\u0007x\u0002\u0002TU\u0007c\u0002\u0002UV\u0007t\u0002",
    "\u0002V\u0016\u0003\u0002\u0002\u0002WX\u0007?\u0002\u0002X\u0018\u0003",
    "\u0002\u0002\u0002YZ\u00070\u0002\u0002Z\u001a\u0003\u0002\u0002\u0002",
    "[\\\u0007w\u0002\u0002\\]\u0007u\u0002\u0002]^\u0007g\u0002\u0002^\u001c",
    "\u0003\u0002\u0002\u0002_`\u0007t\u0002\u0002`a\u0007g\u0002\u0002a",
    "b\u0007s\u0002\u0002bc\u0007w\u0002\u0002cd\u0007k\u0002\u0002de\u0007",
    "t\u0002\u0002ef\u0007g\u0002\u0002f\u001e\u0003\u0002\u0002\u0002gh",
    "\u0007k\u0002\u0002hi\u0007o\u0002\u0002ij\u0007r\u0002\u0002jk\u0007",
    "q\u0002\u0002kl\u0007t\u0002\u0002lm\u0007v\u0002\u0002m \u0003\u0002",
    "\u0002\u0002no\u0007g\u0002\u0002op\u0007z\u0002\u0002pq\u0007r\u0002",
    "\u0002qr\u0007t\u0002\u0002rs\u0007g\u0002\u0002st\u0007u\u0002\u0002",
    "tu\u0007u\u0002\u0002u\"\u0003\u0002\u0002\u0002vx\t\u0004\u0002\u0002",
    "wv\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002yw\u0003\u0002\u0002",
    "\u0002yz\u0003\u0002\u0002\u0002z$\u0003\u0002\u0002\u0002{}\t\u0005",
    "\u0002\u0002|{\u0003\u0002\u0002\u0002}~\u0003\u0002\u0002\u0002~|\u0003",
    "\u0002\u0002\u0002~\u007f\u0003\u0002\u0002\u0002\u007f\u0083\u0003",
    "\u0002\u0002\u0002\u0080\u0082\t\u0006\u0002\u0002\u0081\u0080\u0003",
    "\u0002\u0002\u0002\u0082\u0085\u0003\u0002\u0002\u0002\u0083\u0081\u0003",
    "\u0002\u0002\u0002\u0083\u0084\u0003\u0002\u0002\u0002\u0084&\u0003",
    "\u0002\u0002\u0002\u0085\u0083\u0003\u0002\u0002\u0002\u0086\u008a\t",
    "\u0007\u0002\u0002\u0087\u0089\u00070\u0002\u0002\u0088\u0087\u0003",
    "\u0002\u0002\u0002\u0089\u008c\u0003\u0002\u0002\u0002\u008a\u0088\u0003",
    "\u0002\u0002\u0002\u008a\u008b\u0003\u0002\u0002\u0002\u008b\u008f\u0003",
    "\u0002\u0002\u0002\u008c\u008a\u0003\u0002\u0002\u0002\u008d\u008e\u0007",
    "1\u0002\u0002\u008e\u0090\u0005%\u0013\u0002\u008f\u008d\u0003\u0002",
    "\u0002\u0002\u0090\u0091\u0003\u0002\u0002\u0002\u0091\u008f\u0003\u0002",
    "\u0002\u0002\u0091\u0092\u0003\u0002\u0002\u0002\u0092\u0096\u0003\u0002",
    "\u0002\u0002\u0093\u0095\u00071\u0002\u0002\u0094\u0093\u0003\u0002",
    "\u0002\u0002\u0095\u0098\u0003\u0002\u0002\u0002\u0096\u0094\u0003\u0002",
    "\u0002\u0002\u0096\u0097\u0003\u0002\u0002\u0002\u0097\u0099\u0003\u0002",
    "\u0002\u0002\u0098\u0096\u0003\u0002\u0002\u0002\u0099\u009a\t\u0007",
    "\u0002\u0002\u009a(\u0003\u0002\u0002\u0002\u009b\u009c\u0007*\u0002",
    "\u0002\u009c\u009d\u0005%\u0013\u0002\u009d\u009e\u0007+\u0002\u0002",
    "\u009e*\u0003\u0002\u0002\u0002\f\u00026>Cy~\u0083\u008a\u0091\u0096",
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
IndexGrammarLexer.COMMA = 7;
IndexGrammarLexer.CONST = 8;
IndexGrammarLexer.LET = 9;
IndexGrammarLexer.VAR = 10;
IndexGrammarLexer.EQUAL = 11;
IndexGrammarLexer.DOT = 12;
IndexGrammarLexer.USE = 13;
IndexGrammarLexer.REQUIRE = 14;
IndexGrammarLexer.IMPORT = 15;
IndexGrammarLexer.EXPRESS = 16;
IndexGrammarLexer.NUMBER = 17;
IndexGrammarLexer.IDENT = 18;
IndexGrammarLexer.PATH = 19;
IndexGrammarLexer.DONT_CARE_ARGS = 20;

IndexGrammarLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

IndexGrammarLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

IndexGrammarLexer.prototype.literalNames = [ null, "'('", "')'", null, null, 
                                             null, "';'", "','", "'const'", 
                                             "'let'", "'var'", "'='", "'.'", 
                                             "'use'", "'require'", "'import'", 
                                             "'express'" ];

IndexGrammarLexer.prototype.symbolicNames = [ null, null, null, "WHITESPACE", 
                                              "NEWLINE", "END_STATEMENT", 
                                              "SEMICOLON", "COMMA", "CONST", 
                                              "LET", "VAR", "EQUAL", "DOT", 
                                              "USE", "REQUIRE", "IMPORT", 
                                              "EXPRESS", "NUMBER", "IDENT", 
                                              "PATH", "DONT_CARE_ARGS" ];

IndexGrammarLexer.prototype.ruleNames = [ "T__0", "T__1", "WHITESPACE", 
                                          "NEWLINE", "END_STATEMENT", "SEMICOLON", 
                                          "COMMA", "CONST", "LET", "VAR", 
                                          "EQUAL", "DOT", "USE", "REQUIRE", 
                                          "IMPORT", "EXPRESS", "NUMBER", 
                                          "IDENT", "PATH", "DONT_CARE_ARGS" ];

IndexGrammarLexer.prototype.grammarFileName = "IndexGrammar.g4";


exports.IndexGrammarLexer = IndexGrammarLexer;

