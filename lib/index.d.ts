import { AxiosInstance } from 'axios';
import Thread from './thread';
export default class MusicThread {
    axios: AxiosInstance;
    private token?;
    constructor(token?: string);
    /**
     * Threads
     */
    fetchThread(key: string): Promise<{
        thread: Thread;
        links: import("./defs").Link[];
    }>;
    createThread(title: string, description: string, tags: string[], isPrivate: boolean): Promise<{
        thread: Thread;
        links: import("./defs").Link[];
    }>;
    fetchThreads(): Promise<Thread[]>;
    fetchThreadsForAccount(accountRequestToken: string): Promise<{
        threads: Thread[];
        account: import("./defs").Author;
    }>;
    fetchFeaturedThreads(): Promise<Thread[]>;
    fetchBookmarks(): Promise<Thread[]>;
    private createAxios;
    private authenticationRequired;
}
