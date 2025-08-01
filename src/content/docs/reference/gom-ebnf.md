---
title: Gom Extended Backus-Naur Form (EBNF)
---

```txt
program = importDeclaration* , typeOrFunctionDefinition* , mainFunction;

importDeclaration = "import" , stringLiteral , ";";

typeOrFunctionDefinition = typeDefinition | functionDefinition;

typeDefinition = "type" , identifier , "=" , gomType , ";";

functionDefinition = "function" , identifier , "(" , argumentItem* , ")" , functionReturnType? ,
	"{" , statement+ , "}";

mainFunction = "function" , "main" , "(" , argumentItem* , ")" , functionReturnType? , 
	"{" , statement+ , "}";

statement = ifStatement
	| forStatement
	| returnStatement
	| letStatement
	| expressionStatement;
	
forStatement = "for" , "(" , expr? , ";" , expr? , ";" , expr? , ")" , "{" , statement+ , "}";

returnStatement = "return" , expr , ";";

letStatement = "let" , assignment+ , ";";

constStatement = "const" , assignment+ , ";";

expressionStatement = expr , ";";

gomType = typeIdOrArray | structType;

typeIdOrArray = typeId ("[" , numLiteral , "]")?;

structType = "struct" , "{" , structTypeItem+ , "}";

structTypeItem = identifier , ":" , gomType , ","?;

argumentItem = identifier , ":" , gomType , ","?;

functionReturnType = ":" , gomType;

assignment = identifier , "=" , expr;

(* Precedence *)

expr = assignment;

(* (identifier , ".")? is not implemented yet *)
assignment = (identifier , ".")? , identifier ,  "=" , assignment
	| comparison;

comparison = sum , (("<" | ">" | "<=" | ">=" | "==") , comparison)?;

sum = quot , (("+" | "-") , quot)?;

quot = expo , (("/" | "*") , expo)?;

expo = call , ("^" , call)?;

call = term , ("(" , expr? , (expr , ",")* , ")" | "." call)?;

term = identifier | numLiteral | stringLiteral | "(" , expr , ")" | "true" | "false";
	
identifier = letter , (letter | digit)*;

numLiteral = digit+;

stringLiteral = '"' , (letter | digit)* , '"';

primitiveType = "i8" | "bool" | "f32" | "str" | "void";

compositeType = identifier;

letter = "A" | "B" | "C" | "D" | "E" | "F" | "G"
       | "H" | "I" | "J" | "K" | "L" | "M" | "N"
       | "O" | "P" | "Q" | "R" | "S" | "T" | "U"
       | "V" | "W" | "X" | "Y" | "Z" | "a" | "b"
       | "c" | "d" | "e" | "f" | "g" | "h" | "i"
       | "j" | "k" | "l" | "m" | "n" | "o" | "p"
       | "q" | "r" | "s" | "t" | "u" | "v" | "w"
       | "x" | "y" | "z" ;

digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" ;

WHITESPACE = " " | \n | \r | \t;
```