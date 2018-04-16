const { argv } = require('yargs')
// const createServer = require('./src/server.js')
const createClient = require('./src/client.js')

async function main (port) {
  const host = '127.0.0.1'

  // await createServer(port, host)
  await createClient(port, host)
  console.log('online')
}

main(argv.port).catch((err) => console.error(err))
