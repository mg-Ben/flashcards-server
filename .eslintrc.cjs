module.exports = {
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      extends: 'love',
    },
  ],
  parserOptions: {
    ecmaVersion: '2022',
    sourceType: 'module',
    project: './tsconfig.json',
  },
}
