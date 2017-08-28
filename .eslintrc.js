'use strict';

module.exports = {
    'rules': {
        'comma-spacing': [ 1, {
            'before': false,
            'after':  true
        } ],
        'no-dupe-args':                      2,
        'no-dupe-keys':                      2,
        'no-extra-semi':                     1,
        'use-isnan':                         1,
    	'vars-on-top':                       1,
    	'no-loop-func':                      1,
        'no-console':                        1,
        'no-unreachable':                    2,
        'no-native-reassign':                2,
        'no-extra-bind':                     2,
        'guard-for-in':                      2,
        'no-var':                            2,
        'prefer-const':                      2,
    	'no-multi-spaces':                   0,
    	'arrow-parens':                      0,
    	'arrow-body-style':                  0,
    	'key-spacing':                       0,
    	'array-bracket-spacing':             0,
    	'import/no-extraneous-dependencies': [ 'error', {'devDependencies': ['**/test/**']} ],
    	'no-param-reassign':                 [ 2, { 'props': true, 'ignorePropertyModificationsFor': ['app', 'async', 'ctx', 'object'] } ],
        'no-extra-parens':                   [ 1, 'all' ],
        'strict':                            [ 1, 'global' ],
        'comma-dangle':                      [ 0, 'always-multiline' ],
        'indent':                            [ 1, 4, {'MemberExpression': 'off'} ],
        'quotes':                            [ 0, 'single' ],
        'linebreak-style':                   [ 2, 'unix' ],
        'semi':                              [ 1, 'always' ],
        'no-unused-vars':                    [ 1, {'vars': 'all', 'args': 'after-used', 'varsIgnorePattern': '^h$' } ],
        'jsx-a11y/href-no-hash':             0,
        'import/no-unresolved':              0,
        'import/extensions':                 0,
        'react/jsx-indent':                  [ 1, 4 ],
        'react/jsx-filename-extension':      0,
        'react/react-in-jsx-scope':          0
    },
    'parserOptions': {
        'ecmaVersion': 2017,
        'ecmaFeatures': {
            'forOf':         true,
            'blockBindings': true
        },
    },
    'env': {
        'node':      true,
        'mocha':     true,
        'es6':       true,
        'phantomjs': true,
	    'browser':   true
    },
    'extends': [ 'eslint:recommended', 'airbnb' ],
    'settings': {
        'import/resolver': {
            'webpack': {}
        }
    }
};
