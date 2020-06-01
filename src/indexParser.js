const fs = require('fs')

const antlr4 = require('antlr4/index');

const IndexGrammarLexer = require('./index/IndexGrammarLexer');
const IndexGrammarParser = require('./index/IndexGrammarParser');
const IndexListener = require('./indexListener').IndexListener;



fs.readFile('./example_index.ts', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  let input = data;

  /*
  input += 'import createError, { HttpError } from "http-errors";\n';

  input += 'import express, { Request, Response, NextFunction } from "express";\n';
  */
  input += 'import path from "path";\n';
  input += "import cookieParser from 'cookie-parser';\n";

  input += 'const app = express();\n'
  input += "const cardsRouter = require('./routes/cards')(db);\n";
  input += "const userRouter = require('./routes/users')(db);\n";
  input += "app.use('/cards', cardsRouter);\n";
  input += "app.use('/users', userRouter);\n";

  console.log(input);

  const chars = new antlr4.InputStream(input);
  const lexer = new IndexGrammarLexer.IndexGrammarLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new IndexGrammarParser.IndexGrammarParser(tokens);
  parser.buildParseTrees = true;

  const tree = parser.indexfile();
  const indexListener = new IndexListener();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(indexListener, tree);

})
