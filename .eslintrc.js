module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': ["off", 4],
    'space-before-function-paren': ["off", true],
    'semi': ["off", "always"]
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
