(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "../../node_modules/monaco-editor/esm/vs/basic-languages/perl/perl.js":
/*!********************************************************************************************************************************!*\
  !*** /home/manstis/workspaces/git/manstis/forks/kogito-tooling/node_modules/monaco-editor/esm/vs/basic-languages/perl/perl.js ***!
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
    tokenPostfix: '.perl',
    brackets: [
        { token: 'delimiter.bracket', open: '{', close: '}' },
        { token: 'delimiter.parenthesis', open: '(', close: ')' },
        { token: 'delimiter.square', open: '[', close: ']' }
    ],
    // https://learn.perl.org/docs/keywords.html
    // Perl syntax
    keywords: [
        '__DATA__',
        'else',
        'lock',
        '__END__',
        'elsif',
        'lt',
        '__FILE__',
        'eq',
        '__LINE__',
        'exp',
        'ne',
        'sub',
        '__PACKAGE__',
        'for',
        'no',
        'and',
        'foreach',
        'or',
        'unless',
        'cmp',
        'ge',
        'package',
        'until',
        'continue',
        'gt',
        'while',
        'CORE',
        'if',
        'xor',
        'do',
        'le',
        '__DIE__',
        '__WARN__'
    ],
    // Perl functions
    builtinFunctions: [
        '-A',
        'END',
        'length',
        'setpgrp',
        '-B',
        'endgrent',
        'link',
        'setpriority',
        '-b',
        'endhostent',
        'listen',
        'setprotoent',
        '-C',
        'endnetent',
        'local',
        'setpwent',
        '-c',
        'endprotoent',
        'localtime',
        'setservent',
        '-d',
        'endpwent',
        'log',
        'setsockopt',
        '-e',
        'endservent',
        'lstat',
        'shift',
        '-f',
        'eof',
        'map',
        'shmctl',
        '-g',
        'eval',
        'mkdir',
        'shmget',
        '-k',
        'exec',
        'msgctl',
        'shmread',
        '-l',
        'exists',
        'msgget',
        'shmwrite',
        '-M',
        'exit',
        'msgrcv',
        'shutdown',
        '-O',
        'fcntl',
        'msgsnd',
        'sin',
        '-o',
        'fileno',
        'my',
        'sleep',
        '-p',
        'flock',
        'next',
        'socket',
        '-r',
        'fork',
        'not',
        'socketpair',
        '-R',
        'format',
        'oct',
        'sort',
        '-S',
        'formline',
        'open',
        'splice',
        '-s',
        'getc',
        'opendir',
        'split',
        '-T',
        'getgrent',
        'ord',
        'sprintf',
        '-t',
        'getgrgid',
        'our',
        'sqrt',
        '-u',
        'getgrnam',
        'pack',
        'srand',
        '-w',
        'gethostbyaddr',
        'pipe',
        'stat',
        '-W',
        'gethostbyname',
        'pop',
        'state',
        '-X',
        'gethostent',
        'pos',
        'study',
        '-x',
        'getlogin',
        'print',
        'substr',
        '-z',
        'getnetbyaddr',
        'printf',
        'symlink',
        'abs',
        'getnetbyname',
        'prototype',
        'syscall',
        'accept',
        'getnetent',
        'push',
        'sysopen',
        'alarm',
        'getpeername',
        'quotemeta',
        'sysread',
        'atan2',
        'getpgrp',
        'rand',
        'sysseek',
        'AUTOLOAD',
        'getppid',
        'read',
        'system',
        'BEGIN',
        'getpriority',
        'readdir',
        'syswrite',
        'bind',
        'getprotobyname',
        'readline',
        'tell',
        'binmode',
        'getprotobynumber',
        'readlink',
        'telldir',
        'bless',
        'getprotoent',
        'readpipe',
        'tie',
        'break',
        'getpwent',
        'recv',
        'tied',
        'caller',
        'getpwnam',
        'redo',
        'time',
        'chdir',
        'getpwuid',
        'ref',
        'times',
        'CHECK',
        'getservbyname',
        'rename',
        'truncate',
        'chmod',
        'getservbyport',
        'require',
        'uc',
        'chomp',
        'getservent',
        'reset',
        'ucfirst',
        'chop',
        'getsockname',
        'return',
        'umask',
        'chown',
        'getsockopt',
        'reverse',
        'undef',
        'chr',
        'glob',
        'rewinddir',
        'UNITCHECK',
        'chroot',
        'gmtime',
        'rindex',
        'unlink',
        'close',
        'goto',
        'rmdir',
        'unpack',
        'closedir',
        'grep',
        'say',
        'unshift',
        'connect',
        'hex',
        'scalar',
        'untie',
        'cos',
        'index',
        'seek',
        'use',
        'crypt',
        'INIT',
        'seekdir',
        'utime',
        'dbmclose',
        'int',
        'select',
        'values',
        'dbmopen',
        'ioctl',
        'semctl',
        'vec',
        'defined',
        'join',
        'semget',
        'wait',
        'delete',
        'keys',
        'semop',
        'waitpid',
        'DESTROY',
        'kill',
        'send',
        'wantarray',
        'die',
        'last',
        'setgrent',
        'warn',
        'dump',
        'lc',
        'sethostent',
        'write',
        'each',
        'lcfirst',
        'setnetent'
    ],
    // File handlers
    builtinFileHandlers: ['ARGV', 'STDERR', 'STDOUT', 'ARGVOUT', 'STDIN', 'ENV'],
    // Perl variables
    builtinVariables: [
        '$!',
        '$^RE_TRIE_MAXBUF',
        '$LAST_REGEXP_CODE_RESULT',
        '$"',
        '$^S',
        '$LIST_SEPARATOR',
        '$#',
        '$^T',
        '$MATCH',
        '$$',
        '$^TAINT',
        '$MULTILINE_MATCHING',
        '$%',
        '$^UNICODE',
        '$NR',
        '$&',
        '$^UTF8LOCALE',
        '$OFMT',
        "$'",
        '$^V',
        '$OFS',
        '$(',
        '$^W',
        '$ORS',
        '$)',
        '$^WARNING_BITS',
        '$OS_ERROR',
        '$*',
        '$^WIDE_SYSTEM_CALLS',
        '$OSNAME',
        '$+',
        '$^X',
        '$OUTPUT_AUTO_FLUSH',
        '$,',
        '$_',
        '$OUTPUT_FIELD_SEPARATOR',
        '$-',
        '$`',
        '$OUTPUT_RECORD_SEPARATOR',
        '$.',
        '$a',
        '$PERL_VERSION',
        '$/',
        '$ACCUMULATOR',
        '$PERLDB',
        '$0',
        '$ARG',
        '$PID',
        '$:',
        '$ARGV',
        '$POSTMATCH',
        '$;',
        '$b',
        '$PREMATCH',
        '$<',
        '$BASETIME',
        '$PROCESS_ID',
        '$=',
        '$CHILD_ERROR',
        '$PROGRAM_NAME',
        '$>',
        '$COMPILING',
        '$REAL_GROUP_ID',
        '$?',
        '$DEBUGGING',
        '$REAL_USER_ID',
        '$@',
        '$EFFECTIVE_GROUP_ID',
        '$RS',
        '$[',
        '$EFFECTIVE_USER_ID',
        '$SUBSCRIPT_SEPARATOR',
        '$\\',
        '$EGID',
        '$SUBSEP',
        '$]',
        '$ERRNO',
        '$SYSTEM_FD_MAX',
        '$^',
        '$EUID',
        '$UID',
        '$^A',
        '$EVAL_ERROR',
        '$WARNING',
        '$^C',
        '$EXCEPTIONS_BEING_CAUGHT',
        '$|',
        '$^CHILD_ERROR_NATIVE',
        '$EXECUTABLE_NAME',
        '$~',
        '$^D',
        '$EXTENDED_OS_ERROR',
        '%!',
        '$^E',
        '$FORMAT_FORMFEED',
        '%^H',
        '$^ENCODING',
        '$FORMAT_LINE_BREAK_CHARACTERS',
        '%ENV',
        '$^F',
        '$FORMAT_LINES_LEFT',
        '%INC',
        '$^H',
        '$FORMAT_LINES_PER_PAGE',
        '%OVERLOAD',
        '$^I',
        '$FORMAT_NAME',
        '%SIG',
        '$^L',
        '$FORMAT_PAGE_NUMBER',
        '@+',
        '$^M',
        '$FORMAT_TOP_NAME',
        '@-',
        '$^N',
        '$GID',
        '@_',
        '$^O',
        '$INPLACE_EDIT',
        '@ARGV',
        '$^OPEN',
        '$INPUT_LINE_NUMBER',
        '@INC',
        '$^P',
        '$INPUT_RECORD_SEPARATOR',
        '@LAST_MATCH_START',
        '$^R',
        '$LAST_MATCH_END',
        '$^RE_DEBUG_FLAGS',
        '$LAST_PAREN_MATCH'
    ],
    // operators
    symbols: /[:+\-\^*$&%@=<>!?|\/~\.]/,
    quoteLikeOps: ['qr', 'm', 's', 'q', 'qq', 'qx', 'qw', 'tr', 'y'],
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            { include: '@whitespace' },
            [
                /[a-zA-Z\-_][\w\-_]*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@builtinFunctions': 'type.identifier',
                        '@builtinFileHandlers': 'variable.predefined',
                        '@quoteLikeOps': {
                            token: '@rematch',
                            next: 'quotedConstructs'
                        },
                        '@default': ''
                    }
                }
            ],
            // Perl variables
            [
                /[\$@%][*@#?\+\-\$!\w\\\^><~:;\.]+/,
                {
                    cases: {
                        '@builtinVariables': 'variable.predefined',
                        '@default': 'variable'
                    }
                }
            ],
            { include: '@strings' },
            { include: '@dblStrings' },
            // Perl Doc
            { include: '@perldoc' },
            // Here Doc
            { include: '@heredoc' },
            [/[{}\[\]()]/, '@brackets'],
            // RegExp
            [/[\/](?:(?:\[(?:\\]|[^\]])+\])|(?:\\\/|[^\]\/]))*[\/]\w*\s*(?=[).,;]|$)/, 'regexp'],
            [/@symbols/, 'operators'],
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
        // Single quote string
        strings: [[/'/, 'string', '@stringBody']],
        stringBody: [
            [/'/, 'string', '@popall'],
            [/\\'/, 'string.escape'],
            [/./, 'string']
        ],
        // Double quote string
        dblStrings: [[/"/, 'string', '@dblStringBody']],
        dblStringBody: [
            [/"/, 'string', '@popall'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            { include: '@variables' },
            [/./, 'string']
        ],
        // Quoted constructs
        // Percent strings in Ruby are similar to quote-like operators in Perl.
        // This is adapted from pstrings in ../ruby/ruby.ts.
        quotedConstructs: [
            [/(q|qw|tr|y)\s*\(/, { token: 'string.delim', switchTo: '@qstring.(.)' }],
            [/(q|qw|tr|y)\s*\[/, { token: 'string.delim', switchTo: '@qstring.[.]' }],
            [/(q|qw|tr|y)\s*\{/, { token: 'string.delim', switchTo: '@qstring.{.}' }],
            [/(q|qw|tr|y)\s*</, { token: 'string.delim', switchTo: '@qstring.<.>' }],
            [/(q|qw|tr|y)#/, { token: 'string.delim', switchTo: '@qstring.#.#' }],
            [
                /(q|qw|tr|y)\s*([^A-Za-z0-9#\s])/,
                { token: 'string.delim', switchTo: '@qstring.$2.$2' }
            ],
            [/(q|qw|tr|y)\s+(\w)/, { token: 'string.delim', switchTo: '@qstring.$2.$2' }],
            [/(qr|m|s)\s*\(/, { token: 'regexp.delim', switchTo: '@qregexp.(.)' }],
            [/(qr|m|s)\s*\[/, { token: 'regexp.delim', switchTo: '@qregexp.[.]' }],
            [/(qr|m|s)\s*\{/, { token: 'regexp.delim', switchTo: '@qregexp.{.}' }],
            [/(qr|m|s)\s*</, { token: 'regexp.delim', switchTo: '@qregexp.<.>' }],
            [/(qr|m|s)#/, { token: 'regexp.delim', switchTo: '@qregexp.#.#' }],
            [
                /(qr|m|s)\s*([^A-Za-z0-9_#\s])/,
                { token: 'regexp.delim', switchTo: '@qregexp.$2.$2' }
            ],
            [/(qr|m|s)\s+(\w)/, { token: 'regexp.delim', switchTo: '@qregexp.$2.$2' }],
            [/(qq|qx)\s*\(/, { token: 'string.delim', switchTo: '@qqstring.(.)' }],
            [/(qq|qx)\s*\[/, { token: 'string.delim', switchTo: '@qqstring.[.]' }],
            [/(qq|qx)\s*\{/, { token: 'string.delim', switchTo: '@qqstring.{.}' }],
            [/(qq|qx)\s*</, { token: 'string.delim', switchTo: '@qqstring.<.>' }],
            [/(qq|qx)#/, { token: 'string.delim', switchTo: '@qqstring.#.#' }],
            [/(qq|qx)\s*([^A-Za-z0-9#\s])/, { token: 'string.delim', switchTo: '@qqstring.$2.$2' }],
            [/(qq|qx)\s+(\w)/, { token: 'string.delim', switchTo: '@qqstring.$2.$2' }]
        ],
        // Non-expanded quoted string
        // qstring<open>.<close>
        //  open = open delimiter
        //  close = close delimiter
        qstring: [
            [/\\./, 'string.escape'],
            [
                /./,
                {
                    cases: {
                        '$#==$S3': { token: 'string.delim', next: '@pop' },
                        '$#==$S2': { token: 'string.delim', next: '@push' },
                        '@default': 'string'
                    }
                }
            ]
        ],
        // Quoted regexp
        // qregexp.<open>.<close>
        //  open = open delimiter
        //  close = close delimiter
        qregexp: [
            { include: '@variables' },
            [/\\./, 'regexp.escape'],
            [
                /./,
                {
                    cases: {
                        '$#==$S3': {
                            token: 'regexp.delim',
                            next: '@regexpModifiers'
                        },
                        '$#==$S2': { token: 'regexp.delim', next: '@push' },
                        '@default': 'regexp'
                    }
                }
            ]
        ],
        regexpModifiers: [[/[msixpodualngcer]+/, { token: 'regexp.modifier', next: '@popall' }]],
        // Expanded quoted string
        // qqstring.<open>.<close>
        //  open = open delimiter
        //  close = close delimiter
        qqstring: [{ include: '@variables' }, { include: '@qstring' }],
        heredoc: [
            [
                /<<\s*['"`]?([\w\-]+)['"`]?/,
                { token: 'string.heredoc.delimiter', next: '@heredocBody.$1' }
            ]
        ],
        heredocBody: [
            [
                /^([\w\-]+)$/,
                {
                    cases: {
                        '$1==$S2': [
                            {
                                token: 'string.heredoc.delimiter',
                                next: '@popall'
                            }
                        ],
                        '@default': 'string.heredoc'
                    }
                }
            ],
            [/./, 'string.heredoc']
        ],
        perldoc: [[/^=\w/, 'comment.doc', '@perldocBody']],
        perldocBody: [
            [/^=cut\b/, 'type.identifier', '@popall'],
            [/./, 'comment.doc']
        ],
        variables: [
            [/\$\w+/, 'variable'],
            [/@\w+/, 'variable'],
            [/%\w+/, 'variable'] // key/value
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUvbWFuc3Rpcy93b3Jrc3BhY2VzL2dpdC9tYW5zdGlzL2ZvcmtzL2tvZ2l0by10b29saW5nL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvcGVybC9wZXJsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTLHFDQUFxQyxZQUFZLEdBQUc7QUFDN0QsU0FBUyx3REFBd0Q7QUFDakUsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLElBQUksY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHlCQUF5QjtBQUN0QztBQUNBLGFBQWEsc0JBQXNCO0FBQ25DO0FBQ0EsYUFBYSxzQkFBc0I7QUFDbkMsaUJBQWlCO0FBQ2pCO0FBQ0EsZ0ZBQWdGO0FBQ2hGO0FBQ0EsYUFBYSxzQkFBc0I7QUFDbkMsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsd0JBQXdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxrREFBa0Q7QUFDcEYsa0NBQWtDLGtEQUFrRDtBQUNwRiw4QkFBOEIsSUFBSSw2Q0FBNkMsRUFBRSxHQUFHO0FBQ3BGLGlDQUFpQyxrREFBa0Q7QUFDbkYsOEJBQThCLGtEQUFrRDtBQUNoRjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0Esb0NBQW9DLG9EQUFvRDtBQUN4RiwrQkFBK0Isa0RBQWtEO0FBQ2pGLCtCQUErQixrREFBa0Q7QUFDakYsMkJBQTJCLElBQUksNkNBQTZDLEVBQUUsR0FBRztBQUNqRiw4QkFBOEIsa0RBQWtEO0FBQ2hGLDJCQUEyQixrREFBa0Q7QUFDN0U7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGlDQUFpQyxvREFBb0Q7QUFDckYsOEJBQThCLG1EQUFtRDtBQUNqRiw4QkFBOEIsbURBQW1EO0FBQ2pGLDBCQUEwQixJQUFJLDhDQUE4QyxFQUFFLEdBQUc7QUFDakYsNkJBQTZCLG1EQUFtRDtBQUNoRiwwQkFBMEIsbURBQW1EO0FBQzdFLDZDQUE2QyxxREFBcUQ7QUFDbEcsZ0NBQWdDLHFEQUFxRDtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHNDQUFzQztBQUMxRSxvQ0FBb0MsdUNBQXVDO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx3QkFBd0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixvQ0FBb0MsdUNBQXVDO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsNENBQTRDO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdCQUF3QixHQUFHLHNCQUFzQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMzkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICBjb21tZW50czoge1xuICAgICAgICBsaW5lQ29tbWVudDogJyMnXG4gICAgfSxcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJ3snLCAnfSddLFxuICAgICAgICBbJ1snLCAnXSddLFxuICAgICAgICBbJygnLCAnKSddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH0sXG4gICAgICAgIHsgb3BlbjogJ2AnLCBjbG9zZTogJ2AnIH1cbiAgICBdLFxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfSxcbiAgICAgICAgeyBvcGVuOiAnYCcsIGNsb3NlOiAnYCcgfVxuICAgIF1cbn07XG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xuICAgIGRlZmF1bHRUb2tlbjogJycsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLnBlcmwnLFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuYnJhY2tldCcsIG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJywgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXIuc3F1YXJlJywgb3BlbjogJ1snLCBjbG9zZTogJ10nIH1cbiAgICBdLFxuICAgIC8vIGh0dHBzOi8vbGVhcm4ucGVybC5vcmcvZG9jcy9rZXl3b3Jkcy5odG1sXG4gICAgLy8gUGVybCBzeW50YXhcbiAgICBrZXl3b3JkczogW1xuICAgICAgICAnX19EQVRBX18nLFxuICAgICAgICAnZWxzZScsXG4gICAgICAgICdsb2NrJyxcbiAgICAgICAgJ19fRU5EX18nLFxuICAgICAgICAnZWxzaWYnLFxuICAgICAgICAnbHQnLFxuICAgICAgICAnX19GSUxFX18nLFxuICAgICAgICAnZXEnLFxuICAgICAgICAnX19MSU5FX18nLFxuICAgICAgICAnZXhwJyxcbiAgICAgICAgJ25lJyxcbiAgICAgICAgJ3N1YicsXG4gICAgICAgICdfX1BBQ0tBR0VfXycsXG4gICAgICAgICdmb3InLFxuICAgICAgICAnbm8nLFxuICAgICAgICAnYW5kJyxcbiAgICAgICAgJ2ZvcmVhY2gnLFxuICAgICAgICAnb3InLFxuICAgICAgICAndW5sZXNzJyxcbiAgICAgICAgJ2NtcCcsXG4gICAgICAgICdnZScsXG4gICAgICAgICdwYWNrYWdlJyxcbiAgICAgICAgJ3VudGlsJyxcbiAgICAgICAgJ2NvbnRpbnVlJyxcbiAgICAgICAgJ2d0JyxcbiAgICAgICAgJ3doaWxlJyxcbiAgICAgICAgJ0NPUkUnLFxuICAgICAgICAnaWYnLFxuICAgICAgICAneG9yJyxcbiAgICAgICAgJ2RvJyxcbiAgICAgICAgJ2xlJyxcbiAgICAgICAgJ19fRElFX18nLFxuICAgICAgICAnX19XQVJOX18nXG4gICAgXSxcbiAgICAvLyBQZXJsIGZ1bmN0aW9uc1xuICAgIGJ1aWx0aW5GdW5jdGlvbnM6IFtcbiAgICAgICAgJy1BJyxcbiAgICAgICAgJ0VORCcsXG4gICAgICAgICdsZW5ndGgnLFxuICAgICAgICAnc2V0cGdycCcsXG4gICAgICAgICctQicsXG4gICAgICAgICdlbmRncmVudCcsXG4gICAgICAgICdsaW5rJyxcbiAgICAgICAgJ3NldHByaW9yaXR5JyxcbiAgICAgICAgJy1iJyxcbiAgICAgICAgJ2VuZGhvc3RlbnQnLFxuICAgICAgICAnbGlzdGVuJyxcbiAgICAgICAgJ3NldHByb3RvZW50JyxcbiAgICAgICAgJy1DJyxcbiAgICAgICAgJ2VuZG5ldGVudCcsXG4gICAgICAgICdsb2NhbCcsXG4gICAgICAgICdzZXRwd2VudCcsXG4gICAgICAgICctYycsXG4gICAgICAgICdlbmRwcm90b2VudCcsXG4gICAgICAgICdsb2NhbHRpbWUnLFxuICAgICAgICAnc2V0c2VydmVudCcsXG4gICAgICAgICctZCcsXG4gICAgICAgICdlbmRwd2VudCcsXG4gICAgICAgICdsb2cnLFxuICAgICAgICAnc2V0c29ja29wdCcsXG4gICAgICAgICctZScsXG4gICAgICAgICdlbmRzZXJ2ZW50JyxcbiAgICAgICAgJ2xzdGF0JyxcbiAgICAgICAgJ3NoaWZ0JyxcbiAgICAgICAgJy1mJyxcbiAgICAgICAgJ2VvZicsXG4gICAgICAgICdtYXAnLFxuICAgICAgICAnc2htY3RsJyxcbiAgICAgICAgJy1nJyxcbiAgICAgICAgJ2V2YWwnLFxuICAgICAgICAnbWtkaXInLFxuICAgICAgICAnc2htZ2V0JyxcbiAgICAgICAgJy1rJyxcbiAgICAgICAgJ2V4ZWMnLFxuICAgICAgICAnbXNnY3RsJyxcbiAgICAgICAgJ3NobXJlYWQnLFxuICAgICAgICAnLWwnLFxuICAgICAgICAnZXhpc3RzJyxcbiAgICAgICAgJ21zZ2dldCcsXG4gICAgICAgICdzaG13cml0ZScsXG4gICAgICAgICctTScsXG4gICAgICAgICdleGl0JyxcbiAgICAgICAgJ21zZ3JjdicsXG4gICAgICAgICdzaHV0ZG93bicsXG4gICAgICAgICctTycsXG4gICAgICAgICdmY250bCcsXG4gICAgICAgICdtc2dzbmQnLFxuICAgICAgICAnc2luJyxcbiAgICAgICAgJy1vJyxcbiAgICAgICAgJ2ZpbGVubycsXG4gICAgICAgICdteScsXG4gICAgICAgICdzbGVlcCcsXG4gICAgICAgICctcCcsXG4gICAgICAgICdmbG9jaycsXG4gICAgICAgICduZXh0JyxcbiAgICAgICAgJ3NvY2tldCcsXG4gICAgICAgICctcicsXG4gICAgICAgICdmb3JrJyxcbiAgICAgICAgJ25vdCcsXG4gICAgICAgICdzb2NrZXRwYWlyJyxcbiAgICAgICAgJy1SJyxcbiAgICAgICAgJ2Zvcm1hdCcsXG4gICAgICAgICdvY3QnLFxuICAgICAgICAnc29ydCcsXG4gICAgICAgICctUycsXG4gICAgICAgICdmb3JtbGluZScsXG4gICAgICAgICdvcGVuJyxcbiAgICAgICAgJ3NwbGljZScsXG4gICAgICAgICctcycsXG4gICAgICAgICdnZXRjJyxcbiAgICAgICAgJ29wZW5kaXInLFxuICAgICAgICAnc3BsaXQnLFxuICAgICAgICAnLVQnLFxuICAgICAgICAnZ2V0Z3JlbnQnLFxuICAgICAgICAnb3JkJyxcbiAgICAgICAgJ3NwcmludGYnLFxuICAgICAgICAnLXQnLFxuICAgICAgICAnZ2V0Z3JnaWQnLFxuICAgICAgICAnb3VyJyxcbiAgICAgICAgJ3NxcnQnLFxuICAgICAgICAnLXUnLFxuICAgICAgICAnZ2V0Z3JuYW0nLFxuICAgICAgICAncGFjaycsXG4gICAgICAgICdzcmFuZCcsXG4gICAgICAgICctdycsXG4gICAgICAgICdnZXRob3N0YnlhZGRyJyxcbiAgICAgICAgJ3BpcGUnLFxuICAgICAgICAnc3RhdCcsXG4gICAgICAgICctVycsXG4gICAgICAgICdnZXRob3N0YnluYW1lJyxcbiAgICAgICAgJ3BvcCcsXG4gICAgICAgICdzdGF0ZScsXG4gICAgICAgICctWCcsXG4gICAgICAgICdnZXRob3N0ZW50JyxcbiAgICAgICAgJ3BvcycsXG4gICAgICAgICdzdHVkeScsXG4gICAgICAgICcteCcsXG4gICAgICAgICdnZXRsb2dpbicsXG4gICAgICAgICdwcmludCcsXG4gICAgICAgICdzdWJzdHInLFxuICAgICAgICAnLXonLFxuICAgICAgICAnZ2V0bmV0YnlhZGRyJyxcbiAgICAgICAgJ3ByaW50ZicsXG4gICAgICAgICdzeW1saW5rJyxcbiAgICAgICAgJ2FicycsXG4gICAgICAgICdnZXRuZXRieW5hbWUnLFxuICAgICAgICAncHJvdG90eXBlJyxcbiAgICAgICAgJ3N5c2NhbGwnLFxuICAgICAgICAnYWNjZXB0JyxcbiAgICAgICAgJ2dldG5ldGVudCcsXG4gICAgICAgICdwdXNoJyxcbiAgICAgICAgJ3N5c29wZW4nLFxuICAgICAgICAnYWxhcm0nLFxuICAgICAgICAnZ2V0cGVlcm5hbWUnLFxuICAgICAgICAncXVvdGVtZXRhJyxcbiAgICAgICAgJ3N5c3JlYWQnLFxuICAgICAgICAnYXRhbjInLFxuICAgICAgICAnZ2V0cGdycCcsXG4gICAgICAgICdyYW5kJyxcbiAgICAgICAgJ3N5c3NlZWsnLFxuICAgICAgICAnQVVUT0xPQUQnLFxuICAgICAgICAnZ2V0cHBpZCcsXG4gICAgICAgICdyZWFkJyxcbiAgICAgICAgJ3N5c3RlbScsXG4gICAgICAgICdCRUdJTicsXG4gICAgICAgICdnZXRwcmlvcml0eScsXG4gICAgICAgICdyZWFkZGlyJyxcbiAgICAgICAgJ3N5c3dyaXRlJyxcbiAgICAgICAgJ2JpbmQnLFxuICAgICAgICAnZ2V0cHJvdG9ieW5hbWUnLFxuICAgICAgICAncmVhZGxpbmUnLFxuICAgICAgICAndGVsbCcsXG4gICAgICAgICdiaW5tb2RlJyxcbiAgICAgICAgJ2dldHByb3RvYnludW1iZXInLFxuICAgICAgICAncmVhZGxpbmsnLFxuICAgICAgICAndGVsbGRpcicsXG4gICAgICAgICdibGVzcycsXG4gICAgICAgICdnZXRwcm90b2VudCcsXG4gICAgICAgICdyZWFkcGlwZScsXG4gICAgICAgICd0aWUnLFxuICAgICAgICAnYnJlYWsnLFxuICAgICAgICAnZ2V0cHdlbnQnLFxuICAgICAgICAncmVjdicsXG4gICAgICAgICd0aWVkJyxcbiAgICAgICAgJ2NhbGxlcicsXG4gICAgICAgICdnZXRwd25hbScsXG4gICAgICAgICdyZWRvJyxcbiAgICAgICAgJ3RpbWUnLFxuICAgICAgICAnY2hkaXInLFxuICAgICAgICAnZ2V0cHd1aWQnLFxuICAgICAgICAncmVmJyxcbiAgICAgICAgJ3RpbWVzJyxcbiAgICAgICAgJ0NIRUNLJyxcbiAgICAgICAgJ2dldHNlcnZieW5hbWUnLFxuICAgICAgICAncmVuYW1lJyxcbiAgICAgICAgJ3RydW5jYXRlJyxcbiAgICAgICAgJ2NobW9kJyxcbiAgICAgICAgJ2dldHNlcnZieXBvcnQnLFxuICAgICAgICAncmVxdWlyZScsXG4gICAgICAgICd1YycsXG4gICAgICAgICdjaG9tcCcsXG4gICAgICAgICdnZXRzZXJ2ZW50JyxcbiAgICAgICAgJ3Jlc2V0JyxcbiAgICAgICAgJ3VjZmlyc3QnLFxuICAgICAgICAnY2hvcCcsXG4gICAgICAgICdnZXRzb2NrbmFtZScsXG4gICAgICAgICdyZXR1cm4nLFxuICAgICAgICAndW1hc2snLFxuICAgICAgICAnY2hvd24nLFxuICAgICAgICAnZ2V0c29ja29wdCcsXG4gICAgICAgICdyZXZlcnNlJyxcbiAgICAgICAgJ3VuZGVmJyxcbiAgICAgICAgJ2NocicsXG4gICAgICAgICdnbG9iJyxcbiAgICAgICAgJ3Jld2luZGRpcicsXG4gICAgICAgICdVTklUQ0hFQ0snLFxuICAgICAgICAnY2hyb290JyxcbiAgICAgICAgJ2dtdGltZScsXG4gICAgICAgICdyaW5kZXgnLFxuICAgICAgICAndW5saW5rJyxcbiAgICAgICAgJ2Nsb3NlJyxcbiAgICAgICAgJ2dvdG8nLFxuICAgICAgICAncm1kaXInLFxuICAgICAgICAndW5wYWNrJyxcbiAgICAgICAgJ2Nsb3NlZGlyJyxcbiAgICAgICAgJ2dyZXAnLFxuICAgICAgICAnc2F5JyxcbiAgICAgICAgJ3Vuc2hpZnQnLFxuICAgICAgICAnY29ubmVjdCcsXG4gICAgICAgICdoZXgnLFxuICAgICAgICAnc2NhbGFyJyxcbiAgICAgICAgJ3VudGllJyxcbiAgICAgICAgJ2NvcycsXG4gICAgICAgICdpbmRleCcsXG4gICAgICAgICdzZWVrJyxcbiAgICAgICAgJ3VzZScsXG4gICAgICAgICdjcnlwdCcsXG4gICAgICAgICdJTklUJyxcbiAgICAgICAgJ3NlZWtkaXInLFxuICAgICAgICAndXRpbWUnLFxuICAgICAgICAnZGJtY2xvc2UnLFxuICAgICAgICAnaW50JyxcbiAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICd2YWx1ZXMnLFxuICAgICAgICAnZGJtb3BlbicsXG4gICAgICAgICdpb2N0bCcsXG4gICAgICAgICdzZW1jdGwnLFxuICAgICAgICAndmVjJyxcbiAgICAgICAgJ2RlZmluZWQnLFxuICAgICAgICAnam9pbicsXG4gICAgICAgICdzZW1nZXQnLFxuICAgICAgICAnd2FpdCcsXG4gICAgICAgICdkZWxldGUnLFxuICAgICAgICAna2V5cycsXG4gICAgICAgICdzZW1vcCcsXG4gICAgICAgICd3YWl0cGlkJyxcbiAgICAgICAgJ0RFU1RST1knLFxuICAgICAgICAna2lsbCcsXG4gICAgICAgICdzZW5kJyxcbiAgICAgICAgJ3dhbnRhcnJheScsXG4gICAgICAgICdkaWUnLFxuICAgICAgICAnbGFzdCcsXG4gICAgICAgICdzZXRncmVudCcsXG4gICAgICAgICd3YXJuJyxcbiAgICAgICAgJ2R1bXAnLFxuICAgICAgICAnbGMnLFxuICAgICAgICAnc2V0aG9zdGVudCcsXG4gICAgICAgICd3cml0ZScsXG4gICAgICAgICdlYWNoJyxcbiAgICAgICAgJ2xjZmlyc3QnLFxuICAgICAgICAnc2V0bmV0ZW50J1xuICAgIF0sXG4gICAgLy8gRmlsZSBoYW5kbGVyc1xuICAgIGJ1aWx0aW5GaWxlSGFuZGxlcnM6IFsnQVJHVicsICdTVERFUlInLCAnU1RET1VUJywgJ0FSR1ZPVVQnLCAnU1RESU4nLCAnRU5WJ10sXG4gICAgLy8gUGVybCB2YXJpYWJsZXNcbiAgICBidWlsdGluVmFyaWFibGVzOiBbXG4gICAgICAgICckIScsXG4gICAgICAgICckXlJFX1RSSUVfTUFYQlVGJyxcbiAgICAgICAgJyRMQVNUX1JFR0VYUF9DT0RFX1JFU1VMVCcsXG4gICAgICAgICckXCInLFxuICAgICAgICAnJF5TJyxcbiAgICAgICAgJyRMSVNUX1NFUEFSQVRPUicsXG4gICAgICAgICckIycsXG4gICAgICAgICckXlQnLFxuICAgICAgICAnJE1BVENIJyxcbiAgICAgICAgJyQkJyxcbiAgICAgICAgJyReVEFJTlQnLFxuICAgICAgICAnJE1VTFRJTElORV9NQVRDSElORycsXG4gICAgICAgICckJScsXG4gICAgICAgICckXlVOSUNPREUnLFxuICAgICAgICAnJE5SJyxcbiAgICAgICAgJyQmJyxcbiAgICAgICAgJyReVVRGOExPQ0FMRScsXG4gICAgICAgICckT0ZNVCcsXG4gICAgICAgIFwiJCdcIixcbiAgICAgICAgJyReVicsXG4gICAgICAgICckT0ZTJyxcbiAgICAgICAgJyQoJyxcbiAgICAgICAgJyReVycsXG4gICAgICAgICckT1JTJyxcbiAgICAgICAgJyQpJyxcbiAgICAgICAgJyReV0FSTklOR19CSVRTJyxcbiAgICAgICAgJyRPU19FUlJPUicsXG4gICAgICAgICckKicsXG4gICAgICAgICckXldJREVfU1lTVEVNX0NBTExTJyxcbiAgICAgICAgJyRPU05BTUUnLFxuICAgICAgICAnJCsnLFxuICAgICAgICAnJF5YJyxcbiAgICAgICAgJyRPVVRQVVRfQVVUT19GTFVTSCcsXG4gICAgICAgICckLCcsXG4gICAgICAgICckXycsXG4gICAgICAgICckT1VUUFVUX0ZJRUxEX1NFUEFSQVRPUicsXG4gICAgICAgICckLScsXG4gICAgICAgICckYCcsXG4gICAgICAgICckT1VUUFVUX1JFQ09SRF9TRVBBUkFUT1InLFxuICAgICAgICAnJC4nLFxuICAgICAgICAnJGEnLFxuICAgICAgICAnJFBFUkxfVkVSU0lPTicsXG4gICAgICAgICckLycsXG4gICAgICAgICckQUNDVU1VTEFUT1InLFxuICAgICAgICAnJFBFUkxEQicsXG4gICAgICAgICckMCcsXG4gICAgICAgICckQVJHJyxcbiAgICAgICAgJyRQSUQnLFxuICAgICAgICAnJDonLFxuICAgICAgICAnJEFSR1YnLFxuICAgICAgICAnJFBPU1RNQVRDSCcsXG4gICAgICAgICckOycsXG4gICAgICAgICckYicsXG4gICAgICAgICckUFJFTUFUQ0gnLFxuICAgICAgICAnJDwnLFxuICAgICAgICAnJEJBU0VUSU1FJyxcbiAgICAgICAgJyRQUk9DRVNTX0lEJyxcbiAgICAgICAgJyQ9JyxcbiAgICAgICAgJyRDSElMRF9FUlJPUicsXG4gICAgICAgICckUFJPR1JBTV9OQU1FJyxcbiAgICAgICAgJyQ+JyxcbiAgICAgICAgJyRDT01QSUxJTkcnLFxuICAgICAgICAnJFJFQUxfR1JPVVBfSUQnLFxuICAgICAgICAnJD8nLFxuICAgICAgICAnJERFQlVHR0lORycsXG4gICAgICAgICckUkVBTF9VU0VSX0lEJyxcbiAgICAgICAgJyRAJyxcbiAgICAgICAgJyRFRkZFQ1RJVkVfR1JPVVBfSUQnLFxuICAgICAgICAnJFJTJyxcbiAgICAgICAgJyRbJyxcbiAgICAgICAgJyRFRkZFQ1RJVkVfVVNFUl9JRCcsXG4gICAgICAgICckU1VCU0NSSVBUX1NFUEFSQVRPUicsXG4gICAgICAgICckXFxcXCcsXG4gICAgICAgICckRUdJRCcsXG4gICAgICAgICckU1VCU0VQJyxcbiAgICAgICAgJyRdJyxcbiAgICAgICAgJyRFUlJOTycsXG4gICAgICAgICckU1lTVEVNX0ZEX01BWCcsXG4gICAgICAgICckXicsXG4gICAgICAgICckRVVJRCcsXG4gICAgICAgICckVUlEJyxcbiAgICAgICAgJyReQScsXG4gICAgICAgICckRVZBTF9FUlJPUicsXG4gICAgICAgICckV0FSTklORycsXG4gICAgICAgICckXkMnLFxuICAgICAgICAnJEVYQ0VQVElPTlNfQkVJTkdfQ0FVR0hUJyxcbiAgICAgICAgJyR8JyxcbiAgICAgICAgJyReQ0hJTERfRVJST1JfTkFUSVZFJyxcbiAgICAgICAgJyRFWEVDVVRBQkxFX05BTUUnLFxuICAgICAgICAnJH4nLFxuICAgICAgICAnJF5EJyxcbiAgICAgICAgJyRFWFRFTkRFRF9PU19FUlJPUicsXG4gICAgICAgICclIScsXG4gICAgICAgICckXkUnLFxuICAgICAgICAnJEZPUk1BVF9GT1JNRkVFRCcsXG4gICAgICAgICclXkgnLFxuICAgICAgICAnJF5FTkNPRElORycsXG4gICAgICAgICckRk9STUFUX0xJTkVfQlJFQUtfQ0hBUkFDVEVSUycsXG4gICAgICAgICclRU5WJyxcbiAgICAgICAgJyReRicsXG4gICAgICAgICckRk9STUFUX0xJTkVTX0xFRlQnLFxuICAgICAgICAnJUlOQycsXG4gICAgICAgICckXkgnLFxuICAgICAgICAnJEZPUk1BVF9MSU5FU19QRVJfUEFHRScsXG4gICAgICAgICclT1ZFUkxPQUQnLFxuICAgICAgICAnJF5JJyxcbiAgICAgICAgJyRGT1JNQVRfTkFNRScsXG4gICAgICAgICclU0lHJyxcbiAgICAgICAgJyReTCcsXG4gICAgICAgICckRk9STUFUX1BBR0VfTlVNQkVSJyxcbiAgICAgICAgJ0ArJyxcbiAgICAgICAgJyReTScsXG4gICAgICAgICckRk9STUFUX1RPUF9OQU1FJyxcbiAgICAgICAgJ0AtJyxcbiAgICAgICAgJyReTicsXG4gICAgICAgICckR0lEJyxcbiAgICAgICAgJ0BfJyxcbiAgICAgICAgJyReTycsXG4gICAgICAgICckSU5QTEFDRV9FRElUJyxcbiAgICAgICAgJ0BBUkdWJyxcbiAgICAgICAgJyReT1BFTicsXG4gICAgICAgICckSU5QVVRfTElORV9OVU1CRVInLFxuICAgICAgICAnQElOQycsXG4gICAgICAgICckXlAnLFxuICAgICAgICAnJElOUFVUX1JFQ09SRF9TRVBBUkFUT1InLFxuICAgICAgICAnQExBU1RfTUFUQ0hfU1RBUlQnLFxuICAgICAgICAnJF5SJyxcbiAgICAgICAgJyRMQVNUX01BVENIX0VORCcsXG4gICAgICAgICckXlJFX0RFQlVHX0ZMQUdTJyxcbiAgICAgICAgJyRMQVNUX1BBUkVOX01BVENIJ1xuICAgIF0sXG4gICAgLy8gb3BlcmF0b3JzXG4gICAgc3ltYm9sczogL1s6K1xcLVxcXiokJiVAPTw+IT98XFwvflxcLl0vLFxuICAgIHF1b3RlTGlrZU9wczogWydxcicsICdtJywgJ3MnLCAncScsICdxcScsICdxeCcsICdxdycsICd0cicsICd5J10sXG4gICAgZXNjYXBlczogL1xcXFwoPzpbYWJmbnJ0dlxcXFxcIiddfHhbMC05QS1GYS1mXXsxLDR9fHVbMC05QS1GYS1mXXs0fXxVWzAtOUEtRmEtZl17OH0pLyxcbiAgICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIG91ciBsYW5ndWFnZXNcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1thLXpBLVpcXC1fXVtcXHdcXC1fXSovLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiAna2V5d29yZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGJ1aWx0aW5GdW5jdGlvbnMnOiAndHlwZS5pZGVudGlmaWVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAYnVpbHRpbkZpbGVIYW5kbGVycyc6ICd2YXJpYWJsZS5wcmVkZWZpbmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAcXVvdGVMaWtlT3BzJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiAnQHJlbWF0Y2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6ICdxdW90ZWRDb25zdHJ1Y3RzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gUGVybCB2YXJpYWJsZXNcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvW1xcJEAlXVsqQCM/XFwrXFwtXFwkIVxcd1xcXFxcXF4+PH46O1xcLl0rLyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGJ1aWx0aW5WYXJpYWJsZXMnOiAndmFyaWFibGUucHJlZGVmaW5lZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAndmFyaWFibGUnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHN0cmluZ3MnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAZGJsU3RyaW5ncycgfSxcbiAgICAgICAgICAgIC8vIFBlcmwgRG9jXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAcGVybGRvYycgfSxcbiAgICAgICAgICAgIC8vIEhlcmUgRG9jXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAaGVyZWRvYycgfSxcbiAgICAgICAgICAgIFsvW3t9XFxbXFxdKCldLywgJ0BicmFja2V0cyddLFxuICAgICAgICAgICAgLy8gUmVnRXhwXG4gICAgICAgICAgICBbL1tcXC9dKD86KD86XFxbKD86XFxcXF18W15cXF1dKStcXF0pfCg/OlxcXFxcXC98W15cXF1cXC9dKSkqW1xcL11cXHcqXFxzKig/PVspLiw7XXwkKS8sICdyZWdleHAnXSxcbiAgICAgICAgICAgIFsvQHN5bWJvbHMvLCAnb3BlcmF0b3JzJ10sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAbnVtYmVycycgfSxcbiAgICAgICAgICAgIFsvWyw7XS8sICdkZWxpbWl0ZXInXVxuICAgICAgICBdLFxuICAgICAgICB3aGl0ZXNwYWNlOiBbXG4gICAgICAgICAgICBbL1xccysvLCAnd2hpdGUnXSxcbiAgICAgICAgICAgIFsvKF4jIS4qJCkvLCAnbWV0YXRhZyddLFxuICAgICAgICAgICAgWy8oXiMuKiQpLywgJ2NvbW1lbnQnXVxuICAgICAgICBdLFxuICAgICAgICBudW1iZXJzOiBbXG4gICAgICAgICAgICBbL1xcZCpcXC5cXGQrKFtlRV1bXFwtK10/XFxkKyk/LywgJ251bWJlci5mbG9hdCddLFxuICAgICAgICAgICAgWy8wW3hYXVswLTlhLWZBLUZfXSpbMC05YS1mQS1GXS8sICdudW1iZXIuaGV4J10sXG4gICAgICAgICAgICBbL1xcZCsvLCAnbnVtYmVyJ11cbiAgICAgICAgXSxcbiAgICAgICAgLy8gU2luZ2xlIHF1b3RlIHN0cmluZ1xuICAgICAgICBzdHJpbmdzOiBbWy8nLywgJ3N0cmluZycsICdAc3RyaW5nQm9keSddXSxcbiAgICAgICAgc3RyaW5nQm9keTogW1xuICAgICAgICAgICAgWy8nLywgJ3N0cmluZycsICdAcG9wYWxsJ10sXG4gICAgICAgICAgICBbL1xcXFwnLywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvLi8sICdzdHJpbmcnXVxuICAgICAgICBdLFxuICAgICAgICAvLyBEb3VibGUgcXVvdGUgc3RyaW5nXG4gICAgICAgIGRibFN0cmluZ3M6IFtbL1wiLywgJ3N0cmluZycsICdAZGJsU3RyaW5nQm9keSddXSxcbiAgICAgICAgZGJsU3RyaW5nQm9keTogW1xuICAgICAgICAgICAgWy9cIi8sICdzdHJpbmcnLCAnQHBvcGFsbCddLFxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUuaW52YWxpZCddLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHZhcmlhYmxlcycgfSxcbiAgICAgICAgICAgIFsvLi8sICdzdHJpbmcnXVxuICAgICAgICBdLFxuICAgICAgICAvLyBRdW90ZWQgY29uc3RydWN0c1xuICAgICAgICAvLyBQZXJjZW50IHN0cmluZ3MgaW4gUnVieSBhcmUgc2ltaWxhciB0byBxdW90ZS1saWtlIG9wZXJhdG9ycyBpbiBQZXJsLlxuICAgICAgICAvLyBUaGlzIGlzIGFkYXB0ZWQgZnJvbSBwc3RyaW5ncyBpbiAuLi9ydWJ5L3J1YnkudHMuXG4gICAgICAgIHF1b3RlZENvbnN0cnVjdHM6IFtcbiAgICAgICAgICAgIFsvKHF8cXd8dHJ8eSlcXHMqXFwoLywgeyB0b2tlbjogJ3N0cmluZy5kZWxpbScsIHN3aXRjaFRvOiAnQHFzdHJpbmcuKC4pJyB9XSxcbiAgICAgICAgICAgIFsvKHF8cXd8dHJ8eSlcXHMqXFxbLywgeyB0b2tlbjogJ3N0cmluZy5kZWxpbScsIHN3aXRjaFRvOiAnQHFzdHJpbmcuWy5dJyB9XSxcbiAgICAgICAgICAgIFsvKHF8cXd8dHJ8eSlcXHMqXFx7LywgeyB0b2tlbjogJ3N0cmluZy5kZWxpbScsIHN3aXRjaFRvOiAnQHFzdHJpbmcuey59JyB9XSxcbiAgICAgICAgICAgIFsvKHF8cXd8dHJ8eSlcXHMqPC8sIHsgdG9rZW46ICdzdHJpbmcuZGVsaW0nLCBzd2l0Y2hUbzogJ0Bxc3RyaW5nLjwuPicgfV0sXG4gICAgICAgICAgICBbLyhxfHF3fHRyfHkpIy8sIHsgdG9rZW46ICdzdHJpbmcuZGVsaW0nLCBzd2l0Y2hUbzogJ0Bxc3RyaW5nLiMuIycgfV0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyhxfHF3fHRyfHkpXFxzKihbXkEtWmEtejAtOSNcXHNdKS8sXG4gICAgICAgICAgICAgICAgeyB0b2tlbjogJ3N0cmluZy5kZWxpbScsIHN3aXRjaFRvOiAnQHFzdHJpbmcuJDIuJDInIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbLyhxfHF3fHRyfHkpXFxzKyhcXHcpLywgeyB0b2tlbjogJ3N0cmluZy5kZWxpbScsIHN3aXRjaFRvOiAnQHFzdHJpbmcuJDIuJDInIH1dLFxuICAgICAgICAgICAgWy8ocXJ8bXxzKVxccypcXCgvLCB7IHRva2VuOiAncmVnZXhwLmRlbGltJywgc3dpdGNoVG86ICdAcXJlZ2V4cC4oLiknIH1dLFxuICAgICAgICAgICAgWy8ocXJ8bXxzKVxccypcXFsvLCB7IHRva2VuOiAncmVnZXhwLmRlbGltJywgc3dpdGNoVG86ICdAcXJlZ2V4cC5bLl0nIH1dLFxuICAgICAgICAgICAgWy8ocXJ8bXxzKVxccypcXHsvLCB7IHRva2VuOiAncmVnZXhwLmRlbGltJywgc3dpdGNoVG86ICdAcXJlZ2V4cC57Ln0nIH1dLFxuICAgICAgICAgICAgWy8ocXJ8bXxzKVxccyo8LywgeyB0b2tlbjogJ3JlZ2V4cC5kZWxpbScsIHN3aXRjaFRvOiAnQHFyZWdleHAuPC4+JyB9XSxcbiAgICAgICAgICAgIFsvKHFyfG18cykjLywgeyB0b2tlbjogJ3JlZ2V4cC5kZWxpbScsIHN3aXRjaFRvOiAnQHFyZWdleHAuIy4jJyB9XSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKHFyfG18cylcXHMqKFteQS1aYS16MC05XyNcXHNdKS8sXG4gICAgICAgICAgICAgICAgeyB0b2tlbjogJ3JlZ2V4cC5kZWxpbScsIHN3aXRjaFRvOiAnQHFyZWdleHAuJDIuJDInIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbLyhxcnxtfHMpXFxzKyhcXHcpLywgeyB0b2tlbjogJ3JlZ2V4cC5kZWxpbScsIHN3aXRjaFRvOiAnQHFyZWdleHAuJDIuJDInIH1dLFxuICAgICAgICAgICAgWy8ocXF8cXgpXFxzKlxcKC8sIHsgdG9rZW46ICdzdHJpbmcuZGVsaW0nLCBzd2l0Y2hUbzogJ0BxcXN0cmluZy4oLiknIH1dLFxuICAgICAgICAgICAgWy8ocXF8cXgpXFxzKlxcWy8sIHsgdG9rZW46ICdzdHJpbmcuZGVsaW0nLCBzd2l0Y2hUbzogJ0BxcXN0cmluZy5bLl0nIH1dLFxuICAgICAgICAgICAgWy8ocXF8cXgpXFxzKlxcey8sIHsgdG9rZW46ICdzdHJpbmcuZGVsaW0nLCBzd2l0Y2hUbzogJ0BxcXN0cmluZy57Ln0nIH1dLFxuICAgICAgICAgICAgWy8ocXF8cXgpXFxzKjwvLCB7IHRva2VuOiAnc3RyaW5nLmRlbGltJywgc3dpdGNoVG86ICdAcXFzdHJpbmcuPC4+JyB9XSxcbiAgICAgICAgICAgIFsvKHFxfHF4KSMvLCB7IHRva2VuOiAnc3RyaW5nLmRlbGltJywgc3dpdGNoVG86ICdAcXFzdHJpbmcuIy4jJyB9XSxcbiAgICAgICAgICAgIFsvKHFxfHF4KVxccyooW15BLVphLXowLTkjXFxzXSkvLCB7IHRva2VuOiAnc3RyaW5nLmRlbGltJywgc3dpdGNoVG86ICdAcXFzdHJpbmcuJDIuJDInIH1dLFxuICAgICAgICAgICAgWy8ocXF8cXgpXFxzKyhcXHcpLywgeyB0b2tlbjogJ3N0cmluZy5kZWxpbScsIHN3aXRjaFRvOiAnQHFxc3RyaW5nLiQyLiQyJyB9XVxuICAgICAgICBdLFxuICAgICAgICAvLyBOb24tZXhwYW5kZWQgcXVvdGVkIHN0cmluZ1xuICAgICAgICAvLyBxc3RyaW5nPG9wZW4+LjxjbG9zZT5cbiAgICAgICAgLy8gIG9wZW4gPSBvcGVuIGRlbGltaXRlclxuICAgICAgICAvLyAgY2xvc2UgPSBjbG9zZSBkZWxpbWl0ZXJcbiAgICAgICAgcXN0cmluZzogW1xuICAgICAgICAgICAgWy9cXFxcLi8sICdzdHJpbmcuZXNjYXBlJ10sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLy4vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICckIz09JFMzJzogeyB0b2tlbjogJ3N0cmluZy5kZWxpbScsIG5leHQ6ICdAcG9wJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJyQjPT0kUzInOiB7IHRva2VuOiAnc3RyaW5nLmRlbGltJywgbmV4dDogJ0BwdXNoJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgLy8gUXVvdGVkIHJlZ2V4cFxuICAgICAgICAvLyBxcmVnZXhwLjxvcGVuPi48Y2xvc2U+XG4gICAgICAgIC8vICBvcGVuID0gb3BlbiBkZWxpbWl0ZXJcbiAgICAgICAgLy8gIGNsb3NlID0gY2xvc2UgZGVsaW1pdGVyXG4gICAgICAgIHFyZWdleHA6IFtcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B2YXJpYWJsZXMnIH0sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3JlZ2V4cC5lc2NhcGUnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvLi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJyQjPT0kUzMnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdyZWdleHAuZGVsaW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAcmVnZXhwTW9kaWZpZXJzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICckIz09JFMyJzogeyB0b2tlbjogJ3JlZ2V4cC5kZWxpbScsIG5leHQ6ICdAcHVzaCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdyZWdleHAnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIHJlZ2V4cE1vZGlmaWVyczogW1svW21zaXhwb2R1YWxuZ2Nlcl0rLywgeyB0b2tlbjogJ3JlZ2V4cC5tb2RpZmllcicsIG5leHQ6ICdAcG9wYWxsJyB9XV0sXG4gICAgICAgIC8vIEV4cGFuZGVkIHF1b3RlZCBzdHJpbmdcbiAgICAgICAgLy8gcXFzdHJpbmcuPG9wZW4+LjxjbG9zZT5cbiAgICAgICAgLy8gIG9wZW4gPSBvcGVuIGRlbGltaXRlclxuICAgICAgICAvLyAgY2xvc2UgPSBjbG9zZSBkZWxpbWl0ZXJcbiAgICAgICAgcXFzdHJpbmc6IFt7IGluY2x1ZGU6ICdAdmFyaWFibGVzJyB9LCB7IGluY2x1ZGU6ICdAcXN0cmluZycgfV0sXG4gICAgICAgIGhlcmVkb2M6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvPDxcXHMqWydcImBdPyhbXFx3XFwtXSspWydcImBdPy8sXG4gICAgICAgICAgICAgICAgeyB0b2tlbjogJ3N0cmluZy5oZXJlZG9jLmRlbGltaXRlcicsIG5leHQ6ICdAaGVyZWRvY0JvZHkuJDEnIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgaGVyZWRvY0JvZHk6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXihbXFx3XFwtXSspJC8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJyQxPT0kUzInOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ3N0cmluZy5oZXJlZG9jLmRlbGltaXRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAcG9wYWxsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnc3RyaW5nLmhlcmVkb2MnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgWy8uLywgJ3N0cmluZy5oZXJlZG9jJ11cbiAgICAgICAgXSxcbiAgICAgICAgcGVybGRvYzogW1svXj1cXHcvLCAnY29tbWVudC5kb2MnLCAnQHBlcmxkb2NCb2R5J11dLFxuICAgICAgICBwZXJsZG9jQm9keTogW1xuICAgICAgICAgICAgWy9ePWN1dFxcYi8sICd0eXBlLmlkZW50aWZpZXInLCAnQHBvcGFsbCddLFxuICAgICAgICAgICAgWy8uLywgJ2NvbW1lbnQuZG9jJ11cbiAgICAgICAgXSxcbiAgICAgICAgdmFyaWFibGVzOiBbXG4gICAgICAgICAgICBbL1xcJFxcdysvLCAndmFyaWFibGUnXSxcbiAgICAgICAgICAgIFsvQFxcdysvLCAndmFyaWFibGUnXSxcbiAgICAgICAgICAgIFsvJVxcdysvLCAndmFyaWFibGUnXSAvLyBrZXkvdmFsdWVcbiAgICAgICAgXVxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9