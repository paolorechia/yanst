grammar IndexGrammar;
/* 
  Parser Rules
*/

// app.use('/users', usersRouter);
// indexfile : express;

// indexfile : require;

indexfile : useroute;

express: (CONST|VAR|LET) WHITESPACE+ IDENT WHITESPACE* EQUAL WHITESPACE* EXPRESS WHITESPACE* '(' WHITESPACE* ')' END_STATEMENT ;

require: (CONST|VAR|LET) WHITESPACE+ IDENT WHITESPACE* EQUAL WHITESPACE REQUIRE WHITESPACE* '(' PATH ')' DONT_CARE_ARGS END_STATEMENT ;

useroute: IDENT DOT USE '(' PATH WHITESPACE* COMMA WHITESPACE* IDENT ')' END_STATEMENT ;

/* expression */


/*
  Lexer Rules
*/

WHITESPACE : (' ' | '\t') ;

NEWLINE : ('\n' | '\r') ;

END_STATEMENT : WHITESPACE* (NEWLINE | SEMICOLON WHITESPACE* NEWLINE) ;

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

NUMBER : [0-9]+ ;

IDENT : [a-zA-Z]+[a-zA-Z0-9]* ;

PATH : ('\''|'"') '.'* ('/' IDENT)+ '/'* ('\''|'"') ;

DONT_CARE_ARGS : '(' IDENT ')' ;

