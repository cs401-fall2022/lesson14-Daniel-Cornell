import {describe, expect, test} from '@jest/globals';
import {getMessage} from '../template';

describe('message getter', () => {
  test('checks that message is Hello World!', () => {
    expect(getMessage()).toBe("Hello World!");
  });
});