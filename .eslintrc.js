module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "extends": [
    "airbnb",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react",
  ],
  "plugins": [
    "react",
    "jsx-a11y",
    "prettier"
  ],
  "rules": {
    "func-names": "off",
    "linebreak-style": "off",
    "no-console": "off",
    "prefer-const": [
      "error",
      {
        "destructuring": "all",
      }
    ],
    "prettier/prettier": ["error"],
    "react/destructuring-assignment": 1,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "react/no-multi-comp": 1,
    "react/prefer-stateless-function": 0,
    "react/prop-types": 0,
  }
};