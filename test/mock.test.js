// quick fake/mock test
// to check that Jest woeks as it should

const { expect } = require('@jest/globals')

describe('A test suite', () => {

    test('A fake test', () => {
        expect(3).toBe(3)
    })
})