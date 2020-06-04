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

    let endpoints = recursiveFileReader(0, requires.length, symbols);
    console.log(endpoints)
    endpoints.then( t => {
      console.log("Resolving")
      console.log(toJSON(t))
    });
  });
}

function recursiveFileReader(index, maxIndex, symbols) {
  return new Promise(function(resolve) {
    if (index >= maxIndex) {
      return resolve(symbols);
    } else {
      const requires = Object.keys(symbols["requires"]);
      const key = requires[index];
      const filepath = symbols["requires"][key]["filepath"] + ".ts";
      readRouterFile(filepath)
        .then((endpoints) => {
          index++;
          symbols["requires"][key]["endpoints"] = endpoints;
          recursiveFileReader(index, maxIndex, symbols)
            .then( endpoints => {
              resolve(recursiveFileReader(index, maxIndex, symbols));
            });
        })
        .catch((err) => {
          console.log(err);
          index++;
          return resolve(recursiveFileReader(index, maxIndex, symbols));
        });
    }
  })
}

function readRouterFile(filepath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filepath, "utf8", (err, data) => {
      if (err) {
        return reject(err);
      }
      if (!data) {
        return reject("Could not open file " + filepath);
      }
      var input = data;
      const chars = new antlr4.InputStream(input);
      const lexer = new RouterGrammarLexer.RouterGrammarLexer(chars);
      const tokens = new antlr4.CommonTokenStream(lexer);
      const parser = new RouterGrammarParser.RouterGrammarParser(tokens);

      const tree = parser.routerfile();
      const routerVisitor = new RouterVisitor();
      const endpoints = routerVisitor.visit(tree);
      console.log(endpoints);
      return resolve(endpoints)
    });
  });
}

function toJSON(symbols) {
  return JSON.stringify(symbols, null, 4);
}

