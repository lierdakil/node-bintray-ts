import { Bintray } from '../'
import { bent } from './bent-mock'

const username = 'username'
const apikey = 'apikey'
const organization = 'organization'

const client = new Bintray(username, apikey, organization, undefined, bent)

export { client }
