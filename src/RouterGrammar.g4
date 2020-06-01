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

routerline: (import_|instance|route) ;

import_ : IMPORT ASTERISK AS (IDENT|EXPRESS) FROM MODULE END_STATEMENT ;

instance: (IDENT| THIS DOT IDENT) EQUAL (IDENT|EXPRESS) DOT 'Router' LPAREN RPAREN END_STATEMENT ;

route: (IDENT | THIS DOT IDENT) DOT httpmethod LPAREN QUOTE URLPATH QUOTE COMMA LPAREN args RPAREN ARROW LBRACKET ;

httpmethod: (GET|POST|PUT|DELETE) ;

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

DELETE: 'delete' ;

NUMBER : [0-9]+ ;

IDENT : [_a-zA-Z]+[_a-zA-Z0-9\-]* ;

URLPATH : '/' (IDENT|'/')* ;

QUOTE: ('\''|'"') ;

MODULE: ('\''|'"') IDENT ('\''|'"') ;

ARROW: '=>' ;

LBRACKET: '{' ;

ANY: . ;

