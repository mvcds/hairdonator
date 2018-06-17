const Statuses = {
  Healthy: Symbol('healthy hair'),
  Unhealthy: Symbol('unhealthy hair')
}

function getErrors () {
  return []
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