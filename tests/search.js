var assert = require('assert')
  , Twit = require('../lib/twitter')
  , config = require('../config')

var twit = new Twit(config)

describe('SEARCH API', function () {
  it('SEARCH', function (done) {
    twit.search({q: 'blue angels'}, function (err, reply) {
      check(err, reply)
      done()
    })
  })
})

function check (err, reply) {
  assert.equal(err, null)
  assert.equal(typeof reply, 'object')
}
