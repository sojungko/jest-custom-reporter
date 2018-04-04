const {
  green,
  red,
  gray,
  cyan,
  white,
} = require('chalk');

const {
  duration,
  formatTitle,
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
 * @param {String} prevTitle
 * @param {Array} testResults
 * @param {Number} resultsIndex
 * @param {Number} titlesIndex
 */
  recursivelyReport(prevTitle, testResults, resultsIndex, titlesIndex) {
    const testResult = testResults[resultsIndex];

    if (!testResult) {
      // exit at end of testResults array
      return;
    }

    const { ancestorTitles, status, title } = testResult;
    const currentTitle = ancestorTitles[titlesIndex];

    if (!currentTitle) {
      // if past the end of ancestorTitles, go back one index
      this.recursivelyReport(prevTitle, testResults, resultsIndex, --titlesIndex);
      return;
    }

    if (prevTitle !== currentTitle && titlesIndex < ancestorTitles.length) {
      // if new title encountered and not yet at the end of ancestorTitles, check next ancestorTitle
      log(white(currentTitle));
      this.recursivelyReport(currentTitle, testResults, resultsIndex, ++titlesIndex);
    } else {
      // otherwise log actual test and go onto next test
      log(formatTitle(status, title));
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
      log(green(`${numPassedTests} passing`), gray(`(${duration(end, start)})`));
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
