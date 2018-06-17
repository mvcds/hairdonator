const { Factory } = require('rosie')
const { name, internet, random } = require('faker')

const Donator = require('./')

const range = (min, max) => random.number({ min, max })

const factory = new Factory()
  .attr('name', name.findName)
  .attr('email', internet.email)
  .attr('hairLength', () => range(0, 100))
  .attr('hairStatus', () => random.arrayElement[
    Donator.HairStatuses.Healthy,
    Donator.HairStatuses.Unhealthy
  ])

function build (data) {
  const fixture = factory.build(data)

  return new Donator(fixture)
}

function ValidDonator () {
  const fixture = {
    hairLength: range(5, 16),
    hairStatus: Donator.HairStatuses.Healthy
  }

  return build(fixture)
}

function ShortHair () {
  const fixture = {
    hairLength: range(0, 4),
    hairStatus: Donator.HairStatuses.Healthy
  }

  return build(fixture)
}

function LongHair () {
  const fixture = {
    hairLength: range(17, 100),
    hairStatus: Donator.HairStatuses.Healthy
  }

  return build(fixture)
}

function UnhealthyHair () {
  const fixture = {
    hairLength: range(5, 16),
    hairStatus: Donator.HairStatuses.Unhealthy
  }

  return build(fixture)
}

module.exports = {
  ValidDonator,
  ShortHair,
  LongHair,
  UnhealthyHair,
  InvalidDonator: () => {
    const donator = random.arrayElement([
      ShortHair,
      LongHair,
      UnhealthyHair
    ])

    return donator()
  }
}
