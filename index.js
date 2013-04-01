var Q = require('q')
var r = require('request')

var request = function (url) {
  var deferred = Q.defer()
  var req = r(url, function (err, res) {
    if (err) { deferred.reject(err) }
    else { deferred.resolve(res) }
  })
  req.then = deferred.promise.then.bind(deferred.promise)
  return req
}

module.exports = request
