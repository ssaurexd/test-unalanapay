import { FC } from 'react'
import { useRouter } from 'next/navigation'
/*  */
import { IFilm } from '@/interfaces'
/*  */
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image'


interface Props {
	film: IFilm
}
export const FilmCard: FC<Props> = ({ film }) => {
	const router = useRouter()

	return (
		<Box component='article' 
			onClick={ () => router.push(`/film/${ film.id }`) }
			sx={{
				boxShadow: 1,
				borderRadius: 1,
				p: 2,
				pr: 5,
				cursor: 'pointer',
				backgroundColor: 'background.paper',
				position: 'relative',
				transition: 'all 0.3s',
				display: 'flex',
				flexDirection: { xs: 'column', md: 'row' },
				justifyContent: { xs: 'center', md: 'flex-start' },
				'&:hover': {
					boxShadow: 2
				}
			}}
		>
			<Box
				sx={{
					position: 'relative',
					width: '30%',
					height: '200px',
					gap: 2,
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
					alt={ film.title }
					priority
					fill
					quality={ 70 }
					sizes='30vw'
				/>
			</Box>
			<Box ml={ 2 }>
				<Box component='header' mb={ 1 }>
					<Typography variant='h5'>{ film.title }</Typography>
					<Typography variant='body2'>{ film.director }</Typography>
				</Box>
				<Box component='section' >
					<Typography variant='body1' color='GrayText'>{ film.description.substring(0, 200) }...</Typography>
				</Box>
			</Box>
			<ArrowForwardIosIcon 
				sx={{
					position: 'absolute',
					right: 2,
					top: '50%',
					transform: 'translateY(-50%)'
				}}
			/>
		</Box>
	)
}