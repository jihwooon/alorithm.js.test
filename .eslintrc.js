module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'operator-assignment': 'off',
    'max-classes-per-file': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-param-reassign': 'off',
    'consistent-return': 'off',
    'no-console': 'warn',
    'no-multiple-empty-lines': ['error', { max: 2 }],
  },
};
