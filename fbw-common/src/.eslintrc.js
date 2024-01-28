// Copyright (c) 2021-2023 FlyByWire Simulations
//
// SPDX-License-Identifier: GPL-3.0

'use strict';

module.exports = {
    root: true,
    env: { browser: true },
    extends: [
        '@flybywiresim/eslint-config',
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:tailwindcss/recommended',
    ],
    plugins: [
        '@typescript-eslint',
        'tailwindcss',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'script',
        requireConfigFile: false,
    },
    settings: {
        'tailwindcss': { groupByResponsive: true },
        'import/resolver': { node: { extensions: ['.js', '.mjs', '.jsx', '.ts', '.tsx'] } },
    },
    // overrides airbnb, use sparingly
    rules: {
        'tailwindcss/no-custom-classname': 'off',
        'no-bitwise': 'off',
        'no-mixed-operators': 'off',
        'arrow-parens': ['error', 'always'],
        'brace-style': ['error', '1tbs', { allowSingleLine: false }],
        'class-methods-use-this': 'off',
        'curly': ['error', 'multi-line'],
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'indent': ['error', 4],
        'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],
        'react/jsx-indent': ['error', 4],
        'no-restricted-syntax': 'off',
        'quote-props': ['error', 'consistent-as-needed'],
        'strict': 'off',

        'no-case-declarations': 'off',

        'no-plusplus': 'off',
        'no-shadow': 'off',
        'no-continue': 'off',
        'no-return-assign': 'off',
        'radix': 'off',
        'max-classes-per-file': 'off',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': ['error'],
        'no-empty-function': ['error', { allow: ['constructors', 'arrowFunctions'] }],
        '@typescript-eslint/no-empty-function': 'off',

        // buggy
        'prefer-destructuring': 'off',

        // Avoid typescript-eslint conflicts
        'no-unused-vars': 'off',
        'import/no-unresolved': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {
            vars: 'all',
            varsIgnorePattern: '^_|^FSComponent$',
            args: 'after-used',
            argsIgnorePattern: '^_|^node$|^deltaTime$',
        }],

        'no-use-before-define': 'off',

        'react/jsx-indent-props': 'off',

        // not relevant now
        'react/no-unused-state': 'off',

        // useless
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/no-unused-prop-types': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/no-unescaped-entities': 'off',

        // Not needed with react 17+
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',

        'import/extensions': 'off',
        'no-param-reassign': 'off',
        'no-undef-init': 'off',
        'no-undef': 'off',
        'max-len': ['error', { code: 192 }],

        // Irrelevant for our use TODO we should probably fix those anyway, in the EFB at least, since that will be accessible remotely
        'jsx-a11y/alt-text': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/control-has-associated-label': 'off',
        'object-curly-newline': ['error', { multiline: true }],
        'linebreak-style': 'off',

        // allow typescript overloads
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': ['error'],
        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': ['error'],
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': ['error'],

        // allow console logging
        'no-console': 'off',
    },
    globals: {
        Simplane: 'readonly',
        SimVar: 'readonly',
        Utils: 'readonly',
        JSX: 'readonly',
        Coherent: 'readonly',
        ViewListener: 'readonly',
        RegisterViewListener: 'readonly',
    },
};
