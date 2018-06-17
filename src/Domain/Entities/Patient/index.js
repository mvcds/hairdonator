const DEPENDENCIES = {
  //  just to not break the app
  //  pretend "fs" is our implemented notifier system
  notifier: require('fs')
}

function Patient (data) {
  Object.assign(this, data)
}

Patient.prototype.notifyAboutDonation = async function ({ donator }, injection) {
  const { notifier } = Object.assign({}, DEPENDENCIES, injection)

  if (!donator.isValid) {
    notifier.tellDonatorAboudInvalidity({ donator })

    return false
  }

  await notifier.tellPatientAboutDonation({ patient: this })

  notifier.thankDonator({ donator })

  return true
}

module.exports = Patient