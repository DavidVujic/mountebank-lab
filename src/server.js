const net = require('net')

function createServer (port, host, resolve) {
  const server = net.createServer((socket) => {
    setInterval(() => {
      socket.write(`Hello World ${Date.now()}`)
    }, 2000)
  })

  server.listen(port, host)
  resolve(server)
}

async function create (port, host) {
  const executor = createServer.bind(null, port, host)

  return new Promise(executor)
}

module.exports = create
