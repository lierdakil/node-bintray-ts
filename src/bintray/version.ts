import { Rest } from './rest'
import { promisify } from 'util'
import { readFile } from 'fs'
import { Stream } from 'stream'
import { queryStr } from './util'
import { HasAttrs } from './hasAttrs'
import { basename } from 'path'

export interface VersionData {
  name: string
  desc?: string
  released?: string // ISO8601 (yyyy-MM-dd'T'HH:mm:ss.SSSZ)
  github_release_notes_file?: string
  github_use_tag_release_notes?: boolean
  vcs_tag?: string
}

export interface VersionInfo {
  name: string
  desc: string
  package: string
  repo: string
  owner: string
  labels: string[]
  published: boolean
  attribute_names: string[]
  created: string // ISO date
  updated: string // ISO date
  released: string
  ordinal: number
  github_release_notes_file: string | null
  github_use_tag_release_notes: boolean
  vcs_tag: string | null
  rating_count: number
}

export class Version extends HasAttrs<VersionInfo, VersionData> {
  private contentBase: string
  constructor(
    subject: string,
    repo: string,
    pkg: string,
    version: string,
    rest: Rest,
  ) {
    super(`/packages/${subject}/${repo}/${pkg}/versions`, version, rest)
    this.contentBase = `/content/${subject}/${repo}/${pkg}/${version}`
  }
  public publishContent = async () =>
    this.rest.postOK(`${this.contentBase}/publish`, {
      discard: false,
    }) as Promise<{
      files: number
    }>
  public discardContent = async () =>
    this.rest.postOK(`${this.contentBase}/publish`, {
      discard: true,
    }) as Promise<{
      files: number
    }>
  public uploadContent = async (
    filePath: string,
    remotePath: string = basename(filePath),
    publish: boolean = false,
    explode: boolean = false,
  ) =>
    this.uploadContentBuffer(
      await promisify(readFile)(filePath),
      remotePath,
      publish,
      explode,
    )
  public uploadContentBuffer = async (
    data: string | ArrayBuffer | Buffer | Stream,
    remotePath: string,
    publish: boolean = false,
    explode: boolean = false,
  ) =>
    this.rest.put(
      `${this.contentBase}/${remotePath}?${queryStr({ publish, explode })}`,
      data,
    )
}
