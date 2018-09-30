module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "warn",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "warn",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "guard-for-in": 0,
    "prefer-promise-reject-errors": 2,
    "no-invalid-this": 0,
    "no-console": "off",
  }
};
