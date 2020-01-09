const http = require('http')

http.createServer((Request, Response) => {
    Response.writeHead(200, { 'Content-Type': 'text/plain' })
    Response.end('hello world')
}).listen(8888)

console.log('Server running at http://127.0.0.1:8888/');
