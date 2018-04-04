const utils = require('./utils')
const { format, duration, symbol } = utils;

const s = 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;
const y = d * 365.25;

describe('utils', () => {
  describe('format', () => {
    test('is a function', () => {
      expect(typeof format).toBe('function');
    });

    test('rounds days', () => {
      expect(format(y)).toEqual('365d');
    });

    test('rounds hours', () => {
      expect(format(d - 1)).toEqual('24h');
    });

    test('rounds minutes', () => {
      expect(format(h - 1)).toEqual('60m');
    });

    test('rounds seconds', () => {
      expect(format(s + 100)).toEqual('1s');
    });
  });

  describe('duration', () => {
    test('is a function', () => {
      expect(typeof duration).toBe('function');
    });

    test('calls `format` function', () => {
      const spy = jest.spyOn(utils, 'format');
      const start = new Date();
      duration(start + 1000, start);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('symbol', () => {
    it('is a function', () => {
      expect(typeof symbol).toBe('function');
    })
  });
});
