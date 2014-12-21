const http = require('http')

const server = http.createServer(function(req, res) {
  const msg = 'hello world'
  res.end(msg)
});

server.listen(1337)

module.exports = server
