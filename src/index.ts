import { Request, Response } from "express"

export const main = (request: Request, response: Response) => {
  const body = `ready to start... Body: ${request.body} Query: ${request.query}`

  console.log('!!body', body) //eslint-disable-line

  return response.send(body)
}