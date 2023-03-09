module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'prettier --write',
    'eslint --cache --cache-location node_modules/.cache/eslint/.eslintcache --fix',
  ],
  '*': ['prettier --write --ignore-unknown'],
}
