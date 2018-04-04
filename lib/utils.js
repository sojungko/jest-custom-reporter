const {
  green,
  red,
  gray,
} = require('chalk');

const s = 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;
const y = d * 365.25;

exports = module.exports;

exports.format = function (ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

exports.duration = function (end, start) {
  return exports.format(end - start);
};

exports.symbol = function (status) {
  switch (status) {
    case 'passed':
      return green('✓');
    case 'pending':
      return gray('-');
    case 'failed':
      return red('✖');
  }
};



