module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "airbnb",
    "airbnb/hooks"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "indent": [
      "error",
      4,
      {
        "SwitchCase": 1,
        "ignoredNodes": ["JSXAttribute"],
        "FunctionDeclaration": {
          "parameters": "first"
        },
        "FunctionExpression": {
          "parameters": "first"
        }
      }
    ],
    "react/jsx-indent": ["error", 4],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-curly-spacing": [ "error", {
        "when": "always",
        "children": {
            "when": "always"
        }
    } ],
    "object-curly-spacing": [ "error", "always" ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // off rules
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }],
    'linebreak-style': 'off',
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": "*", "next": ["if", "return"] }
    ]
  },
}
