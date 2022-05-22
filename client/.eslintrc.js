module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-import-helpers',
    'react-hooks',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-console': 'warn',
        'react-hooks/exhaustive-deps': 'warn',
        'import-helpers/order-imports': [
          'warn',
          {
            newlinesBetween: 'never',
            groups: [
              '/^react/',
              'module',
              '/^@app/',
              ['parent', 'sibling', 'index'],
            ],
            alphabetize: { order: 'asc', ignoreCase: true },
          },
        ],
      },
    },
  ],
};
