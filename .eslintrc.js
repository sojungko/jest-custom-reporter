module.exports = {
  "extends": ["standard", "airbnb"],
  "rules": {
    "class-methods-use-this": ["off"],
    "no-underscore-dangle": ["error", { "allowAfterThis": true }],
    "semi": ["error", "always"],
  }
};