(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/css/css.js":
/*!******************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/css/css.js ***!
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
    wordPattern: /(#?-?\d*\.\d\w*%?)|((::|[@#.!:])?[\w-?]+%?)|::|[@#.!:]/g,
    comments: {
        blockComment: ['/*', '*/']
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
    tokenPostfix: '.css',
    ws: '[ \t\n\r\f]*',
    identifier: '-?-?([a-zA-Z]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))([\\w\\-]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))*',
    brackets: [
        { open: '{', close: '}', token: 'delimiter.bracket' },
        { open: '[', close: ']', token: 'delimiter.bracket' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: '<', close: '>', token: 'delimiter.angle' }
    ],
    tokenizer: {
        root: [{ include: '@selector' }],
        selector: [
            { include: '@comments' },
            { include: '@import' },
            { include: '@strings' },
            [
                '[@](keyframes|-webkit-keyframes|-moz-keyframes|-o-keyframes)',
                { token: 'keyword', next: '@keyframedeclaration' }
            ],
            ['[@](page|content|font-face|-moz-document)', { token: 'keyword' }],
            ['[@](charset|namespace)', { token: 'keyword', next: '@declarationbody' }],
            [
                '(url-prefix)(\\()',
                ['attribute.value', { token: 'delimiter.parenthesis', next: '@urldeclaration' }]
            ],
            [
                '(url)(\\()',
                ['attribute.value', { token: 'delimiter.parenthesis', next: '@urldeclaration' }]
            ],
            { include: '@selectorname' },
            ['[\\*]', 'tag'],
            ['[>\\+,]', 'delimiter'],
            ['\\[', { token: 'delimiter.bracket', next: '@selectorattribute' }],
            ['{', { token: 'delimiter.bracket', next: '@selectorbody' }]
        ],
        selectorbody: [
            { include: '@comments' },
            ['[*_]?@identifier@ws:(?=(\\s|\\d|[^{;}]*[;}]))', 'attribute.name', '@rulevalue'],
            ['}', { token: 'delimiter.bracket', next: '@pop' }]
        ],
        selectorname: [
            ['(\\.|#(?=[^{])|%|(@identifier)|:)+', 'tag'] // selector (.foo, div, ...)
        ],
        selectorattribute: [
            { include: '@term' },
            [']', { token: 'delimiter.bracket', next: '@pop' }]
        ],
        term: [
            { include: '@comments' },
            [
                '(url-prefix)(\\()',
                ['attribute.value', { token: 'delimiter.parenthesis', next: '@urldeclaration' }]
            ],
            [
                '(url)(\\()',
                ['attribute.value', { token: 'delimiter.parenthesis', next: '@urldeclaration' }]
            ],
            { include: '@functioninvocation' },
            { include: '@numbers' },
            { include: '@name' },
            ['([<>=\\+\\-\\*\\/\\^\\|\\~,])', 'delimiter'],
            [',', 'delimiter']
        ],
        rulevalue: [
            { include: '@comments' },
            { include: '@strings' },
            { include: '@term' },
            ['!important', 'keyword'],
            [';', 'delimiter', '@pop'],
            ['(?=})', { token: '', next: '@pop' }] // missing semicolon
        ],
        warndebug: [['[@](warn|debug)', { token: 'keyword', next: '@declarationbody' }]],
        import: [['[@](import)', { token: 'keyword', next: '@declarationbody' }]],
        urldeclaration: [
            { include: '@strings' },
            ['[^)\r\n]+', 'string'],
            ['\\)', { token: 'delimiter.parenthesis', next: '@pop' }]
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
        comments: [
            ['\\/\\*', 'comment', '@comment'],
            ['\\/\\/+.*', 'comment']
        ],
        comment: [
            ['\\*\\/', 'comment', '@pop'],
            [/[^*/]+/, 'comment'],
            [/./, 'comment']
        ],
        name: [['@identifier', 'attribute.value']],
        numbers: [
            [
                '-?(\\d*\\.)?\\d+([eE][\\-+]?\\d+)?',
                { token: 'attribute.value.number', next: '@units' }
            ],
            ['#[0-9a-fA-F_]+(?!\\w)', 'attribute.value.hex']
        ],
        units: [
            [
                '(em|ex|ch|rem|vmin|vmax|vw|vh|vm|cm|mm|in|px|pt|pc|deg|grad|rad|turn|s|ms|Hz|kHz|%)?',
                'attribute.value.unit',
                '@pop'
            ]
        ],
        keyframedeclaration: [
            ['@identifier', 'attribute.value'],
            ['{', { token: 'delimiter.bracket', switchTo: '@keyframebody' }]
        ],
        keyframebody: [
            { include: '@term' },
            ['{', { token: 'delimiter.bracket', next: '@selectorbody' }],
            ['}', { token: 'delimiter.bracket', next: '@pop' }]
        ],
        functioninvocation: [
            ['@identifier\\(', { token: 'attribute.value', next: '@functionarguments' }]
        ],
        functionarguments: [
            ['\\$@identifier@ws:', 'attribute.name'],
            ['[,]', 'delimiter'],
            { include: '@term' },
            ['\\)', { token: 'attribute.value', next: '@pop' }]
        ],
        strings: [
            ['~?"', { token: 'string', next: '@stringenddoublequote' }],
            ["~?'", { token: 'string', next: '@stringendquote' }]
        ],
        stringenddoublequote: [
            ['\\\\.', 'string'],
            ['"', { token: 'string', next: '@pop' }],
            [/[^\\"]+/, 'string'],
            ['.', 'string']
        ],
        stringendquote: [
            ['\\\\.', 'string'],
            ["'", { token: 'string', next: '@pop' }],
            [/[^\\']+/, 'string'],
            ['.', 'string']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvY3NzL2Nzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLGlDQUFpQztBQUMvRCxTQUFTLHNEQUFzRDtBQUMvRCxTQUFTLHNEQUFzRDtBQUMvRCxTQUFTLHNEQUFzRDtBQUMvRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxJQUFJLG1EQUFtRCxJQUFJO0FBQzdHO0FBQ0EsU0FBUyxTQUFTLFlBQVksK0JBQStCO0FBQzdELFNBQVMsb0RBQW9EO0FBQzdELFNBQVMsd0RBQXdEO0FBQ2pFLFNBQVM7QUFDVDtBQUNBO0FBQ0EsZ0JBQWdCLHVCQUF1QjtBQUN2QztBQUNBLGFBQWEsdUJBQXVCO0FBQ3BDLGFBQWEscUJBQXFCO0FBQ2xDLGFBQWEsc0JBQXNCO0FBQ25DO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSwyREFBMkQsbUJBQW1CO0FBQzlFLHdDQUF3Qyw2Q0FBNkM7QUFDckY7QUFDQTtBQUNBLHFDQUFxQywwREFBMEQ7QUFDL0Y7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDBEQUEwRDtBQUMvRjtBQUNBLGFBQWEsMkJBQTJCO0FBQ3hDO0FBQ0E7QUFDQSxxQkFBcUIseURBQXlEO0FBQzlFLGVBQWUsSUFBSSxvREFBb0Q7QUFDdkU7QUFDQTtBQUNBLGFBQWEsdUJBQXVCO0FBQ3BDLG1EQUFtRCxLQUFLO0FBQ3hELGVBQWUsSUFBSSwyQ0FBMkM7QUFDOUQ7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEMsbUJBQW1CLDJDQUEyQztBQUM5RDtBQUNBO0FBQ0EsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBLHFDQUFxQywwREFBMEQ7QUFDL0Y7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDBEQUEwRDtBQUMvRjtBQUNBLGFBQWEsaUNBQWlDO0FBQzlDLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsbUJBQW1CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx1QkFBdUI7QUFDcEMsYUFBYSxzQkFBc0I7QUFDbkMsYUFBYSxtQkFBbUI7QUFDaEM7QUFDQSxlQUFlO0FBQ2Ysa0JBQWtCLEtBQUssMEJBQTBCO0FBQ2pEO0FBQ0EseUNBQXlDLDZDQUE2QztBQUN0RixrQ0FBa0MsNkNBQTZDO0FBQy9FO0FBQ0EsYUFBYSxzQkFBc0I7QUFDbkM7QUFDQSxxQkFBcUIsK0NBQStDO0FBQ3BFO0FBQ0E7QUFDQSxhQUFhLG1CQUFtQjtBQUNoQyxxQkFBcUIsK0NBQStDO0FBQ3BFO0FBQ0E7QUFDQSxhQUFhLG1CQUFtQjtBQUNoQyxlQUFlO0FBQ2Ysa0JBQWtCLEtBQUssMEJBQTBCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxJQUFJLHdEQUF3RDtBQUMzRTtBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEMsZUFBZSxJQUFJLG9EQUFvRDtBQUN2RSxlQUFlLElBQUksMkNBQTJDO0FBQzlEO0FBQ0E7QUFDQSxnQ0FBZ0MsdURBQXVEO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEMscUJBQXFCLHlDQUF5QztBQUM5RDtBQUNBO0FBQ0EscUJBQXFCLGlEQUFpRDtBQUN0RSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQ0FBZ0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQ0FBZ0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIxNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIHdvcmRQYXR0ZXJuOiAvKCM/LT9cXGQqXFwuXFxkXFx3KiU/KXwoKDo6fFtAIy4hOl0pP1tcXHctP10rJT8pfDo6fFtAIy4hOl0vZyxcbiAgICBjb21tZW50czoge1xuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnLyonLCAnKi8nXVxuICAgIH0sXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgWyd7JywgJ30nXSxcbiAgICAgICAgWydbJywgJ10nXSxcbiAgICAgICAgWycoJywgJyknXVxuICAgIF0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9Jywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJywgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiwgbm90SW46IFsnc3RyaW5nJywgJ2NvbW1lbnQnXSB9XG4gICAgXSxcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH1cbiAgICBdLFxuICAgIGZvbGRpbmc6IHtcbiAgICAgICAgbWFya2Vyczoge1xuICAgICAgICAgICAgc3RhcnQ6IG5ldyBSZWdFeHAoJ15cXFxccypcXFxcL1xcXFwqXFxcXHMqI3JlZ2lvblxcXFxiXFxcXHMqKC4qPylcXFxccypcXFxcKlxcXFwvJyksXG4gICAgICAgICAgICBlbmQ6IG5ldyBSZWdFeHAoJ15cXFxccypcXFxcL1xcXFwqXFxcXHMqI2VuZHJlZ2lvblxcXFxiLipcXFxcKlxcXFwvJylcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLmNzcycsXG4gICAgd3M6ICdbIFxcdFxcblxcclxcZl0qJyxcbiAgICBpZGVudGlmaWVyOiAnLT8tPyhbYS16QS1aXXwoXFxcXFxcXFwoKFswLTlhLWZBLUZdezEsNn1cXFxccz8pfFteWzAtOWEtZkEtRl0pKSkoW1xcXFx3XFxcXC1dfChcXFxcXFxcXCgoWzAtOWEtZkEtRl17MSw2fVxcXFxzPyl8W15bMC05YS1mQS1GXSkpKSonLFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nLCB0b2tlbjogJ2RlbGltaXRlci5icmFja2V0JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9LFxuICAgICAgICB7IG9wZW46ICc8JywgY2xvc2U6ICc+JywgdG9rZW46ICdkZWxpbWl0ZXIuYW5nbGUnIH1cbiAgICBdLFxuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbeyBpbmNsdWRlOiAnQHNlbGVjdG9yJyB9XSxcbiAgICAgICAgc2VsZWN0b3I6IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Bjb21tZW50cycgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BpbXBvcnQnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc3RyaW5ncycgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAnW0BdKGtleWZyYW1lc3wtd2Via2l0LWtleWZyYW1lc3wtbW96LWtleWZyYW1lc3wtby1rZXlmcmFtZXMpJyxcbiAgICAgICAgICAgICAgICB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAa2V5ZnJhbWVkZWNsYXJhdGlvbicgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsnW0BdKHBhZ2V8Y29udGVudHxmb250LWZhY2V8LW1vei1kb2N1bWVudCknLCB7IHRva2VuOiAna2V5d29yZCcgfV0sXG4gICAgICAgICAgICBbJ1tAXShjaGFyc2V0fG5hbWVzcGFjZSknLCB7IHRva2VuOiAna2V5d29yZCcsIG5leHQ6ICdAZGVjbGFyYXRpb25ib2R5JyB9XSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAnKHVybC1wcmVmaXgpKFxcXFwoKScsXG4gICAgICAgICAgICAgICAgWydhdHRyaWJ1dGUudmFsdWUnLCB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgbmV4dDogJ0B1cmxkZWNsYXJhdGlvbicgfV1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgJyh1cmwpKFxcXFwoKScsXG4gICAgICAgICAgICAgICAgWydhdHRyaWJ1dGUudmFsdWUnLCB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgbmV4dDogJ0B1cmxkZWNsYXJhdGlvbicgfV1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc2VsZWN0b3JuYW1lJyB9LFxuICAgICAgICAgICAgWydbXFxcXCpdJywgJ3RhZyddLFxuICAgICAgICAgICAgWydbPlxcXFwrLF0nLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbJ1xcXFxbJywgeyB0b2tlbjogJ2RlbGltaXRlci5icmFja2V0JywgbmV4dDogJ0BzZWxlY3RvcmF0dHJpYnV0ZScgfV0sXG4gICAgICAgICAgICBbJ3snLCB7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnLCBuZXh0OiAnQHNlbGVjdG9yYm9keScgfV1cbiAgICAgICAgXSxcbiAgICAgICAgc2VsZWN0b3Jib2R5OiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tbWVudHMnIH0sXG4gICAgICAgICAgICBbJ1sqX10/QGlkZW50aWZpZXJAd3M6KD89KFxcXFxzfFxcXFxkfFteezt9XSpbO31dKSknLCAnYXR0cmlidXRlLm5hbWUnLCAnQHJ1bGV2YWx1ZSddLFxuICAgICAgICAgICAgWyd9JywgeyB0b2tlbjogJ2RlbGltaXRlci5icmFja2V0JywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIHNlbGVjdG9ybmFtZTogW1xuICAgICAgICAgICAgWycoXFxcXC58Iyg/PVtee10pfCV8KEBpZGVudGlmaWVyKXw6KSsnLCAndGFnJ10gLy8gc2VsZWN0b3IgKC5mb28sIGRpdiwgLi4uKVxuICAgICAgICBdLFxuICAgICAgICBzZWxlY3RvcmF0dHJpYnV0ZTogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXG4gICAgICAgICAgICBbJ10nLCB7IHRva2VuOiAnZGVsaW1pdGVyLmJyYWNrZXQnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgdGVybTogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbW1lbnRzJyB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICcodXJsLXByZWZpeCkoXFxcXCgpJyxcbiAgICAgICAgICAgICAgICBbJ2F0dHJpYnV0ZS52YWx1ZScsIHsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnLCBuZXh0OiAnQHVybGRlY2xhcmF0aW9uJyB9XVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAnKHVybCkoXFxcXCgpJyxcbiAgICAgICAgICAgICAgICBbJ2F0dHJpYnV0ZS52YWx1ZScsIHsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnLCBuZXh0OiAnQHVybGRlY2xhcmF0aW9uJyB9XVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BmdW5jdGlvbmludm9jYXRpb24nIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAbnVtYmVycycgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BuYW1lJyB9LFxuICAgICAgICAgICAgWycoWzw+PVxcXFwrXFxcXC1cXFxcKlxcXFwvXFxcXF5cXFxcfFxcXFx+LF0pJywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgWycsJywgJ2RlbGltaXRlciddXG4gICAgICAgIF0sXG4gICAgICAgIHJ1bGV2YWx1ZTogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbW1lbnRzJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHN0cmluZ3MnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGVybScgfSxcbiAgICAgICAgICAgIFsnIWltcG9ydGFudCcsICdrZXl3b3JkJ10sXG4gICAgICAgICAgICBbJzsnLCAnZGVsaW1pdGVyJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsnKD89fSknLCB7IHRva2VuOiAnJywgbmV4dDogJ0Bwb3AnIH1dIC8vIG1pc3Npbmcgc2VtaWNvbG9uXG4gICAgICAgIF0sXG4gICAgICAgIHdhcm5kZWJ1ZzogW1snW0BdKHdhcm58ZGVidWcpJywgeyB0b2tlbjogJ2tleXdvcmQnLCBuZXh0OiAnQGRlY2xhcmF0aW9uYm9keScgfV1dLFxuICAgICAgICBpbXBvcnQ6IFtbJ1tAXShpbXBvcnQpJywgeyB0b2tlbjogJ2tleXdvcmQnLCBuZXh0OiAnQGRlY2xhcmF0aW9uYm9keScgfV1dLFxuICAgICAgICB1cmxkZWNsYXJhdGlvbjogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHN0cmluZ3MnIH0sXG4gICAgICAgICAgICBbJ1teKVxcclxcbl0rJywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWydcXFxcKScsIHsgdG9rZW46ICdkZWxpbWl0ZXIucGFyZW50aGVzaXMnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgcGFyZW50aGl6ZWR0ZXJtOiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAdGVybScgfSxcbiAgICAgICAgICAgIFsnXFxcXCknLCB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIGRlY2xhcmF0aW9uYm9keTogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRlcm0nIH0sXG4gICAgICAgICAgICBbJzsnLCAnZGVsaW1pdGVyJywgJ0Bwb3AnXSxcbiAgICAgICAgICAgIFsnKD89fSknLCB7IHRva2VuOiAnJywgbmV4dDogJ0Bwb3AnIH1dIC8vIG1pc3Npbmcgc2VtaWNvbG9uXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnRzOiBbXG4gICAgICAgICAgICBbJ1xcXFwvXFxcXConLCAnY29tbWVudCcsICdAY29tbWVudCddLFxuICAgICAgICAgICAgWydcXFxcL1xcXFwvKy4qJywgJ2NvbW1lbnQnXVxuICAgICAgICBdLFxuICAgICAgICBjb21tZW50OiBbXG4gICAgICAgICAgICBbJ1xcXFwqXFxcXC8nLCAnY29tbWVudCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1teKi9dKy8sICdjb21tZW50J10sXG4gICAgICAgICAgICBbLy4vLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIG5hbWU6IFtbJ0BpZGVudGlmaWVyJywgJ2F0dHJpYnV0ZS52YWx1ZSddXSxcbiAgICAgICAgbnVtYmVyczogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICctPyhcXFxcZCpcXFxcLik/XFxcXGQrKFtlRV1bXFxcXC0rXT9cXFxcZCspPycsXG4gICAgICAgICAgICAgICAgeyB0b2tlbjogJ2F0dHJpYnV0ZS52YWx1ZS5udW1iZXInLCBuZXh0OiAnQHVuaXRzJyB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWycjWzAtOWEtZkEtRl9dKyg/IVxcXFx3KScsICdhdHRyaWJ1dGUudmFsdWUuaGV4J11cbiAgICAgICAgXSxcbiAgICAgICAgdW5pdHM6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAnKGVtfGV4fGNofHJlbXx2bWlufHZtYXh8dnd8dmh8dm18Y218bW18aW58cHh8cHR8cGN8ZGVnfGdyYWR8cmFkfHR1cm58c3xtc3xIenxrSHp8JSk/JyxcbiAgICAgICAgICAgICAgICAnYXR0cmlidXRlLnZhbHVlLnVuaXQnLFxuICAgICAgICAgICAgICAgICdAcG9wJ1xuICAgICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBrZXlmcmFtZWRlY2xhcmF0aW9uOiBbXG4gICAgICAgICAgICBbJ0BpZGVudGlmaWVyJywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxuICAgICAgICAgICAgWyd7JywgeyB0b2tlbjogJ2RlbGltaXRlci5icmFja2V0Jywgc3dpdGNoVG86ICdAa2V5ZnJhbWVib2R5JyB9XVxuICAgICAgICBdLFxuICAgICAgICBrZXlmcmFtZWJvZHk6IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0ZXJtJyB9LFxuICAgICAgICAgICAgWyd7JywgeyB0b2tlbjogJ2RlbGltaXRlci5icmFja2V0JywgbmV4dDogJ0BzZWxlY3RvcmJvZHknIH1dLFxuICAgICAgICAgICAgWyd9JywgeyB0b2tlbjogJ2RlbGltaXRlci5icmFja2V0JywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIGZ1bmN0aW9uaW52b2NhdGlvbjogW1xuICAgICAgICAgICAgWydAaWRlbnRpZmllclxcXFwoJywgeyB0b2tlbjogJ2F0dHJpYnV0ZS52YWx1ZScsIG5leHQ6ICdAZnVuY3Rpb25hcmd1bWVudHMnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIGZ1bmN0aW9uYXJndW1lbnRzOiBbXG4gICAgICAgICAgICBbJ1xcXFwkQGlkZW50aWZpZXJAd3M6JywgJ2F0dHJpYnV0ZS5uYW1lJ10sXG4gICAgICAgICAgICBbJ1ssXScsICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B0ZXJtJyB9LFxuICAgICAgICAgICAgWydcXFxcKScsIHsgdG9rZW46ICdhdHRyaWJ1dGUudmFsdWUnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nczogW1xuICAgICAgICAgICAgWyd+P1wiJywgeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAc3RyaW5nZW5kZG91YmxlcXVvdGUnIH1dLFxuICAgICAgICAgICAgW1wifj8nXCIsIHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHN0cmluZ2VuZHF1b3RlJyB9XVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmdlbmRkb3VibGVxdW90ZTogW1xuICAgICAgICAgICAgWydcXFxcXFxcXC4nLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbJ1wiJywgeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAcG9wJyB9XSxcbiAgICAgICAgICAgIFsvW15cXFxcXCJdKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsnLicsICdzdHJpbmcnXVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmdlbmRxdW90ZTogW1xuICAgICAgICAgICAgWydcXFxcXFxcXC4nLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbXCInXCIsIHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbL1teXFxcXCddKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsnLicsICdzdHJpbmcnXVxuICAgICAgICBdXG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=