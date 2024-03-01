'use client'
import Image from 'next/image'
import { FC } from 'react'
/*  */
import { OnePageHeader, PeopleList, SpecieList, VehicleList, Link } from '@/components'
import { IFilmPopulated } from '@/interfaces'
/*  */
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import HomeIcon from '@mui/icons-material/Home'
import BreadCrums from '@mui/material/Breadcrumbs'


interface Props {
	film: IFilmPopulated
}
export const FilmScreen: FC<Props> = ({ film }) => {
	return (
		<Box component='main'>
			<OnePageHeader film={ film } />
			<Container component='section'>
				{/* bredcrums */}
				<Box component='nav' aria-label='bredcrums' sx={{ mt: 2 }}>
					<BreadCrums>
						<Link href='/' hover>
							<HomeIcon sx={{ mt: '5px' }} />
						</Link>
						<Typography color='textPrimary' variant='caption'>{ film.title }</Typography>
					</BreadCrums>
				</Box>
				<Box component='section' sx={{ p: 2, mt: 2 }} >
					<Typography variant='h6' component='h2' fontWeight='bold'>
						Description: 
					</Typography>
					<Typography>
						{ film.description }
					</Typography>
				</Box>
				<Box component='section' mt={ 2 } 
					sx={{
						display: 'flex',
						flexDirection: 'row',
						gap: 2
					}}
				>
					<Box component='article'
						sx={{
							maxHeight: 300,
							height: 'auto',
							width: { xs: 200, md: 300 },
							position: 'relative',
							aspectRatio: '3/4',
							'& img': {
								objectFit: 'contain',
								objectPosition: 'center',
								width: '100%',
								height: '100%'
							}
						}}
					>
						<Image 
							src={ film.image }
							fill
							alt={ film.title }
							priority
							sizes='40vw'
						/>
					</Box>
					<Box component='article'>
						<Typography variant='subtitle1' component='h3' fontWeight='bold' >
							Director: 
						</Typography>
						<Typography variant='body2' >
							{ film.director }
						</Typography>
						<Typography variant='subtitle1' component='h3' fontWeight='bold' >
							Productor: 
						</Typography>
						<Typography variant='body2' >
							{ film.producer }
						</Typography>
						<Typography variant='subtitle1' component='h3' fontWeight='bold' >
							Release Date: 
						</Typography>
						<Typography variant='body2' >
							{ film.release_date }
						</Typography>
						<Typography variant='subtitle1' component='h3' fontWeight='bold' >
							Running Time: 
						</Typography>
						<Typography variant='body2' >
							{ film.running_time } minutes
						</Typography>
						<Typography variant='subtitle1' component='h3' fontWeight='bold' >
							Rotten Tomato Score:
						</Typography>
						<Typography variant='body2' >
							{ film.rt_score }
						</Typography>
					</Box>
				</Box>
				<Box component='section' sx={{ p: 2, mt: 2 }} >
					<Typography variant='h6' component='h2' fontWeight='bold'>
						Characters: 
					</Typography>
					<PeopleList people={ film.people } />
				</Box>
				<Box component='section' sx={{ p: 2, mt: 2 }} >
					<Typography variant='h6' component='h2' fontWeight='bold'>
						Vehicles: 
					</Typography>
					<VehicleList vehicles={ film.vehicles } />
				</Box>
				<Box component='section' sx={{ p: 2, mt: 2, mb: 5 }} >
					<Typography variant='h6' component='h2' fontWeight='bold'>
						Species: 
					</Typography>
					<SpecieList species={ film.species } />
				</Box>
			</Container>
		</Box>
	)
}