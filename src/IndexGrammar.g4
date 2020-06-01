grammar IndexGrammar;
/* 
  Parser Rules
*/

// const cardsRouter = require('./routes/cards')(db);

// const app = express();

// app.use('/users', usersRouter);
// declaration : (CONST|VAR|LET) WHITESPACE+ IDENT WHITESPACE* SEMICOLON;


index_file : express;

express: (CONST|VAR|LET) WHITESPACE+ IDENT WHITESPACE* EQUAL WHITESPACE* EXPRESS WHITESPACE* '(' WHITESPACE* ')' WHITESPACE* (NEWLINE | SEMICOLON WHITESPACE* NEWLINE) ;

/* expression */




/*
  Lexer Rules
*/

WHITESPACE : (' ' | '\t') ;

NEWLINE : ('\n' | '\r') ;

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

