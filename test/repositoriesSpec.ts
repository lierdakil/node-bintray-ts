import { expect } from 'chai'
import { client } from './common'

describe('Repositories:', function() {
  it('should retrieve properly the existent repositories', async () => {
    const repos = await client.getRepositories()
    expect(repos).to.have.length(1)
    expect(repos[0].name).to.equal('repo')
  })

  it('should retrieve data properly for the given repository', async () => {
    const repo = client.repository('repo')
    const info = await repo.info()
    expect(info.name).to.equal('repo')
    expect(info.owner).to.equal('organization')
  })
})
