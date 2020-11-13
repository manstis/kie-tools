(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/shell/shell.js":
/*!**********************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/shell/shell.js ***!
  \**********************************************************************************************************************************/
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
        { open: '"', close: '"' },
        { open: "'", close: "'" },
        { open: '`', close: '`' }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
        { open: '`', close: '`' }
    ]
};
var language = {
    defaultToken: '',
    ignoreCase: true,
    tokenPostfix: '.shell',
    brackets: [
        { token: 'delimiter.bracket', open: '{', close: '}' },
        { token: 'delimiter.parenthesis', open: '(', close: ')' },
        { token: 'delimiter.square', open: '[', close: ']' }
    ],
    keywords: [
        'if',
        'then',
        'do',
        'else',
        'elif',
        'while',
        'until',
        'for',
        'in',
        'esac',
        'fi',
        'fin',
        'fil',
        'done',
        'exit',
        'set',
        'unset',
        'export',
        'function'
    ],
    builtins: [
        'ab',
        'awk',
        'bash',
        'beep',
        'cat',
        'cc',
        'cd',
        'chown',
        'chmod',
        'chroot',
        'clear',
        'cp',
        'curl',
        'cut',
        'diff',
        'echo',
        'find',
        'gawk',
        'gcc',
        'get',
        'git',
        'grep',
        'hg',
        'kill',
        'killall',
        'ln',
        'ls',
        'make',
        'mkdir',
        'openssl',
        'mv',
        'nc',
        'node',
        'npm',
        'ping',
        'ps',
        'restart',
        'rm',
        'rmdir',
        'sed',
        'service',
        'sh',
        'shopt',
        'shred',
        'source',
        'sort',
        'sleep',
        'ssh',
        'start',
        'stop',
        'su',
        'sudo',
        'svn',
        'tee',
        'telnet',
        'top',
        'touch',
        'vi',
        'vim',
        'wall',
        'wc',
        'wget',
        'who',
        'write',
        'yes',
        'zsh'
    ],
    // we include these common regular expressions
    symbols: /[=><!~?&|+\-*\/\^;\.,]+/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            { include: '@whitespace' },
            [
                /[a-zA-Z]\w*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@builtins': 'type.identifier',
                        '@default': ''
                    }
                }
            ],
            { include: '@strings' },
            { include: '@parameters' },
            { include: '@heredoc' },
            [/[{}\[\]()]/, '@brackets'],
            [/-+\w+/, 'attribute.name'],
            [/@symbols/, 'delimiter'],
            { include: '@numbers' },
            [/[,;]/, 'delimiter']
        ],
        whitespace: [
            [/\s+/, 'white'],
            [/(^#!.*$)/, 'metatag'],
            [/(^#.*$)/, 'comment']
        ],
        numbers: [
            [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, 'number.hex'],
            [/\d+/, 'number']
        ],
        // Recognize strings, including those broken across lines
        strings: [
            [/'/, 'string', '@stringBody'],
            [/"/, 'string', '@dblStringBody']
        ],
        stringBody: [
            [/'/, 'string', '@popall'],
            [/./, 'string']
        ],
        dblStringBody: [
            [/"/, 'string', '@popall'],
            [/./, 'string']
        ],
        heredoc: [
            [
                /(<<[-<]?)(\s*)(['"`]?)([\w\-]+)(['"`]?)/,
                [
                    'constants',
                    'white',
                    'string.heredoc.delimiter',
                    'string.heredoc',
                    'string.heredoc.delimiter'
                ]
            ]
        ],
        parameters: [
            [/\$\d+/, 'variable.predefined'],
            [/\$\w+/, 'variable'],
            [/\$[*@#?\-$!0_]/, 'variable'],
            [/\$'/, 'variable', '@parameterBodyQuote'],
            [/\$"/, 'variable', '@parameterBodyDoubleQuote'],
            [/\$\(/, 'variable', '@parameterBodyParen'],
            [/\$\{/, 'variable', '@parameterBodyCurlyBrace']
        ],
        parameterBodyQuote: [
            [/[^#:%*@\-!_']+/, 'variable'],
            [/[#:%*@\-!_]/, 'delimiter'],
            [/[']/, 'variable', '@pop']
        ],
        parameterBodyDoubleQuote: [
            [/[^#:%*@\-!_"]+/, 'variable'],
            [/[#:%*@\-!_]/, 'delimiter'],
            [/["]/, 'variable', '@pop']
        ],
        parameterBodyParen: [
            [/[^#:%*@\-!_)]+/, 'variable'],
            [/[#:%*@\-!_]/, 'delimiter'],
            [/[)]/, 'variable', '@pop']
        ],
        parameterBodyCurlyBrace: [
            [/[^#:%*@\-!_}]+/, 'variable'],
            [/[#:%*@\-!_]/, 'delimiter'],
            [/[}]/, 'variable', '@pop']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvc2hlbGwvc2hlbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxxQ0FBcUMsWUFBWSxHQUFHO0FBQzdELFNBQVMsd0RBQXdEO0FBQ2pFLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEseUJBQXlCO0FBQ3RDLGFBQWEsc0JBQXNCO0FBQ25DLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYSxzQkFBc0I7QUFDbkMsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBIiwiZmlsZSI6IjU4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcjJ1xuICAgIH0sXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgWyd7JywgJ30nXSxcbiAgICAgICAgWydbJywgJ10nXSxcbiAgICAgICAgWycoJywgJyknXVxuICAgIF0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9LFxuICAgICAgICB7IG9wZW46ICdgJywgY2xvc2U6ICdgJyB9XG4gICAgXSxcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH0sXG4gICAgICAgIHsgb3BlbjogJ2AnLCBjbG9zZTogJ2AnIH1cbiAgICBdXG59O1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxuICAgIGlnbm9yZUNhc2U6IHRydWUsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLnNoZWxsJyxcbiAgICBicmFja2V0czogW1xuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnLCBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycsIG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLnNxdWFyZScsIG9wZW46ICdbJywgY2xvc2U6ICddJyB9XG4gICAgXSxcbiAgICBrZXl3b3JkczogW1xuICAgICAgICAnaWYnLFxuICAgICAgICAndGhlbicsXG4gICAgICAgICdkbycsXG4gICAgICAgICdlbHNlJyxcbiAgICAgICAgJ2VsaWYnLFxuICAgICAgICAnd2hpbGUnLFxuICAgICAgICAndW50aWwnLFxuICAgICAgICAnZm9yJyxcbiAgICAgICAgJ2luJyxcbiAgICAgICAgJ2VzYWMnLFxuICAgICAgICAnZmknLFxuICAgICAgICAnZmluJyxcbiAgICAgICAgJ2ZpbCcsXG4gICAgICAgICdkb25lJyxcbiAgICAgICAgJ2V4aXQnLFxuICAgICAgICAnc2V0JyxcbiAgICAgICAgJ3Vuc2V0JyxcbiAgICAgICAgJ2V4cG9ydCcsXG4gICAgICAgICdmdW5jdGlvbidcbiAgICBdLFxuICAgIGJ1aWx0aW5zOiBbXG4gICAgICAgICdhYicsXG4gICAgICAgICdhd2snLFxuICAgICAgICAnYmFzaCcsXG4gICAgICAgICdiZWVwJyxcbiAgICAgICAgJ2NhdCcsXG4gICAgICAgICdjYycsXG4gICAgICAgICdjZCcsXG4gICAgICAgICdjaG93bicsXG4gICAgICAgICdjaG1vZCcsXG4gICAgICAgICdjaHJvb3QnLFxuICAgICAgICAnY2xlYXInLFxuICAgICAgICAnY3AnLFxuICAgICAgICAnY3VybCcsXG4gICAgICAgICdjdXQnLFxuICAgICAgICAnZGlmZicsXG4gICAgICAgICdlY2hvJyxcbiAgICAgICAgJ2ZpbmQnLFxuICAgICAgICAnZ2F3aycsXG4gICAgICAgICdnY2MnLFxuICAgICAgICAnZ2V0JyxcbiAgICAgICAgJ2dpdCcsXG4gICAgICAgICdncmVwJyxcbiAgICAgICAgJ2hnJyxcbiAgICAgICAgJ2tpbGwnLFxuICAgICAgICAna2lsbGFsbCcsXG4gICAgICAgICdsbicsXG4gICAgICAgICdscycsXG4gICAgICAgICdtYWtlJyxcbiAgICAgICAgJ21rZGlyJyxcbiAgICAgICAgJ29wZW5zc2wnLFxuICAgICAgICAnbXYnLFxuICAgICAgICAnbmMnLFxuICAgICAgICAnbm9kZScsXG4gICAgICAgICducG0nLFxuICAgICAgICAncGluZycsXG4gICAgICAgICdwcycsXG4gICAgICAgICdyZXN0YXJ0JyxcbiAgICAgICAgJ3JtJyxcbiAgICAgICAgJ3JtZGlyJyxcbiAgICAgICAgJ3NlZCcsXG4gICAgICAgICdzZXJ2aWNlJyxcbiAgICAgICAgJ3NoJyxcbiAgICAgICAgJ3Nob3B0JyxcbiAgICAgICAgJ3NocmVkJyxcbiAgICAgICAgJ3NvdXJjZScsXG4gICAgICAgICdzb3J0JyxcbiAgICAgICAgJ3NsZWVwJyxcbiAgICAgICAgJ3NzaCcsXG4gICAgICAgICdzdGFydCcsXG4gICAgICAgICdzdG9wJyxcbiAgICAgICAgJ3N1JyxcbiAgICAgICAgJ3N1ZG8nLFxuICAgICAgICAnc3ZuJyxcbiAgICAgICAgJ3RlZScsXG4gICAgICAgICd0ZWxuZXQnLFxuICAgICAgICAndG9wJyxcbiAgICAgICAgJ3RvdWNoJyxcbiAgICAgICAgJ3ZpJyxcbiAgICAgICAgJ3ZpbScsXG4gICAgICAgICd3YWxsJyxcbiAgICAgICAgJ3djJyxcbiAgICAgICAgJ3dnZXQnLFxuICAgICAgICAnd2hvJyxcbiAgICAgICAgJ3dyaXRlJyxcbiAgICAgICAgJ3llcycsXG4gICAgICAgICd6c2gnXG4gICAgXSxcbiAgICAvLyB3ZSBpbmNsdWRlIHRoZXNlIGNvbW1vbiByZWd1bGFyIGV4cHJlc3Npb25zXG4gICAgc3ltYm9sczogL1s9Pjwhfj8mfCtcXC0qXFwvXFxeO1xcLixdKy8sXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9bYS16QS1aXVxcdyovLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiAna2V5d29yZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGJ1aWx0aW5zJzogJ3R5cGUuaWRlbnRpZmllcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzdHJpbmdzJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHBhcmFtZXRlcnMnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAaGVyZWRvYycgfSxcbiAgICAgICAgICAgIFsvW3t9XFxbXFxdKCldLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgWy8tK1xcdysvLCAnYXR0cmlidXRlLm5hbWUnXSxcbiAgICAgICAgICAgIFsvQHN5bWJvbHMvLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAbnVtYmVycycgfSxcbiAgICAgICAgICAgIFsvWyw7XS8sICdkZWxpbWl0ZXInXVxuICAgICAgICBdLFxuICAgICAgICB3aGl0ZXNwYWNlOiBbXG4gICAgICAgICAgICBbL1xccysvLCAnd2hpdGUnXSxcbiAgICAgICAgICAgIFsvKF4jIS4qJCkvLCAnbWV0YXRhZyddLFxuICAgICAgICAgICAgWy8oXiMuKiQpLywgJ2NvbW1lbnQnXVxuICAgICAgICBdLFxuICAgICAgICBudW1iZXJzOiBbXG4gICAgICAgICAgICBbL1xcZCpcXC5cXGQrKFtlRV1bXFwtK10/XFxkKyk/LywgJ251bWJlci5mbG9hdCddLFxuICAgICAgICAgICAgWy8wW3hYXVswLTlhLWZBLUZfXSpbMC05YS1mQS1GXS8sICdudW1iZXIuaGV4J10sXG4gICAgICAgICAgICBbL1xcZCsvLCAnbnVtYmVyJ11cbiAgICAgICAgXSxcbiAgICAgICAgLy8gUmVjb2duaXplIHN0cmluZ3MsIGluY2x1ZGluZyB0aG9zZSBicm9rZW4gYWNyb3NzIGxpbmVzXG4gICAgICAgIHN0cmluZ3M6IFtcbiAgICAgICAgICAgIFsvJy8sICdzdHJpbmcnLCAnQHN0cmluZ0JvZHknXSxcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJywgJ0BkYmxTdHJpbmdCb2R5J11cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nQm9keTogW1xuICAgICAgICAgICAgWy8nLywgJ3N0cmluZycsICdAcG9wYWxsJ10sXG4gICAgICAgICAgICBbLy4vLCAnc3RyaW5nJ11cbiAgICAgICAgXSxcbiAgICAgICAgZGJsU3RyaW5nQm9keTogW1xuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHBvcGFsbCddLFxuICAgICAgICAgICAgWy8uLywgJ3N0cmluZyddXG4gICAgICAgIF0sXG4gICAgICAgIGhlcmVkb2M6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKDw8Wy08XT8pKFxccyopKFsnXCJgXT8pKFtcXHdcXC1dKykoWydcImBdPykvLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgJ2NvbnN0YW50cycsXG4gICAgICAgICAgICAgICAgICAgICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICdzdHJpbmcuaGVyZWRvYy5kZWxpbWl0ZXInLFxuICAgICAgICAgICAgICAgICAgICAnc3RyaW5nLmhlcmVkb2MnLFxuICAgICAgICAgICAgICAgICAgICAnc3RyaW5nLmhlcmVkb2MuZGVsaW1pdGVyJ1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgcGFyYW1ldGVyczogW1xuICAgICAgICAgICAgWy9cXCRcXGQrLywgJ3ZhcmlhYmxlLnByZWRlZmluZWQnXSxcbiAgICAgICAgICAgIFsvXFwkXFx3Ky8sICd2YXJpYWJsZSddLFxuICAgICAgICAgICAgWy9cXCRbKkAjP1xcLSQhMF9dLywgJ3ZhcmlhYmxlJ10sXG4gICAgICAgICAgICBbL1xcJCcvLCAndmFyaWFibGUnLCAnQHBhcmFtZXRlckJvZHlRdW90ZSddLFxuICAgICAgICAgICAgWy9cXCRcIi8sICd2YXJpYWJsZScsICdAcGFyYW1ldGVyQm9keURvdWJsZVF1b3RlJ10sXG4gICAgICAgICAgICBbL1xcJFxcKC8sICd2YXJpYWJsZScsICdAcGFyYW1ldGVyQm9keVBhcmVuJ10sXG4gICAgICAgICAgICBbL1xcJFxcey8sICd2YXJpYWJsZScsICdAcGFyYW1ldGVyQm9keUN1cmx5QnJhY2UnXVxuICAgICAgICBdLFxuICAgICAgICBwYXJhbWV0ZXJCb2R5UXVvdGU6IFtcbiAgICAgICAgICAgIFsvW14jOiUqQFxcLSFfJ10rLywgJ3ZhcmlhYmxlJ10sXG4gICAgICAgICAgICBbL1sjOiUqQFxcLSFfXS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsvWyddLywgJ3ZhcmlhYmxlJywgJ0Bwb3AnXVxuICAgICAgICBdLFxuICAgICAgICBwYXJhbWV0ZXJCb2R5RG91YmxlUXVvdGU6IFtcbiAgICAgICAgICAgIFsvW14jOiUqQFxcLSFfXCJdKy8sICd2YXJpYWJsZSddLFxuICAgICAgICAgICAgWy9bIzolKkBcXC0hX10vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbL1tcIl0vLCAndmFyaWFibGUnLCAnQHBvcCddXG4gICAgICAgIF0sXG4gICAgICAgIHBhcmFtZXRlckJvZHlQYXJlbjogW1xuICAgICAgICAgICAgWy9bXiM6JSpAXFwtIV8pXSsvLCAndmFyaWFibGUnXSxcbiAgICAgICAgICAgIFsvWyM6JSpAXFwtIV9dLywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgWy9bKV0vLCAndmFyaWFibGUnLCAnQHBvcCddXG4gICAgICAgIF0sXG4gICAgICAgIHBhcmFtZXRlckJvZHlDdXJseUJyYWNlOiBbXG4gICAgICAgICAgICBbL1teIzolKkBcXC0hX31dKy8sICd2YXJpYWJsZSddLFxuICAgICAgICAgICAgWy9bIzolKkBcXC0hX10vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbL1t9XS8sICd2YXJpYWJsZScsICdAcG9wJ11cbiAgICAgICAgXVxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9