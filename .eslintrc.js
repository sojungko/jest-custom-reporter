module.exports = {
  "extends": ["standard", "airbnb"],
  "globals": {
    "describe": false,
    "expect": false,
    "test": false,
    "jest": false
  },
  "rules": {
    "class-methods-use-this": ["off"],
    "func-names": ["off"],
    "prefer-destructuring": ["off"],
    "no-shadow": ["off"],
    "no-param-reassign": ["off"],
    "no-plusplus": ["off"],
    "no-underscore-dangle": ["error", { "allowAfterThis": true }],
    "semi": ["error", "always"],
  }
};