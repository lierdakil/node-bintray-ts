import { Rest } from './rest'
import { Repository } from './repo'

export interface RepositoryShort {
  name: string
  owner: string
  lastUpdated: string // ISO date
}

export class Bintray {
  private rest: Rest

  constructor(
    username: string,
    apikey: string,
    private subject: string = username,
    apiBaseUrl = 'https://bintray.com/api/v1',
    customBent?: typeof import('bent'),
  ) {
    this.rest = new Rest(apiBaseUrl, username, apikey, customBent)
  }

  public getRepositories = async () =>
    this.rest.get(`/repos/${this.subject}`) as Promise<RepositoryShort[]>

  public repository = (repo: string) =>
    new Repository(this.subject, repo, this.rest)
}
