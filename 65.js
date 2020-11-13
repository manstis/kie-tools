(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/twig/twig.js":
/*!********************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/twig/twig.js ***!
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
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,
    comments: {
        blockComment: ['{#', '#}']
    },
    brackets: [
        ['{#', '#}'],
        ['{%', '%}'],
        ['{{', '}}'],
        ['(', ')'],
        ['[', ']'],
        // HTML
        ['<!--', '-->'],
        ['<', '>']
    ],
    autoClosingPairs: [
        { open: '{# ', close: ' #}' },
        { open: '{% ', close: ' %}' },
        { open: '{{ ', close: ' }}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: "'", close: "'" }
    ],
    surroundingPairs: [
        { open: '"', close: '"' },
        { open: "'", close: "'" },
        // HTML
        { open: '<', close: '>' }
    ]
};
var language = {
    defaultToken: '',
    tokenPostfix: '',
    ignoreCase: true,
    keywords: [
        // (opening) tags
        'apply',
        'autoescape',
        'block',
        'deprecated',
        'do',
        'embed',
        'extends',
        'flush',
        'for',
        'from',
        'if',
        'import',
        'include',
        'macro',
        'sandbox',
        'set',
        'use',
        'verbatim',
        'with',
        // closing tags
        'endapply',
        'endautoescape',
        'endblock',
        'endembed',
        'endfor',
        'endif',
        'endmacro',
        'endsandbox',
        'endset',
        'endwith',
        // literals
        'true',
        'false'
    ],
    tokenizer: {
        root: [
            // whitespace
            [/\s+/],
            // Twig Tag Delimiters
            [/{#/, 'comment.twig', '@commentState'],
            [/{%[-~]?/, 'delimiter.twig', '@blockState'],
            [/{{[-~]?/, 'delimiter.twig', '@variableState'],
            // HTML
            [/<!DOCTYPE/, 'metatag.html', '@doctype'],
            [/<!--/, 'comment.html', '@comment'],
            [
                /(<)((?:[\w\-]+:)?[\w\-]+)(\s*)(\/>)/,
                ['delimiter.html', 'tag.html', '', 'delimiter.html']
            ],
            [/(<)(script)/, ['delimiter.html', { token: 'tag.html', next: '@script' }]],
            [/(<)(style)/, ['delimiter.html', { token: 'tag.html', next: '@style' }]],
            [
                /(<)((?:[\w\-]+:)?[\w\-]+)/,
                ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]
            ],
            [
                /(<\/)((?:[\w\-]+:)?[\w\-]+)/,
                ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]
            ],
            [/</, 'delimiter.html'],
            [/[^<]+/] // text
        ],
        /**
         * Comment Tag Handling
         */
        commentState: [
            [/#}/, 'comment.twig', '@pop'],
            [/./, 'comment.twig']
        ],
        /**
         * Block Tag Handling
         */
        blockState: [
            [/[-~]?%}/, 'delimiter.twig', '@pop'],
            // whitespace
            [/\s+/],
            // verbatim
            // Unlike other blocks, verbatim ehas its own state
            // transition to ensure we mark its contents as strings.
            [
                /(verbatim)(\s*)([-~]?%})/,
                ['keyword.twig', '', { token: 'delimiter.twig', next: '@rawDataState' }]
            ],
            { include: 'expression' }
        ],
        rawDataState: [
            // endverbatim
            [
                /({%[-~]?)(\s*)(endverbatim)(\s*)([-~]?%})/,
                [
                    'delimiter.twig',
                    '',
                    'keyword.twig',
                    '',
                    { token: 'delimiter.twig', next: '@popall' }
                ]
            ],
            [/./, 'string.twig']
        ],
        /**
         * Variable Tag Handling
         */
        variableState: [[/[-~]?}}/, 'delimiter.twig', '@pop'], { include: 'expression' }],
        stringState: [
            // closing double quoted string
            [/"/, 'string.twig', '@pop'],
            // interpolation start
            [/#{\s*/, 'string.twig', '@interpolationState'],
            // string part
            [/[^#"\\]*(?:(?:\\.|#(?!\{))[^#"\\]*)*/, 'string.twig']
        ],
        interpolationState: [
            // interpolation end
            [/}/, 'string.twig', '@pop'],
            { include: 'expression' }
        ],
        /**
         * Expression Handling
         */
        expression: [
            // whitespace
            [/\s+/],
            // operators - math
            [/\+|-|\/{1,2}|%|\*{1,2}/, 'operators.twig'],
            // operators - logic
            [/(and|or|not|b-and|b-xor|b-or)(\s+)/, ['operators.twig', '']],
            // operators - comparison (symbols)
            [/==|!=|<|>|>=|<=/, 'operators.twig'],
            // operators - comparison (words)
            [/(starts with|ends with|matches)(\s+)/, ['operators.twig', '']],
            // operators - containment
            [/(in)(\s+)/, ['operators.twig', '']],
            // operators - test
            [/(is)(\s+)/, ['operators.twig', '']],
            // operators - misc
            [/\||~|:|\.{1,2}|\?{1,2}/, 'operators.twig'],
            // names
            [
                /[^\W\d][\w]*/,
                {
                    cases: {
                        '@keywords': 'keyword.twig',
                        '@default': 'variable.twig'
                    }
                }
            ],
            // numbers
            [/\d+(\.\d+)?/, 'number.twig'],
            // punctuation
            [/\(|\)|\[|\]|{|}|,/, 'delimiter.twig'],
            // strings
            [/"([^#"\\]*(?:\\.[^#"\\]*)*)"|\'([^\'\\]*(?:\\.[^\'\\]*)*)\'/, 'string.twig'],
            // opening double quoted string
            [/"/, 'string.twig', '@stringState'],
            // misc syntactic constructs
            // These are not operators per se, but for the purposes of lexical analysis we
            // can treat them as such.
            // arrow functions
            [/=>/, 'operators.twig'],
            // assignment
            [/=/, 'operators.twig']
        ],
        /**
         * HTML
         */
        doctype: [
            [/[^>]+/, 'metatag.content.html'],
            [/>/, 'metatag.html', '@pop']
        ],
        comment: [
            [/-->/, 'comment.html', '@pop'],
            [/[^-]+/, 'comment.content.html'],
            [/./, 'comment.content.html']
        ],
        otherTag: [
            [/\/?>/, 'delimiter.html', '@pop'],
            [/"([^"]*)"/, 'attribute.value.html'],
            [/'([^']*)'/, 'attribute.value.html'],
            [/[\w\-]+/, 'attribute.name.html'],
            [/=/, 'delimiter.html'],
            [/[ \t\r\n]+/] // whitespace
        ],
        // -- BEGIN <script> tags handling
        // After <script
        script: [
            [/type/, 'attribute.name.html', '@scriptAfterType'],
            [/"([^"]*)"/, 'attribute.value.html'],
            [/'([^']*)'/, 'attribute.value.html'],
            [/[\w\-]+/, 'attribute.name.html'],
            [/=/, 'delimiter.html'],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@scriptEmbedded',
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
            [/=/, 'delimiter.html', '@scriptAfterTypeEquals'],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@scriptEmbedded',
                    nextEmbedded: 'text/javascript'
                }
            ],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <script ... type =
        scriptAfterTypeEquals: [
            [
                /"([^"]*)"/,
                {
                    token: 'attribute.value.html',
                    switchTo: '@scriptWithCustomType.$1'
                }
            ],
            [
                /'([^']*)'/,
                {
                    token: 'attribute.value.html',
                    switchTo: '@scriptWithCustomType.$1'
                }
            ],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@scriptEmbedded',
                    nextEmbedded: 'text/javascript'
                }
            ],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <script ... type = $S2
        scriptWithCustomType: [
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@scriptEmbedded.$S2',
                    nextEmbedded: '$S2'
                }
            ],
            [/"([^"]*)"/, 'attribute.value.html'],
            [/'([^']*)'/, 'attribute.value.html'],
            [/[\w\-]+/, 'attribute.name.html'],
            [/=/, 'delimiter.html'],
            [/[ \t\r\n]+/],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        scriptEmbedded: [
            [/<\/script/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],
            [/[^<]+/, '']
        ],
        // -- END <script> tags handling
        // -- BEGIN <style> tags handling
        // After <style
        style: [
            [/type/, 'attribute.name.html', '@styleAfterType'],
            [/"([^"]*)"/, 'attribute.value.html'],
            [/'([^']*)'/, 'attribute.value.html'],
            [/[\w\-]+/, 'attribute.name.html'],
            [/=/, 'delimiter.html'],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@styleEmbedded',
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
            [/=/, 'delimiter.html', '@styleAfterTypeEquals'],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@styleEmbedded',
                    nextEmbedded: 'text/css'
                }
            ],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <style ... type =
        styleAfterTypeEquals: [
            [
                /"([^"]*)"/,
                {
                    token: 'attribute.value.html',
                    switchTo: '@styleWithCustomType.$1'
                }
            ],
            [
                /'([^']*)'/,
                {
                    token: 'attribute.value.html',
                    switchTo: '@styleWithCustomType.$1'
                }
            ],
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@styleEmbedded',
                    nextEmbedded: 'text/css'
                }
            ],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        // After <style ... type = $S2
        styleWithCustomType: [
            [
                />/,
                {
                    token: 'delimiter.html',
                    next: '@styleEmbedded.$S2',
                    nextEmbedded: '$S2'
                }
            ],
            [/"([^"]*)"/, 'attribute.value.html'],
            [/'([^']*)'/, 'attribute.value.html'],
            [/[\w\-]+/, 'attribute.name.html'],
            [/=/, 'delimiter.html'],
            [/[ \t\r\n]+/],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop' }]
        ],
        styleEmbedded: [
            [/<\/style/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],
            [/[^<]+/, '']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvdHdpZy90d2lnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsZ0VBQWdFLElBQUksTUFBTTtBQUMxRTtBQUNBLHlCQUF5QixPQUFPO0FBQ2hDLEtBQUs7QUFDTDtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLGdCQUFnQixHQUFHO0FBQ3JDLFNBQVMsU0FBUyxnQkFBZ0IsR0FBRztBQUNyQyxTQUFTLFVBQVUsZUFBZSxHQUFHO0FBQ3JDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakM7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixlQUFlO0FBQ2YsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHFDQUFxQztBQUNyRiwrQ0FBK0Msb0NBQW9DO0FBQ25GO0FBQ0E7QUFDQSxvQ0FBb0MsdUNBQXVDO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx1Q0FBdUM7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLHNDQUFzQyxpREFBaUQ7QUFDdkY7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0NBQXNDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsK0JBQStCLHdCQUF3QjtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsSUFBSSxNQUFNLElBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixJQUFJLElBQUksSUFBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixFQUFFO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCx3Q0FBd0M7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixrQ0FBa0M7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixrQ0FBa0M7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isa0NBQWtDO0FBQ2pFO0FBQ0E7QUFDQSwyQkFBMkIsd0RBQXdEO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHdDQUF3QztBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrQ0FBa0M7QUFDaEU7QUFDQTtBQUNBLDBCQUEwQix3REFBd0Q7QUFDbEY7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiNjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICB3b3JkUGF0dGVybjogLygtP1xcZCpcXC5cXGRcXHcqKXwoW15cXGBcXH5cXCFcXEBcXCRcXF5cXCZcXCpcXChcXClcXD1cXCtcXFtcXHtcXF1cXH1cXFxcXFx8XFw7XFw6XFwnXFxcIlxcLFxcLlxcPFxcPlxcL1xcc10rKS9nLFxuICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGJsb2NrQ29tbWVudDogWyd7IycsICcjfSddXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJ3sjJywgJyN9J10sXG4gICAgICAgIFsneyUnLCAnJX0nXSxcbiAgICAgICAgWyd7eycsICd9fSddLFxuICAgICAgICBbJygnLCAnKSddLFxuICAgICAgICBbJ1snLCAnXSddLFxuICAgICAgICAvLyBIVE1MXG4gICAgICAgIFsnPCEtLScsICctLT4nXSxcbiAgICAgICAgWyc8JywgJz4nXVxuICAgIF0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7IyAnLCBjbG9zZTogJyAjfScgfSxcbiAgICAgICAgeyBvcGVuOiAneyUgJywgY2xvc2U6ICcgJX0nIH0sXG4gICAgICAgIHsgb3BlbjogJ3t7ICcsIGNsb3NlOiAnIH19JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9XG4gICAgXSxcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH0sXG4gICAgICAgIC8vIEhUTUxcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicgfVxuICAgIF1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgdG9rZW5Qb3N0Zml4OiAnJyxcbiAgICBpZ25vcmVDYXNlOiB0cnVlLFxuICAgIGtleXdvcmRzOiBbXG4gICAgICAgIC8vIChvcGVuaW5nKSB0YWdzXG4gICAgICAgICdhcHBseScsXG4gICAgICAgICdhdXRvZXNjYXBlJyxcbiAgICAgICAgJ2Jsb2NrJyxcbiAgICAgICAgJ2RlcHJlY2F0ZWQnLFxuICAgICAgICAnZG8nLFxuICAgICAgICAnZW1iZWQnLFxuICAgICAgICAnZXh0ZW5kcycsXG4gICAgICAgICdmbHVzaCcsXG4gICAgICAgICdmb3InLFxuICAgICAgICAnZnJvbScsXG4gICAgICAgICdpZicsXG4gICAgICAgICdpbXBvcnQnLFxuICAgICAgICAnaW5jbHVkZScsXG4gICAgICAgICdtYWNybycsXG4gICAgICAgICdzYW5kYm94JyxcbiAgICAgICAgJ3NldCcsXG4gICAgICAgICd1c2UnLFxuICAgICAgICAndmVyYmF0aW0nLFxuICAgICAgICAnd2l0aCcsXG4gICAgICAgIC8vIGNsb3NpbmcgdGFnc1xuICAgICAgICAnZW5kYXBwbHknLFxuICAgICAgICAnZW5kYXV0b2VzY2FwZScsXG4gICAgICAgICdlbmRibG9jaycsXG4gICAgICAgICdlbmRlbWJlZCcsXG4gICAgICAgICdlbmRmb3InLFxuICAgICAgICAnZW5kaWYnLFxuICAgICAgICAnZW5kbWFjcm8nLFxuICAgICAgICAnZW5kc2FuZGJveCcsXG4gICAgICAgICdlbmRzZXQnLFxuICAgICAgICAnZW5kd2l0aCcsXG4gICAgICAgIC8vIGxpdGVyYWxzXG4gICAgICAgICd0cnVlJyxcbiAgICAgICAgJ2ZhbHNlJ1xuICAgIF0sXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIC8vIHdoaXRlc3BhY2VcbiAgICAgICAgICAgIFsvXFxzKy9dLFxuICAgICAgICAgICAgLy8gVHdpZyBUYWcgRGVsaW1pdGVyc1xuICAgICAgICAgICAgWy97Iy8sICdjb21tZW50LnR3aWcnLCAnQGNvbW1lbnRTdGF0ZSddLFxuICAgICAgICAgICAgWy97JVstfl0/LywgJ2RlbGltaXRlci50d2lnJywgJ0BibG9ja1N0YXRlJ10sXG4gICAgICAgICAgICBbL3t7Wy1+XT8vLCAnZGVsaW1pdGVyLnR3aWcnLCAnQHZhcmlhYmxlU3RhdGUnXSxcbiAgICAgICAgICAgIC8vIEhUTUxcbiAgICAgICAgICAgIFsvPCFET0NUWVBFLywgJ21ldGF0YWcuaHRtbCcsICdAZG9jdHlwZSddLFxuICAgICAgICAgICAgWy88IS0tLywgJ2NvbW1lbnQuaHRtbCcsICdAY29tbWVudCddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8oPCkoKD86W1xcd1xcLV0rOik/W1xcd1xcLV0rKShcXHMqKShcXC8+KS8sXG4gICAgICAgICAgICAgICAgWydkZWxpbWl0ZXIuaHRtbCcsICd0YWcuaHRtbCcsICcnLCAnZGVsaW1pdGVyLmh0bWwnXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvKDwpKHNjcmlwdCkvLCBbJ2RlbGltaXRlci5odG1sJywgeyB0b2tlbjogJ3RhZy5odG1sJywgbmV4dDogJ0BzY3JpcHQnIH1dXSxcbiAgICAgICAgICAgIFsvKDwpKHN0eWxlKS8sIFsnZGVsaW1pdGVyLmh0bWwnLCB7IHRva2VuOiAndGFnLmh0bWwnLCBuZXh0OiAnQHN0eWxlJyB9XV0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyg8KSgoPzpbXFx3XFwtXSs6KT9bXFx3XFwtXSspLyxcbiAgICAgICAgICAgICAgICBbJ2RlbGltaXRlci5odG1sJywgeyB0b2tlbjogJ3RhZy5odG1sJywgbmV4dDogJ0BvdGhlclRhZycgfV1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyg8XFwvKSgoPzpbXFx3XFwtXSs6KT9bXFx3XFwtXSspLyxcbiAgICAgICAgICAgICAgICBbJ2RlbGltaXRlci5odG1sJywgeyB0b2tlbjogJ3RhZy5odG1sJywgbmV4dDogJ0BvdGhlclRhZycgfV1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbLzwvLCAnZGVsaW1pdGVyLmh0bWwnXSxcbiAgICAgICAgICAgIFsvW148XSsvXSAvLyB0ZXh0XG4gICAgICAgIF0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb21tZW50IFRhZyBIYW5kbGluZ1xuICAgICAgICAgKi9cbiAgICAgICAgY29tbWVudFN0YXRlOiBbXG4gICAgICAgICAgICBbLyN9LywgJ2NvbW1lbnQudHdpZycsICdAcG9wJ10sXG4gICAgICAgICAgICBbLy4vLCAnY29tbWVudC50d2lnJ11cbiAgICAgICAgXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJsb2NrIFRhZyBIYW5kbGluZ1xuICAgICAgICAgKi9cbiAgICAgICAgYmxvY2tTdGF0ZTogW1xuICAgICAgICAgICAgWy9bLX5dPyV9LywgJ2RlbGltaXRlci50d2lnJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIC8vIHdoaXRlc3BhY2VcbiAgICAgICAgICAgIFsvXFxzKy9dLFxuICAgICAgICAgICAgLy8gdmVyYmF0aW1cbiAgICAgICAgICAgIC8vIFVubGlrZSBvdGhlciBibG9ja3MsIHZlcmJhdGltIGVoYXMgaXRzIG93biBzdGF0ZVxuICAgICAgICAgICAgLy8gdHJhbnNpdGlvbiB0byBlbnN1cmUgd2UgbWFyayBpdHMgY29udGVudHMgYXMgc3RyaW5ncy5cbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKHZlcmJhdGltKShcXHMqKShbLX5dPyV9KS8sXG4gICAgICAgICAgICAgICAgWydrZXl3b3JkLnR3aWcnLCAnJywgeyB0b2tlbjogJ2RlbGltaXRlci50d2lnJywgbmV4dDogJ0ByYXdEYXRhU3RhdGUnIH1dXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnZXhwcmVzc2lvbicgfVxuICAgICAgICBdLFxuICAgICAgICByYXdEYXRhU3RhdGU6IFtcbiAgICAgICAgICAgIC8vIGVuZHZlcmJhdGltXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyh7JVstfl0/KShcXHMqKShlbmR2ZXJiYXRpbSkoXFxzKikoWy1+XT8lfSkvLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgJ2RlbGltaXRlci50d2lnJyxcbiAgICAgICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgICAgICAgICAgICdrZXl3b3JkLnR3aWcnLFxuICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci50d2lnJywgbmV4dDogJ0Bwb3BhbGwnIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy8uLywgJ3N0cmluZy50d2lnJ11cbiAgICAgICAgXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhcmlhYmxlIFRhZyBIYW5kbGluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdmFyaWFibGVTdGF0ZTogW1svWy1+XT99fS8sICdkZWxpbWl0ZXIudHdpZycsICdAcG9wJ10sIHsgaW5jbHVkZTogJ2V4cHJlc3Npb24nIH1dLFxuICAgICAgICBzdHJpbmdTdGF0ZTogW1xuICAgICAgICAgICAgLy8gY2xvc2luZyBkb3VibGUgcXVvdGVkIHN0cmluZ1xuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcudHdpZycsICdAcG9wJ10sXG4gICAgICAgICAgICAvLyBpbnRlcnBvbGF0aW9uIHN0YXJ0XG4gICAgICAgICAgICBbLyN7XFxzKi8sICdzdHJpbmcudHdpZycsICdAaW50ZXJwb2xhdGlvblN0YXRlJ10sXG4gICAgICAgICAgICAvLyBzdHJpbmcgcGFydFxuICAgICAgICAgICAgWy9bXiNcIlxcXFxdKig/Oig/OlxcXFwufCMoPyFcXHspKVteI1wiXFxcXF0qKSovLCAnc3RyaW5nLnR3aWcnXVxuICAgICAgICBdLFxuICAgICAgICBpbnRlcnBvbGF0aW9uU3RhdGU6IFtcbiAgICAgICAgICAgIC8vIGludGVycG9sYXRpb24gZW5kXG4gICAgICAgICAgICBbL30vLCAnc3RyaW5nLnR3aWcnLCAnQHBvcCddLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnZXhwcmVzc2lvbicgfVxuICAgICAgICBdLFxuICAgICAgICAvKipcbiAgICAgICAgICogRXhwcmVzc2lvbiBIYW5kbGluZ1xuICAgICAgICAgKi9cbiAgICAgICAgZXhwcmVzc2lvbjogW1xuICAgICAgICAgICAgLy8gd2hpdGVzcGFjZVxuICAgICAgICAgICAgWy9cXHMrL10sXG4gICAgICAgICAgICAvLyBvcGVyYXRvcnMgLSBtYXRoXG4gICAgICAgICAgICBbL1xcK3wtfFxcL3sxLDJ9fCV8XFwqezEsMn0vLCAnb3BlcmF0b3JzLnR3aWcnXSxcbiAgICAgICAgICAgIC8vIG9wZXJhdG9ycyAtIGxvZ2ljXG4gICAgICAgICAgICBbLyhhbmR8b3J8bm90fGItYW5kfGIteG9yfGItb3IpKFxccyspLywgWydvcGVyYXRvcnMudHdpZycsICcnXV0sXG4gICAgICAgICAgICAvLyBvcGVyYXRvcnMgLSBjb21wYXJpc29uIChzeW1ib2xzKVxuICAgICAgICAgICAgWy89PXwhPXw8fD58Pj18PD0vLCAnb3BlcmF0b3JzLnR3aWcnXSxcbiAgICAgICAgICAgIC8vIG9wZXJhdG9ycyAtIGNvbXBhcmlzb24gKHdvcmRzKVxuICAgICAgICAgICAgWy8oc3RhcnRzIHdpdGh8ZW5kcyB3aXRofG1hdGNoZXMpKFxccyspLywgWydvcGVyYXRvcnMudHdpZycsICcnXV0sXG4gICAgICAgICAgICAvLyBvcGVyYXRvcnMgLSBjb250YWlubWVudFxuICAgICAgICAgICAgWy8oaW4pKFxccyspLywgWydvcGVyYXRvcnMudHdpZycsICcnXV0sXG4gICAgICAgICAgICAvLyBvcGVyYXRvcnMgLSB0ZXN0XG4gICAgICAgICAgICBbLyhpcykoXFxzKykvLCBbJ29wZXJhdG9ycy50d2lnJywgJyddXSxcbiAgICAgICAgICAgIC8vIG9wZXJhdG9ycyAtIG1pc2NcbiAgICAgICAgICAgIFsvXFx8fH58OnxcXC57MSwyfXxcXD97MSwyfS8sICdvcGVyYXRvcnMudHdpZyddLFxuICAgICAgICAgICAgLy8gbmFtZXNcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvW15cXFdcXGRdW1xcd10qLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogJ2tleXdvcmQudHdpZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAndmFyaWFibGUudHdpZydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBudW1iZXJzXG4gICAgICAgICAgICBbL1xcZCsoXFwuXFxkKyk/LywgJ251bWJlci50d2lnJ10sXG4gICAgICAgICAgICAvLyBwdW5jdHVhdGlvblxuICAgICAgICAgICAgWy9cXCh8XFwpfFxcW3xcXF18e3x9fCwvLCAnZGVsaW1pdGVyLnR3aWcnXSxcbiAgICAgICAgICAgIC8vIHN0cmluZ3NcbiAgICAgICAgICAgIFsvXCIoW14jXCJcXFxcXSooPzpcXFxcLlteI1wiXFxcXF0qKSopXCJ8XFwnKFteXFwnXFxcXF0qKD86XFxcXC5bXlxcJ1xcXFxdKikqKVxcJy8sICdzdHJpbmcudHdpZyddLFxuICAgICAgICAgICAgLy8gb3BlbmluZyBkb3VibGUgcXVvdGVkIHN0cmluZ1xuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcudHdpZycsICdAc3RyaW5nU3RhdGUnXSxcbiAgICAgICAgICAgIC8vIG1pc2Mgc3ludGFjdGljIGNvbnN0cnVjdHNcbiAgICAgICAgICAgIC8vIFRoZXNlIGFyZSBub3Qgb3BlcmF0b3JzIHBlciBzZSwgYnV0IGZvciB0aGUgcHVycG9zZXMgb2YgbGV4aWNhbCBhbmFseXNpcyB3ZVxuICAgICAgICAgICAgLy8gY2FuIHRyZWF0IHRoZW0gYXMgc3VjaC5cbiAgICAgICAgICAgIC8vIGFycm93IGZ1bmN0aW9uc1xuICAgICAgICAgICAgWy89Pi8sICdvcGVyYXRvcnMudHdpZyddLFxuICAgICAgICAgICAgLy8gYXNzaWdubWVudFxuICAgICAgICAgICAgWy89LywgJ29wZXJhdG9ycy50d2lnJ11cbiAgICAgICAgXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhUTUxcbiAgICAgICAgICovXG4gICAgICAgIGRvY3R5cGU6IFtcbiAgICAgICAgICAgIFsvW14+XSsvLCAnbWV0YXRhZy5jb250ZW50Lmh0bWwnXSxcbiAgICAgICAgICAgIFsvPi8sICdtZXRhdGFnLmh0bWwnLCAnQHBvcCddXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnQ6IFtcbiAgICAgICAgICAgIFsvLS0+LywgJ2NvbW1lbnQuaHRtbCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1teLV0rLywgJ2NvbW1lbnQuY29udGVudC5odG1sJ10sXG4gICAgICAgICAgICBbLy4vLCAnY29tbWVudC5jb250ZW50Lmh0bWwnXVxuICAgICAgICBdLFxuICAgICAgICBvdGhlclRhZzogW1xuICAgICAgICAgICAgWy9cXC8/Pi8sICdkZWxpbWl0ZXIuaHRtbCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1wiKFteXCJdKilcIi8sICdhdHRyaWJ1dGUudmFsdWUuaHRtbCddLFxuICAgICAgICAgICAgWy8nKFteJ10qKScvLCAnYXR0cmlidXRlLnZhbHVlLmh0bWwnXSxcbiAgICAgICAgICAgIFsvW1xcd1xcLV0rLywgJ2F0dHJpYnV0ZS5uYW1lLmh0bWwnXSxcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXIuaHRtbCddLFxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10gLy8gd2hpdGVzcGFjZVxuICAgICAgICBdLFxuICAgICAgICAvLyAtLSBCRUdJTiA8c2NyaXB0PiB0YWdzIGhhbmRsaW5nXG4gICAgICAgIC8vIEFmdGVyIDxzY3JpcHRcbiAgICAgICAgc2NyaXB0OiBbXG4gICAgICAgICAgICBbL3R5cGUvLCAnYXR0cmlidXRlLm5hbWUuaHRtbCcsICdAc2NyaXB0QWZ0ZXJUeXBlJ10sXG4gICAgICAgICAgICBbL1wiKFteXCJdKilcIi8sICdhdHRyaWJ1dGUudmFsdWUuaHRtbCddLFxuICAgICAgICAgICAgWy8nKFteJ10qKScvLCAnYXR0cmlidXRlLnZhbHVlLmh0bWwnXSxcbiAgICAgICAgICAgIFsvW1xcd1xcLV0rLywgJ2F0dHJpYnV0ZS5uYW1lLmh0bWwnXSxcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXIuaHRtbCddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8+LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnZGVsaW1pdGVyLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHNjcmlwdEVtYmVkZGVkJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVtYmVkZGVkOiAndGV4dC9qYXZhc2NyaXB0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKDxcXC8pKHNjcmlwdFxccyopKD4pLyxcbiAgICAgICAgICAgICAgICBbJ2RlbGltaXRlci5odG1sJywgJ3RhZy5odG1sJywgeyB0b2tlbjogJ2RlbGltaXRlci5odG1sJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIC8vIEFmdGVyIDxzY3JpcHQgLi4uIHR5cGVcbiAgICAgICAgc2NyaXB0QWZ0ZXJUeXBlOiBbXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyLmh0bWwnLCAnQHNjcmlwdEFmdGVyVHlwZUVxdWFscyddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8+LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnZGVsaW1pdGVyLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHNjcmlwdEVtYmVkZGVkJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVtYmVkZGVkOiAndGV4dC9qYXZhc2NyaXB0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcbiAgICAgICAgICAgIFsvPFxcL3NjcmlwdFxccyo+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIC8vIEFmdGVyIDxzY3JpcHQgLi4uIHR5cGUgPVxuICAgICAgICBzY3JpcHRBZnRlclR5cGVFcXVhbHM6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXCIoW15cIl0qKVwiLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnYXR0cmlidXRlLnZhbHVlLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0BzY3JpcHRXaXRoQ3VzdG9tVHlwZS4kMSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8nKFteJ10qKScvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdhdHRyaWJ1dGUudmFsdWUuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnQHNjcmlwdFdpdGhDdXN0b21UeXBlLiQxJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLz4vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdkZWxpbWl0ZXIuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAc2NyaXB0RW1iZWRkZWQnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2phdmFzY3JpcHQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxuICAgICAgICAgICAgWy88XFwvc2NyaXB0XFxzKj4vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gQWZ0ZXIgPHNjcmlwdCAuLi4gdHlwZSA9ICRTMlxuICAgICAgICBzY3JpcHRXaXRoQ3VzdG9tVHlwZTogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8+LyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnZGVsaW1pdGVyLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHNjcmlwdEVtYmVkZGVkLiRTMicsXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJyRTMidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9cIihbXlwiXSopXCIvLCAnYXR0cmlidXRlLnZhbHVlLmh0bWwnXSxcbiAgICAgICAgICAgIFsvJyhbXiddKiknLywgJ2F0dHJpYnV0ZS52YWx1ZS5odG1sJ10sXG4gICAgICAgICAgICBbL1tcXHdcXC1dKy8sICdhdHRyaWJ1dGUubmFtZS5odG1sJ10sXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyLmh0bWwnXSxcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxuICAgICAgICAgICAgWy88XFwvc2NyaXB0XFxzKj4vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgc2NyaXB0RW1iZWRkZWQ6IFtcbiAgICAgICAgICAgIFsvPFxcL3NjcmlwdC8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJywgbmV4dEVtYmVkZGVkOiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbL1tePF0rLywgJyddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIC0tIEVORCA8c2NyaXB0PiB0YWdzIGhhbmRsaW5nXG4gICAgICAgIC8vIC0tIEJFR0lOIDxzdHlsZT4gdGFncyBoYW5kbGluZ1xuICAgICAgICAvLyBBZnRlciA8c3R5bGVcbiAgICAgICAgc3R5bGU6IFtcbiAgICAgICAgICAgIFsvdHlwZS8sICdhdHRyaWJ1dGUubmFtZS5odG1sJywgJ0BzdHlsZUFmdGVyVHlwZSddLFxuICAgICAgICAgICAgWy9cIihbXlwiXSopXCIvLCAnYXR0cmlidXRlLnZhbHVlLmh0bWwnXSxcbiAgICAgICAgICAgIFsvJyhbXiddKiknLywgJ2F0dHJpYnV0ZS52YWx1ZS5odG1sJ10sXG4gICAgICAgICAgICBbL1tcXHdcXC1dKy8sICdhdHRyaWJ1dGUubmFtZS5odG1sJ10sXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyLmh0bWwnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvPi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2RlbGltaXRlci5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BzdHlsZUVtYmVkZGVkJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVtYmVkZGVkOiAndGV4dC9jc3MnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8oPFxcLykoc3R5bGVcXHMqKSg+KS8sXG4gICAgICAgICAgICAgICAgWydkZWxpbWl0ZXIuaHRtbCcsICd0YWcuaHRtbCcsIHsgdG9rZW46ICdkZWxpbWl0ZXIuaHRtbCcsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICAvLyBBZnRlciA8c3R5bGUgLi4uIHR5cGVcbiAgICAgICAgc3R5bGVBZnRlclR5cGU6IFtcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXIuaHRtbCcsICdAc3R5bGVBZnRlclR5cGVFcXVhbHMnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvPi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2RlbGltaXRlci5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BzdHlsZUVtYmVkZGVkJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVtYmVkZGVkOiAndGV4dC9jc3MnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxuICAgICAgICAgICAgWy88XFwvc3R5bGVcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICAvLyBBZnRlciA8c3R5bGUgLi4uIHR5cGUgPVxuICAgICAgICBzdHlsZUFmdGVyVHlwZUVxdWFsczogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9cIihbXlwiXSopXCIvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdhdHRyaWJ1dGUudmFsdWUuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnQHN0eWxlV2l0aEN1c3RvbVR5cGUuJDEnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvJyhbXiddKiknLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnYXR0cmlidXRlLnZhbHVlLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0BzdHlsZVdpdGhDdXN0b21UeXBlLiQxJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLz4vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdkZWxpbWl0ZXIuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAc3R5bGVFbWJlZGRlZCcsXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJ3RleHQvY3NzJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcbiAgICAgICAgICAgIFsvPFxcL3N0eWxlXFxzKj4vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gQWZ0ZXIgPHN0eWxlIC4uLiB0eXBlID0gJFMyXG4gICAgICAgIHN0eWxlV2l0aEN1c3RvbVR5cGU6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvPi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2RlbGltaXRlci5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BzdHlsZUVtYmVkZGVkLiRTMicsXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJyRTMidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9cIihbXlwiXSopXCIvLCAnYXR0cmlidXRlLnZhbHVlLmh0bWwnXSxcbiAgICAgICAgICAgIFsvJyhbXiddKiknLywgJ2F0dHJpYnV0ZS52YWx1ZS5odG1sJ10sXG4gICAgICAgICAgICBbL1tcXHdcXC1dKy8sICdhdHRyaWJ1dGUubmFtZS5odG1sJ10sXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyLmh0bWwnXSxcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxuICAgICAgICAgICAgWy88XFwvc3R5bGVcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICBzdHlsZUVtYmVkZGVkOiBbXG4gICAgICAgICAgICBbLzxcXC9zdHlsZS8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJywgbmV4dEVtYmVkZGVkOiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbL1tePF0rLywgJyddXG4gICAgICAgIF1cbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==