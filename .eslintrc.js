module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/recommended',
    'standard',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'no-underscore-dangle': 'off',
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'object-curly-spacing': ['error', 'always'],
    'no-tabs': 'off',
    'vue/no-v-html': 'off', // Disable v-html warning if needed
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'node_modules/@vue/cli-service/webpack.config.js',
      },
    },
    'import/core-modules': ['vue'], // Add 'vue' as a core module
    vue: {
      version: '2', // Specify Vue version as '2'
    }
  },
}
