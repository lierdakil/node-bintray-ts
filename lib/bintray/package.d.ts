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
export declare type License = 'AFL-3.0' | 'APL-1.0' | 'Apache-2.0' | 'Apache-1.0' | 'Attribution' | 'BSL-1.0' | 'CA-TOSL-1.1' | 'CDDL-1.0' | 'CPAL-1.0' | 'Day' | 'Day-Addendum' | 'Bouncy-Castle' | 'EUDATAGRID' | 'CPL-1.0' | 'LGPL-2.1' | 'LGPL-3.0' | 'HSQLDB' | 'IBMPL-1.0' | 'CeCILL-B' | 'CeCILL-C' | 'CeCILL-2' | 'CeCILL-2.1' | 'IPAFont-1.0' | 'ISC' | 'Lucent-1.02' | 'MirOS' | 'MS-PL' | 'JA-SIG' | 'BSD' | 'MIT' | 'JSON' | 'Motosoto-0.9.1' | 'EPL-1.0' | 'ECL2' | 'Eiffel-2.0' | 'JTidy' | 'Entessa-1.0' | 'EUPL-1.1' | 'Fair' | 'Frameworx-1.0' | 'GPL-2.0+CE' | 'Multics' | 'NASA-1.3' | 'NTP' | 'NAUMEN' | 'Nethack' | 'Nokia-1.0a' | 'NOSL-3.0' | 'OCLC-2.0' | 'Openfont-1.1' | 'Opengroup' | 'PHP-3.0' | 'PostgreSQL' | 'Public Domain' | 'Public Domain - SUN' | 'PythonPL' | 'PythonSoftFoundation' | 'QTPL-1.0' | 'Real-1.0' | 'RicohPL' | 'SimPL-2.0' | 'Sleepycat' | 'SUNPublic-1.0' | 'Sybase-1.0' | 'UoI-NCSA' | 'IU-Extreme-1.1.1' | 'VovidaPL-1.0' | 'W3C' | 'wxWindows' | 'Xnet' | 'ZPL-2.0' | 'ZLIB' | 'Codehaus' | 'TMate' | 'WTFPL' | 'CPOL' | 'CPOL-1.02' | 'BSD 2-Clause' | 'MPL-2.0' | 'Go' | 'Scala' | 'Unlicense' | 'NUnit-Test-Adapter-2.6.3' | 'NUnit-2.6.3' | 'BSD Simplified' | 'BSD New' | 'CC0-1.0' | 'CDDL-1.1' | 'OpenSSL' | 'AGPL-V3' | 'Apache-1.1' | 'APSL-2.0' | 'Artistic-License-2.0' | 'CUAOFFICE-1.0' | 'Historical' | 'MS-RL' | 'GPL-2.0' | 'GPL-3.0' | 'Mozilla-1.1' | 'OSL-3.0' | 'RPL-1.5' | 'BSD 3-Clause' | 'OpenLDAP' | 'Copyfree' | 'CeCILL-1' | 'Facebook-Platform' | 'VIM License' | 'LPPL-1.0' | 'AFL-2.1' | 'Libpng' | 'EPL-2.0' | 'Unicode-DFS-2015' | 'LGPL-2.0' | 'EUPL-1.2' | 'IJG' | 'NCSA' | 'UPL-1.0' | 'ImageMagick' | 'GPL-3.0-only' | 'GPL-3.0-or-later';
