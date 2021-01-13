(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/go/go.js":
/*!****************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/go/go.js ***!
  \****************************************************************************************************************************/
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
        lineComment: '//',
        blockComment: ['/*', '*/']
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '`', close: '`', notIn: ['string'] },
        { open: '"', close: '"', notIn: ['string'] },
        { open: "'", close: "'", notIn: ['string', 'comment'] }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '`', close: '`' },
        { open: '"', close: '"' },
        { open: "'", close: "'" }
    ]
};
var language = {
    defaultToken: '',
    tokenPostfix: '.go',
    keywords: [
        'break',
        'case',
        'chan',
        'const',
        'continue',
        'default',
        'defer',
        'else',
        'fallthrough',
        'for',
        'func',
        'go',
        'goto',
        'if',
        'import',
        'interface',
        'map',
        'package',
        'range',
        'return',
        'select',
        'struct',
        'switch',
        'type',
        'var',
        'bool',
        'true',
        'false',
        'uint8',
        'uint16',
        'uint32',
        'uint64',
        'int8',
        'int16',
        'int32',
        'int64',
        'float32',
        'float64',
        'complex64',
        'complex128',
        'byte',
        'rune',
        'uint',
        'int',
        'uintptr',
        'string',
        'nil'
    ],
    operators: [
        '+',
        '-',
        '*',
        '/',
        '%',
        '&',
        '|',
        '^',
        '<<',
        '>>',
        '&^',
        '+=',
        '-=',
        '*=',
        '/=',
        '%=',
        '&=',
        '|=',
        '^=',
        '<<=',
        '>>=',
        '&^=',
        '&&',
        '||',
        '<-',
        '++',
        '--',
        '==',
        '<',
        '>',
        '=',
        '!',
        '!=',
        '<=',
        '>=',
        ':=',
        '...',
        '(',
        ')',
        '',
        ']',
        '{',
        '}',
        ',',
        ';',
        '.',
        ':'
    ],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // identifiers and keywords
            [
                /[a-zA-Z_]\w*/,
                {
                    cases: {
                        '@keywords': { token: 'keyword.$0' },
                        '@default': 'identifier'
                    }
                }
            ],
            // whitespace
            { include: '@whitespace' },
            // [[ attributes ]].
            [/\[\[.*\]\]/, 'annotation'],
            // Preprocessor directive
            [/^\s*#\w+/, 'keyword'],
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/[<>](?!@symbols)/, '@brackets'],
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
            [/\d*\d+[eE]([\-+]?\d+)?/, 'number.float'],
            [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/0[xX][0-9a-fA-F']*[0-9a-fA-F]/, 'number.hex'],
            [/0[0-7']*[0-7]/, 'number.octal'],
            [/0[bB][0-1']*[0-1]/, 'number.binary'],
            [/\d[\d']*/, 'number'],
            [/\d/, 'number'],
            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            // strings
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/"/, 'string', '@string'],
            [/`/, 'string', '@rawstring'],
            // characters
            [/'[^\\']'/, 'string'],
            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
            [/'/, 'string.invalid']
        ],
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/\/\*\*(?!\/)/, 'comment.doc', '@doccomment'],
            [/\/\*/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment']
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            // [/\/\*/, 'comment', '@push' ],    // nested comment not allowed :-(
            // [/\/\*/,    'comment.invalid' ],    // this breaks block comments in the shape of /* //*/
            [/\*\//, 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        //Identical copy of comment above, except for the addition of .doc
        doccomment: [
            [/[^\/*]+/, 'comment.doc'],
            // [/\/\*/, 'comment.doc', '@push' ],    // nested comment not allowed :-(
            [/\/\*/, 'comment.doc.invalid'],
            [/\*\//, 'comment.doc', '@pop'],
            [/[\/*]/, 'comment.doc']
        ],
        string: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, 'string', '@pop']
        ],
        rawstring: [
            [/[^\`]/, 'string'],
            [/`/, 'string', '@pop']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvZ28vZ28uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsMkNBQTJDO0FBQ3BELFNBQVMsMkNBQTJDO0FBQ3BELFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLElBQUksY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHNCQUFzQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICBjb21tZW50czoge1xuICAgICAgICBsaW5lQ29tbWVudDogJy8vJyxcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJy8qJywgJyovJ11cbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsneycsICd9J10sXG4gICAgICAgIFsnWycsICddJ10sXG4gICAgICAgIFsnKCcsICcpJ11cbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnYCcsIGNsb3NlOiAnYCcsIG5vdEluOiBbJ3N0cmluZyddIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZyddIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiwgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9XG4gICAgXSxcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ2AnLCBjbG9zZTogJ2AnIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH1cbiAgICBdXG59O1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxuICAgIHRva2VuUG9zdGZpeDogJy5nbycsXG4gICAga2V5d29yZHM6IFtcbiAgICAgICAgJ2JyZWFrJyxcbiAgICAgICAgJ2Nhc2UnLFxuICAgICAgICAnY2hhbicsXG4gICAgICAgICdjb25zdCcsXG4gICAgICAgICdjb250aW51ZScsXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgJ2RlZmVyJyxcbiAgICAgICAgJ2Vsc2UnLFxuICAgICAgICAnZmFsbHRocm91Z2gnLFxuICAgICAgICAnZm9yJyxcbiAgICAgICAgJ2Z1bmMnLFxuICAgICAgICAnZ28nLFxuICAgICAgICAnZ290bycsXG4gICAgICAgICdpZicsXG4gICAgICAgICdpbXBvcnQnLFxuICAgICAgICAnaW50ZXJmYWNlJyxcbiAgICAgICAgJ21hcCcsXG4gICAgICAgICdwYWNrYWdlJyxcbiAgICAgICAgJ3JhbmdlJyxcbiAgICAgICAgJ3JldHVybicsXG4gICAgICAgICdzZWxlY3QnLFxuICAgICAgICAnc3RydWN0JyxcbiAgICAgICAgJ3N3aXRjaCcsXG4gICAgICAgICd0eXBlJyxcbiAgICAgICAgJ3ZhcicsXG4gICAgICAgICdib29sJyxcbiAgICAgICAgJ3RydWUnLFxuICAgICAgICAnZmFsc2UnLFxuICAgICAgICAndWludDgnLFxuICAgICAgICAndWludDE2JyxcbiAgICAgICAgJ3VpbnQzMicsXG4gICAgICAgICd1aW50NjQnLFxuICAgICAgICAnaW50OCcsXG4gICAgICAgICdpbnQxNicsXG4gICAgICAgICdpbnQzMicsXG4gICAgICAgICdpbnQ2NCcsXG4gICAgICAgICdmbG9hdDMyJyxcbiAgICAgICAgJ2Zsb2F0NjQnLFxuICAgICAgICAnY29tcGxleDY0JyxcbiAgICAgICAgJ2NvbXBsZXgxMjgnLFxuICAgICAgICAnYnl0ZScsXG4gICAgICAgICdydW5lJyxcbiAgICAgICAgJ3VpbnQnLFxuICAgICAgICAnaW50JyxcbiAgICAgICAgJ3VpbnRwdHInLFxuICAgICAgICAnc3RyaW5nJyxcbiAgICAgICAgJ25pbCdcbiAgICBdLFxuICAgIG9wZXJhdG9yczogW1xuICAgICAgICAnKycsXG4gICAgICAgICctJyxcbiAgICAgICAgJyonLFxuICAgICAgICAnLycsXG4gICAgICAgICclJyxcbiAgICAgICAgJyYnLFxuICAgICAgICAnfCcsXG4gICAgICAgICdeJyxcbiAgICAgICAgJzw8JyxcbiAgICAgICAgJz4+JyxcbiAgICAgICAgJyZeJyxcbiAgICAgICAgJys9JyxcbiAgICAgICAgJy09JyxcbiAgICAgICAgJyo9JyxcbiAgICAgICAgJy89JyxcbiAgICAgICAgJyU9JyxcbiAgICAgICAgJyY9JyxcbiAgICAgICAgJ3w9JyxcbiAgICAgICAgJ149JyxcbiAgICAgICAgJzw8PScsXG4gICAgICAgICc+Pj0nLFxuICAgICAgICAnJl49JyxcbiAgICAgICAgJyYmJyxcbiAgICAgICAgJ3x8JyxcbiAgICAgICAgJzwtJyxcbiAgICAgICAgJysrJyxcbiAgICAgICAgJy0tJyxcbiAgICAgICAgJz09JyxcbiAgICAgICAgJzwnLFxuICAgICAgICAnPicsXG4gICAgICAgICc9JyxcbiAgICAgICAgJyEnLFxuICAgICAgICAnIT0nLFxuICAgICAgICAnPD0nLFxuICAgICAgICAnPj0nLFxuICAgICAgICAnOj0nLFxuICAgICAgICAnLi4uJyxcbiAgICAgICAgJygnLFxuICAgICAgICAnKScsXG4gICAgICAgICcnLFxuICAgICAgICAnXScsXG4gICAgICAgICd7JyxcbiAgICAgICAgJ30nLFxuICAgICAgICAnLCcsXG4gICAgICAgICc7JyxcbiAgICAgICAgJy4nLFxuICAgICAgICAnOidcbiAgICBdLFxuICAgIC8vIHdlIGluY2x1ZGUgdGhlc2UgY29tbW9uIHJlZ3VsYXIgZXhwcmVzc2lvbnNcbiAgICBzeW1ib2xzOiAvWz0+PCF+PzomfCtcXC0qXFwvXFxeJV0rLyxcbiAgICBlc2NhcGVzOiAvXFxcXCg/OlthYmZucnR2XFxcXFwiJ118eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxuICAgIC8vIFRoZSBtYWluIHRva2VuaXplciBmb3Igb3VyIGxhbmd1YWdlc1xuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICAvLyBpZGVudGlmaWVycyBhbmQga2V5d29yZHNcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvW2EtekEtWl9dXFx3Ki8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6IHsgdG9rZW46ICdrZXl3b3JkLiQwJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICAvLyBbWyBhdHRyaWJ1dGVzIF1dLlxuICAgICAgICAgICAgWy9cXFtcXFsuKlxcXVxcXS8sICdhbm5vdGF0aW9uJ10sXG4gICAgICAgICAgICAvLyBQcmVwcm9jZXNzb3IgZGlyZWN0aXZlXG4gICAgICAgICAgICBbL15cXHMqI1xcdysvLCAna2V5d29yZCddLFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVycyBhbmQgb3BlcmF0b3JzXG4gICAgICAgICAgICBbL1t7fSgpXFxbXFxdXS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFsvWzw+XSg/IUBzeW1ib2xzKS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvQHN5bWJvbHMvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAb3BlcmF0b3JzJzogJ2RlbGltaXRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIG51bWJlcnNcbiAgICAgICAgICAgIFsvXFxkKlxcZCtbZUVdKFtcXC0rXT9cXGQrKT8vLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbL1xcZCpcXC5cXGQrKFtlRV1bXFwtK10/XFxkKyk/LywgJ251bWJlci5mbG9hdCddLFxuICAgICAgICAgICAgWy8wW3hYXVswLTlhLWZBLUYnXSpbMC05YS1mQS1GXS8sICdudW1iZXIuaGV4J10sXG4gICAgICAgICAgICBbLzBbMC03J10qWzAtN10vLCAnbnVtYmVyLm9jdGFsJ10sXG4gICAgICAgICAgICBbLzBbYkJdWzAtMSddKlswLTFdLywgJ251bWJlci5iaW5hcnknXSxcbiAgICAgICAgICAgIFsvXFxkW1xcZCddKi8sICdudW1iZXInXSxcbiAgICAgICAgICAgIFsvXFxkLywgJ251bWJlciddLFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVyOiBhZnRlciBudW1iZXIgYmVjYXVzZSBvZiAuXFxkIGZsb2F0c1xuICAgICAgICAgICAgWy9bOywuXS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIC8vIHN0cmluZ3NcbiAgICAgICAgICAgIFsvXCIoW15cIlxcXFxdfFxcXFwuKSokLywgJ3N0cmluZy5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZycsICdAc3RyaW5nJ10sXG4gICAgICAgICAgICBbL2AvLCAnc3RyaW5nJywgJ0ByYXdzdHJpbmcnXSxcbiAgICAgICAgICAgIC8vIGNoYXJhY3RlcnNcbiAgICAgICAgICAgIFsvJ1teXFxcXCddJy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvKCcpKEBlc2NhcGVzKSgnKS8sIFsnc3RyaW5nJywgJ3N0cmluZy5lc2NhcGUnLCAnc3RyaW5nJ11dLFxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZy5pbnZhbGlkJ11cbiAgICAgICAgXSxcbiAgICAgICAgd2hpdGVzcGFjZTogW1xuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJyddLFxuICAgICAgICAgICAgWy9cXC9cXCpcXCooPyFcXC8pLywgJ2NvbW1lbnQuZG9jJywgJ0Bkb2Njb21tZW50J10sXG4gICAgICAgICAgICBbL1xcL1xcKi8sICdjb21tZW50JywgJ0Bjb21tZW50J10sXG4gICAgICAgICAgICBbL1xcL1xcLy4qJC8sICdjb21tZW50J11cbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudDogW1xuICAgICAgICAgICAgWy9bXlxcLypdKy8sICdjb21tZW50J10sXG4gICAgICAgICAgICAvLyBbL1xcL1xcKi8sICdjb21tZW50JywgJ0BwdXNoJyBdLCAgICAvLyBuZXN0ZWQgY29tbWVudCBub3QgYWxsb3dlZCA6LShcbiAgICAgICAgICAgIC8vIFsvXFwvXFwqLywgICAgJ2NvbW1lbnQuaW52YWxpZCcgXSwgICAgLy8gdGhpcyBicmVha3MgYmxvY2sgY29tbWVudHMgaW4gdGhlIHNoYXBlIG9mIC8qIC8vKi9cbiAgICAgICAgICAgIFsvXFwqXFwvLywgJ2NvbW1lbnQnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9bXFwvKl0vLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIC8vSWRlbnRpY2FsIGNvcHkgb2YgY29tbWVudCBhYm92ZSwgZXhjZXB0IGZvciB0aGUgYWRkaXRpb24gb2YgLmRvY1xuICAgICAgICBkb2Njb21tZW50OiBbXG4gICAgICAgICAgICBbL1teXFwvKl0rLywgJ2NvbW1lbnQuZG9jJ10sXG4gICAgICAgICAgICAvLyBbL1xcL1xcKi8sICdjb21tZW50LmRvYycsICdAcHVzaCcgXSwgICAgLy8gbmVzdGVkIGNvbW1lbnQgbm90IGFsbG93ZWQgOi0oXG4gICAgICAgICAgICBbL1xcL1xcKi8sICdjb21tZW50LmRvYy5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbL1xcKlxcLy8sICdjb21tZW50LmRvYycsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1tcXC8qXS8sICdjb21tZW50LmRvYyddXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZzogW1xuICAgICAgICAgICAgWy9bXlxcXFxcIl0rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHBvcCddXG4gICAgICAgIF0sXG4gICAgICAgIHJhd3N0cmluZzogW1xuICAgICAgICAgICAgWy9bXlxcYF0vLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL2AvLCAnc3RyaW5nJywgJ0Bwb3AnXVxuICAgICAgICBdXG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=