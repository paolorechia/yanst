const fs = require('fs')

const antlr4 = require('antlr4/index');

const IndexGrammarLexer = require('./index/IndexGrammarLexer');
const IndexGrammarParser = require('./index/IndexGrammarParser');
const IndexVisitor = require('./indexVisitor').IndexVisitor;

const RouterGrammarLexer = require('./router/RouterGrammarLexer');

const RouterGrammarParser = require('./router/RouterGrammarParser');

const RouterGrammarVisitor = require('./router/RouterGrammarVisitor');

const RouterVisitor = require('./routerVisitor').RouterVisitor;


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
      // console.log(key);
      filepath = symbols['requires'][key]['filepath'] + ".ts";
      console.log("Parsing file", filepath);
      fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) {
          console.error(err)
          return 
        }
        // var input = 'import * as express from "express";\n';
        var input = "this.router = express.Router();\n";
        const chars = new antlr4.InputStream(input);
        const lexer = new RouterGrammarLexer.RouterGrammarLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new RouterGrammarParser.RouterGrammarParser(tokens);
        // parser.buildParseTrees = true;

        const tree = parser.routerfile();
        const routerVisitor = new RouterVisitor();
        const routes = routerVisitor.visit(tree);
      })
    }
  )

  // antlr4.tree.ParseTreeWalker.DEFAULT.walk(indexVisitor, tree);
})
