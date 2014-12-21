const verify = require('adventure-verify')
const st     = require('servertest')
const path   = require('path')
const fs     = require('fs')

exports.problem = fs.createReadStream(path.join(__dirname, 'problem.txt'))
exports.solution = fs.createReadStream(path.join(__dirname, 'solution.js'))

exports.verify = verify({ modeReset: true }, function(args, t) {
  t.plan(4)
  const server = require(path.resolve(args[0]))

  st(server, '/', { encoding: 'utf8' }, function(err, body) {
    t.ifError(err, 'no error')
    t.ok(body, 'body returned')
    t.equal(typeof body, 'object', 'body object')
    t.equal(body.body, 'hello world', 'correct res')
    t.end()
  })
});
