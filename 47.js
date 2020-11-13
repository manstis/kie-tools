(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/r/r.js":
/*!**************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/r/r.js ***!
  \**************************************************************************************************************************/
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
        lineComment: '#'
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
        { open: '"', close: '"' }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' }
    ]
};
var language = {
    defaultToken: '',
    tokenPostfix: '.r',
    roxygen: [
        '@param',
        '@return',
        '@name',
        '@rdname',
        '@examples',
        '@include',
        '@docType',
        '@S3method',
        '@TODO',
        '@aliases',
        '@alias',
        '@assignee',
        '@author',
        '@callGraphDepth',
        '@callGraph',
        '@callGraphPrimitives',
        '@concept',
        '@exportClass',
        '@exportMethod',
        '@exportPattern',
        '@export',
        '@formals',
        '@format',
        '@importClassesFrom',
        '@importFrom',
        '@importMethodsFrom',
        '@import',
        '@keywords',
        '@method',
        '@nord',
        '@note',
        '@references',
        '@seealso',
        '@setClass',
        '@slot',
        '@source',
        '@title',
        '@usage'
    ],
    constants: [
        'NULL',
        'FALSE',
        'TRUE',
        'NA',
        'Inf',
        'NaN ',
        'NA_integer_',
        'NA_real_',
        'NA_complex_',
        'NA_character_ ',
        'T',
        'F',
        'LETTERS',
        'letters',
        'month.abb',
        'month.name',
        'pi',
        'R.version.string'
    ],
    keywords: [
        'break',
        'next',
        'return',
        'if',
        'else',
        'for',
        'in',
        'repeat',
        'while',
        'array',
        'category',
        'character',
        'complex',
        'double',
        'function',
        'integer',
        'list',
        'logical',
        'matrix',
        'numeric',
        'vector',
        'data.frame',
        'factor',
        'library',
        'require',
        'attach',
        'detach',
        'source'
    ],
    special: ['\\n', '\\r', '\\t', '\\b', '\\a', '\\f', '\\v', "\\'", '\\"', '\\\\'],
    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.bracket' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' }
    ],
    tokenizer: {
        root: [
            { include: '@numbers' },
            { include: '@strings' },
            [/[{}\[\]()]/, '@brackets'],
            { include: '@operators' },
            [/#'/, 'comment.doc', '@roxygen'],
            [/(^#.*$)/, 'comment'],
            [/\s+/, 'white'],
            [/[,:;]/, 'delimiter'],
            [/@[a-zA-Z]\w*/, 'tag'],
            [
                /[a-zA-Z]\w*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@constants': 'constant',
                        '@default': 'identifier'
                    }
                }
            ]
        ],
        // Recognize Roxygen comments
        roxygen: [
            [
                /@\w+/,
                {
                    cases: {
                        '@roxygen': 'tag',
                        '@eos': { token: 'comment.doc', next: '@pop' },
                        '@default': 'comment.doc'
                    }
                }
            ],
            [
                /\s+/,
                {
                    cases: {
                        '@eos': { token: 'comment.doc', next: '@pop' },
                        '@default': 'comment.doc'
                    }
                }
            ],
            [/.*/, { token: 'comment.doc', next: '@pop' }]
        ],
        // Recognize positives, negatives, decimals, imaginaries, and scientific notation
        numbers: [
            [/0[xX][0-9a-fA-F]+/, 'number.hex'],
            [/-?(\d*\.)?\d+([eE][+\-]?\d+)?/, 'number']
        ],
        // Recognize operators
        operators: [
            [/<{1,2}-/, 'operator'],
            [/->{1,2}/, 'operator'],
            [/%[^%\s]+%/, 'operator'],
            [/\*\*/, 'operator'],
            [/%%/, 'operator'],
            [/&&/, 'operator'],
            [/\|\|/, 'operator'],
            [/<</, 'operator'],
            [/>>/, 'operator'],
            [/[-+=&|!<>^~*/:$]/, 'operator']
        ],
        // Recognize strings, including those broken across lines
        strings: [
            [/'/, 'string.escape', '@stringBody'],
            [/"/, 'string.escape', '@dblStringBody']
        ],
        stringBody: [
            [
                /\\./,
                {
                    cases: {
                        '@special': 'string',
                        '@default': 'error-token'
                    }
                }
            ],
            [/'/, 'string.escape', '@popall'],
            [/./, 'string']
        ],
        dblStringBody: [
            [
                /\\./,
                {
                    cases: {
                        '@special': 'string',
                        '@default': 'error-token'
                    }
                }
            ],
            [/"/, 'string.escape', '@popall'],
            [/./, 'string']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvci9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLDZCQUE2QjtBQUMzRCxTQUFTLG9EQUFvRDtBQUM3RCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYSxzQkFBc0I7QUFDbkMsYUFBYSxzQkFBc0I7QUFDbkMsaUJBQWlCO0FBQ2pCLGFBQWEsd0JBQXdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxxQ0FBcUM7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxxQ0FBcUM7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscUNBQXFDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsSUFBSTtBQUNwQixpQkFBaUIsSUFBSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiNDcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICBjb21tZW50czoge1xuICAgICAgICBsaW5lQ29tbWVudDogJyMnXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJ3snLCAnfSddLFxuICAgICAgICBbJ1snLCAnXSddLFxuICAgICAgICBbJygnLCAnKSddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfVxuICAgIF0sXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH1cbiAgICBdXG59O1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxuICAgIHRva2VuUG9zdGZpeDogJy5yJyxcbiAgICByb3h5Z2VuOiBbXG4gICAgICAgICdAcGFyYW0nLFxuICAgICAgICAnQHJldHVybicsXG4gICAgICAgICdAbmFtZScsXG4gICAgICAgICdAcmRuYW1lJyxcbiAgICAgICAgJ0BleGFtcGxlcycsXG4gICAgICAgICdAaW5jbHVkZScsXG4gICAgICAgICdAZG9jVHlwZScsXG4gICAgICAgICdAUzNtZXRob2QnLFxuICAgICAgICAnQFRPRE8nLFxuICAgICAgICAnQGFsaWFzZXMnLFxuICAgICAgICAnQGFsaWFzJyxcbiAgICAgICAgJ0Bhc3NpZ25lZScsXG4gICAgICAgICdAYXV0aG9yJyxcbiAgICAgICAgJ0BjYWxsR3JhcGhEZXB0aCcsXG4gICAgICAgICdAY2FsbEdyYXBoJyxcbiAgICAgICAgJ0BjYWxsR3JhcGhQcmltaXRpdmVzJyxcbiAgICAgICAgJ0Bjb25jZXB0JyxcbiAgICAgICAgJ0BleHBvcnRDbGFzcycsXG4gICAgICAgICdAZXhwb3J0TWV0aG9kJyxcbiAgICAgICAgJ0BleHBvcnRQYXR0ZXJuJyxcbiAgICAgICAgJ0BleHBvcnQnLFxuICAgICAgICAnQGZvcm1hbHMnLFxuICAgICAgICAnQGZvcm1hdCcsXG4gICAgICAgICdAaW1wb3J0Q2xhc3Nlc0Zyb20nLFxuICAgICAgICAnQGltcG9ydEZyb20nLFxuICAgICAgICAnQGltcG9ydE1ldGhvZHNGcm9tJyxcbiAgICAgICAgJ0BpbXBvcnQnLFxuICAgICAgICAnQGtleXdvcmRzJyxcbiAgICAgICAgJ0BtZXRob2QnLFxuICAgICAgICAnQG5vcmQnLFxuICAgICAgICAnQG5vdGUnLFxuICAgICAgICAnQHJlZmVyZW5jZXMnLFxuICAgICAgICAnQHNlZWFsc28nLFxuICAgICAgICAnQHNldENsYXNzJyxcbiAgICAgICAgJ0BzbG90JyxcbiAgICAgICAgJ0Bzb3VyY2UnLFxuICAgICAgICAnQHRpdGxlJyxcbiAgICAgICAgJ0B1c2FnZSdcbiAgICBdLFxuICAgIGNvbnN0YW50czogW1xuICAgICAgICAnTlVMTCcsXG4gICAgICAgICdGQUxTRScsXG4gICAgICAgICdUUlVFJyxcbiAgICAgICAgJ05BJyxcbiAgICAgICAgJ0luZicsXG4gICAgICAgICdOYU4gJyxcbiAgICAgICAgJ05BX2ludGVnZXJfJyxcbiAgICAgICAgJ05BX3JlYWxfJyxcbiAgICAgICAgJ05BX2NvbXBsZXhfJyxcbiAgICAgICAgJ05BX2NoYXJhY3Rlcl8gJyxcbiAgICAgICAgJ1QnLFxuICAgICAgICAnRicsXG4gICAgICAgICdMRVRURVJTJyxcbiAgICAgICAgJ2xldHRlcnMnLFxuICAgICAgICAnbW9udGguYWJiJyxcbiAgICAgICAgJ21vbnRoLm5hbWUnLFxuICAgICAgICAncGknLFxuICAgICAgICAnUi52ZXJzaW9uLnN0cmluZydcbiAgICBdLFxuICAgIGtleXdvcmRzOiBbXG4gICAgICAgICdicmVhaycsXG4gICAgICAgICduZXh0JyxcbiAgICAgICAgJ3JldHVybicsXG4gICAgICAgICdpZicsXG4gICAgICAgICdlbHNlJyxcbiAgICAgICAgJ2ZvcicsXG4gICAgICAgICdpbicsXG4gICAgICAgICdyZXBlYXQnLFxuICAgICAgICAnd2hpbGUnLFxuICAgICAgICAnYXJyYXknLFxuICAgICAgICAnY2F0ZWdvcnknLFxuICAgICAgICAnY2hhcmFjdGVyJyxcbiAgICAgICAgJ2NvbXBsZXgnLFxuICAgICAgICAnZG91YmxlJyxcbiAgICAgICAgJ2Z1bmN0aW9uJyxcbiAgICAgICAgJ2ludGVnZXInLFxuICAgICAgICAnbGlzdCcsXG4gICAgICAgICdsb2dpY2FsJyxcbiAgICAgICAgJ21hdHJpeCcsXG4gICAgICAgICdudW1lcmljJyxcbiAgICAgICAgJ3ZlY3RvcicsXG4gICAgICAgICdkYXRhLmZyYW1lJyxcbiAgICAgICAgJ2ZhY3RvcicsXG4gICAgICAgICdsaWJyYXJ5JyxcbiAgICAgICAgJ3JlcXVpcmUnLFxuICAgICAgICAnYXR0YWNoJyxcbiAgICAgICAgJ2RldGFjaCcsXG4gICAgICAgICdzb3VyY2UnXG4gICAgXSxcbiAgICBzcGVjaWFsOiBbJ1xcXFxuJywgJ1xcXFxyJywgJ1xcXFx0JywgJ1xcXFxiJywgJ1xcXFxhJywgJ1xcXFxmJywgJ1xcXFx2JywgXCJcXFxcJ1wiLCAnXFxcXFwiJywgJ1xcXFxcXFxcJ10sXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScsIHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9XG4gICAgXSxcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQG51bWJlcnMnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc3RyaW5ncycgfSxcbiAgICAgICAgICAgIFsvW3t9XFxbXFxdKCldLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQG9wZXJhdG9ycycgfSxcbiAgICAgICAgICAgIFsvIycvLCAnY29tbWVudC5kb2MnLCAnQHJveHlnZW4nXSxcbiAgICAgICAgICAgIFsvKF4jLiokKS8sICdjb21tZW50J10sXG4gICAgICAgICAgICBbL1xccysvLCAnd2hpdGUnXSxcbiAgICAgICAgICAgIFsvWyw6O10vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbL0BbYS16QS1aXVxcdyovLCAndGFnJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1thLXpBLVpdXFx3Ki8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAY29uc3RhbnRzJzogJ2NvbnN0YW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICAvLyBSZWNvZ25pemUgUm94eWdlbiBjb21tZW50c1xuICAgICAgICByb3h5Z2VuOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL0BcXHcrLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQHJveHlnZW4nOiAndGFnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogeyB0b2tlbjogJ2NvbW1lbnQuZG9jJywgbmV4dDogJ0Bwb3AnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnY29tbWVudC5kb2MnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9cXHMrLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IHsgdG9rZW46ICdjb21tZW50LmRvYycsIG5leHQ6ICdAcG9wJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2NvbW1lbnQuZG9jJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvLiovLCB7IHRva2VuOiAnY29tbWVudC5kb2MnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gUmVjb2duaXplIHBvc2l0aXZlcywgbmVnYXRpdmVzLCBkZWNpbWFscywgaW1hZ2luYXJpZXMsIGFuZCBzY2llbnRpZmljIG5vdGF0aW9uXG4gICAgICAgIG51bWJlcnM6IFtcbiAgICAgICAgICAgIFsvMFt4WF1bMC05YS1mQS1GXSsvLCAnbnVtYmVyLmhleCddLFxuICAgICAgICAgICAgWy8tPyhcXGQqXFwuKT9cXGQrKFtlRV1bK1xcLV0/XFxkKyk/LywgJ251bWJlciddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIFJlY29nbml6ZSBvcGVyYXRvcnNcbiAgICAgICAgb3BlcmF0b3JzOiBbXG4gICAgICAgICAgICBbLzx7MSwyfS0vLCAnb3BlcmF0b3InXSxcbiAgICAgICAgICAgIFsvLT57MSwyfS8sICdvcGVyYXRvciddLFxuICAgICAgICAgICAgWy8lW14lXFxzXSslLywgJ29wZXJhdG9yJ10sXG4gICAgICAgICAgICBbL1xcKlxcKi8sICdvcGVyYXRvciddLFxuICAgICAgICAgICAgWy8lJS8sICdvcGVyYXRvciddLFxuICAgICAgICAgICAgWy8mJi8sICdvcGVyYXRvciddLFxuICAgICAgICAgICAgWy9cXHxcXHwvLCAnb3BlcmF0b3InXSxcbiAgICAgICAgICAgIFsvPDwvLCAnb3BlcmF0b3InXSxcbiAgICAgICAgICAgIFsvPj4vLCAnb3BlcmF0b3InXSxcbiAgICAgICAgICAgIFsvWy0rPSZ8ITw+Xn4qLzokXS8sICdvcGVyYXRvciddXG4gICAgICAgIF0sXG4gICAgICAgIC8vIFJlY29nbml6ZSBzdHJpbmdzLCBpbmNsdWRpbmcgdGhvc2UgYnJva2VuIGFjcm9zcyBsaW5lc1xuICAgICAgICBzdHJpbmdzOiBbXG4gICAgICAgICAgICBbLycvLCAnc3RyaW5nLmVzY2FwZScsICdAc3RyaW5nQm9keSddLFxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcuZXNjYXBlJywgJ0BkYmxTdHJpbmdCb2R5J11cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nQm9keTogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9cXFxcLi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BzcGVjaWFsJzogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnZXJyb3ItdG9rZW4nXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZy5lc2NhcGUnLCAnQHBvcGFsbCddLFxuICAgICAgICAgICAgWy8uLywgJ3N0cmluZyddXG4gICAgICAgIF0sXG4gICAgICAgIGRibFN0cmluZ0JvZHk6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXFxcXC4vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAc3BlY2lhbCc6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2Vycm9yLXRva2VuJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nLmVzY2FwZScsICdAcG9wYWxsJ10sXG4gICAgICAgICAgICBbLy4vLCAnc3RyaW5nJ11cbiAgICAgICAgXVxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9