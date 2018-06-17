const assert = require('assert')

const Donator = require('./')

describe('Donator', () => {
  context('Valid Donator', () => {
    const donator = new Donator({ hairLength: 6, hairStatus: Donator.HairStatuses.Healthy })

    it('Has no errors', () => assert.deepStrictEqual(donator.errors, []))

    it('Flags as valid', () => assert.equal(donator.isValid, true))
  })

  context('Invalid Donator', () => {
    const donator = new Donator({ hairLength: 2, hairStatus: Donator.HairStatuses.Healthy })

    it('Has a "short hair" error', () => true)

    it('Flags as invalid', () => true)
  })
})
