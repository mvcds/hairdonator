const { Factory } = require('rosie')
const { name, internet } = require('faker')

const Patient = require('./')

const factory = new Factory()
  .attr('name', name.findName)
  .attr('email', internet.email)

function build (data) {
  const fixture = factory.build(data)

  return new Patient(fixture)
}

function RegularPatient () {
  return build({})
}

module.exports = {
  RegularPatient
}
