const fs = require("fs");

const antlr4 = require("antlr4/index");

const IndexGrammarLexer = require("../index/IndexGrammarLexer");
const IndexGrammarParser = require("../index/IndexGrammarParser");
const IndexVisitor = require("../indexVisitor").IndexVisitor;

var expect = require('chai').expect

describe('Stub', function () {
  describe('Chain expect example', function () {
    it('should return -1 when the value is not present', function () {
      expect([1,2,3]).to.be.an('array');
      expect([1,2,3]).to.include(1);
      expect([1,2,3]).to.not.include(4);
    });
  });
});

describe("Test IndexParser", function() {
//  describe()

});

