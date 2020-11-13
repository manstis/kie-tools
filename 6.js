(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/javascript/javascript.js":
/*!********************************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/javascript/javascript.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conf", function() { return conf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
/* harmony import */ var _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../typescript/typescript.js */ "../../node_modules/monaco-editor/esm/vs/basic-languages/typescript/typescript.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var conf = _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__["conf"];
var language = {
    // Set defaultToken to invalid to see what you do not tokenize yet
    defaultToken: 'invalid',
    tokenPostfix: '.js',
    keywords: [
        'break',
        'case',
        'catch',
        'class',
        'continue',
        'const',
        'constructor',
        'debugger',
        'default',
        'delete',
        'do',
        'else',
        'export',
        'extends',
        'false',
        'finally',
        'for',
        'from',
        'function',
        'get',
        'if',
        'import',
        'in',
        'instanceof',
        'let',
        'new',
        'null',
        'return',
        'set',
        'super',
        'switch',
        'symbol',
        'this',
        'throw',
        'true',
        'try',
        'typeof',
        'undefined',
        'var',
        'void',
        'while',
        'with',
        'yield',
        'async',
        'await',
        'of'
    ],
    typeKeywords: [],
    operators: _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__["language"].operators,
    symbols: _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__["language"].symbols,
    escapes: _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__["language"].escapes,
    digits: _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__["language"].digits,
    octaldigits: _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__["language"].octaldigits,
    binarydigits: _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__["language"].binarydigits,
    hexdigits: _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__["language"].hexdigits,
    regexpctl: _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__["language"].regexpctl,
    regexpesc: _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__["language"].regexpesc,
    tokenizer: _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__["language"].tokenizer
};


/***/ }),

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/typescript/typescript.js":
/*!********************************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/typescript/typescript.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conf", function() { return conf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
/* harmony import */ var _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fillers/monaco-editor-core.js */ "../../node_modules/monaco-editor/esm/vs/basic-languages/fillers/monaco-editor-core.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var conf = {
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    comments: {
        lineComment: '//',
        blockComment: ['/*', '*/']
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    onEnterRules: [
        {
            // e.g. /** | */
            beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
            afterText: /^\s*\*\/$/,
            action: {
                indentAction: _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__["languages"].IndentAction.IndentOutdent,
                appendText: ' * '
            }
        },
        {
            // e.g. /** ...|
            beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
            action: {
                indentAction: _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__["languages"].IndentAction.None,
                appendText: ' * '
            }
        },
        {
            // e.g.  * ...|
            beforeText: /^(\t|(\ \ ))*\ \*(\ ([^\*]|\*(?!\/))*)?$/,
            action: {
                indentAction: _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__["languages"].IndentAction.None,
                appendText: '* '
            }
        },
        {
            // e.g.  */|
            beforeText: /^(\t|(\ \ ))*\ \*\/\s*$/,
            action: {
                indentAction: _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__["languages"].IndentAction.None,
                removeText: 1
            }
        }
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"', notIn: ['string'] },
        { open: "'", close: "'", notIn: ['string', 'comment'] },
        { open: '`', close: '`', notIn: ['string', 'comment'] },
        { open: '/**', close: ' */', notIn: ['string'] }
    ],
    folding: {
        markers: {
            start: new RegExp('^\\s*//\\s*#?region\\b'),
            end: new RegExp('^\\s*//\\s*#?endregion\\b')
        }
    }
};
var language = {
    // Set defaultToken to invalid to see what you do not tokenize yet
    defaultToken: 'invalid',
    tokenPostfix: '.ts',
    keywords: [
        // Should match the keys of textToKeywordObj in
        // https://github.com/microsoft/TypeScript/blob/master/src/compiler/scanner.ts
        'abstract',
        'any',
        'as',
        'asserts',
        'bigint',
        'boolean',
        'break',
        'case',
        'catch',
        'class',
        'continue',
        'const',
        'constructor',
        'debugger',
        'declare',
        'default',
        'delete',
        'do',
        'else',
        'enum',
        'export',
        'extends',
        'false',
        'finally',
        'for',
        'from',
        'function',
        'get',
        'if',
        'implements',
        'import',
        'in',
        'infer',
        'instanceof',
        'interface',
        'is',
        'keyof',
        'let',
        'module',
        'namespace',
        'never',
        'new',
        'null',
        'number',
        'object',
        'package',
        'private',
        'protected',
        'public',
        'readonly',
        'require',
        'global',
        'return',
        'set',
        'static',
        'string',
        'super',
        'switch',
        'symbol',
        'this',
        'throw',
        'true',
        'try',
        'type',
        'typeof',
        'undefined',
        'unique',
        'unknown',
        'var',
        'void',
        'while',
        'with',
        'yield',
        'async',
        'await',
        'of'
    ],
    operators: [
        '<=',
        '>=',
        '==',
        '!=',
        '===',
        '!==',
        '=>',
        '+',
        '-',
        '**',
        '*',
        '/',
        '%',
        '++',
        '--',
        '<<',
        '</',
        '>>',
        '>>>',
        '&',
        '|',
        '^',
        '!',
        '~',
        '&&',
        '||',
        '??',
        '?',
        ':',
        '=',
        '+=',
        '-=',
        '*=',
        '**=',
        '/=',
        '%=',
        '<<=',
        '>>=',
        '>>>=',
        '&=',
        '|=',
        '^=',
        '@'
    ],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    digits: /\d+(_+\d+)*/,
    octaldigits: /[0-7]+(_+[0-7]+)*/,
    binarydigits: /[0-1]+(_+[0-1]+)*/,
    hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,
    regexpctl: /[(){}\[\]\$\^|\-*+?\.]/,
    regexpesc: /\\(?:[bBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [[/[{}]/, 'delimiter.bracket'], { include: 'common' }],
        common: [
            // identifiers and keywords
            [
                /[a-z_$][\w$]*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'identifier'
                    }
                }
            ],
            [/[A-Z][\w\$]*/, 'type.identifier'],
            // [/[A-Z][\w\$]*/, 'identifier'],
            // whitespace
            { include: '@whitespace' },
            // regular expression: ensure it is terminated before beginning (otherwise it is an opeator)
            [
                /\/(?=([^\\\/]|\\.)+\/([gimsuy]*)(\s*)(\.|;|,|\)|\]|\}|$))/,
                { token: 'regexp', bracket: '@open', next: '@regexp' }
            ],
            // delimiters and operators
            [/[()\[\]]/, '@brackets'],
            [/[<>](?!@symbols)/, '@brackets'],
            [/!(?=([^=]|$))/, 'delimiter'],
            [
                /@symbols/,
                {
                    cases: {
                        '@operators': 'delimiter',
                        '@default': ''
                    }
                }
            ],
            // numbers
            [/(@digits)[eE]([\-+]?(@digits))?/, 'number.float'],
            [/(@digits)\.(@digits)([eE][\-+]?(@digits))?/, 'number.float'],
            [/0[xX](@hexdigits)n?/, 'number.hex'],
            [/0[oO]?(@octaldigits)n?/, 'number.octal'],
            [/0[bB](@binarydigits)n?/, 'number.binary'],
            [/(@digits)n?/, 'number'],
            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            // strings
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/'([^'\\]|\\.)*$/, 'string.invalid'],
            [/"/, 'string', '@string_double'],
            [/'/, 'string', '@string_single'],
            [/`/, 'string', '@string_backtick']
        ],
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/\/\*\*(?!\/)/, 'comment.doc', '@jsdoc'],
            [/\/\*/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment']
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            [/\*\//, 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        jsdoc: [
            [/[^\/*]+/, 'comment.doc'],
            [/\*\//, 'comment.doc', '@pop'],
            [/[\/*]/, 'comment.doc']
        ],
        // We match regular expression quite precisely
        regexp: [
            [
                /(\{)(\d+(?:,\d*)?)(\})/,
                ['regexp.escape.control', 'regexp.escape.control', 'regexp.escape.control']
            ],
            [
                /(\[)(\^?)(?=(?:[^\]\\\/]|\\.)+)/,
                ['regexp.escape.control', { token: 'regexp.escape.control', next: '@regexrange' }]
            ],
            [/(\()(\?:|\?=|\?!)/, ['regexp.escape.control', 'regexp.escape.control']],
            [/[()]/, 'regexp.escape.control'],
            [/@regexpctl/, 'regexp.escape.control'],
            [/[^\\\/]/, 'regexp'],
            [/@regexpesc/, 'regexp.escape'],
            [/\\\./, 'regexp.invalid'],
            [
                /(\/)([gimsuy]*)/,
                [{ token: 'regexp', bracket: '@close', next: '@pop' }, 'keyword.other']
            ]
        ],
        regexrange: [
            [/-/, 'regexp.escape.control'],
            [/\^/, 'regexp.invalid'],
            [/@regexpesc/, 'regexp.escape'],
            [/[^\]]/, 'regexp'],
            [
                /\]/,
                {
                    token: 'regexp.escape.control',
                    next: '@pop',
                    bracket: '@close'
                }
            ]
        ],
        string_double: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, 'string', '@pop']
        ],
        string_single: [
            [/[^\\']+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/'/, 'string', '@pop']
        ],
        string_backtick: [
            [/\$\{/, { token: 'delimiter.bracket', next: '@bracketCounting' }],
            [/[^\\`$]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/`/, 'string', '@pop']
        ],
        bracketCounting: [
            [/\{/, 'delimiter.bracket', '@bracketCounting'],
            [/\}/, 'delimiter.bracket', '@pop'],
            { include: 'common' }
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvamF2YXNjcmlwdC9qYXZhc2NyaXB0LmpzIiwid2VicGFjazovLy8vaG9tZS9tYW5zdGlzL3dvcmtzcGFjZXMvZ2l0L21hbnN0aXMvZm9ya3Mva29naXRvLXRvb2xpbmcvbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy90eXBlc2NyaXB0L3R5cGVzY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDcUY7QUFDOUUsV0FBVyw4REFBTTtBQUNqQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrRUFBVTtBQUN6QixhQUFhLGtFQUFVO0FBQ3ZCLGFBQWEsa0VBQVU7QUFDdkIsWUFBWSxrRUFBVTtBQUN0QixpQkFBaUIsa0VBQVU7QUFDM0Isa0JBQWtCLGtFQUFVO0FBQzVCLGVBQWUsa0VBQVU7QUFDekIsZUFBZSxrRUFBVTtBQUN6QixlQUFlLGtFQUFVO0FBQ3pCLGVBQWUsa0VBQVU7QUFDekI7Ozs7Ozs7Ozs7Ozs7QUNyRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNB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QTtBQUNBLGtCQUFrQixtREFBbUQ7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixJQUFJLHVEQUF1RDtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYjtBQUNBO0FBQ0EiLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuaW1wb3J0IHsgY29uZiBhcyB0c0NvbmYsIGxhbmd1YWdlIGFzIHRzTGFuZ3VhZ2UgfSBmcm9tICcuLi90eXBlc2NyaXB0L3R5cGVzY3JpcHQuanMnO1xuZXhwb3J0IHZhciBjb25mID0gdHNDb25mO1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICAvLyBTZXQgZGVmYXVsdFRva2VuIHRvIGludmFsaWQgdG8gc2VlIHdoYXQgeW91IGRvIG5vdCB0b2tlbml6ZSB5ZXRcbiAgICBkZWZhdWx0VG9rZW46ICdpbnZhbGlkJyxcbiAgICB0b2tlblBvc3RmaXg6ICcuanMnLFxuICAgIGtleXdvcmRzOiBbXG4gICAgICAgICdicmVhaycsXG4gICAgICAgICdjYXNlJyxcbiAgICAgICAgJ2NhdGNoJyxcbiAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgJ2NvbnRpbnVlJyxcbiAgICAgICAgJ2NvbnN0JyxcbiAgICAgICAgJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgJ2RlYnVnZ2VyJyxcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICAnZGVsZXRlJyxcbiAgICAgICAgJ2RvJyxcbiAgICAgICAgJ2Vsc2UnLFxuICAgICAgICAnZXhwb3J0JyxcbiAgICAgICAgJ2V4dGVuZHMnLFxuICAgICAgICAnZmFsc2UnLFxuICAgICAgICAnZmluYWxseScsXG4gICAgICAgICdmb3InLFxuICAgICAgICAnZnJvbScsXG4gICAgICAgICdmdW5jdGlvbicsXG4gICAgICAgICdnZXQnLFxuICAgICAgICAnaWYnLFxuICAgICAgICAnaW1wb3J0JyxcbiAgICAgICAgJ2luJyxcbiAgICAgICAgJ2luc3RhbmNlb2YnLFxuICAgICAgICAnbGV0JyxcbiAgICAgICAgJ25ldycsXG4gICAgICAgICdudWxsJyxcbiAgICAgICAgJ3JldHVybicsXG4gICAgICAgICdzZXQnLFxuICAgICAgICAnc3VwZXInLFxuICAgICAgICAnc3dpdGNoJyxcbiAgICAgICAgJ3N5bWJvbCcsXG4gICAgICAgICd0aGlzJyxcbiAgICAgICAgJ3Rocm93JyxcbiAgICAgICAgJ3RydWUnLFxuICAgICAgICAndHJ5JyxcbiAgICAgICAgJ3R5cGVvZicsXG4gICAgICAgICd1bmRlZmluZWQnLFxuICAgICAgICAndmFyJyxcbiAgICAgICAgJ3ZvaWQnLFxuICAgICAgICAnd2hpbGUnLFxuICAgICAgICAnd2l0aCcsXG4gICAgICAgICd5aWVsZCcsXG4gICAgICAgICdhc3luYycsXG4gICAgICAgICdhd2FpdCcsXG4gICAgICAgICdvZidcbiAgICBdLFxuICAgIHR5cGVLZXl3b3JkczogW10sXG4gICAgb3BlcmF0b3JzOiB0c0xhbmd1YWdlLm9wZXJhdG9ycyxcbiAgICBzeW1ib2xzOiB0c0xhbmd1YWdlLnN5bWJvbHMsXG4gICAgZXNjYXBlczogdHNMYW5ndWFnZS5lc2NhcGVzLFxuICAgIGRpZ2l0czogdHNMYW5ndWFnZS5kaWdpdHMsXG4gICAgb2N0YWxkaWdpdHM6IHRzTGFuZ3VhZ2Uub2N0YWxkaWdpdHMsXG4gICAgYmluYXJ5ZGlnaXRzOiB0c0xhbmd1YWdlLmJpbmFyeWRpZ2l0cyxcbiAgICBoZXhkaWdpdHM6IHRzTGFuZ3VhZ2UuaGV4ZGlnaXRzLFxuICAgIHJlZ2V4cGN0bDogdHNMYW5ndWFnZS5yZWdleHBjdGwsXG4gICAgcmVnZXhwZXNjOiB0c0xhbmd1YWdlLnJlZ2V4cGVzYyxcbiAgICB0b2tlbml6ZXI6IHRzTGFuZ3VhZ2UudG9rZW5pemVyXG59O1xuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5pbXBvcnQgeyBsYW5ndWFnZXMgfSBmcm9tICcuLi9maWxsZXJzL21vbmFjby1lZGl0b3ItY29yZS5qcyc7XG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgd29yZFBhdHRlcm46IC8oLT9cXGQqXFwuXFxkXFx3Kil8KFteXFxgXFx+XFwhXFxAXFwjXFwlXFxeXFwmXFwqXFwoXFwpXFwtXFw9XFwrXFxbXFx7XFxdXFx9XFxcXFxcfFxcO1xcOlxcJ1xcXCJcXCxcXC5cXDxcXD5cXC9cXD9cXHNdKykvZyxcbiAgICBjb21tZW50czoge1xuICAgICAgICBsaW5lQ29tbWVudDogJy8vJyxcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJy8qJywgJyovJ11cbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsneycsICd9J10sXG4gICAgICAgIFsnWycsICddJ10sXG4gICAgICAgIFsnKCcsICcpJ11cbiAgICBdLFxuICAgIG9uRW50ZXJSdWxlczogW1xuICAgICAgICB7XG4gICAgICAgICAgICAvLyBlLmcuIC8qKiB8ICovXG4gICAgICAgICAgICBiZWZvcmVUZXh0OiAvXlxccypcXC9cXCpcXCooPyFcXC8pKFteXFwqXXxcXCooPyFcXC8pKSokLyxcbiAgICAgICAgICAgIGFmdGVyVGV4dDogL15cXHMqXFwqXFwvJC8sXG4gICAgICAgICAgICBhY3Rpb246IHtcbiAgICAgICAgICAgICAgICBpbmRlbnRBY3Rpb246IGxhbmd1YWdlcy5JbmRlbnRBY3Rpb24uSW5kZW50T3V0ZGVudCxcbiAgICAgICAgICAgICAgICBhcHBlbmRUZXh0OiAnICogJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBlLmcuIC8qKiAuLi58XG4gICAgICAgICAgICBiZWZvcmVUZXh0OiAvXlxccypcXC9cXCpcXCooPyFcXC8pKFteXFwqXXxcXCooPyFcXC8pKSokLyxcbiAgICAgICAgICAgIGFjdGlvbjoge1xuICAgICAgICAgICAgICAgIGluZGVudEFjdGlvbjogbGFuZ3VhZ2VzLkluZGVudEFjdGlvbi5Ob25lLFxuICAgICAgICAgICAgICAgIGFwcGVuZFRleHQ6ICcgKiAnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIGUuZy4gICogLi4ufFxuICAgICAgICAgICAgYmVmb3JlVGV4dDogL14oXFx0fChcXCBcXCApKSpcXCBcXCooXFwgKFteXFwqXXxcXCooPyFcXC8pKSopPyQvLFxuICAgICAgICAgICAgYWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgaW5kZW50QWN0aW9uOiBsYW5ndWFnZXMuSW5kZW50QWN0aW9uLk5vbmUsXG4gICAgICAgICAgICAgICAgYXBwZW5kVGV4dDogJyogJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBlLmcuICAqL3xcbiAgICAgICAgICAgIGJlZm9yZVRleHQ6IC9eKFxcdHwoXFwgXFwgKSkqXFwgXFwqXFwvXFxzKiQvLFxuICAgICAgICAgICAgYWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgaW5kZW50QWN0aW9uOiBsYW5ndWFnZXMuSW5kZW50QWN0aW9uLk5vbmUsXG4gICAgICAgICAgICAgICAgcmVtb3ZlVGV4dDogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZyddIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiwgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46ICdgJywgY2xvc2U6ICdgJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46ICcvKionLCBjbG9zZTogJyAqLycsIG5vdEluOiBbJ3N0cmluZyddIH1cbiAgICBdLFxuICAgIGZvbGRpbmc6IHtcbiAgICAgICAgbWFya2Vyczoge1xuICAgICAgICAgICAgc3RhcnQ6IG5ldyBSZWdFeHAoJ15cXFxccyovL1xcXFxzKiM/cmVnaW9uXFxcXGInKSxcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cCgnXlxcXFxzKi8vXFxcXHMqIz9lbmRyZWdpb25cXFxcYicpXG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICAvLyBTZXQgZGVmYXVsdFRva2VuIHRvIGludmFsaWQgdG8gc2VlIHdoYXQgeW91IGRvIG5vdCB0b2tlbml6ZSB5ZXRcbiAgICBkZWZhdWx0VG9rZW46ICdpbnZhbGlkJyxcbiAgICB0b2tlblBvc3RmaXg6ICcudHMnLFxuICAgIGtleXdvcmRzOiBbXG4gICAgICAgIC8vIFNob3VsZCBtYXRjaCB0aGUga2V5cyBvZiB0ZXh0VG9LZXl3b3JkT2JqIGluXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9ibG9iL21hc3Rlci9zcmMvY29tcGlsZXIvc2Nhbm5lci50c1xuICAgICAgICAnYWJzdHJhY3QnLFxuICAgICAgICAnYW55JyxcbiAgICAgICAgJ2FzJyxcbiAgICAgICAgJ2Fzc2VydHMnLFxuICAgICAgICAnYmlnaW50JyxcbiAgICAgICAgJ2Jvb2xlYW4nLFxuICAgICAgICAnYnJlYWsnLFxuICAgICAgICAnY2FzZScsXG4gICAgICAgICdjYXRjaCcsXG4gICAgICAgICdjbGFzcycsXG4gICAgICAgICdjb250aW51ZScsXG4gICAgICAgICdjb25zdCcsXG4gICAgICAgICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICdkZWJ1Z2dlcicsXG4gICAgICAgICdkZWNsYXJlJyxcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICAnZGVsZXRlJyxcbiAgICAgICAgJ2RvJyxcbiAgICAgICAgJ2Vsc2UnLFxuICAgICAgICAnZW51bScsXG4gICAgICAgICdleHBvcnQnLFxuICAgICAgICAnZXh0ZW5kcycsXG4gICAgICAgICdmYWxzZScsXG4gICAgICAgICdmaW5hbGx5JyxcbiAgICAgICAgJ2ZvcicsXG4gICAgICAgICdmcm9tJyxcbiAgICAgICAgJ2Z1bmN0aW9uJyxcbiAgICAgICAgJ2dldCcsXG4gICAgICAgICdpZicsXG4gICAgICAgICdpbXBsZW1lbnRzJyxcbiAgICAgICAgJ2ltcG9ydCcsXG4gICAgICAgICdpbicsXG4gICAgICAgICdpbmZlcicsXG4gICAgICAgICdpbnN0YW5jZW9mJyxcbiAgICAgICAgJ2ludGVyZmFjZScsXG4gICAgICAgICdpcycsXG4gICAgICAgICdrZXlvZicsXG4gICAgICAgICdsZXQnLFxuICAgICAgICAnbW9kdWxlJyxcbiAgICAgICAgJ25hbWVzcGFjZScsXG4gICAgICAgICduZXZlcicsXG4gICAgICAgICduZXcnLFxuICAgICAgICAnbnVsbCcsXG4gICAgICAgICdudW1iZXInLFxuICAgICAgICAnb2JqZWN0JyxcbiAgICAgICAgJ3BhY2thZ2UnLFxuICAgICAgICAncHJpdmF0ZScsXG4gICAgICAgICdwcm90ZWN0ZWQnLFxuICAgICAgICAncHVibGljJyxcbiAgICAgICAgJ3JlYWRvbmx5JyxcbiAgICAgICAgJ3JlcXVpcmUnLFxuICAgICAgICAnZ2xvYmFsJyxcbiAgICAgICAgJ3JldHVybicsXG4gICAgICAgICdzZXQnLFxuICAgICAgICAnc3RhdGljJyxcbiAgICAgICAgJ3N0cmluZycsXG4gICAgICAgICdzdXBlcicsXG4gICAgICAgICdzd2l0Y2gnLFxuICAgICAgICAnc3ltYm9sJyxcbiAgICAgICAgJ3RoaXMnLFxuICAgICAgICAndGhyb3cnLFxuICAgICAgICAndHJ1ZScsXG4gICAgICAgICd0cnknLFxuICAgICAgICAndHlwZScsXG4gICAgICAgICd0eXBlb2YnLFxuICAgICAgICAndW5kZWZpbmVkJyxcbiAgICAgICAgJ3VuaXF1ZScsXG4gICAgICAgICd1bmtub3duJyxcbiAgICAgICAgJ3ZhcicsXG4gICAgICAgICd2b2lkJyxcbiAgICAgICAgJ3doaWxlJyxcbiAgICAgICAgJ3dpdGgnLFxuICAgICAgICAneWllbGQnLFxuICAgICAgICAnYXN5bmMnLFxuICAgICAgICAnYXdhaXQnLFxuICAgICAgICAnb2YnXG4gICAgXSxcbiAgICBvcGVyYXRvcnM6IFtcbiAgICAgICAgJzw9JyxcbiAgICAgICAgJz49JyxcbiAgICAgICAgJz09JyxcbiAgICAgICAgJyE9JyxcbiAgICAgICAgJz09PScsXG4gICAgICAgICchPT0nLFxuICAgICAgICAnPT4nLFxuICAgICAgICAnKycsXG4gICAgICAgICctJyxcbiAgICAgICAgJyoqJyxcbiAgICAgICAgJyonLFxuICAgICAgICAnLycsXG4gICAgICAgICclJyxcbiAgICAgICAgJysrJyxcbiAgICAgICAgJy0tJyxcbiAgICAgICAgJzw8JyxcbiAgICAgICAgJzwvJyxcbiAgICAgICAgJz4+JyxcbiAgICAgICAgJz4+PicsXG4gICAgICAgICcmJyxcbiAgICAgICAgJ3wnLFxuICAgICAgICAnXicsXG4gICAgICAgICchJyxcbiAgICAgICAgJ34nLFxuICAgICAgICAnJiYnLFxuICAgICAgICAnfHwnLFxuICAgICAgICAnPz8nLFxuICAgICAgICAnPycsXG4gICAgICAgICc6JyxcbiAgICAgICAgJz0nLFxuICAgICAgICAnKz0nLFxuICAgICAgICAnLT0nLFxuICAgICAgICAnKj0nLFxuICAgICAgICAnKio9JyxcbiAgICAgICAgJy89JyxcbiAgICAgICAgJyU9JyxcbiAgICAgICAgJzw8PScsXG4gICAgICAgICc+Pj0nLFxuICAgICAgICAnPj4+PScsXG4gICAgICAgICcmPScsXG4gICAgICAgICd8PScsXG4gICAgICAgICdePScsXG4gICAgICAgICdAJ1xuICAgIF0sXG4gICAgLy8gd2UgaW5jbHVkZSB0aGVzZSBjb21tb24gcmVndWxhciBleHByZXNzaW9uc1xuICAgIHN5bWJvbHM6IC9bPT48IX4/OiZ8K1xcLSpcXC9cXF4lXSsvLFxuICAgIGVzY2FwZXM6IC9cXFxcKD86W2FiZm5ydHZcXFxcXCInXXx4WzAtOUEtRmEtZl17MSw0fXx1WzAtOUEtRmEtZl17NH18VVswLTlBLUZhLWZdezh9KS8sXG4gICAgZGlnaXRzOiAvXFxkKyhfK1xcZCspKi8sXG4gICAgb2N0YWxkaWdpdHM6IC9bMC03XSsoXytbMC03XSspKi8sXG4gICAgYmluYXJ5ZGlnaXRzOiAvWzAtMV0rKF8rWzAtMV0rKSovLFxuICAgIGhleGRpZ2l0czogL1tbMC05YS1mQS1GXSsoXytbMC05YS1mQS1GXSspKi8sXG4gICAgcmVnZXhwY3RsOiAvWygpe31cXFtcXF1cXCRcXF58XFwtKis/XFwuXS8sXG4gICAgcmVnZXhwZXNjOiAvXFxcXCg/OltiQmREZm5yc3R2d1duMFxcXFxcXC9dfEByZWdleHBjdGx8Y1tBLVpdfHhbMC05YS1mQS1GXXsyfXx1WzAtOWEtZkEtRl17NH0pLyxcbiAgICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIG91ciBsYW5ndWFnZXNcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW1svW3t9XS8sICdkZWxpbWl0ZXIuYnJhY2tldCddLCB7IGluY2x1ZGU6ICdjb21tb24nIH1dLFxuICAgICAgICBjb21tb246IFtcbiAgICAgICAgICAgIC8vIGlkZW50aWZpZXJzIGFuZCBrZXl3b3Jkc1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9bYS16XyRdW1xcdyRdKi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvW0EtWl1bXFx3XFwkXSovLCAndHlwZS5pZGVudGlmaWVyJ10sXG4gICAgICAgICAgICAvLyBbL1tBLVpdW1xcd1xcJF0qLywgJ2lkZW50aWZpZXInXSxcbiAgICAgICAgICAgIC8vIHdoaXRlc3BhY2VcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxuICAgICAgICAgICAgLy8gcmVndWxhciBleHByZXNzaW9uOiBlbnN1cmUgaXQgaXMgdGVybWluYXRlZCBiZWZvcmUgYmVnaW5uaW5nIChvdGhlcndpc2UgaXQgaXMgYW4gb3BlYXRvcilcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXFwvKD89KFteXFxcXFxcL118XFxcXC4pK1xcLyhbZ2ltc3V5XSopKFxccyopKFxcLnw7fCx8XFwpfFxcXXxcXH18JCkpLyxcbiAgICAgICAgICAgICAgICB7IHRva2VuOiAncmVnZXhwJywgYnJhY2tldDogJ0BvcGVuJywgbmV4dDogJ0ByZWdleHAnIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBkZWxpbWl0ZXJzIGFuZCBvcGVyYXRvcnNcbiAgICAgICAgICAgIFsvWygpXFxbXFxdXS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFsvWzw+XSg/IUBzeW1ib2xzKS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFsvISg/PShbXj1dfCQpKS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvQHN5bWJvbHMvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAb3BlcmF0b3JzJzogJ2RlbGltaXRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIG51bWJlcnNcbiAgICAgICAgICAgIFsvKEBkaWdpdHMpW2VFXShbXFwtK10/KEBkaWdpdHMpKT8vLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbLyhAZGlnaXRzKVxcLihAZGlnaXRzKShbZUVdW1xcLStdPyhAZGlnaXRzKSk/LywgJ251bWJlci5mbG9hdCddLFxuICAgICAgICAgICAgWy8wW3hYXShAaGV4ZGlnaXRzKW4/LywgJ251bWJlci5oZXgnXSxcbiAgICAgICAgICAgIFsvMFtvT10/KEBvY3RhbGRpZ2l0cyluPy8sICdudW1iZXIub2N0YWwnXSxcbiAgICAgICAgICAgIFsvMFtiQl0oQGJpbmFyeWRpZ2l0cyluPy8sICdudW1iZXIuYmluYXJ5J10sXG4gICAgICAgICAgICBbLyhAZGlnaXRzKW4/LywgJ251bWJlciddLFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVyOiBhZnRlciBudW1iZXIgYmVjYXVzZSBvZiAuXFxkIGZsb2F0c1xuICAgICAgICAgICAgWy9bOywuXS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIC8vIHN0cmluZ3NcbiAgICAgICAgICAgIFsvXCIoW15cIlxcXFxdfFxcXFwuKSokLywgJ3N0cmluZy5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbLycoW14nXFxcXF18XFxcXC4pKiQvLCAnc3RyaW5nLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJywgJ0BzdHJpbmdfZG91YmxlJ10sXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nJywgJ0BzdHJpbmdfc2luZ2xlJ10sXG4gICAgICAgICAgICBbL2AvLCAnc3RyaW5nJywgJ0BzdHJpbmdfYmFja3RpY2snXVxuICAgICAgICBdLFxuICAgICAgICB3aGl0ZXNwYWNlOiBbXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnJ10sXG4gICAgICAgICAgICBbL1xcL1xcKlxcKig/IVxcLykvLCAnY29tbWVudC5kb2MnLCAnQGpzZG9jJ10sXG4gICAgICAgICAgICBbL1xcL1xcKi8sICdjb21tZW50JywgJ0Bjb21tZW50J10sXG4gICAgICAgICAgICBbL1xcL1xcLy4qJC8sICdjb21tZW50J11cbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudDogW1xuICAgICAgICAgICAgWy9bXlxcLypdKy8sICdjb21tZW50J10sXG4gICAgICAgICAgICBbL1xcKlxcLy8sICdjb21tZW50JywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvW1xcLypdLywgJ2NvbW1lbnQnXVxuICAgICAgICBdLFxuICAgICAgICBqc2RvYzogW1xuICAgICAgICAgICAgWy9bXlxcLypdKy8sICdjb21tZW50LmRvYyddLFxuICAgICAgICAgICAgWy9cXCpcXC8vLCAnY29tbWVudC5kb2MnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9bXFwvKl0vLCAnY29tbWVudC5kb2MnXVxuICAgICAgICBdLFxuICAgICAgICAvLyBXZSBtYXRjaCByZWd1bGFyIGV4cHJlc3Npb24gcXVpdGUgcHJlY2lzZWx5XG4gICAgICAgIHJlZ2V4cDogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8oXFx7KShcXGQrKD86LFxcZCopPykoXFx9KS8sXG4gICAgICAgICAgICAgICAgWydyZWdleHAuZXNjYXBlLmNvbnRyb2wnLCAncmVnZXhwLmVzY2FwZS5jb250cm9sJywgJ3JlZ2V4cC5lc2NhcGUuY29udHJvbCddXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8oXFxbKShcXF4/KSg/PSg/OlteXFxdXFxcXFxcL118XFxcXC4pKykvLFxuICAgICAgICAgICAgICAgIFsncmVnZXhwLmVzY2FwZS5jb250cm9sJywgeyB0b2tlbjogJ3JlZ2V4cC5lc2NhcGUuY29udHJvbCcsIG5leHQ6ICdAcmVnZXhyYW5nZScgfV1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbLyhcXCgpKFxcPzp8XFw/PXxcXD8hKS8sIFsncmVnZXhwLmVzY2FwZS5jb250cm9sJywgJ3JlZ2V4cC5lc2NhcGUuY29udHJvbCddXSxcbiAgICAgICAgICAgIFsvWygpXS8sICdyZWdleHAuZXNjYXBlLmNvbnRyb2wnXSxcbiAgICAgICAgICAgIFsvQHJlZ2V4cGN0bC8sICdyZWdleHAuZXNjYXBlLmNvbnRyb2wnXSxcbiAgICAgICAgICAgIFsvW15cXFxcXFwvXS8sICdyZWdleHAnXSxcbiAgICAgICAgICAgIFsvQHJlZ2V4cGVzYy8sICdyZWdleHAuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1xcXFxcXC4vLCAncmVnZXhwLmludmFsaWQnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKFxcLykoW2dpbXN1eV0qKS8sXG4gICAgICAgICAgICAgICAgW3sgdG9rZW46ICdyZWdleHAnLCBicmFja2V0OiAnQGNsb3NlJywgbmV4dDogJ0Bwb3AnIH0sICdrZXl3b3JkLm90aGVyJ11cbiAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgcmVnZXhyYW5nZTogW1xuICAgICAgICAgICAgWy8tLywgJ3JlZ2V4cC5lc2NhcGUuY29udHJvbCddLFxuICAgICAgICAgICAgWy9cXF4vLCAncmVnZXhwLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvQHJlZ2V4cGVzYy8sICdyZWdleHAuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1teXFxdXS8sICdyZWdleHAnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXFxdLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAncmVnZXhwLmVzY2FwZS5jb250cm9sJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0Bwb3AnLFxuICAgICAgICAgICAgICAgICAgICBicmFja2V0OiAnQGNsb3NlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nX2RvdWJsZTogW1xuICAgICAgICAgICAgWy9bXlxcXFxcIl0rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHBvcCddXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZ19zaW5nbGU6IFtcbiAgICAgICAgICAgIFsvW15cXFxcJ10rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZycsICdAcG9wJ11cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nX2JhY2t0aWNrOiBbXG4gICAgICAgICAgICBbL1xcJFxcey8sIHsgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcsIG5leHQ6ICdAYnJhY2tldENvdW50aW5nJyB9XSxcbiAgICAgICAgICAgIFsvW15cXFxcYCRdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvQGVzY2FwZXMvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvYC8sICdzdHJpbmcnLCAnQHBvcCddXG4gICAgICAgIF0sXG4gICAgICAgIGJyYWNrZXRDb3VudGluZzogW1xuICAgICAgICAgICAgWy9cXHsvLCAnZGVsaW1pdGVyLmJyYWNrZXQnLCAnQGJyYWNrZXRDb3VudGluZyddLFxuICAgICAgICAgICAgWy9cXH0vLCAnZGVsaW1pdGVyLmJyYWNrZXQnLCAnQHBvcCddLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnY29tbW9uJyB9XG4gICAgICAgIF1cbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==