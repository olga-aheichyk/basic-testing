// Uncomment the code below and write your tests
import { getBankAccount, InsufficientFundsError, SynchronizationFailedError, TransferFailedError } from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const account = getBankAccount(100);
    expect(account.getBalance()).toBe(100);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const account = getBankAccount(100);
    expect(() => {
      account.withdraw(105);
    }).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const account = getBankAccount(100);
    const anotherAccount = getBankAccount(50);

    expect(() => {
      account.transfer(150, anotherAccount);
    }).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring to the same account', () => {
    const account = getBankAccount(100);
    expect(() => {
      account.transfer(50, account);
    }).toThrow(TransferFailedError);
  });

  test('should deposit money', () => {
    const account = getBankAccount(100);
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test('should withdraw money', () => {
    const account = getBankAccount(100);
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test('should transfer money', () => {
    const account = getBankAccount(100);
    const anotherAccount = getBankAccount(50);
    account.transfer(50, anotherAccount);

    expect(account.getBalance()).toBe(50);
    expect(anotherAccount.getBalance()).toBe(100);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const account = getBankAccount(100);
    jest.spyOn(account, 'fetchBalance').mockResolvedValue(200);

    const balance = await account.fetchBalance();
    expect(balance).toBe(200);
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const account = getBankAccount(100);
    jest.spyOn(account, 'fetchBalance').mockResolvedValue(200);

    await account.synchronizeBalance();
    expect(account.getBalance()).toBe(200);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const account = getBankAccount(100);
    jest.spyOn(account, 'fetchBalance').mockResolvedValue(null);

    await expect(account.synchronizeBalance()).rejects.toThrow(SynchronizationFailedError);
  });
});
