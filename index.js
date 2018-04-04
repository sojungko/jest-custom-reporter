const {
  green,
  red,
  gray,
  cyan,
  white,
} = require('chalk');

const {
  testDuration,
  symbols,
} = require('./lib/utils');

const { log } = console;

class JestCustomReporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig;
    this._options = options;
  }

  onRunStart({ numTotalTestSuites }) {
    log();
    log(gray(`Found ${numTotalTestSuites} test suites`));
  }

  /**
 *
 * @param {String} currentTitle
 * @param {Array} testResults
 * @param {Number} index
 * @param {Number} level
 */
  recursivelyReport(prevTitle, testResults, resultsIndex, titlesIndex) {
    if (!testResults[resultsIndex]) {
      return;
    }
    const { ancestorTitles, status, title } = testResults[resultsIndex];
    const currentTitle = ancestorTitles[titlesIndex];

    if (!ancestorTitles[titlesIndex]) {
      log(symbols(status), gray(title));
      this.recursivelyReport(currentTitle, testResults, ++resultsIndex, titlesIndex);
      return;
    }
    if (prevTitle !== currentTitle) {
      log(white(currentTitle));
      log(symbols(status), gray(title));
      this.recursivelyReport(currentTitle, testResults, ++resultsIndex, ++titlesIndex);
      titlesIndex--;
    } else {
      log(symbols(status), gray(title));
      this.recursivelyReport(currentTitle, testResults, ++resultsIndex, titlesIndex);
    }
  }

  onRunComplete(test, results) {
    const {
      numFailedTests,
      numPassedTests,
      numPendingTests,
      testResults,
      startTime,
    } = results;

    testResults.forEach(({ testFilePath, testResults, failureMessage }) => {
      this.recursivelyReport(testFilePath, testResults, 0, 0);

      if (failureMessage) {
        log(failureMessage);
      }
      log();
    });

    if (numPassedTests) {
      const end = new Date();
      const start = new Date(startTime);
      log(green(`${numPassedTests} passing`), gray(`(${testDuration(end, start)})`));
    }
    if (numFailedTests) {
      log(red(`${numFailedTests} failing`));
    }
    if (numPendingTests) {
      log(cyan(`${numPendingTests} pending`));
    }
  }
}



module.exports = JestCustomReporter;
