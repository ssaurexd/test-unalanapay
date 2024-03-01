'use client'
import { FC } from 'react'
/*  */
import { ISpecie } from '@/interfaces'
import { SpecieCard } from '..'
/*  */
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


interface Props {
	species: ISpecie[]
}
export const SpecieList: FC<Props> = ({ species }) => {
	return (
		<Box component='section'
			sx={{
				display: 'grid',
				gridTemplateColumns: { xs: '1fr', md: 'repeat( auto-fill, minmax( 170px, 1fr ) ) '},
				gap: { xs: 2, md: 2 },
			}}
		>
			{ species.map(( specie, i ) => (
				<SpecieCard key={`${ specie.id }${ i }`} specie={ specie } />
			))}

			{ !species.length && 
				<Typography variant='body1' color='GrayText' >
					No species found
				</Typography>
			}
		</Box>
	)
}