export interface ILinks {
	to: string
	imgSrc: string
	alt: string
	text: string
}

export interface ICard {
	id: number
	title?: string
	price?: number
	description?: string
	category?: string
	image?: string
	rating?: {
		rate: number
		count: number
	}
}
