module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
    },
    settings: {
        'import/ignore': ['react-native'],
        'import/resolver': {
            typescript: {},
        },
    },
    plugins: ['react', 'react-native'],
    env: {
        'react-native/react-native': true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-native/all'],
};
