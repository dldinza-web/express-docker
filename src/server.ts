import express, { Request, Response } from 'express'

const webServer = express()
const port = process.env.PORT || 3000;

// routes
const route = require('./routes.json')

webServer.get('/', (request: Request, response: Response) => {
  console.log(
    '[Request]',
    '\nHeader: ',
    request.headers,
    '\nQuery: ',
    request.query,
    '\nBody: ',
    request.body
  )

  const responseBody = `
    <h3>Hi World!</h3>
  `

  response.send(responseBody)
})

if (route.method == "GET") {
  webServer.get(route.urlPath, (request: Request, response: Response) => {

    const endpointProcess = require(route.src)

    const processResponse = endpointProcess[route.handler]
    const responseEndpoint = processResponse(request, response)

    response.setHeader('Content-Type', 'application/json')
    response.send(responseEndpoint)
  })
}

webServer.listen(
  port,
  () => { // onStart
    const server = `http://localhost:${port}`

    console.log(`Route ${route.method}: ${server}${route.urlPath}`)
  }
)