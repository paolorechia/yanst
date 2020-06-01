// Generated from RouterGrammar.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002%\u00eb\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0005\u0005]\n\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0007",
    "\u0013\u009c\n\u0013\f\u0013\u000e\u0013\u009f\u000b\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001d\u0006\u001d\u00c8\n\u001d\r\u001d\u000e\u001d",
    "\u00c9\u0003\u001e\u0006\u001e\u00cd\n\u001e\r\u001e\u000e\u001e\u00ce",
    "\u0003\u001e\u0007\u001e\u00d2\n\u001e\f\u001e\u000e\u001e\u00d5\u000b",
    "\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0007\u001f\u00da\n\u001f",
    "\f\u001f\u000e\u001f\u00dd\u000b\u001f\u0003 \u0003 \u0003!\u0003!\u0003",
    "!\u0003!\u0003\"\u0003\"\u0003\"\u0003#\u0003#\u0003$\u0003$\u0002\u0002",
    "%\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f",
    "\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d",
    "\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017-\u0018",
    "/\u00191\u001a3\u001b5\u001c7\u001d9\u001e;\u001f= ?!A\"C#E$G%\u0003",
    "\u0002\b\u0004\u0002\u000b\u000b\"\"\u0004\u0002\f\f\u000f\u000f\u0003",
    "\u00022;\u0005\u0002C\\aac|\u0007\u0002//2;C\\aac|\u0004\u0002$$))\u0002",
    "\u00f1\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002",
    "\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002",
    "\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002",
    "\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002",
    "\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002",
    "\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002",
    "\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002",
    "\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002",
    "\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002",
    "\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002\u0002\u0002",
    "+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003",
    "\u0002\u0002\u0002\u00021\u0003\u0002\u0002\u0002\u00023\u0003\u0002",
    "\u0002\u0002\u00025\u0003\u0002\u0002\u0002\u00027\u0003\u0002\u0002",
    "\u0002\u00029\u0003\u0002\u0002\u0002\u0002;\u0003\u0002\u0002\u0002",
    "\u0002=\u0003\u0002\u0002\u0002\u0002?\u0003\u0002\u0002\u0002\u0002",
    "A\u0003\u0002\u0002\u0002\u0002C\u0003\u0002\u0002\u0002\u0002E\u0003",
    "\u0002\u0002\u0002\u0002G\u0003\u0002\u0002\u0002\u0003I\u0003\u0002",
    "\u0002\u0002\u0005P\u0003\u0002\u0002\u0002\u0007T\u0003\u0002\u0002",
    "\u0002\t\\\u0003\u0002\u0002\u0002\u000b^\u0003\u0002\u0002\u0002\r",
    "`\u0003\u0002\u0002\u0002\u000fb\u0003\u0002\u0002\u0002\u0011h\u0003",
    "\u0002\u0002\u0002\u0013l\u0003\u0002\u0002\u0002\u0015p\u0003\u0002",
    "\u0002\u0002\u0017r\u0003\u0002\u0002\u0002\u0019t\u0003\u0002\u0002",
    "\u0002\u001bx\u0003\u0002\u0002\u0002\u001d\u0080\u0003\u0002\u0002",
    "\u0002\u001f\u0087\u0003\u0002\u0002\u0002!\u008f\u0003\u0002\u0002",
    "\u0002#\u0092\u0003\u0002\u0002\u0002%\u0097\u0003\u0002\u0002\u0002",
    "\'\u00a2\u0003\u0002\u0002\u0002)\u00a4\u0003\u0002\u0002\u0002+\u00a9",
    "\u0003\u0002\u0002\u0002-\u00ab\u0003\u0002\u0002\u0002/\u00ad\u0003",
    "\u0002\u0002\u00021\u00b2\u0003\u0002\u0002\u00023\u00b6\u0003\u0002",
    "\u0002\u00025\u00bb\u0003\u0002\u0002\u00027\u00bf\u0003\u0002\u0002",
    "\u00029\u00c7\u0003\u0002\u0002\u0002;\u00cc\u0003\u0002\u0002\u0002",
    "=\u00d6\u0003\u0002\u0002\u0002?\u00de\u0003\u0002\u0002\u0002A\u00e0",
    "\u0003\u0002\u0002\u0002C\u00e4\u0003\u0002\u0002\u0002E\u00e7\u0003",
    "\u0002\u0002\u0002G\u00e9\u0003\u0002\u0002\u0002IJ\u0007T\u0002\u0002",
    "JK\u0007q\u0002\u0002KL\u0007w\u0002\u0002LM\u0007v\u0002\u0002MN\u0007",
    "g\u0002\u0002NO\u0007t\u0002\u0002O\u0004\u0003\u0002\u0002\u0002PQ",
    "\t\u0002\u0002\u0002QR\u0003\u0002\u0002\u0002RS\b\u0003\u0002\u0002",
    "S\u0006\u0003\u0002\u0002\u0002TU\t\u0003\u0002\u0002UV\u0003\u0002",
    "\u0002\u0002VW\b\u0004\u0002\u0002W\b\u0003\u0002\u0002\u0002X]\u0005",
    "\u0007\u0004\u0002YZ\u0005\u000b\u0006\u0002Z[\u0005\u0007\u0004\u0002",
    "[]\u0003\u0002\u0002\u0002\\X\u0003\u0002\u0002\u0002\\Y\u0003\u0002",
    "\u0002\u0002]\n\u0003\u0002\u0002\u0002^_\u0007=\u0002\u0002_\f\u0003",
    "\u0002\u0002\u0002`a\u0007.\u0002\u0002a\u000e\u0003\u0002\u0002\u0002",
    "bc\u0007e\u0002\u0002cd\u0007q\u0002\u0002de\u0007p\u0002\u0002ef\u0007",
    "u\u0002\u0002fg\u0007v\u0002\u0002g\u0010\u0003\u0002\u0002\u0002hi",
    "\u0007n\u0002\u0002ij\u0007g\u0002\u0002jk\u0007v\u0002\u0002k\u0012",
    "\u0003\u0002\u0002\u0002lm\u0007x\u0002\u0002mn\u0007c\u0002\u0002n",
    "o\u0007t\u0002\u0002o\u0014\u0003\u0002\u0002\u0002pq\u0007?\u0002\u0002",
    "q\u0016\u0003\u0002\u0002\u0002rs\u00070\u0002\u0002s\u0018\u0003\u0002",
    "\u0002\u0002tu\u0007w\u0002\u0002uv\u0007u\u0002\u0002vw\u0007g\u0002",
    "\u0002w\u001a\u0003\u0002\u0002\u0002xy\u0007t\u0002\u0002yz\u0007g",
    "\u0002\u0002z{\u0007s\u0002\u0002{|\u0007w\u0002\u0002|}\u0007k\u0002",
    "\u0002}~\u0007t\u0002\u0002~\u007f\u0007g\u0002\u0002\u007f\u001c\u0003",
    "\u0002\u0002\u0002\u0080\u0081\u0007k\u0002\u0002\u0081\u0082\u0007",
    "o\u0002\u0002\u0082\u0083\u0007r\u0002\u0002\u0083\u0084\u0007q\u0002",
    "\u0002\u0084\u0085\u0007t\u0002\u0002\u0085\u0086\u0007v\u0002\u0002",
    "\u0086\u001e\u0003\u0002\u0002\u0002\u0087\u0088\u0007g\u0002\u0002",
    "\u0088\u0089\u0007z\u0002\u0002\u0089\u008a\u0007r\u0002\u0002\u008a",
    "\u008b\u0007t\u0002\u0002\u008b\u008c\u0007g\u0002\u0002\u008c\u008d",
    "\u0007u\u0002\u0002\u008d\u008e\u0007u\u0002\u0002\u008e \u0003\u0002",
    "\u0002\u0002\u008f\u0090\u0007c\u0002\u0002\u0090\u0091\u0007u\u0002",
    "\u0002\u0091\"\u0003\u0002\u0002\u0002\u0092\u0093\u0007v\u0002\u0002",
    "\u0093\u0094\u0007j\u0002\u0002\u0094\u0095\u0007k\u0002\u0002\u0095",
    "\u0096\u0007u\u0002\u0002\u0096$\u0003\u0002\u0002\u0002\u0097\u0098",
    "\u00071\u0002\u0002\u0098\u0099\u00071\u0002\u0002\u0099\u009d\u0003",
    "\u0002\u0002\u0002\u009a\u009c\n\u0003\u0002\u0002\u009b\u009a\u0003",
    "\u0002\u0002\u0002\u009c\u009f\u0003\u0002\u0002\u0002\u009d\u009b\u0003",
    "\u0002\u0002\u0002\u009d\u009e\u0003\u0002\u0002\u0002\u009e\u00a0\u0003",
    "\u0002\u0002\u0002\u009f\u009d\u0003\u0002\u0002\u0002\u00a0\u00a1\b",
    "\u0013\u0002\u0002\u00a1&\u0003\u0002\u0002\u0002\u00a2\u00a3\u0007",
    ",\u0002\u0002\u00a3(\u0003\u0002\u0002\u0002\u00a4\u00a5\u0005;\u001e",
    "\u0002\u00a5\u00a6\u0007<\u0002\u0002\u00a6\u00a7\u0003\u0002\u0002",
    "\u0002\u00a7\u00a8\b\u0015\u0002\u0002\u00a8*\u0003\u0002\u0002\u0002",
    "\u00a9\u00aa\u0007*\u0002\u0002\u00aa,\u0003\u0002\u0002\u0002\u00ab",
    "\u00ac\u0007+\u0002\u0002\u00ac.\u0003\u0002\u0002\u0002\u00ad\u00ae",
    "\u0007h\u0002\u0002\u00ae\u00af\u0007t\u0002\u0002\u00af\u00b0\u0007",
    "q\u0002\u0002\u00b0\u00b1\u0007o\u0002\u0002\u00b10\u0003\u0002\u0002",
    "\u0002\u00b2\u00b3\u0007i\u0002\u0002\u00b3\u00b4\u0007g\u0002\u0002",
    "\u00b4\u00b5\u0007v\u0002\u0002\u00b52\u0003\u0002\u0002\u0002\u00b6",
    "\u00b7\u0007r\u0002\u0002\u00b7\u00b8\u0007q\u0002\u0002\u00b8\u00b9",
    "\u0007u\u0002\u0002\u00b9\u00ba\u0007v\u0002\u0002\u00ba4\u0003\u0002",
    "\u0002\u0002\u00bb\u00bc\u0007r\u0002\u0002\u00bc\u00bd\u0007w\u0002",
    "\u0002\u00bd\u00be\u0007v\u0002\u0002\u00be6\u0003\u0002\u0002\u0002",
    "\u00bf\u00c0\u0007f\u0002\u0002\u00c0\u00c1\u0007g\u0002\u0002\u00c1",
    "\u00c2\u0007n\u0002\u0002\u00c2\u00c3\u0007g\u0002\u0002\u00c3\u00c4",
    "\u0007v\u0002\u0002\u00c4\u00c5\u0007g\u0002\u0002\u00c58\u0003\u0002",
    "\u0002\u0002\u00c6\u00c8\t\u0004\u0002\u0002\u00c7\u00c6\u0003\u0002",
    "\u0002\u0002\u00c8\u00c9\u0003\u0002\u0002\u0002\u00c9\u00c7\u0003\u0002",
    "\u0002\u0002\u00c9\u00ca\u0003\u0002\u0002\u0002\u00ca:\u0003\u0002",
    "\u0002\u0002\u00cb\u00cd\t\u0005\u0002\u0002\u00cc\u00cb\u0003\u0002",
    "\u0002\u0002\u00cd\u00ce\u0003\u0002\u0002\u0002\u00ce\u00cc\u0003\u0002",
    "\u0002\u0002\u00ce\u00cf\u0003\u0002\u0002\u0002\u00cf\u00d3\u0003\u0002",
    "\u0002\u0002\u00d0\u00d2\t\u0006\u0002\u0002\u00d1\u00d0\u0003\u0002",
    "\u0002\u0002\u00d2\u00d5\u0003\u0002\u0002\u0002\u00d3\u00d1\u0003\u0002",
    "\u0002\u0002\u00d3\u00d4\u0003\u0002\u0002\u0002\u00d4<\u0003\u0002",
    "\u0002\u0002\u00d5\u00d3\u0003\u0002\u0002\u0002\u00d6\u00db\u00071",
    "\u0002\u0002\u00d7\u00da\u0005;\u001e\u0002\u00d8\u00da\u00071\u0002",
    "\u0002\u00d9\u00d7\u0003\u0002\u0002\u0002\u00d9\u00d8\u0003\u0002\u0002",
    "\u0002\u00da\u00dd\u0003\u0002\u0002\u0002\u00db\u00d9\u0003\u0002\u0002",
    "\u0002\u00db\u00dc\u0003\u0002\u0002\u0002\u00dc>\u0003\u0002\u0002",
    "\u0002\u00dd\u00db\u0003\u0002\u0002\u0002\u00de\u00df\t\u0007\u0002",
    "\u0002\u00df@\u0003\u0002\u0002\u0002\u00e0\u00e1\t\u0007\u0002\u0002",
    "\u00e1\u00e2\u0005;\u001e\u0002\u00e2\u00e3\t\u0007\u0002\u0002\u00e3",
    "B\u0003\u0002\u0002\u0002\u00e4\u00e5\u0007?\u0002\u0002\u00e5\u00e6",
    "\u0007@\u0002\u0002\u00e6D\u0003\u0002\u0002\u0002\u00e7\u00e8\u0007",
    "}\u0002\u0002\u00e8F\u0003\u0002\u0002\u0002\u00e9\u00ea\u000b\u0002",
    "\u0002\u0002\u00eaH\u0003\u0002\u0002\u0002\n\u0002\\\u009d\u00c9\u00ce",
    "\u00d3\u00d9\u00db\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function RouterGrammarLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

