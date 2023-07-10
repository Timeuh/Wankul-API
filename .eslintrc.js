module.exports = {
    'env': {
        'commonjs': true,
        'es2021': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest'
    },
    'plugins': [
        '@typescript-eslint'
    ],
    'rules': {
        'indent': [
            'error',
            2,
            {
                'SwitchCase': 1
            }
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'arrow-body-style': [
            'error',
            'always'
        ],
        'spaced-comment': [
            'error',
            'always'
        ],
        'array-bracket-spacing': [
            'error',
            'never'
        ],
        'comma-dangle': [
            'error',
            'never'
        ],
        'comma-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ],
        'jsx-quotes': [
            'error',
            'prefer-single'
        ],
        'key-spacing': [
            'error',
            {
                'beforeColon': false,
                'afterColon': true
            }
        ],
        'keyword-spacing': [
            'error',
            {
                'before': true,
                'after': true
            }
        ],
        'line-comment-position': [
            'error',
            {
                'position': 'above'
            }
        ],
        'space-in-parens': [
            'error',
            'never'
        ],
        'camelcase': 'error',
        'default-case': 'error',
        'default-case-last': 'error',
        'eqeqeq': 'error',
        'block-scoped-var': 'error',
        'no-else-return': 'error',
        'no-empty': 'error',
        'no-empty-function': 'error',
        'no-inline-comments': 'error',
        'no-invalid-this': 'error',
        'no-lone-blocks': 'error',
        'no-undef-init': 'error',
        'no-useless-catch': 2,
        'no-var': 'error',
        'prefer-const': 'error',
        'prefer-template': 'error',
        'require-await': 'error',
        'arrow-spacing': 'error',
        'brace-style': 'error',
        'no-whitespace-before-property': 'error',
        'switch-colon-spacing': 'error',
        'no-case-declarations': 'off'
    }
};
