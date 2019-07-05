## Markdown-Html parser

### How is the parser architectured ?

- Grammer (predefied types for tokens)
- **Parser** 
  - Lexer (scanner or tokenizer) 
  - Proper parser (transform data to a specific form) 

## The lexer 

The job of the *lexer* is to scan the input and tokenize the difrent elements

![](https://mk0tuzolorusfnc7thxk.kinstacdn.com/wp-content/uploads/2017/02/lexer-parser-center-1030x187.png)

In the example `437` is SCANNED and then TOKENIZED as a type `NUM`

Its an imported part of the lexer to deal with `withspaces`


# this is H1

## this is H2
### this is H3
#### this is H4
##### this is H5
###### this is H6
####### this is not valid

