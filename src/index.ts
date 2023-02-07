import axios, { AxiosInstance } from 'axios'

import Thread from './thread'
import {
	FetchThreadResponse,
	CreateThreadResponse,
	FetchThreadsResponse,
	FetchThreadsForAccountResponse,
	FetchFeaturedThreadsResponse,
	FetchBookmarksResponse
} from './responses'

export default class MusicThread {
	axios: AxiosInstance
	
	private token?: string

	constructor(token?: string) {
		this.token = token
		this.axios = this.createAxios()
	}

	async fetchThread(key: string) {
		const { data } = await this.axios.get<FetchThreadResponse>(`thread/${key}`)

		return {
			...data,
			thread: new Thread(data.thread, this)
		}
	}

	async createThread(title: string, description: string, tags: string[], isPrivate: boolean) {
		const { data } = await this.axios.post<CreateThreadResponse>('new-thread', {
			title,
			description,
			tags,
			is_private: isPrivate
		})

		return {
			...data,
			thread: new Thread(data.thread, this)
		}
	}

	async fetchThreads() {
		this.authenticationRequired()

		const { data } = await this.axios.get<FetchThreadsResponse>('threads')

		return data.threads.map(thread => new Thread(thread, this))
	}

	async fetchThreadsForAccount(accountRequestToken: string) {
		const { data } = await this.axios.get<FetchThreadsForAccountResponse>(`account/${accountRequestToken}`)

		return {
			...data,
			threads: data.threads.map(thread => new Thread(thread, this))
		}
	}

	async fetchFeaturedThreads() {
		const { data } = await this.axios.get<FetchFeaturedThreadsResponse>('featured')

		return data.threads.map(thread => new Thread(thread, this))
	}

	async fetchBookmarks() {
		this.authenticationRequired()

		const { data } = await this.axios.get<FetchBookmarksResponse>('bookmarks')

		return data.threads.map(thread => new Thread(thread, this))
	}

	private createAxios() {
		return axios.create({
			baseURL: 'https://musicthread.app/api/v0/',
			headers: {
				...(this.token ? {
					Authorization: `Bearer ${this.token}`
				} : {})
			}
		})
	}
	
	private authenticationRequired() {
		if(!this.token)
			throw new Error('MusicThread: An API token is required for this endpoint. You can generate one at https://musicthread.app/account/new-token')
	}
}
