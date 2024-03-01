'use client'
import { FC } from 'react'
import { ISpecie } from '@/interfaces'
/*  */
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


interface Props {
	specie: ISpecie
}
export const SpecieCard: FC<Props> = ({ specie }) => {

	return (
		<Box component='article'
			sx={{
				borderRadius: 1,
				boxShadow: 1,
				minHeight: 200,
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: { xs: 'row', md: 'column' },
				flexWrap: 'wrap',
				gap: { xs: 2, md: 0 },
				p: 2,
				mt: 2,
			}}
		>
			<Box>
				<Typography variant='subtitle1' component='h3' fontWeight='bold' >
					Name:
				</Typography>
				<Typography variant='body2' >
					{ specie.name }
				</Typography>
			</Box>
			<Box>
				<Typography variant='subtitle1' component='h3' fontWeight='bold' >
					Classification:
				</Typography>
				<Typography variant='body2' >
					{ specie.classification }
				</Typography>
			</Box>
			<Box>
				<Typography variant='subtitle1' component='h3' fontWeight='bold' >
					Eye colors:
				</Typography>
				<Typography variant='body2' >
					{ specie.eye_colors }
				</Typography>
			</Box>
			<Box>
				<Typography variant='subtitle1' component='h3' fontWeight='bold' >
					Hair colors:
				</Typography>
				<Typography variant='body2' >
					{ specie.hair_colors }
				</Typography>
			</Box>
		</Box>
	)
}