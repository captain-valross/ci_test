import { jest } from '@jest/globals';
import { returnZero } from '../source/myCode.js';

jest.useFakeTimers();

describe('General', () => {
	test('Minutes should be even', () => {
		expect(returnZero()).toBe(0);
	});
});
