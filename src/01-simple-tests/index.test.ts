// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const input = { a: 2, b: 3, action: Action.Add };
    const result = simpleCalculator(input);
    expect(result).toBe(5);
  });

  test('should subtract two numbers', () => {
    const input = { a: 5, b: 2, action: Action.Subtract };
    const result = simpleCalculator(input);
    expect(result).toBe(3);
  });

  test('should multiply two numbers', () => {
    const input = { a: 4, b: 5, action: Action.Multiply };
    const result = simpleCalculator(input);
    expect(result).toBe(20);
  });

  test('should divide two numbers', () => {
    const input = { a: 10, b: 2, action: Action.Divide };
    const result = simpleCalculator(input);
    expect(result).toBe(5);
  });

  test('should exponentiate two numbers', () => {
    const input = { a: 2, b: 3, action: Action.Exponentiate };
    const result = simpleCalculator(input);
    expect(result).toBe(8);
  });

  test('should return null for invalid action', () => {
    const input = { a: 2, b: 3, action: 'invalidAction' };
    const result = simpleCalculator(input);
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const invalidInputs = [
      { a: 'string', b: 2, action: Action.Add },
      { a: 2, b: 'string', action: Action.Subtract },
      { a: null, b: 2, action: Action.Multiply },
      { a: 2, b: undefined, action: Action.Divide },
      { a: 2, b: 2, action: null }, // Invalid action
    ];

    invalidInputs.forEach(input => {
      const result = simpleCalculator(input);
      expect(result).toBeNull();
    });
  });
});
