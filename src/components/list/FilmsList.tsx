'use client'
import { FC, useEffect, useState } from 'react'
/*  */
import { IFilm } from '@/interfaces'
import { FilmCard } from '..'
import { useDebounce } from '@/hooks'
/*  */
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'


interface Props {
	films: IFilm[]
}
export const FilmsList: FC<Props> = ({ films }) => {
	const [ localFilms, setLocalFilms ] = useState( films )
	const [ search, setSearch ] = useState( '' )
	const debouncedSearch = useDebounce( search, 500 )

	const handleSearch = ( e: React.ChangeEvent<HTMLInputElement> ) => {
		setSearch( e.target.value )
	}

	/* 
		filtering films on search change with 500ms delay 
		NOTE: api does not support search query so i have to filter films on client side
	*/
	useEffect( () => {

		if ( debouncedSearch ) {
			const filteredFilms = films.filter( film => film.title.toLowerCase().includes( debouncedSearch.toLowerCase() ) )

			setLocalFilms( filteredFilms )
		} else setLocalFilms( films )
	}, [ debouncedSearch, films ] )

	return (
		<Container component='main'>
			<Box my={ 2 } component='header'>
				<TextField 
					value={ search }
					label='Buscar' 
					type='search'
					placeholder='pelicula' 
					fullWidth
					onChange={ handleSearch }
				/>
			</Box>
			<Box component='section'
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: 3,
					py: 2
				}}
			>
					{ localFilms.map( film => (
						<FilmCard key={ film.id } film={ film } />
					))}
			</Box>
		</Container>
	)
}