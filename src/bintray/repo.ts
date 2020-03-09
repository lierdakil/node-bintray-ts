import { Package } from './package'
import { Rest } from './rest'
import { ApiEP } from './apiEp'

type RepositoryType =
  | 'maven'
  | 'debian'
  | 'conan'
  | 'rpm'
  | 'docker'
  | 'npm'
  | 'opkg'
  | 'nuget'
  | 'vagrant'
  | 'generic'

export interface RepositoryData {
  name: string
  desc: string
  type?: RepositoryType
  private?: boolean
  business_unit?: string
  labels?: string[]
  gpg_sign_metadata?: boolean
  gpg_sign_files?: boolean
  gpg_use_owner_key?: boolean
  version_update_max_days?: number
}

export interface RepositoryInfo {
  name: string
  owner: string
  type: RepositoryType
  private: boolean
  premium: boolean
  desc: string
  labels: string[]
  created: string // ISO date
  package_count: number
  gpg_use_owner_key: boolean
  gpg_sign_files: boolean
  gpg_sign_metadata: boolean
}

export interface PackageShort {
  name: string
  linked: boolean
}

export class Repository extends ApiEP<RepositoryInfo, RepositoryData> {
  constructor(private subject: string, private repo: string, rest: Rest) {
    super(`/repos/${subject}`, repo, rest)
  }

  // accessor
  public package = (pkg: string) =>
    new Package(this.subject, this.repo, pkg, this.rest)

  // api calls
  public getPackages = async (start = 0, startName?: string) =>
    this.rest.get(
      `${this.apiBase}/packages?start_pos=${start}` +
        (startName !== undefined ? '&start_name=' + startName : ''),
    ) as Promise<PackageShort[]>
}
