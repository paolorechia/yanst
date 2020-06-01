const antlr4 = require('antlr4/index');

const IndexGrammarLexer = require('./index/IndexGrammarLexer');
const IndexGrammarParser = require('./index/IndexGrammarParser');
const IndexListener = require('./indexListener').IndexListener;


// const input = 'const app = express();\n'
const input = "const cardsRouter = require('./routes/cards')(db);\n";

const chars = new antlr4.InputStream(input);
const lexer = new IndexGrammarLexer.IndexGrammarLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new IndexGrammarParser.IndexGrammarParser(tokens);
parser.buildParseTrees = true;

const tree = parser.indexfile();
const indexListener = new IndexListener();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(indexListener, tree);
