module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'standard'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'no-underscore-dangle': 'off',
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'object-curly-spacing': ['error', 'always'],
    'no-tabs': 'off',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js', // Update the path to your webpack configuration file
      },
    },
    'import/core-modules': ['react'], // Add 'react' as a core module
    react: {
      version: 'detect', // Automatically detect the installed React version
    },
  },
};
