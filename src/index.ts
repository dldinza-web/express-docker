import { Request } from 'express'

export const main = (request: Request) => {
  const body = `ready to start... Body: ${request.body} Query: ${JSON.stringify(request.query)}`

  console.log('!!body', body, process.env.ENVIRONMENT_NAME) //eslint-disable-line

  return body
}