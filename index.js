const createServer = require('./src/server.js')
const createClient = require('./src/client.js')

async function main () {
  const port = 1337
  const host = '127.0.0.1'

  await createServer(port, host)
  await createClient(port, host)
  console.log('online')
}

main().catch((err) => console.error(err))
