import bent = require('bent')
type JsonR = bent.RequestFunction<bent.Json>
type SMR = bent.RequestFunction<SuccessMessage>

export type SuccessMessage = {
  message: 'success'
}

export class Rest {
  public readonly get: JsonR
  public readonly post: JsonR
  public readonly postOK: JsonR
  public readonly del: SMR
  public readonly patch: SMR
  public readonly put: SMR
  constructor(
    baseUrl: string,
    username: string,
    apiKey: string,
    customBent = bent,
  ) {
    const cred = Buffer.from(`${username}:${apiKey}`).toString('base64')
    const authHeaders = {
      Authorization: `Basic ${cred}`,
    }
    this.get = customBent(baseUrl, 'json', 'GET', 200, authHeaders)
    this.post = customBent(baseUrl, 'json', 'POST', 201, authHeaders)
    this.postOK = customBent(baseUrl, 'json', 'POST', 200, authHeaders)
    this.del = customBent(baseUrl, 'json', 'DELETE', 200, authHeaders) as SMR
    this.patch = customBent(baseUrl, 'json', 'PATCH', 200, authHeaders) as SMR
    this.put = customBent(baseUrl, 'json', 'PUT', 201, authHeaders) as SMR
  }
}
