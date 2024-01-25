const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Hola mundo')
})

const port = 3000

server.listen(port, () => {
    console.log('Servidor en puerto 3000')
})