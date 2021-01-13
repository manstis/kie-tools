(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/postiats/postiats.js":
/*!****************************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/postiats/postiats.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conf", function() { return conf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Artyom Shalkhakov. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *
 *  Based on the ATS/Postiats lexer by Hongwei Xi.
 *--------------------------------------------------------------------------------------------*/
var conf = {
    comments: {
        lineComment: '//',
        blockComment: ['(*', '*)']
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')'],
        ['<', '>']
    ],
    autoClosingPairs: [
        { open: '"', close: '"', notIn: ['string', 'comment'] },
        { open: '{', close: '}', notIn: ['string', 'comment'] },
        { open: '[', close: ']', notIn: ['string', 'comment'] },
        { open: '(', close: ')', notIn: ['string', 'comment'] }
    ]
};
var language = {
    tokenPostfix: '.pats',
    // TODO: staload and dynload are followed by a special kind of string literals
    // with {$IDENTIFER} variables, and it also may make sense to highlight
    // the punctuation (. and / and \) differently.
    // Set defaultToken to invalid to see what you do not tokenize yet
    defaultToken: 'invalid',
    // keyword reference: https://github.com/githwxi/ATS-Postiats/blob/master/src/pats_lexing_token.dats
    keywords: [
        //
        'abstype',
        'abst0ype',
        'absprop',
        'absview',
        'absvtype',
        'absviewtype',
        'absvt0ype',
        'absviewt0ype',
        //
        'as',
        //
        'and',
        //
        'assume',
        //
        'begin',
        //
        /*
                "case", // CASE
        */
        //
        'classdec',
        //
        'datasort',
        //
        'datatype',
        'dataprop',
        'dataview',
        'datavtype',
        'dataviewtype',
        //
        'do',
        //
        'end',
        //
        'extern',
        'extype',
        'extvar',
        //
        'exception',
        //
        'fn',
        'fnx',
        'fun',
        //
        'prfn',
        'prfun',
        //
        'praxi',
        'castfn',
        //
        'if',
        'then',
        'else',
        //
        'ifcase',
        //
        'in',
        //
        'infix',
        'infixl',
        'infixr',
        'prefix',
        'postfix',
        //
        'implmnt',
        'implement',
        //
        'primplmnt',
        'primplement',
        //
        'import',
        //
        /*
                "lam", // LAM
                "llam", // LLAM
                "fix", // FIX
        */
        //
        'let',
        //
        'local',
        //
        'macdef',
        'macrodef',
        //
        'nonfix',
        //
        'symelim',
        'symintr',
        'overload',
        //
        'of',
        'op',
        //
        'rec',
        //
        'sif',
        'scase',
        //
        'sortdef',
        /*
        // HX: [sta] is now deprecated
        */
        'sta',
        'stacst',
        'stadef',
        'static',
        /*
                "stavar", // T_STAVAR
        */
        //
        'staload',
        'dynload',
        //
        'try',
        //
        'tkindef',
        //
        /*
                "type", // TYPE
        */
        'typedef',
        'propdef',
        'viewdef',
        'vtypedef',
        'viewtypedef',
        //
        /*
                "val", // VAL
        */
        'prval',
        //
        'var',
        'prvar',
        //
        'when',
        'where',
        //
        /*
                "for", // T_FOR
                "while", // T_WHILE
        */
        //
        'with',
        //
        'withtype',
        'withprop',
        'withview',
        'withvtype',
        'withviewtype' // WITHVIEWTYPE
        //
    ],
    keywords_dlr: [
        '$delay',
        '$ldelay',
        //
        '$arrpsz',
        '$arrptrsize',
        //
        '$d2ctype',
        //
        '$effmask',
        '$effmask_ntm',
        '$effmask_exn',
        '$effmask_ref',
        '$effmask_wrt',
        '$effmask_all',
        //
        '$extern',
        '$extkind',
        '$extype',
        '$extype_struct',
        //
        '$extval',
        '$extfcall',
        '$extmcall',
        //
        '$literal',
        //
        '$myfilename',
        '$mylocation',
        '$myfunction',
        //
        '$lst',
        '$lst_t',
        '$lst_vt',
        '$list',
        '$list_t',
        '$list_vt',
        //
        '$rec',
        '$rec_t',
        '$rec_vt',
        '$record',
        '$record_t',
        '$record_vt',
        //
        '$tup',
        '$tup_t',
        '$tup_vt',
        '$tuple',
        '$tuple_t',
        '$tuple_vt',
        //
        '$break',
        '$continue',
        //
        '$raise',
        //
        '$showtype',
        //
        '$vcopyenv_v',
        '$vcopyenv_vt',
        //
        '$tempenver',
        //
        '$solver_assert',
        '$solver_verify' // T_DLRSOLVERIFY
    ],
    keywords_srp: [
        //
        '#if',
        '#ifdef',
        '#ifndef',
        //
        '#then',
        //
        '#elif',
        '#elifdef',
        '#elifndef',
        //
        '#else',
        '#endif',
        //
        '#error',
        //
        '#prerr',
        '#print',
        //
        '#assert',
        //
        '#undef',
        '#define',
        //
        '#include',
        '#require',
        //
        '#pragma',
        '#codegen2',
        '#codegen3' // T_SRPCODEGEN3 // for level-3 codegen
        //
        // HX: end of special tokens
        //
    ],
    irregular_keyword_list: [
        'val+',
        'val-',
        'val',
        'case+',
        'case-',
        'case',
        'addr@',
        'addr',
        'fold@',
        'free@',
        'fix@',
        'fix',
        'lam@',
        'lam',
        'llam@',
        'llam',
        'viewt@ype+',
        'viewt@ype-',
        'viewt@ype',
        'viewtype+',
        'viewtype-',
        'viewtype',
        'view+',
        'view-',
        'view@',
        'view',
        'type+',
        'type-',
        'type',
        'vtype+',
        'vtype-',
        'vtype',
        'vt@ype+',
        'vt@ype-',
        'vt@ype',
        'viewt@ype+',
        'viewt@ype-',
        'viewt@ype',
        'viewtype+',
        'viewtype-',
        'viewtype',
        'prop+',
        'prop-',
        'prop',
        'type+',
        'type-',
        'type',
        't@ype',
        't@ype+',
        't@ype-',
        'abst@ype',
        'abstype',
        'absviewt@ype',
        'absvt@ype',
        'for*',
        'for',
        'while*',
        'while'
    ],
    keywords_types: [
        'bool',
        'double',
        'byte',
        'int',
        'short',
        'char',
        'void',
        'unit',
        'long',
        'float',
        'string',
        'strptr'
    ],
    // TODO: reference for this?
    keywords_effects: [
        '0',
        'fun',
        'clo',
        'prf',
        'funclo',
        'cloptr',
        'cloref',
        'ref',
        'ntm',
        '1' // all effects
    ],
    operators: [
        '@',
        '!',
        '|',
        '`',
        ':',
        '$',
        '.',
        '=',
        '#',
        '~',
        //
        '..',
        '...',
        //
        '=>',
        // "=<", // T_EQLT
        '=<>',
        '=/=>',
        '=>>',
        '=/=>>',
        //
        '<',
        '>',
        //
        '><',
        //
        '.<',
        '>.',
        //
        '.<>.',
        //
        '->',
        //"-<", // T_MINUSLT
        '-<>' // T_MINUSLTGT
        //
        /*
                ":<", // T_COLONLT
        */
    ],
    brackets: [
        { open: ',(', close: ')', token: 'delimiter.parenthesis' },
        { open: '`(', close: ')', token: 'delimiter.parenthesis' },
        { open: '%(', close: ')', token: 'delimiter.parenthesis' },
        { open: "'(", close: ')', token: 'delimiter.parenthesis' },
        { open: "'{", close: '}', token: 'delimiter.parenthesis' },
        { open: '@(', close: ')', token: 'delimiter.parenthesis' },
        { open: '@{', close: '}', token: 'delimiter.brace' },
        { open: '@[', close: ']', token: 'delimiter.square' },
        { open: '#[', close: ']', token: 'delimiter.square' },
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.square' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: '<', close: '>', token: 'delimiter.angle' }
    ],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    IDENTFST: /[a-zA-Z_]/,
    IDENTRST: /[a-zA-Z0-9_'$]/,
    symbolic: /[%&+-./:=@~`^|*!$#?<>]/,
    digit: /[0-9]/,
    digitseq0: /@digit*/,
    xdigit: /[0-9A-Za-z]/,
    xdigitseq0: /@xdigit*/,
    INTSP: /[lLuU]/,
    FLOATSP: /[fFlL]/,
    fexponent: /[eE][+-]?[0-9]+/,
    fexponent_bin: /[pP][+-]?[0-9]+/,
    deciexp: /\.[0-9]*@fexponent?/,
    hexiexp: /\.[0-9a-zA-Z]*@fexponent_bin?/,
    irregular_keywords: /val[+-]?|case[+-]?|addr\@?|fold\@|free\@|fix\@?|lam\@?|llam\@?|prop[+-]?|type[+-]?|view[+-@]?|viewt@?ype[+-]?|t@?ype[+-]?|v(iew)?t@?ype[+-]?|abst@?ype|absv(iew)?t@?ype|for\*?|while\*?/,
    ESCHAR: /[ntvbrfa\\\?'"\(\[\{]/,
    start: 'root',
    // The main tokenizer for ATS/Postiats
    // reference: https://github.com/githwxi/ATS-Postiats/blob/master/src/pats_lexing.dats
    tokenizer: {
        root: [
            // lexing_blankseq0
            { regex: /[ \t\r\n]+/, action: { token: '' } },
            // NOTE: (*) is an invalid ML-like comment!
            { regex: /\(\*\)/, action: { token: 'invalid' } },
            {
                regex: /\(\*/,
                action: { token: 'comment', next: 'lexing_COMMENT_block_ml' }
            },
            {
                regex: /\(/,
                action: '@brackets' /*{ token: 'delimiter.parenthesis' }*/
            },
            {
                regex: /\)/,
                action: '@brackets' /*{ token: 'delimiter.parenthesis' }*/
            },
            {
                regex: /\[/,
                action: '@brackets' /*{ token: 'delimiter.bracket' }*/
            },
            {
                regex: /\]/,
                action: '@brackets' /*{ token: 'delimiter.bracket' }*/
            },
            {
                regex: /\{/,
                action: '@brackets' /*{ token: 'delimiter.brace' }*/
            },
            {
                regex: /\}/,
                action: '@brackets' /*{ token: 'delimiter.brace' }*/
            },
            // lexing_COMMA
            {
                regex: /,\(/,
                action: '@brackets' /*{ token: 'delimiter.parenthesis' }*/
            },
            { regex: /,/, action: { token: 'delimiter.comma' } },
            { regex: /;/, action: { token: 'delimiter.semicolon' } },
            // lexing_AT
            {
                regex: /@\(/,
                action: '@brackets' /* { token: 'delimiter.parenthesis' }*/
            },
            {
                regex: /@\[/,
                action: '@brackets' /* { token: 'delimiter.bracket' }*/
            },
            {
                regex: /@\{/,
                action: '@brackets' /*{ token: 'delimiter.brace' }*/
            },
            // lexing_COLON
            {
                regex: /:</,
                action: { token: 'keyword', next: '@lexing_EFFECT_commaseq0' }
            },
            /*
            lexing_DOT:

            . // SYMBOLIC => lexing_IDENT_sym
            . FLOATDOT => lexing_FLOAT_deciexp
            . DIGIT => T_DOTINT
            */
            { regex: /\.@symbolic+/, action: { token: 'identifier.sym' } },
            // FLOATDOT case
            {
                regex: /\.@digit*@fexponent@FLOATSP*/,
                action: { token: 'number.float' }
            },
            { regex: /\.@digit+/, action: { token: 'number.float' } },
            // lexing_DOLLAR:
            // '$' IDENTFST IDENTRST* => lexing_IDENT_dlr, _ => lexing_IDENT_sym
            {
                regex: /\$@IDENTFST@IDENTRST*/,
                action: {
                    cases: {
                        '@keywords_dlr': { token: 'keyword.dlr' },
                        '@default': { token: 'namespace' } // most likely a module qualifier
                    }
                }
            },
            // lexing_SHARP:
            // '#' IDENTFST IDENTRST* => lexing_ident_srp, _ => lexing_IDENT_sym
            {
                regex: /\#@IDENTFST@IDENTRST*/,
                action: {
                    cases: {
                        '@keywords_srp': { token: 'keyword.srp' },
                        '@default': { token: 'identifier' }
                    }
                }
            },
            // lexing_PERCENT:
            { regex: /%\(/, action: { token: 'delimiter.parenthesis' } },
            {
                regex: /^%{(#|\^|\$)?/,
                action: {
                    token: 'keyword',
                    next: '@lexing_EXTCODE',
                    nextEmbedded: 'text/javascript'
                }
            },
            { regex: /^%}/, action: { token: 'keyword' } },
            // lexing_QUOTE
            { regex: /'\(/, action: { token: 'delimiter.parenthesis' } },
            { regex: /'\[/, action: { token: 'delimiter.bracket' } },
            { regex: /'\{/, action: { token: 'delimiter.brace' } },
            [/(')(\\@ESCHAR|\\[xX]@xdigit+|\\@digit+)(')/, ['string', 'string.escape', 'string']],
            [/'[^\\']'/, 'string'],
            // lexing_DQUOTE
            [/"/, 'string.quote', '@lexing_DQUOTE'],
            // lexing_BQUOTE
            {
                regex: /`\(/,
                action: '@brackets' /* { token: 'delimiter.parenthesis' }*/
            },
            // TODO: otherwise, try lexing_IDENT_sym
            { regex: /\\/, action: { token: 'punctuation' } },
            // lexing_IDENT_alp:
            // NOTE: (?!regex) is syntax for "not-followed-by" regex
            // to resolve ambiguity such as foreach$fwork being incorrectly lexed as [for] [each$fwork]!
            {
                regex: /@irregular_keywords(?!@IDENTRST)/,
                action: { token: 'keyword' }
            },
            {
                regex: /@IDENTFST@IDENTRST*[<!\[]?/,
                action: {
                    cases: {
                        // TODO: dynload and staload should be specially parsed
                        // dynload whitespace+ "special_string"
                        // this special string is really:
                        //  '/' '\\' '.' => punctuation
                        // ({\$)([a-zA-Z_][a-zA-Z_0-9]*)(}) => punctuation,keyword,punctuation
                        // [^"] => identifier/literal
                        '@keywords': { token: 'keyword' },
                        '@keywords_types': { token: 'type' },
                        '@default': { token: 'identifier' }
                    }
                }
            },
            // lexing_IDENT_sym:
            {
                regex: /\/\/\/\//,
                action: { token: 'comment', next: '@lexing_COMMENT_rest' }
            },
            { regex: /\/\/.*$/, action: { token: 'comment' } },
            {
                regex: /\/\*/,
                action: { token: 'comment', next: '@lexing_COMMENT_block_c' }
            },
            // AS-20160627: specifically for effect annotations
            {
                regex: /-<|=</,
                action: { token: 'keyword', next: '@lexing_EFFECT_commaseq0' }
            },
            {
                regex: /@symbolic+/,
                action: {
                    cases: {
                        '@operators': 'keyword',
                        '@default': 'operator'
                    }
                }
            },
            // lexing_ZERO:
            // FIXME: this one is quite messy/unfinished yet
            // TODO: lexing_INT_hex
            // - testing_hexiexp => lexing_FLOAT_hexiexp
            // - testing_fexponent_bin => lexing_FLOAT_hexiexp
            // - testing_intspseq0 => T_INT_hex
            // lexing_INT_hex:
            {
                regex: /0[xX]@xdigit+(@hexiexp|@fexponent_bin)@FLOATSP*/,
                action: { token: 'number.float' }
            },
            { regex: /0[xX]@xdigit+@INTSP*/, action: { token: 'number.hex' } },
            {
                regex: /0[0-7]+(?![0-9])@INTSP*/,
                action: { token: 'number.octal' }
            },
            //{regex: /0/, action: { token: 'number' } }, // INTZERO
            // lexing_INT_dec:
            // - testing_deciexp => lexing_FLOAT_deciexp
            // - testing_fexponent => lexing_FLOAT_deciexp
            // - otherwise => intspseq0 ([0-9]*[lLuU]?)
            {
                regex: /@digit+(@fexponent|@deciexp)@FLOATSP*/,
                action: { token: 'number.float' }
            },
            {
                regex: /@digit@digitseq0@INTSP*/,
                action: { token: 'number.decimal' }
            },
            // DIGIT, if followed by digitseq0, is lexing_INT_dec
            { regex: /@digit+@INTSP*/, action: { token: 'number' } }
        ],
        lexing_COMMENT_block_ml: [
            [/[^\(\*]+/, 'comment'],
            [/\(\*/, 'comment', '@push'],
            [/\(\*/, 'comment.invalid'],
            [/\*\)/, 'comment', '@pop'],
            [/\*/, 'comment']
        ],
        lexing_COMMENT_block_c: [
            [/[^\/*]+/, 'comment'],
            // [/\/\*/, 'comment', '@push' ],    // nested C-style block comments not allowed
            // [/\/\*/,    'comment.invalid' ],	// NOTE: this breaks block comments in the shape of /* //*/
            [/\*\//, 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        lexing_COMMENT_rest: [
            [/$/, 'comment', '@pop'],
            [/.*/, 'comment']
        ],
        // NOTE: added by AS, specifically for highlighting
        lexing_EFFECT_commaseq0: [
            {
                regex: /@IDENTFST@IDENTRST+|@digit+/,
                action: {
                    cases: {
                        '@keywords_effects': { token: 'type.effect' },
                        '@default': { token: 'identifier' }
                    }
                }
            },
            { regex: /,/, action: { token: 'punctuation' } },
            { regex: />/, action: { token: '@rematch', next: '@pop' } }
        ],
        lexing_EXTCODE: [
            {
                regex: /^%}/,
                action: {
                    token: '@rematch',
                    next: '@pop',
                    nextEmbedded: '@pop'
                }
            },
            { regex: /[^%]+/, action: '' }
        ],
        lexing_DQUOTE: [
            { regex: /"/, action: { token: 'string.quote', next: '@pop' } },
            // AS-20160628: additional hi-lighting for variables in staload/dynload strings
            {
                regex: /(\{\$)(@IDENTFST@IDENTRST*)(\})/,
                action: [
                    { token: 'string.escape' },
                    { token: 'identifier' },
                    { token: 'string.escape' }
                ]
            },
            { regex: /\\$/, action: { token: 'string.escape' } },
            {
                regex: /\\(@ESCHAR|[xX]@xdigit+|@digit+)/,
                action: { token: 'string.escape' }
            },
            { regex: /[^\\"]+/, action: { token: 'string' } }
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvcG9zdGlhdHMvcG9zdGlhdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHNEQUFzRDtBQUMvRCxTQUFTLFNBQVMsWUFBWSxpQ0FBaUM7QUFDL0QsU0FBUyxzREFBc0Q7QUFDL0QsU0FBUztBQUNUO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQSx5QkFBeUI7QUFDekIsYUFBYTtBQUNiLGVBQWUscUJBQXFCLGtCQUFrQixFQUFFO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixhQUFhO0FBQ2I7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixhQUFhO0FBQ2I7QUFDQSxhQUFhLG1DQUFtQyxrQkFBa0I7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsdUJBQXVCO0FBQ3JFLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EsYUFBYTtBQUNiLGFBQWEsc0JBQXNCLHVCQUF1QixFQUFFO0FBQzVELGFBQWEsc0JBQXNCLGtDQUFrQztBQUNyRTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWEsc0JBQXNCLHNDQUFzQyxFQUFFO0FBQzNFO0FBQ0E7QUFDQSwyQkFBMkIsMkJBQTJCO0FBQ3REO0FBQ0EscUJBQXFCLHlCQUF5QjtBQUM5QyxxQkFBcUIsc0JBQXNCO0FBQzNDLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYixhQUFhLHdCQUF3Qix5QkFBeUIsRUFBRTtBQUNoRTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLGFBQWE7QUFDYixhQUFhLDRCQUE0QixrQkFBa0I7QUFDM0Q7QUFDQTtBQUNBIiwiZmlsZSI6IjQyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIEFydHlvbSBTaGFsa2hha292LiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKlxuICogIEJhc2VkIG9uIHRoZSBBVFMvUG9zdGlhdHMgbGV4ZXIgYnkgSG9uZ3dlaSBYaS5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGxpbmVDb21tZW50OiAnLy8nLFxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnKConLCAnKiknXVxuICAgIH0sXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgWyd7JywgJ30nXSxcbiAgICAgICAgWydbJywgJ10nXSxcbiAgICAgICAgWycoJywgJyknXSxcbiAgICAgICAgWyc8JywgJz4nXVxuICAgIF0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH1cbiAgICBdXG59O1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICB0b2tlblBvc3RmaXg6ICcucGF0cycsXG4gICAgLy8gVE9ETzogc3RhbG9hZCBhbmQgZHlubG9hZCBhcmUgZm9sbG93ZWQgYnkgYSBzcGVjaWFsIGtpbmQgb2Ygc3RyaW5nIGxpdGVyYWxzXG4gICAgLy8gd2l0aCB7JElERU5USUZFUn0gdmFyaWFibGVzLCBhbmQgaXQgYWxzbyBtYXkgbWFrZSBzZW5zZSB0byBoaWdobGlnaHRcbiAgICAvLyB0aGUgcHVuY3R1YXRpb24gKC4gYW5kIC8gYW5kIFxcKSBkaWZmZXJlbnRseS5cbiAgICAvLyBTZXQgZGVmYXVsdFRva2VuIHRvIGludmFsaWQgdG8gc2VlIHdoYXQgeW91IGRvIG5vdCB0b2tlbml6ZSB5ZXRcbiAgICBkZWZhdWx0VG9rZW46ICdpbnZhbGlkJyxcbiAgICAvLyBrZXl3b3JkIHJlZmVyZW5jZTogaHR0cHM6Ly9naXRodWIuY29tL2dpdGh3eGkvQVRTLVBvc3RpYXRzL2Jsb2IvbWFzdGVyL3NyYy9wYXRzX2xleGluZ190b2tlbi5kYXRzXG4gICAga2V5d29yZHM6IFtcbiAgICAgICAgLy9cbiAgICAgICAgJ2Fic3R5cGUnLFxuICAgICAgICAnYWJzdDB5cGUnLFxuICAgICAgICAnYWJzcHJvcCcsXG4gICAgICAgICdhYnN2aWV3JyxcbiAgICAgICAgJ2Fic3Z0eXBlJyxcbiAgICAgICAgJ2Fic3ZpZXd0eXBlJyxcbiAgICAgICAgJ2Fic3Z0MHlwZScsXG4gICAgICAgICdhYnN2aWV3dDB5cGUnLFxuICAgICAgICAvL1xuICAgICAgICAnYXMnLFxuICAgICAgICAvL1xuICAgICAgICAnYW5kJyxcbiAgICAgICAgLy9cbiAgICAgICAgJ2Fzc3VtZScsXG4gICAgICAgIC8vXG4gICAgICAgICdiZWdpbicsXG4gICAgICAgIC8vXG4gICAgICAgIC8qXG4gICAgICAgICAgICAgICAgXCJjYXNlXCIsIC8vIENBU0VcbiAgICAgICAgKi9cbiAgICAgICAgLy9cbiAgICAgICAgJ2NsYXNzZGVjJyxcbiAgICAgICAgLy9cbiAgICAgICAgJ2RhdGFzb3J0JyxcbiAgICAgICAgLy9cbiAgICAgICAgJ2RhdGF0eXBlJyxcbiAgICAgICAgJ2RhdGFwcm9wJyxcbiAgICAgICAgJ2RhdGF2aWV3JyxcbiAgICAgICAgJ2RhdGF2dHlwZScsXG4gICAgICAgICdkYXRhdmlld3R5cGUnLFxuICAgICAgICAvL1xuICAgICAgICAnZG8nLFxuICAgICAgICAvL1xuICAgICAgICAnZW5kJyxcbiAgICAgICAgLy9cbiAgICAgICAgJ2V4dGVybicsXG4gICAgICAgICdleHR5cGUnLFxuICAgICAgICAnZXh0dmFyJyxcbiAgICAgICAgLy9cbiAgICAgICAgJ2V4Y2VwdGlvbicsXG4gICAgICAgIC8vXG4gICAgICAgICdmbicsXG4gICAgICAgICdmbngnLFxuICAgICAgICAnZnVuJyxcbiAgICAgICAgLy9cbiAgICAgICAgJ3ByZm4nLFxuICAgICAgICAncHJmdW4nLFxuICAgICAgICAvL1xuICAgICAgICAncHJheGknLFxuICAgICAgICAnY2FzdGZuJyxcbiAgICAgICAgLy9cbiAgICAgICAgJ2lmJyxcbiAgICAgICAgJ3RoZW4nLFxuICAgICAgICAnZWxzZScsXG4gICAgICAgIC8vXG4gICAgICAgICdpZmNhc2UnLFxuICAgICAgICAvL1xuICAgICAgICAnaW4nLFxuICAgICAgICAvL1xuICAgICAgICAnaW5maXgnLFxuICAgICAgICAnaW5maXhsJyxcbiAgICAgICAgJ2luZml4cicsXG4gICAgICAgICdwcmVmaXgnLFxuICAgICAgICAncG9zdGZpeCcsXG4gICAgICAgIC8vXG4gICAgICAgICdpbXBsbW50JyxcbiAgICAgICAgJ2ltcGxlbWVudCcsXG4gICAgICAgIC8vXG4gICAgICAgICdwcmltcGxtbnQnLFxuICAgICAgICAncHJpbXBsZW1lbnQnLFxuICAgICAgICAvL1xuICAgICAgICAnaW1wb3J0JyxcbiAgICAgICAgLy9cbiAgICAgICAgLypcbiAgICAgICAgICAgICAgICBcImxhbVwiLCAvLyBMQU1cbiAgICAgICAgICAgICAgICBcImxsYW1cIiwgLy8gTExBTVxuICAgICAgICAgICAgICAgIFwiZml4XCIsIC8vIEZJWFxuICAgICAgICAqL1xuICAgICAgICAvL1xuICAgICAgICAnbGV0JyxcbiAgICAgICAgLy9cbiAgICAgICAgJ2xvY2FsJyxcbiAgICAgICAgLy9cbiAgICAgICAgJ21hY2RlZicsXG4gICAgICAgICdtYWNyb2RlZicsXG4gICAgICAgIC8vXG4gICAgICAgICdub25maXgnLFxuICAgICAgICAvL1xuICAgICAgICAnc3ltZWxpbScsXG4gICAgICAgICdzeW1pbnRyJyxcbiAgICAgICAgJ292ZXJsb2FkJyxcbiAgICAgICAgLy9cbiAgICAgICAgJ29mJyxcbiAgICAgICAgJ29wJyxcbiAgICAgICAgLy9cbiAgICAgICAgJ3JlYycsXG4gICAgICAgIC8vXG4gICAgICAgICdzaWYnLFxuICAgICAgICAnc2Nhc2UnLFxuICAgICAgICAvL1xuICAgICAgICAnc29ydGRlZicsXG4gICAgICAgIC8qXG4gICAgICAgIC8vIEhYOiBbc3RhXSBpcyBub3cgZGVwcmVjYXRlZFxuICAgICAgICAqL1xuICAgICAgICAnc3RhJyxcbiAgICAgICAgJ3N0YWNzdCcsXG4gICAgICAgICdzdGFkZWYnLFxuICAgICAgICAnc3RhdGljJyxcbiAgICAgICAgLypcbiAgICAgICAgICAgICAgICBcInN0YXZhclwiLCAvLyBUX1NUQVZBUlxuICAgICAgICAqL1xuICAgICAgICAvL1xuICAgICAgICAnc3RhbG9hZCcsXG4gICAgICAgICdkeW5sb2FkJyxcbiAgICAgICAgLy9cbiAgICAgICAgJ3RyeScsXG4gICAgICAgIC8vXG4gICAgICAgICd0a2luZGVmJyxcbiAgICAgICAgLy9cbiAgICAgICAgLypcbiAgICAgICAgICAgICAgICBcInR5cGVcIiwgLy8gVFlQRVxuICAgICAgICAqL1xuICAgICAgICAndHlwZWRlZicsXG4gICAgICAgICdwcm9wZGVmJyxcbiAgICAgICAgJ3ZpZXdkZWYnLFxuICAgICAgICAndnR5cGVkZWYnLFxuICAgICAgICAndmlld3R5cGVkZWYnLFxuICAgICAgICAvL1xuICAgICAgICAvKlxuICAgICAgICAgICAgICAgIFwidmFsXCIsIC8vIFZBTFxuICAgICAgICAqL1xuICAgICAgICAncHJ2YWwnLFxuICAgICAgICAvL1xuICAgICAgICAndmFyJyxcbiAgICAgICAgJ3BydmFyJyxcbiAgICAgICAgLy9cbiAgICAgICAgJ3doZW4nLFxuICAgICAgICAnd2hlcmUnLFxuICAgICAgICAvL1xuICAgICAgICAvKlxuICAgICAgICAgICAgICAgIFwiZm9yXCIsIC8vIFRfRk9SXG4gICAgICAgICAgICAgICAgXCJ3aGlsZVwiLCAvLyBUX1dISUxFXG4gICAgICAgICovXG4gICAgICAgIC8vXG4gICAgICAgICd3aXRoJyxcbiAgICAgICAgLy9cbiAgICAgICAgJ3dpdGh0eXBlJyxcbiAgICAgICAgJ3dpdGhwcm9wJyxcbiAgICAgICAgJ3dpdGh2aWV3JyxcbiAgICAgICAgJ3dpdGh2dHlwZScsXG4gICAgICAgICd3aXRodmlld3R5cGUnIC8vIFdJVEhWSUVXVFlQRVxuICAgICAgICAvL1xuICAgIF0sXG4gICAga2V5d29yZHNfZGxyOiBbXG4gICAgICAgICckZGVsYXknLFxuICAgICAgICAnJGxkZWxheScsXG4gICAgICAgIC8vXG4gICAgICAgICckYXJycHN6JyxcbiAgICAgICAgJyRhcnJwdHJzaXplJyxcbiAgICAgICAgLy9cbiAgICAgICAgJyRkMmN0eXBlJyxcbiAgICAgICAgLy9cbiAgICAgICAgJyRlZmZtYXNrJyxcbiAgICAgICAgJyRlZmZtYXNrX250bScsXG4gICAgICAgICckZWZmbWFza19leG4nLFxuICAgICAgICAnJGVmZm1hc2tfcmVmJyxcbiAgICAgICAgJyRlZmZtYXNrX3dydCcsXG4gICAgICAgICckZWZmbWFza19hbGwnLFxuICAgICAgICAvL1xuICAgICAgICAnJGV4dGVybicsXG4gICAgICAgICckZXh0a2luZCcsXG4gICAgICAgICckZXh0eXBlJyxcbiAgICAgICAgJyRleHR5cGVfc3RydWN0JyxcbiAgICAgICAgLy9cbiAgICAgICAgJyRleHR2YWwnLFxuICAgICAgICAnJGV4dGZjYWxsJyxcbiAgICAgICAgJyRleHRtY2FsbCcsXG4gICAgICAgIC8vXG4gICAgICAgICckbGl0ZXJhbCcsXG4gICAgICAgIC8vXG4gICAgICAgICckbXlmaWxlbmFtZScsXG4gICAgICAgICckbXlsb2NhdGlvbicsXG4gICAgICAgICckbXlmdW5jdGlvbicsXG4gICAgICAgIC8vXG4gICAgICAgICckbHN0JyxcbiAgICAgICAgJyRsc3RfdCcsXG4gICAgICAgICckbHN0X3Z0JyxcbiAgICAgICAgJyRsaXN0JyxcbiAgICAgICAgJyRsaXN0X3QnLFxuICAgICAgICAnJGxpc3RfdnQnLFxuICAgICAgICAvL1xuICAgICAgICAnJHJlYycsXG4gICAgICAgICckcmVjX3QnLFxuICAgICAgICAnJHJlY192dCcsXG4gICAgICAgICckcmVjb3JkJyxcbiAgICAgICAgJyRyZWNvcmRfdCcsXG4gICAgICAgICckcmVjb3JkX3Z0JyxcbiAgICAgICAgLy9cbiAgICAgICAgJyR0dXAnLFxuICAgICAgICAnJHR1cF90JyxcbiAgICAgICAgJyR0dXBfdnQnLFxuICAgICAgICAnJHR1cGxlJyxcbiAgICAgICAgJyR0dXBsZV90JyxcbiAgICAgICAgJyR0dXBsZV92dCcsXG4gICAgICAgIC8vXG4gICAgICAgICckYnJlYWsnLFxuICAgICAgICAnJGNvbnRpbnVlJyxcbiAgICAgICAgLy9cbiAgICAgICAgJyRyYWlzZScsXG4gICAgICAgIC8vXG4gICAgICAgICckc2hvd3R5cGUnLFxuICAgICAgICAvL1xuICAgICAgICAnJHZjb3B5ZW52X3YnLFxuICAgICAgICAnJHZjb3B5ZW52X3Z0JyxcbiAgICAgICAgLy9cbiAgICAgICAgJyR0ZW1wZW52ZXInLFxuICAgICAgICAvL1xuICAgICAgICAnJHNvbHZlcl9hc3NlcnQnLFxuICAgICAgICAnJHNvbHZlcl92ZXJpZnknIC8vIFRfRExSU09MVkVSSUZZXG4gICAgXSxcbiAgICBrZXl3b3Jkc19zcnA6IFtcbiAgICAgICAgLy9cbiAgICAgICAgJyNpZicsXG4gICAgICAgICcjaWZkZWYnLFxuICAgICAgICAnI2lmbmRlZicsXG4gICAgICAgIC8vXG4gICAgICAgICcjdGhlbicsXG4gICAgICAgIC8vXG4gICAgICAgICcjZWxpZicsXG4gICAgICAgICcjZWxpZmRlZicsXG4gICAgICAgICcjZWxpZm5kZWYnLFxuICAgICAgICAvL1xuICAgICAgICAnI2Vsc2UnLFxuICAgICAgICAnI2VuZGlmJyxcbiAgICAgICAgLy9cbiAgICAgICAgJyNlcnJvcicsXG4gICAgICAgIC8vXG4gICAgICAgICcjcHJlcnInLFxuICAgICAgICAnI3ByaW50JyxcbiAgICAgICAgLy9cbiAgICAgICAgJyNhc3NlcnQnLFxuICAgICAgICAvL1xuICAgICAgICAnI3VuZGVmJyxcbiAgICAgICAgJyNkZWZpbmUnLFxuICAgICAgICAvL1xuICAgICAgICAnI2luY2x1ZGUnLFxuICAgICAgICAnI3JlcXVpcmUnLFxuICAgICAgICAvL1xuICAgICAgICAnI3ByYWdtYScsXG4gICAgICAgICcjY29kZWdlbjInLFxuICAgICAgICAnI2NvZGVnZW4zJyAvLyBUX1NSUENPREVHRU4zIC8vIGZvciBsZXZlbC0zIGNvZGVnZW5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gSFg6IGVuZCBvZiBzcGVjaWFsIHRva2Vuc1xuICAgICAgICAvL1xuICAgIF0sXG4gICAgaXJyZWd1bGFyX2tleXdvcmRfbGlzdDogW1xuICAgICAgICAndmFsKycsXG4gICAgICAgICd2YWwtJyxcbiAgICAgICAgJ3ZhbCcsXG4gICAgICAgICdjYXNlKycsXG4gICAgICAgICdjYXNlLScsXG4gICAgICAgICdjYXNlJyxcbiAgICAgICAgJ2FkZHJAJyxcbiAgICAgICAgJ2FkZHInLFxuICAgICAgICAnZm9sZEAnLFxuICAgICAgICAnZnJlZUAnLFxuICAgICAgICAnZml4QCcsXG4gICAgICAgICdmaXgnLFxuICAgICAgICAnbGFtQCcsXG4gICAgICAgICdsYW0nLFxuICAgICAgICAnbGxhbUAnLFxuICAgICAgICAnbGxhbScsXG4gICAgICAgICd2aWV3dEB5cGUrJyxcbiAgICAgICAgJ3ZpZXd0QHlwZS0nLFxuICAgICAgICAndmlld3RAeXBlJyxcbiAgICAgICAgJ3ZpZXd0eXBlKycsXG4gICAgICAgICd2aWV3dHlwZS0nLFxuICAgICAgICAndmlld3R5cGUnLFxuICAgICAgICAndmlldysnLFxuICAgICAgICAndmlldy0nLFxuICAgICAgICAndmlld0AnLFxuICAgICAgICAndmlldycsXG4gICAgICAgICd0eXBlKycsXG4gICAgICAgICd0eXBlLScsXG4gICAgICAgICd0eXBlJyxcbiAgICAgICAgJ3Z0eXBlKycsXG4gICAgICAgICd2dHlwZS0nLFxuICAgICAgICAndnR5cGUnLFxuICAgICAgICAndnRAeXBlKycsXG4gICAgICAgICd2dEB5cGUtJyxcbiAgICAgICAgJ3Z0QHlwZScsXG4gICAgICAgICd2aWV3dEB5cGUrJyxcbiAgICAgICAgJ3ZpZXd0QHlwZS0nLFxuICAgICAgICAndmlld3RAeXBlJyxcbiAgICAgICAgJ3ZpZXd0eXBlKycsXG4gICAgICAgICd2aWV3dHlwZS0nLFxuICAgICAgICAndmlld3R5cGUnLFxuICAgICAgICAncHJvcCsnLFxuICAgICAgICAncHJvcC0nLFxuICAgICAgICAncHJvcCcsXG4gICAgICAgICd0eXBlKycsXG4gICAgICAgICd0eXBlLScsXG4gICAgICAgICd0eXBlJyxcbiAgICAgICAgJ3RAeXBlJyxcbiAgICAgICAgJ3RAeXBlKycsXG4gICAgICAgICd0QHlwZS0nLFxuICAgICAgICAnYWJzdEB5cGUnLFxuICAgICAgICAnYWJzdHlwZScsXG4gICAgICAgICdhYnN2aWV3dEB5cGUnLFxuICAgICAgICAnYWJzdnRAeXBlJyxcbiAgICAgICAgJ2ZvcionLFxuICAgICAgICAnZm9yJyxcbiAgICAgICAgJ3doaWxlKicsXG4gICAgICAgICd3aGlsZSdcbiAgICBdLFxuICAgIGtleXdvcmRzX3R5cGVzOiBbXG4gICAgICAgICdib29sJyxcbiAgICAgICAgJ2RvdWJsZScsXG4gICAgICAgICdieXRlJyxcbiAgICAgICAgJ2ludCcsXG4gICAgICAgICdzaG9ydCcsXG4gICAgICAgICdjaGFyJyxcbiAgICAgICAgJ3ZvaWQnLFxuICAgICAgICAndW5pdCcsXG4gICAgICAgICdsb25nJyxcbiAgICAgICAgJ2Zsb2F0JyxcbiAgICAgICAgJ3N0cmluZycsXG4gICAgICAgICdzdHJwdHInXG4gICAgXSxcbiAgICAvLyBUT0RPOiByZWZlcmVuY2UgZm9yIHRoaXM/XG4gICAga2V5d29yZHNfZWZmZWN0czogW1xuICAgICAgICAnMCcsXG4gICAgICAgICdmdW4nLFxuICAgICAgICAnY2xvJyxcbiAgICAgICAgJ3ByZicsXG4gICAgICAgICdmdW5jbG8nLFxuICAgICAgICAnY2xvcHRyJyxcbiAgICAgICAgJ2Nsb3JlZicsXG4gICAgICAgICdyZWYnLFxuICAgICAgICAnbnRtJyxcbiAgICAgICAgJzEnIC8vIGFsbCBlZmZlY3RzXG4gICAgXSxcbiAgICBvcGVyYXRvcnM6IFtcbiAgICAgICAgJ0AnLFxuICAgICAgICAnIScsXG4gICAgICAgICd8JyxcbiAgICAgICAgJ2AnLFxuICAgICAgICAnOicsXG4gICAgICAgICckJyxcbiAgICAgICAgJy4nLFxuICAgICAgICAnPScsXG4gICAgICAgICcjJyxcbiAgICAgICAgJ34nLFxuICAgICAgICAvL1xuICAgICAgICAnLi4nLFxuICAgICAgICAnLi4uJyxcbiAgICAgICAgLy9cbiAgICAgICAgJz0+JyxcbiAgICAgICAgLy8gXCI9PFwiLCAvLyBUX0VRTFRcbiAgICAgICAgJz08PicsXG4gICAgICAgICc9Lz0+JyxcbiAgICAgICAgJz0+PicsXG4gICAgICAgICc9Lz0+PicsXG4gICAgICAgIC8vXG4gICAgICAgICc8JyxcbiAgICAgICAgJz4nLFxuICAgICAgICAvL1xuICAgICAgICAnPjwnLFxuICAgICAgICAvL1xuICAgICAgICAnLjwnLFxuICAgICAgICAnPi4nLFxuICAgICAgICAvL1xuICAgICAgICAnLjw+LicsXG4gICAgICAgIC8vXG4gICAgICAgICctPicsXG4gICAgICAgIC8vXCItPFwiLCAvLyBUX01JTlVTTFRcbiAgICAgICAgJy08PicgLy8gVF9NSU5VU0xUR1RcbiAgICAgICAgLy9cbiAgICAgICAgLypcbiAgICAgICAgICAgICAgICBcIjo8XCIsIC8vIFRfQ09MT05MVFxuICAgICAgICAqL1xuICAgIF0sXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgeyBvcGVuOiAnLCgnLCBjbG9zZTogJyknLCB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfSxcbiAgICAgICAgeyBvcGVuOiAnYCgnLCBjbG9zZTogJyknLCB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfSxcbiAgICAgICAgeyBvcGVuOiAnJSgnLCBjbG9zZTogJyknLCB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfSxcbiAgICAgICAgeyBvcGVuOiBcIicoXCIsIGNsb3NlOiAnKScsIHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9LFxuICAgICAgICB7IG9wZW46IFwiJ3tcIiwgY2xvc2U6ICd9JywgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0sXG4gICAgICAgIHsgb3BlbjogJ0AoJywgY2xvc2U6ICcpJywgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0sXG4gICAgICAgIHsgb3BlbjogJ0B7JywgY2xvc2U6ICd9JywgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2UnIH0sXG4gICAgICAgIHsgb3BlbjogJ0BbJywgY2xvc2U6ICddJywgdG9rZW46ICdkZWxpbWl0ZXIuc3F1YXJlJyB9LFxuICAgICAgICB7IG9wZW46ICcjWycsIGNsb3NlOiAnXScsIHRva2VuOiAnZGVsaW1pdGVyLnNxdWFyZScgfSxcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScsIHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgdG9rZW46ICdkZWxpbWl0ZXIuc3F1YXJlJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJywgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0sXG4gICAgICAgIHsgb3BlbjogJzwnLCBjbG9zZTogJz4nLCB0b2tlbjogJ2RlbGltaXRlci5hbmdsZScgfVxuICAgIF0sXG4gICAgLy8gd2UgaW5jbHVkZSB0aGVzZSBjb21tb24gcmVndWxhciBleHByZXNzaW9uc1xuICAgIHN5bWJvbHM6IC9bPT48IX4/OiZ8K1xcLSpcXC9cXF4lXSsvLFxuICAgIElERU5URlNUOiAvW2EtekEtWl9dLyxcbiAgICBJREVOVFJTVDogL1thLXpBLVowLTlfJyRdLyxcbiAgICBzeW1ib2xpYzogL1slJistLi86PUB+YF58KiEkIz88Pl0vLFxuICAgIGRpZ2l0OiAvWzAtOV0vLFxuICAgIGRpZ2l0c2VxMDogL0BkaWdpdCovLFxuICAgIHhkaWdpdDogL1swLTlBLVphLXpdLyxcbiAgICB4ZGlnaXRzZXEwOiAvQHhkaWdpdCovLFxuICAgIElOVFNQOiAvW2xMdVVdLyxcbiAgICBGTE9BVFNQOiAvW2ZGbExdLyxcbiAgICBmZXhwb25lbnQ6IC9bZUVdWystXT9bMC05XSsvLFxuICAgIGZleHBvbmVudF9iaW46IC9bcFBdWystXT9bMC05XSsvLFxuICAgIGRlY2lleHA6IC9cXC5bMC05XSpAZmV4cG9uZW50Py8sXG4gICAgaGV4aWV4cDogL1xcLlswLTlhLXpBLVpdKkBmZXhwb25lbnRfYmluPy8sXG4gICAgaXJyZWd1bGFyX2tleXdvcmRzOiAvdmFsWystXT98Y2FzZVsrLV0/fGFkZHJcXEA/fGZvbGRcXEB8ZnJlZVxcQHxmaXhcXEA/fGxhbVxcQD98bGxhbVxcQD98cHJvcFsrLV0/fHR5cGVbKy1dP3x2aWV3WystQF0/fHZpZXd0QD95cGVbKy1dP3x0QD95cGVbKy1dP3x2KGlldyk/dEA/eXBlWystXT98YWJzdEA/eXBlfGFic3YoaWV3KT90QD95cGV8Zm9yXFwqP3x3aGlsZVxcKj8vLFxuICAgIEVTQ0hBUjogL1tudHZicmZhXFxcXFxcPydcIlxcKFxcW1xce10vLFxuICAgIHN0YXJ0OiAncm9vdCcsXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBBVFMvUG9zdGlhdHNcbiAgICAvLyByZWZlcmVuY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9naXRod3hpL0FUUy1Qb3N0aWF0cy9ibG9iL21hc3Rlci9zcmMvcGF0c19sZXhpbmcuZGF0c1xuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICAvLyBsZXhpbmdfYmxhbmtzZXEwXG4gICAgICAgICAgICB7IHJlZ2V4OiAvWyBcXHRcXHJcXG5dKy8sIGFjdGlvbjogeyB0b2tlbjogJycgfSB9LFxuICAgICAgICAgICAgLy8gTk9URTogKCopIGlzIGFuIGludmFsaWQgTUwtbGlrZSBjb21tZW50IVxuICAgICAgICAgICAgeyByZWdleDogL1xcKFxcKlxcKS8sIGFjdGlvbjogeyB0b2tlbjogJ2ludmFsaWQnIH0gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWdleDogL1xcKFxcKi8sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiB7IHRva2VuOiAnY29tbWVudCcsIG5leHQ6ICdsZXhpbmdfQ09NTUVOVF9ibG9ja19tbCcgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWdleDogL1xcKC8sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnQGJyYWNrZXRzJyAvKnsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0qL1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWdleDogL1xcKS8sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnQGJyYWNrZXRzJyAvKnsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0qL1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWdleDogL1xcWy8sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnQGJyYWNrZXRzJyAvKnsgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcgfSovXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlZ2V4OiAvXFxdLyxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdAYnJhY2tldHMnIC8qeyB0b2tlbjogJ2RlbGltaXRlci5icmFja2V0JyB9Ki9cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVnZXg6IC9cXHsvLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ0BicmFja2V0cycgLyp7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNlJyB9Ki9cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVnZXg6IC9cXH0vLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ0BicmFja2V0cycgLyp7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNlJyB9Ki9cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBsZXhpbmdfQ09NTUFcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWdleDogLyxcXCgvLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ0BicmFja2V0cycgLyp7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9Ki9cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHJlZ2V4OiAvLC8sIGFjdGlvbjogeyB0b2tlbjogJ2RlbGltaXRlci5jb21tYScgfSB9LFxuICAgICAgICAgICAgeyByZWdleDogLzsvLCBhY3Rpb246IHsgdG9rZW46ICdkZWxpbWl0ZXIuc2VtaWNvbG9uJyB9IH0sXG4gICAgICAgICAgICAvLyBsZXhpbmdfQVRcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWdleDogL0BcXCgvLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ0BicmFja2V0cycgLyogeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfSovXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlZ2V4OiAvQFxcWy8sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnQGJyYWNrZXRzJyAvKiB7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnIH0qL1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWdleDogL0BcXHsvLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ0BicmFja2V0cycgLyp7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNlJyB9Ki9cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBsZXhpbmdfQ09MT05cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWdleDogLzo8LyxcbiAgICAgICAgICAgICAgICBhY3Rpb246IHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0BsZXhpbmdfRUZGRUNUX2NvbW1hc2VxMCcgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBsZXhpbmdfRE9UOlxuXG4gICAgICAgICAgICAuIC8vIFNZTUJPTElDID0+IGxleGluZ19JREVOVF9zeW1cbiAgICAgICAgICAgIC4gRkxPQVRET1QgPT4gbGV4aW5nX0ZMT0FUX2RlY2lleHBcbiAgICAgICAgICAgIC4gRElHSVQgPT4gVF9ET1RJTlRcbiAgICAgICAgICAgICovXG4gICAgICAgICAgICB7IHJlZ2V4OiAvXFwuQHN5bWJvbGljKy8sIGFjdGlvbjogeyB0b2tlbjogJ2lkZW50aWZpZXIuc3ltJyB9IH0sXG4gICAgICAgICAgICAvLyBGTE9BVERPVCBjYXNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVnZXg6IC9cXC5AZGlnaXQqQGZleHBvbmVudEBGTE9BVFNQKi8sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiB7IHRva2VuOiAnbnVtYmVyLmZsb2F0JyB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyByZWdleDogL1xcLkBkaWdpdCsvLCBhY3Rpb246IHsgdG9rZW46ICdudW1iZXIuZmxvYXQnIH0gfSxcbiAgICAgICAgICAgIC8vIGxleGluZ19ET0xMQVI6XG4gICAgICAgICAgICAvLyAnJCcgSURFTlRGU1QgSURFTlRSU1QqID0+IGxleGluZ19JREVOVF9kbHIsIF8gPT4gbGV4aW5nX0lERU5UX3N5bVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlZ2V4OiAvXFwkQElERU5URlNUQElERU5UUlNUKi8sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzX2Rscic6IHsgdG9rZW46ICdrZXl3b3JkLmRscicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHsgdG9rZW46ICduYW1lc3BhY2UnIH0gLy8gbW9zdCBsaWtlbHkgYSBtb2R1bGUgcXVhbGlmaWVyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gbGV4aW5nX1NIQVJQOlxuICAgICAgICAgICAgLy8gJyMnIElERU5URlNUIElERU5UUlNUKiA9PiBsZXhpbmdfaWRlbnRfc3JwLCBfID0+IGxleGluZ19JREVOVF9zeW1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWdleDogL1xcI0BJREVOVEZTVEBJREVOVFJTVCovLFxuICAgICAgICAgICAgICAgIGFjdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkc19zcnAnOiB7IHRva2VuOiAna2V5d29yZC5zcnAnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiB7IHRva2VuOiAnaWRlbnRpZmllcicgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIGxleGluZ19QRVJDRU5UOlxuICAgICAgICAgICAgeyByZWdleDogLyVcXCgvLCBhY3Rpb246IHsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWdleDogL14leygjfFxcXnxcXCQpPy8sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAna2V5d29yZCcsXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAbGV4aW5nX0VYVENPREUnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2phdmFzY3JpcHQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgcmVnZXg6IC9eJX0vLCBhY3Rpb246IHsgdG9rZW46ICdrZXl3b3JkJyB9IH0sXG4gICAgICAgICAgICAvLyBsZXhpbmdfUVVPVEVcbiAgICAgICAgICAgIHsgcmVnZXg6IC8nXFwoLywgYWN0aW9uOiB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9IH0sXG4gICAgICAgICAgICB7IHJlZ2V4OiAvJ1xcWy8sIGFjdGlvbjogeyB0b2tlbjogJ2RlbGltaXRlci5icmFja2V0JyB9IH0sXG4gICAgICAgICAgICB7IHJlZ2V4OiAvJ1xcey8sIGFjdGlvbjogeyB0b2tlbjogJ2RlbGltaXRlci5icmFjZScgfSB9LFxuICAgICAgICAgICAgWy8oJykoXFxcXEBFU0NIQVJ8XFxcXFt4WF1AeGRpZ2l0K3xcXFxcQGRpZ2l0KykoJykvLCBbJ3N0cmluZycsICdzdHJpbmcuZXNjYXBlJywgJ3N0cmluZyddXSxcbiAgICAgICAgICAgIFsvJ1teXFxcXCddJy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIC8vIGxleGluZ19EUVVPVEVcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nLnF1b3RlJywgJ0BsZXhpbmdfRFFVT1RFJ10sXG4gICAgICAgICAgICAvLyBsZXhpbmdfQlFVT1RFXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVnZXg6IC9gXFwoLyxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdAYnJhY2tldHMnIC8qIHsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnIH0qL1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIFRPRE86IG90aGVyd2lzZSwgdHJ5IGxleGluZ19JREVOVF9zeW1cbiAgICAgICAgICAgIHsgcmVnZXg6IC9cXFxcLywgYWN0aW9uOiB7IHRva2VuOiAncHVuY3R1YXRpb24nIH0gfSxcbiAgICAgICAgICAgIC8vIGxleGluZ19JREVOVF9hbHA6XG4gICAgICAgICAgICAvLyBOT1RFOiAoPyFyZWdleCkgaXMgc3ludGF4IGZvciBcIm5vdC1mb2xsb3dlZC1ieVwiIHJlZ2V4XG4gICAgICAgICAgICAvLyB0byByZXNvbHZlIGFtYmlndWl0eSBzdWNoIGFzIGZvcmVhY2gkZndvcmsgYmVpbmcgaW5jb3JyZWN0bHkgbGV4ZWQgYXMgW2Zvcl0gW2VhY2gkZndvcmtdIVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlZ2V4OiAvQGlycmVndWxhcl9rZXl3b3Jkcyg/IUBJREVOVFJTVCkvLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogeyB0b2tlbjogJ2tleXdvcmQnIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVnZXg6IC9ASURFTlRGU1RASURFTlRSU1QqWzwhXFxbXT8vLFxuICAgICAgICAgICAgICAgIGFjdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogZHlubG9hZCBhbmQgc3RhbG9hZCBzaG91bGQgYmUgc3BlY2lhbGx5IHBhcnNlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZHlubG9hZCB3aGl0ZXNwYWNlKyBcInNwZWNpYWxfc3RyaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgc3BlY2lhbCBzdHJpbmcgaXMgcmVhbGx5OlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICcvJyAnXFxcXCcgJy4nID0+IHB1bmN0dWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAoe1xcJCkoW2EtekEtWl9dW2EtekEtWl8wLTldKikofSkgPT4gcHVuY3R1YXRpb24sa2V5d29yZCxwdW5jdHVhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gW15cIl0gPT4gaWRlbnRpZmllci9saXRlcmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogeyB0b2tlbjogJ2tleXdvcmQnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzX3R5cGVzJzogeyB0b2tlbjogJ3R5cGUnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiB7IHRva2VuOiAnaWRlbnRpZmllcicgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIGxleGluZ19JREVOVF9zeW06XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVnZXg6IC9cXC9cXC9cXC9cXC8vLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogeyB0b2tlbjogJ2NvbW1lbnQnLCBuZXh0OiAnQGxleGluZ19DT01NRU5UX3Jlc3QnIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHJlZ2V4OiAvXFwvXFwvLiokLywgYWN0aW9uOiB7IHRva2VuOiAnY29tbWVudCcgfSB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlZ2V4OiAvXFwvXFwqLyxcbiAgICAgICAgICAgICAgICBhY3Rpb246IHsgdG9rZW46ICdjb21tZW50JywgbmV4dDogJ0BsZXhpbmdfQ09NTUVOVF9ibG9ja19jJyB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gQVMtMjAxNjA2Mjc6IHNwZWNpZmljYWxseSBmb3IgZWZmZWN0IGFubm90YXRpb25zXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVnZXg6IC8tPHw9PC8sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAbGV4aW5nX0VGRkVDVF9jb21tYXNlcTAnIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVnZXg6IC9Ac3ltYm9saWMrLyxcbiAgICAgICAgICAgICAgICBhY3Rpb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAb3BlcmF0b3JzJzogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ29wZXJhdG9yJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIGxleGluZ19aRVJPOlxuICAgICAgICAgICAgLy8gRklYTUU6IHRoaXMgb25lIGlzIHF1aXRlIG1lc3N5L3VuZmluaXNoZWQgeWV0XG4gICAgICAgICAgICAvLyBUT0RPOiBsZXhpbmdfSU5UX2hleFxuICAgICAgICAgICAgLy8gLSB0ZXN0aW5nX2hleGlleHAgPT4gbGV4aW5nX0ZMT0FUX2hleGlleHBcbiAgICAgICAgICAgIC8vIC0gdGVzdGluZ19mZXhwb25lbnRfYmluID0+IGxleGluZ19GTE9BVF9oZXhpZXhwXG4gICAgICAgICAgICAvLyAtIHRlc3RpbmdfaW50c3BzZXEwID0+IFRfSU5UX2hleFxuICAgICAgICAgICAgLy8gbGV4aW5nX0lOVF9oZXg6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVnZXg6IC8wW3hYXUB4ZGlnaXQrKEBoZXhpZXhwfEBmZXhwb25lbnRfYmluKUBGTE9BVFNQKi8sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiB7IHRva2VuOiAnbnVtYmVyLmZsb2F0JyB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyByZWdleDogLzBbeFhdQHhkaWdpdCtASU5UU1AqLywgYWN0aW9uOiB7IHRva2VuOiAnbnVtYmVyLmhleCcgfSB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlZ2V4OiAvMFswLTddKyg/IVswLTldKUBJTlRTUCovLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogeyB0b2tlbjogJ251bWJlci5vY3RhbCcgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8ve3JlZ2V4OiAvMC8sIGFjdGlvbjogeyB0b2tlbjogJ251bWJlcicgfSB9LCAvLyBJTlRaRVJPXG4gICAgICAgICAgICAvLyBsZXhpbmdfSU5UX2RlYzpcbiAgICAgICAgICAgIC8vIC0gdGVzdGluZ19kZWNpZXhwID0+IGxleGluZ19GTE9BVF9kZWNpZXhwXG4gICAgICAgICAgICAvLyAtIHRlc3RpbmdfZmV4cG9uZW50ID0+IGxleGluZ19GTE9BVF9kZWNpZXhwXG4gICAgICAgICAgICAvLyAtIG90aGVyd2lzZSA9PiBpbnRzcHNlcTAgKFswLTldKltsTHVVXT8pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVnZXg6IC9AZGlnaXQrKEBmZXhwb25lbnR8QGRlY2lleHApQEZMT0FUU1AqLyxcbiAgICAgICAgICAgICAgICBhY3Rpb246IHsgdG9rZW46ICdudW1iZXIuZmxvYXQnIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVnZXg6IC9AZGlnaXRAZGlnaXRzZXEwQElOVFNQKi8sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiB7IHRva2VuOiAnbnVtYmVyLmRlY2ltYWwnIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBESUdJVCwgaWYgZm9sbG93ZWQgYnkgZGlnaXRzZXEwLCBpcyBsZXhpbmdfSU5UX2RlY1xuICAgICAgICAgICAgeyByZWdleDogL0BkaWdpdCtASU5UU1AqLywgYWN0aW9uOiB7IHRva2VuOiAnbnVtYmVyJyB9IH1cbiAgICAgICAgXSxcbiAgICAgICAgbGV4aW5nX0NPTU1FTlRfYmxvY2tfbWw6IFtcbiAgICAgICAgICAgIFsvW15cXChcXCpdKy8sICdjb21tZW50J10sXG4gICAgICAgICAgICBbL1xcKFxcKi8sICdjb21tZW50JywgJ0BwdXNoJ10sXG4gICAgICAgICAgICBbL1xcKFxcKi8sICdjb21tZW50LmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvXFwqXFwpLywgJ2NvbW1lbnQnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9cXCovLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIGxleGluZ19DT01NRU5UX2Jsb2NrX2M6IFtcbiAgICAgICAgICAgIFsvW15cXC8qXSsvLCAnY29tbWVudCddLFxuICAgICAgICAgICAgLy8gWy9cXC9cXCovLCAnY29tbWVudCcsICdAcHVzaCcgXSwgICAgLy8gbmVzdGVkIEMtc3R5bGUgYmxvY2sgY29tbWVudHMgbm90IGFsbG93ZWRcbiAgICAgICAgICAgIC8vIFsvXFwvXFwqLywgICAgJ2NvbW1lbnQuaW52YWxpZCcgXSxcdC8vIE5PVEU6IHRoaXMgYnJlYWtzIGJsb2NrIGNvbW1lbnRzIGluIHRoZSBzaGFwZSBvZiAvKiAvLyovXG4gICAgICAgICAgICBbL1xcKlxcLy8sICdjb21tZW50JywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvW1xcLypdLywgJ2NvbW1lbnQnXVxuICAgICAgICBdLFxuICAgICAgICBsZXhpbmdfQ09NTUVOVF9yZXN0OiBbXG4gICAgICAgICAgICBbLyQvLCAnY29tbWVudCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbLy4qLywgJ2NvbW1lbnQnXVxuICAgICAgICBdLFxuICAgICAgICAvLyBOT1RFOiBhZGRlZCBieSBBUywgc3BlY2lmaWNhbGx5IGZvciBoaWdobGlnaHRpbmdcbiAgICAgICAgbGV4aW5nX0VGRkVDVF9jb21tYXNlcTA6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWdleDogL0BJREVOVEZTVEBJREVOVFJTVCt8QGRpZ2l0Ky8sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzX2VmZmVjdHMnOiB7IHRva2VuOiAndHlwZS5lZmZlY3QnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiB7IHRva2VuOiAnaWRlbnRpZmllcicgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgcmVnZXg6IC8sLywgYWN0aW9uOiB7IHRva2VuOiAncHVuY3R1YXRpb24nIH0gfSxcbiAgICAgICAgICAgIHsgcmVnZXg6IC8+LywgYWN0aW9uOiB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcgfSB9XG4gICAgICAgIF0sXG4gICAgICAgIGxleGluZ19FWFRDT0RFOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVnZXg6IC9eJX0vLFxuICAgICAgICAgICAgICAgIGFjdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ0ByZW1hdGNoJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0Bwb3AnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICdAcG9wJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHJlZ2V4OiAvW14lXSsvLCBhY3Rpb246ICcnIH1cbiAgICAgICAgXSxcbiAgICAgICAgbGV4aW5nX0RRVU9URTogW1xuICAgICAgICAgICAgeyByZWdleDogL1wiLywgYWN0aW9uOiB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0Bwb3AnIH0gfSxcbiAgICAgICAgICAgIC8vIEFTLTIwMTYwNjI4OiBhZGRpdGlvbmFsIGhpLWxpZ2h0aW5nIGZvciB2YXJpYWJsZXMgaW4gc3RhbG9hZC9keW5sb2FkIHN0cmluZ3NcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWdleDogLyhcXHtcXCQpKEBJREVOVEZTVEBJREVOVFJTVCopKFxcfSkvLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogW1xuICAgICAgICAgICAgICAgICAgICB7IHRva2VuOiAnc3RyaW5nLmVzY2FwZScgfSxcbiAgICAgICAgICAgICAgICAgICAgeyB0b2tlbjogJ2lkZW50aWZpZXInIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgdG9rZW46ICdzdHJpbmcuZXNjYXBlJyB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgcmVnZXg6IC9cXFxcJC8sIGFjdGlvbjogeyB0b2tlbjogJ3N0cmluZy5lc2NhcGUnIH0gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWdleDogL1xcXFwoQEVTQ0hBUnxbeFhdQHhkaWdpdCt8QGRpZ2l0KykvLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogeyB0b2tlbjogJ3N0cmluZy5lc2NhcGUnIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHJlZ2V4OiAvW15cXFxcXCJdKy8sIGFjdGlvbjogeyB0b2tlbjogJ3N0cmluZycgfSB9XG4gICAgICAgIF1cbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==