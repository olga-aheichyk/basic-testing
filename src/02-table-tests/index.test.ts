// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 10, b: 5, action: Action.Subtract, expected: 5 },
  { a: 4, b: 2, action: Action.Divide, expected: 2 },
  { a: 6, b: 3, action: Action.Multiply, expected: 18 },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 9, b: 0, action: Action.Divide, expected: Infinity },
  { a: 'test', b: 3, action: Action.Add, expected: null },
  { a: 2, b: 'test', action: Action.Subtract, expected: null },
  { a: 5, b: 5, action: 'test', expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'should return $expected when a=$a, b=$b, and action=$action',
    ({ a, b, action, expected }) => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBe(expected);
    },
  );
  // Consider to use Jest table tests API to test all cases above
});
