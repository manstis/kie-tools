(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/rust/rust.js":
/*!********************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/rust/rust.js ***!
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
        { open: '[', close: ']' },
        { open: '{', close: '}' },
        { open: '(', close: ')' },
        { open: "'", close: "'", notIn: ['string', 'comment'] },
        { open: '"', close: '"', notIn: ['string'] }
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
            start: new RegExp('^\\s*#pragma\\s+region\\b'),
            end: new RegExp('^\\s*#pragma\\s+endregion\\b')
        }
    }
};
var language = {
    tokenPostfix: '.rust',
    defaultToken: 'invalid',
    keywords: [
        'as',
        'box',
        'break',
        'const',
        'continue',
        'crate',
        'else',
        'enum',
        'extern',
        'false',
        'fn',
        'for',
        'if',
        'impl',
        'in',
        'let',
        'loop',
        'match',
        'mod',
        'move',
        'mut',
        'pub',
        'ref',
        'return',
        'self',
        'static',
        'struct',
        'super',
        'trait',
        'true',
        'type',
        'unsafe',
        'use',
        'where',
        'while',
        'catch',
        'default',
        'union',
        'static',
        'abstract',
        'alignof',
        'become',
        'do',
        'final',
        'macro',
        'offsetof',
        'override',
        'priv',
        'proc',
        'pure',
        'sizeof',
        'typeof',
        'unsized',
        'virtual',
        'yield'
    ],
    typeKeywords: [
        'Self',
        'm32',
        'm64',
        'm128',
        'f80',
        'f16',
        'f128',
        'int',
        'uint',
        'float',
        'char',
        'bool',
        'u8',
        'u16',
        'u32',
        'u64',
        'f32',
        'f64',
        'i8',
        'i16',
        'i32',
        'i64',
        'str',
        'Option',
        'Either',
        'c_float',
        'c_double',
        'c_void',
        'FILE',
        'fpos_t',
        'DIR',
        'dirent',
        'c_char',
        'c_schar',
        'c_uchar',
        'c_short',
        'c_ushort',
        'c_int',
        'c_uint',
        'c_long',
        'c_ulong',
        'size_t',
        'ptrdiff_t',
        'clock_t',
        'time_t',
        'c_longlong',
        'c_ulonglong',
        'intptr_t',
        'uintptr_t',
        'off_t',
        'dev_t',
        'ino_t',
        'pid_t',
        'mode_t',
        'ssize_t'
    ],
    constants: ['true', 'false', 'Some', 'None', 'Left', 'Right', 'Ok', 'Err'],
    supportConstants: [
        'EXIT_FAILURE',
        'EXIT_SUCCESS',
        'RAND_MAX',
        'EOF',
        'SEEK_SET',
        'SEEK_CUR',
        'SEEK_END',
        '_IOFBF',
        '_IONBF',
        '_IOLBF',
        'BUFSIZ',
        'FOPEN_MAX',
        'FILENAME_MAX',
        'L_tmpnam',
        'TMP_MAX',
        'O_RDONLY',
        'O_WRONLY',
        'O_RDWR',
        'O_APPEND',
        'O_CREAT',
        'O_EXCL',
        'O_TRUNC',
        'S_IFIFO',
        'S_IFCHR',
        'S_IFBLK',
        'S_IFDIR',
        'S_IFREG',
        'S_IFMT',
        'S_IEXEC',
        'S_IWRITE',
        'S_IREAD',
        'S_IRWXU',
        'S_IXUSR',
        'S_IWUSR',
        'S_IRUSR',
        'F_OK',
        'R_OK',
        'W_OK',
        'X_OK',
        'STDIN_FILENO',
        'STDOUT_FILENO',
        'STDERR_FILENO'
    ],
    supportMacros: [
        'format!',
        'print!',
        'println!',
        'panic!',
        'format_args!',
        'unreachable!',
        'write!',
        'writeln!'
    ],
    operators: [
        '!',
        '!=',
        '%',
        '%=',
        '&',
        '&=',
        '&&',
        '*',
        '*=',
        '+',
        '+=',
        '-',
        '-=',
        '->',
        '.',
        '..',
        '...',
        '/',
        '/=',
        ':',
        ';',
        '<<',
        '<<=',
        '<',
        '<=',
        '=',
        '==',
        '=>',
        '>',
        '>=',
        '>>',
        '>>=',
        '@',
        '^',
        '^=',
        '|',
        '|=',
        '||',
        '_',
        '?',
        '#'
    ],
    escapes: /\\([nrt0\"''\\]|x\h{2}|u\{\h{1,6}\})/,
    delimiters: /[,]/,
    symbols: /[\#\!\%\&\*\+\-\.\/\:\;\<\=\>\@\^\|_\?]+/,
    intSuffixes: /[iu](8|16|32|64|128|size)/,
    floatSuffixes: /f(32|64)/,
    tokenizer: {
        root: [
            [
                /[a-zA-Z][a-zA-Z0-9_]*!?|_[a-zA-Z0-9_]+/,
                {
                    cases: {
                        '@typeKeywords': 'keyword.type',
                        '@keywords': 'keyword',
                        '@supportConstants': 'keyword',
                        '@supportMacros': 'keyword',
                        '@constants': 'keyword',
                        '@default': 'identifier'
                    }
                }
            ],
            // Designator
            [/\$/, 'identifier'],
            // Lifetime annotations
            [/'[a-zA-Z_][a-zA-Z0-9_]*(?=[^\'])/, 'identifier'],
            // Byte literal
            [/'\S'/, 'string.byteliteral'],
            // Strings
            [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }],
            { include: '@numbers' },
            // Whitespace + comments
            { include: '@whitespace' },
            [
                /@delimiters/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'delimiter'
                    }
                }
            ],
            [/[{}()\[\]<>]/, '@brackets'],
            [/@symbols/, { cases: { '@operators': 'operator', '@default': '' } }]
        ],
        whitespace: [
            [/[ \t\r\n]+/, 'white'],
            [/\/\*/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment']
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            [/\/\*/, 'comment', '@push'],
            ['\\*/', 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        string: [
            [/[^\\"]+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
        ],
        numbers: [
            //Octal
            [/(0o[0-7_]+)(@intSuffixes)?/, { token: 'number' }],
            //Binary
            [/(0b[0-1_]+)(@intSuffixes)?/, { token: 'number' }],
            //Exponent
            [/[\d][\d_]*(\.[\d][\d_]*)?[eE][+-][\d_]+(@floatSuffixes)?/, { token: 'number' }],
            //Float
            [/\b(\d\.?[\d_]*)(@floatSuffixes)?\b/, { token: 'number' }],
            //Hexadecimal
            [/(0x[\da-fA-F]+)_?(@intSuffixes)?/, { token: 'number' }],
            //Integer
            [/[\d][\d_]*(@intSuffixes?)?/, { token: 'number' }]
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvcnVzdC9ydXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHNEQUFzRDtBQUMvRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFFO0FBQ2pEO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyREFBMkQ7QUFDOUUsYUFBYSxzQkFBc0I7QUFDbkM7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsMEJBQTBCLFNBQVMsMkNBQTJDLEVBQUU7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIseURBQXlEO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxrQkFBa0I7QUFDOUQ7QUFDQSw0Q0FBNEMsa0JBQWtCO0FBQzlEO0FBQ0EsMEVBQTBFLGtCQUFrQjtBQUM1RjtBQUNBLG9EQUFvRCxrQkFBa0I7QUFDdEU7QUFDQSxrREFBa0Qsa0JBQWtCO0FBQ3BFO0FBQ0EsNENBQTRDLGtCQUFrQjtBQUM5RDtBQUNBO0FBQ0EiLCJmaWxlIjoiNTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICBjb21tZW50czoge1xuICAgICAgICBsaW5lQ29tbWVudDogJy8vJyxcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJy8qJywgJyovJ11cbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIFsneycsICd9J10sXG4gICAgICAgIFsnWycsICddJ10sXG4gICAgICAgIFsnKCcsICcpJ11cbiAgICBdLFxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiLCBub3RJbjogWydzdHJpbmcnLCAnY29tbWVudCddIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbJ3N0cmluZyddIH1cbiAgICBdLFxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfVxuICAgIF0sXG4gICAgZm9sZGluZzoge1xuICAgICAgICBtYXJrZXJzOiB7XG4gICAgICAgICAgICBzdGFydDogbmV3IFJlZ0V4cCgnXlxcXFxzKiNwcmFnbWFcXFxccytyZWdpb25cXFxcYicpLFxuICAgICAgICAgICAgZW5kOiBuZXcgUmVnRXhwKCdeXFxcXHMqI3ByYWdtYVxcXFxzK2VuZHJlZ2lvblxcXFxiJylcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIHRva2VuUG9zdGZpeDogJy5ydXN0JyxcbiAgICBkZWZhdWx0VG9rZW46ICdpbnZhbGlkJyxcbiAgICBrZXl3b3JkczogW1xuICAgICAgICAnYXMnLFxuICAgICAgICAnYm94JyxcbiAgICAgICAgJ2JyZWFrJyxcbiAgICAgICAgJ2NvbnN0JyxcbiAgICAgICAgJ2NvbnRpbnVlJyxcbiAgICAgICAgJ2NyYXRlJyxcbiAgICAgICAgJ2Vsc2UnLFxuICAgICAgICAnZW51bScsXG4gICAgICAgICdleHRlcm4nLFxuICAgICAgICAnZmFsc2UnLFxuICAgICAgICAnZm4nLFxuICAgICAgICAnZm9yJyxcbiAgICAgICAgJ2lmJyxcbiAgICAgICAgJ2ltcGwnLFxuICAgICAgICAnaW4nLFxuICAgICAgICAnbGV0JyxcbiAgICAgICAgJ2xvb3AnLFxuICAgICAgICAnbWF0Y2gnLFxuICAgICAgICAnbW9kJyxcbiAgICAgICAgJ21vdmUnLFxuICAgICAgICAnbXV0JyxcbiAgICAgICAgJ3B1YicsXG4gICAgICAgICdyZWYnLFxuICAgICAgICAncmV0dXJuJyxcbiAgICAgICAgJ3NlbGYnLFxuICAgICAgICAnc3RhdGljJyxcbiAgICAgICAgJ3N0cnVjdCcsXG4gICAgICAgICdzdXBlcicsXG4gICAgICAgICd0cmFpdCcsXG4gICAgICAgICd0cnVlJyxcbiAgICAgICAgJ3R5cGUnLFxuICAgICAgICAndW5zYWZlJyxcbiAgICAgICAgJ3VzZScsXG4gICAgICAgICd3aGVyZScsXG4gICAgICAgICd3aGlsZScsXG4gICAgICAgICdjYXRjaCcsXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgJ3VuaW9uJyxcbiAgICAgICAgJ3N0YXRpYycsXG4gICAgICAgICdhYnN0cmFjdCcsXG4gICAgICAgICdhbGlnbm9mJyxcbiAgICAgICAgJ2JlY29tZScsXG4gICAgICAgICdkbycsXG4gICAgICAgICdmaW5hbCcsXG4gICAgICAgICdtYWNybycsXG4gICAgICAgICdvZmZzZXRvZicsXG4gICAgICAgICdvdmVycmlkZScsXG4gICAgICAgICdwcml2JyxcbiAgICAgICAgJ3Byb2MnLFxuICAgICAgICAncHVyZScsXG4gICAgICAgICdzaXplb2YnLFxuICAgICAgICAndHlwZW9mJyxcbiAgICAgICAgJ3Vuc2l6ZWQnLFxuICAgICAgICAndmlydHVhbCcsXG4gICAgICAgICd5aWVsZCdcbiAgICBdLFxuICAgIHR5cGVLZXl3b3JkczogW1xuICAgICAgICAnU2VsZicsXG4gICAgICAgICdtMzInLFxuICAgICAgICAnbTY0JyxcbiAgICAgICAgJ20xMjgnLFxuICAgICAgICAnZjgwJyxcbiAgICAgICAgJ2YxNicsXG4gICAgICAgICdmMTI4JyxcbiAgICAgICAgJ2ludCcsXG4gICAgICAgICd1aW50JyxcbiAgICAgICAgJ2Zsb2F0JyxcbiAgICAgICAgJ2NoYXInLFxuICAgICAgICAnYm9vbCcsXG4gICAgICAgICd1OCcsXG4gICAgICAgICd1MTYnLFxuICAgICAgICAndTMyJyxcbiAgICAgICAgJ3U2NCcsXG4gICAgICAgICdmMzInLFxuICAgICAgICAnZjY0JyxcbiAgICAgICAgJ2k4JyxcbiAgICAgICAgJ2kxNicsXG4gICAgICAgICdpMzInLFxuICAgICAgICAnaTY0JyxcbiAgICAgICAgJ3N0cicsXG4gICAgICAgICdPcHRpb24nLFxuICAgICAgICAnRWl0aGVyJyxcbiAgICAgICAgJ2NfZmxvYXQnLFxuICAgICAgICAnY19kb3VibGUnLFxuICAgICAgICAnY192b2lkJyxcbiAgICAgICAgJ0ZJTEUnLFxuICAgICAgICAnZnBvc190JyxcbiAgICAgICAgJ0RJUicsXG4gICAgICAgICdkaXJlbnQnLFxuICAgICAgICAnY19jaGFyJyxcbiAgICAgICAgJ2Nfc2NoYXInLFxuICAgICAgICAnY191Y2hhcicsXG4gICAgICAgICdjX3Nob3J0JyxcbiAgICAgICAgJ2NfdXNob3J0JyxcbiAgICAgICAgJ2NfaW50JyxcbiAgICAgICAgJ2NfdWludCcsXG4gICAgICAgICdjX2xvbmcnLFxuICAgICAgICAnY191bG9uZycsXG4gICAgICAgICdzaXplX3QnLFxuICAgICAgICAncHRyZGlmZl90JyxcbiAgICAgICAgJ2Nsb2NrX3QnLFxuICAgICAgICAndGltZV90JyxcbiAgICAgICAgJ2NfbG9uZ2xvbmcnLFxuICAgICAgICAnY191bG9uZ2xvbmcnLFxuICAgICAgICAnaW50cHRyX3QnLFxuICAgICAgICAndWludHB0cl90JyxcbiAgICAgICAgJ29mZl90JyxcbiAgICAgICAgJ2Rldl90JyxcbiAgICAgICAgJ2lub190JyxcbiAgICAgICAgJ3BpZF90JyxcbiAgICAgICAgJ21vZGVfdCcsXG4gICAgICAgICdzc2l6ZV90J1xuICAgIF0sXG4gICAgY29uc3RhbnRzOiBbJ3RydWUnLCAnZmFsc2UnLCAnU29tZScsICdOb25lJywgJ0xlZnQnLCAnUmlnaHQnLCAnT2snLCAnRXJyJ10sXG4gICAgc3VwcG9ydENvbnN0YW50czogW1xuICAgICAgICAnRVhJVF9GQUlMVVJFJyxcbiAgICAgICAgJ0VYSVRfU1VDQ0VTUycsXG4gICAgICAgICdSQU5EX01BWCcsXG4gICAgICAgICdFT0YnLFxuICAgICAgICAnU0VFS19TRVQnLFxuICAgICAgICAnU0VFS19DVVInLFxuICAgICAgICAnU0VFS19FTkQnLFxuICAgICAgICAnX0lPRkJGJyxcbiAgICAgICAgJ19JT05CRicsXG4gICAgICAgICdfSU9MQkYnLFxuICAgICAgICAnQlVGU0laJyxcbiAgICAgICAgJ0ZPUEVOX01BWCcsXG4gICAgICAgICdGSUxFTkFNRV9NQVgnLFxuICAgICAgICAnTF90bXBuYW0nLFxuICAgICAgICAnVE1QX01BWCcsXG4gICAgICAgICdPX1JET05MWScsXG4gICAgICAgICdPX1dST05MWScsXG4gICAgICAgICdPX1JEV1InLFxuICAgICAgICAnT19BUFBFTkQnLFxuICAgICAgICAnT19DUkVBVCcsXG4gICAgICAgICdPX0VYQ0wnLFxuICAgICAgICAnT19UUlVOQycsXG4gICAgICAgICdTX0lGSUZPJyxcbiAgICAgICAgJ1NfSUZDSFInLFxuICAgICAgICAnU19JRkJMSycsXG4gICAgICAgICdTX0lGRElSJyxcbiAgICAgICAgJ1NfSUZSRUcnLFxuICAgICAgICAnU19JRk1UJyxcbiAgICAgICAgJ1NfSUVYRUMnLFxuICAgICAgICAnU19JV1JJVEUnLFxuICAgICAgICAnU19JUkVBRCcsXG4gICAgICAgICdTX0lSV1hVJyxcbiAgICAgICAgJ1NfSVhVU1InLFxuICAgICAgICAnU19JV1VTUicsXG4gICAgICAgICdTX0lSVVNSJyxcbiAgICAgICAgJ0ZfT0snLFxuICAgICAgICAnUl9PSycsXG4gICAgICAgICdXX09LJyxcbiAgICAgICAgJ1hfT0snLFxuICAgICAgICAnU1RESU5fRklMRU5PJyxcbiAgICAgICAgJ1NURE9VVF9GSUxFTk8nLFxuICAgICAgICAnU1RERVJSX0ZJTEVOTydcbiAgICBdLFxuICAgIHN1cHBvcnRNYWNyb3M6IFtcbiAgICAgICAgJ2Zvcm1hdCEnLFxuICAgICAgICAncHJpbnQhJyxcbiAgICAgICAgJ3ByaW50bG4hJyxcbiAgICAgICAgJ3BhbmljIScsXG4gICAgICAgICdmb3JtYXRfYXJncyEnLFxuICAgICAgICAndW5yZWFjaGFibGUhJyxcbiAgICAgICAgJ3dyaXRlIScsXG4gICAgICAgICd3cml0ZWxuISdcbiAgICBdLFxuICAgIG9wZXJhdG9yczogW1xuICAgICAgICAnIScsXG4gICAgICAgICchPScsXG4gICAgICAgICclJyxcbiAgICAgICAgJyU9JyxcbiAgICAgICAgJyYnLFxuICAgICAgICAnJj0nLFxuICAgICAgICAnJiYnLFxuICAgICAgICAnKicsXG4gICAgICAgICcqPScsXG4gICAgICAgICcrJyxcbiAgICAgICAgJys9JyxcbiAgICAgICAgJy0nLFxuICAgICAgICAnLT0nLFxuICAgICAgICAnLT4nLFxuICAgICAgICAnLicsXG4gICAgICAgICcuLicsXG4gICAgICAgICcuLi4nLFxuICAgICAgICAnLycsXG4gICAgICAgICcvPScsXG4gICAgICAgICc6JyxcbiAgICAgICAgJzsnLFxuICAgICAgICAnPDwnLFxuICAgICAgICAnPDw9JyxcbiAgICAgICAgJzwnLFxuICAgICAgICAnPD0nLFxuICAgICAgICAnPScsXG4gICAgICAgICc9PScsXG4gICAgICAgICc9PicsXG4gICAgICAgICc+JyxcbiAgICAgICAgJz49JyxcbiAgICAgICAgJz4+JyxcbiAgICAgICAgJz4+PScsXG4gICAgICAgICdAJyxcbiAgICAgICAgJ14nLFxuICAgICAgICAnXj0nLFxuICAgICAgICAnfCcsXG4gICAgICAgICd8PScsXG4gICAgICAgICd8fCcsXG4gICAgICAgICdfJyxcbiAgICAgICAgJz8nLFxuICAgICAgICAnIydcbiAgICBdLFxuICAgIGVzY2FwZXM6IC9cXFxcKFtucnQwXFxcIicnXFxcXF18eFxcaHsyfXx1XFx7XFxoezEsNn1cXH0pLyxcbiAgICBkZWxpbWl0ZXJzOiAvWyxdLyxcbiAgICBzeW1ib2xzOiAvW1xcI1xcIVxcJVxcJlxcKlxcK1xcLVxcLlxcL1xcOlxcO1xcPFxcPVxcPlxcQFxcXlxcfF9cXD9dKy8sXG4gICAgaW50U3VmZml4ZXM6IC9baXVdKDh8MTZ8MzJ8NjR8MTI4fHNpemUpLyxcbiAgICBmbG9hdFN1ZmZpeGVzOiAvZigzMnw2NCkvLFxuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1thLXpBLVpdW2EtekEtWjAtOV9dKiE/fF9bYS16QS1aMC05X10rLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQHR5cGVLZXl3b3Jkcyc6ICdrZXl3b3JkLnR5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAc3VwcG9ydENvbnN0YW50cyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAc3VwcG9ydE1hY3Jvcyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAY29uc3RhbnRzJzogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gRGVzaWduYXRvclxuICAgICAgICAgICAgWy9cXCQvLCAnaWRlbnRpZmllciddLFxuICAgICAgICAgICAgLy8gTGlmZXRpbWUgYW5ub3RhdGlvbnNcbiAgICAgICAgICAgIFsvJ1thLXpBLVpfXVthLXpBLVowLTlfXSooPz1bXlxcJ10pLywgJ2lkZW50aWZpZXInXSxcbiAgICAgICAgICAgIC8vIEJ5dGUgbGl0ZXJhbFxuICAgICAgICAgICAgWy8nXFxTJy8sICdzdHJpbmcuYnl0ZWxpdGVyYWwnXSxcbiAgICAgICAgICAgIC8vIFN0cmluZ3NcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLnF1b3RlJywgYnJhY2tldDogJ0BvcGVuJywgbmV4dDogJ0BzdHJpbmcnIH1dLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQG51bWJlcnMnIH0sXG4gICAgICAgICAgICAvLyBXaGl0ZXNwYWNlICsgY29tbWVudHNcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9AZGVsaW1pdGVycy8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdkZWxpbWl0ZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy9be30oKVxcW1xcXTw+XS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFsvQHN5bWJvbHMvLCB7IGNhc2VzOiB7ICdAb3BlcmF0b3JzJzogJ29wZXJhdG9yJywgJ0BkZWZhdWx0JzogJycgfSB9XVxuICAgICAgICBdLFxuICAgICAgICB3aGl0ZXNwYWNlOiBbXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnd2hpdGUnXSxcbiAgICAgICAgICAgIFsvXFwvXFwqLywgJ2NvbW1lbnQnLCAnQGNvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvXFwvXFwvLiokLywgJ2NvbW1lbnQnXVxuICAgICAgICBdLFxuICAgICAgICBjb21tZW50OiBbXG4gICAgICAgICAgICBbL1teXFwvKl0rLywgJ2NvbW1lbnQnXSxcbiAgICAgICAgICAgIFsvXFwvXFwqLywgJ2NvbW1lbnQnLCAnQHB1c2gnXSxcbiAgICAgICAgICAgIFsnXFxcXCovJywgJ2NvbW1lbnQnLCAnQHBvcCddLFxuICAgICAgICAgICAgWy9bXFwvKl0vLCAnY29tbWVudCddXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZzogW1xuICAgICAgICAgICAgWy9bXlxcXFxcIl0rLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxuICAgICAgICAgICAgWy9cIi8sIHsgdG9rZW46ICdzdHJpbmcucXVvdGUnLCBicmFja2V0OiAnQGNsb3NlJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIG51bWJlcnM6IFtcbiAgICAgICAgICAgIC8vT2N0YWxcbiAgICAgICAgICAgIFsvKDBvWzAtN19dKykoQGludFN1ZmZpeGVzKT8vLCB7IHRva2VuOiAnbnVtYmVyJyB9XSxcbiAgICAgICAgICAgIC8vQmluYXJ5XG4gICAgICAgICAgICBbLygwYlswLTFfXSspKEBpbnRTdWZmaXhlcyk/LywgeyB0b2tlbjogJ251bWJlcicgfV0sXG4gICAgICAgICAgICAvL0V4cG9uZW50XG4gICAgICAgICAgICBbL1tcXGRdW1xcZF9dKihcXC5bXFxkXVtcXGRfXSopP1tlRV1bKy1dW1xcZF9dKyhAZmxvYXRTdWZmaXhlcyk/LywgeyB0b2tlbjogJ251bWJlcicgfV0sXG4gICAgICAgICAgICAvL0Zsb2F0XG4gICAgICAgICAgICBbL1xcYihcXGRcXC4/W1xcZF9dKikoQGZsb2F0U3VmZml4ZXMpP1xcYi8sIHsgdG9rZW46ICdudW1iZXInIH1dLFxuICAgICAgICAgICAgLy9IZXhhZGVjaW1hbFxuICAgICAgICAgICAgWy8oMHhbXFxkYS1mQS1GXSspXz8oQGludFN1ZmZpeGVzKT8vLCB7IHRva2VuOiAnbnVtYmVyJyB9XSxcbiAgICAgICAgICAgIC8vSW50ZWdlclxuICAgICAgICAgICAgWy9bXFxkXVtcXGRfXSooQGludFN1ZmZpeGVzPyk/LywgeyB0b2tlbjogJ251bWJlcicgfV1cbiAgICAgICAgXVxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9