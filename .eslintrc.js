module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es6": false,
    "node": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 5,
    "sourceType": "module"
  },
  "extends": [
    // "airbnb",
    // "plugin:es5/no-es2015", // too restrictive
    "airbnb-es5",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react",
  ],
  "plugins": [
    "es5",
    "react",
    "jsx-a11y",
    "prettier"
  ],
  "rules": {
    // off=0, warn=1, error=2
    "es5/no-arrow-functions": 2,
    "es5/no-block-scoping": 2,
    "es5/no-destructuring": 2,
    "es5/no-rest-parameters": 2,
    "es5/no-spread": 2,
    "es5/no-modules": 2,
    "func-names": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "linebreak-style": 0,
    "no-console": 0,
    // "prefer-const": [
    //   2,
    //   {
    //     "destructuring": "all",
    //   }
    // ],
    "prettier/prettier": ["error"],
    "react/destructuring-assignment": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "react/no-multi-comp": 0,
    "react/prefer-stateless-function": 0,
    "react/prop-types": 0,
  }
};