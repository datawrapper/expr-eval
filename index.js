/*!
 Based on ndef.parser, by Raphael Graf(r@undefined.ch)
 http://www.undefined.ch/mparser/index.html

 Ported to JavaScript and modified by Matthew Crumley (email@matthewcrumley.com, http://silentmatt.com/)

 You are free to use and modify this code in anyway you find useful. Please leave this comment in the code
 to acknowledge its original source. If you feel like it, I enjoy hearing about projects that use my code,
 but don't feel like you have to let me know or ask permission.
*/

import * as functions from './src/functions.js';
import evaluate from './src/evaluate.js';
import { Expression } from './src/expression.js';
import { Parser } from './src/parser.js';
import { ParserState } from './src/parser-state.js';
import { TEOF } from './src/token.js';
import { TokenStream } from './src/token-stream.js';

export {
  Expression,
  Parser,
  ParserState,
  TEOF,
  TokenStream,
  evaluate,
  functions
};

// Backwards compatibility
export default{
  Parser: Parser,
  Expression: Expression
};
