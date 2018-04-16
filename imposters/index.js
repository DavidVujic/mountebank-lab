const { argv } = require('yargs')
const { spawn } = require('child_process')
const createHelloWorldImposter = require('./helloworld.js')

function main (port) {
  const subprocess = spawn('npm', ['run', 'mb'])

  subprocess.stdout.on('data', data => {
    console.log(`Running: ${data}`)

    setTimeout(() => createHelloWorldImposter(port), 3000)
  })

  subprocess.on('error', err => console.error('Failed to start subprocess.', err))
}

main(argv.port)
