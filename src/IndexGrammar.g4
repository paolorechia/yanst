grammar IndexGrammar;
/* 
  Parser Rules
*/

// const cardsRouter = require('./routes/cards')(db);

// const app = express();

// app.use('/users', usersRouter);
// declaration : (CONST|VAR|LET) WHITESPACE+ IDENT WHITESPACE* SEMICOLON;


// indexfile : express;

indexfile : require;

express: (CONST|VAR|LET) WHITESPACE+ IDENT WHITESPACE* EQUAL WHITESPACE* EXPRESS WHITESPACE* '(' WHITESPACE* ')' END_STATEMENT ;

require: (CONST|VAR|LET) WHITESPACE+ IDENT WHITESPACE* EQUAL WHITESPACE REQUIRE WHITESPACE* '(' PATH ')' DONT_CARE_ARGS END_STATEMENT ;

/* expression */


/*
  Lexer Rules
*/

WHITESPACE : (' ' | '\t') ;

NEWLINE : ('\n' | '\r') ;

END_STATEMENT : WHITESPACE* (NEWLINE | SEMICOLON WHITESPACE* NEWLINE) ;

SEMICOLON: ';' ;

CONST : 'const' ;

LET : 'let' ;

VAR : 'var' ;

EQUAL: '=' ;

REQUIRE : 'require' ;

IMPORT : 'import' ;

EXPRESS : 'express' ;

NUMBER : [0-9]+ ;

IDENT : [a-zA-Z]+[a-zA-Z0-9]* ;

PATH : ('\''|'"') '.'* ('/' IDENT)+ '/'* ('\''|'"') ;

DONT_CARE_ARGS : '(' IDENT ')' ;

