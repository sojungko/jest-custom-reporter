module.exports = {
  "extends": ["standard", "airbnb"],
  "rules": {
    "class-methods-use-this": ["off"],
    "func-names": ["as-needed"],
    "no-param-reassign": ["off"],
    "no-plusplus": ["off"],
    "no-underscore-dangle": ["error", { "allowAfterThis": true }],
    "semi": ["error", "always"],
  }
};