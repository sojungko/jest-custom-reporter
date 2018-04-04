const utils = require('./utils');

const { formatTime, duration } = utils;

const s = 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;
const y = d * 365.25;

describe('utils', () => {
  describe('formatTime', () => {
    test('is a function', () => {
      expect(typeof formatTime).toBe('function');
    });

    test('rounds days', () => {
      expect(formatTime(y)).toEqual('365d');
    });

    test('rounds hours', () => {
      expect(formatTime(d - 1)).toEqual('24h');
    });

    test('rounds minutes', () => {
      expect(formatTime(h - 1)).toEqual('60m');
    });

    test('rounds seconds', () => {
      expect(formatTime(s + 100)).toEqual('1s');
    });
  });

  describe('duration', () => {
    test('is a function', () => {
      expect(typeof duration).toBe('function');
    });

    test('calls `formatTime` function', () => {
      const spy = jest.spyOn(utils, 'formatTime');
      const start = new Date();

      duration(start + 1000, start);

      expect(spy).toHaveBeenCalled();
    });
  });
});
