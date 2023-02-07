export interface Link {
	key: string
	title: string
	artist: string
	thumbnail_url: string
	page_url: string
}

export interface Author {
	name: string
	avatar_url: string
}

export interface IThread {
	key: string
	author: Author
	title: string
	description: string
	tags: string[]
	is_private: boolean
	page_url: String
}
