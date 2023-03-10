module.exports = {
  plugins: ['eslint-comments'],
  extends: ['plugin:eslint-comments/recommended'],
  rules: {
    'eslint-comments/no-unused-disable': 'warn',
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
  },
}
