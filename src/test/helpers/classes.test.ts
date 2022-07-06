import classes from '../../helpers/classes';
import { expect, test } from 'vitest'


test('classes, 2个参数', () => {
  expect(classes('a', 'b')).toBe('a b');
})

test('classes, 0参数', () => {
  expect(classes()).toBe('');
})
