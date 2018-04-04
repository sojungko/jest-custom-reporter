# jest-custom-reporter
Custom Jest reporter modeled after Mocha's "Spec" reporter.

## Contents

1. [Installation](#installation)
1. [Configuration](#configuration)
1. [Roadmap](#roadmap)

### Installation

```bash
npm i -D jest-custom-reporter
```
```bash
yarn add --dev jest-custom-reporter
```

### Configuration
As per [Jest's documentation](https://facebook.github.io/jest/docs/en/configuration.html#reporters-array-modulename-modulename-options), specify this package as part of the `reporters` array in your `jest.config.js` file.

```js
module.exports = {
  reporters: [
    'jest-custom-reporter',
  ],
}
```

### Roadmap
So many things! Here are some that are on my mind:
- Migrate to TypeScript
- Custom `options` object you can pass in for different reporter styles
- Also need to write tests and add examples... :D