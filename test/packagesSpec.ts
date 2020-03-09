import { expect } from 'chai'
import { client } from './common'

const repo = client.repository('repo')
const pack = repo.package('my-package')

describe('Packages:', function() {
  it('should register a new package properly', async () => {
    const res = await pack.create({
      desc: 'My package description',
      labels: ['JavaScript', 'Package'],
      licenses: ['MIT'],
      vcs_url: 'https://github.com/organization/my-package',
    })
    expect(res.name).to.equal('my-package')
  })

  it('should retrieve and find the created package', async () => {
    const packages = await repo.getPackages()
    expect(packages).to.deep.contain({
      name: 'my-package1',
      linked: false,
    })
  })

  it('should update package information', async () => {
    const res = await pack.update({
      desc: 'My super package',
      licenses: ['BSD'],
      labels: ['package'],
    })
    expect(res.message).to.equal('success')
  })

  it('should retrieve the package info', async () => {
    const res = await pack.info()
    expect(res.desc).to.equal('My super package')
  })

  return it('should remove the package', async () => {
    const res = await pack.delete()
    expect(res.message).to.equal('success')
  })
})
