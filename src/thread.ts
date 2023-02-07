import MusicThread from '.'
import { Author, IThread, Link } from './defs'

export default class Thread {
	key: string
	author: Author

	title: string
	description: string

	tags: string[]
	is_private: boolean

	page_url: String

	private api: MusicThread

	constructor(json: IThread, api: MusicThread) {
		this.setup(json)
		this.api = api
	}

	async addLink(url: string) {
		const { data } = await this.api.axios.post('add-link', {
			url,
			thread: this.key
		})

		return data.link as Link
	}

	private setup(json: IThread) {
		this.key = json.key
		this.author = json.author

		this.title = json.title
		this.description = json.description

		this.tags = json.tags
		this.is_private = json.is_private

		this.page_url = json.page_url
	}
}
