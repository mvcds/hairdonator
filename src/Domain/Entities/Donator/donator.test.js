const assert = require('assert')

const Donator = require('./')

describe('Donator', () => {
  context('Valid Donator', () => {
    const donator = new Donator({ hairLength: 6, hairStatus: Donator.HairStatuses.Healthy })

    it('Has no errors', () => assert.deepStrictEqual(donator.errors, []))

    it('Flags as valid', () => assert.equal(donator.isValid, true))
  })

  context('Invalid Donator', () => {
    describe('Short hair', () => {
      const donator = new Donator({ hairLength: 2, hairStatus: Donator.HairStatuses.Healthy })

      it('Has a "short hair" error', () => assert.deepStrictEqual(donator.errors, ['hair too short']))

      it('Flags as invalid', () => assert.equal(donator.isValid, false))
    })

    describe('Long hair', () => {
      const donator = new Donator({ hairLength: 16, hairStatus: Donator.HairStatuses.Healthy })

      it('Has a "long hair" error', () => assert.deepStrictEqual(donator.errors, ['hair too long']))

      it('Flags as invalid', () => assert.equal(donator.isValid, false))
    })

    describe('Unhealthy hair', () => {
      const donator = new Donator({ hairLength: 6, hairStatus: Donator.HairStatuses.Unhealthy })

      it('Has an "unhealthy hair" error', () => assert.deepStrictEqual(donator.errors, ['unhealthy hair']))

      it('Flags as invalid', () => assert.equal(donator.isValid, false))
    })
  })
})
