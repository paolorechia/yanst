#!/usr/bin/env node


const yargs = require("yargs");

const options = yargs
 .usage("Usage: -f <file>")
 .option("f", { alias: "file", describe: "Your app.js file", type: "string", demandOption: true })
 .argv;

const fs = require("fs");

const antlr4 = require("antlr4/index");

const IndexGrammarLexer = require("./index/IndexGrammarLexer");
const IndexGrammarParser = require("./index/IndexGrammarParser");
const IndexVisitor = require("./indexVisitor").IndexVisitor;

const RouterGrammarLexer = require("./router/RouterGrammarLexer");

const RouterGrammarParser = require("./router/RouterGrammarParser");

const RouterGrammarVisitor = require("./router/RouterGrammarVisitor");

const RouterVisitor = require("./routerVisitor").RouterVisitor;

let symbols;

const inputFile = options.file;

if (fs.existsSync(options.file)) {
  main(options.file); 
} else {
  console.error("File '" + options.file +  "' was not found!");
};

function main(inputFile) {
  fs.readFile(inputFile, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    let input = data;

    const chars = new antlr4.InputStream(input);
    const lexer = new IndexGrammarLexer.IndexGrammarLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new IndexGrammarParser.IndexGrammarParser(tokens);
    const tree = parser.indexfile();
    const indexVisitor = new IndexVisitor();
    symbols = indexVisitor.visit(tree);
    const requires = Object.keys(symbols["requires"]);
    console.log(symbols);
    const endpoints = requires.map( r => {
      return readRouterFile(symbols["requires"][r]["filepath"] + ".ts");
    })
    setTimeout(() => console.log(endpoints), 3000 );
  });
}

function readRouterFile(filepath) {
    fs.readFile(filepath, "utf8", (err, data) => {
      if (err) {
        return err;
      }
      if (!data) {
        return "Could not open file " + filepath;
      }
      var input = data;
      const chars = new antlr4.InputStream(input);
      const lexer = new RouterGrammarLexer.RouterGrammarLexer(chars);
      const tokens = new antlr4.CommonTokenStream(lexer);
      const parser = new RouterGrammarParser.RouterGrammarParser(tokens);

      console.log(filepath)
      const tree = parser.routerfile();
      const routerVisitor = new RouterVisitor();
      const endpoints = routerVisitor.visit(tree);
      console.log(endpoints);
      return endpoints;
    });
}

function toJSON(symbols) {
  return JSON.stringify(symbols, null, 4);
}


