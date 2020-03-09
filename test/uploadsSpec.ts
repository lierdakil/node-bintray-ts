import { expect } from 'chai'
import { client } from './common'

const repo = client.repository('repo')
const pack = repo.package('my-package')
const vers = pack.version('1.1.5')

describe('Uploads:', function() {
  it('should register a new package properly', async () => {
    const res = await pack.create({
      desc: 'My package description',
      labels: ['JavaScript', 'Package'],
      licenses: ['MIT'],
      vcs_url: '',
    })
    expect(res.name).to.equal('my-package')
  })

  it('should creates a new package version', async () => {
    const res = await vers.create({
      desc: 'Fixes something',
      github_release_notes_file:
        'https://github.com/user/my-package/RB-1.1.5/README.md',
      released: 'ISO8601 (yyyy-MM-ddTHH:mm:ss.SSSZ)',
    })
    expect(res.name).to.equal('1.1.5')
  })

  it('should upload the file properly', async () => {
    const res = await vers.uploadContent(`${__dirname}/fixtures/my-package.gz`)
    expect(res.message).to.equal('success')
  })

  it('should publish the file properly', async () => {
    const res = await vers.publishContent()
    expect(res.files).to.equal(39)
  })

  it('should remove the package', async () => {
    expect(await pack.delete()).to.deep.equal({ message: 'success' })
  })
})
