(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/swift/swift.js":
/*!**********************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/swift/swift.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conf", function() { return conf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
/*!---------------------------------------------------------------------------------------------
 *  Copyright (C) David Owens II, owensd.io. All rights reserved.
 *--------------------------------------------------------------------------------------------*/
var conf = {
    comments: {
        lineComment: '//',
        blockComment: ['/*', '*/']
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
    tokenPostfix: '.swift',
    // TODO(owensd): Support the full range of unicode valid identifiers.
    identifier: /[a-zA-Z_][\w$]*/,
    // TODO(owensd): Support the @availability macro properly.
    attributes: [
        '@autoclosure',
        '@noescape',
        '@noreturn',
        '@NSApplicationMain',
        '@NSCopying',
        '@NSManaged',
        '@objc',
        '@UIApplicationMain',
        '@noreturn',
        '@availability',
        '@IBAction',
        '@IBDesignable',
        '@IBInspectable',
        '@IBOutlet'
    ],
    accessmodifiers: ['public', 'private', 'internal'],
    keywords: [
        '__COLUMN__',
        '__FILE__',
        '__FUNCTION__',
        '__LINE__',
        'as',
        'as!',
        'as?',
        'associativity',
        'break',
        'case',
        'catch',
        'class',
        'continue',
        'convenience',
        'default',
        'deinit',
        'didSet',
        'do',
        'dynamic',
        'dynamicType',
        'else',
        'enum',
        'extension',
        'fallthrough',
        'final',
        'for',
        'func',
        'get',
        'guard',
        'if',
        'import',
        'in',
        'infix',
        'init',
        'inout',
        'internal',
        'is',
        'lazy',
        'left',
        'let',
        'mutating',
        'nil',
        'none',
        'nonmutating',
        'operator',
        'optional',
        'override',
        'postfix',
        'precedence',
        'prefix',
        'private',
        'protocol',
        'Protocol',
        'public',
        'repeat',
        'required',
        'return',
        'right',
        'self',
        'Self',
        'set',
        'static',
        'struct',
        'subscript',
        'super',
        'switch',
        'throw',
        'throws',
        'try',
        'try!',
        'Type',
        'typealias',
        'unowned',
        'var',
        'weak',
        'where',
        'while',
        'willSet',
        'FALSE',
        'TRUE'
    ],
    symbols: /[=(){}\[\].,:;@#\_&\-<>`?!+*\\\/]/,
    // Moved . to operatorstart so it can be a delimiter
    operatorstart: /[\/=\-+!*%<>&|^~?\u00A1-\u00A7\u00A9\u00AB\u00AC\u00AE\u00B0-\u00B1\u00B6\u00BB\u00BF\u00D7\u00F7\u2016-\u2017\u2020-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u23FF\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3030]/,
    operatorend: /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE00-\uFE0F\uFE20-\uFE2F\uE0100-\uE01EF]/,
    operators: /(@operatorstart)((@operatorstart)|(@operatorend))*/,
    // TODO(owensd): These are borrowed from C#; need to validate correctness for Swift.
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    tokenizer: {
        root: [
            { include: '@whitespace' },
            { include: '@comment' },
            { include: '@attribute' },
            { include: '@literal' },
            { include: '@keyword' },
            { include: '@invokedmethod' },
            { include: '@symbol' }
        ],
        whitespace: [
            [/\s+/, 'white'],
            [/"""/, 'string.quote', '@endDblDocString']
        ],
        endDblDocString: [
            [/[^"]+/, 'string'],
            [/\\"/, 'string'],
            [/"""/, 'string.quote', '@popall'],
            [/"/, 'string']
        ],
        symbol: [
            [/[{}()\[\]]/, '@brackets'],
            [/[<>](?!@symbols)/, '@brackets'],
            [/[.]/, 'delimiter'],
            [/@operators/, 'operator'],
            [/@symbols/, 'operator']
        ],
        comment: [
            [/\/\/\/.*$/, 'comment.doc'],
            [/\/\*\*/, 'comment.doc', '@commentdocbody'],
            [/\/\/.*$/, 'comment'],
            [/\/\*/, 'comment', '@commentbody']
        ],
        commentdocbody: [
            [/\/\*/, 'comment', '@commentbody'],
            [/\*\//, 'comment.doc', '@pop'],
            [/\:[a-zA-Z]+\:/, 'comment.doc.param'],
            [/./, 'comment.doc']
        ],
        commentbody: [
            [/\/\*/, 'comment', '@commentbody'],
            [/\*\//, 'comment', '@pop'],
            [/./, 'comment']
        ],
        attribute: [
            [
                /\@@identifier/,
                {
                    cases: {
                        '@attributes': 'keyword.control',
                        '@default': ''
                    }
                }
            ]
        ],
        literal: [
            [/"/, { token: 'string.quote', next: '@stringlit' }],
            [/0[b]([01]_?)+/, 'number.binary'],
            [/0[o]([0-7]_?)+/, 'number.octal'],
            [/0[x]([0-9a-fA-F]_?)+([pP][\-+](\d_?)+)?/, 'number.hex'],
            [/(\d_?)*\.(\d_?)+([eE][\-+]?(\d_?)+)?/, 'number.float'],
            [/(\d_?)+/, 'number']
        ],
        stringlit: [
            [/\\\(/, { token: 'operator', next: '@interpolatedexpression' }],
            [/@escapes/, 'string'],
            [/\\./, 'string.escape.invalid'],
            [/"/, { token: 'string.quote', next: '@pop' }],
            [/./, 'string']
        ],
        interpolatedexpression: [
            [/\(/, { token: 'operator', next: '@interpolatedexpression' }],
            [/\)/, { token: 'operator', next: '@pop' }],
            { include: '@literal' },
            { include: '@keyword' },
            { include: '@symbol' }
        ],
        keyword: [
            [/`/, { token: 'operator', next: '@escapedkeyword' }],
            [
                /@identifier/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '[A-Z][a-zA-Z0-9$]*': 'type.identifier',
                        '@default': 'identifier'
                    }
                }
            ]
        ],
        escapedkeyword: [
            [/`/, { token: 'operator', next: '@pop' }],
            [/./, 'identifier']
        ],
        //		symbol: [
        //			[ /@symbols/, 'operator' ],
        //			[ /@operators/, 'operator' ]
        //		],
        invokedmethod: [
            [
                /([.])(@identifier)/,
                {
                    cases: {
                        $2: ['delimeter', 'type.identifier'],
                        '@default': ''
                    }
                }
            ]
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvc3dpZnQvc3dpZnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRCw4Q0FBOEMsSUFBSSxjQUFjLEVBQUUsY0FBYyxFQUFFO0FBQ2xGO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHdCQUF3QjtBQUNyQyxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLDRCQUE0QjtBQUN6QyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDRDQUE0QztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxREFBcUQ7QUFDM0U7QUFDQTtBQUNBLG1CQUFtQixzQ0FBc0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFEQUFxRDtBQUN6RSxvQkFBb0Isa0NBQWtDO0FBQ3RELGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWE7QUFDYjtBQUNBO0FBQ0EsbUJBQW1CLDZDQUE2QztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0NBQWtDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjYzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChDKSBEYXZpZCBPd2VucyBJSSwgb3dlbnNkLmlvLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgY29tbWVudHM6IHtcbiAgICAgICAgbGluZUNvbW1lbnQ6ICcvLycsXG4gICAgICAgIGJsb2NrQ29tbWVudDogWycvKicsICcqLyddXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJ3snLCAnfSddLFxuICAgICAgICBbJ1snLCAnXSddLFxuICAgICAgICBbJygnLCAnKSddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH0sXG4gICAgICAgIHsgb3BlbjogJ2AnLCBjbG9zZTogJ2AnIH1cbiAgICBdLFxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfSxcbiAgICAgICAgeyBvcGVuOiAnYCcsIGNsb3NlOiAnYCcgfVxuICAgIF1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLnN3aWZ0JyxcbiAgICAvLyBUT0RPKG93ZW5zZCk6IFN1cHBvcnQgdGhlIGZ1bGwgcmFuZ2Ugb2YgdW5pY29kZSB2YWxpZCBpZGVudGlmaWVycy5cbiAgICBpZGVudGlmaWVyOiAvW2EtekEtWl9dW1xcdyRdKi8sXG4gICAgLy8gVE9ETyhvd2Vuc2QpOiBTdXBwb3J0IHRoZSBAYXZhaWxhYmlsaXR5IG1hY3JvIHByb3Blcmx5LlxuICAgIGF0dHJpYnV0ZXM6IFtcbiAgICAgICAgJ0BhdXRvY2xvc3VyZScsXG4gICAgICAgICdAbm9lc2NhcGUnLFxuICAgICAgICAnQG5vcmV0dXJuJyxcbiAgICAgICAgJ0BOU0FwcGxpY2F0aW9uTWFpbicsXG4gICAgICAgICdATlNDb3B5aW5nJyxcbiAgICAgICAgJ0BOU01hbmFnZWQnLFxuICAgICAgICAnQG9iamMnLFxuICAgICAgICAnQFVJQXBwbGljYXRpb25NYWluJyxcbiAgICAgICAgJ0Bub3JldHVybicsXG4gICAgICAgICdAYXZhaWxhYmlsaXR5JyxcbiAgICAgICAgJ0BJQkFjdGlvbicsXG4gICAgICAgICdASUJEZXNpZ25hYmxlJyxcbiAgICAgICAgJ0BJQkluc3BlY3RhYmxlJyxcbiAgICAgICAgJ0BJQk91dGxldCdcbiAgICBdLFxuICAgIGFjY2Vzc21vZGlmaWVyczogWydwdWJsaWMnLCAncHJpdmF0ZScsICdpbnRlcm5hbCddLFxuICAgIGtleXdvcmRzOiBbXG4gICAgICAgICdfX0NPTFVNTl9fJyxcbiAgICAgICAgJ19fRklMRV9fJyxcbiAgICAgICAgJ19fRlVOQ1RJT05fXycsXG4gICAgICAgICdfX0xJTkVfXycsXG4gICAgICAgICdhcycsXG4gICAgICAgICdhcyEnLFxuICAgICAgICAnYXM/JyxcbiAgICAgICAgJ2Fzc29jaWF0aXZpdHknLFxuICAgICAgICAnYnJlYWsnLFxuICAgICAgICAnY2FzZScsXG4gICAgICAgICdjYXRjaCcsXG4gICAgICAgICdjbGFzcycsXG4gICAgICAgICdjb250aW51ZScsXG4gICAgICAgICdjb252ZW5pZW5jZScsXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgJ2RlaW5pdCcsXG4gICAgICAgICdkaWRTZXQnLFxuICAgICAgICAnZG8nLFxuICAgICAgICAnZHluYW1pYycsXG4gICAgICAgICdkeW5hbWljVHlwZScsXG4gICAgICAgICdlbHNlJyxcbiAgICAgICAgJ2VudW0nLFxuICAgICAgICAnZXh0ZW5zaW9uJyxcbiAgICAgICAgJ2ZhbGx0aHJvdWdoJyxcbiAgICAgICAgJ2ZpbmFsJyxcbiAgICAgICAgJ2ZvcicsXG4gICAgICAgICdmdW5jJyxcbiAgICAgICAgJ2dldCcsXG4gICAgICAgICdndWFyZCcsXG4gICAgICAgICdpZicsXG4gICAgICAgICdpbXBvcnQnLFxuICAgICAgICAnaW4nLFxuICAgICAgICAnaW5maXgnLFxuICAgICAgICAnaW5pdCcsXG4gICAgICAgICdpbm91dCcsXG4gICAgICAgICdpbnRlcm5hbCcsXG4gICAgICAgICdpcycsXG4gICAgICAgICdsYXp5JyxcbiAgICAgICAgJ2xlZnQnLFxuICAgICAgICAnbGV0JyxcbiAgICAgICAgJ211dGF0aW5nJyxcbiAgICAgICAgJ25pbCcsXG4gICAgICAgICdub25lJyxcbiAgICAgICAgJ25vbm11dGF0aW5nJyxcbiAgICAgICAgJ29wZXJhdG9yJyxcbiAgICAgICAgJ29wdGlvbmFsJyxcbiAgICAgICAgJ292ZXJyaWRlJyxcbiAgICAgICAgJ3Bvc3RmaXgnLFxuICAgICAgICAncHJlY2VkZW5jZScsXG4gICAgICAgICdwcmVmaXgnLFxuICAgICAgICAncHJpdmF0ZScsXG4gICAgICAgICdwcm90b2NvbCcsXG4gICAgICAgICdQcm90b2NvbCcsXG4gICAgICAgICdwdWJsaWMnLFxuICAgICAgICAncmVwZWF0JyxcbiAgICAgICAgJ3JlcXVpcmVkJyxcbiAgICAgICAgJ3JldHVybicsXG4gICAgICAgICdyaWdodCcsXG4gICAgICAgICdzZWxmJyxcbiAgICAgICAgJ1NlbGYnLFxuICAgICAgICAnc2V0JyxcbiAgICAgICAgJ3N0YXRpYycsXG4gICAgICAgICdzdHJ1Y3QnLFxuICAgICAgICAnc3Vic2NyaXB0JyxcbiAgICAgICAgJ3N1cGVyJyxcbiAgICAgICAgJ3N3aXRjaCcsXG4gICAgICAgICd0aHJvdycsXG4gICAgICAgICd0aHJvd3MnLFxuICAgICAgICAndHJ5JyxcbiAgICAgICAgJ3RyeSEnLFxuICAgICAgICAnVHlwZScsXG4gICAgICAgICd0eXBlYWxpYXMnLFxuICAgICAgICAndW5vd25lZCcsXG4gICAgICAgICd2YXInLFxuICAgICAgICAnd2VhaycsXG4gICAgICAgICd3aGVyZScsXG4gICAgICAgICd3aGlsZScsXG4gICAgICAgICd3aWxsU2V0JyxcbiAgICAgICAgJ0ZBTFNFJyxcbiAgICAgICAgJ1RSVUUnXG4gICAgXSxcbiAgICBzeW1ib2xzOiAvWz0oKXt9XFxbXFxdLiw6O0AjXFxfJlxcLTw+YD8hKypcXFxcXFwvXS8sXG4gICAgLy8gTW92ZWQgLiB0byBvcGVyYXRvcnN0YXJ0IHNvIGl0IGNhbiBiZSBhIGRlbGltaXRlclxuICAgIG9wZXJhdG9yc3RhcnQ6IC9bXFwvPVxcLSshKiU8PiZ8Xn4/XFx1MDBBMS1cXHUwMEE3XFx1MDBBOVxcdTAwQUJcXHUwMEFDXFx1MDBBRVxcdTAwQjAtXFx1MDBCMVxcdTAwQjZcXHUwMEJCXFx1MDBCRlxcdTAwRDdcXHUwMEY3XFx1MjAxNi1cXHUyMDE3XFx1MjAyMC1cXHUyMDI3XFx1MjAzMC1cXHUyMDNFXFx1MjA0MS1cXHUyMDUzXFx1MjA1NS1cXHUyMDVFXFx1MjE5MC1cXHUyM0ZGXFx1MjUwMC1cXHUyNzc1XFx1Mjc5NC1cXHUyQkZGXFx1MkUwMC1cXHUyRTdGXFx1MzAwMS1cXHUzMDAzXFx1MzAwOC1cXHUzMDMwXS8sXG4gICAgb3BlcmF0b3JlbmQ6IC9bXFx1MDMwMC1cXHUwMzZGXFx1MURDMC1cXHUxREZGXFx1MjBEMC1cXHUyMEZGXFx1RkUwMC1cXHVGRTBGXFx1RkUyMC1cXHVGRTJGXFx1RTAxMDAtXFx1RTAxRUZdLyxcbiAgICBvcGVyYXRvcnM6IC8oQG9wZXJhdG9yc3RhcnQpKChAb3BlcmF0b3JzdGFydCl8KEBvcGVyYXRvcmVuZCkpKi8sXG4gICAgLy8gVE9ETyhvd2Vuc2QpOiBUaGVzZSBhcmUgYm9ycm93ZWQgZnJvbSBDIzsgbmVlZCB0byB2YWxpZGF0ZSBjb3JyZWN0bmVzcyBmb3IgU3dpZnQuXG4gICAgZXNjYXBlczogL1xcXFwoPzpbYWJmbnJ0dlxcXFxcIiddfHhbMC05QS1GYS1mXXsxLDR9fHVbMC05QS1GYS1mXXs0fXxVWzAtOUEtRmEtZl17OH0pLyxcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tbWVudCcgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BhdHRyaWJ1dGUnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAbGl0ZXJhbCcgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BrZXl3b3JkJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGludm9rZWRtZXRob2QnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc3ltYm9sJyB9XG4gICAgICAgIF0sXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcbiAgICAgICAgICAgIFsvXFxzKy8sICd3aGl0ZSddLFxuICAgICAgICAgICAgWy9cIlwiXCIvLCAnc3RyaW5nLnF1b3RlJywgJ0BlbmREYmxEb2NTdHJpbmcnXVxuICAgICAgICBdLFxuICAgICAgICBlbmREYmxEb2NTdHJpbmc6IFtcbiAgICAgICAgICAgIFsvW15cIl0rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9cXFxcXCIvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbL1wiXCJcIi8sICdzdHJpbmcucXVvdGUnLCAnQHBvcGFsbCddLFxuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnXVxuICAgICAgICBdLFxuICAgICAgICBzeW1ib2w6IFtcbiAgICAgICAgICAgIFsvW3t9KClcXFtcXF1dLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgWy9bPD5dKD8hQHN5bWJvbHMpLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgWy9bLl0vLCAnZGVsaW1pdGVyJ10sXG4gICAgICAgICAgICBbL0BvcGVyYXRvcnMvLCAnb3BlcmF0b3InXSxcbiAgICAgICAgICAgIFsvQHN5bWJvbHMvLCAnb3BlcmF0b3InXVxuICAgICAgICBdLFxuICAgICAgICBjb21tZW50OiBbXG4gICAgICAgICAgICBbL1xcL1xcL1xcLy4qJC8sICdjb21tZW50LmRvYyddLFxuICAgICAgICAgICAgWy9cXC9cXCpcXCovLCAnY29tbWVudC5kb2MnLCAnQGNvbW1lbnRkb2Nib2R5J10sXG4gICAgICAgICAgICBbL1xcL1xcLy4qJC8sICdjb21tZW50J10sXG4gICAgICAgICAgICBbL1xcL1xcKi8sICdjb21tZW50JywgJ0Bjb21tZW50Ym9keSddXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnRkb2Nib2R5OiBbXG4gICAgICAgICAgICBbL1xcL1xcKi8sICdjb21tZW50JywgJ0Bjb21tZW50Ym9keSddLFxuICAgICAgICAgICAgWy9cXCpcXC8vLCAnY29tbWVudC5kb2MnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9cXDpbYS16QS1aXStcXDovLCAnY29tbWVudC5kb2MucGFyYW0nXSxcbiAgICAgICAgICAgIFsvLi8sICdjb21tZW50LmRvYyddXG4gICAgICAgIF0sXG4gICAgICAgIGNvbW1lbnRib2R5OiBbXG4gICAgICAgICAgICBbL1xcL1xcKi8sICdjb21tZW50JywgJ0Bjb21tZW50Ym9keSddLFxuICAgICAgICAgICAgWy9cXCpcXC8vLCAnY29tbWVudCcsICdAcG9wJ10sXG4gICAgICAgICAgICBbLy4vLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIGF0dHJpYnV0ZTogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9cXEBAaWRlbnRpZmllci8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BhdHRyaWJ1dGVzJzogJ2tleXdvcmQuY29udHJvbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBsaXRlcmFsOiBbXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZy5xdW90ZScsIG5leHQ6ICdAc3RyaW5nbGl0JyB9XSxcbiAgICAgICAgICAgIFsvMFtiXShbMDFdXz8pKy8sICdudW1iZXIuYmluYXJ5J10sXG4gICAgICAgICAgICBbLzBbb10oWzAtN11fPykrLywgJ251bWJlci5vY3RhbCddLFxuICAgICAgICAgICAgWy8wW3hdKFswLTlhLWZBLUZdXz8pKyhbcFBdW1xcLStdKFxcZF8/KSspPy8sICdudW1iZXIuaGV4J10sXG4gICAgICAgICAgICBbLyhcXGRfPykqXFwuKFxcZF8/KSsoW2VFXVtcXC0rXT8oXFxkXz8pKyk/LywgJ251bWJlci5mbG9hdCddLFxuICAgICAgICAgICAgWy8oXFxkXz8pKy8sICdudW1iZXInXVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmdsaXQ6IFtcbiAgICAgICAgICAgIFsvXFxcXFxcKC8sIHsgdG9rZW46ICdvcGVyYXRvcicsIG5leHQ6ICdAaW50ZXJwb2xhdGVkZXhwcmVzc2lvbicgfV0sXG4gICAgICAgICAgICBbL0Blc2NhcGVzLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlLmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICAgICAgWy8uLywgJ3N0cmluZyddXG4gICAgICAgIF0sXG4gICAgICAgIGludGVycG9sYXRlZGV4cHJlc3Npb246IFtcbiAgICAgICAgICAgIFsvXFwoLywgeyB0b2tlbjogJ29wZXJhdG9yJywgbmV4dDogJ0BpbnRlcnBvbGF0ZWRleHByZXNzaW9uJyB9XSxcbiAgICAgICAgICAgIFsvXFwpLywgeyB0b2tlbjogJ29wZXJhdG9yJywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGxpdGVyYWwnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAa2V5d29yZCcgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzeW1ib2wnIH1cbiAgICAgICAgXSxcbiAgICAgICAga2V5d29yZDogW1xuICAgICAgICAgICAgWy9gLywgeyB0b2tlbjogJ29wZXJhdG9yJywgbmV4dDogJ0Blc2NhcGVka2V5d29yZCcgfV0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL0BpZGVudGlmaWVyLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGtleXdvcmRzJzogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1tBLVpdW2EtekEtWjAtOSRdKic6ICd0eXBlLmlkZW50aWZpZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIGVzY2FwZWRrZXl3b3JkOiBbXG4gICAgICAgICAgICBbL2AvLCB7IHRva2VuOiAnb3BlcmF0b3InLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbLy4vLCAnaWRlbnRpZmllciddXG4gICAgICAgIF0sXG4gICAgICAgIC8vXHRcdHN5bWJvbDogW1xuICAgICAgICAvL1x0XHRcdFsgL0BzeW1ib2xzLywgJ29wZXJhdG9yJyBdLFxuICAgICAgICAvL1x0XHRcdFsgL0BvcGVyYXRvcnMvLCAnb3BlcmF0b3InIF1cbiAgICAgICAgLy9cdFx0XSxcbiAgICAgICAgaW52b2tlZG1ldGhvZDogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8oWy5dKShAaWRlbnRpZmllcikvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQyOiBbJ2RlbGltZXRlcicsICd0eXBlLmlkZW50aWZpZXInXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==