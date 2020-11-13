(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/pascal/pascal.js":
/*!************************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/pascal/pascal.js ***!
  \************************************************************************************************************************************/
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
    // the default separators except `@$`
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    comments: {
        lineComment: '//',
        blockComment: ['{', '}']
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')'],
        ['<', '>']
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '<', close: '>' },
        { open: "'", close: "'" }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '<', close: '>' },
        { open: "'", close: "'" }
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*\\{\\$REGION(\\s\\'.*\\')?\\}"),
            end: new RegExp('^\\s*\\{\\$ENDREGION\\}')
        }
    }
};
var language = {
    defaultToken: '',
    tokenPostfix: '.pascal',
    ignoreCase: true,
    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.square' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' },
        { open: '<', close: '>', token: 'delimiter.angle' }
    ],
    keywords: [
        'absolute',
        'abstract',
        'all',
        'and_then',
        'array',
        'as',
        'asm',
        'attribute',
        'begin',
        'bindable',
        'case',
        'class',
        'const',
        'contains',
        'default',
        'div',
        'else',
        'end',
        'except',
        'exports',
        'external',
        'far',
        'file',
        'finalization',
        'finally',
        'forward',
        'generic',
        'goto',
        'if',
        'implements',
        'import',
        'in',
        'index',
        'inherited',
        'initialization',
        'interrupt',
        'is',
        'label',
        'library',
        'mod',
        'module',
        'name',
        'near',
        'not',
        'object',
        'of',
        'on',
        'only',
        'operator',
        'or_else',
        'otherwise',
        'override',
        'package',
        'packed',
        'pow',
        'private',
        'program',
        'protected',
        'public',
        'published',
        'interface',
        'implementation',
        'qualified',
        'read',
        'record',
        'resident',
        'requires',
        'resourcestring',
        'restricted',
        'segment',
        'set',
        'shl',
        'shr',
        'specialize',
        'stored',
        'then',
        'threadvar',
        'to',
        'try',
        'type',
        'unit',
        'uses',
        'var',
        'view',
        'virtual',
        'dynamic',
        'overload',
        'reintroduce',
        'with',
        'write',
        'xor',
        'true',
        'false',
        'procedure',
        'function',
        'constructor',
        'destructor',
        'property',
        'break',
        'continue',
        'exit',
        'abort',
        'while',
        'do',
        'for',
        'raise',
        'repeat',
        'until'
    ],
    typeKeywords: [
        'boolean',
        'double',
        'byte',
        'integer',
        'shortint',
        'char',
        'longint',
        'float',
        'string'
    ],
    operators: [
        '=',
        '>',
        '<',
        '<=',
        '>=',
        '<>',
        ':',
        ':=',
        'and',
        'or',
        '+',
        '-',
        '*',
        '/',
        '@',
        '&',
        '^',
        '%'
    ],
    // we include these common regular expressions
    symbols: /[=><:@\^&|+\-*\/\^%]+/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // identifiers and keywords
            [
                /[a-zA-Z_][\w]*/,
                {
                    cases: {
                        '@keywords': { token: 'keyword.$0' },
                        '@default': 'identifier'
                    }
                }
            ],
            // whitespace
            { include: '@whitespace' },
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/[<>](?!@symbols)/, '@brackets'],
            [
                /@symbols/,
                {
                    cases: {
                        '@operators': 'delimiter',
                        '@default': ''
                    }
                }
            ],
            // numbers
            [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
            [/\$[0-9a-fA-F]{1,16}/, 'number.hex'],
            [/\d+/, 'number'],
            // delimiter: after number because of .\d floats
            [/[;,.]/, 'delimiter'],
            // strings
            [/'([^'\\]|\\.)*$/, 'string.invalid'],
            [/'/, 'string', '@string'],
            // characters
            [/'[^\\']'/, 'string'],
            [/'/, 'string.invalid'],
            [/\#\d+/, 'string']
        ],
        comment: [
            [/[^\*\}]+/, 'comment'],
            //[/\(\*/,    'comment', '@push' ],    // nested comment  not allowed :-(
            [/\}/, 'comment', '@pop'],
            [/[\{]/, 'comment']
        ],
        string: [
            [/[^\\']+/, 'string'],
            [/\\./, 'string.escape.invalid'],
            [/'/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
        ],
        whitespace: [
            [/[ \t\r\n]+/, 'white'],
            [/\{/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment']
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvcGFzY2FsL3Bhc2NhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0Esa0VBQWtFLElBQUksTUFBTTtBQUM1RTtBQUNBO0FBQ0EseUJBQXlCLEtBQUs7QUFDOUIsS0FBSztBQUNMO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLDBCQUEwQjtBQUNqRSxxQ0FBcUMsZUFBZTtBQUNwRDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksNkJBQTZCO0FBQzNELFNBQVMsbURBQW1EO0FBQzVELFNBQVMsd0RBQXdEO0FBQ2pFLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHNCQUFzQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLEtBQUs7QUFDakM7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSxnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlEQUF5RDtBQUM1RTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICAvLyB0aGUgZGVmYXVsdCBzZXBhcmF0b3JzIGV4Y2VwdCBgQCRgXG4gICAgd29yZFBhdHRlcm46IC8oLT9cXGQqXFwuXFxkXFx3Kil8KFteXFxgXFx+XFwhXFwjXFwlXFxeXFwmXFwqXFwoXFwpXFwtXFw9XFwrXFxbXFx7XFxdXFx9XFxcXFxcfFxcO1xcOlxcJ1xcXCJcXCxcXC5cXDxcXD5cXC9cXD9cXHNdKykvZyxcbiAgICBjb21tZW50czoge1xuICAgICAgICBsaW5lQ29tbWVudDogJy8vJyxcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJ3snLCAnfSddXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJ3snLCAnfSddLFxuICAgICAgICBbJ1snLCAnXSddLFxuICAgICAgICBbJygnLCAnKSddLFxuICAgICAgICBbJzwnLCAnPiddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJzwnLCBjbG9zZTogJz4nIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9XG4gICAgXSxcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJzwnLCBjbG9zZTogJz4nIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9XG4gICAgXSxcbiAgICBmb2xkaW5nOiB7XG4gICAgICAgIG1hcmtlcnM6IHtcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKFwiXlxcXFxzKlxcXFx7XFxcXCRSRUdJT04oXFxcXHNcXFxcJy4qXFxcXCcpP1xcXFx9XCIpLFxuICAgICAgICAgICAgZW5kOiBuZXcgUmVnRXhwKCdeXFxcXHMqXFxcXHtcXFxcJEVORFJFR0lPTlxcXFx9JylcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLnBhc2NhbCcsXG4gICAgaWdub3JlQ2FzZTogdHJ1ZSxcbiAgICBicmFja2V0czogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JywgdG9rZW46ICdkZWxpbWl0ZXIuY3VybHknIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nLCB0b2tlbjogJ2RlbGltaXRlci5zcXVhcmUnIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfSxcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicsIHRva2VuOiAnZGVsaW1pdGVyLmFuZ2xlJyB9XG4gICAgXSxcbiAgICBrZXl3b3JkczogW1xuICAgICAgICAnYWJzb2x1dGUnLFxuICAgICAgICAnYWJzdHJhY3QnLFxuICAgICAgICAnYWxsJyxcbiAgICAgICAgJ2FuZF90aGVuJyxcbiAgICAgICAgJ2FycmF5JyxcbiAgICAgICAgJ2FzJyxcbiAgICAgICAgJ2FzbScsXG4gICAgICAgICdhdHRyaWJ1dGUnLFxuICAgICAgICAnYmVnaW4nLFxuICAgICAgICAnYmluZGFibGUnLFxuICAgICAgICAnY2FzZScsXG4gICAgICAgICdjbGFzcycsXG4gICAgICAgICdjb25zdCcsXG4gICAgICAgICdjb250YWlucycsXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgJ2RpdicsXG4gICAgICAgICdlbHNlJyxcbiAgICAgICAgJ2VuZCcsXG4gICAgICAgICdleGNlcHQnLFxuICAgICAgICAnZXhwb3J0cycsXG4gICAgICAgICdleHRlcm5hbCcsXG4gICAgICAgICdmYXInLFxuICAgICAgICAnZmlsZScsXG4gICAgICAgICdmaW5hbGl6YXRpb24nLFxuICAgICAgICAnZmluYWxseScsXG4gICAgICAgICdmb3J3YXJkJyxcbiAgICAgICAgJ2dlbmVyaWMnLFxuICAgICAgICAnZ290bycsXG4gICAgICAgICdpZicsXG4gICAgICAgICdpbXBsZW1lbnRzJyxcbiAgICAgICAgJ2ltcG9ydCcsXG4gICAgICAgICdpbicsXG4gICAgICAgICdpbmRleCcsXG4gICAgICAgICdpbmhlcml0ZWQnLFxuICAgICAgICAnaW5pdGlhbGl6YXRpb24nLFxuICAgICAgICAnaW50ZXJydXB0JyxcbiAgICAgICAgJ2lzJyxcbiAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgJ2xpYnJhcnknLFxuICAgICAgICAnbW9kJyxcbiAgICAgICAgJ21vZHVsZScsXG4gICAgICAgICduYW1lJyxcbiAgICAgICAgJ25lYXInLFxuICAgICAgICAnbm90JyxcbiAgICAgICAgJ29iamVjdCcsXG4gICAgICAgICdvZicsXG4gICAgICAgICdvbicsXG4gICAgICAgICdvbmx5JyxcbiAgICAgICAgJ29wZXJhdG9yJyxcbiAgICAgICAgJ29yX2Vsc2UnLFxuICAgICAgICAnb3RoZXJ3aXNlJyxcbiAgICAgICAgJ292ZXJyaWRlJyxcbiAgICAgICAgJ3BhY2thZ2UnLFxuICAgICAgICAncGFja2VkJyxcbiAgICAgICAgJ3BvdycsXG4gICAgICAgICdwcml2YXRlJyxcbiAgICAgICAgJ3Byb2dyYW0nLFxuICAgICAgICAncHJvdGVjdGVkJyxcbiAgICAgICAgJ3B1YmxpYycsXG4gICAgICAgICdwdWJsaXNoZWQnLFxuICAgICAgICAnaW50ZXJmYWNlJyxcbiAgICAgICAgJ2ltcGxlbWVudGF0aW9uJyxcbiAgICAgICAgJ3F1YWxpZmllZCcsXG4gICAgICAgICdyZWFkJyxcbiAgICAgICAgJ3JlY29yZCcsXG4gICAgICAgICdyZXNpZGVudCcsXG4gICAgICAgICdyZXF1aXJlcycsXG4gICAgICAgICdyZXNvdXJjZXN0cmluZycsXG4gICAgICAgICdyZXN0cmljdGVkJyxcbiAgICAgICAgJ3NlZ21lbnQnLFxuICAgICAgICAnc2V0JyxcbiAgICAgICAgJ3NobCcsXG4gICAgICAgICdzaHInLFxuICAgICAgICAnc3BlY2lhbGl6ZScsXG4gICAgICAgICdzdG9yZWQnLFxuICAgICAgICAndGhlbicsXG4gICAgICAgICd0aHJlYWR2YXInLFxuICAgICAgICAndG8nLFxuICAgICAgICAndHJ5JyxcbiAgICAgICAgJ3R5cGUnLFxuICAgICAgICAndW5pdCcsXG4gICAgICAgICd1c2VzJyxcbiAgICAgICAgJ3ZhcicsXG4gICAgICAgICd2aWV3JyxcbiAgICAgICAgJ3ZpcnR1YWwnLFxuICAgICAgICAnZHluYW1pYycsXG4gICAgICAgICdvdmVybG9hZCcsXG4gICAgICAgICdyZWludHJvZHVjZScsXG4gICAgICAgICd3aXRoJyxcbiAgICAgICAgJ3dyaXRlJyxcbiAgICAgICAgJ3hvcicsXG4gICAgICAgICd0cnVlJyxcbiAgICAgICAgJ2ZhbHNlJyxcbiAgICAgICAgJ3Byb2NlZHVyZScsXG4gICAgICAgICdmdW5jdGlvbicsXG4gICAgICAgICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICdkZXN0cnVjdG9yJyxcbiAgICAgICAgJ3Byb3BlcnR5JyxcbiAgICAgICAgJ2JyZWFrJyxcbiAgICAgICAgJ2NvbnRpbnVlJyxcbiAgICAgICAgJ2V4aXQnLFxuICAgICAgICAnYWJvcnQnLFxuICAgICAgICAnd2hpbGUnLFxuICAgICAgICAnZG8nLFxuICAgICAgICAnZm9yJyxcbiAgICAgICAgJ3JhaXNlJyxcbiAgICAgICAgJ3JlcGVhdCcsXG4gICAgICAgICd1bnRpbCdcbiAgICBdLFxuICAgIHR5cGVLZXl3b3JkczogW1xuICAgICAgICAnYm9vbGVhbicsXG4gICAgICAgICdkb3VibGUnLFxuICAgICAgICAnYnl0ZScsXG4gICAgICAgICdpbnRlZ2VyJyxcbiAgICAgICAgJ3Nob3J0aW50JyxcbiAgICAgICAgJ2NoYXInLFxuICAgICAgICAnbG9uZ2ludCcsXG4gICAgICAgICdmbG9hdCcsXG4gICAgICAgICdzdHJpbmcnXG4gICAgXSxcbiAgICBvcGVyYXRvcnM6IFtcbiAgICAgICAgJz0nLFxuICAgICAgICAnPicsXG4gICAgICAgICc8JyxcbiAgICAgICAgJzw9JyxcbiAgICAgICAgJz49JyxcbiAgICAgICAgJzw+JyxcbiAgICAgICAgJzonLFxuICAgICAgICAnOj0nLFxuICAgICAgICAnYW5kJyxcbiAgICAgICAgJ29yJyxcbiAgICAgICAgJysnLFxuICAgICAgICAnLScsXG4gICAgICAgICcqJyxcbiAgICAgICAgJy8nLFxuICAgICAgICAnQCcsXG4gICAgICAgICcmJyxcbiAgICAgICAgJ14nLFxuICAgICAgICAnJSdcbiAgICBdLFxuICAgIC8vIHdlIGluY2x1ZGUgdGhlc2UgY29tbW9uIHJlZ3VsYXIgZXhwcmVzc2lvbnNcbiAgICBzeW1ib2xzOiAvWz0+PDpAXFxeJnwrXFwtKlxcL1xcXiVdKy8sXG4gICAgLy8gVGhlIG1haW4gdG9rZW5pemVyIGZvciBvdXIgbGFuZ3VhZ2VzXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIC8vIGlkZW50aWZpZXJzIGFuZCBrZXl3b3Jkc1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9bYS16QS1aX11bXFx3XSovLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiB7IHRva2VuOiAna2V5d29yZC4kMCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIHdoaXRlc3BhY2VcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVycyBhbmQgb3BlcmF0b3JzXG4gICAgICAgICAgICBbL1t7fSgpXFxbXFxdXS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFsvWzw+XSg/IUBzeW1ib2xzKS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvQHN5bWJvbHMvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAb3BlcmF0b3JzJzogJ2RlbGltaXRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIG51bWJlcnNcbiAgICAgICAgICAgIFsvXFxkKlxcLlxcZCsoW2VFXVtcXC0rXT9cXGQrKT8vLCAnbnVtYmVyLmZsb2F0J10sXG4gICAgICAgICAgICBbL1xcJFswLTlhLWZBLUZdezEsMTZ9LywgJ251bWJlci5oZXgnXSxcbiAgICAgICAgICAgIFsvXFxkKy8sICdudW1iZXInXSxcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcjogYWZ0ZXIgbnVtYmVyIGJlY2F1c2Ugb2YgLlxcZCBmbG9hdHNcbiAgICAgICAgICAgIFsvWzssLl0vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICAvLyBzdHJpbmdzXG4gICAgICAgICAgICBbLycoW14nXFxcXF18XFxcXC4pKiQvLCAnc3RyaW5nLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvJy8sICdzdHJpbmcnLCAnQHN0cmluZyddLFxuICAgICAgICAgICAgLy8gY2hhcmFjdGVyc1xuICAgICAgICAgICAgWy8nW15cXFxcJ10nLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZy5pbnZhbGlkJ10sXG4gICAgICAgICAgICBbL1xcI1xcZCsvLCAnc3RyaW5nJ11cbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudDogW1xuICAgICAgICAgICAgWy9bXlxcKlxcfV0rLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgICAgIC8vWy9cXChcXCovLCAgICAnY29tbWVudCcsICdAcHVzaCcgXSwgICAgLy8gbmVzdGVkIGNvbW1lbnQgIG5vdCBhbGxvd2VkIDotKFxuICAgICAgICAgICAgWy9cXH0vLCAnY29tbWVudCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbL1tcXHtdLywgJ2NvbW1lbnQnXVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW15cXFxcJ10rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvJy8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBicmFja2V0OiAnQGNsb3NlJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICd3aGl0ZSddLFxuICAgICAgICAgICAgWy9cXHsvLCAnY29tbWVudCcsICdAY29tbWVudCddLFxuICAgICAgICAgICAgWy9cXC9cXC8uKiQvLCAnY29tbWVudCddXG4gICAgICAgIF1cbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==