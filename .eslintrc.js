module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "ecmaVersion": 11,
    "sourceType": "module",
    project: "./tsconfig.json",
  },
  plugins: [
    "@typescript-eslint",
  ],
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
  "rules": {
  }
};
