import { Author, IThread, Link } from './defs'

export interface FetchThreadResponse {
	thread: IThread
	links: Link[]
}

export interface CreateThreadResponse {
	thread: IThread
	links: Link[]
}

export interface FetchThreadsResponse {
	threads: IThread[]
}

export interface FetchThreadsForAccountResponse {
	account: Author
	threads: IThread[]
}

export interface FetchFeaturedThreadsResponse {
	threads: IThread[]
}

export interface FetchBookmarksResponse {
	threads: IThread[]
}
