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

routerline: (import_|instance) ;

import_ : IMPORT ASTERISK AS (IDENT|EXPRESS) FROM MODULE END_STATEMENT ;

instance: (IDENT| THIS DOT IDENT) EQUAL (IDENT|EXPRESS) DOT 'Router' LPAREN RPAREN END_STATEMENT ;
// ignore: ()* END_STATEMENT ;


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

NUMBER : [0-9]+ ;

IDENT : [_a-zA-Z]+[_a-zA-Z0-9\-]* ;

PATH : ('\''|'"') '.'* ('/' IDENT)+ '/'* ('\''|'"') ;

MODULE: ('\''|'"') IDENT ('\''|'"') ;

DONT_CARE_ARGS : '(' IDENT ')' ;

ANY: . ;

// ANYTHING : (CONST|LET|VAR|WHITESPACE|EQUAL|DOT|IMPORT|IDENT|NUMBER|PATH)+ ;
