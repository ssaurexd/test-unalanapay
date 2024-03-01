'use client'
import { FC } from 'react'
import { IPeople } from '@/interfaces'
/*  */
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


interface Props {
	person: IPeople
}
export const PeopleCard: FC<Props> = ({ person }) => {

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
					{ person.name }
				</Typography>
			</Box>
			<Box>
				<Typography variant='subtitle1' component='h3' fontWeight='bold' >
					Age:
				</Typography>
				<Typography variant='body2' >
					{ person.age }
				</Typography>
			</Box>
			<Box>
				<Typography variant='subtitle1' component='h3' fontWeight='bold' >
					Eye Color:
				</Typography>
				<Typography variant='body2' >
					{ person.eye_color }
				</Typography>
			</Box>
			<Box>
				<Typography variant='subtitle1' component='h3' fontWeight='bold' >
					Hair Color:
				</Typography>
				<Typography variant='body2' >
					{ person.hair_color }
				</Typography>
			</Box>
			<Box>
				<Typography variant='subtitle1' component='h3' fontWeight='bold' >
					Gender: 
				</Typography>
				<Typography variant='body2' >
					{ person.gender }
				</Typography>
			</Box>
		</Box>
	)
}