import { RequestFunction } from 'bent'

export const bent = bentMock as typeof import('bent')

import repositories = require('./mocks/repositories.json')
import packages = require('./mocks/packages.json')
import upload = require('./mocks/upload.json')
import versions = require('./mocks/versions.json')

function findRequest(url: string, type: string) {
  const test = (x: { request: { method: string; url: string } }) =>
    x.request.method === type && url.match(RegExp(x.request.url))
  return (
    repositories.find(test) ||
    packages.find(test) ||
    upload.find(test) ||
    versions.find(test)
  )
}

function bentMock(
  _baseUrl: string,
  _replyType: 'json',
  requestType: string,
  expectedReplyCode: 200,
  authHeaders: { Authorization: string },
): RequestFunction<any> {
  const success = { message: 'success' }
  return async function(url: string, _data: any) {
    const req = findRequest(url.split('?')[0], requestType)
    if (!req) throw new Error('No response for ' + url)
    if (req.request.headers.Authorization !== authHeaders.Authorization) {
      throw new Error('Invalid authorization')
    }
    const resp = req.response
    if (resp.status !== expectedReplyCode) {
      throw new Error('Unexpected reply code')
    }
    if (requestType !== 'GET' && requestType !== 'POST') return success
    else return resp.body
  }
}
