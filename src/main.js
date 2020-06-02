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

const promise = new Promise(function (resolve, reject) {
  fs.readFile("./example_index.ts", "utf8", (err, data) => {
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
    endpoints.then(
      success => console.log(success)
    ).catch(
      error => console.log(error)
    )
    console.log(endpoints);
  });
});

function recursiveFileReader(index, maxIndex, symbols) {
  return new Promise((resolve) => {
    if (index >= maxIndex) {
      return resolve();
    }
    else {
      const requires = Object.keys(symbols["requires"]);
      console.log("requires", requires);
      const key = requires[index]
      console.log("key", key)
      const filepath = symbols["requires"][key]["filepath"] + ".ts"
      console.log("filepath", filepath);
      readRouterFile(filepath).then(
        t => {
          console.log(index, maxIndex, symbols);
          index++;
          return resolve(recursiveFileReader(index, maxIndex, symbols));
        }
      ).catch(
        failure => console.log(failure)
      )
    }
  });
};

function readRouterFile(filepath) {
    return new Promise(function(resolve, reject) {
    fs.readFile(filepath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      }
      if (!data) {
        reject("Could not open file " + filepath);
      }
      var input = data;
      const chars = new antlr4.InputStream(input);
      const lexer = new RouterGrammarLexer.RouterGrammarLexer(chars);
      const tokens = new antlr4.CommonTokenStream(lexer);
      const parser = new RouterGrammarParser.RouterGrammarParser(tokens);

      const tree = parser.routerfile();
      const routerVisitor = new RouterVisitor();
      resolve(routerVisitor.visit(tree));
      });
    });
}

function toJSON(symbols) {
  console.log("Resolving promise");
  console.log(JSON.stringify(symbols, null, 4));
  // setTimeout(() => console.log(JSON.stringify(symbols, null, 4)), 1000);
}

promise.then(toJSON(symbols));