RouterGrammarLexer.prototype = Object.create(antlr4.Lexer.prototype);
RouterGrammarLexer.prototype.constructor = RouterGrammarLexer;

Object.defineProperty(RouterGrammarLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

RouterGrammarLexer.EOF = antlr4.Token.EOF;
RouterGrammarLexer.T__0 = 1;
RouterGrammarLexer.WHITESPACE = 2;
RouterGrammarLexer.NEWLINE = 3;
RouterGrammarLexer.END_STATEMENT = 4;
RouterGrammarLexer.SEMICOLON = 5;
RouterGrammarLexer.COMMA = 6;
RouterGrammarLexer.CONST = 7;
RouterGrammarLexer.LET = 8;
RouterGrammarLexer.VAR = 9;
RouterGrammarLexer.EQUAL = 10;
RouterGrammarLexer.DOT = 11;
RouterGrammarLexer.USE = 12;
RouterGrammarLexer.REQUIRE = 13;
RouterGrammarLexer.IMPORT = 14;
RouterGrammarLexer.EXPRESS = 15;
RouterGrammarLexer.AS = 16;
RouterGrammarLexer.THIS = 17;
RouterGrammarLexer.LINE_COMMENT = 18;
RouterGrammarLexer.ASTERISK = 19;
RouterGrammarLexer.PROPERTY = 20;
RouterGrammarLexer.LPAREN = 21;
RouterGrammarLexer.RPAREN = 22;
RouterGrammarLexer.FROM = 23;
RouterGrammarLexer.GET = 24;
RouterGrammarLexer.POST = 25;
RouterGrammarLexer.PUT = 26;
RouterGrammarLexer.DELETE = 27;
RouterGrammarLexer.NUMBER = 28;
RouterGrammarLexer.IDENT = 29;
RouterGrammarLexer.URLPATH = 30;
RouterGrammarLexer.QUOTE = 31;
RouterGrammarLexer.MODULE = 32;
RouterGrammarLexer.ARROW = 33;
RouterGrammarLexer.LBRACKET = 34;
RouterGrammarLexer.ANY = 35;

RouterGrammarLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

RouterGrammarLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

RouterGrammarLexer.prototype.literalNames = [ null, "'Router'", null, null, 
                                              null, "';'", "','", "'const'", 
                                              "'let'", "'var'", "'='", "'.'", 
                                              "'use'", "'require'", "'import'", 
                                              "'express'", "'as'", "'this'", 
                                              null, "'*'", null, "'('", 
                                              "')'", "'from'", "'get'", 
                                              "'post'", "'put'", "'delete'", 
                                              null, null, null, null, null, 
                                              "'=>'", "'{'" ];

RouterGrammarLexer.prototype.symbolicNames = [ null, null, "WHITESPACE", 
                                               "NEWLINE", "END_STATEMENT", 
                                               "SEMICOLON", "COMMA", "CONST", 
                                               "LET", "VAR", "EQUAL", "DOT", 
                                               "USE", "REQUIRE", "IMPORT", 
                                               "EXPRESS", "AS", "THIS", 
                                               "LINE_COMMENT", "ASTERISK", 
                                               "PROPERTY", "LPAREN", "RPAREN", 
                                               "FROM", "GET", "POST", "PUT", 
                                               "DELETE", "NUMBER", "IDENT", 
                                               "URLPATH", "QUOTE", "MODULE", 
                                               "ARROW", "LBRACKET", "ANY" ];

RouterGrammarLexer.prototype.ruleNames = [ "T__0", "WHITESPACE", "NEWLINE", 
                                           "END_STATEMENT", "SEMICOLON", 
                                           "COMMA", "CONST", "LET", "VAR", 
                                           "EQUAL", "DOT", "USE", "REQUIRE", 
                                           "IMPORT", "EXPRESS", "AS", "THIS", 
                                           "LINE_COMMENT", "ASTERISK", "PROPERTY", 
                                           "LPAREN", "RPAREN", "FROM", "GET", 
                                           "POST", "PUT", "DELETE", "NUMBER", 
                                           "IDENT", "URLPATH", "QUOTE", 
                                           "MODULE", "ARROW", "LBRACKET", 
                                           "ANY" ];

RouterGrammarLexer.prototype.grammarFileName = "RouterGrammar.g4";


exports.RouterGrammarLexer = RouterGrammarLexer;

