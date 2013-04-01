var request = require('../index')

request('http://google.com').then(function (resp) {
  console.log(resp) 
  console.log('(it worked)')
}, function (err) {
  console.log(err)
  console.log('(request error)')
})