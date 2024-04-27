
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // Enable JSX parsing
    },
  },
  settings: {
    react: {
      version: '18.2', 
    },
  },
  plugins: ['react', 'react-hooks','react-refresh'], // Remove 'react-refresh' plugin if not needed
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
          ],
    'react/prop-types': 'off',
  },
};
