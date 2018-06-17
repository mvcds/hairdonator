const Statuses = {
  Healthy: Symbol('healthy hair'),
  Unhealthy: Symbol('unhealthy hair')
}

function getErrors () {
  const errors = []

  if (this.hairLength < 5) errors.push('hair too short')

  if (this.hairLength > 15) errors.push('hair too long')

  if (this.hairStatus === Statuses.Unhealthy) errors.push('unhealthy hair')

  return errors
}

function getValidState () {
  return this.errors.length === 0
}

function Donator (data) {
  Object.assign(this, data)
}

Object.defineProperty(Donator.prototype, 'errors', { get: getErrors })
Object.defineProperty(Donator.prototype, 'isValid', { get: getValidState })

Donator.HairStatuses = Statuses
module.exports = Donator