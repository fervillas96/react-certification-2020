import { storage } from './storage';

describe('Storage test suite', () => {
  it('Getting a non existing value', () => {
    const value = storage.get('testingKey');
    expect(value).toBe(null);
  });

  it('Setting and Getting value', () => {
    storage.set('testingKey', 'testingValue');

    const value = storage.get('testingKey');
    expect(value).toBe('testingValue');
  });
});
