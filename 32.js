(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/markdown/markdown.js":
/*!****************************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/markdown/markdown.js ***!
  \****************************************************************************************************************************************/
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
        blockComment: ['<!--', '-->']
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
        { open: '<', close: '>', notIn: ['string'] }
    ],
    surroundingPairs: [
        { open: '(', close: ')' },
        { open: '[', close: ']' },
        { open: '`', close: '`' }
    ],
    folding: {
        markers: {
            start: new RegExp('^\\s*<!--\\s*#?region\\b.*-->'),
            end: new RegExp('^\\s*<!--\\s*#?endregion\\b.*-->')
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.md',
    // escape codes
    control: /[\\`*_\[\]{}()#+\-\.!]/,
    noncontrol: /[^\\`*_\[\]{}()#+\-\.!]/,
    escapes: /\\(?:@control)/,
    // escape codes for javascript/CSS strings
    jsescapes: /\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,
    // non matched elements
    empty: [
        'area',
        'base',
        'basefont',
        'br',
        'col',
        'frame',
        'hr',
        'img',
        'input',
        'isindex',
        'link',
        'meta',
        'param'
    ],
    tokenizer: {
        root: [
            // markdown tables
            [/^\s*\|/, '@rematch', '@table_header'],
            // headers (with #)
            [
                /^(\s{0,3})(#+)((?:[^\\#]|@escapes)+)((?:#+)?)/,
                ['white', 'keyword', 'keyword', 'keyword']
            ],
            // headers (with =)
            [/^\s*(=+|\-+)\s*$/, 'keyword'],
            // headers (with ***)
            [/^\s*((\*[ ]?)+)\s*$/, 'meta.separator'],
            // quote
            [/^\s*>+/, 'comment'],
            // list (starting with * or number)
            [/^\s*([\*\-+:]|\d+\.)\s/, 'keyword'],
            // code block (4 spaces indent)
            [/^(\t|[ ]{4})[^ ].*$/, 'string'],
            // code block (3 tilde)
            [/^\s*~~~\s*((?:\w|[\/\-#])+)?\s*$/, { token: 'string', next: '@codeblock' }],
            // github style code blocks (with backticks and language)
            [
                /^\s*```\s*((?:\w|[\/\-#])+).*$/,
                { token: 'string', next: '@codeblockgh', nextEmbedded: '$1' }
            ],
            // github style code blocks (with backticks but no language)
            [/^\s*```\s*$/, { token: 'string', next: '@codeblock' }],
            // markup within lines
            { include: '@linecontent' }
        ],
        table_header: [
            { include: '@table_common' },
            [/[^\|]+/, 'keyword.table.header'] // table header
        ],
        table_body: [{ include: '@table_common' }, { include: '@linecontent' }],
        table_common: [
            [/\s*[\-:]+\s*/, { token: 'keyword', switchTo: 'table_body' }],
            [/^\s*\|/, 'keyword.table.left'],
            [/^\s*[^\|]/, '@rematch', '@pop'],
            [/^\s*$/, '@rematch', '@pop'],
            [
                /\|/,
                {
                    cases: {
                        '@eos': 'keyword.table.right',
                        '@default': 'keyword.table.middle' // inner |
                    }
                }
            ]
        ],
        codeblock: [
            [/^\s*~~~\s*$/, { token: 'string', next: '@pop' }],
            [/^\s*```\s*$/, { token: 'string', next: '@pop' }],
            [/.*$/, 'variable.source']
        ],
        // github style code blocks
        codeblockgh: [
            [/```\s*$/, { token: 'variable.source', next: '@pop', nextEmbedded: '@pop' }],
            [/[^`]+/, 'variable.source']
        ],
        linecontent: [
            // escapes
            [/&\w+;/, 'string.escape'],
            [/@escapes/, 'escape'],
            // various markup
            [/\b__([^\\_]|@escapes|_(?!_))+__\b/, 'strong'],
            [/\*\*([^\\*]|@escapes|\*(?!\*))+\*\*/, 'strong'],
            [/\b_[^_]+_\b/, 'emphasis'],
            [/\*([^\\*]|@escapes)+\*/, 'emphasis'],
            [/`([^\\`]|@escapes)+`/, 'variable'],
            // links
            [/\{+[^}]+\}+/, 'string.target'],
            [/(!?\[)((?:[^\]\\]|@escapes)*)(\]\([^\)]+\))/, ['string.link', '', 'string.link']],
            [/(!?\[)((?:[^\]\\]|@escapes)*)(\])/, 'string.link'],
            // or html
            { include: 'html' }
        ],
        // Note: it is tempting to rather switch to the real HTML mode instead of building our own here
        // but currently there is a limitation in Monarch that prevents us from doing it: The opening
        // '<' would start the HTML mode, however there is no way to jump 1 character back to let the
        // HTML mode also tokenize the opening angle bracket. Thus, even though we could jump to HTML,
        // we cannot correctly tokenize it in that mode yet.
        html: [
            // html tags
            [/<(\w+)\/>/, 'tag'],
            [
                /<(\w+)/,
                {
                    cases: {
                        '@empty': { token: 'tag', next: '@tag.$1' },
                        '@default': { token: 'tag', next: '@tag.$1' }
                    }
                }
            ],
            [/<\/(\w+)\s*>/, { token: 'tag' }],
            [/<!--/, 'comment', '@comment']
        ],
        comment: [
            [/[^<\-]+/, 'comment.content'],
            [/-->/, 'comment', '@pop'],
            [/<!--/, 'comment.content.invalid'],
            [/[<\-]/, 'comment.content']
        ],
        // Almost full HTML tag matching, complete with embedded scripts & styles
        tag: [
            [/[ \t\r\n]+/, 'white'],
            [
                /(type)(\s*=\s*)(")([^"]+)(")/,
                [
                    'attribute.name.html',
                    'delimiter.html',
                    'string.html',
                    { token: 'string.html', switchTo: '@tag.$S2.$4' },
                    'string.html'
                ]
            ],
            [
                /(type)(\s*=\s*)(')([^']+)(')/,
                [
                    'attribute.name.html',
                    'delimiter.html',
                    'string.html',
                    { token: 'string.html', switchTo: '@tag.$S2.$4' },
                    'string.html'
                ]
            ],
            [
                /(\w+)(\s*=\s*)("[^"]*"|'[^']*')/,
                ['attribute.name.html', 'delimiter.html', 'string.html']
            ],
            [/\w+/, 'attribute.name.html'],
            [/\/>/, 'tag', '@pop'],
            [
                />/,
                {
                    cases: {
                        '$S2==style': {
                            token: 'tag',
                            switchTo: 'embeddedStyle',
                            nextEmbedded: 'text/css'
                        },
                        '$S2==script': {
                            cases: {
                                $S3: {
                                    token: 'tag',
                                    switchTo: 'embeddedScript',
                                    nextEmbedded: '$S3'
                                },
                                '@default': {
                                    token: 'tag',
                                    switchTo: 'embeddedScript',
                                    nextEmbedded: 'text/javascript'
                                }
                            }
                        },
                        '@default': { token: 'tag', next: '@pop' }
                    }
                }
            ]
        ],
        embeddedStyle: [
            [/[^<]+/, ''],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],
            [/</, '']
        ],
        embeddedScript: [
            [/[^<]+/, ''],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],
            [/</, '']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvbWFya2Rvd24vbWFya2Rvd24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSx3REFBd0QsRUFBRTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixJQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsRUFBRTtBQUN6QjtBQUNBLGtEQUFrRCxzQ0FBc0M7QUFDeEY7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSw2QkFBNkIsc0NBQXNDO0FBQ25FO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhLDJCQUEyQjtBQUN4QztBQUNBO0FBQ0Esc0JBQXNCLDJCQUEyQixHQUFHLDBCQUEwQjtBQUM5RTtBQUNBLDhCQUE4QiwyQ0FBMkM7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixnQ0FBZ0M7QUFDN0QsNkJBQTZCLGdDQUFnQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwrREFBK0Q7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixJQUFJLElBQUk7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdDQUFnQztBQUNuRSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGVBQWU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnREFBZ0Q7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFnRDtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix3REFBd0Q7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isd0RBQXdEO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJzwhLS0nLCAnLS0+J11cbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsneycsICd9J10sXG4gICAgICAgIFsnWycsICddJ10sXG4gICAgICAgIFsnKCcsICcpJ11cbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicsIG5vdEluOiBbJ3N0cmluZyddIH1cbiAgICBdLFxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnYCcsIGNsb3NlOiAnYCcgfVxuICAgIF0sXG4gICAgZm9sZGluZzoge1xuICAgICAgICBtYXJrZXJzOiB7XG4gICAgICAgICAgICBzdGFydDogbmV3IFJlZ0V4cCgnXlxcXFxzKjwhLS1cXFxccyojP3JlZ2lvblxcXFxiLiotLT4nKSxcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cCgnXlxcXFxzKjwhLS1cXFxccyojP2VuZHJlZ2lvblxcXFxiLiotLT4nKVxuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgZGVmYXVsdFRva2VuOiAnJyxcbiAgICB0b2tlblBvc3RmaXg6ICcubWQnLFxuICAgIC8vIGVzY2FwZSBjb2Rlc1xuICAgIGNvbnRyb2w6IC9bXFxcXGAqX1xcW1xcXXt9KCkjK1xcLVxcLiFdLyxcbiAgICBub25jb250cm9sOiAvW15cXFxcYCpfXFxbXFxde30oKSMrXFwtXFwuIV0vLFxuICAgIGVzY2FwZXM6IC9cXFxcKD86QGNvbnRyb2wpLyxcbiAgICAvLyBlc2NhcGUgY29kZXMgZm9yIGphdmFzY3JpcHQvQ1NTIHN0cmluZ3NcbiAgICBqc2VzY2FwZXM6IC9cXFxcKD86W2J0bmZyXFxcXFwiJ118WzAtN11bMC03XT98WzAtM11bMC03XXsyfSkvLFxuICAgIC8vIG5vbiBtYXRjaGVkIGVsZW1lbnRzXG4gICAgZW1wdHk6IFtcbiAgICAgICAgJ2FyZWEnLFxuICAgICAgICAnYmFzZScsXG4gICAgICAgICdiYXNlZm9udCcsXG4gICAgICAgICdicicsXG4gICAgICAgICdjb2wnLFxuICAgICAgICAnZnJhbWUnLFxuICAgICAgICAnaHInLFxuICAgICAgICAnaW1nJyxcbiAgICAgICAgJ2lucHV0JyxcbiAgICAgICAgJ2lzaW5kZXgnLFxuICAgICAgICAnbGluaycsXG4gICAgICAgICdtZXRhJyxcbiAgICAgICAgJ3BhcmFtJ1xuICAgIF0sXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIC8vIG1hcmtkb3duIHRhYmxlc1xuICAgICAgICAgICAgWy9eXFxzKlxcfC8sICdAcmVtYXRjaCcsICdAdGFibGVfaGVhZGVyJ10sXG4gICAgICAgICAgICAvLyBoZWFkZXJzICh3aXRoICMpXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL14oXFxzezAsM30pKCMrKSgoPzpbXlxcXFwjXXxAZXNjYXBlcykrKSgoPzojKyk/KS8sXG4gICAgICAgICAgICAgICAgWyd3aGl0ZScsICdrZXl3b3JkJywgJ2tleXdvcmQnLCAna2V5d29yZCddXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gaGVhZGVycyAod2l0aCA9KVxuICAgICAgICAgICAgWy9eXFxzKig9K3xcXC0rKVxccyokLywgJ2tleXdvcmQnXSxcbiAgICAgICAgICAgIC8vIGhlYWRlcnMgKHdpdGggKioqKVxuICAgICAgICAgICAgWy9eXFxzKigoXFwqWyBdPykrKVxccyokLywgJ21ldGEuc2VwYXJhdG9yJ10sXG4gICAgICAgICAgICAvLyBxdW90ZVxuICAgICAgICAgICAgWy9eXFxzKj4rLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgICAgIC8vIGxpc3QgKHN0YXJ0aW5nIHdpdGggKiBvciBudW1iZXIpXG4gICAgICAgICAgICBbL15cXHMqKFtcXCpcXC0rOl18XFxkK1xcLilcXHMvLCAna2V5d29yZCddLFxuICAgICAgICAgICAgLy8gY29kZSBibG9jayAoNCBzcGFjZXMgaW5kZW50KVxuICAgICAgICAgICAgWy9eKFxcdHxbIF17NH0pW14gXS4qJC8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIC8vIGNvZGUgYmxvY2sgKDMgdGlsZGUpXG4gICAgICAgICAgICBbL15cXHMqfn5+XFxzKigoPzpcXHd8W1xcL1xcLSNdKSspP1xccyokLywgeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAY29kZWJsb2NrJyB9XSxcbiAgICAgICAgICAgIC8vIGdpdGh1YiBzdHlsZSBjb2RlIGJsb2NrcyAod2l0aCBiYWNrdGlja3MgYW5kIGxhbmd1YWdlKVxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9eXFxzKmBgYFxccyooKD86XFx3fFtcXC9cXC0jXSkrKS4qJC8sXG4gICAgICAgICAgICAgICAgeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAY29kZWJsb2NrZ2gnLCBuZXh0RW1iZWRkZWQ6ICckMScgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIGdpdGh1YiBzdHlsZSBjb2RlIGJsb2NrcyAod2l0aCBiYWNrdGlja3MgYnV0IG5vIGxhbmd1YWdlKVxuICAgICAgICAgICAgWy9eXFxzKmBgYFxccyokLywgeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAY29kZWJsb2NrJyB9XSxcbiAgICAgICAgICAgIC8vIG1hcmt1cCB3aXRoaW4gbGluZXNcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BsaW5lY29udGVudCcgfVxuICAgICAgICBdLFxuICAgICAgICB0YWJsZV9oZWFkZXI6IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0YWJsZV9jb21tb24nIH0sXG4gICAgICAgICAgICBbL1teXFx8XSsvLCAna2V5d29yZC50YWJsZS5oZWFkZXInXSAvLyB0YWJsZSBoZWFkZXJcbiAgICAgICAgXSxcbiAgICAgICAgdGFibGVfYm9keTogW3sgaW5jbHVkZTogJ0B0YWJsZV9jb21tb24nIH0sIHsgaW5jbHVkZTogJ0BsaW5lY29udGVudCcgfV0sXG4gICAgICAgIHRhYmxlX2NvbW1vbjogW1xuICAgICAgICAgICAgWy9cXHMqW1xcLTpdK1xccyovLCB7IHRva2VuOiAna2V5d29yZCcsIHN3aXRjaFRvOiAndGFibGVfYm9keScgfV0sXG4gICAgICAgICAgICBbL15cXHMqXFx8LywgJ2tleXdvcmQudGFibGUubGVmdCddLFxuICAgICAgICAgICAgWy9eXFxzKlteXFx8XS8sICdAcmVtYXRjaCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbL15cXHMqJC8sICdAcmVtYXRjaCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1xcfC8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiAna2V5d29yZC50YWJsZS5yaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAna2V5d29yZC50YWJsZS5taWRkbGUnIC8vIGlubmVyIHxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgY29kZWJsb2NrOiBbXG4gICAgICAgICAgICBbL15cXHMqfn5+XFxzKiQvLCB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICAgICAgWy9eXFxzKmBgYFxccyokLywgeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgICAgIFsvLiokLywgJ3ZhcmlhYmxlLnNvdXJjZSddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIGdpdGh1YiBzdHlsZSBjb2RlIGJsb2Nrc1xuICAgICAgICBjb2RlYmxvY2tnaDogW1xuICAgICAgICAgICAgWy9gYGBcXHMqJC8sIHsgdG9rZW46ICd2YXJpYWJsZS5zb3VyY2UnLCBuZXh0OiAnQHBvcCcsIG5leHRFbWJlZGRlZDogJ0Bwb3AnIH1dLFxuICAgICAgICAgICAgWy9bXmBdKy8sICd2YXJpYWJsZS5zb3VyY2UnXVxuICAgICAgICBdLFxuICAgICAgICBsaW5lY29udGVudDogW1xuICAgICAgICAgICAgLy8gZXNjYXBlc1xuICAgICAgICAgICAgWy8mXFx3KzsvLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdlc2NhcGUnXSxcbiAgICAgICAgICAgIC8vIHZhcmlvdXMgbWFya3VwXG4gICAgICAgICAgICBbL1xcYl9fKFteXFxcXF9dfEBlc2NhcGVzfF8oPyFfKSkrX19cXGIvLCAnc3Ryb25nJ10sXG4gICAgICAgICAgICBbL1xcKlxcKihbXlxcXFwqXXxAZXNjYXBlc3xcXCooPyFcXCopKStcXCpcXCovLCAnc3Ryb25nJ10sXG4gICAgICAgICAgICBbL1xcYl9bXl9dK19cXGIvLCAnZW1waGFzaXMnXSxcbiAgICAgICAgICAgIFsvXFwqKFteXFxcXCpdfEBlc2NhcGVzKStcXCovLCAnZW1waGFzaXMnXSxcbiAgICAgICAgICAgIFsvYChbXlxcXFxgXXxAZXNjYXBlcykrYC8sICd2YXJpYWJsZSddLFxuICAgICAgICAgICAgLy8gbGlua3NcbiAgICAgICAgICAgIFsvXFx7K1tefV0rXFx9Ky8sICdzdHJpbmcudGFyZ2V0J10sXG4gICAgICAgICAgICBbLyghP1xcWykoKD86W15cXF1cXFxcXXxAZXNjYXBlcykqKShcXF1cXChbXlxcKV0rXFwpKS8sIFsnc3RyaW5nLmxpbmsnLCAnJywgJ3N0cmluZy5saW5rJ11dLFxuICAgICAgICAgICAgWy8oIT9cXFspKCg/OlteXFxdXFxcXF18QGVzY2FwZXMpKikoXFxdKS8sICdzdHJpbmcubGluayddLFxuICAgICAgICAgICAgLy8gb3IgaHRtbFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnaHRtbCcgfVxuICAgICAgICBdLFxuICAgICAgICAvLyBOb3RlOiBpdCBpcyB0ZW1wdGluZyB0byByYXRoZXIgc3dpdGNoIHRvIHRoZSByZWFsIEhUTUwgbW9kZSBpbnN0ZWFkIG9mIGJ1aWxkaW5nIG91ciBvd24gaGVyZVxuICAgICAgICAvLyBidXQgY3VycmVudGx5IHRoZXJlIGlzIGEgbGltaXRhdGlvbiBpbiBNb25hcmNoIHRoYXQgcHJldmVudHMgdXMgZnJvbSBkb2luZyBpdDogVGhlIG9wZW5pbmdcbiAgICAgICAgLy8gJzwnIHdvdWxkIHN0YXJ0IHRoZSBIVE1MIG1vZGUsIGhvd2V2ZXIgdGhlcmUgaXMgbm8gd2F5IHRvIGp1bXAgMSBjaGFyYWN0ZXIgYmFjayB0byBsZXQgdGhlXG4gICAgICAgIC8vIEhUTUwgbW9kZSBhbHNvIHRva2VuaXplIHRoZSBvcGVuaW5nIGFuZ2xlIGJyYWNrZXQuIFRodXMsIGV2ZW4gdGhvdWdoIHdlIGNvdWxkIGp1bXAgdG8gSFRNTCxcbiAgICAgICAgLy8gd2UgY2Fubm90IGNvcnJlY3RseSB0b2tlbml6ZSBpdCBpbiB0aGF0IG1vZGUgeWV0LlxuICAgICAgICBodG1sOiBbXG4gICAgICAgICAgICAvLyBodG1sIHRhZ3NcbiAgICAgICAgICAgIFsvPChcXHcrKVxcLz4vLCAndGFnJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLzwoXFx3KykvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW1wdHknOiB7IHRva2VuOiAndGFnJywgbmV4dDogJ0B0YWcuJDEnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiB7IHRva2VuOiAndGFnJywgbmV4dDogJ0B0YWcuJDEnIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbLzxcXC8oXFx3KylcXHMqPi8sIHsgdG9rZW46ICd0YWcnIH1dLFxuICAgICAgICAgICAgWy88IS0tLywgJ2NvbW1lbnQnLCAnQGNvbW1lbnQnXVxuICAgICAgICBdLFxuICAgICAgICBjb21tZW50OiBbXG4gICAgICAgICAgICBbL1tePFxcLV0rLywgJ2NvbW1lbnQuY29udGVudCddLFxuICAgICAgICAgICAgWy8tLT4vLCAnY29tbWVudCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbLzwhLS0vLCAnY29tbWVudC5jb250ZW50LmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvWzxcXC1dLywgJ2NvbW1lbnQuY29udGVudCddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIEFsbW9zdCBmdWxsIEhUTUwgdGFnIG1hdGNoaW5nLCBjb21wbGV0ZSB3aXRoIGVtYmVkZGVkIHNjcmlwdHMgJiBzdHlsZXNcbiAgICAgICAgdGFnOiBbXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnd2hpdGUnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKHR5cGUpKFxccyo9XFxzKikoXCIpKFteXCJdKykoXCIpLyxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICdhdHRyaWJ1dGUubmFtZS5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgJ2RlbGltaXRlci5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgJ3N0cmluZy5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgeyB0b2tlbjogJ3N0cmluZy5odG1sJywgc3dpdGNoVG86ICdAdGFnLiRTMi4kNCcgfSxcbiAgICAgICAgICAgICAgICAgICAgJ3N0cmluZy5odG1sJ1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyh0eXBlKShcXHMqPVxccyopKCcpKFteJ10rKSgnKS8sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAnYXR0cmlidXRlLm5hbWUuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICdkZWxpbWl0ZXIuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICdzdHJpbmcuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgIHsgdG9rZW46ICdzdHJpbmcuaHRtbCcsIHN3aXRjaFRvOiAnQHRhZy4kUzIuJDQnIH0sXG4gICAgICAgICAgICAgICAgICAgICdzdHJpbmcuaHRtbCdcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8oXFx3KykoXFxzKj1cXHMqKShcIlteXCJdKlwifCdbXiddKicpLyxcbiAgICAgICAgICAgICAgICBbJ2F0dHJpYnV0ZS5uYW1lLmh0bWwnLCAnZGVsaW1pdGVyLmh0bWwnLCAnc3RyaW5nLmh0bWwnXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvXFx3Ky8sICdhdHRyaWJ1dGUubmFtZS5odG1sJ10sXG4gICAgICAgICAgICBbL1xcLz4vLCAndGFnJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvPi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJyRTMj09c3R5bGUnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46ICd0YWcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnZW1iZWRkZWRTdHlsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEVtYmVkZGVkOiAndGV4dC9jc3MnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJyRTMj09c2NyaXB0Jzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRTMzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46ICd0YWcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdlbWJlZGRlZFNjcmlwdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICckUzMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiAndGFnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnZW1iZWRkZWRTY3JpcHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEVtYmVkZGVkOiAndGV4dC9qYXZhc2NyaXB0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHsgdG9rZW46ICd0YWcnLCBuZXh0OiAnQHBvcCcgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBlbWJlZGRlZFN0eWxlOiBbXG4gICAgICAgICAgICBbL1tePF0rLywgJyddLFxuICAgICAgICAgICAgWy88XFwvc3R5bGVcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJywgbmV4dEVtYmVkZGVkOiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbLzwvLCAnJ11cbiAgICAgICAgXSxcbiAgICAgICAgZW1iZWRkZWRTY3JpcHQ6IFtcbiAgICAgICAgICAgIFsvW148XSsvLCAnJ10sXG4gICAgICAgICAgICBbLzxcXC9zY3JpcHRcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJywgbmV4dEVtYmVkZGVkOiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbLzwvLCAnJ11cbiAgICAgICAgXVxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9