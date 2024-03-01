'use client'
import { FC } from 'react'
/*  */
import { IPeople } from '@/interfaces'
import { PeopleCard } from '..'
/*  */
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


interface Props {
	people: IPeople[]
}
export const PeopleList: FC<Props> = ({ people }) => {

	return (
		<Box component='section'
			sx={{
				display: 'grid',
				gridTemplateColumns: { xs: '1fr', md: 'repeat( auto-fill, minmax( 170px, 1fr ) ) '},
				gap: { xs: 2, md: 2 },
			}}
		>
			{ people.map(( person, i ) => (
				<PeopleCard key={`${ person.id }${ i }`} person={ person } />
			))}

			{ !people.length && 
				<Typography variant='body1' color='GrayText' >
					No characters found
				</Typography>
			}
		</Box>
	)
}