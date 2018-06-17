const { Given, When, Then } = require('cucumber')
const { mock } = require('sinon')

const Donator = require('../../Entities/Donator')
const Patient = require('../../Entities/Patient')

const DonateHair = require('./')

Given('a valid donator', function () {
  const notifier = {
    tellPatientAboutDonation: mock('tell patient about donation')
      .resolves({}),
    thankDonator: mock('thank donator')
      .resolves({})
  }

  const DonationRepo = {
    donate: mock('donate')
  }

  this.args = {
    donator: new Donator({ hairLength: 6, hairStatus: Donator.HairStatuses.Healthy })
  }

  this.injection = {
    notifier,
    DonationRepo
  }
})

Given('an invalid donator', function () {
  const notifier = {
    tellDonatorAboudInvalidity: mock('tell donator aboud invalidity')
      .resolves({})
  }

  this.args = {
    donator: new Donator({ hairLength: 3, hairStatus: Donator.HairStatuses.Healthy })
  }

  this.injection = {
    notifier
  }
})

When('hair is donated', async function () {
  this.args.patient = new Patient({ email: 'marvinc.silva@gmail.com' })

  await DonateHair(this.args, this.injection)
})

Then('the receiver is told about donation', function () {
  this.injection.notifier
    .tellPatientAboutDonation
    .verify()
})

Then('donator is thanked', function () {
  this.injection.notifier
    .thankDonator
    .verify()
})

Then('the donator is told their hair ain\'t good', function () {
  this.injection.notifier
    .tellDonatorAboudInvalidity
    .verify()
})