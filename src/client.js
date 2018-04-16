const net = require('net')

function createClient (port, host, resolve) {
  const socket = new net.Socket()

  socket.on('readable', () => {
    const data = socket.read()
    const message = data ? data.toString() : ''
    console.log('Message:', message)
  })

  socket.on('error', (err) => console.error(err))
  socket.on('close', () => console.log('socket closed'))
  socket.on('disconnect', () => console.log('socket disconnected'))

  socket.connect(port, host, () => {
    console.log('connecting')
    resolve(socket)
  })
}

async function create (port, host) {
  const executor = createClient.bind(null, port, host)

  return new Promise(executor)
}

module.exports = create
