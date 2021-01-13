(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/ruby/ruby.js":
/*!********************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/ruby/ruby.js ***!
  \********************************************************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conf", function() { return conf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var conf = {
    comments: {
        lineComment: '#',
        blockComment: ['=begin', '=end']
    },
    brackets: [
        ['(', ')'],
        ['{', '}'],
        ['[', ']']
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: "'", close: "'" }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: "'", close: "'" }
    ],
    indentationRules: {
        increaseIndentPattern: new RegExp('^\\s*((begin|class|(private|protected)\\s+def|def|else|elsif|ensure|for|if|module|rescue|unless|until|when|while|case)|([^#]*\\sdo\\b)|([^#]*=\\s*(case|if|unless)))\\b([^#\\{;]|("|\'|/).*\\4)*(#.*)?$'),
        decreaseIndentPattern: new RegExp('^\\s*([}\\]]([,)]?\\s*(#|$)|\\.[a-zA-Z_]\\w*\\b)|(end|rescue|ensure|else|elsif|when)\\b)')
    }
};
/*
 * Ruby language definition
 *
 * Quite a complex language due to elaborate escape sequences
 * and quoting of literate strings/regular expressions, and
 * an 'end' keyword that does not always apply to modifiers like until and while,
 * and a 'do' keyword that sometimes starts a block, but sometimes is part of
 * another statement (like 'while').
 *
 * (1) end blocks:
 * 'end' may end declarations like if or until, but sometimes 'if' or 'until'
 * are modifiers where there is no 'end'. Also, 'do' sometimes starts a block
 * that is ended by 'end', but sometimes it is part of a 'while', 'for', or 'until'
 * To do proper brace matching we do some elaborate state manipulation.
 * some examples:
 *
 *   until bla do
 *     work until tired
 *     list.each do
 *       something if test
 *     end
 *   end
 *
 * or
 *
 * if test
 *  something (if test then x end)
 *  bar if bla
 * end
 *
 * or, how about using class as a property..
 *
 * class Test
 *   def endpoint
 *     self.class.endpoint || routes
 *   end
 * end
 *
 * (2) quoting:
 * there are many kinds of strings and escape sequences. But also, one can
 * start many string-like things as '%qx' where q specifies the kind of string
 * (like a command, escape expanded, regular expression, symbol etc.), and x is
 * some character and only another 'x' ends the sequence. Except for brackets
 * where the closing bracket ends the sequence.. and except for a nested bracket
 * inside the string like entity. Also, such strings can contain interpolated
 * ruby expressions again (and span multiple lines). Moreover, expanded
 * regular expression can also contain comments.
 */
var language = {
    tokenPostfix: '.ruby',
    keywords: [
        '__LINE__',
        '__ENCODING__',
        '__FILE__',
        'BEGIN',
        'END',
        'alias',
        'and',
        'begin',
        'break',
        'case',
        'class',
        'def',
        'defined?',
        'do',
        'else',
        'elsif',
        'end',
        'ensure',
        'for',
        'false',
        'if',
        'in',
        'module',
        'next',
        'nil',
        'not',
        'or',
        'redo',
        'rescue',
        'retry',
        'return',
        'self',
        'super',
        'then',
        'true',
        'undef',
        'unless',
        'until',
        'when',
        'while',
        'yield'
    ],
    keywordops: ['::', '..', '...', '?', ':', '=>'],
    builtins: [
        'require',
        'public',
        'private',
        'include',
        'extend',
        'attr_reader',
        'protected',
        'private_class_method',
        'protected_class_method',
        'new'
    ],
    // these are closed by 'end' (if, while and until are handled separately)
    declarations: [
        'module',
        'class',
        'def',
        'case',
        'do',
        'begin',
        'for',
        'if',
        'while',
        'until',
        'unless'
    ],
    linedecls: ['def', 'case', 'do', 'begin', 'for', 'if', 'while', 'until', 'unless'],
    operators: [
        '^',
        '&',
        '|',
        '<=>',
        '==',
        '===',
        '!~',
        '=~',
        '>',
        '>=',
        '<',
        '<=',
        '<<',
        '>>',
        '+',
        '-',
        '*',
        '/',
        '%',
        '**',
        '~',
        '+@',
        '-@',
        '[]',
        '[]=',
        '`',
        '+=',
        '-=',
        '*=',
        '**=',
        '/=',
        '^=',
        '%=',
        '<<=',
        '>>=',
        '&=',
        '&&=',
        '||=',
        '|='
    ],
    brackets: [
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.square' }
    ],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%\.]+/,
    // escape sequences
    escape: /(?:[abefnrstv\\"'\n\r]|[0-7]{1,3}|x[0-9A-Fa-f]{1,2}|u[0-9A-Fa-f]{4})/,
    escapes: /\\(?:C\-(@escape|.)|c(@escape|.)|@escape)/,
    decpart: /\d(_?\d)*/,
    decimal: /0|@decpart/,
    delim: /[^a-zA-Z0-9\s\n\r]/,
    heredelim: /(?:\w+|'[^']*'|"[^"]*"|`[^`]*`)/,
    regexpctl: /[(){}\[\]\$\^|\-*+?\.]/,
    regexpesc: /\\(?:[AzZbBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})?/,
    // The main tokenizer for our languages
    tokenizer: {
        // Main entry.
        // root.<decl> where decl is the current opening declaration (like 'class')
        root: [
            // identifiers and keywords
            // most complexity here is due to matching 'end' correctly with declarations.
            // We distinguish a declaration that comes first on a line, versus declarations further on a line (which are most likey modifiers)
            [
                /^(\s*)([a-z_]\w*[!?=]?)/,
                [
                    'white',
                    {
                        cases: {
                            'for|until|while': {
                                token: 'keyword.$2',
                                next: '@dodecl.$2'
                            },
                            '@declarations': {
                                token: 'keyword.$2',
                                next: '@root.$2'
                            },
                            end: { token: 'keyword.$S2', next: '@pop' },
                            '@keywords': 'keyword',
                            '@builtins': 'predefined',
                            '@default': 'identifier'
                        }
                    }
                ]
            ],
            [
                /[a-z_]\w*[!?=]?/,
                {
                    cases: {
                        'if|unless|while|until': {
                            token: 'keyword.$0x',
                            next: '@modifier.$0x'
                        },
                        for: { token: 'keyword.$2', next: '@dodecl.$2' },
                        '@linedecls': { token: 'keyword.$0', next: '@root.$0' },
                        end: { token: 'keyword.$S2', next: '@pop' },
                        '@keywords': 'keyword',
                        '@builtins': 'predefined',
                        '@default': 'identifier'
                    }
                }
            ],
            [/[A-Z][\w]*[!?=]?/, 'constructor.identifier'],
            [/\$[\w]*/, 'global.constant'],
            [/@[\w]*/, 'namespace.instance.identifier'],
            [/@@[\w]*/, 'namespace.class.identifier'],
            // here document
            [/<<[-~](@heredelim).*/, { token: 'string.heredoc.delimiter', next: '@heredoc.$1' }],
            [
                /[ \t\r\n]+<<(@heredelim).*/,
                { token: 'string.heredoc.delimiter', next: '@heredoc.$1' }
            ],
            [/^<<(@heredelim).*/, { token: 'string.heredoc.delimiter', next: '@heredoc.$1' }],
            // whitespace
            { include: '@whitespace' },
            // strings
            [/"/, { token: 'string.d.delim', next: '@dstring.d."' }],
            [/'/, { token: 'string.sq.delim', next: '@sstring.sq' }],
            // % literals. For efficiency, rematch in the 'pstring' state
            [/%([rsqxwW]|Q?)/, { token: '@rematch', next: 'pstring' }],
            // commands and symbols
            [/`/, { token: 'string.x.delim', next: '@dstring.x.`' }],
            [/:(\w|[$@])\w*[!?=]?/, 'string.s'],
            [/:"/, { token: 'string.s.delim', next: '@dstring.s."' }],
            [/:'/, { token: 'string.s.delim', next: '@sstring.s' }],
            // regular expressions. Lookahead for a (not escaped) closing forwardslash on the same line
            [/\/(?=(\\\/|[^\/\n])+\/)/, { token: 'regexp.delim', next: '@regexp' }],
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [
                /@symbols/,
                {
                    cases: {
                        '@keywordops': 'keyword',
                        '@operators': 'operator',
                        '@default': ''
                    }
                }
            ],
            [/[;,]/, 'delimiter'],
            // numbers
            [/0[xX][0-9a-fA-F](_?[0-9a-fA-F])*/, 'number.hex'],
            [/0[_oO][0-7](_?[0-7])*/, 'number.octal'],
            [/0[bB][01](_?[01])*/, 'number.binary'],
            [/0[dD]@decpart/, 'number'],
            [
                /@decimal((\.@decpart)?([eE][\-+]?@decpart)?)/,
                {
                    cases: {
                        $1: 'number.float',
                        '@default': 'number'
                    }
                }
            ]
        ],
        // used to not treat a 'do' as a block opener if it occurs on the same
        // line as a 'do' statement: 'while|until|for'
        // dodecl.<decl> where decl is the declarations started, like 'while'
        dodecl: [
            [/^/, { token: '', switchTo: '@root.$S2' }],
            [
                /[a-z_]\w*[!?=]?/,
                {
                    cases: {
                        end: { token: 'keyword.$S2', next: '@pop' },
                        do: { token: 'keyword', switchTo: '@root.$S2' },
                        '@linedecls': {
                            token: '@rematch',
                            switchTo: '@root.$S2'
                        },
                        '@keywords': 'keyword',
                        '@builtins': 'predefined',
                        '@default': 'identifier'
                    }
                }
            ],
            { include: '@root' }
        ],
        // used to prevent potential modifiers ('if|until|while|unless') to match
        // with 'end' keywords.
        // modifier.<decl>x where decl is the declaration starter, like 'if'
        modifier: [
            [/^/, '', '@pop'],
            [
                /[a-z_]\w*[!?=]?/,
                {
                    cases: {
                        end: { token: 'keyword.$S2', next: '@pop' },
                        'then|else|elsif|do': {
                            token: 'keyword',
                            switchTo: '@root.$S2'
                        },
                        '@linedecls': {
                            token: '@rematch',
                            switchTo: '@root.$S2'
                        },
                        '@keywords': 'keyword',
                        '@builtins': 'predefined',
                        '@default': 'identifier'
                    }
                }
            ],
            { include: '@root' }
        ],
        // single quote strings (also used for symbols)
        // sstring.<kind>  where kind is 'sq' (single quote) or 's' (symbol)
        sstring: [
            [/[^\\']+/, 'string.$S2'],
            [/\\\\|\\'|\\$/, 'string.$S2.escape'],
            [/\\./, 'string.$S2.invalid'],
            [/'/, { token: 'string.$S2.delim', next: '@pop' }]
        ],
        // double quoted "string".
        // dstring.<kind>.<delim> where kind is 'd' (double quoted), 'x' (command), or 's' (symbol)
        // and delim is the ending delimiter (" or `)
        dstring: [
            [/[^\\`"#]+/, 'string.$S2'],
            [/#/, 'string.$S2.escape', '@interpolated'],
            [/\\$/, 'string.$S2.escape'],
            [/@escapes/, 'string.$S2.escape'],
            [/\\./, 'string.$S2.escape.invalid'],
            [
                /[`"]/,
                {
                    cases: {
                        '$#==$S3': { token: 'string.$S2.delim', next: '@pop' },
                        '@default': 'string.$S2'
                    }
                }
            ]
        ],
        // literal documents
        // heredoc.<close> where close is the closing delimiter
        heredoc: [
            [
                /^(\s*)(@heredelim)$/,
                {
                    cases: {
                        '$2==$S2': [
                            'string.heredoc',
                            { token: 'string.heredoc.delimiter', next: '@pop' }
                        ],
                        '@default': ['string.heredoc', 'string.heredoc']
                    }
                }
            ],
            [/.*/, 'string.heredoc']
        ],
        // interpolated sequence
        interpolated: [
            [/\$\w*/, 'global.constant', '@pop'],
            [/@\w*/, 'namespace.class.identifier', '@pop'],
            [/@@\w*/, 'namespace.instance.identifier', '@pop'],
            [
                /[{]/,
                {
                    token: 'string.escape.curly',
                    switchTo: '@interpolated_compound'
                }
            ],
            ['', '', '@pop'] // just a # is interpreted as a #
        ],
        // any code
        interpolated_compound: [
            [/[}]/, { token: 'string.escape.curly', next: '@pop' }],
            { include: '@root' }
        ],
        // %r quoted regexp
        // pregexp.<open>.<close> where open/close are the open/close delimiter
        pregexp: [
            { include: '@whitespace' },
            // turns out that you can quote using regex control characters, aargh!
            // for example; %r|kgjgaj| is ok (even though | is used for alternation)
            // so, we need to match those first
            [
                /[^\(\{\[\\]/,
                {
                    cases: {
                        '$#==$S3': { token: 'regexp.delim', next: '@pop' },
                        '$#==$S2': { token: 'regexp.delim', next: '@push' },
                        '~[)}\\]]': '@brackets.regexp.escape.control',
                        '~@regexpctl': 'regexp.escape.control',
                        '@default': 'regexp'
                    }
                }
            ],
            { include: '@regexcontrol' }
        ],
        // We match regular expression quite precisely
        regexp: [
            { include: '@regexcontrol' },
            [/[^\\\/]/, 'regexp'],
            ['/[ixmp]*', { token: 'regexp.delim' }, '@pop']
        ],
        regexcontrol: [
            [
                /(\{)(\d+(?:,\d*)?)(\})/,
                [
                    '@brackets.regexp.escape.control',
                    'regexp.escape.control',
                    '@brackets.regexp.escape.control'
                ]
            ],
            [
                /(\[)(\^?)/,
                [
                    '@brackets.regexp.escape.control',
                    { token: 'regexp.escape.control', next: '@regexrange' }
                ]
            ],
            [/(\()(\?[:=!])/, ['@brackets.regexp.escape.control', 'regexp.escape.control']],
            [/\(\?#/, { token: 'regexp.escape.control', next: '@regexpcomment' }],
            [/[()]/, '@brackets.regexp.escape.control'],
            [/@regexpctl/, 'regexp.escape.control'],
            [/\\$/, 'regexp.escape'],
            [/@regexpesc/, 'regexp.escape'],
            [/\\\./, 'regexp.invalid'],
            [/#/, 'regexp.escape', '@interpolated']
        ],
        regexrange: [
            [/-/, 'regexp.escape.control'],
            [/\^/, 'regexp.invalid'],
            [/\\$/, 'regexp.escape'],
            [/@regexpesc/, 'regexp.escape'],
            [/[^\]]/, 'regexp'],
            [/\]/, '@brackets.regexp.escape.control', '@pop']
        ],
        regexpcomment: [
            [/[^)]+/, 'comment'],
            [/\)/, { token: 'regexp.escape.control', next: '@pop' }]
        ],
        // % quoted strings
        // A bit repetitive since we need to often special case the kind of ending delimiter
        pstring: [
            [/%([qws])\(/, { token: 'string.$1.delim', switchTo: '@qstring.$1.(.)' }],
            [/%([qws])\[/, { token: 'string.$1.delim', switchTo: '@qstring.$1.[.]' }],
            [/%([qws])\{/, { token: 'string.$1.delim', switchTo: '@qstring.$1.{.}' }],
            [/%([qws])</, { token: 'string.$1.delim', switchTo: '@qstring.$1.<.>' }],
            [/%([qws])(@delim)/, { token: 'string.$1.delim', switchTo: '@qstring.$1.$2.$2' }],
            [/%r\(/, { token: 'regexp.delim', switchTo: '@pregexp.(.)' }],
            [/%r\[/, { token: 'regexp.delim', switchTo: '@pregexp.[.]' }],
            [/%r\{/, { token: 'regexp.delim', switchTo: '@pregexp.{.}' }],
            [/%r</, { token: 'regexp.delim', switchTo: '@pregexp.<.>' }],
            [/%r(@delim)/, { token: 'regexp.delim', switchTo: '@pregexp.$1.$1' }],
            [/%(x|W|Q?)\(/, { token: 'string.$1.delim', switchTo: '@qqstring.$1.(.)' }],
            [/%(x|W|Q?)\[/, { token: 'string.$1.delim', switchTo: '@qqstring.$1.[.]' }],
            [/%(x|W|Q?)\{/, { token: 'string.$1.delim', switchTo: '@qqstring.$1.{.}' }],
            [/%(x|W|Q?)</, { token: 'string.$1.delim', switchTo: '@qqstring.$1.<.>' }],
            [/%(x|W|Q?)(@delim)/, { token: 'string.$1.delim', switchTo: '@qqstring.$1.$2.$2' }],
            [/%([rqwsxW]|Q?)./, { token: 'invalid', next: '@pop' }],
            [/./, { token: 'invalid', next: '@pop' }] // recover
        ],
        // non-expanded quoted string.
        // qstring.<kind>.<open>.<close>
        //  kind = q|w|s  (single quote, array, symbol)
        //  open = open delimiter
        //  close = close delimiter
        qstring: [
            [/\\$/, 'string.$S2.escape'],
            [/\\./, 'string.$S2.escape'],
            [
                /./,
                {
                    cases: {
                        '$#==$S4': { token: 'string.$S2.delim', next: '@pop' },
                        '$#==$S3': { token: 'string.$S2.delim', next: '@push' },
                        '@default': 'string.$S2'
                    }
                }
            ]
        ],
        // expanded quoted string.
        // qqstring.<kind>.<open>.<close>
        //  kind = Q|W|x  (double quote, array, command)
        //  open = open delimiter
        //  close = close delimiter
        qqstring: [[/#/, 'string.$S2.escape', '@interpolated'], { include: '@qstring' }],
        // whitespace & comments
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/^\s*=begin\b/, 'comment', '@comment'],
            [/#.*$/, 'comment']
        ],
        comment: [
            [/[^=]+/, 'comment'],
            [/^\s*=begin\b/, 'comment.invalid'],
            [/^\s*=end\b.*/, 'comment', '@pop'],
            [/[=]/, 'comment']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvcnVieS9ydWJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDQSwwTkFBME47QUFDMU4sbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFrQywwREFBMEQ7QUFDNUYsc0JBQXNCLGtEQUFrRDtBQUN4RSxzQkFBc0Isa0RBQWtEO0FBQ3hFLGtCQUFrQixJQUFJLDZDQUE2QyxFQUFFLEdBQUc7QUFDeEUscUJBQXFCLGtEQUFrRDtBQUN2RSw0QkFBNEIsb0RBQW9EO0FBQ2hGLDZCQUE2Qix5REFBeUQ7QUFDdEYsNkJBQTZCLHlEQUF5RDtBQUN0Rix5QkFBeUIsSUFBSSxvREFBb0QsRUFBRSxHQUFHO0FBQ3RGLDRCQUE0Qix5REFBeUQ7QUFDckYsbUNBQW1DLDJEQUEyRDtBQUM5RixpQ0FBaUMsaUNBQWlDO0FBQ2xFLG1CQUFtQixpQ0FBaUM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsMENBQTBDO0FBQzlFLG9DQUFvQywyQ0FBMkM7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsc0JBQXNCO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiNTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICBjb21tZW50czoge1xuICAgICAgICBsaW5lQ29tbWVudDogJyMnLFxuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnPWJlZ2luJywgJz1lbmQnXVxuICAgIH0sXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgWycoJywgJyknXSxcbiAgICAgICAgWyd7JywgJ30nXSxcbiAgICAgICAgWydbJywgJ10nXVxuICAgIF0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9XG4gICAgXSxcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH1cbiAgICBdLFxuICAgIGluZGVudGF0aW9uUnVsZXM6IHtcbiAgICAgICAgaW5jcmVhc2VJbmRlbnRQYXR0ZXJuOiBuZXcgUmVnRXhwKCdeXFxcXHMqKChiZWdpbnxjbGFzc3wocHJpdmF0ZXxwcm90ZWN0ZWQpXFxcXHMrZGVmfGRlZnxlbHNlfGVsc2lmfGVuc3VyZXxmb3J8aWZ8bW9kdWxlfHJlc2N1ZXx1bmxlc3N8dW50aWx8d2hlbnx3aGlsZXxjYXNlKXwoW14jXSpcXFxcc2RvXFxcXGIpfChbXiNdKj1cXFxccyooY2FzZXxpZnx1bmxlc3MpKSlcXFxcYihbXiNcXFxceztdfChcInxcXCd8LykuKlxcXFw0KSooIy4qKT8kJyksXG4gICAgICAgIGRlY3JlYXNlSW5kZW50UGF0dGVybjogbmV3IFJlZ0V4cCgnXlxcXFxzKihbfVxcXFxdXShbLCldP1xcXFxzKigjfCQpfFxcXFwuW2EtekEtWl9dXFxcXHcqXFxcXGIpfChlbmR8cmVzY3VlfGVuc3VyZXxlbHNlfGVsc2lmfHdoZW4pXFxcXGIpJylcbiAgICB9XG59O1xuLypcbiAqIFJ1YnkgbGFuZ3VhZ2UgZGVmaW5pdGlvblxuICpcbiAqIFF1aXRlIGEgY29tcGxleCBsYW5ndWFnZSBkdWUgdG8gZWxhYm9yYXRlIGVzY2FwZSBzZXF1ZW5jZXNcbiAqIGFuZCBxdW90aW5nIG9mIGxpdGVyYXRlIHN0cmluZ3MvcmVndWxhciBleHByZXNzaW9ucywgYW5kXG4gKiBhbiAnZW5kJyBrZXl3b3JkIHRoYXQgZG9lcyBub3QgYWx3YXlzIGFwcGx5IHRvIG1vZGlmaWVycyBsaWtlIHVudGlsIGFuZCB3aGlsZSxcbiAqIGFuZCBhICdkbycga2V5d29yZCB0aGF0IHNvbWV0aW1lcyBzdGFydHMgYSBibG9jaywgYnV0IHNvbWV0aW1lcyBpcyBwYXJ0IG9mXG4gKiBhbm90aGVyIHN0YXRlbWVudCAobGlrZSAnd2hpbGUnKS5cbiAqXG4gKiAoMSkgZW5kIGJsb2NrczpcbiAqICdlbmQnIG1heSBlbmQgZGVjbGFyYXRpb25zIGxpa2UgaWYgb3IgdW50aWwsIGJ1dCBzb21ldGltZXMgJ2lmJyBvciAndW50aWwnXG4gKiBhcmUgbW9kaWZpZXJzIHdoZXJlIHRoZXJlIGlzIG5vICdlbmQnLiBBbHNvLCAnZG8nIHNvbWV0aW1lcyBzdGFydHMgYSBibG9ja1xuICogdGhhdCBpcyBlbmRlZCBieSAnZW5kJywgYnV0IHNvbWV0aW1lcyBpdCBpcyBwYXJ0IG9mIGEgJ3doaWxlJywgJ2ZvcicsIG9yICd1bnRpbCdcbiAqIFRvIGRvIHByb3BlciBicmFjZSBtYXRjaGluZyB3ZSBkbyBzb21lIGVsYWJvcmF0ZSBzdGF0ZSBtYW5pcHVsYXRpb24uXG4gKiBzb21lIGV4YW1wbGVzOlxuICpcbiAqICAgdW50aWwgYmxhIGRvXG4gKiAgICAgd29yayB1bnRpbCB0aXJlZFxuICogICAgIGxpc3QuZWFjaCBkb1xuICogICAgICAgc29tZXRoaW5nIGlmIHRlc3RcbiAqICAgICBlbmRcbiAqICAgZW5kXG4gKlxuICogb3JcbiAqXG4gKiBpZiB0ZXN0XG4gKiAgc29tZXRoaW5nIChpZiB0ZXN0IHRoZW4geCBlbmQpXG4gKiAgYmFyIGlmIGJsYVxuICogZW5kXG4gKlxuICogb3IsIGhvdyBhYm91dCB1c2luZyBjbGFzcyBhcyBhIHByb3BlcnR5Li5cbiAqXG4gKiBjbGFzcyBUZXN0XG4gKiAgIGRlZiBlbmRwb2ludFxuICogICAgIHNlbGYuY2xhc3MuZW5kcG9pbnQgfHwgcm91dGVzXG4gKiAgIGVuZFxuICogZW5kXG4gKlxuICogKDIpIHF1b3Rpbmc6XG4gKiB0aGVyZSBhcmUgbWFueSBraW5kcyBvZiBzdHJpbmdzIGFuZCBlc2NhcGUgc2VxdWVuY2VzLiBCdXQgYWxzbywgb25lIGNhblxuICogc3RhcnQgbWFueSBzdHJpbmctbGlrZSB0aGluZ3MgYXMgJyVxeCcgd2hlcmUgcSBzcGVjaWZpZXMgdGhlIGtpbmQgb2Ygc3RyaW5nXG4gKiAobGlrZSBhIGNvbW1hbmQsIGVzY2FwZSBleHBhbmRlZCwgcmVndWxhciBleHByZXNzaW9uLCBzeW1ib2wgZXRjLiksIGFuZCB4IGlzXG4gKiBzb21lIGNoYXJhY3RlciBhbmQgb25seSBhbm90aGVyICd4JyBlbmRzIHRoZSBzZXF1ZW5jZS4gRXhjZXB0IGZvciBicmFja2V0c1xuICogd2hlcmUgdGhlIGNsb3NpbmcgYnJhY2tldCBlbmRzIHRoZSBzZXF1ZW5jZS4uIGFuZCBleGNlcHQgZm9yIGEgbmVzdGVkIGJyYWNrZXRcbiAqIGluc2lkZSB0aGUgc3RyaW5nIGxpa2UgZW50aXR5LiBBbHNvLCBzdWNoIHN0cmluZ3MgY2FuIGNvbnRhaW4gaW50ZXJwb2xhdGVkXG4gKiBydWJ5IGV4cHJlc3Npb25zIGFnYWluIChhbmQgc3BhbiBtdWx0aXBsZSBsaW5lcykuIE1vcmVvdmVyLCBleHBhbmRlZFxuICogcmVndWxhciBleHByZXNzaW9uIGNhbiBhbHNvIGNvbnRhaW4gY29tbWVudHMuXG4gKi9cbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgdG9rZW5Qb3N0Zml4OiAnLnJ1YnknLFxuICAgIGtleXdvcmRzOiBbXG4gICAgICAgICdfX0xJTkVfXycsXG4gICAgICAgICdfX0VOQ09ESU5HX18nLFxuICAgICAgICAnX19GSUxFX18nLFxuICAgICAgICAnQkVHSU4nLFxuICAgICAgICAnRU5EJyxcbiAgICAgICAgJ2FsaWFzJyxcbiAgICAgICAgJ2FuZCcsXG4gICAgICAgICdiZWdpbicsXG4gICAgICAgICdicmVhaycsXG4gICAgICAgICdjYXNlJyxcbiAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgJ2RlZicsXG4gICAgICAgICdkZWZpbmVkPycsXG4gICAgICAgICdkbycsXG4gICAgICAgICdlbHNlJyxcbiAgICAgICAgJ2Vsc2lmJyxcbiAgICAgICAgJ2VuZCcsXG4gICAgICAgICdlbnN1cmUnLFxuICAgICAgICAnZm9yJyxcbiAgICAgICAgJ2ZhbHNlJyxcbiAgICAgICAgJ2lmJyxcbiAgICAgICAgJ2luJyxcbiAgICAgICAgJ21vZHVsZScsXG4gICAgICAgICduZXh0JyxcbiAgICAgICAgJ25pbCcsXG4gICAgICAgICdub3QnLFxuICAgICAgICAnb3InLFxuICAgICAgICAncmVkbycsXG4gICAgICAgICdyZXNjdWUnLFxuICAgICAgICAncmV0cnknLFxuICAgICAgICAncmV0dXJuJyxcbiAgICAgICAgJ3NlbGYnLFxuICAgICAgICAnc3VwZXInLFxuICAgICAgICAndGhlbicsXG4gICAgICAgICd0cnVlJyxcbiAgICAgICAgJ3VuZGVmJyxcbiAgICAgICAgJ3VubGVzcycsXG4gICAgICAgICd1bnRpbCcsXG4gICAgICAgICd3aGVuJyxcbiAgICAgICAgJ3doaWxlJyxcbiAgICAgICAgJ3lpZWxkJ1xuICAgIF0sXG4gICAga2V5d29yZG9wczogWyc6OicsICcuLicsICcuLi4nLCAnPycsICc6JywgJz0+J10sXG4gICAgYnVpbHRpbnM6IFtcbiAgICAgICAgJ3JlcXVpcmUnLFxuICAgICAgICAncHVibGljJyxcbiAgICAgICAgJ3ByaXZhdGUnLFxuICAgICAgICAnaW5jbHVkZScsXG4gICAgICAgICdleHRlbmQnLFxuICAgICAgICAnYXR0cl9yZWFkZXInLFxuICAgICAgICAncHJvdGVjdGVkJyxcbiAgICAgICAgJ3ByaXZhdGVfY2xhc3NfbWV0aG9kJyxcbiAgICAgICAgJ3Byb3RlY3RlZF9jbGFzc19tZXRob2QnLFxuICAgICAgICAnbmV3J1xuICAgIF0sXG4gICAgLy8gdGhlc2UgYXJlIGNsb3NlZCBieSAnZW5kJyAoaWYsIHdoaWxlIGFuZCB1bnRpbCBhcmUgaGFuZGxlZCBzZXBhcmF0ZWx5KVxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICAnbW9kdWxlJyxcbiAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgJ2RlZicsXG4gICAgICAgICdjYXNlJyxcbiAgICAgICAgJ2RvJyxcbiAgICAgICAgJ2JlZ2luJyxcbiAgICAgICAgJ2ZvcicsXG4gICAgICAgICdpZicsXG4gICAgICAgICd3aGlsZScsXG4gICAgICAgICd1bnRpbCcsXG4gICAgICAgICd1bmxlc3MnXG4gICAgXSxcbiAgICBsaW5lZGVjbHM6IFsnZGVmJywgJ2Nhc2UnLCAnZG8nLCAnYmVnaW4nLCAnZm9yJywgJ2lmJywgJ3doaWxlJywgJ3VudGlsJywgJ3VubGVzcyddLFxuICAgIG9wZXJhdG9yczogW1xuICAgICAgICAnXicsXG4gICAgICAgICcmJyxcbiAgICAgICAgJ3wnLFxuICAgICAgICAnPD0+JyxcbiAgICAgICAgJz09JyxcbiAgICAgICAgJz09PScsXG4gICAgICAgICchficsXG4gICAgICAgICc9ficsXG4gICAgICAgICc+JyxcbiAgICAgICAgJz49JyxcbiAgICAgICAgJzwnLFxuICAgICAgICAnPD0nLFxuICAgICAgICAnPDwnLFxuICAgICAgICAnPj4nLFxuICAgICAgICAnKycsXG4gICAgICAgICctJyxcbiAgICAgICAgJyonLFxuICAgICAgICAnLycsXG4gICAgICAgICclJyxcbiAgICAgICAgJyoqJyxcbiAgICAgICAgJ34nLFxuICAgICAgICAnK0AnLFxuICAgICAgICAnLUAnLFxuICAgICAgICAnW10nLFxuICAgICAgICAnW109JyxcbiAgICAgICAgJ2AnLFxuICAgICAgICAnKz0nLFxuICAgICAgICAnLT0nLFxuICAgICAgICAnKj0nLFxuICAgICAgICAnKio9JyxcbiAgICAgICAgJy89JyxcbiAgICAgICAgJ149JyxcbiAgICAgICAgJyU9JyxcbiAgICAgICAgJzw8PScsXG4gICAgICAgICc+Pj0nLFxuICAgICAgICAnJj0nLFxuICAgICAgICAnJiY9JyxcbiAgICAgICAgJ3x8PScsXG4gICAgICAgICd8PSdcbiAgICBdLFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfSxcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScsIHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgdG9rZW46ICdkZWxpbWl0ZXIuc3F1YXJlJyB9XG4gICAgXSxcbiAgICAvLyB3ZSBpbmNsdWRlIHRoZXNlIGNvbW1vbiByZWd1bGFyIGV4cHJlc3Npb25zXG4gICAgc3ltYm9sczogL1s9Pjwhfj86JnwrXFwtKlxcL1xcXiVcXC5dKy8sXG4gICAgLy8gZXNjYXBlIHNlcXVlbmNlc1xuICAgIGVzY2FwZTogLyg/OlthYmVmbnJzdHZcXFxcXCInXFxuXFxyXXxbMC03XXsxLDN9fHhbMC05QS1GYS1mXXsxLDJ9fHVbMC05QS1GYS1mXXs0fSkvLFxuICAgIGVzY2FwZXM6IC9cXFxcKD86Q1xcLShAZXNjYXBlfC4pfGMoQGVzY2FwZXwuKXxAZXNjYXBlKS8sXG4gICAgZGVjcGFydDogL1xcZChfP1xcZCkqLyxcbiAgICBkZWNpbWFsOiAvMHxAZGVjcGFydC8sXG4gICAgZGVsaW06IC9bXmEtekEtWjAtOVxcc1xcblxccl0vLFxuICAgIGhlcmVkZWxpbTogLyg/Olxcdyt8J1teJ10qJ3xcIlteXCJdKlwifGBbXmBdKmApLyxcbiAgICByZWdleHBjdGw6IC9bKCl7fVxcW1xcXVxcJFxcXnxcXC0qKz9cXC5dLyxcbiAgICByZWdleHBlc2M6IC9cXFxcKD86W0F6WmJCZERmbnJzdHZ3V24wXFxcXFxcL118QHJlZ2V4cGN0bHxjW0EtWl18eFswLTlhLWZBLUZdezJ9fHVbMC05YS1mQS1GXXs0fSk/LyxcbiAgICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIG91ciBsYW5ndWFnZXNcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgLy8gTWFpbiBlbnRyeS5cbiAgICAgICAgLy8gcm9vdC48ZGVjbD4gd2hlcmUgZGVjbCBpcyB0aGUgY3VycmVudCBvcGVuaW5nIGRlY2xhcmF0aW9uIChsaWtlICdjbGFzcycpXG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIC8vIGlkZW50aWZpZXJzIGFuZCBrZXl3b3Jkc1xuICAgICAgICAgICAgLy8gbW9zdCBjb21wbGV4aXR5IGhlcmUgaXMgZHVlIHRvIG1hdGNoaW5nICdlbmQnIGNvcnJlY3RseSB3aXRoIGRlY2xhcmF0aW9ucy5cbiAgICAgICAgICAgIC8vIFdlIGRpc3Rpbmd1aXNoIGEgZGVjbGFyYXRpb24gdGhhdCBjb21lcyBmaXJzdCBvbiBhIGxpbmUsIHZlcnN1cyBkZWNsYXJhdGlvbnMgZnVydGhlciBvbiBhIGxpbmUgKHdoaWNoIGFyZSBtb3N0IGxpa2V5IG1vZGlmaWVycylcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXihcXHMqKShbYS16X11cXHcqWyE/PV0/KS8sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmb3J8dW50aWx8d2hpbGUnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiAna2V5d29yZC4kMicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAZG9kZWNsLiQyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWNsYXJhdGlvbnMnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiAna2V5d29yZC4kMicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAcm9vdC4kMidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogeyB0b2tlbjogJ2tleXdvcmQuJFMyJywgbmV4dDogJ0Bwb3AnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQGJ1aWx0aW5zJzogJ3ByZWRlZmluZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvW2Etel9dXFx3KlshPz1dPy8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2lmfHVubGVzc3x3aGlsZXx1bnRpbCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2tleXdvcmQuJDB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQG1vZGlmaWVyLiQweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3I6IHsgdG9rZW46ICdrZXl3b3JkLiQyJywgbmV4dDogJ0Bkb2RlY2wuJDInIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGxpbmVkZWNscyc6IHsgdG9rZW46ICdrZXl3b3JkLiQwJywgbmV4dDogJ0Byb290LiQwJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiB7IHRva2VuOiAna2V5d29yZC4kUzInLCBuZXh0OiAnQHBvcCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiAna2V5d29yZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGJ1aWx0aW5zJzogJ3ByZWRlZmluZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9bQS1aXVtcXHddKlshPz1dPy8sICdjb25zdHJ1Y3Rvci5pZGVudGlmaWVyJ10sXG4gICAgICAgICAgICBbL1xcJFtcXHddKi8sICdnbG9iYWwuY29uc3RhbnQnXSxcbiAgICAgICAgICAgIFsvQFtcXHddKi8sICduYW1lc3BhY2UuaW5zdGFuY2UuaWRlbnRpZmllciddLFxuICAgICAgICAgICAgWy9AQFtcXHddKi8sICduYW1lc3BhY2UuY2xhc3MuaWRlbnRpZmllciddLFxuICAgICAgICAgICAgLy8gaGVyZSBkb2N1bWVudFxuICAgICAgICAgICAgWy88PFstfl0oQGhlcmVkZWxpbSkuKi8sIHsgdG9rZW46ICdzdHJpbmcuaGVyZWRvYy5kZWxpbWl0ZXInLCBuZXh0OiAnQGhlcmVkb2MuJDEnIH1dLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9bIFxcdFxcclxcbl0rPDwoQGhlcmVkZWxpbSkuKi8sXG4gICAgICAgICAgICAgICAgeyB0b2tlbjogJ3N0cmluZy5oZXJlZG9jLmRlbGltaXRlcicsIG5leHQ6ICdAaGVyZWRvYy4kMScgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvXjw8KEBoZXJlZGVsaW0pLiovLCB7IHRva2VuOiAnc3RyaW5nLmhlcmVkb2MuZGVsaW1pdGVyJywgbmV4dDogJ0BoZXJlZG9jLiQxJyB9XSxcbiAgICAgICAgICAgIC8vIHdoaXRlc3BhY2VcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxuICAgICAgICAgICAgLy8gc3RyaW5nc1xuICAgICAgICAgICAgWy9cIi8sIHsgdG9rZW46ICdzdHJpbmcuZC5kZWxpbScsIG5leHQ6ICdAZHN0cmluZy5kLlwiJyB9XSxcbiAgICAgICAgICAgIFsvJy8sIHsgdG9rZW46ICdzdHJpbmcuc3EuZGVsaW0nLCBuZXh0OiAnQHNzdHJpbmcuc3EnIH1dLFxuICAgICAgICAgICAgLy8gJSBsaXRlcmFscy4gRm9yIGVmZmljaWVuY3ksIHJlbWF0Y2ggaW4gdGhlICdwc3RyaW5nJyBzdGF0ZVxuICAgICAgICAgICAgWy8lKFtyc3F4d1ddfFE/KS8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdwc3RyaW5nJyB9XSxcbiAgICAgICAgICAgIC8vIGNvbW1hbmRzIGFuZCBzeW1ib2xzXG4gICAgICAgICAgICBbL2AvLCB7IHRva2VuOiAnc3RyaW5nLnguZGVsaW0nLCBuZXh0OiAnQGRzdHJpbmcueC5gJyB9XSxcbiAgICAgICAgICAgIFsvOihcXHd8WyRAXSlcXHcqWyE/PV0/LywgJ3N0cmluZy5zJ10sXG4gICAgICAgICAgICBbLzpcIi8sIHsgdG9rZW46ICdzdHJpbmcucy5kZWxpbScsIG5leHQ6ICdAZHN0cmluZy5zLlwiJyB9XSxcbiAgICAgICAgICAgIFsvOicvLCB7IHRva2VuOiAnc3RyaW5nLnMuZGVsaW0nLCBuZXh0OiAnQHNzdHJpbmcucycgfV0sXG4gICAgICAgICAgICAvLyByZWd1bGFyIGV4cHJlc3Npb25zLiBMb29rYWhlYWQgZm9yIGEgKG5vdCBlc2NhcGVkKSBjbG9zaW5nIGZvcndhcmRzbGFzaCBvbiB0aGUgc2FtZSBsaW5lXG4gICAgICAgICAgICBbL1xcLyg/PShcXFxcXFwvfFteXFwvXFxuXSkrXFwvKS8sIHsgdG9rZW46ICdyZWdleHAuZGVsaW0nLCBuZXh0OiAnQHJlZ2V4cCcgfV0sXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzIGFuZCBvcGVyYXRvcnNcbiAgICAgICAgICAgIFsvW3t9KClcXFtcXF1dLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9Ac3ltYm9scy8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkb3BzJzogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BvcGVyYXRvcnMnOiAnb3BlcmF0b3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL1s7LF0vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICAvLyBudW1iZXJzXG4gICAgICAgICAgICBbLzBbeFhdWzAtOWEtZkEtRl0oXz9bMC05YS1mQS1GXSkqLywgJ251bWJlci5oZXgnXSxcbiAgICAgICAgICAgIFsvMFtfb09dWzAtN10oXz9bMC03XSkqLywgJ251bWJlci5vY3RhbCddLFxuICAgICAgICAgICAgWy8wW2JCXVswMV0oXz9bMDFdKSovLCAnbnVtYmVyLmJpbmFyeSddLFxuICAgICAgICAgICAgWy8wW2REXUBkZWNwYXJ0LywgJ251bWJlciddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9AZGVjaW1hbCgoXFwuQGRlY3BhcnQpPyhbZUVdW1xcLStdP0BkZWNwYXJ0KT8pLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkMTogJ251bWJlci5mbG9hdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnbnVtYmVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICAvLyB1c2VkIHRvIG5vdCB0cmVhdCBhICdkbycgYXMgYSBibG9jayBvcGVuZXIgaWYgaXQgb2NjdXJzIG9uIHRoZSBzYW1lXG4gICAgICAgIC8vIGxpbmUgYXMgYSAnZG8nIHN0YXRlbWVudDogJ3doaWxlfHVudGlsfGZvcidcbiAgICAgICAgLy8gZG9kZWNsLjxkZWNsPiB3aGVyZSBkZWNsIGlzIHRoZSBkZWNsYXJhdGlvbnMgc3RhcnRlZCwgbGlrZSAnd2hpbGUnXG4gICAgICAgIGRvZGVjbDogW1xuICAgICAgICAgICAgWy9eLywgeyB0b2tlbjogJycsIHN3aXRjaFRvOiAnQHJvb3QuJFMyJyB9XSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvW2Etel9dXFx3KlshPz1dPy8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiB7IHRva2VuOiAna2V5d29yZC4kUzInLCBuZXh0OiAnQHBvcCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvOiB7IHRva2VuOiAna2V5d29yZCcsIHN3aXRjaFRvOiAnQHJvb3QuJFMyJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BsaW5lZGVjbHMnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdAcmVtYXRjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAcm9vdC4kUzInXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAYnVpbHRpbnMnOiAncHJlZGVmaW5lZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnaWRlbnRpZmllcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAcm9vdCcgfVxuICAgICAgICBdLFxuICAgICAgICAvLyB1c2VkIHRvIHByZXZlbnQgcG90ZW50aWFsIG1vZGlmaWVycyAoJ2lmfHVudGlsfHdoaWxlfHVubGVzcycpIHRvIG1hdGNoXG4gICAgICAgIC8vIHdpdGggJ2VuZCcga2V5d29yZHMuXG4gICAgICAgIC8vIG1vZGlmaWVyLjxkZWNsPnggd2hlcmUgZGVjbCBpcyB0aGUgZGVjbGFyYXRpb24gc3RhcnRlciwgbGlrZSAnaWYnXG4gICAgICAgIG1vZGlmaWVyOiBbXG4gICAgICAgICAgICBbL14vLCAnJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvW2Etel9dXFx3KlshPz1dPy8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiB7IHRva2VuOiAna2V5d29yZC4kUzInLCBuZXh0OiAnQHBvcCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0aGVufGVsc2V8ZWxzaWZ8ZG8nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0Byb290LiRTMidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGxpbmVkZWNscyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ0ByZW1hdGNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0Byb290LiRTMidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BidWlsdGlucyc6ICdwcmVkZWZpbmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Byb290JyB9XG4gICAgICAgIF0sXG4gICAgICAgIC8vIHNpbmdsZSBxdW90ZSBzdHJpbmdzIChhbHNvIHVzZWQgZm9yIHN5bWJvbHMpXG4gICAgICAgIC8vIHNzdHJpbmcuPGtpbmQ+ICB3aGVyZSBraW5kIGlzICdzcScgKHNpbmdsZSBxdW90ZSkgb3IgJ3MnIChzeW1ib2wpXG4gICAgICAgIHNzdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW15cXFxcJ10rLywgJ3N0cmluZy4kUzInXSxcbiAgICAgICAgICAgIFsvXFxcXFxcXFx8XFxcXCd8XFxcXCQvLCAnc3RyaW5nLiRTMi5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLiRTMi5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbLycvLCB7IHRva2VuOiAnc3RyaW5nLiRTMi5kZWxpbScsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICAvLyBkb3VibGUgcXVvdGVkIFwic3RyaW5nXCIuXG4gICAgICAgIC8vIGRzdHJpbmcuPGtpbmQ+LjxkZWxpbT4gd2hlcmUga2luZCBpcyAnZCcgKGRvdWJsZSBxdW90ZWQpLCAneCcgKGNvbW1hbmQpLCBvciAncycgKHN5bWJvbClcbiAgICAgICAgLy8gYW5kIGRlbGltIGlzIHRoZSBlbmRpbmcgZGVsaW1pdGVyIChcIiBvciBgKVxuICAgICAgICBkc3RyaW5nOiBbXG4gICAgICAgICAgICBbL1teXFxcXGBcIiNdKy8sICdzdHJpbmcuJFMyJ10sXG4gICAgICAgICAgICBbLyMvLCAnc3RyaW5nLiRTMi5lc2NhcGUnLCAnQGludGVycG9sYXRlZCddLFxuICAgICAgICAgICAgWy9cXFxcJC8sICdzdHJpbmcuJFMyLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuJFMyLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuJFMyLmVzY2FwZS5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1tgXCJdLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnJCM9PSRTMyc6IHsgdG9rZW46ICdzdHJpbmcuJFMyLmRlbGltJywgbmV4dDogJ0Bwb3AnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnc3RyaW5nLiRTMidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gbGl0ZXJhbCBkb2N1bWVudHNcbiAgICAgICAgLy8gaGVyZWRvYy48Y2xvc2U+IHdoZXJlIGNsb3NlIGlzIHRoZSBjbG9zaW5nIGRlbGltaXRlclxuICAgICAgICBoZXJlZG9jOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL14oXFxzKikoQGhlcmVkZWxpbSkkLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnJDI9PSRTMic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RyaW5nLmhlcmVkb2MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdG9rZW46ICdzdHJpbmcuaGVyZWRvYy5kZWxpbWl0ZXInLCBuZXh0OiAnQHBvcCcgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IFsnc3RyaW5nLmhlcmVkb2MnLCAnc3RyaW5nLmhlcmVkb2MnXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvLiovLCAnc3RyaW5nLmhlcmVkb2MnXVxuICAgICAgICBdLFxuICAgICAgICAvLyBpbnRlcnBvbGF0ZWQgc2VxdWVuY2VcbiAgICAgICAgaW50ZXJwb2xhdGVkOiBbXG4gICAgICAgICAgICBbL1xcJFxcdyovLCAnZ2xvYmFsLmNvbnN0YW50JywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvQFxcdyovLCAnbmFtZXNwYWNlLmNsYXNzLmlkZW50aWZpZXInLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9AQFxcdyovLCAnbmFtZXNwYWNlLmluc3RhbmNlLmlkZW50aWZpZXInLCAnQHBvcCddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9be10vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdzdHJpbmcuZXNjYXBlLmN1cmx5JyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAaW50ZXJwb2xhdGVkX2NvbXBvdW5kJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbJycsICcnLCAnQHBvcCddIC8vIGp1c3QgYSAjIGlzIGludGVycHJldGVkIGFzIGEgI1xuICAgICAgICBdLFxuICAgICAgICAvLyBhbnkgY29kZVxuICAgICAgICBpbnRlcnBvbGF0ZWRfY29tcG91bmQ6IFtcbiAgICAgICAgICAgIFsvW31dLywgeyB0b2tlbjogJ3N0cmluZy5lc2NhcGUuY3VybHknLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAcm9vdCcgfVxuICAgICAgICBdLFxuICAgICAgICAvLyAlciBxdW90ZWQgcmVnZXhwXG4gICAgICAgIC8vIHByZWdleHAuPG9wZW4+LjxjbG9zZT4gd2hlcmUgb3Blbi9jbG9zZSBhcmUgdGhlIG9wZW4vY2xvc2UgZGVsaW1pdGVyXG4gICAgICAgIHByZWdleHA6IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxuICAgICAgICAgICAgLy8gdHVybnMgb3V0IHRoYXQgeW91IGNhbiBxdW90ZSB1c2luZyByZWdleCBjb250cm9sIGNoYXJhY3RlcnMsIGFhcmdoIVxuICAgICAgICAgICAgLy8gZm9yIGV4YW1wbGU7ICVyfGtnamdhanwgaXMgb2sgKGV2ZW4gdGhvdWdoIHwgaXMgdXNlZCBmb3IgYWx0ZXJuYXRpb24pXG4gICAgICAgICAgICAvLyBzbywgd2UgbmVlZCB0byBtYXRjaCB0aG9zZSBmaXJzdFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9bXlxcKFxce1xcW1xcXFxdLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnJCM9PSRTMyc6IHsgdG9rZW46ICdyZWdleHAuZGVsaW0nLCBuZXh0OiAnQHBvcCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICckIz09JFMyJzogeyB0b2tlbjogJ3JlZ2V4cC5kZWxpbScsIG5leHQ6ICdAcHVzaCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICd+Wyl9XFxcXF1dJzogJ0BicmFja2V0cy5yZWdleHAuZXNjYXBlLmNvbnRyb2wnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ35AcmVnZXhwY3RsJzogJ3JlZ2V4cC5lc2NhcGUuY29udHJvbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAncmVnZXhwJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0ByZWdleGNvbnRyb2wnIH1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gV2UgbWF0Y2ggcmVndWxhciBleHByZXNzaW9uIHF1aXRlIHByZWNpc2VseVxuICAgICAgICByZWdleHA6IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0ByZWdleGNvbnRyb2wnIH0sXG4gICAgICAgICAgICBbL1teXFxcXFxcL10vLCAncmVnZXhwJ10sXG4gICAgICAgICAgICBbJy9baXhtcF0qJywgeyB0b2tlbjogJ3JlZ2V4cC5kZWxpbScgfSwgJ0Bwb3AnXVxuICAgICAgICBdLFxuICAgICAgICByZWdleGNvbnRyb2w6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKFxceykoXFxkKyg/OixcXGQqKT8pKFxcfSkvLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgJ0BicmFja2V0cy5yZWdleHAuZXNjYXBlLmNvbnRyb2wnLFxuICAgICAgICAgICAgICAgICAgICAncmVnZXhwLmVzY2FwZS5jb250cm9sJyxcbiAgICAgICAgICAgICAgICAgICAgJ0BicmFja2V0cy5yZWdleHAuZXNjYXBlLmNvbnRyb2wnXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKFxcWykoXFxePykvLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgJ0BicmFja2V0cy5yZWdleHAuZXNjYXBlLmNvbnRyb2wnLFxuICAgICAgICAgICAgICAgICAgICB7IHRva2VuOiAncmVnZXhwLmVzY2FwZS5jb250cm9sJywgbmV4dDogJ0ByZWdleHJhbmdlJyB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvKFxcKCkoXFw/Wzo9IV0pLywgWydAYnJhY2tldHMucmVnZXhwLmVzY2FwZS5jb250cm9sJywgJ3JlZ2V4cC5lc2NhcGUuY29udHJvbCddXSxcbiAgICAgICAgICAgIFsvXFwoXFw/Iy8sIHsgdG9rZW46ICdyZWdleHAuZXNjYXBlLmNvbnRyb2wnLCBuZXh0OiAnQHJlZ2V4cGNvbW1lbnQnIH1dLFxuICAgICAgICAgICAgWy9bKCldLywgJ0BicmFja2V0cy5yZWdleHAuZXNjYXBlLmNvbnRyb2wnXSxcbiAgICAgICAgICAgIFsvQHJlZ2V4cGN0bC8sICdyZWdleHAuZXNjYXBlLmNvbnRyb2wnXSxcbiAgICAgICAgICAgIFsvXFxcXCQvLCAncmVnZXhwLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9AcmVnZXhwZXNjLywgJ3JlZ2V4cC5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvXFxcXFxcLi8sICdyZWdleHAuaW52YWxpZCddLFxuICAgICAgICAgICAgWy8jLywgJ3JlZ2V4cC5lc2NhcGUnLCAnQGludGVycG9sYXRlZCddXG4gICAgICAgIF0sXG4gICAgICAgIHJlZ2V4cmFuZ2U6IFtcbiAgICAgICAgICAgIFsvLS8sICdyZWdleHAuZXNjYXBlLmNvbnRyb2wnXSxcbiAgICAgICAgICAgIFsvXFxeLywgJ3JlZ2V4cC5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbL1xcXFwkLywgJ3JlZ2V4cC5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvQHJlZ2V4cGVzYy8sICdyZWdleHAuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1teXFxdXS8sICdyZWdleHAnXSxcbiAgICAgICAgICAgIFsvXFxdLywgJ0BicmFja2V0cy5yZWdleHAuZXNjYXBlLmNvbnRyb2wnLCAnQHBvcCddXG4gICAgICAgIF0sXG4gICAgICAgIHJlZ2V4cGNvbW1lbnQ6IFtcbiAgICAgICAgICAgIFsvW14pXSsvLCAnY29tbWVudCddLFxuICAgICAgICAgICAgWy9cXCkvLCB7IHRva2VuOiAncmVnZXhwLmVzY2FwZS5jb250cm9sJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIC8vICUgcXVvdGVkIHN0cmluZ3NcbiAgICAgICAgLy8gQSBiaXQgcmVwZXRpdGl2ZSBzaW5jZSB3ZSBuZWVkIHRvIG9mdGVuIHNwZWNpYWwgY2FzZSB0aGUga2luZCBvZiBlbmRpbmcgZGVsaW1pdGVyXG4gICAgICAgIHBzdHJpbmc6IFtcbiAgICAgICAgICAgIFsvJShbcXdzXSlcXCgvLCB7IHRva2VuOiAnc3RyaW5nLiQxLmRlbGltJywgc3dpdGNoVG86ICdAcXN0cmluZy4kMS4oLiknIH1dLFxuICAgICAgICAgICAgWy8lKFtxd3NdKVxcWy8sIHsgdG9rZW46ICdzdHJpbmcuJDEuZGVsaW0nLCBzd2l0Y2hUbzogJ0Bxc3RyaW5nLiQxLlsuXScgfV0sXG4gICAgICAgICAgICBbLyUoW3F3c10pXFx7LywgeyB0b2tlbjogJ3N0cmluZy4kMS5kZWxpbScsIHN3aXRjaFRvOiAnQHFzdHJpbmcuJDEuey59JyB9XSxcbiAgICAgICAgICAgIFsvJShbcXdzXSk8LywgeyB0b2tlbjogJ3N0cmluZy4kMS5kZWxpbScsIHN3aXRjaFRvOiAnQHFzdHJpbmcuJDEuPC4+JyB9XSxcbiAgICAgICAgICAgIFsvJShbcXdzXSkoQGRlbGltKS8sIHsgdG9rZW46ICdzdHJpbmcuJDEuZGVsaW0nLCBzd2l0Y2hUbzogJ0Bxc3RyaW5nLiQxLiQyLiQyJyB9XSxcbiAgICAgICAgICAgIFsvJXJcXCgvLCB7IHRva2VuOiAncmVnZXhwLmRlbGltJywgc3dpdGNoVG86ICdAcHJlZ2V4cC4oLiknIH1dLFxuICAgICAgICAgICAgWy8lclxcWy8sIHsgdG9rZW46ICdyZWdleHAuZGVsaW0nLCBzd2l0Y2hUbzogJ0BwcmVnZXhwLlsuXScgfV0sXG4gICAgICAgICAgICBbLyVyXFx7LywgeyB0b2tlbjogJ3JlZ2V4cC5kZWxpbScsIHN3aXRjaFRvOiAnQHByZWdleHAuey59JyB9XSxcbiAgICAgICAgICAgIFsvJXI8LywgeyB0b2tlbjogJ3JlZ2V4cC5kZWxpbScsIHN3aXRjaFRvOiAnQHByZWdleHAuPC4+JyB9XSxcbiAgICAgICAgICAgIFsvJXIoQGRlbGltKS8sIHsgdG9rZW46ICdyZWdleHAuZGVsaW0nLCBzd2l0Y2hUbzogJ0BwcmVnZXhwLiQxLiQxJyB9XSxcbiAgICAgICAgICAgIFsvJSh4fFd8UT8pXFwoLywgeyB0b2tlbjogJ3N0cmluZy4kMS5kZWxpbScsIHN3aXRjaFRvOiAnQHFxc3RyaW5nLiQxLiguKScgfV0sXG4gICAgICAgICAgICBbLyUoeHxXfFE/KVxcWy8sIHsgdG9rZW46ICdzdHJpbmcuJDEuZGVsaW0nLCBzd2l0Y2hUbzogJ0BxcXN0cmluZy4kMS5bLl0nIH1dLFxuICAgICAgICAgICAgWy8lKHh8V3xRPylcXHsvLCB7IHRva2VuOiAnc3RyaW5nLiQxLmRlbGltJywgc3dpdGNoVG86ICdAcXFzdHJpbmcuJDEuey59JyB9XSxcbiAgICAgICAgICAgIFsvJSh4fFd8UT8pPC8sIHsgdG9rZW46ICdzdHJpbmcuJDEuZGVsaW0nLCBzd2l0Y2hUbzogJ0BxcXN0cmluZy4kMS48Lj4nIH1dLFxuICAgICAgICAgICAgWy8lKHh8V3xRPykoQGRlbGltKS8sIHsgdG9rZW46ICdzdHJpbmcuJDEuZGVsaW0nLCBzd2l0Y2hUbzogJ0BxcXN0cmluZy4kMS4kMi4kMicgfV0sXG4gICAgICAgICAgICBbLyUoW3Jxd3N4V118UT8pLi8sIHsgdG9rZW46ICdpbnZhbGlkJywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICAgICAgWy8uLywgeyB0b2tlbjogJ2ludmFsaWQnLCBuZXh0OiAnQHBvcCcgfV0gLy8gcmVjb3ZlclxuICAgICAgICBdLFxuICAgICAgICAvLyBub24tZXhwYW5kZWQgcXVvdGVkIHN0cmluZy5cbiAgICAgICAgLy8gcXN0cmluZy48a2luZD4uPG9wZW4+LjxjbG9zZT5cbiAgICAgICAgLy8gIGtpbmQgPSBxfHd8cyAgKHNpbmdsZSBxdW90ZSwgYXJyYXksIHN5bWJvbClcbiAgICAgICAgLy8gIG9wZW4gPSBvcGVuIGRlbGltaXRlclxuICAgICAgICAvLyAgY2xvc2UgPSBjbG9zZSBkZWxpbWl0ZXJcbiAgICAgICAgcXN0cmluZzogW1xuICAgICAgICAgICAgWy9cXFxcJC8sICdzdHJpbmcuJFMyLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuJFMyLmVzY2FwZSddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8uLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnJCM9PSRTNCc6IHsgdG9rZW46ICdzdHJpbmcuJFMyLmRlbGltJywgbmV4dDogJ0Bwb3AnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnJCM9PSRTMyc6IHsgdG9rZW46ICdzdHJpbmcuJFMyLmRlbGltJywgbmV4dDogJ0BwdXNoJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3N0cmluZy4kUzInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIC8vIGV4cGFuZGVkIHF1b3RlZCBzdHJpbmcuXG4gICAgICAgIC8vIHFxc3RyaW5nLjxraW5kPi48b3Blbj4uPGNsb3NlPlxuICAgICAgICAvLyAga2luZCA9IFF8V3x4ICAoZG91YmxlIHF1b3RlLCBhcnJheSwgY29tbWFuZClcbiAgICAgICAgLy8gIG9wZW4gPSBvcGVuIGRlbGltaXRlclxuICAgICAgICAvLyAgY2xvc2UgPSBjbG9zZSBkZWxpbWl0ZXJcbiAgICAgICAgcXFzdHJpbmc6IFtbLyMvLCAnc3RyaW5nLiRTMi5lc2NhcGUnLCAnQGludGVycG9sYXRlZCddLCB7IGluY2x1ZGU6ICdAcXN0cmluZycgfV0sXG4gICAgICAgIC8vIHdoaXRlc3BhY2UgJiBjb21tZW50c1xuICAgICAgICB3aGl0ZXNwYWNlOiBbXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnJ10sXG4gICAgICAgICAgICBbL15cXHMqPWJlZ2luXFxiLywgJ2NvbW1lbnQnLCAnQGNvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvIy4qJC8sICdjb21tZW50J11cbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudDogW1xuICAgICAgICAgICAgWy9bXj1dKy8sICdjb21tZW50J10sXG4gICAgICAgICAgICBbL15cXHMqPWJlZ2luXFxiLywgJ2NvbW1lbnQuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9eXFxzKj1lbmRcXGIuKi8sICdjb21tZW50JywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvWz1dLywgJ2NvbW1lbnQnXVxuICAgICAgICBdXG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=