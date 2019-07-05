const parser = require('./parser')

const Root = function () {
  // root parser options
  this.options = {
    flavour: 'default',
  }
}

Root.prototype.Parse = function (data, options) {
  // TODO loop trough the options and add only the ones added
  this.options = options

  return parser(data, options)
}

module.exports = new Root()

