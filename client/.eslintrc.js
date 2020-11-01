module.exports = {
  env: {
    jest: true,
    browser: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'airbnb/hooks',
    'prettier',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': [0, { forbid: ['any'] }],
    'react/prop-types': 0,
  },
};
