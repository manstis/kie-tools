(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/sb/sb.js":
/*!****************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/sb/sb.js ***!
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
        lineComment: "'"
    },
    brackets: [
        ['(', ')'],
        ['[', ']'],
        ['If', 'EndIf'],
        ['While', 'EndWhile'],
        ['For', 'EndFor'],
        ['Sub', 'EndSub']
    ],
    autoClosingPairs: [
        { open: '"', close: '"', notIn: ['string', 'comment'] },
        { open: '(', close: ')', notIn: ['string', 'comment'] },
        { open: '[', close: ']', notIn: ['string', 'comment'] }
    ]
};
var language = {
    defaultToken: '',
    tokenPostfix: '.sb',
    ignoreCase: true,
    brackets: [
        { token: 'delimiter.array', open: '[', close: ']' },
        { token: 'delimiter.parenthesis', open: '(', close: ')' },
        // Special bracket statement pairs
        { token: 'keyword.tag-if', open: 'If', close: 'EndIf' },
        { token: 'keyword.tag-while', open: 'While', close: 'EndWhile' },
        { token: 'keyword.tag-for', open: 'For', close: 'EndFor' },
        { token: 'keyword.tag-sub', open: 'Sub', close: 'EndSub' }
    ],
    keywords: [
        'Else',
        'ElseIf',
        'EndFor',
        'EndIf',
        'EndSub',
        'EndWhile',
        'For',
        'Goto',
        'If',
        'Step',
        'Sub',
        'Then',
        'To',
        'While'
    ],
    tagwords: ['If', 'Sub', 'While', 'For'],
    operators: ['>', '<', '<>', '<=', '>=', 'And', 'Or', '+', '-', '*', '/', '='],
    // we include these common regular expressions
    identifier: /[a-zA-Z_][\w]*/,
    symbols: /[=><:+\-*\/%\.,]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // whitespace
            { include: '@whitespace' },
            // classes
            [/(@identifier)(?=[.])/, 'type'],
            // identifiers, tagwords, and keywords
            [
                /@identifier/,
                {
                    cases: {
                        '@keywords': { token: 'keyword.$0' },
                        '@operators': 'operator',
                        '@default': 'variable.name'
                    }
                }
            ],
            // methods, properties, and events
            [
                /([.])(@identifier)/,
                {
                    cases: {
                        $2: ['delimiter', 'type.member'],
                        '@default': ''
                    }
                }
            ],
            // numbers
            [/\d*\.\d+/, 'number.float'],
            [/\d+/, 'number'],
            // delimiters and operators
            [/[()\[\]]/, '@brackets'],
            [
                /@symbols/,
                {
                    cases: {
                        '@operators': 'operator',
                        '@default': 'delimiter'
                    }
                }
            ],
            // strings
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/"/, 'string', '@string']
        ],
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/(\').*$/, 'comment']
        ],
        string: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"C?/, 'string', '@pop']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvc2Ivc2IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsc0RBQXNEO0FBQy9ELFNBQVMsc0RBQXNEO0FBQy9ELFNBQVM7QUFDVDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsa0RBQWtEO0FBQzNELFNBQVMsd0RBQXdEO0FBQ2pFO0FBQ0EsU0FBUyxzREFBc0Q7QUFDL0QsU0FBUywrREFBK0Q7QUFDeEUsU0FBUyx5REFBeUQ7QUFDbEUsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLElBQUksY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHNCQUFzQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiNTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICBjb21tZW50czoge1xuICAgICAgICBsaW5lQ29tbWVudDogXCInXCJcbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsnKCcsICcpJ10sXG4gICAgICAgIFsnWycsICddJ10sXG4gICAgICAgIFsnSWYnLCAnRW5kSWYnXSxcbiAgICAgICAgWydXaGlsZScsICdFbmRXaGlsZSddLFxuICAgICAgICBbJ0ZvcicsICdFbmRGb3InXSxcbiAgICAgICAgWydTdWInLCAnRW5kU3ViJ11cbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9XG4gICAgXVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgZGVmYXVsdFRva2VuOiAnJyxcbiAgICB0b2tlblBvc3RmaXg6ICcuc2InLFxuICAgIGlnbm9yZUNhc2U6IHRydWUsXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5hcnJheScsIG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIC8vIFNwZWNpYWwgYnJhY2tldCBzdGF0ZW1lbnQgcGFpcnNcbiAgICAgICAgeyB0b2tlbjogJ2tleXdvcmQudGFnLWlmJywgb3BlbjogJ0lmJywgY2xvc2U6ICdFbmRJZicgfSxcbiAgICAgICAgeyB0b2tlbjogJ2tleXdvcmQudGFnLXdoaWxlJywgb3BlbjogJ1doaWxlJywgY2xvc2U6ICdFbmRXaGlsZScgfSxcbiAgICAgICAgeyB0b2tlbjogJ2tleXdvcmQudGFnLWZvcicsIG9wZW46ICdGb3InLCBjbG9zZTogJ0VuZEZvcicgfSxcbiAgICAgICAgeyB0b2tlbjogJ2tleXdvcmQudGFnLXN1YicsIG9wZW46ICdTdWInLCBjbG9zZTogJ0VuZFN1YicgfVxuICAgIF0sXG4gICAga2V5d29yZHM6IFtcbiAgICAgICAgJ0Vsc2UnLFxuICAgICAgICAnRWxzZUlmJyxcbiAgICAgICAgJ0VuZEZvcicsXG4gICAgICAgICdFbmRJZicsXG4gICAgICAgICdFbmRTdWInLFxuICAgICAgICAnRW5kV2hpbGUnLFxuICAgICAgICAnRm9yJyxcbiAgICAgICAgJ0dvdG8nLFxuICAgICAgICAnSWYnLFxuICAgICAgICAnU3RlcCcsXG4gICAgICAgICdTdWInLFxuICAgICAgICAnVGhlbicsXG4gICAgICAgICdUbycsXG4gICAgICAgICdXaGlsZSdcbiAgICBdLFxuICAgIHRhZ3dvcmRzOiBbJ0lmJywgJ1N1YicsICdXaGlsZScsICdGb3InXSxcbiAgICBvcGVyYXRvcnM6IFsnPicsICc8JywgJzw+JywgJzw9JywgJz49JywgJ0FuZCcsICdPcicsICcrJywgJy0nLCAnKicsICcvJywgJz0nXSxcbiAgICAvLyB3ZSBpbmNsdWRlIHRoZXNlIGNvbW1vbiByZWd1bGFyIGV4cHJlc3Npb25zXG4gICAgaWRlbnRpZmllcjogL1thLXpBLVpfXVtcXHddKi8sXG4gICAgc3ltYm9sczogL1s9Pjw6K1xcLSpcXC8lXFwuLF0rLyxcbiAgICBlc2NhcGVzOiAvXFxcXCg/OlthYmZucnR2XFxcXFwiJ118eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxuICAgIC8vIFRoZSBtYWluIHRva2VuaXplciBmb3Igb3VyIGxhbmd1YWdlc1xuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICAvLyB3aGl0ZXNwYWNlXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcbiAgICAgICAgICAgIC8vIGNsYXNzZXNcbiAgICAgICAgICAgIFsvKEBpZGVudGlmaWVyKSg/PVsuXSkvLCAndHlwZSddLFxuICAgICAgICAgICAgLy8gaWRlbnRpZmllcnMsIHRhZ3dvcmRzLCBhbmQga2V5d29yZHNcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvQGlkZW50aWZpZXIvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiB7IHRva2VuOiAna2V5d29yZC4kMCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAb3BlcmF0b3JzJzogJ29wZXJhdG9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICd2YXJpYWJsZS5uYW1lJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIG1ldGhvZHMsIHByb3BlcnRpZXMsIGFuZCBldmVudHNcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKFsuXSkoQGlkZW50aWZpZXIpLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkMjogWydkZWxpbWl0ZXInLCAndHlwZS5tZW1iZXInXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gbnVtYmVyc1xuICAgICAgICAgICAgWy9cXGQqXFwuXFxkKy8sICdudW1iZXIuZmxvYXQnXSxcbiAgICAgICAgICAgIFsvXFxkKy8sICdudW1iZXInXSxcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcnMgYW5kIG9wZXJhdG9yc1xuICAgICAgICAgICAgWy9bKClcXFtcXF1dLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9Ac3ltYm9scy8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BvcGVyYXRvcnMnOiAnb3BlcmF0b3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2RlbGltaXRlcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBzdHJpbmdzXG4gICAgICAgICAgICBbL1wiKFteXCJcXFxcXXxcXFxcLikqJC8sICdzdHJpbmcuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHN0cmluZyddXG4gICAgICAgIF0sXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICcnXSxcbiAgICAgICAgICAgIFsvKFxcJykuKiQvLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZzogW1xuICAgICAgICAgICAgWy9bXlxcXFxcIl0rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9cIkM/LywgJ3N0cmluZycsICdAcG9wJ11cbiAgICAgICAgXVxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9