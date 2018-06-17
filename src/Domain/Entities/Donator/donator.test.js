const assert = require('assert')

const Donator = require('./')

describe('Donator', () => {
  context('Donator has short hair', () => {
    const donator = new Donator({ hairLength: 2, hairStatus: Donator.HairStatuses.Healthy })

    it('Has a "short hair" error', () => assert.deepStrictEqual(donator.errors, ['hair too short']))

    it('Flags as invalid', () => assert.equal(donator.isValid, false))
  })

  context('Donator has long hair', () => {
    const donator = new Donator({ hairLength: 16, hairStatus: Donator.HairStatuses.Healthy })

    it('Has a "long hair" error', () => assert.deepStrictEqual(donator.errors, ['hair too long']))

    it('Flags as invalid', () => assert.equal(donator.isValid, false))
  })

  context('Donator has unhealthy hair', () => {
    const donator = new Donator({ hairLength: 6, hairStatus: Donator.HairStatuses.Unhealthy })

    it('Has an "unhealthy hair" error', () => assert.deepStrictEqual(donator.errors, ['unhealthy hair']))

    it('Flags as invalid', () => assert.equal(donator.isValid, false))
  })
})
