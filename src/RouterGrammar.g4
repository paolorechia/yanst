grammar RouterGrammar;
/* 
  Parser Rules
*/

/*
import * as express from "express";
this.router = express.Router();
this.router.get("/", (req, res, next) => {
*/

routerfile: routerline+ ;

routerline: (import_|ignored_import|instance|route|function) ;

import_ : IMPORT ASTERISK AS (IDENT|EXPRESS) FROM MODULE END_STATEMENT ;

ignored_import : IMPORT LBRACKET END_STATEMENT;

instance: (IDENT| THIS DOT IDENT) EQUAL (IDENT|EXPRESS) DOT ROUTER LPAREN RPAREN END_STATEMENT ;

function: IDENT EQUAL LPAREN RPAREN ':' (IDENT|EXPRESS|DOT)+ ARROW LBRACKET NEWLINE ;

route: (IDENT | THIS DOT IDENT) DOT httpmethod LPAREN QUOTE URLPATH QUOTE COMMA LPAREN args RPAREN ARROW LBRACKET ;

httpmethod: (GET|POST|PUT|DELETE|PATCH) ;

args: ( IDENT | IDENT ',' )* ;


/* expression */


/*
  Lexer Rules
*/

WHITESPACE : (' ' | '\t') -> skip;

NEWLINE : ('\n' | '\r') -> skip;

END_STATEMENT : (NEWLINE | SEMICOLON NEWLINE) ;

SEMICOLON: ';' ;

COMMA: ',' ;

CONST : 'const' ;

LET : 'let' ;

VAR : 'var' ;

EQUAL: '=' ;

DOT: '.' ;

USE: 'use' ;

REQUIRE : 'require' ;

IMPORT : 'import' ;

EXPRESS : 'express' ;

AS: 'as' ;

THIS: 'this' ;

LINE_COMMENT: '//' ~[\r\n]* -> skip ;

ASTERISK: '*';

PROPERTY: IDENT ':' -> skip ;

LPAREN: '(' ;

RPAREN: ')' ;

FROM: 'from' ;

GET: 'get' ;

POST: 'post' ;

PUT: 'put' ;

PATCH: 'patch';

DELETE: 'delete' ;

ROUTER: 'Router' ;

NUMBER : [0-9]+ ;

IDENT : [_a-zA-Z]+[_a-zA-Z0-9\-]* ;

URLARG: ':' IDENT ;

URLPATH : '/' (IDENT|'/'|URLARG)* ;

QUOTE: ('\''|'"') ;

MODULE: ('\''|'"') IDENT ('\''|'"') ;

ARROW: '=>' ;

LBRACKET: '{' ;

RBRACKET: '}' -> skip ;

ANY: . ;

