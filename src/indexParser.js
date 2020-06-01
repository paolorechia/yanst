const fs = require('fs')

const antlr4 = require('antlr4/index');

const IndexGrammarLexer = require('./index/IndexGrammarLexer');
const IndexGrammarParser = require('./index/IndexGrammarParser');
const IndexVisitor = require('./indexVisitor').IndexVisitor;



fs.readFile('./example_index.ts', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  } let input = data;

  const chars = new antlr4.InputStream(input);
  const lexer = new IndexGrammarLexer.IndexGrammarLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new IndexGrammarParser.IndexGrammarParser(tokens);
  // parser.buildParseTrees = true;

  const tree = parser.indexfile();
  const indexVisitor = new IndexVisitor();
  const symbols = indexVisitor.visit(tree);
  console.log(symbols);

  Object.keys(symbols['requires']).forEach(
    (key) => {
      filepath = symbols['requires'][key]['filepath'] + ".ts";
      console.log(filepath);
      fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) {
          console.error(err)
          return 
        }
      })
    }
  )

  // antlr4.tree.ParseTreeWalker.DEFAULT.walk(indexVisitor, tree);
})
