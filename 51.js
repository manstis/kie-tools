(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/restructuredtext/restructuredtext.js":
/*!********************************************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/restructuredtext/restructuredtext.js ***!
  \********************************************************************************************************************************************************/
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
    tokenPostfix: '.rst',
    control: /[\\`*_\[\]{}()#+\-\.!]/,
    escapes: /\\(?:@control)/,
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
    alphanumerics: /[A-Za-z0-9]/,
    alphanumericsplus: /[A-Za-z0-9-_+:.]/,
    simpleRefNameWithoutBq: /(?:@alphanumerics@alphanumericsplus*@alphanumerics)+|(?:@alphanumerics+)/,
    simpleRefName: /(?:`@simpleRefNameWithoutBq`|@simpleRefNameWithoutBq)/,
    phrase: /@simpleRefName(?:\s@simpleRefName)*/,
    citationName: /[A-Za-z][A-Za-z0-9-_.]*/,
    blockLiteralStart: /(?:[!"#$%&'()*+,-./:;<=>?@\[\]^_`{|}~]|[\s])/,
    precedingChars: /(?:[ -:/'"<([{])/,
    followingChars: /(?:[ -.,:;!?/'")\]}>]|$)/,
    punctuation: /(=|-|~|`|#|"|\^|\+|\*|:|\.|'|_|\+)/,
    tokenizer: {
        root: [
            //sections
            [/^(@punctuation{3,}$){1,1}?/, 'keyword'],
            //line-blocks
            //No rules on it
            //bullet-lists
            [/^\s*([\*\-+‣•]|[a-zA-Z0-9]+\.|\([a-zA-Z0-9]+\)|[a-zA-Z0-9]+\))\s/, 'keyword'],
            //literal-blocks
            [/([ ]::)\s*$/, 'keyword', '@blankLineOfLiteralBlocks'],
            [/(::)\s*$/, 'keyword', '@blankLineOfLiteralBlocks'],
            { include: '@tables' },
            { include: '@explicitMarkupBlocks' },
            { include: '@inlineMarkup' }
        ],
        explicitMarkupBlocks: [
            //citations
            { include: '@citations' },
            //footnotes
            { include: '@footnotes' },
            //directives
            [
                /^(\.\.\s)(@simpleRefName)(::\s)(.*)$/,
                [{ token: '', next: 'subsequentLines' }, 'keyword', '', '']
            ],
            //hyperlink-targets
            [
                /^(\.\.)(\s+)(_)(@simpleRefName)(:)(\s+)(.*)/,
                [{ token: '', next: 'hyperlinks' }, '', '', 'string.link', '', '', 'string.link']
            ],
            //anonymous-hyperlinks
            [
                /^((?:(?:\.\.)(?:\s+))?)(__)(:)(\s+)(.*)/,
                [{ token: '', next: 'subsequentLines' }, '', '', '', 'string.link']
            ],
            [/^(__\s+)(.+)/, ['', 'string.link']],
            //substitution-definitions
            [
                /^(\.\.)( \|)([^| ]+[^|]*[^| ]*)(\| )(@simpleRefName)(:: .*)/,
                [{ token: '', next: 'subsequentLines' }, '', 'string.link', '', 'keyword', ''],
                '@rawBlocks'
            ],
            [/(\|)([^| ]+[^|]*[^| ]*)(\|_{0,2})/, ['', 'string.link', '']],
            //comments
            [/^(\.\.)([ ].*)$/, [{ token: '', next: '@comments' }, 'comment']]
        ],
        inlineMarkup: [
            { include: '@citationsReference' },
            { include: '@footnotesReference' },
            //hyperlink-references
            [/(@simpleRefName)(_{1,2})/, ['string.link', '']],
            //embedded-uris-and-aliases
            [/(`)([^<`]+\s+)(<)(.*)(>)(`)(_)/, ['', 'string.link', '', 'string.link', '', '', '']],
            //emphasis
            [/\*\*([^\\*]|\*(?!\*))+\*\*/, 'strong'],
            [/\*[^*]+\*/, 'emphasis'],
            //inline-literals
            [/(``)((?:[^`]|\`(?!`))+)(``)/, ['', 'keyword', '']],
            [/(__\s+)(.+)/, ['', 'keyword']],
            //interpreted-text
            [/(:)((?:@simpleRefNameWithoutBq)?)(:`)([^`]+)(`)/, ['', 'keyword', '', '', '']],
            [/(`)([^`]+)(`:)((?:@simpleRefNameWithoutBq)?)(:)/, ['', '', '', 'keyword', '']],
            [/(`)([^`]+)(`)/, ''],
            //inline-internal-targets
            [/(_`)(@phrase)(`)/, ['', 'string.link', '']]
        ],
        citations: [
            [
                /^(\.\.\s+\[)((?:@citationName))(\]\s+)(.*)/,
                [{ token: '', next: '@subsequentLines' }, 'string.link', '', '']
            ]
        ],
        citationsReference: [[/(\[)(@citationName)(\]_)/, ['', 'string.link', '']]],
        footnotes: [
            [
                /^(\.\.\s+\[)((?:[0-9]+))(\]\s+.*)/,
                [{ token: '', next: '@subsequentLines' }, 'string.link', '']
            ],
            [
                /^(\.\.\s+\[)((?:#@simpleRefName?))(\]\s+)(.*)/,
                [{ token: '', next: '@subsequentLines' }, 'string.link', '', '']
            ],
            [
                /^(\.\.\s+\[)((?:\*))(\]\s+)(.*)/,
                [{ token: '', next: '@subsequentLines' }, 'string.link', '', '']
            ]
        ],
        footnotesReference: [
            [/(\[)([0-9]+)(\])(_)/, ['', 'string.link', '', '']],
            [/(\[)(#@simpleRefName?)(\])(_)/, ['', 'string.link', '', '']],
            [/(\[)(\*)(\])(_)/, ['', 'string.link', '', '']]
        ],
        blankLineOfLiteralBlocks: [
            [/^$/, '', '@subsequentLinesOfLiteralBlocks'],
            [/^.*$/, '', '@pop']
        ],
        subsequentLinesOfLiteralBlocks: [
            [/(@blockLiteralStart+)(.*)/, ['keyword', '']],
            [/^(?!blockLiteralStart)/, '', '@popall']
        ],
        subsequentLines: [
            [/^[\s]+.*/, ''],
            [/^(?!\s)/, '', '@pop']
        ],
        hyperlinks: [
            [/^[\s]+.*/, 'string.link'],
            [/^(?!\s)/, '', '@pop']
        ],
        comments: [
            [/^[\s]+.*/, 'comment'],
            [/^(?!\s)/, '', '@pop']
        ],
        tables: [
            [/\+-[+-]+/, 'keyword'],
            [/\+=[+=]+/, 'keyword']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvcmVzdHJ1Y3R1cmVkdGV4dC9yZXN0cnVjdHVyZWR0ZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsYUFBYSxFQUFFO0FBQzVELG1DQUFtQztBQUNuQywrQkFBK0IsU0FBUztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixHQUFHLEdBQUcsSUFBSTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEscUJBQXFCO0FBQ2xDLGFBQWEsbUNBQW1DO0FBQ2hELGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhLHdCQUF3QjtBQUNyQztBQUNBLGFBQWEsd0JBQXdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQ0FBcUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0NBQWdDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFDQUFxQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFDQUFxQztBQUN2RDtBQUNBO0FBQ0EsMENBQTBDLElBQUk7QUFDOUM7QUFDQSxrQ0FBa0MsK0JBQStCO0FBQ2pFO0FBQ0E7QUFDQSxhQUFhLGlDQUFpQztBQUM5QyxhQUFhLGlDQUFpQztBQUM5QztBQUNBLGlDQUFpQyxJQUFJO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixzQ0FBc0M7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNDQUFzQztBQUN4RDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0NBQXNDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixzQ0FBc0M7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjUxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgWyd7JywgJ30nXSxcbiAgICAgICAgWydbJywgJ10nXSxcbiAgICAgICAgWycoJywgJyknXVxuICAgIF0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICc8JywgY2xvc2U6ICc+Jywgbm90SW46IFsnc3RyaW5nJ10gfVxuICAgIF0sXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICdgJywgY2xvc2U6ICdgJyB9XG4gICAgXSxcbiAgICBmb2xkaW5nOiB7XG4gICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKCdeXFxcXHMqPCEtLVxcXFxzKiM/cmVnaW9uXFxcXGIuKi0tPicpLFxuICAgICAgICAgICAgZW5kOiBuZXcgUmVnRXhwKCdeXFxcXHMqPCEtLVxcXFxzKiM/ZW5kcmVnaW9uXFxcXGIuKi0tPicpXG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxuICAgIHRva2VuUG9zdGZpeDogJy5yc3QnLFxuICAgIGNvbnRyb2w6IC9bXFxcXGAqX1xcW1xcXXt9KCkjK1xcLVxcLiFdLyxcbiAgICBlc2NhcGVzOiAvXFxcXCg/OkBjb250cm9sKS8sXG4gICAgZW1wdHk6IFtcbiAgICAgICAgJ2FyZWEnLFxuICAgICAgICAnYmFzZScsXG4gICAgICAgICdiYXNlZm9udCcsXG4gICAgICAgICdicicsXG4gICAgICAgICdjb2wnLFxuICAgICAgICAnZnJhbWUnLFxuICAgICAgICAnaHInLFxuICAgICAgICAnaW1nJyxcbiAgICAgICAgJ2lucHV0JyxcbiAgICAgICAgJ2lzaW5kZXgnLFxuICAgICAgICAnbGluaycsXG4gICAgICAgICdtZXRhJyxcbiAgICAgICAgJ3BhcmFtJ1xuICAgIF0sXG4gICAgYWxwaGFudW1lcmljczogL1tBLVphLXowLTldLyxcbiAgICBhbHBoYW51bWVyaWNzcGx1czogL1tBLVphLXowLTktXys6Ll0vLFxuICAgIHNpbXBsZVJlZk5hbWVXaXRob3V0QnE6IC8oPzpAYWxwaGFudW1lcmljc0BhbHBoYW51bWVyaWNzcGx1cypAYWxwaGFudW1lcmljcykrfCg/OkBhbHBoYW51bWVyaWNzKykvLFxuICAgIHNpbXBsZVJlZk5hbWU6IC8oPzpgQHNpbXBsZVJlZk5hbWVXaXRob3V0QnFgfEBzaW1wbGVSZWZOYW1lV2l0aG91dEJxKS8sXG4gICAgcGhyYXNlOiAvQHNpbXBsZVJlZk5hbWUoPzpcXHNAc2ltcGxlUmVmTmFtZSkqLyxcbiAgICBjaXRhdGlvbk5hbWU6IC9bQS1aYS16XVtBLVphLXowLTktXy5dKi8sXG4gICAgYmxvY2tMaXRlcmFsU3RhcnQ6IC8oPzpbIVwiIyQlJicoKSorLC0uLzo7PD0+P0BcXFtcXF1eX2B7fH1+XXxbXFxzXSkvLFxuICAgIHByZWNlZGluZ0NoYXJzOiAvKD86WyAtOi8nXCI8KFt7XSkvLFxuICAgIGZvbGxvd2luZ0NoYXJzOiAvKD86WyAtLiw6OyE/LydcIilcXF19Pl18JCkvLFxuICAgIHB1bmN0dWF0aW9uOiAvKD18LXx+fGB8I3xcInxcXF58XFwrfFxcKnw6fFxcLnwnfF98XFwrKS8sXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIC8vc2VjdGlvbnNcbiAgICAgICAgICAgIFsvXihAcHVuY3R1YXRpb257Myx9JCl7MSwxfT8vLCAna2V5d29yZCddLFxuICAgICAgICAgICAgLy9saW5lLWJsb2Nrc1xuICAgICAgICAgICAgLy9ObyBydWxlcyBvbiBpdFxuICAgICAgICAgICAgLy9idWxsZXQtbGlzdHNcbiAgICAgICAgICAgIFsvXlxccyooW1xcKlxcLSvigKPigKJdfFthLXpBLVowLTldK1xcLnxcXChbYS16QS1aMC05XStcXCl8W2EtekEtWjAtOV0rXFwpKVxccy8sICdrZXl3b3JkJ10sXG4gICAgICAgICAgICAvL2xpdGVyYWwtYmxvY2tzXG4gICAgICAgICAgICBbLyhbIF06OilcXHMqJC8sICdrZXl3b3JkJywgJ0BibGFua0xpbmVPZkxpdGVyYWxCbG9ja3MnXSxcbiAgICAgICAgICAgIFsvKDo6KVxccyokLywgJ2tleXdvcmQnLCAnQGJsYW5rTGluZU9mTGl0ZXJhbEJsb2NrcyddLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRhYmxlcycgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BleHBsaWNpdE1hcmt1cEJsb2NrcycgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BpbmxpbmVNYXJrdXAnIH1cbiAgICAgICAgXSxcbiAgICAgICAgZXhwbGljaXRNYXJrdXBCbG9ja3M6IFtcbiAgICAgICAgICAgIC8vY2l0YXRpb25zXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY2l0YXRpb25zJyB9LFxuICAgICAgICAgICAgLy9mb290bm90ZXNcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Bmb290bm90ZXMnIH0sXG4gICAgICAgICAgICAvL2RpcmVjdGl2ZXNcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXihcXC5cXC5cXHMpKEBzaW1wbGVSZWZOYW1lKSg6OlxccykoLiopJC8sXG4gICAgICAgICAgICAgICAgW3sgdG9rZW46ICcnLCBuZXh0OiAnc3Vic2VxdWVudExpbmVzJyB9LCAna2V5d29yZCcsICcnLCAnJ11cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvL2h5cGVybGluay10YXJnZXRzXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL14oXFwuXFwuKShcXHMrKShfKShAc2ltcGxlUmVmTmFtZSkoOikoXFxzKykoLiopLyxcbiAgICAgICAgICAgICAgICBbeyB0b2tlbjogJycsIG5leHQ6ICdoeXBlcmxpbmtzJyB9LCAnJywgJycsICdzdHJpbmcubGluaycsICcnLCAnJywgJ3N0cmluZy5saW5rJ11cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvL2Fub255bW91cy1oeXBlcmxpbmtzXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL14oKD86KD86XFwuXFwuKSg/OlxccyspKT8pKF9fKSg6KShcXHMrKSguKikvLFxuICAgICAgICAgICAgICAgIFt7IHRva2VuOiAnJywgbmV4dDogJ3N1YnNlcXVlbnRMaW5lcycgfSwgJycsICcnLCAnJywgJ3N0cmluZy5saW5rJ11cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL14oX19cXHMrKSguKykvLCBbJycsICdzdHJpbmcubGluayddXSxcbiAgICAgICAgICAgIC8vc3Vic3RpdHV0aW9uLWRlZmluaXRpb25zXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL14oXFwuXFwuKSggXFx8KShbXnwgXStbXnxdKltefCBdKikoXFx8ICkoQHNpbXBsZVJlZk5hbWUpKDo6IC4qKS8sXG4gICAgICAgICAgICAgICAgW3sgdG9rZW46ICcnLCBuZXh0OiAnc3Vic2VxdWVudExpbmVzJyB9LCAnJywgJ3N0cmluZy5saW5rJywgJycsICdrZXl3b3JkJywgJyddLFxuICAgICAgICAgICAgICAgICdAcmF3QmxvY2tzJ1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvKFxcfCkoW158IF0rW158XSpbXnwgXSopKFxcfF97MCwyfSkvLCBbJycsICdzdHJpbmcubGluaycsICcnXV0sXG4gICAgICAgICAgICAvL2NvbW1lbnRzXG4gICAgICAgICAgICBbL14oXFwuXFwuKShbIF0uKikkLywgW3sgdG9rZW46ICcnLCBuZXh0OiAnQGNvbW1lbnRzJyB9LCAnY29tbWVudCddXVxuICAgICAgICBdLFxuICAgICAgICBpbmxpbmVNYXJrdXA6IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BjaXRhdGlvbnNSZWZlcmVuY2UnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAZm9vdG5vdGVzUmVmZXJlbmNlJyB9LFxuICAgICAgICAgICAgLy9oeXBlcmxpbmstcmVmZXJlbmNlc1xuICAgICAgICAgICAgWy8oQHNpbXBsZVJlZk5hbWUpKF97MSwyfSkvLCBbJ3N0cmluZy5saW5rJywgJyddXSxcbiAgICAgICAgICAgIC8vZW1iZWRkZWQtdXJpcy1hbmQtYWxpYXNlc1xuICAgICAgICAgICAgWy8oYCkoW148YF0rXFxzKykoPCkoLiopKD4pKGApKF8pLywgWycnLCAnc3RyaW5nLmxpbmsnLCAnJywgJ3N0cmluZy5saW5rJywgJycsICcnLCAnJ11dLFxuICAgICAgICAgICAgLy9lbXBoYXNpc1xuICAgICAgICAgICAgWy9cXCpcXCooW15cXFxcKl18XFwqKD8hXFwqKSkrXFwqXFwqLywgJ3N0cm9uZyddLFxuICAgICAgICAgICAgWy9cXCpbXipdK1xcKi8sICdlbXBoYXNpcyddLFxuICAgICAgICAgICAgLy9pbmxpbmUtbGl0ZXJhbHNcbiAgICAgICAgICAgIFsvKGBgKSgoPzpbXmBdfFxcYCg/IWApKSspKGBgKS8sIFsnJywgJ2tleXdvcmQnLCAnJ11dLFxuICAgICAgICAgICAgWy8oX19cXHMrKSguKykvLCBbJycsICdrZXl3b3JkJ11dLFxuICAgICAgICAgICAgLy9pbnRlcnByZXRlZC10ZXh0XG4gICAgICAgICAgICBbLyg6KSgoPzpAc2ltcGxlUmVmTmFtZVdpdGhvdXRCcSk/KSg6YCkoW15gXSspKGApLywgWycnLCAna2V5d29yZCcsICcnLCAnJywgJyddXSxcbiAgICAgICAgICAgIFsvKGApKFteYF0rKShgOikoKD86QHNpbXBsZVJlZk5hbWVXaXRob3V0QnEpPykoOikvLCBbJycsICcnLCAnJywgJ2tleXdvcmQnLCAnJ11dLFxuICAgICAgICAgICAgWy8oYCkoW15gXSspKGApLywgJyddLFxuICAgICAgICAgICAgLy9pbmxpbmUtaW50ZXJuYWwtdGFyZ2V0c1xuICAgICAgICAgICAgWy8oX2ApKEBwaHJhc2UpKGApLywgWycnLCAnc3RyaW5nLmxpbmsnLCAnJ11dXG4gICAgICAgIF0sXG4gICAgICAgIGNpdGF0aW9uczogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9eKFxcLlxcLlxccytcXFspKCg/OkBjaXRhdGlvbk5hbWUpKShcXF1cXHMrKSguKikvLFxuICAgICAgICAgICAgICAgIFt7IHRva2VuOiAnJywgbmV4dDogJ0BzdWJzZXF1ZW50TGluZXMnIH0sICdzdHJpbmcubGluaycsICcnLCAnJ11cbiAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgY2l0YXRpb25zUmVmZXJlbmNlOiBbWy8oXFxbKShAY2l0YXRpb25OYW1lKShcXF1fKS8sIFsnJywgJ3N0cmluZy5saW5rJywgJyddXV0sXG4gICAgICAgIGZvb3Rub3RlczogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9eKFxcLlxcLlxccytcXFspKCg/OlswLTldKykpKFxcXVxccysuKikvLFxuICAgICAgICAgICAgICAgIFt7IHRva2VuOiAnJywgbmV4dDogJ0BzdWJzZXF1ZW50TGluZXMnIH0sICdzdHJpbmcubGluaycsICcnXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXihcXC5cXC5cXHMrXFxbKSgoPzojQHNpbXBsZVJlZk5hbWU/KSkoXFxdXFxzKykoLiopLyxcbiAgICAgICAgICAgICAgICBbeyB0b2tlbjogJycsIG5leHQ6ICdAc3Vic2VxdWVudExpbmVzJyB9LCAnc3RyaW5nLmxpbmsnLCAnJywgJyddXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9eKFxcLlxcLlxccytcXFspKCg/OlxcKikpKFxcXVxccyspKC4qKS8sXG4gICAgICAgICAgICAgICAgW3sgdG9rZW46ICcnLCBuZXh0OiAnQHN1YnNlcXVlbnRMaW5lcycgfSwgJ3N0cmluZy5saW5rJywgJycsICcnXVxuICAgICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBmb290bm90ZXNSZWZlcmVuY2U6IFtcbiAgICAgICAgICAgIFsvKFxcWykoWzAtOV0rKShcXF0pKF8pLywgWycnLCAnc3RyaW5nLmxpbmsnLCAnJywgJyddXSxcbiAgICAgICAgICAgIFsvKFxcWykoI0BzaW1wbGVSZWZOYW1lPykoXFxdKShfKS8sIFsnJywgJ3N0cmluZy5saW5rJywgJycsICcnXV0sXG4gICAgICAgICAgICBbLyhcXFspKFxcKikoXFxdKShfKS8sIFsnJywgJ3N0cmluZy5saW5rJywgJycsICcnXV1cbiAgICAgICAgXSxcbiAgICAgICAgYmxhbmtMaW5lT2ZMaXRlcmFsQmxvY2tzOiBbXG4gICAgICAgICAgICBbL14kLywgJycsICdAc3Vic2VxdWVudExpbmVzT2ZMaXRlcmFsQmxvY2tzJ10sXG4gICAgICAgICAgICBbL14uKiQvLCAnJywgJ0Bwb3AnXVxuICAgICAgICBdLFxuICAgICAgICBzdWJzZXF1ZW50TGluZXNPZkxpdGVyYWxCbG9ja3M6IFtcbiAgICAgICAgICAgIFsvKEBibG9ja0xpdGVyYWxTdGFydCspKC4qKS8sIFsna2V5d29yZCcsICcnXV0sXG4gICAgICAgICAgICBbL14oPyFibG9ja0xpdGVyYWxTdGFydCkvLCAnJywgJ0Bwb3BhbGwnXVxuICAgICAgICBdLFxuICAgICAgICBzdWJzZXF1ZW50TGluZXM6IFtcbiAgICAgICAgICAgIFsvXltcXHNdKy4qLywgJyddLFxuICAgICAgICAgICAgWy9eKD8hXFxzKS8sICcnLCAnQHBvcCddXG4gICAgICAgIF0sXG4gICAgICAgIGh5cGVybGlua3M6IFtcbiAgICAgICAgICAgIFsvXltcXHNdKy4qLywgJ3N0cmluZy5saW5rJ10sXG4gICAgICAgICAgICBbL14oPyFcXHMpLywgJycsICdAcG9wJ11cbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudHM6IFtcbiAgICAgICAgICAgIFsvXltcXHNdKy4qLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvXig/IVxccykvLCAnJywgJ0Bwb3AnXVxuICAgICAgICBdLFxuICAgICAgICB0YWJsZXM6IFtcbiAgICAgICAgICAgIFsvXFwrLVsrLV0rLywgJ2tleXdvcmQnXSxcbiAgICAgICAgICAgIFsvXFwrPVsrPV0rLywgJ2tleXdvcmQnXVxuICAgICAgICBdXG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=