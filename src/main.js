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


// ES5 var
//
// for (var i = 0; i < LEN; i++) {
//
// }
//
// ES6 {var, let, const}

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

    let endpoints = recursiveFileReader(0, requires.length, symbols, () =>
      console.log(symbols)
    );
  });
});

function recursiveFileReader(index, maxIndex, symbols, callback) {
  if (index >= maxIndex) {
    return callback();
  } else {
    const requires = Object.keys(symbols["requires"]);
    console.log("requires", requires);
    const key = requires[index];
    console.log("key", key);
    const filepath = symbols["requires"][key]["filepath"] + ".ts";
    console.log("filepath", filepath);
    readRouterFile(filepath)
      .then((t) => {
        console.log(index, maxIndex, symbols);
        index++;
        return recursiveFileReader(index, maxIndex, symbols, callback);
      })
      .catch((err) => {
        console.log(err);
        index++;
        return recursiveFileReader(index, maxIndex, symbols, callback);
      });
  }
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
      return resolve(routerVisitor.visit(tree));
    });
  });
}

function toJSON(symbols) {
  console.log("Resolving promise");
  console.log(JSON.stringify(symbols, null, 4));
  // setTimeout(() => console.log(JSON.stringify(symbols, null, 4)), 1000);
}
