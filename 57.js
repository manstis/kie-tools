(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/scss/scss.js":
/*!********************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/scss/scss.js ***!
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
    wordPattern: /(#?-?\d*\.\d\w*%?)|([@$#!.:]?[\w-?]+%?)|[@#!.]/g,
    comments: {
        blockComment: ['/*', '*/'],
        lineComment: '//'
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}', notIn: ['string', 'comment'] },
        { open: '[', close: ']', notIn: ['string', 'comment'] },
        { open: '(', close: ')', notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string', 'comment'] },
        { open: "'", close: "'", notIn: ['string', 'comment'] }
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
            start: new RegExp('^\\s*\\/\\*\\s*#region\\b\\s*(.*?)\\s*\\*\\/'),
            end: new RegExp('^\\s*\\/\\*\\s*#endregion\\b.*\\*\\/')
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.scss',
    ws: '[ \t\n\r\f]*',
    identifier: '-?-?([a-zA-Z]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))([\\w\\-]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))*',
    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.bracket' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: '<', close: '>', token: 'delimiter.angle' }
    ],
    tokenizer: {
        root: [{ include: '@selector' }],
        selector: [
            { include: '@comments' },
            { include: '@import' },
            { include: '@variabledeclaration' },
            { include: '@warndebug' },
            ['[@](include)', { token: 'keyword', next: '@includedeclaration' }],
            [
                '[@](keyframes|-webkit-keyframes|-moz-keyframes|-o-keyframes)',
                { token: 'keyword', next: '@keyframedeclaration' }
            ],
            ['[@](page|content|font-face|-moz-document)', { token: 'keyword' }],
            ['[@](charset|namespace)', { token: 'keyword', next: '@declarationbody' }],
            ['[@](function)', { token: 'keyword', next: '@functiondeclaration' }],
            ['[@](mixin)', { token: 'keyword', next: '@mixindeclaration' }],
            ['url(\\-prefix)?\\(', { token: 'meta', next: '@urldeclaration' }],
            { include: '@controlstatement' },
            { include: '@selectorname' },
            ['[&\\*]', 'tag'],
            ['[>\\+,]', 'delimiter'],
            ['\\[', { token: 'delimiter.bracket', next: '@selectorattribute' }],
            ['{', { token: 'delimiter.curly', next: '@selectorbody' }]
        ],
        selectorbody: [
            ['[*_]?@identifier@ws:(?=(\\s|\\d|[^{;}]*[;}]))', 'attribute.name', '@rulevalue'],
            { include: '@selector' },
            ['[@](extend)', { token: 'keyword', next: '@extendbody' }],
            ['[@](return)', { token: 'keyword', next: '@declarationbody' }],
            ['}', { token: 'delimiter.curly', next: '@pop' }]
        ],
        selectorname: [
            ['#{', { token: 'meta', next: '@variableinterpolation' }],
            ['(\\.|#(?=[^{])|%|(@identifier)|:)+', 'tag'] // selector (.foo, div, ...)
        ],
        selectorattribute: [
            { include: '@term' },
            [']', { token: 'delimiter.bracket', next: '@pop' }]
        ],
        term: [
            { include: '@comments' },
            ['url(\\-prefix)?\\(', { token: 'meta', next: '@urldeclaration' }],
            { include: '@functioninvocation' },
            { include: '@numbers' },
            { include: '@strings' },
            { include: '@variablereference' },
            ['(and\\b|or\\b|not\\b)', 'operator'],
            { include: '@name' },
            ['([<>=\\+\\-\\*\\/\\^\\|\\~,])', 'operator'],
            [',', 'delimiter'],
            ['!default', 'literal'],
            ['\\(', { token: 'delimiter.parenthesis', next: '@parenthizedterm' }]
        ],
        rulevalue: [
            { include: '@term' },
            ['!important', 'literal'],
            [';', 'delimiter', '@pop'],
            ['{', { token: 'delimiter.curly', switchTo: '@nestedproperty' }],
            ['(?=})', { token: '', next: '@pop' }] // missing semicolon
        ],
        nestedproperty: [
            ['[*_]?@identifier@ws:', 'attribute.name', '@rulevalue'],
            { include: '@comments' },
            ['}', { token: 'delimiter.curly', next: '@pop' }]
        ],
        warndebug: [['[@](warn|debug)', { token: 'keyword', next: '@declarationbody' }]],
        import: [['[@](import)', { token: 'keyword', next: '@declarationbody' }]],
        variabledeclaration: [
            // sass variables
            ['\\$@identifier@ws:', 'variable.decl', '@declarationbody']
        ],
        urldeclaration: [
            { include: '@strings' },
            ['[^)\r\n]+', 'string'],
            ['\\)', { token: 'meta', next: '@pop' }]
        ],
        parenthizedterm: [
            { include: '@term' },
            ['\\)', { token: 'delimiter.parenthesis', next: '@pop' }]
        ],
        declarationbody: [
            { include: '@term' },
            [';', 'delimiter', '@pop'],
            ['(?=})', { token: '', next: '@pop' }] // missing semicolon
        ],
        extendbody: [
            { include: '@selectorname' },
            ['!optional', 'literal'],
            [';', 'delimiter', '@pop'],
            ['(?=})', { token: '', next: '@pop' }] // missing semicolon
        ],
        variablereference: [
            // sass variable reference
            ['\\$@identifier', 'variable.ref'],
            ['\\.\\.\\.', 'operator'],
            ['#{', { token: 'meta', next: '@variableinterpolation' }] // sass var resolve
        ],
        variableinterpolation: [
            { include: '@variablereference' },
            ['}', { token: 'meta', next: '@pop' }]
        ],
        comments: [
            ['\\/\\*', 'comment', '@comment'],
            ['\\/\\/+.*', 'comment']
        ],
        comment: [
            ['\\*\\/', 'comment', '@pop'],
            ['.', 'comment']
        ],
        name: [['@identifier', 'attribute.value']],
        numbers: [
            ['(\\d*\\.)?\\d+([eE][\\-+]?\\d+)?', { token: 'number', next: '@units' }],
            ['#[0-9a-fA-F_]+(?!\\w)', 'number.hex']
        ],
        units: [
            [
                '(em|ex|ch|rem|vmin|vmax|vw|vh|vm|cm|mm|in|px|pt|pc|deg|grad|rad|turn|s|ms|Hz|kHz|%)?',
                'number',
                '@pop'
            ]
        ],
        functiondeclaration: [
            ['@identifier@ws\\(', { token: 'meta', next: '@parameterdeclaration' }],
            ['{', { token: 'delimiter.curly', switchTo: '@functionbody' }]
        ],
        mixindeclaration: [
            // mixin with parameters
            ['@identifier@ws\\(', { token: 'meta', next: '@parameterdeclaration' }],
            // mixin without parameters
            ['@identifier', 'meta'],
            ['{', { token: 'delimiter.curly', switchTo: '@selectorbody' }]
        ],
        parameterdeclaration: [
            ['\\$@identifier@ws:', 'variable.decl'],
            ['\\.\\.\\.', 'operator'],
            [',', 'delimiter'],
            { include: '@term' },
            ['\\)', { token: 'meta', next: '@pop' }]
        ],
        includedeclaration: [
            { include: '@functioninvocation' },
            ['@identifier', 'meta'],
            [';', 'delimiter', '@pop'],
            ['(?=})', { token: '', next: '@pop' }],
            ['{', { token: 'delimiter.curly', switchTo: '@selectorbody' }]
        ],
        keyframedeclaration: [
            ['@identifier', 'meta'],
            ['{', { token: 'delimiter.curly', switchTo: '@keyframebody' }]
        ],
        keyframebody: [
            { include: '@term' },
            ['{', { token: 'delimiter.curly', next: '@selectorbody' }],
            ['}', { token: 'delimiter.curly', next: '@pop' }]
        ],
        controlstatement: [
            [
                '[@](if|else|for|while|each|media)',
                { token: 'keyword.flow', next: '@controlstatementdeclaration' }
            ]
        ],
        controlstatementdeclaration: [
            ['(in|from|through|if|to)\\b', { token: 'keyword.flow' }],
            { include: '@term' },
            ['{', { token: 'delimiter.curly', switchTo: '@selectorbody' }]
        ],
        functionbody: [
            ['[@](return)', { token: 'keyword' }],
            { include: '@variabledeclaration' },
            { include: '@term' },
            { include: '@controlstatement' },
            [';', 'delimiter'],
            ['}', { token: 'delimiter.curly', next: '@pop' }]
        ],
        functioninvocation: [['@identifier\\(', { token: 'meta', next: '@functionarguments' }]],
        functionarguments: [
            ['\\$@identifier@ws:', 'attribute.name'],
            ['[,]', 'delimiter'],
            { include: '@term' },
            ['\\)', { token: 'meta', next: '@pop' }]
        ],
        strings: [
            ['~?"', { token: 'string.delimiter', next: '@stringenddoublequote' }],
            ["~?'", { token: 'string.delimiter', next: '@stringendquote' }]
        ],
        stringenddoublequote: [
            ['\\\\.', 'string'],
            ['"', { token: 'string.delimiter', next: '@pop' }],
            ['.', 'string']
        ],
        stringendquote: [
            ['\\\\.', 'string'],
            ["'", { token: 'string.delimiter', next: '@pop' }],
            ['.', 'string']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvc2Nzcy9zY3NzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxpQ0FBaUM7QUFDL0QsU0FBUyxzREFBc0Q7QUFDL0QsU0FBUyxzREFBc0Q7QUFDL0QsU0FBUyxzREFBc0Q7QUFDL0QsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsSUFBSSxtREFBbUQsSUFBSTtBQUM3RztBQUNBLFNBQVMsU0FBUyxZQUFZLDZCQUE2QjtBQUMzRCxTQUFTLG9EQUFvRDtBQUM3RCxTQUFTLHdEQUF3RDtBQUNqRSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGdCQUFnQix1QkFBdUI7QUFDdkM7QUFDQSxhQUFhLHVCQUF1QjtBQUNwQyxhQUFhLHFCQUFxQjtBQUNsQyxhQUFhLGtDQUFrQztBQUMvQyxhQUFhLHdCQUF3QjtBQUNyQyw4QkFBOEIsZ0RBQWdEO0FBQzlFO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSwyREFBMkQsbUJBQW1CO0FBQzlFLHdDQUF3Qyw2Q0FBNkM7QUFDckYsK0JBQStCLGlEQUFpRDtBQUNoRiw0QkFBNEIsOENBQThDO0FB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QUNBLGFBQWEsbUJBQW1CO0FBQ2hDLHFCQUFxQiw4QkFBOEI7QUFDbkQ7QUFDQTtBQUNBLHFCQUFxQiwyREFBMkQ7QUFDaEYscUJBQXFCLHFEQUFxRDtBQUMxRTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMENBQTBDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBDQUEwQztBQUM3RDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiI1Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIHdvcmRQYXR0ZXJuOiAvKCM/LT9cXGQqXFwuXFxkXFx3KiU/KXwoW0AkIyEuOl0/W1xcdy0/XSslPyl8W0AjIS5dL2csXG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJy8qJywgJyovJ10sXG4gICAgICAgIGxpbmVDb21tZW50OiAnLy8nXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJ3snLCAnfSddLFxuICAgICAgICBbJ1snLCAnXSddLFxuICAgICAgICBbJygnLCAnKSddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZycsICdjb21tZW50J10gfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH1cbiAgICBdLFxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfVxuICAgIF0sXG4gICAgZm9sZGluZzoge1xuICAgICAgICBtYXJrZXJzOiB7XG4gICAgICAgICAgICBzdGFydDogbmV3IFJlZ0V4cCgnXlxcXFxzKlxcXFwvXFxcXCpcXFxccyojcmVnaW9uXFxcXGJcXFxccyooLio/KVxcXFxzKlxcXFwqXFxcXC8nKSxcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cCgnXlxcXFxzKlxcXFwvXFxcXCpcXFxccyojZW5kcmVnaW9uXFxcXGIuKlxcXFwqXFxcXC8nKVxuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgZGVmYXVsdFRva2VuOiAnJyxcbiAgICB0b2tlblBvc3RmaXg6ICcuc2NzcycsXG4gICAgd3M6ICdbIFxcdFxcblxcclxcZl0qJyxcbiAgICBpZGVudGlmaWVyOiAnLT8tPyhbYS16QS1aXXwoXFxcXFxcXFwoKFswLTlhLWZBLUZdezEsNn1cXFxccz8pfFteWzAtOWEtZkEtRl0pKSkoW1xcXFx3XFxcXC1dfChcXFxcXFxcXCgoWzAtOWEtZkEtRl17MSw2fVxcXFxzPyl8W15bMC05YS1mQS1GXSkpKSonLFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCB0b2tlbjogJ2RlbGltaXRlci5jdXJseScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScsIHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfSxcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicsIHRva2VuOiAnZGVsaW1pdGVyLmFuZ2xlJyB9XG4gICAgXSxcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW3sgaW5jbHVkZTogJ0BzZWxlY3RvcicgfV0sXG4gICAgICAgIHNlbGVjdG9yOiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tbWVudHMnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAaW1wb3J0JyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHZhcmlhYmxlZGVjbGFyYXRpb24nIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2FybmRlYnVnJyB9LFxuICAgICAgICAgICAgWydbQF0oaW5jbHVkZSknLCB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAaW5jbHVkZWRlY2xhcmF0aW9uJyB9XSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAnW0BdKGtleWZyYW1lc3wtd2Via2l0LWtleWZyYW1lc3wtbW96LWtleWZyYW1lc3wtby1rZXlmcmFtZXMpJyxcbiAgICAgICAgICAgICAgICB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAa2V5ZnJhbWVkZWNsYXJhdGlvbicgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsnW0BdKHBhZ2V8Y29udGVudHxmb250LWZhY2V8LW1vei1kb2N1bWVudCknLCB7IHRva2VuOiAna2V5d29yZCcgfV0sXG4gICAgICAgICAgICBbJ1tAXShjaGFyc2V0fG5hbWVzcGFjZSknLCB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAZGVjbGFyYXRpb25ib2R5JyB9XSxcbiAgICAgICAgICAgIFsnW0BdKGZ1bmN0aW9uKScsIHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0BmdW5jdGlvbmRlY2xhcmF0aW9uJyB9XSxcbiAgICAgICAgICAgIFsnW0BdKG1peGluKScsIHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0BtaXhpbmRlY2xhcmF0aW9uJyB9XSxcbiAgICAgICAgICAgIFsndXJsKFxcXFwtcHJlZml4KT9cXFxcKCcsIHsgdG9rZW46ICdtZXRhJywgbmV4dDogJ0B1cmxkZWNsYXJhdGlvbicgfV0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29udHJvbHN0YXRlbWVudCcgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzZWxlY3Rvcm5hbWUnIH0sXG4gICAgICAgICAgICBbJ1smXFxcXCpdJywgJ3RhZyddLFxuICAgICAgICAgICAgWydbPlxcXFwrLF0nLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbJ1xcXFxbJywgeyB0b2tlbjogJ2RlbGltaXRlci5icmFja2V0JywgbmV4dDogJ0BzZWxlY3RvcmF0dHJpYnV0ZScgfV0sXG4gICAgICAgICAgICBbJ3snLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JywgbmV4dDogJ0BzZWxlY3RvcmJvZHknIH1dXG4gICAgICAgIF0sXG4gICAgICAgIHNlbGVjdG9yYm9keTogW1xuICAgICAgICAgICAgWydbKl9dP0BpZGVudGlmaWVyQHdzOig/PShcXFxcc3xcXFxcZHxbXns7fV0qWzt9XSkpJywgJ2F0dHJpYnV0ZS5uYW1lJywgJ0BydWxldmFsdWUnXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzZWxlY3RvcicgfSxcbiAgICAgICAgICAgIFsnW0BdKGV4dGVuZCknLCB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAZXh0ZW5kYm9keScgfV0sXG4gICAgICAgICAgICBbJ1tAXShyZXR1cm4pJywgeyB0b2tlbjogJ2tleXdvcmQnLCBuZXh0OiAnQGRlY2xhcmF0aW9uYm9keScgfV0sXG4gICAgICAgICAgICBbJ30nLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIHNlbGVjdG9ybmFtZTogW1xuICAgICAgICAgICAgWycjeycsIHsgdG9rZW46ICdtZXRhJywgbmV4dDogJ0B2YXJpYWJsZWludGVycG9sYXRpb24nIH1dLFxuICAgICAgICAgICAgWycoXFxcXC58Iyg/PVtee10pfCV8KEBpZGVudGlmaWVyKXw6KSsnLCAndGFnJ10gLy8gc2VsZWN0b3IgKC5mb28sIGRpdiwgLi4uKVxuICAgICAgICBdLFxuICAgICAgICBzZWxlY3RvcmF0dHJpYnV0ZTogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXG4gICAgICAgICAgICBbJ10nLCB7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgdGVybTogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbW1lbnRzJyB9LFxuICAgICAgICAgICAgWyd1cmwoXFxcXC1wcmVmaXgpP1xcXFwoJywgeyB0b2tlbjogJ21ldGEnLCBuZXh0OiAnQHVybGRlY2xhcmF0aW9uJyB9XSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BmdW5jdGlvbmludm9jYXRpb24nIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAbnVtYmVycycgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzdHJpbmdzJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHZhcmlhYmxlcmVmZXJlbmNlJyB9LFxuICAgICAgICAgICAgWycoYW5kXFxcXGJ8b3JcXFxcYnxub3RcXFxcYiknLCAnb3BlcmF0b3InXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BuYW1lJyB9LFxuICAgICAgICAgICAgWycoWzw+PVxcXFwrXFxcXC1cXFxcKlxcXFwvXFxcXF5cXFxcfFxcXFx+LF0pJywgJ29wZXJhdG9yJ10sXG4gICAgICAgICAgICBbJywnLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbJyFkZWZhdWx0JywgJ2xpdGVyYWwnXSxcbiAgICAgICAgICAgIFsnXFxcXCgnLCB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgbmV4dDogJ0BwYXJlbnRoaXplZHRlcm0nIH1dXG4gICAgICAgIF0sXG4gICAgICAgIHJ1bGV2YWx1ZTogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXG4gICAgICAgICAgICBbJyFpbXBvcnRhbnQnLCAnbGl0ZXJhbCddLFxuICAgICAgICAgICAgWyc7JywgJ2RlbGltaXRlcicsICdAcG9wJ10sXG4gICAgICAgICAgICBbJ3snLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5Jywgc3dpdGNoVG86ICdAbmVzdGVkcHJvcGVydHknIH1dLFxuICAgICAgICAgICAgWycoPz19KScsIHsgdG9rZW46ICcnLCBuZXh0OiAnQHBvcCcgfV0gLy8gbWlzc2luZyBzZW1pY29sb25cbiAgICAgICAgXSxcbiAgICAgICAgbmVzdGVkcHJvcGVydHk6IFtcbiAgICAgICAgICAgIFsnWypfXT9AaWRlbnRpZmllckB3czonLCAnYXR0cmlidXRlLm5hbWUnLCAnQHJ1bGV2YWx1ZSddLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbW1lbnRzJyB9LFxuICAgICAgICAgICAgWyd9JywgeyB0b2tlbjogJ2RlbGltaXRlci5jdXJseScsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICB3YXJuZGVidWc6IFtbJ1tAXSh3YXJufGRlYnVnKScsIHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0BkZWNsYXJhdGlvbmJvZHknIH1dXSxcbiAgICAgICAgaW1wb3J0OiBbWydbQF0oaW1wb3J0KScsIHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0BkZWNsYXJhdGlvbmJvZHknIH1dXSxcbiAgICAgICAgdmFyaWFibGVkZWNsYXJhdGlvbjogW1xuICAgICAgICAgICAgLy8gc2FzcyB2YXJpYWJsZXNcbiAgICAgICAgICAgIFsnXFxcXCRAaWRlbnRpZmllckB3czonLCAndmFyaWFibGUuZGVjbCcsICdAZGVjbGFyYXRpb25ib2R5J11cbiAgICAgICAgXSxcbiAgICAgICAgdXJsZGVjbGFyYXRpb246IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzdHJpbmdzJyB9LFxuICAgICAgICAgICAgWydbXilcXHJcXG5dKycsICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsnXFxcXCknLCB7IHRva2VuOiAnbWV0YScsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICBwYXJlbnRoaXplZHRlcm06IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0ZXJtJyB9LFxuICAgICAgICAgICAgWydcXFxcKScsIHsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgZGVjbGFyYXRpb25ib2R5OiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGVybScgfSxcbiAgICAgICAgICAgIFsnOycsICdkZWxpbWl0ZXInLCAnQHBvcCddLFxuICAgICAgICAgICAgWycoPz19KScsIHsgdG9rZW46ICcnLCBuZXh0OiAnQHBvcCcgfV0gLy8gbWlzc2luZyBzZW1pY29sb25cbiAgICAgICAgXSxcbiAgICAgICAgZXh0ZW5kYm9keTogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHNlbGVjdG9ybmFtZScgfSxcbiAgICAgICAgICAgIFsnIW9wdGlvbmFsJywgJ2xpdGVyYWwnXSxcbiAgICAgICAgICAgIFsnOycsICdkZWxpbWl0ZXInLCAnQHBvcCddLFxuICAgICAgICAgICAgWycoPz19KScsIHsgdG9rZW46ICcnLCBuZXh0OiAnQHBvcCcgfV0gLy8gbWlzc2luZyBzZW1pY29sb25cbiAgICAgICAgXSxcbiAgICAgICAgdmFyaWFibGVyZWZlcmVuY2U6IFtcbiAgICAgICAgICAgIC8vIHNhc3MgdmFyaWFibGUgcmVmZXJlbmNlXG4gICAgICAgICAgICBbJ1xcXFwkQGlkZW50aWZpZXInLCAndmFyaWFibGUucmVmJ10sXG4gICAgICAgICAgICBbJ1xcXFwuXFxcXC5cXFxcLicsICdvcGVyYXRvciddLFxuICAgICAgICAgICAgWycjeycsIHsgdG9rZW46ICdtZXRhJywgbmV4dDogJ0B2YXJpYWJsZWludGVycG9sYXRpb24nIH1dIC8vIHNhc3MgdmFyIHJlc29sdmVcbiAgICAgICAgXSxcbiAgICAgICAgdmFyaWFibGVpbnRlcnBvbGF0aW9uOiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdmFyaWFibGVyZWZlcmVuY2UnIH0sXG4gICAgICAgICAgICBbJ30nLCB7IHRva2VuOiAnbWV0YScsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICBjb21tZW50czogW1xuICAgICAgICAgICAgWydcXFxcL1xcXFwqJywgJ2NvbW1lbnQnLCAnQGNvbW1lbnQnXSxcbiAgICAgICAgICAgIFsnXFxcXC9cXFxcLysuKicsICdjb21tZW50J11cbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudDogW1xuICAgICAgICAgICAgWydcXFxcKlxcXFwvJywgJ2NvbW1lbnQnLCAnQHBvcCddLFxuICAgICAgICAgICAgWycuJywgJ2NvbW1lbnQnXVxuICAgICAgICBdLFxuICAgICAgICBuYW1lOiBbWydAaWRlbnRpZmllcicsICdhdHRyaWJ1dGUudmFsdWUnXV0sXG4gICAgICAgIG51bWJlcnM6IFtcbiAgICAgICAgICAgIFsnKFxcXFxkKlxcXFwuKT9cXFxcZCsoW2VFXVtcXFxcLStdP1xcXFxkKyk/JywgeyB0b2tlbjogJ251bWJlcicsIG5leHQ6ICdAdW5pdHMnIH1dLFxuICAgICAgICAgICAgWycjWzAtOWEtZkEtRl9dKyg/IVxcXFx3KScsICdudW1iZXIuaGV4J11cbiAgICAgICAgXSxcbiAgICAgICAgdW5pdHM6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAnKGVtfGV4fGNofHJlbXx2bWlufHZtYXh8dnd8dmh8dm18Y218bW18aW58cHh8cHR8cGN8ZGVnfGdyYWR8cmFkfHR1cm58c3xtc3xIenxrSHp8JSk/JyxcbiAgICAgICAgICAgICAgICAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICAnQHBvcCdcbiAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgZnVuY3Rpb25kZWNsYXJhdGlvbjogW1xuICAgICAgICAgICAgWydAaWRlbnRpZmllckB3c1xcXFwoJywgeyB0b2tlbjogJ21ldGEnLCBuZXh0OiAnQHBhcmFtZXRlcmRlY2xhcmF0aW9uJyB9XSxcbiAgICAgICAgICAgIFsneycsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBzd2l0Y2hUbzogJ0BmdW5jdGlvbmJvZHknIH1dXG4gICAgICAgIF0sXG4gICAgICAgIG1peGluZGVjbGFyYXRpb246IFtcbiAgICAgICAgICAgIC8vIG1peGluIHdpdGggcGFyYW1ldGVyc1xuICAgICAgICAgICAgWydAaWRlbnRpZmllckB3c1xcXFwoJywgeyB0b2tlbjogJ21ldGEnLCBuZXh0OiAnQHBhcmFtZXRlcmRlY2xhcmF0aW9uJyB9XSxcbiAgICAgICAgICAgIC8vIG1peGluIHdpdGhvdXQgcGFyYW1ldGVyc1xuICAgICAgICAgICAgWydAaWRlbnRpZmllcicsICdtZXRhJ10sXG4gICAgICAgICAgICBbJ3snLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5Jywgc3dpdGNoVG86ICdAc2VsZWN0b3Jib2R5JyB9XVxuICAgICAgICBdLFxuICAgICAgICBwYXJhbWV0ZXJkZWNsYXJhdGlvbjogW1xuICAgICAgICAgICAgWydcXFxcJEBpZGVudGlmaWVyQHdzOicsICd2YXJpYWJsZS5kZWNsJ10sXG4gICAgICAgICAgICBbJ1xcXFwuXFxcXC5cXFxcLicsICdvcGVyYXRvciddLFxuICAgICAgICAgICAgWycsJywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXG4gICAgICAgICAgICBbJ1xcXFwpJywgeyB0b2tlbjogJ21ldGEnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgaW5jbHVkZWRlY2xhcmF0aW9uOiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAZnVuY3Rpb25pbnZvY2F0aW9uJyB9LFxuICAgICAgICAgICAgWydAaWRlbnRpZmllcicsICdtZXRhJ10sXG4gICAgICAgICAgICBbJzsnLCAnZGVsaW1pdGVyJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsnKD89fSknLCB7IHRva2VuOiAnJywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICAgICAgWyd7JywgeyB0b2tlbjogJ2RlbGltaXRlci5jdXJseScsIHN3aXRjaFRvOiAnQHNlbGVjdG9yYm9keScgfV1cbiAgICAgICAgXSxcbiAgICAgICAga2V5ZnJhbWVkZWNsYXJhdGlvbjogW1xuICAgICAgICAgICAgWydAaWRlbnRpZmllcicsICdtZXRhJ10sXG4gICAgICAgICAgICBbJ3snLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5Jywgc3dpdGNoVG86ICdAa2V5ZnJhbWVib2R5JyB9XVxuICAgICAgICBdLFxuICAgICAgICBrZXlmcmFtZWJvZHk6IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0ZXJtJyB9LFxuICAgICAgICAgICAgWyd7JywgeyB0b2tlbjogJ2RlbGltaXRlci5jdXJseScsIG5leHQ6ICdAc2VsZWN0b3Jib2R5JyB9XSxcbiAgICAgICAgICAgIFsnfScsIHsgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgY29udHJvbHN0YXRlbWVudDogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICdbQF0oaWZ8ZWxzZXxmb3J8d2hpbGV8ZWFjaHxtZWRpYSknLFxuICAgICAgICAgICAgICAgIHsgdG9rZW46ICdrZXl3b3JkLmZsb3cnLCBuZXh0OiAnQGNvbnRyb2xzdGF0ZW1lbnRkZWNsYXJhdGlvbicgfVxuICAgICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBjb250cm9sc3RhdGVtZW50ZGVjbGFyYXRpb246IFtcbiAgICAgICAgICAgIFsnKGlufGZyb218dGhyb3VnaHxpZnx0bylcXFxcYicsIHsgdG9rZW46ICdrZXl3b3JkLmZsb3cnIH1dLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXG4gICAgICAgICAgICBbJ3snLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5Jywgc3dpdGNoVG86ICdAc2VsZWN0b3Jib2R5JyB9XVxuICAgICAgICBdLFxuICAgICAgICBmdW5jdGlvbmJvZHk6IFtcbiAgICAgICAgICAgIFsnW0BdKHJldHVybiknLCB7IHRva2VuOiAna2V5d29yZCcgfV0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdmFyaWFibGVkZWNsYXJhdGlvbicgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0ZXJtJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbnRyb2xzdGF0ZW1lbnQnIH0sXG4gICAgICAgICAgICBbJzsnLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbJ30nLCB7IHRva2VuOiAnZGVsaW1pdGVyLmN1cmx5JywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIGZ1bmN0aW9uaW52b2NhdGlvbjogW1snQGlkZW50aWZpZXJcXFxcKCcsIHsgdG9rZW46ICdtZXRhJywgbmV4dDogJ0BmdW5jdGlvbmFyZ3VtZW50cycgfV1dLFxuICAgICAgICBmdW5jdGlvbmFyZ3VtZW50czogW1xuICAgICAgICAgICAgWydcXFxcJEBpZGVudGlmaWVyQHdzOicsICdhdHRyaWJ1dGUubmFtZSddLFxuICAgICAgICAgICAgWydbLF0nLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGVybScgfSxcbiAgICAgICAgICAgIFsnXFxcXCknLCB7IHRva2VuOiAnbWV0YScsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmdzOiBbXG4gICAgICAgICAgICBbJ34/XCInLCB7IHRva2VuOiAnc3RyaW5nLmRlbGltaXRlcicsIG5leHQ6ICdAc3RyaW5nZW5kZG91YmxlcXVvdGUnIH1dLFxuICAgICAgICAgICAgW1wifj8nXCIsIHsgdG9rZW46ICdzdHJpbmcuZGVsaW1pdGVyJywgbmV4dDogJ0BzdHJpbmdlbmRxdW90ZScgfV1cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nZW5kZG91YmxlcXVvdGU6IFtcbiAgICAgICAgICAgIFsnXFxcXFxcXFwuJywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWydcIicsIHsgdG9rZW46ICdzdHJpbmcuZGVsaW1pdGVyJywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICAgICAgWycuJywgJ3N0cmluZyddXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZ2VuZHF1b3RlOiBbXG4gICAgICAgICAgICBbJ1xcXFxcXFxcLicsICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFtcIidcIiwgeyB0b2tlbjogJ3N0cmluZy5kZWxpbWl0ZXInLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbJy4nLCAnc3RyaW5nJ11cbiAgICAgICAgXVxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9