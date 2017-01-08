module.exports = {
  "env": {
    "node": true,
    "es6": true,
    "mocha": true
  },
  "extends": "eslint:all",
  "installedESLint": true,
  "rules": {
    "indent": ["error", 2, {"SwitchCase": 1}],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "dot-location": ["error", "property"],
    "one-var": ["error", "never"],
    "no-magic-numbers": ["error", {"ignoreArrayIndexes": true}]
  }
}
