import {test, expect} from 'vitest';
import add from 'vitest-coverage-import-example'

test('test', () => {
    expect(add(1, 1)).toEqual(2)
})