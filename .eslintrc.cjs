module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-console': 'off', // Desativa a regra no-console
    'react/prop-types': 'off', // Desativa a regra react/prop-types
    '@typescript-eslint/no-explicit-any': 'off', // Desativa a regra no-explicit-any
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Desativa a regra explicit-module-boundary-types
  },
};
