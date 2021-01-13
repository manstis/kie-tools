(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/bat/bat.js":
/*!******************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/bat/bat.js ***!
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
        lineComment: 'REM'
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
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' }
    ],
    folding: {
        markers: {
            start: new RegExp('^\\s*(::\\s*|REM\\s+)#region'),
            end: new RegExp('^\\s*(::\\s*|REM\\s+)#endregion')
        }
    }
};
var language = {
    defaultToken: '',
    ignoreCase: true,
    tokenPostfix: '.bat',
    brackets: [
        { token: 'delimiter.bracket', open: '{', close: '}' },
        { token: 'delimiter.parenthesis', open: '(', close: ')' },
        { token: 'delimiter.square', open: '[', close: ']' }
    ],
    keywords: /call|defined|echo|errorlevel|exist|for|goto|if|pause|set|shift|start|title|not|pushd|popd/,
    // we include these common regular expressions
    symbols: /[=><!~?&|+\-*\/\^;\.,]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            [/^(\s*)(rem(?:\s.*|))$/, ['', 'comment']],
            [/(\@?)(@keywords)(?!\w)/, [{ token: 'keyword' }, { token: 'keyword.$2' }]],
            // whitespace
            [/[ \t\r\n]+/, ''],
            // blocks
            [/setlocal(?!\w)/, 'keyword.tag-setlocal'],
            [/endlocal(?!\w)/, 'keyword.tag-setlocal'],
            // words
            [/[a-zA-Z_]\w*/, ''],
            // labels
            [/:\w*/, 'metatag'],
            // variables
            [/%[^%]+%/, 'variable'],
            [/%%[\w]+(?!\w)/, 'variable'],
            // punctuations
            [/[{}()\[\]]/, '@brackets'],
            [/@symbols/, 'delimiter'],
            // numbers
            [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, 'number.hex'],
            [/\d+/, 'number'],
            // punctuation: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            // strings:
            [/"/, 'string', '@string."'],
            [/'/, 'string', "@string.'"]
        ],
        string: [
            [
                /[^\\"'%]+/,
                {
                    cases: {
                        '@eos': { token: 'string', next: '@popall' },
                        '@default': 'string'
                    }
                }
            ],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/%[\w ]+%/, 'variable'],
            [/%%[\w]+(?!\w)/, 'variable'],
            [
                /["']/,
                {
                    cases: {
                        '$#==$S2': { token: 'string', next: '@pop' },
                        '@default': 'string'
                    }
                }
            ],
            [/$/, 'string', '@popall']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvYmF0L2JhdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxxQ0FBcUMsWUFBWSxHQUFHO0FBQzdELFNBQVMsd0RBQXdEO0FBQ2pFLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsOENBQThDLElBQUksY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxtQkFBbUIsR0FBRyxzQkFBc0I7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxtQ0FBbUM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdDQUFnQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgbGluZUNvbW1lbnQ6ICdSRU0nXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJ3snLCAnfSddLFxuICAgICAgICBbJ1snLCAnXSddLFxuICAgICAgICBbJygnLCAnKSddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfVxuICAgIF0sXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH1cbiAgICBdLFxuICAgIGZvbGRpbmc6IHtcbiAgICAgICAgbWFya2Vyczoge1xuICAgICAgICAgICAgc3RhcnQ6IG5ldyBSZWdFeHAoJ15cXFxccyooOjpcXFxccyp8UkVNXFxcXHMrKSNyZWdpb24nKSxcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cCgnXlxcXFxzKig6OlxcXFxzKnxSRU1cXFxccyspI2VuZHJlZ2lvbicpXG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxuICAgIGlnbm9yZUNhc2U6IHRydWUsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLmJhdCcsXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5icmFja2V0Jywgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnLCBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlci5zcXVhcmUnLCBvcGVuOiAnWycsIGNsb3NlOiAnXScgfVxuICAgIF0sXG4gICAga2V5d29yZHM6IC9jYWxsfGRlZmluZWR8ZWNob3xlcnJvcmxldmVsfGV4aXN0fGZvcnxnb3RvfGlmfHBhdXNlfHNldHxzaGlmdHxzdGFydHx0aXRsZXxub3R8cHVzaGR8cG9wZC8sXG4gICAgLy8gd2UgaW5jbHVkZSB0aGVzZSBjb21tb24gcmVndWxhciBleHByZXNzaW9uc1xuICAgIHN5bWJvbHM6IC9bPT48IX4/JnwrXFwtKlxcL1xcXjtcXC4sXSsvLFxuICAgIGVzY2FwZXM6IC9cXFxcKD86W2FiZm5ydHZcXFxcXCInXXx4WzAtOUEtRmEtZl17MSw0fXx1WzAtOUEtRmEtZl17NH18VVswLTlBLUZhLWZdezh9KS8sXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIFsvXihcXHMqKShyZW0oPzpcXHMuKnwpKSQvLCBbJycsICdjb21tZW50J11dLFxuICAgICAgICAgICAgWy8oXFxAPykoQGtleXdvcmRzKSg/IVxcdykvLCBbeyB0b2tlbjogJ2tleXdvcmQnIH0sIHsgdG9rZW46ICdrZXl3b3JkLiQyJyB9XV0sXG4gICAgICAgICAgICAvLyB3aGl0ZXNwYWNlXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnJ10sXG4gICAgICAgICAgICAvLyBibG9ja3NcbiAgICAgICAgICAgIFsvc2V0bG9jYWwoPyFcXHcpLywgJ2tleXdvcmQudGFnLXNldGxvY2FsJ10sXG4gICAgICAgICAgICBbL2VuZGxvY2FsKD8hXFx3KS8sICdrZXl3b3JkLnRhZy1zZXRsb2NhbCddLFxuICAgICAgICAgICAgLy8gd29yZHNcbiAgICAgICAgICAgIFsvW2EtekEtWl9dXFx3Ki8sICcnXSxcbiAgICAgICAgICAgIC8vIGxhYmVsc1xuICAgICAgICAgICAgWy86XFx3Ki8sICdtZXRhdGFnJ10sXG4gICAgICAgICAgICAvLyB2YXJpYWJsZXNcbiAgICAgICAgICAgIFsvJVteJV0rJS8sICd2YXJpYWJsZSddLFxuICAgICAgICAgICAgWy8lJVtcXHddKyg/IVxcdykvLCAndmFyaWFibGUnXSxcbiAgICAgICAgICAgIC8vIHB1bmN0dWF0aW9uc1xuICAgICAgICAgICAgWy9be30oKVxcW1xcXV0vLCAnQGJyYWNrZXRzJ10sXG4gICAgICAgICAgICBbL0BzeW1ib2xzLywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgLy8gbnVtYmVyc1xuICAgICAgICAgICAgWy9cXGQqXFwuXFxkKyhbZUVdW1xcLStdP1xcZCspPy8sICdudW1iZXIuZmxvYXQnXSxcbiAgICAgICAgICAgIFsvMFt4WF1bMC05YS1mQS1GX10qWzAtOWEtZkEtRl0vLCAnbnVtYmVyLmhleCddLFxuICAgICAgICAgICAgWy9cXGQrLywgJ251bWJlciddLFxuICAgICAgICAgICAgLy8gcHVuY3R1YXRpb246IGFmdGVyIG51bWJlciBiZWNhdXNlIG9mIC5cXGQgZmxvYXRzXG4gICAgICAgICAgICBbL1s7LC5dLywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgLy8gc3RyaW5nczpcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJywgJ0BzdHJpbmcuXCInXSxcbiAgICAgICAgICAgIFsvJy8sICdzdHJpbmcnLCBcIkBzdHJpbmcuJ1wiXVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmc6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvW15cXFxcXCInJV0rLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHBvcGFsbCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxuICAgICAgICAgICAgWy8lW1xcdyBdKyUvLCAndmFyaWFibGUnXSxcbiAgICAgICAgICAgIFsvJSVbXFx3XSsoPyFcXHcpLywgJ3ZhcmlhYmxlJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1tcIiddLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnJCM9PSRTMic6IHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHBvcCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy8kLywgJ3N0cmluZycsICdAcG9wYWxsJ11cbiAgICAgICAgXVxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9