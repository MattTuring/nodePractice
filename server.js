const http = require('http')
const url = require('url')

const start = (route, handle) => {
  const onRequest = (request, response) => {
      const pathname = url.parse(request.url).pathname

      console.log('requested' + pathname)
      route(handle, pathname)

      response.writeHead(200, {'Content-type': 'text/plain'})
      response.write('hee')
      response.end()
  }
  http.createServer(onRequest).listen(8888)
  console.log("Server has started.");
}

exports.start = start;
