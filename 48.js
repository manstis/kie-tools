(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/razor/razor.js":
/*!**********************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/razor/razor.js ***!
  \**********************************************************************************************************************************/
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

var EMPTY_ELEMENTS = [
    'area',
    'base',
    'br',
    'col',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'menuitem',
    'meta',
    'param',
    'source',
    'track',
    'wbr'
];
var conf = {
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,
    comments: {
        blockComment: ['<!--', '-->']
    },
    brackets: [
        ['<!--', '-->'],
        ['<', '>'],
        ['{', '}'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: "'", close: "'" }
    ],
    surroundingPairs: [
        { open: '"', close: '"' },
        { open: "'", close: "'" },
        { open: '<', close: '>' }
    ],
    onEnterRules: [
        {
            beforeText: new RegExp("<(?!(?:" + EMPTY_ELEMENTS.join('|') + "))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$", 'i'),
            afterText: /^<\/(\w[\w\d]*)\s*>$/i,
            action: {
                indentAction: _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__["languages"].IndentAction.IndentOutdent
            }
        },
        {
            beforeText: new RegExp("<(?!(?:" + EMPTY_ELEMENTS.join('|') + "))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$", 'i'),
            action: { indentAction: _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__["languages"].IndentAction.Indent }
        }
    ]
};
var language = {
    defaultToken: '',
    tokenPostfix: '',
    // ignoreCase: true,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            [/@@/],
            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.root' }],
            [/<!DOCTYPE/, 'metatag.html', '@doctype'],
            [/<!--/, 'comment.html', '@comment'],
            [/(<)(\w+)(\/>)/, ['delimiter.html', 'tag.html', 'delimiter.html']],
            [/(<)(script)/, ['delimiter.html', { token: 'tag.html', next: '@script' }]],
            [/(<)(style)/, ['delimiter.html', { token: 'tag.html', next: '@style' }]],
            [/(<)([:\w]+)/, ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]],
            [/(<\/)(\w+)/, ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]],
            [/</, 'delimiter.html'],
            [/[ \t\r\n]+/],
            [/[^<@]+/] // text
        ],
        doctype: [
            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.comment' }],
            [/[^>]+/, 'metatag.content.html'],
            [/>/, 'metatag.html', '@pop']
        ],
        comment: [
            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.comment' }],
            [/-->/, 'comment.html', '@pop'],
            [/[^-]+/, 'comment.content.html'],
            [/./, 'comment.content.html']
        ],
        otherTag: [
            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.otherTag' }],
            [/\/?>/, 'delimiter.html', '@pop'],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/[ \t\r\n]+/] // whitespace
        ],
        // -- BEGIN <script> tags handling
        // After <script
        script: [
            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.script' }],
            [/type/, 'attribute.name', '@scriptAfterType'],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@scriptEmbedded.text/javascript',
                    nextEmbedded: 'text/javascript'
                }
            ],
            [/[ \t\r\n]+/],
            [
                /(<\/)(script\s*)(>)/,
                ['delimiter.html', 'tag.html', { token: 'delimiter.html', next: '@pop' }]
            ]
        ],
        // After <script ... type
        scriptAfterType: [
            [
                /@[^@]/,
                {
                    token: '@rematch',
                    switchTo: '@razorInSimpleState.scriptAfterType'
                }
            ],
            [/=/, 'delimiter', '@scriptAfterTypeEquals'],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@scriptEmbedded.text/javascript',
                    nextEmbedded: 'text/javascript'
                }
            ],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <script ... type =
        scriptAfterTypeEquals: [
            [
                /@[^@]/,
                {
                    token: '@rematch',
                    switchTo: '@razorInSimpleState.scriptAfterTypeEquals'
                }
            ],
            [
                /"([^"]*)"/,
                {
                    token: 'attribute.value',
                    switchTo: '@scriptWithCustomType.$1'
                }
            ],
            [
                /'([^']*)'/,
                {
                    token: 'attribute.value',
                    switchTo: '@scriptWithCustomType.$1'
                }
            ],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@scriptEmbedded.text/javascript',
                    nextEmbedded: 'text/javascript'
                }
            ],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <script ... type = $S2
        scriptWithCustomType: [
            [
                /@[^@]/,
                {
                    token: '@rematch',
                    switchTo: '@razorInSimpleState.scriptWithCustomType.$S2'
                }
            ],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@scriptEmbedded.$S2',
                    nextEmbedded: '$S2'
                }
            ],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        scriptEmbedded: [
            [
                /@[^@]/,
                {
                    token: '@rematch',
                    switchTo: '@razorInEmbeddedState.scriptEmbedded.$S2',
                    nextEmbedded: '@pop'
                }
            ],
            [/<\/script/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }]
        ],
        // -- END <script> tags handling
        // -- BEGIN <style> tags handling
        // After <style
        style: [
            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.style' }],
            [/type/, 'attribute.name', '@styleAfterType'],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@styleEmbedded.text/css',
                    nextEmbedded: 'text/css'
                }
            ],
            [/[ \t\r\n]+/],
            [
                /(<\/)(style\s*)(>)/,
                ['delimiter.html', 'tag.html', { token: 'delimiter.html', next: '@pop' }]
            ]
        ],
        // After <style ... type
        styleAfterType: [
            [
                /@[^@]/,
                {
                    token: '@rematch',
                    switchTo: '@razorInSimpleState.styleAfterType'
                }
            ],
            [/=/, 'delimiter', '@styleAfterTypeEquals'],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@styleEmbedded.text/css',
                    nextEmbedded: 'text/css'
                }
            ],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <style ... type =
        styleAfterTypeEquals: [
            [
                /@[^@]/,
                {
                    token: '@rematch',
                    switchTo: '@razorInSimpleState.styleAfterTypeEquals'
                }
            ],
            [
                /"([^"]*)"/,
                {
                    token: 'attribute.value',
                    switchTo: '@styleWithCustomType.$1'
                }
            ],
            [
                /'([^']*)'/,
                {
                    token: 'attribute.value',
                    switchTo: '@styleWithCustomType.$1'
                }
            ],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@styleEmbedded.text/css',
                    nextEmbedded: 'text/css'
                }
            ],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <style ... type = $S2
        styleWithCustomType: [
            [
                /@[^@]/,
                {
                    token: '@rematch',
                    switchTo: '@razorInSimpleState.styleWithCustomType.$S2'
                }
            ],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@styleEmbedded.$S2',
                    nextEmbedded: '$S2'
                }
            ],
            [/"([^"]*)"/, 'attribute.value'],
            [/'([^']*)'/, 'attribute.value'],
            [/[\w\-]+/, 'attribute.name'],
            [/=/, 'delimiter'],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        styleEmbedded: [
            [
                /@[^@]/,
                {
                    token: '@rematch',
                    switchTo: '@razorInEmbeddedState.styleEmbedded.$S2',
                    nextEmbedded: '@pop'
                }
            ],
            [/<\/style/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }]
        ],
        // -- END <style> tags handling
        razorInSimpleState: [
            [/@\*/, 'comment.cs', '@razorBlockCommentTopLevel'],
            [/@[{(]/, 'metatag.cs', '@razorRootTopLevel'],
            [/(@)(\s*[\w]+)/, ['metatag.cs', { token: 'identifier.cs', switchTo: '@$S2.$S3' }]],
            [/[})]/, { token: 'metatag.cs', switchTo: '@$S2.$S3' }],
            [/\*@/, { token: 'comment.cs', switchTo: '@$S2.$S3' }]
        ],
        razorInEmbeddedState: [
            [/@\*/, 'comment.cs', '@razorBlockCommentTopLevel'],
            [/@[{(]/, 'metatag.cs', '@razorRootTopLevel'],
            [
                /(@)(\s*[\w]+)/,
                [
                    'metatag.cs',
                    {
                        token: 'identifier.cs',
                        switchTo: '@$S2.$S3',
                        nextEmbedded: '$S3'
                    }
                ]
            ],
            [
                /[})]/,
                {
                    token: 'metatag.cs',
                    switchTo: '@$S2.$S3',
                    nextEmbedded: '$S3'
                }
            ],
            [
                /\*@/,
                {
                    token: 'comment.cs',
                    switchTo: '@$S2.$S3',
                    nextEmbedded: '$S3'
                }
            ]
        ],
        razorBlockCommentTopLevel: [
            [/\*@/, '@rematch', '@pop'],
            [/[^*]+/, 'comment.cs'],
            [/./, 'comment.cs']
        ],
        razorBlockComment: [
            [/\*@/, 'comment.cs', '@pop'],
            [/[^*]+/, 'comment.cs'],
            [/./, 'comment.cs']
        ],
        razorRootTopLevel: [
            [/\{/, 'delimiter.bracket.cs', '@razorRoot'],
            [/\(/, 'delimiter.parenthesis.cs', '@razorRoot'],
            [/[})]/, '@rematch', '@pop'],
            { include: 'razorCommon' }
        ],
        razorRoot: [
            [/\{/, 'delimiter.bracket.cs', '@razorRoot'],
            [/\(/, 'delimiter.parenthesis.cs', '@razorRoot'],
            [/\}/, 'delimiter.bracket.cs', '@pop'],
            [/\)/, 'delimiter.parenthesis.cs', '@pop'],
            { include: 'razorCommon' }
        ],
        razorCommon: [
            [
                /[a-zA-Z_]\w*/,
                {
                    cases: {
                        '@razorKeywords': { token: 'keyword.cs' },
                        '@default': 'identifier.cs'
                    }
                }
            ],
            // brackets
            [/[\[\]]/, 'delimiter.array.cs'],
            // whitespace
            [/[ \t\r\n]+/],
            // comments
            [/\/\/.*$/, 'comment.cs'],
            [/@\*/, 'comment.cs', '@razorBlockComment'],
            // strings
            [/"([^"]*)"/, 'string.cs'],
            [/'([^']*)'/, 'string.cs'],
            // simple html
            [/(<)(\w+)(\/>)/, ['delimiter.html', 'tag.html', 'delimiter.html']],
            [/(<)(\w+)(>)/, ['delimiter.html', 'tag.html', 'delimiter.html']],
            [/(<\/)(\w+)(>)/, ['delimiter.html', 'tag.html', 'delimiter.html']],
            // delimiters
            [/[\+\-\*\%\&\|\^\~\!\=\<\>\/\?\;\:\.\,]/, 'delimiter.cs'],
            // numbers
            [/\d*\d+[eE]([\-+]?\d+)?/, 'number.float.cs'],
            [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float.cs'],
            [/0[xX][0-9a-fA-F']*[0-9a-fA-F]/, 'number.hex.cs'],
            [/0[0-7']*[0-7]/, 'number.octal.cs'],
            [/0[bB][0-1']*[0-1]/, 'number.binary.cs'],
            [/\d[\d']*/, 'number.cs'],
            [/\d/, 'number.cs']
        ]
    },
    razorKeywords: [
        'abstract',
        'as',
        'async',
        'await',
        'base',
        'bool',
        'break',
        'by',
        'byte',
        'case',
        'catch',
        'char',
        'checked',
        'class',
        'const',
        'continue',
        'decimal',
        'default',
        'delegate',
        'do',
        'double',
        'descending',
        'explicit',
        'event',
        'extern',
        'else',
        'enum',
        'false',
        'finally',
        'fixed',
        'float',
        'for',
        'foreach',
        'from',
        'goto',
        'group',
        'if',
        'implicit',
        'in',
        'int',
        'interface',
        'internal',
        'into',
        'is',
        'lock',
        'long',
        'nameof',
        'new',
        'null',
        'namespace',
        'object',
        'operator',
        'out',
        'override',
        'orderby',
        'params',
        'private',
        'protected',
        'public',
        'readonly',
        'ref',
        'return',
        'switch',
        'struct',
        'sbyte',
        'sealed',
        'short',
        'sizeof',
        'stackalloc',
        'static',
        'string',
        'select',
        'this',
        'throw',
        'true',
        'try',
        'typeof',
        'uint',
        'ulong',
        'unchecked',
        'unsafe',
        'ushort',
        'using',
        'var',
        'virtual',
        'volatile',
        'void',
        'when',
        'while',
        'where',
        'yield',
        'model',
        'inject' // Razor specific
    ],
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvcmF6b3IvcmF6b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxrRUFBa0UsSUFBSSxNQUFNO0FBQzVFO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHdFQUFTO0FBQ3ZDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxxQkFBcUIsZUFBZSx3RUFBUztBQUM3QztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBEQUEwRDtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QscUNBQXFDO0FBQ3JGLCtDQUErQyxvQ0FBb0M7QUFDbkYsZ0RBQWdELHVDQUF1QztBQUN2RiwrQ0FBK0MsdUNBQXVDO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNkRBQTZEO0FBQ3BGO0FBQ0E7QUFDQTtB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QkFBZ0I7QUFDaEI7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHNCQUFzQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxJQUFJLGNBQWMsRUFBRSxjQUFjLEVBQUU7QUFDbEYiLCJmaWxlIjoiNDguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmltcG9ydCB7IGxhbmd1YWdlcyB9IGZyb20gJy4uL2ZpbGxlcnMvbW9uYWNvLWVkaXRvci1jb3JlLmpzJztcbnZhciBFTVBUWV9FTEVNRU5UUyA9IFtcbiAgICAnYXJlYScsXG4gICAgJ2Jhc2UnLFxuICAgICdicicsXG4gICAgJ2NvbCcsXG4gICAgJ2VtYmVkJyxcbiAgICAnaHInLFxuICAgICdpbWcnLFxuICAgICdpbnB1dCcsXG4gICAgJ2tleWdlbicsXG4gICAgJ2xpbmsnLFxuICAgICdtZW51aXRlbScsXG4gICAgJ21ldGEnLFxuICAgICdwYXJhbScsXG4gICAgJ3NvdXJjZScsXG4gICAgJ3RyYWNrJyxcbiAgICAnd2JyJ1xuXTtcbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICB3b3JkUGF0dGVybjogLygtP1xcZCpcXC5cXGRcXHcqKXwoW15cXGBcXH5cXCFcXEBcXCRcXF5cXCZcXCpcXChcXClcXC1cXD1cXCtcXFtcXHtcXF1cXH1cXFxcXFx8XFw7XFw6XFwnXFxcIlxcLFxcLlxcPFxcPlxcL1xcc10rKS9nLFxuICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGJsb2NrQ29tbWVudDogWyc8IS0tJywgJy0tPiddXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJzwhLS0nLCAnLS0+J10sXG4gICAgICAgIFsnPCcsICc+J10sXG4gICAgICAgIFsneycsICd9J10sXG4gICAgICAgIFsnKCcsICcpJ11cbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfVxuICAgIF0sXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9LFxuICAgICAgICB7IG9wZW46ICc8JywgY2xvc2U6ICc+JyB9XG4gICAgXSxcbiAgICBvbkVudGVyUnVsZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgYmVmb3JlVGV4dDogbmV3IFJlZ0V4cChcIjwoPyEoPzpcIiArIEVNUFRZX0VMRU1FTlRTLmpvaW4oJ3wnKSArIFwiKSkoXFxcXHdbXFxcXHdcXFxcZF0qKShbXi8+XSooPyEvKT4pW148XSokXCIsICdpJyksXG4gICAgICAgICAgICBhZnRlclRleHQ6IC9ePFxcLyhcXHdbXFx3XFxkXSopXFxzKj4kL2ksXG4gICAgICAgICAgICBhY3Rpb246IHtcbiAgICAgICAgICAgICAgICBpbmRlbnRBY3Rpb246IGxhbmd1YWdlcy5JbmRlbnRBY3Rpb24uSW5kZW50T3V0ZGVudFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBiZWZvcmVUZXh0OiBuZXcgUmVnRXhwKFwiPCg/ISg/OlwiICsgRU1QVFlfRUxFTUVOVFMuam9pbignfCcpICsgXCIpKShcXFxcd1tcXFxcd1xcXFxkXSopKFteLz5dKig/IS8pPilbXjxdKiRcIiwgJ2knKSxcbiAgICAgICAgICAgIGFjdGlvbjogeyBpbmRlbnRBY3Rpb246IGxhbmd1YWdlcy5JbmRlbnRBY3Rpb24uSW5kZW50IH1cbiAgICAgICAgfVxuICAgIF1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgdG9rZW5Qb3N0Zml4OiAnJyxcbiAgICAvLyBpZ25vcmVDYXNlOiB0cnVlLFxuICAgIC8vIFRoZSBtYWluIHRva2VuaXplciBmb3Igb3VyIGxhbmd1YWdlc1xuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICBbL0BAL10sXG4gICAgICAgICAgICBbL0BbXkBdLywgeyB0b2tlbjogJ0ByZW1hdGNoJywgc3dpdGNoVG86ICdAcmF6b3JJblNpbXBsZVN0YXRlLnJvb3QnIH1dLFxuICAgICAgICAgICAgWy88IURPQ1RZUEUvLCAnbWV0YXRhZy5odG1sJywgJ0Bkb2N0eXBlJ10sXG4gICAgICAgICAgICBbLzwhLS0vLCAnY29tbWVudC5odG1sJywgJ0Bjb21tZW50J10sXG4gICAgICAgICAgICBbLyg8KShcXHcrKShcXC8+KS8sIFsnZGVsaW1pdGVyLmh0bWwnLCAndGFnLmh0bWwnLCAnZGVsaW1pdGVyLmh0bWwnXV0sXG4gICAgICAgICAgICBbLyg8KShzY3JpcHQpLywgWydkZWxpbWl0ZXIuaHRtbCcsIHsgdG9rZW46ICd0YWcuaHRtbCcsIG5leHQ6ICdAc2NyaXB0JyB9XV0sXG4gICAgICAgICAgICBbLyg8KShzdHlsZSkvLCBbJ2RlbGltaXRlci5odG1sJywgeyB0b2tlbjogJ3RhZy5odG1sJywgbmV4dDogJ0BzdHlsZScgfV1dLFxuICAgICAgICAgICAgWy8oPCkoWzpcXHddKykvLCBbJ2RlbGltaXRlci5odG1sJywgeyB0b2tlbjogJ3RhZy5odG1sJywgbmV4dDogJ0BvdGhlclRhZycgfV1dLFxuICAgICAgICAgICAgWy8oPFxcLykoXFx3KykvLCBbJ2RlbGltaXRlci5odG1sJywgeyB0b2tlbjogJ3RhZy5odG1sJywgbmV4dDogJ0BvdGhlclRhZycgfV1dLFxuICAgICAgICAgICAgWy88LywgJ2RlbGltaXRlci5odG1sJ10sXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcbiAgICAgICAgICAgIFsvW148QF0rL10gLy8gdGV4dFxuICAgICAgICBdLFxuICAgICAgICBkb2N0eXBlOiBbXG4gICAgICAgICAgICBbL0BbXkBdLywgeyB0b2tlbjogJ0ByZW1hdGNoJywgc3dpdGNoVG86ICdAcmF6b3JJblNpbXBsZVN0YXRlLmNvbW1lbnQnIH1dLFxuICAgICAgICAgICAgWy9bXj5dKy8sICdtZXRhdGFnLmNvbnRlbnQuaHRtbCddLFxuICAgICAgICAgICAgWy8+LywgJ21ldGF0YWcuaHRtbCcsICdAcG9wJ11cbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudDogW1xuICAgICAgICAgICAgWy9AW15AXS8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIHN3aXRjaFRvOiAnQHJhem9ySW5TaW1wbGVTdGF0ZS5jb21tZW50JyB9XSxcbiAgICAgICAgICAgIFsvLS0+LywgJ2NvbW1lbnQuaHRtbCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1teLV0rLywgJ2NvbW1lbnQuY29udGVudC5odG1sJ10sXG4gICAgICAgICAgICBbLy4vLCAnY29tbWVudC5jb250ZW50Lmh0bWwnXVxuICAgICAgICBdLFxuICAgICAgICBvdGhlclRhZzogW1xuICAgICAgICAgICAgWy9AW15AXS8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIHN3aXRjaFRvOiAnQHJhem9ySW5TaW1wbGVTdGF0ZS5vdGhlclRhZycgfV0sXG4gICAgICAgICAgICBbL1xcLz8+LywgJ2RlbGltaXRlci5odG1sJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsvXCIoW15cIl0qKVwiLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxuICAgICAgICAgICAgWy8nKFteJ10qKScvLCAnYXR0cmlidXRlLnZhbHVlJ10sXG4gICAgICAgICAgICBbL1tcXHdcXC1dKy8sICdhdHRyaWJ1dGUubmFtZSddLFxuICAgICAgICAgICAgWy89LywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10gLy8gd2hpdGVzcGFjZVxuICAgICAgICBdLFxuICAgICAgICAvLyAtLSBCRUdJTiA8c2NyaXB0PiB0YWdzIGhhbmRsaW5nXG4gICAgICAgIC8vIEFmdGVyIDxzY3JpcHRcbiAgICAgICAgc2NyaXB0OiBbXG4gICAgICAgICAgICBbL0BbXkBdLywgeyB0b2tlbjogJ0ByZW1hdGNoJywgc3dpdGNoVG86ICdAcmF6b3JJblNpbXBsZVN0YXRlLnNjcmlwdCcgfV0sXG4gICAgICAgICAgICBbL3R5cGUvLCAnYXR0cmlidXRlLm5hbWUnLCAnQHNjcmlwdEFmdGVyVHlwZSddLFxuICAgICAgICAgICAgWy9cIihbXlwiXSopXCIvLCAnYXR0cmlidXRlLnZhbHVlJ10sXG4gICAgICAgICAgICBbLycoW14nXSopJy8sICdhdHRyaWJ1dGUudmFsdWUnXSxcbiAgICAgICAgICAgIFsvW1xcd1xcLV0rLywgJ2F0dHJpYnV0ZS5uYW1lJ10sXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLz4vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdkZWxpbWl0ZXIuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAc2NyaXB0RW1iZWRkZWQudGV4dC9qYXZhc2NyaXB0JyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVtYmVkZGVkOiAndGV4dC9qYXZhc2NyaXB0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKDxcXC8pKHNjcmlwdFxccyopKD4pLyxcbiAgICAgICAgICAgICAgICBbJ2RlbGltaXRlci5odG1sJywgJ3RhZy5odG1sJywgeyB0b2tlbjogJ2RlbGltaXRlci5odG1sJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIC8vIEFmdGVyIDxzY3JpcHQgLi4uIHR5cGVcbiAgICAgICAgc2NyaXB0QWZ0ZXJUeXBlOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL0BbXkBdLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnQHJlbWF0Y2gnLFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0ByYXpvckluU2ltcGxlU3RhdGUuc2NyaXB0QWZ0ZXJUeXBlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyJywgJ0BzY3JpcHRBZnRlclR5cGVFcXVhbHMnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvPi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2RlbGltaXRlci5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BzY3JpcHRFbWJlZGRlZC50ZXh0L2phdmFzY3JpcHQnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2phdmFzY3JpcHQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxuICAgICAgICAgICAgWy88XFwvc2NyaXB0XFxzKj4vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gQWZ0ZXIgPHNjcmlwdCAuLi4gdHlwZSA9XG4gICAgICAgIHNjcmlwdEFmdGVyVHlwZUVxdWFsczogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9AW15AXS8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ0ByZW1hdGNoJyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAcmF6b3JJblNpbXBsZVN0YXRlLnNjcmlwdEFmdGVyVHlwZUVxdWFscydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9cIihbXlwiXSopXCIvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdhdHRyaWJ1dGUudmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0BzY3JpcHRXaXRoQ3VzdG9tVHlwZS4kMSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8nKFteJ10qKScvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdhdHRyaWJ1dGUudmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0BzY3JpcHRXaXRoQ3VzdG9tVHlwZS4kMSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8+LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnZGVsaW1pdGVyLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHNjcmlwdEVtYmVkZGVkLnRleHQvamF2YXNjcmlwdCcsXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJ3RleHQvamF2YXNjcmlwdCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXG4gICAgICAgICAgICBbLzxcXC9zY3JpcHRcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICAvLyBBZnRlciA8c2NyaXB0IC4uLiB0eXBlID0gJFMyXG4gICAgICAgIHNjcmlwdFdpdGhDdXN0b21UeXBlOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL0BbXkBdLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnQHJlbWF0Y2gnLFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0ByYXpvckluU2ltcGxlU3RhdGUuc2NyaXB0V2l0aEN1c3RvbVR5cGUuJFMyJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLz4vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdkZWxpbWl0ZXIuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAc2NyaXB0RW1iZWRkZWQuJFMyJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVtYmVkZGVkOiAnJFMyJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL1wiKFteXCJdKilcIi8sICdhdHRyaWJ1dGUudmFsdWUnXSxcbiAgICAgICAgICAgIFsvJyhbXiddKiknLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxuICAgICAgICAgICAgWy9bXFx3XFwtXSsvLCAnYXR0cmlidXRlLm5hbWUnXSxcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxuICAgICAgICAgICAgWy88XFwvc2NyaXB0XFxzKj4vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgc2NyaXB0RW1iZWRkZWQ6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvQFteQF0vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdAcmVtYXRjaCcsXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnQHJhem9ySW5FbWJlZGRlZFN0YXRlLnNjcmlwdEVtYmVkZGVkLiRTMicsXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJ0Bwb3AnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvPFxcL3NjcmlwdC8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJywgbmV4dEVtYmVkZGVkOiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gLS0gRU5EIDxzY3JpcHQ+IHRhZ3MgaGFuZGxpbmdcbiAgICAgICAgLy8gLS0gQkVHSU4gPHN0eWxlPiB0YWdzIGhhbmRsaW5nXG4gICAgICAgIC8vIEFmdGVyIDxzdHlsZVxuICAgICAgICBzdHlsZTogW1xuICAgICAgICAgICAgWy9AW15AXS8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIHN3aXRjaFRvOiAnQHJhem9ySW5TaW1wbGVTdGF0ZS5zdHlsZScgfV0sXG4gICAgICAgICAgICBbL3R5cGUvLCAnYXR0cmlidXRlLm5hbWUnLCAnQHN0eWxlQWZ0ZXJUeXBlJ10sXG4gICAgICAgICAgICBbL1wiKFteXCJdKilcIi8sICdhdHRyaWJ1dGUudmFsdWUnXSxcbiAgICAgICAgICAgIFsvJyhbXiddKiknLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxuICAgICAgICAgICAgWy9bXFx3XFwtXSsvLCAnYXR0cmlidXRlLm5hbWUnXSxcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvPi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2RlbGltaXRlci5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BzdHlsZUVtYmVkZGVkLnRleHQvY3NzJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVtYmVkZGVkOiAndGV4dC9jc3MnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8oPFxcLykoc3R5bGVcXHMqKSg+KS8sXG4gICAgICAgICAgICAgICAgWydkZWxpbWl0ZXIuaHRtbCcsICd0YWcuaHRtbCcsIHsgdG9rZW46ICdkZWxpbWl0ZXIuaHRtbCcsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICAvLyBBZnRlciA8c3R5bGUgLi4uIHR5cGVcbiAgICAgICAgc3R5bGVBZnRlclR5cGU6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvQFteQF0vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdAcmVtYXRjaCcsXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnQHJhem9ySW5TaW1wbGVTdGF0ZS5zdHlsZUFmdGVyVHlwZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy89LywgJ2RlbGltaXRlcicsICdAc3R5bGVBZnRlclR5cGVFcXVhbHMnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvPi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2RlbGltaXRlci5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BzdHlsZUVtYmVkZGVkLnRleHQvY3NzJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVtYmVkZGVkOiAndGV4dC9jc3MnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxuICAgICAgICAgICAgWy88XFwvc3R5bGVcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICAvLyBBZnRlciA8c3R5bGUgLi4uIHR5cGUgPVxuICAgICAgICBzdHlsZUFmdGVyVHlwZUVxdWFsczogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9AW15AXS8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ0ByZW1hdGNoJyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAcmF6b3JJblNpbXBsZVN0YXRlLnN0eWxlQWZ0ZXJUeXBlRXF1YWxzJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1wiKFteXCJdKilcIi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2F0dHJpYnV0ZS52YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnQHN0eWxlV2l0aEN1c3RvbVR5cGUuJDEnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvJyhbXiddKiknLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnYXR0cmlidXRlLnZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAc3R5bGVXaXRoQ3VzdG9tVHlwZS4kMSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8+LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnZGVsaW1pdGVyLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHN0eWxlRW1iZWRkZWQudGV4dC9jc3MnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2NzcydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXG4gICAgICAgICAgICBbLzxcXC9zdHlsZVxccyo+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIC8vIEFmdGVyIDxzdHlsZSAuLi4gdHlwZSA9ICRTMlxuICAgICAgICBzdHlsZVdpdGhDdXN0b21UeXBlOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL0BbXkBdLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnQHJlbWF0Y2gnLFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0ByYXpvckluU2ltcGxlU3RhdGUuc3R5bGVXaXRoQ3VzdG9tVHlwZS4kUzInXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvPi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2RlbGltaXRlci5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BzdHlsZUVtYmVkZGVkLiRTMicsXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJyRTMidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9cIihbXlwiXSopXCIvLCAnYXR0cmlidXRlLnZhbHVlJ10sXG4gICAgICAgICAgICBbLycoW14nXSopJy8sICdhdHRyaWJ1dGUudmFsdWUnXSxcbiAgICAgICAgICAgIFsvW1xcd1xcLV0rLywgJ2F0dHJpYnV0ZS5uYW1lJ10sXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcbiAgICAgICAgICAgIFsvPFxcL3N0eWxlXFxzKj4vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgc3R5bGVFbWJlZGRlZDogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9AW15AXS8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ0ByZW1hdGNoJyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAcmF6b3JJbkVtYmVkZGVkU3RhdGUuc3R5bGVFbWJlZGRlZC4kUzInLFxuICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICdAcG9wJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbLzxcXC9zdHlsZS8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJywgbmV4dEVtYmVkZGVkOiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gLS0gRU5EIDxzdHlsZT4gdGFncyBoYW5kbGluZ1xuICAgICAgICByYXpvckluU2ltcGxlU3RhdGU6IFtcbiAgICAgICAgICAgIFsvQFxcKi8sICdjb21tZW50LmNzJywgJ0ByYXpvckJsb2NrQ29tbWVudFRvcExldmVsJ10sXG4gICAgICAgICAgICBbL0BbeyhdLywgJ21ldGF0YWcuY3MnLCAnQHJhem9yUm9vdFRvcExldmVsJ10sXG4gICAgICAgICAgICBbLyhAKShcXHMqW1xcd10rKS8sIFsnbWV0YXRhZy5jcycsIHsgdG9rZW46ICdpZGVudGlmaWVyLmNzJywgc3dpdGNoVG86ICdAJFMyLiRTMycgfV1dLFxuICAgICAgICAgICAgWy9bfSldLywgeyB0b2tlbjogJ21ldGF0YWcuY3MnLCBzd2l0Y2hUbzogJ0AkUzIuJFMzJyB9XSxcbiAgICAgICAgICAgIFsvXFwqQC8sIHsgdG9rZW46ICdjb21tZW50LmNzJywgc3dpdGNoVG86ICdAJFMyLiRTMycgfV1cbiAgICAgICAgXSxcbiAgICAgICAgcmF6b3JJbkVtYmVkZGVkU3RhdGU6IFtcbiAgICAgICAgICAgIFsvQFxcKi8sICdjb21tZW50LmNzJywgJ0ByYXpvckJsb2NrQ29tbWVudFRvcExldmVsJ10sXG4gICAgICAgICAgICBbL0BbeyhdLywgJ21ldGF0YWcuY3MnLCAnQHJhem9yUm9vdFRvcExldmVsJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyhAKShcXHMqW1xcd10rKS8sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAnbWV0YXRhZy5jcycsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiAnaWRlbnRpZmllci5jcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0AkUzIuJFMzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJyRTMydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1t9KV0vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdtZXRhdGFnLmNzJyxcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAJFMyLiRTMycsXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJyRTMydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9cXCpALyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnY29tbWVudC5jcycsXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnQCRTMi4kUzMnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICckUzMnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICByYXpvckJsb2NrQ29tbWVudFRvcExldmVsOiBbXG4gICAgICAgICAgICBbL1xcKkAvLCAnQHJlbWF0Y2gnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9bXipdKy8sICdjb21tZW50LmNzJ10sXG4gICAgICAgICAgICBbLy4vLCAnY29tbWVudC5jcyddXG4gICAgICAgIF0sXG4gICAgICAgIHJhem9yQmxvY2tDb21tZW50OiBbXG4gICAgICAgICAgICBbL1xcKkAvLCAnY29tbWVudC5jcycsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1teKl0rLywgJ2NvbW1lbnQuY3MnXSxcbiAgICAgICAgICAgIFsvLi8sICdjb21tZW50LmNzJ11cbiAgICAgICAgXSxcbiAgICAgICAgcmF6b3JSb290VG9wTGV2ZWw6IFtcbiAgICAgICAgICAgIFsvXFx7LywgJ2RlbGltaXRlci5icmFja2V0LmNzJywgJ0ByYXpvclJvb3QnXSxcbiAgICAgICAgICAgIFsvXFwoLywgJ2RlbGltaXRlci5wYXJlbnRoZXNpcy5jcycsICdAcmF6b3JSb290J10sXG4gICAgICAgICAgICBbL1t9KV0vLCAnQHJlbWF0Y2gnLCAnQHBvcCddLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAncmF6b3JDb21tb24nIH1cbiAgICAgICAgXSxcbiAgICAgICAgcmF6b3JSb290OiBbXG4gICAgICAgICAgICBbL1xcey8sICdkZWxpbWl0ZXIuYnJhY2tldC5jcycsICdAcmF6b3JSb290J10sXG4gICAgICAgICAgICBbL1xcKC8sICdkZWxpbWl0ZXIucGFyZW50aGVzaXMuY3MnLCAnQHJhem9yUm9vdCddLFxuICAgICAgICAgICAgWy9cXH0vLCAnZGVsaW1pdGVyLmJyYWNrZXQuY3MnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9cXCkvLCAnZGVsaW1pdGVyLnBhcmVudGhlc2lzLmNzJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ3Jhem9yQ29tbW9uJyB9XG4gICAgICAgIF0sXG4gICAgICAgIHJhem9yQ29tbW9uOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1thLXpBLVpfXVxcdyovLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAcmF6b3JLZXl3b3Jkcyc6IHsgdG9rZW46ICdrZXl3b3JkLmNzJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXIuY3MnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gYnJhY2tldHNcbiAgICAgICAgICAgIFsvW1xcW1xcXV0vLCAnZGVsaW1pdGVyLmFycmF5LmNzJ10sXG4gICAgICAgICAgICAvLyB3aGl0ZXNwYWNlXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcbiAgICAgICAgICAgIC8vIGNvbW1lbnRzXG4gICAgICAgICAgICBbL1xcL1xcLy4qJC8sICdjb21tZW50LmNzJ10sXG4gICAgICAgICAgICBbL0BcXCovLCAnY29tbWVudC5jcycsICdAcmF6b3JCbG9ja0NvbW1lbnQnXSxcbiAgICAgICAgICAgIC8vIHN0cmluZ3NcbiAgICAgICAgICAgIFsvXCIoW15cIl0qKVwiLywgJ3N0cmluZy5jcyddLFxuICAgICAgICAgICAgWy8nKFteJ10qKScvLCAnc3RyaW5nLmNzJ10sXG4gICAgICAgICAgICAvLyBzaW1wbGUgaHRtbFxuICAgICAgICAgICAgWy8oPCkoXFx3KykoXFwvPikvLCBbJ2RlbGltaXRlci5odG1sJywgJ3RhZy5odG1sJywgJ2RlbGltaXRlci5odG1sJ11dLFxuICAgICAgICAgICAgWy8oPCkoXFx3KykoPikvLCBbJ2RlbGltaXRlci5odG1sJywgJ3RhZy5odG1sJywgJ2RlbGltaXRlci5odG1sJ11dLFxuICAgICAgICAgICAgWy8oPFxcLykoXFx3KykoPikvLCBbJ2RlbGltaXRlci5odG1sJywgJ3RhZy5odG1sJywgJ2RlbGltaXRlci5odG1sJ11dLFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVyc1xuICAgICAgICAgICAgWy9bXFwrXFwtXFwqXFwlXFwmXFx8XFxeXFx+XFwhXFw9XFw8XFw+XFwvXFw/XFw7XFw6XFwuXFwsXS8sICdkZWxpbWl0ZXIuY3MnXSxcbiAgICAgICAgICAgIC8vIG51bWJlcnNcbiAgICAgICAgICAgIFsvXFxkKlxcZCtbZUVdKFtcXC0rXT9cXGQrKT8vLCAnbnVtYmVyLmZsb2F0LmNzJ10sXG4gICAgICAgICAgICBbL1xcZCpcXC5cXGQrKFtlRV1bXFwtK10/XFxkKyk/LywgJ251bWJlci5mbG9hdC5jcyddLFxuICAgICAgICAgICAgWy8wW3hYXVswLTlhLWZBLUYnXSpbMC05YS1mQS1GXS8sICdudW1iZXIuaGV4LmNzJ10sXG4gICAgICAgICAgICBbLzBbMC03J10qWzAtN10vLCAnbnVtYmVyLm9jdGFsLmNzJ10sXG4gICAgICAgICAgICBbLzBbYkJdWzAtMSddKlswLTFdLywgJ251bWJlci5iaW5hcnkuY3MnXSxcbiAgICAgICAgICAgIFsvXFxkW1xcZCddKi8sICdudW1iZXIuY3MnXSxcbiAgICAgICAgICAgIFsvXFxkLywgJ251bWJlci5jcyddXG4gICAgICAgIF1cbiAgICB9LFxuICAgIHJhem9yS2V5d29yZHM6IFtcbiAgICAgICAgJ2Fic3RyYWN0JyxcbiAgICAgICAgJ2FzJyxcbiAgICAgICAgJ2FzeW5jJyxcbiAgICAgICAgJ2F3YWl0JyxcbiAgICAgICAgJ2Jhc2UnLFxuICAgICAgICAnYm9vbCcsXG4gICAgICAgICdicmVhaycsXG4gICAgICAgICdieScsXG4gICAgICAgICdieXRlJyxcbiAgICAgICAgJ2Nhc2UnLFxuICAgICAgICAnY2F0Y2gnLFxuICAgICAgICAnY2hhcicsXG4gICAgICAgICdjaGVja2VkJyxcbiAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgJ2NvbnN0JyxcbiAgICAgICAgJ2NvbnRpbnVlJyxcbiAgICAgICAgJ2RlY2ltYWwnLFxuICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgICdkZWxlZ2F0ZScsXG4gICAgICAgICdkbycsXG4gICAgICAgICdkb3VibGUnLFxuICAgICAgICAnZGVzY2VuZGluZycsXG4gICAgICAgICdleHBsaWNpdCcsXG4gICAgICAgICdldmVudCcsXG4gICAgICAgICdleHRlcm4nLFxuICAgICAgICAnZWxzZScsXG4gICAgICAgICdlbnVtJyxcbiAgICAgICAgJ2ZhbHNlJyxcbiAgICAgICAgJ2ZpbmFsbHknLFxuICAgICAgICAnZml4ZWQnLFxuICAgICAgICAnZmxvYXQnLFxuICAgICAgICAnZm9yJyxcbiAgICAgICAgJ2ZvcmVhY2gnLFxuICAgICAgICAnZnJvbScsXG4gICAgICAgICdnb3RvJyxcbiAgICAgICAgJ2dyb3VwJyxcbiAgICAgICAgJ2lmJyxcbiAgICAgICAgJ2ltcGxpY2l0JyxcbiAgICAgICAgJ2luJyxcbiAgICAgICAgJ2ludCcsXG4gICAgICAgICdpbnRlcmZhY2UnLFxuICAgICAgICAnaW50ZXJuYWwnLFxuICAgICAgICAnaW50bycsXG4gICAgICAgICdpcycsXG4gICAgICAgICdsb2NrJyxcbiAgICAgICAgJ2xvbmcnLFxuICAgICAgICAnbmFtZW9mJyxcbiAgICAgICAgJ25ldycsXG4gICAgICAgICdudWxsJyxcbiAgICAgICAgJ25hbWVzcGFjZScsXG4gICAgICAgICdvYmplY3QnLFxuICAgICAgICAnb3BlcmF0b3InLFxuICAgICAgICAnb3V0JyxcbiAgICAgICAgJ292ZXJyaWRlJyxcbiAgICAgICAgJ29yZGVyYnknLFxuICAgICAgICAncGFyYW1zJyxcbiAgICAgICAgJ3ByaXZhdGUnLFxuICAgICAgICAncHJvdGVjdGVkJyxcbiAgICAgICAgJ3B1YmxpYycsXG4gICAgICAgICdyZWFkb25seScsXG4gICAgICAgICdyZWYnLFxuICAgICAgICAncmV0dXJuJyxcbiAgICAgICAgJ3N3aXRjaCcsXG4gICAgICAgICdzdHJ1Y3QnLFxuICAgICAgICAnc2J5dGUnLFxuICAgICAgICAnc2VhbGVkJyxcbiAgICAgICAgJ3Nob3J0JyxcbiAgICAgICAgJ3NpemVvZicsXG4gICAgICAgICdzdGFja2FsbG9jJyxcbiAgICAgICAgJ3N0YXRpYycsXG4gICAgICAgICdzdHJpbmcnLFxuICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgJ3RoaXMnLFxuICAgICAgICAndGhyb3cnLFxuICAgICAgICAndHJ1ZScsXG4gICAgICAgICd0cnknLFxuICAgICAgICAndHlwZW9mJyxcbiAgICAgICAgJ3VpbnQnLFxuICAgICAgICAndWxvbmcnLFxuICAgICAgICAndW5jaGVja2VkJyxcbiAgICAgICAgJ3Vuc2FmZScsXG4gICAgICAgICd1c2hvcnQnLFxuICAgICAgICAndXNpbmcnLFxuICAgICAgICAndmFyJyxcbiAgICAgICAgJ3ZpcnR1YWwnLFxuICAgICAgICAndm9sYXRpbGUnLFxuICAgICAgICAndm9pZCcsXG4gICAgICAgICd3aGVuJyxcbiAgICAgICAgJ3doaWxlJyxcbiAgICAgICAgJ3doZXJlJyxcbiAgICAgICAgJ3lpZWxkJyxcbiAgICAgICAgJ21vZGVsJyxcbiAgICAgICAgJ2luamVjdCcgLy8gUmF6b3Igc3BlY2lmaWNcbiAgICBdLFxuICAgIGVzY2FwZXM6IC9cXFxcKD86W2FiZm5ydHZcXFxcXCInXXx4WzAtOUEtRmEtZl17MSw0fXx1WzAtOUEtRmEtZl17NH18VVswLTlBLUZhLWZdezh9KS9cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9