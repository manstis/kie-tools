(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/cpp/cpp.js":
/*!******************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/cpp/cpp.js ***!
  \******************************************************************************************************************************/
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
        { open: '[', close: ']' },
        { open: '{', close: '}' },
        { open: '(', close: ')' },
        { open: "'", close: "'", notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string'] }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: "'", close: "'" }
    ],
    folding: {
        markers: {
            start: new RegExp('^\\s*#pragma\\s+region\\b'),
            end: new RegExp('^\\s*#pragma\\s+endregion\\b')
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.cpp',
    brackets: [
        { token: 'delimiter.curly', open: '{', close: '}' },
        { token: 'delimiter.parenthesis', open: '(', close: ')' },
        { token: 'delimiter.square', open: '[', close: ']' },
        { token: 'delimiter.angle', open: '<', close: '>' }
    ],
    keywords: [
        'abstract',
        'amp',
        'array',
        'auto',
        'bool',
        'break',
        'case',
        'catch',
        'char',
        'class',
        'const',
        'constexpr',
        'const_cast',
        'continue',
        'cpu',
        'decltype',
        'default',
        'delegate',
        'delete',
        'do',
        'double',
        'dynamic_cast',
        'each',
        'else',
        'enum',
        'event',
        'explicit',
        'export',
        'extern',
        'false',
        'final',
        'finally',
        'float',
        'for',
        'friend',
        'gcnew',
        'generic',
        'goto',
        'if',
        'in',
        'initonly',
        'inline',
        'int',
        'interface',
        'interior_ptr',
        'internal',
        'literal',
        'long',
        'mutable',
        'namespace',
        'new',
        'noexcept',
        'nullptr',
        '__nullptr',
        'operator',
        'override',
        'partial',
        'pascal',
        'pin_ptr',
        'private',
        'property',
        'protected',
        'public',
        'ref',
        'register',
        'reinterpret_cast',
        'restrict',
        'return',
        'safe_cast',
        'sealed',
        'short',
        'signed',
        'sizeof',
        'static',
        'static_assert',
        'static_cast',
        'struct',
        'switch',
        'template',
        'this',
        'thread_local',
        'throw',
        'tile_static',
        'true',
        'try',
        'typedef',
        'typeid',
        'typename',
        'union',
        'unsigned',
        'using',
        'virtual',
        'void',
        'volatile',
        'wchar_t',
        'where',
        'while',
        '_asm',
        '_based',
        '_cdecl',
        '_declspec',
        '_fastcall',
        '_if_exists',
        '_if_not_exists',
        '_inline',
        '_multiple_inheritance',
        '_pascal',
        '_single_inheritance',
        '_stdcall',
        '_virtual_inheritance',
        '_w64',
        '__abstract',
        '__alignof',
        '__asm',
        '__assume',
        '__based',
        '__box',
        '__builtin_alignof',
        '__cdecl',
        '__clrcall',
        '__declspec',
        '__delegate',
        '__event',
        '__except',
        '__fastcall',
        '__finally',
        '__forceinline',
        '__gc',
        '__hook',
        '__identifier',
        '__if_exists',
        '__if_not_exists',
        '__inline',
        '__int128',
        '__int16',
        '__int32',
        '__int64',
        '__int8',
        '__interface',
        '__leave',
        '__m128',
        '__m128d',
        '__m128i',
        '__m256',
        '__m256d',
        '__m256i',
        '__m64',
        '__multiple_inheritance',
        '__newslot',
        '__nogc',
        '__noop',
        '__nounwind',
        '__novtordisp',
        '__pascal',
        '__pin',
        '__pragma',
        '__property',
        '__ptr32',
        '__ptr64',
        '__raise',
        '__restrict',
        '__resume',
        '__sealed',
        '__single_inheritance',
        '__stdcall',
        '__super',
        '__thiscall',
        '__try',
        '__try_cast',
        '__typeof',
        '__unaligned',
        '__unhook',
        '__uuidof',
        '__value',
        '__virtual_inheritance',
        '__w64',
        '__wchar_t'
    ],
    operators: [
        '=',
        '>',
        '<',
        '!',
        '~',
        '?',
        ':',
        '==',
        '<=',
        '>=',
        '!=',
        '&&',
        '||',
        '++',
        '--',
        '+',
        '-',
        '*',
        '/',
        '&',
        '|',
        '^',
        '%',
        '<<',
        '>>',
        '>>>',
        '+=',
        '-=',
        '*=',
        '/=',
        '&=',
        '|=',
        '^=',
        '%=',
        '<<=',
        '>>=',
        '>>>='
    ],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    integersuffix: /(ll|LL|u|U|l|L)?(ll|LL|u|U|l|L)?/,
    floatsuffix: /[fFlL]?/,
    encoding: /u|u8|U|L/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // C++ 11 Raw String
            [/@encoding?R\"(?:([^ ()\\\t]*))\(/, { token: 'string.raw.begin', next: '@raw.$1' }],
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
            [/^\s*#include/, { token: 'keyword.directive.include', next: '@include' }],
            // Preprocessor directive
            [/^\s*#\s*\w+/, 'keyword'],
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
            [/\d*\d+[eE]([\-+]?\d+)?(@floatsuffix)/, 'number.float'],
            [/\d*\.\d+([eE][\-+]?\d+)?(@floatsuffix)/, 'number.float'],
            [/0[xX][0-9a-fA-F']*[0-9a-fA-F](@integersuffix)/, 'number.hex'],
            [/0[0-7']*[0-7](@integersuffix)/, 'number.octal'],
            [/0[bB][0-1']*[0-1](@integersuffix)/, 'number.binary'],
            [/\d[\d']*\d(@integersuffix)/, 'number'],
            [/\d(@integersuffix)/, 'number'],
            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            // strings
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/"/, 'string', '@string'],
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
            [/\*\//, 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        //Identical copy of comment above, except for the addition of .doc
        doccomment: [
            [/[^\/*]+/, 'comment.doc'],
            [/\*\//, 'comment.doc', '@pop'],
            [/[\/*]/, 'comment.doc']
        ],
        string: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, 'string', '@pop']
        ],
        raw: [
            [
                /(.*)(\))(?:([^ ()\\\t"]*))(\")/,
                {
                    cases: {
                        '$3==$S2': [
                            'string.raw',
                            'string.raw.end',
                            'string.raw.end',
                            { token: 'string.raw.end', next: '@pop' }
                        ],
                        '@default': ['string.raw', 'string.raw', 'string.raw', 'string.raw']
                    }
                }
            ],
            [/.*/, 'string.raw']
        ],
        include: [
            [
                /(\s*)(<)([^<>]*)(>)/,
                [
                    '',
                    'keyword.directive.include.begin',
                    'string.include.identifier',
                    { token: 'keyword.directive.include.end', next: '@pop' }
                ]
            ],
            [
                /(\s*)(")([^"]*)(")/,
                [
                    '',
                    'keyword.directive.include.begin',
                    'string.include.identifier',
                    { token: 'keyword.directive.include.end', next: '@pop' }
                ]
            ]
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvY3BwL2NwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyxzREFBc0Q7QUFDL0QsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTLG1DQUFtQyxZQUFZLEdBQUc7QUFDM0QsU0FBUyx3REFBd0Q7QUFDakUsU0FBUyxtREFBbUQ7QUFDNUQsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsSUFBSSxjQUFjLEVBQUUsY0FBYyxFQUFFO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELDZDQUE2QztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHNCQUFzQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQTtBQUNBLDhCQUE4Qix1REFBdUQ7QUFDckY7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICBjb21tZW50czoge1xuICAgICAgICBsaW5lQ29tbWVudDogJy8vJyxcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJy8qJywgJyovJ11cbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsneycsICd9J10sXG4gICAgICAgIFsnWycsICddJ10sXG4gICAgICAgIFsnKCcsICcpJ11cbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZyddIH1cbiAgICBdLFxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfVxuICAgIF0sXG4gICAgZm9sZGluZzoge1xuICAgICAgICBtYXJrZXJzOiB7XG4gICAgICAgICAgICBzdGFydDogbmV3IFJlZ0V4cCgnXlxcXFxzKiNwcmFnbWFcXFxccytyZWdpb25cXFxcYicpLFxuICAgICAgICAgICAgZW5kOiBuZXcgUmVnRXhwKCdeXFxcXHMqI3ByYWdtYVxcXFxzK2VuZHJlZ2lvblxcXFxiJylcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLmNwcCcsXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5jdXJseScsIG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuc3F1YXJlJywgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuYW5nbGUnLCBvcGVuOiAnPCcsIGNsb3NlOiAnPicgfVxuICAgIF0sXG4gICAga2V5d29yZHM6IFtcbiAgICAgICAgJ2Fic3RyYWN0JyxcbiAgICAgICAgJ2FtcCcsXG4gICAgICAgICdhcnJheScsXG4gICAgICAgICdhdXRvJyxcbiAgICAgICAgJ2Jvb2wnLFxuICAgICAgICAnYnJlYWsnLFxuICAgICAgICAnY2FzZScsXG4gICAgICAgICdjYXRjaCcsXG4gICAgICAgICdjaGFyJyxcbiAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgJ2NvbnN0JyxcbiAgICAgICAgJ2NvbnN0ZXhwcicsXG4gICAgICAgICdjb25zdF9jYXN0JyxcbiAgICAgICAgJ2NvbnRpbnVlJyxcbiAgICAgICAgJ2NwdScsXG4gICAgICAgICdkZWNsdHlwZScsXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgJ2RlbGVnYXRlJyxcbiAgICAgICAgJ2RlbGV0ZScsXG4gICAgICAgICdkbycsXG4gICAgICAgICdkb3VibGUnLFxuICAgICAgICAnZHluYW1pY19jYXN0JyxcbiAgICAgICAgJ2VhY2gnLFxuICAgICAgICAnZWxzZScsXG4gICAgICAgICdlbnVtJyxcbiAgICAgICAgJ2V2ZW50JyxcbiAgICAgICAgJ2V4cGxpY2l0JyxcbiAgICAgICAgJ2V4cG9ydCcsXG4gICAgICAgICdleHRlcm4nLFxuICAgICAgICAnZmFsc2UnLFxuICAgICAgICAnZmluYWwnLFxuICAgICAgICAnZmluYWxseScsXG4gICAgICAgICdmbG9hdCcsXG4gICAgICAgICdmb3InLFxuICAgICAgICAnZnJpZW5kJyxcbiAgICAgICAgJ2djbmV3JyxcbiAgICAgICAgJ2dlbmVyaWMnLFxuICAgICAgICAnZ290bycsXG4gICAgICAgICdpZicsXG4gICAgICAgICdpbicsXG4gICAgICAgICdpbml0b25seScsXG4gICAgICAgICdpbmxpbmUnLFxuICAgICAgICAnaW50JyxcbiAgICAgICAgJ2ludGVyZmFjZScsXG4gICAgICAgICdpbnRlcmlvcl9wdHInLFxuICAgICAgICAnaW50ZXJuYWwnLFxuICAgICAgICAnbGl0ZXJhbCcsXG4gICAgICAgICdsb25nJyxcbiAgICAgICAgJ211dGFibGUnLFxuICAgICAgICAnbmFtZXNwYWNlJyxcbiAgICAgICAgJ25ldycsXG4gICAgICAgICdub2V4Y2VwdCcsXG4gICAgICAgICdudWxscHRyJyxcbiAgICAgICAgJ19fbnVsbHB0cicsXG4gICAgICAgICdvcGVyYXRvcicsXG4gICAgICAgICdvdmVycmlkZScsXG4gICAgICAgICdwYXJ0aWFsJyxcbiAgICAgICAgJ3Bhc2NhbCcsXG4gICAgICAgICdwaW5fcHRyJyxcbiAgICAgICAgJ3ByaXZhdGUnLFxuICAgICAgICAncHJvcGVydHknLFxuICAgICAgICAncHJvdGVjdGVkJyxcbiAgICAgICAgJ3B1YmxpYycsXG4gICAgICAgICdyZWYnLFxuICAgICAgICAncmVnaXN0ZXInLFxuICAgICAgICAncmVpbnRlcnByZXRfY2FzdCcsXG4gICAgICAgICdyZXN0cmljdCcsXG4gICAgICAgICdyZXR1cm4nLFxuICAgICAgICAnc2FmZV9jYXN0JyxcbiAgICAgICAgJ3NlYWxlZCcsXG4gICAgICAgICdzaG9ydCcsXG4gICAgICAgICdzaWduZWQnLFxuICAgICAgICAnc2l6ZW9mJyxcbiAgICAgICAgJ3N0YXRpYycsXG4gICAgICAgICdzdGF0aWNfYXNzZXJ0JyxcbiAgICAgICAgJ3N0YXRpY19jYXN0JyxcbiAgICAgICAgJ3N0cnVjdCcsXG4gICAgICAgICdzd2l0Y2gnLFxuICAgICAgICAndGVtcGxhdGUnLFxuICAgICAgICAndGhpcycsXG4gICAgICAgICd0aHJlYWRfbG9jYWwnLFxuICAgICAgICAndGhyb3cnLFxuICAgICAgICAndGlsZV9zdGF0aWMnLFxuICAgICAgICAndHJ1ZScsXG4gICAgICAgICd0cnknLFxuICAgICAgICAndHlwZWRlZicsXG4gICAgICAgICd0eXBlaWQnLFxuICAgICAgICAndHlwZW5hbWUnLFxuICAgICAgICAndW5pb24nLFxuICAgICAgICAndW5zaWduZWQnLFxuICAgICAgICAndXNpbmcnLFxuICAgICAgICAndmlydHVhbCcsXG4gICAgICAgICd2b2lkJyxcbiAgICAgICAgJ3ZvbGF0aWxlJyxcbiAgICAgICAgJ3djaGFyX3QnLFxuICAgICAgICAnd2hlcmUnLFxuICAgICAgICAnd2hpbGUnLFxuICAgICAgICAnX2FzbScsXG4gICAgICAgICdfYmFzZWQnLFxuICAgICAgICAnX2NkZWNsJyxcbiAgICAgICAgJ19kZWNsc3BlYycsXG4gICAgICAgICdfZmFzdGNhbGwnLFxuICAgICAgICAnX2lmX2V4aXN0cycsXG4gICAgICAgICdfaWZfbm90X2V4aXN0cycsXG4gICAgICAgICdfaW5saW5lJyxcbiAgICAgICAgJ19tdWx0aXBsZV9pbmhlcml0YW5jZScsXG4gICAgICAgICdfcGFzY2FsJyxcbiAgICAgICAgJ19zaW5nbGVfaW5oZXJpdGFuY2UnLFxuICAgICAgICAnX3N0ZGNhbGwnLFxuICAgICAgICAnX3ZpcnR1YWxfaW5oZXJpdGFuY2UnLFxuICAgICAgICAnX3c2NCcsXG4gICAgICAgICdfX2Fic3RyYWN0JyxcbiAgICAgICAgJ19fYWxpZ25vZicsXG4gICAgICAgICdfX2FzbScsXG4gICAgICAgICdfX2Fzc3VtZScsXG4gICAgICAgICdfX2Jhc2VkJyxcbiAgICAgICAgJ19fYm94JyxcbiAgICAgICAgJ19fYnVpbHRpbl9hbGlnbm9mJyxcbiAgICAgICAgJ19fY2RlY2wnLFxuICAgICAgICAnX19jbHJjYWxsJyxcbiAgICAgICAgJ19fZGVjbHNwZWMnLFxuICAgICAgICAnX19kZWxlZ2F0ZScsXG4gICAgICAgICdfX2V2ZW50JyxcbiAgICAgICAgJ19fZXhjZXB0JyxcbiAgICAgICAgJ19fZmFzdGNhbGwnLFxuICAgICAgICAnX19maW5hbGx5JyxcbiAgICAgICAgJ19fZm9yY2VpbmxpbmUnLFxuICAgICAgICAnX19nYycsXG4gICAgICAgICdfX2hvb2snLFxuICAgICAgICAnX19pZGVudGlmaWVyJyxcbiAgICAgICAgJ19faWZfZXhpc3RzJyxcbiAgICAgICAgJ19faWZfbm90X2V4aXN0cycsXG4gICAgICAgICdfX2lubGluZScsXG4gICAgICAgICdfX2ludDEyOCcsXG4gICAgICAgICdfX2ludDE2JyxcbiAgICAgICAgJ19faW50MzInLFxuICAgICAgICAnX19pbnQ2NCcsXG4gICAgICAgICdfX2ludDgnLFxuICAgICAgICAnX19pbnRlcmZhY2UnLFxuICAgICAgICAnX19sZWF2ZScsXG4gICAgICAgICdfX20xMjgnLFxuICAgICAgICAnX19tMTI4ZCcsXG4gICAgICAgICdfX20xMjhpJyxcbiAgICAgICAgJ19fbTI1NicsXG4gICAgICAgICdfX20yNTZkJyxcbiAgICAgICAgJ19fbTI1NmknLFxuICAgICAgICAnX19tNjQnLFxuICAgICAgICAnX19tdWx0aXBsZV9pbmhlcml0YW5jZScsXG4gICAgICAgICdfX25ld3Nsb3QnLFxuICAgICAgICAnX19ub2djJyxcbiAgICAgICAgJ19fbm9vcCcsXG4gICAgICAgICdfX25vdW53aW5kJyxcbiAgICAgICAgJ19fbm92dG9yZGlzcCcsXG4gICAgICAgICdfX3Bhc2NhbCcsXG4gICAgICAgICdfX3BpbicsXG4gICAgICAgICdfX3ByYWdtYScsXG4gICAgICAgICdfX3Byb3BlcnR5JyxcbiAgICAgICAgJ19fcHRyMzInLFxuICAgICAgICAnX19wdHI2NCcsXG4gICAgICAgICdfX3JhaXNlJyxcbiAgICAgICAgJ19fcmVzdHJpY3QnLFxuICAgICAgICAnX19yZXN1bWUnLFxuICAgICAgICAnX19zZWFsZWQnLFxuICAgICAgICAnX19zaW5nbGVfaW5oZXJpdGFuY2UnLFxuICAgICAgICAnX19zdGRjYWxsJyxcbiAgICAgICAgJ19fc3VwZXInLFxuICAgICAgICAnX190aGlzY2FsbCcsXG4gICAgICAgICdfX3RyeScsXG4gICAgICAgICdfX3RyeV9jYXN0JyxcbiAgICAgICAgJ19fdHlwZW9mJyxcbiAgICAgICAgJ19fdW5hbGlnbmVkJyxcbiAgICAgICAgJ19fdW5ob29rJyxcbiAgICAgICAgJ19fdXVpZG9mJyxcbiAgICAgICAgJ19fdmFsdWUnLFxuICAgICAgICAnX192aXJ0dWFsX2luaGVyaXRhbmNlJyxcbiAgICAgICAgJ19fdzY0JyxcbiAgICAgICAgJ19fd2NoYXJfdCdcbiAgICBdLFxuICAgIG9wZXJhdG9yczogW1xuICAgICAgICAnPScsXG4gICAgICAgICc+JyxcbiAgICAgICAgJzwnLFxuICAgICAgICAnIScsXG4gICAgICAgICd+JyxcbiAgICAgICAgJz8nLFxuICAgICAgICAnOicsXG4gICAgICAgICc9PScsXG4gICAgICAgICc8PScsXG4gICAgICAgICc+PScsXG4gICAgICAgICchPScsXG4gICAgICAgICcmJicsXG4gICAgICAgICd8fCcsXG4gICAgICAgICcrKycsXG4gICAgICAgICctLScsXG4gICAgICAgICcrJyxcbiAgICAgICAgJy0nLFxuICAgICAgICAnKicsXG4gICAgICAgICcvJyxcbiAgICAgICAgJyYnLFxuICAgICAgICAnfCcsXG4gICAgICAgICdeJyxcbiAgICAgICAgJyUnLFxuICAgICAgICAnPDwnLFxuICAgICAgICAnPj4nLFxuICAgICAgICAnPj4+JyxcbiAgICAgICAgJys9JyxcbiAgICAgICAgJy09JyxcbiAgICAgICAgJyo9JyxcbiAgICAgICAgJy89JyxcbiAgICAgICAgJyY9JyxcbiAgICAgICAgJ3w9JyxcbiAgICAgICAgJ149JyxcbiAgICAgICAgJyU9JyxcbiAgICAgICAgJzw8PScsXG4gICAgICAgICc+Pj0nLFxuICAgICAgICAnPj4+PSdcbiAgICBdLFxuICAgIC8vIHdlIGluY2x1ZGUgdGhlc2UgY29tbW9uIHJlZ3VsYXIgZXhwcmVzc2lvbnNcbiAgICBzeW1ib2xzOiAvWz0+PCF+PzomfCtcXC0qXFwvXFxeJV0rLyxcbiAgICBlc2NhcGVzOiAvXFxcXCg/OlthYmZucnR2XFxcXFwiJ118eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxuICAgIGludGVnZXJzdWZmaXg6IC8obGx8TEx8dXxVfGx8TCk/KGxsfExMfHV8VXxsfEwpPy8sXG4gICAgZmxvYXRzdWZmaXg6IC9bZkZsTF0/LyxcbiAgICBlbmNvZGluZzogL3V8dTh8VXxMLyxcbiAgICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIG91ciBsYW5ndWFnZXNcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgLy8gQysrIDExIFJhdyBTdHJpbmdcbiAgICAgICAgICAgIFsvQGVuY29kaW5nP1JcXFwiKD86KFteICgpXFxcXFxcdF0qKSlcXCgvLCB7IHRva2VuOiAnc3RyaW5nLnJhdy5iZWdpbicsIG5leHQ6ICdAcmF3LiQxJyB9XSxcbiAgICAgICAgICAgIC8vIGlkZW50aWZpZXJzIGFuZCBrZXl3b3Jkc1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9bYS16QS1aX11cXHcqLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogeyB0b2tlbjogJ2tleXdvcmQuJDAnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnaWRlbnRpZmllcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyB3aGl0ZXNwYWNlXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcbiAgICAgICAgICAgIC8vIFtbIGF0dHJpYnV0ZXMgXV0uXG4gICAgICAgICAgICBbL1xcW1xcWy4qXFxdXFxdLywgJ2Fubm90YXRpb24nXSxcbiAgICAgICAgICAgIFsvXlxccyojaW5jbHVkZS8sIHsgdG9rZW46ICdrZXl3b3JkLmRpcmVjdGl2ZS5pbmNsdWRlJywgbmV4dDogJ0BpbmNsdWRlJyB9XSxcbiAgICAgICAgICAgIC8vIFByZXByb2Nlc3NvciBkaXJlY3RpdmVcbiAgICAgICAgICAgIFsvXlxccyojXFxzKlxcdysvLCAna2V5d29yZCddLFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVycyBhbmQgb3BlcmF0b3JzXG4gICAgICAgICAgICBbL1t7fSgpXFxbXFxdXS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFsvWzw+XSg/IUBzeW1ib2xzKS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvQHN5bWJvbHMvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAb3BlcmF0b3JzJzogJ2RlbGltaXRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIG51bWJlcnNcbiAgICAgICAgICAgIFsvXFxkKlxcZCtbZUVdKFtcXC0rXT9cXGQrKT8oQGZsb2F0c3VmZml4KS8sICdudW1iZXIuZmxvYXQnXSxcbiAgICAgICAgICAgIFsvXFxkKlxcLlxcZCsoW2VFXVtcXC0rXT9cXGQrKT8oQGZsb2F0c3VmZml4KS8sICdudW1iZXIuZmxvYXQnXSxcbiAgICAgICAgICAgIFsvMFt4WF1bMC05YS1mQS1GJ10qWzAtOWEtZkEtRl0oQGludGVnZXJzdWZmaXgpLywgJ251bWJlci5oZXgnXSxcbiAgICAgICAgICAgIFsvMFswLTcnXSpbMC03XShAaW50ZWdlcnN1ZmZpeCkvLCAnbnVtYmVyLm9jdGFsJ10sXG4gICAgICAgICAgICBbLzBbYkJdWzAtMSddKlswLTFdKEBpbnRlZ2Vyc3VmZml4KS8sICdudW1iZXIuYmluYXJ5J10sXG4gICAgICAgICAgICBbL1xcZFtcXGQnXSpcXGQoQGludGVnZXJzdWZmaXgpLywgJ251bWJlciddLFxuICAgICAgICAgICAgWy9cXGQoQGludGVnZXJzdWZmaXgpLywgJ251bWJlciddLFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVyOiBhZnRlciBudW1iZXIgYmVjYXVzZSBvZiAuXFxkIGZsb2F0c1xuICAgICAgICAgICAgWy9bOywuXS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIC8vIHN0cmluZ3NcbiAgICAgICAgICAgIFsvXCIoW15cIlxcXFxdfFxcXFwuKSokLywgJ3N0cmluZy5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZycsICdAc3RyaW5nJ10sXG4gICAgICAgICAgICAvLyBjaGFyYWN0ZXJzXG4gICAgICAgICAgICBbLydbXlxcXFwnXScvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbLygnKShAZXNjYXBlcykoJykvLCBbJ3N0cmluZycsICdzdHJpbmcuZXNjYXBlJywgJ3N0cmluZyddXSxcbiAgICAgICAgICAgIFsvJy8sICdzdHJpbmcuaW52YWxpZCddXG4gICAgICAgIF0sXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICcnXSxcbiAgICAgICAgICAgIFsvXFwvXFwqXFwqKD8hXFwvKS8sICdjb21tZW50LmRvYycsICdAZG9jY29tbWVudCddLFxuICAgICAgICAgICAgWy9cXC9cXCovLCAnY29tbWVudCcsICdAY29tbWVudCddLFxuICAgICAgICAgICAgWy9cXC9cXC8uKiQvLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnQ6IFtcbiAgICAgICAgICAgIFsvW15cXC8qXSsvLCAnY29tbWVudCddLFxuICAgICAgICAgICAgWy9cXCpcXC8vLCAnY29tbWVudCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1tcXC8qXS8sICdjb21tZW50J11cbiAgICAgICAgXSxcbiAgICAgICAgLy9JZGVudGljYWwgY29weSBvZiBjb21tZW50IGFib3ZlLCBleGNlcHQgZm9yIHRoZSBhZGRpdGlvbiBvZiAuZG9jXG4gICAgICAgIGRvY2NvbW1lbnQ6IFtcbiAgICAgICAgICAgIFsvW15cXC8qXSsvLCAnY29tbWVudC5kb2MnXSxcbiAgICAgICAgICAgIFsvXFwqXFwvLywgJ2NvbW1lbnQuZG9jJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvW1xcLypdLywgJ2NvbW1lbnQuZG9jJ11cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nOiBbXG4gICAgICAgICAgICBbL1teXFxcXFwiXSsvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZS5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZycsICdAcG9wJ11cbiAgICAgICAgXSxcbiAgICAgICAgcmF3OiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyguKikoXFwpKSg/OihbXiAoKVxcXFxcXHRcIl0qKSkoXFxcIikvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICckMz09JFMyJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdHJpbmcucmF3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RyaW5nLnJhdy5lbmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdHJpbmcucmF3LmVuZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0b2tlbjogJ3N0cmluZy5yYXcuZW5kJywgbmV4dDogJ0Bwb3AnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiBbJ3N0cmluZy5yYXcnLCAnc3RyaW5nLnJhdycsICdzdHJpbmcucmF3JywgJ3N0cmluZy5yYXcnXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvLiovLCAnc3RyaW5nLnJhdyddXG4gICAgICAgIF0sXG4gICAgICAgIGluY2x1ZGU6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKFxccyopKDwpKFtePD5dKikoPikvLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgICAgICAgICAgICdrZXl3b3JkLmRpcmVjdGl2ZS5pbmNsdWRlLmJlZ2luJyxcbiAgICAgICAgICAgICAgICAgICAgJ3N0cmluZy5pbmNsdWRlLmlkZW50aWZpZXInLFxuICAgICAgICAgICAgICAgICAgICB7IHRva2VuOiAna2V5d29yZC5kaXJlY3RpdmUuaW5jbHVkZS5lbmQnLCBuZXh0OiAnQHBvcCcgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyhcXHMqKShcIikoW15cIl0qKShcIikvLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgICAgICAgICAgICdrZXl3b3JkLmRpcmVjdGl2ZS5pbmNsdWRlLmJlZ2luJyxcbiAgICAgICAgICAgICAgICAgICAgJ3N0cmluZy5pbmNsdWRlLmlkZW50aWZpZXInLFxuICAgICAgICAgICAgICAgICAgICB7IHRva2VuOiAna2V5d29yZC5kaXJlY3RpdmUuaW5jbHVkZS5lbmQnLCBuZXh0OiAnQHBvcCcgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9