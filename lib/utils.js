const {
  green,
  red,
  gray,
  cyan,
  white,
} = require('chalk');

exports.testDuration = function (end, start) {
  const milliseconds = end - start;
  const seconds = milliseconds > 1000 ? `${Math.round(Number(milliseconds / 1000))}s` : '';
  const minutes = seconds && seconds > 60 ? `${Math.round(Number(seconds / 60))}m ` : '';
  return `${minutes}${seconds || `${milliseconds}ms`}`;
};

exports.symbols = function (status) {
  switch (status) {
    case 'passed':
      return green('✓');
    case 'pending':
      return gray('-');
    case 'failed':
      return red('✖');
  }
}
