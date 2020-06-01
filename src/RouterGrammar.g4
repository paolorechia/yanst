grammar RouterGrammar;
/* 
  Parser Rules
*/

/*
import * as express from "express";
this.router = express.Router();
this.router.get("/", (req, res, next) => {
*/

routerfile: myline+ ;

myline: (import_) ;

import_ : IMPORT ASTERISK AS (IDENT|EXPRESS) FROM MODULE END_STATEMENT ;
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

LINE_COMMENT: '//' ~[\r\n]* -> skip ;

ASTERISK: '*';

PROPERTY: IDENT ':' -> skip ;

FROM: 'from' ;

NUMBER : [0-9]+ ;

IDENT : [_a-zA-Z]+[_a-zA-Z0-9\-]* ;

PATH : ('\''|'"') '.'* ('/' IDENT)+ '/'* ('\''|'"') ;

MODULE: ('\''|'"') IDENT ('\''|'"') ;

DONT_CARE_ARGS : '(' IDENT ')' ;

ANY: . ;

// ANYTHING : (CONST|LET|VAR|WHITESPACE|EQUAL|DOT|IMPORT|IDENT|NUMBER|PATH)+ ;
