(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/xml/xml.js":
/*!******************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/xml/xml.js ***!
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
        blockComment: ['<!--', '-->']
    },
    brackets: [['<', '>']],
    autoClosingPairs: [
        { open: '<', close: '>' },
        { open: "'", close: "'" },
        { open: '"', close: '"' }
    ],
    surroundingPairs: [
        { open: '<', close: '>' },
        { open: "'", close: "'" },
        { open: '"', close: '"' }
    ]
};
var language = {
    defaultToken: '',
    tokenPostfix: '.xml',
    ignoreCase: true,
    // Useful regular expressions
    qualifiedName: /(?:[\w\.\-]+:)?[\w\.\-]+/,
    tokenizer: {
        root: [
            [/[^<&]+/, ''],
            { include: '@whitespace' },
            // Standard opening tag
            [/(<)(@qualifiedName)/, [{ token: 'delimiter' }, { token: 'tag', next: '@tag' }]],
            // Standard closing tag
            [
                /(<\/)(@qualifiedName)(\s*)(>)/,
                [{ token: 'delimiter' }, { token: 'tag' }, '', { token: 'delimiter' }]
            ],
            // Meta tags - instruction
            [/(<\?)(@qualifiedName)/, [{ token: 'delimiter' }, { token: 'metatag', next: '@tag' }]],
            // Meta tags - declaration
            [/(<\!)(@qualifiedName)/, [{ token: 'delimiter' }, { token: 'metatag', next: '@tag' }]],
            // CDATA
            [/<\!\[CDATA\[/, { token: 'delimiter.cdata', next: '@cdata' }],
            [/&\w+;/, 'string.escape']
        ],
        cdata: [
            [/[^\]]+/, ''],
            [/\]\]>/, { token: 'delimiter.cdata', next: '@pop' }],
            [/\]/, '']
        ],
        tag: [
            [/[ \t\r\n]+/, ''],
            [
                /(@qualifiedName)(\s*=\s*)("[^"]*"|'[^']*')/,
                ['attribute.name', '', 'attribute.value']
            ],
            [
                /(@qualifiedName)(\s*=\s*)("[^">?\/]*|'[^'>?\/]*)(?=[\?\/]\>)/,
                ['attribute.name', '', 'attribute.value']
            ],
            [
                /(@qualifiedName)(\s*=\s*)("[^">]*|'[^'>]*)/,
                ['attribute.name', '', 'attribute.value']
            ],
            [/@qualifiedName/, 'attribute.name'],
            [/\?>/, { token: 'delimiter', next: '@pop' }],
            [/(\/)(>)/, [{ token: 'tag' }, { token: 'delimiter', next: '@pop' }]],
            [/>/, { token: 'delimiter', next: '@pop' }]
        ],
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/<!--/, { token: 'comment', next: '@comment' }]
        ],
        comment: [
            [/[^<\-]+/, 'comment.content'],
            [/-->/, { token: 'comment', next: '@pop' }],
            [/<!--/, 'comment.content.invalid'],
            [/[<\-]/, 'comment.content']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMveG1sL3htbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QztBQUNBLHNDQUFzQyxxQkFBcUIsR0FBRyw2QkFBNkI7QUFDM0Y7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQixHQUFHLGVBQWUsT0FBTyxxQkFBcUI7QUFDckY7QUFDQTtBQUNBLHdDQUF3QyxxQkFBcUIsR0FBRyxpQ0FBaUM7QUFDakc7QUFDQSx3Q0FBd0MscUJBQXFCLEdBQUcsaUNBQWlDO0FBQ2pHO0FBQ0EsOEJBQThCLDJDQUEyQztBQUN6RSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlDQUF5QztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1DQUFtQztBQUN4RCwwQkFBMEIsZUFBZSxHQUFHLG1DQUFtQztBQUMvRSxtQkFBbUIsbUNBQW1DO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxQ0FBcUM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlDQUFpQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjY4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJzwhLS0nLCAnLS0+J11cbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbWyc8JywgJz4nXV0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICc8JywgY2xvc2U6ICc+JyB9LFxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9XG4gICAgXSxcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJzwnLCBjbG9zZTogJz4nIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH1cbiAgICBdXG59O1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxuICAgIHRva2VuUG9zdGZpeDogJy54bWwnLFxuICAgIGlnbm9yZUNhc2U6IHRydWUsXG4gICAgLy8gVXNlZnVsIHJlZ3VsYXIgZXhwcmVzc2lvbnNcbiAgICBxdWFsaWZpZWROYW1lOiAvKD86W1xcd1xcLlxcLV0rOik/W1xcd1xcLlxcLV0rLyxcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgWy9bXjwmXSsvLCAnJ10sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcbiAgICAgICAgICAgIC8vIFN0YW5kYXJkIG9wZW5pbmcgdGFnXG4gICAgICAgICAgICBbLyg8KShAcXVhbGlmaWVkTmFtZSkvLCBbeyB0b2tlbjogJ2RlbGltaXRlcicgfSwgeyB0b2tlbjogJ3RhZycsIG5leHQ6ICdAdGFnJyB9XV0sXG4gICAgICAgICAgICAvLyBTdGFuZGFyZCBjbG9zaW5nIHRhZ1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8oPFxcLykoQHF1YWxpZmllZE5hbWUpKFxccyopKD4pLyxcbiAgICAgICAgICAgICAgICBbeyB0b2tlbjogJ2RlbGltaXRlcicgfSwgeyB0b2tlbjogJ3RhZycgfSwgJycsIHsgdG9rZW46ICdkZWxpbWl0ZXInIH1dXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gTWV0YSB0YWdzIC0gaW5zdHJ1Y3Rpb25cbiAgICAgICAgICAgIFsvKDxcXD8pKEBxdWFsaWZpZWROYW1lKS8sIFt7IHRva2VuOiAnZGVsaW1pdGVyJyB9LCB7IHRva2VuOiAnbWV0YXRhZycsIG5leHQ6ICdAdGFnJyB9XV0sXG4gICAgICAgICAgICAvLyBNZXRhIHRhZ3MgLSBkZWNsYXJhdGlvblxuICAgICAgICAgICAgWy8oPFxcISkoQHF1YWxpZmllZE5hbWUpLywgW3sgdG9rZW46ICdkZWxpbWl0ZXInIH0sIHsgdG9rZW46ICdtZXRhdGFnJywgbmV4dDogJ0B0YWcnIH1dXSxcbiAgICAgICAgICAgIC8vIENEQVRBXG4gICAgICAgICAgICBbLzxcXCFcXFtDREFUQVxcWy8sIHsgdG9rZW46ICdkZWxpbWl0ZXIuY2RhdGEnLCBuZXh0OiAnQGNkYXRhJyB9XSxcbiAgICAgICAgICAgIFsvJlxcdys7LywgJ3N0cmluZy5lc2NhcGUnXVxuICAgICAgICBdLFxuICAgICAgICBjZGF0YTogW1xuICAgICAgICAgICAgWy9bXlxcXV0rLywgJyddLFxuICAgICAgICAgICAgWy9cXF1cXF0+LywgeyB0b2tlbjogJ2RlbGltaXRlci5jZGF0YScsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgICAgIFsvXFxdLywgJyddXG4gICAgICAgIF0sXG4gICAgICAgIHRhZzogW1xuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rLywgJyddLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8oQHF1YWxpZmllZE5hbWUpKFxccyo9XFxzKikoXCJbXlwiXSpcInwnW14nXSonKS8sXG4gICAgICAgICAgICAgICAgWydhdHRyaWJ1dGUubmFtZScsICcnLCAnYXR0cmlidXRlLnZhbHVlJ11cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyhAcXVhbGlmaWVkTmFtZSkoXFxzKj1cXHMqKShcIlteXCI+P1xcL10qfCdbXic+P1xcL10qKSg/PVtcXD9cXC9dXFw+KS8sXG4gICAgICAgICAgICAgICAgWydhdHRyaWJ1dGUubmFtZScsICcnLCAnYXR0cmlidXRlLnZhbHVlJ11cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyhAcXVhbGlmaWVkTmFtZSkoXFxzKj1cXHMqKShcIlteXCI+XSp8J1teJz5dKikvLFxuICAgICAgICAgICAgICAgIFsnYXR0cmlidXRlLm5hbWUnLCAnJywgJ2F0dHJpYnV0ZS52YWx1ZSddXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9AcXVhbGlmaWVkTmFtZS8sICdhdHRyaWJ1dGUubmFtZSddLFxuICAgICAgICAgICAgWy9cXD8+LywgeyB0b2tlbjogJ2RlbGltaXRlcicsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgICAgIFsvKFxcLykoPikvLCBbeyB0b2tlbjogJ3RhZycgfSwgeyB0b2tlbjogJ2RlbGltaXRlcicsIG5leHQ6ICdAcG9wJyB9XV0sXG4gICAgICAgICAgICBbLz4vLCB7IHRva2VuOiAnZGVsaW1pdGVyJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICcnXSxcbiAgICAgICAgICAgIFsvPCEtLS8sIHsgdG9rZW46ICdjb21tZW50JywgbmV4dDogJ0Bjb21tZW50JyB9XVxuICAgICAgICBdLFxuICAgICAgICBjb21tZW50OiBbXG4gICAgICAgICAgICBbL1tePFxcLV0rLywgJ2NvbW1lbnQuY29udGVudCddLFxuICAgICAgICAgICAgWy8tLT4vLCB7IHRva2VuOiAnY29tbWVudCcsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgICAgIFsvPCEtLS8sICdjb21tZW50LmNvbnRlbnQuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9bPFxcLV0vLCAnY29tbWVudC5jb250ZW50J11cbiAgICAgICAgXVxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9