grammar IndexGrammar;
/* 
  Parser Rules
*/

// app.use('/users', usersRouter);
// indexfile : express;

// indexfile : require;

indexfile : myline+ ;

myline: (express|require|useroute|import_statement) ;

express: (CONST|VAR|LET) IDENT EQUAL EXPRESS '(' ')' END_STATEMENT ;

require: (CONST|VAR|LET) IDENT EQUAL REQUIRE '(' PATH ')' DONT_CARE_ARGS END_STATEMENT ;

useroute: IDENT DOT USE '(' PATH COMMA IDENT ')' END_STATEMENT ;

import_statement: IMPORT END_STATEMENT;

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

LINE_COMMENT: '//' ~[\r\n]* -> skip ;

// STAR: '*';

PROPERTY: IDENT ':' -> skip ;

FROM: 'from' ;

NUMBER : [0-9]+ ;

IDENT : [_a-zA-Z]+[_a-zA-Z0-9\-]* ;

PATH : ('\''|'"') '.'* ('/' IDENT)+ '/'* ('\''|'"') ;

MODULE: ('\''|'"') IDENT ('\''|'"') ;

DONT_CARE_ARGS : '(' IDENT ')' ;

ANY: . ;

// ANYTHING : (CONST|LET|VAR|WHITESPACE|EQUAL|DOT|IMPORT|IDENT|NUMBER|PATH)+ ;
