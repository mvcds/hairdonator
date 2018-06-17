const assert = require('assert')

const Donator = require('./donator.factory')

console.log(Donator)

describe('Donator', () => {
  context('Short hair', () => {
    const donator = Donator.ShortHair()

    it('Has a "short hair" error', () => assert.deepStrictEqual(donator.errors, ['hair too short']))
  })

  context('Long hair', () => {
    const donator = Donator.LongHair()

    it('Has a "long hair" error', () => assert.deepStrictEqual(donator.errors, ['hair too long']))
  })

  context('Unhealthy hair', () => {
    const donator = Donator.UnhealthyHair()

    it('Has an "unhealthy hair" error', () => assert.deepStrictEqual(donator.errors, ['unhealthy hair']))
  })
})
