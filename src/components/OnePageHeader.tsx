'use client'
import Image from 'next/image'
import { FC } from 'react'
/*  */
import { IFilmPopulated } from '@/interfaces'
/*  */
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


interface Props {
	film: IFilmPopulated
}
export const OnePageHeader: FC<Props> = ({ film }) => {
	return (
		<Box component='article'
			sx={{
				overflow: { xs: 'hidden', md: 'visible' },
				position: 'relative',
				borderBottomLeftRadius: 2,
				borderBottomRightRadius: 2,
				width: '100%',
				height: 'auto',
				aspectRatio: { xs: '3/2', md: '16/3' },
				zIndex: 10,
				'& img': {
					objectFit: 'cover',
					objectPosition: 'center',
					width: '100%',
					height: '100%'
				}
			}}
		>
			<Image 
				src={ film.movie_banner }
				alt={ film.title }
				priority
				fill
				quality={ 70 }
				sizes='100vw'
			/>
			<Box component='header'
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-end',
					height: '55%',
					width: '100%',
					p: 1,
					pb: 2,
					background: 'linear-gradient(180deg, hsla(0, 0%, 0%, 0) 0%, hsla(0, 0%, 0%, 0.3) 10%, hsl(0, 0%, 0%) 100%)',
					transform: 'translateY(82%)',
					zIndex: 20,
					color: 'white',
				}}
			>
				<Typography variant='h4' component='h1' align='center'>
					{ film.title }
				</Typography>
				<Typography variant='h4' component='h1' align='center' fontStyle='italic'>
					{ film.original_title } - { film.original_title_romanised }
				</Typography>
			</Box>
		</Box>
	)
}