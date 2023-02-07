import MusicThread from '.';
import { Author, IThread, Link } from './defs';
export default class Thread {
    key: string;
    author: Author;
    title: string;
    description: string;
    tags: string[];
    is_private: boolean;
    page_url: String;
    private api;
    constructor(json: IThread, api: MusicThread);
    addLink(url: string): Promise<Link>;
    private setup;
}
