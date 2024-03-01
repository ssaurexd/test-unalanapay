export interface IFilm {
	id: string
	title: string
	original_title: string
	original_title_romanised: string
	image: string
	movie_banner: string
	description: string
	director: string
	producer: string
	release_date: string
	running_time: string
	rt_score: string
	people: string[]
	species: string[]
	locations: string[]
	vehicles: string[]
	url: string
}

export interface IFilmPopulated {
	id: string
	title: string
	original_title: string
	original_title_romanised: string
	image: string
	movie_banner: string
	description: string
	director: string
	producer: string
	release_date: string
	running_time: string
	rt_score: string
	people: IPeople[]
	species: ISpecie[]
	locations: string[]
	vehicles: IVehicle[]
	url: string
}

export interface IPeople {
	id: string
	name: string
	gender: string
	age: string
	eye_color: string
	hair_color: string
	films: string[]
	species: string
	url: string
}

export interface ISpecie {
	id: string
	name: string
	classification: string
	eye_colors: string
	hair_colors: string
	people: string[]
	films: string[]
	url: string
}

export interface IVehicle {
	id: string
	name: string
	description: string
	vehicle_class: string
	length: string
	pilot: string
	films: string[]
	url: string
}
