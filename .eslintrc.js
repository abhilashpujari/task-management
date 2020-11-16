module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    extends: ['plugin:vue/recommended', 'airbnb-base'],
    plugins: [
        'vue'
    ],
    settings: {
        'import/resolver': {
            webpack: {
                config: 'build/webpack.base.conf.js'
            }
        }
    },
    // add your custom rules here
    rules: {
        'camelcase': ['off'],
        'comma-dangle': ['off'],
        'consistent-return': ['off'],
        'class-methods-use-this': ['off'],
        'dot-notation': ['off'],
        'default-case': ['off'],
        'eol-last': ['off'],
        // don't require .vue extension when importing
        'import/extensions': ['off'],
        'import/first': ['off'],
        'import/no-unresolved': ['off'],
        'import/no-extraneous-dependencies': ['off'],
        'import/no-duplicates': ['off'],
        indent: ['off'],
        'linebreak-style': ['off'],
        'func-names': ['off'],
        'max-len': ['off'],
        'no-new': ['off'],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-prototype-builtins': ['off'],
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-param-reassign': ['off'],
        'no-underscore-dangle': ['off'],
        'no-undef': ['off'],
        'no-unused-vars': ['off'],
        'object-curly-spacing': ['off'],
        'prefer-const': ['off'],
        'prefer-destructuring': ['off'],
        'semi': ['off'],
        'vue/html-indent': ['off'],
        'vue/html-closing-bracket-spacing': ['off'],
        'vue/html-closing-bracket-newline': ['off'],
        'vue/multiline-html-element-content-newline': ['off'],
        'vue/no-lone-template': ['off'],
        'vue/custom-event-name-casing': ['off'],
        'vue/max-attributes-per-line': ['off'],
        'vue/require-default-prop': ['off']
    }
};
