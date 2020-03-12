import { License } from './licenses';
import { HasAttrs } from './hasAttrs';
import { Rest } from './rest';
import { Version } from './version';
export interface PackageInfo {
    name: string;
    repo: string;
    owner: string;
    desc: string;
    labels: string[];
    attribute_names: string[];
    licenses: License[];
    custom_licenses: string[];
    followers_count: number;
    created: string;
    website_url: string;
    issue_tracker_url: string;
    github_repo: string;
    github_release_notes_file: string;
    public_download_numbers: boolean;
    public_stats: boolean;
    linked_to_repos: string[];
    versions: string[];
    latest_version: string;
    updated: string;
    rating_count: number;
    system_ids: string[];
    vcs_url: string;
}
export interface PackageData {
    name: string;
    desc?: string;
    labels?: string[];
    licenses: License[];
    custom_licenses?: string[];
    vcs_url: string;
    website_url?: string;
    issue_tracker_url?: string;
    github_repo?: string;
    github_release_notes_file?: string;
    public_download_numbers?: boolean;
    public_stats?: boolean;
}
export declare class Package extends HasAttrs<PackageInfo, PackageData> {
    private subject;
    private repo;
    private pkg;
    constructor(subject: string, repo: string, pkg: string, rest: Rest);
    version: (version?: string) => Version;
}
