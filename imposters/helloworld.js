const shell = require('shelljs')

function buildImposter (port) {
  return {
    'port': port,
    'protocol': 'tcp',
    'mode': 'binary',
    'stubs': [
      {
        'responses': [
          {
            'is': {
              'data': Buffer.from('Hello World!', 'utf8').toString('base64')
            }
          }
        ]
      }
    ]
  }
}

function createImposter (port) {
  const data = JSON.stringify(buildImposter(port))
  const command = `curl -i -X POST -H 'Content-Type: application/json' http://localhost:2525/imposters --data '${data}'`

  shell.exec(command)
}

module.exports = createImposter
