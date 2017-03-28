'use strict';
module.exports = {
    'rules': {
        'comma-spacing': [1, {
            'before': false,
            'after':  true
        }],
        'no-dupe-args':         2,
        'no-dupe-keys':         2,
        'no-extra-semi':        1,
        'use-isnan':            1,
        'no-console':           1,
        'no-unreachable':       2,
        'no-native-reassign':   2,
        'no-extra-bind':        2,
        'guard-for-in':         2,
        'no-var':               2,
        'no-extra-parens':      [1, 'all'],
        'strict':               [1, 'global'],
        'comma-dangle':         [0, 'always-multiline'],
        'indent':               [1, 4],
        'quotes':               [0, 'single'],
        'linebreak-style':      [2, 'unix'],
        'semi':                 [1, 'always'],
        'no-unused-vars':       [1, {'vars': 'all', 'args': 'after-used'}]
    },
    'parserOptions': {
        'ecmaVersion': 6,
        'ecmaFeatures': {
            'forOf':         true,
            'blockBindings': true
        },
    },
    'env': {
        'node':      true,
        'mocha':     true,
        'es6':       true,
        'phantomjs': true
    },
    'extends': 'eslint:recommended',
};
