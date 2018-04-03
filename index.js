const { green, red, gray, cyan } = require('chalk');
const {
  testDuration
} = require('./lib/utils');

const log = console.log;

class JestCustomReporter {

  constructor(globalConfig, options) {
    this._globalConfig = globalConfig;
    this._options = options;
  }

  onRunComplete(test, results) {
    const {
      numFailedTests,
      numPassedTests,
      numPendingTests,
      testResults,
      numTotalTests,
      startTime
    } = results;

    testResults.map(({failureMessage}) => {
      if (failureMessage) {
        log(failureMessage);
      }
    });

    if (numPassedTests) {
      log(green(`${numPassedTests} passing`), gray(`(${testDuration(new Date(), new Date(startTime))})`));
    }
    if (numFailedTests) {
      log(red(`${numFailedTests} failing`));
    }
    if (numPendingTests) {
      log(cyan(`${numPendingTests} pending`));
    }
  }

  // onTestResult(test, {testResults}) {
  //   testResults.map((result) => {
  //     const {title, duration, status, ancestorTitles} = result;
  //     const head = `${ancestorTitles.join(' > ')} >`;
  //     log(
  //       `    ${this._getStatus(status)} ${headFmt(head)} ${titleFmt(title)} ${durationFmt('(' + duration + 'ms)')}`
  //     );
  //   });
  // }
}

exports.symbols = {
  ok: '✓',
  err: '✖',
  dot: '․',
  comma: ',',
  bang: '!'
};

module.exports = JestCustomReporter;