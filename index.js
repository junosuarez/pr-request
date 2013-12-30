var Promise = require('bluebird')
var r = require('request')

var request = function (url) {
  var deferred = Promise.defer()
  var req = r(url, function (err, res) {
    if (err) { deferred.reject(err) }
    else { deferred.resolve(res) }
  })
  req.then = deferred.promise.then.bind(deferred.promise)
  return req
}

module.exports = request
