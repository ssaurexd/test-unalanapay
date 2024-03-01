'use client'
import { FC } from 'react'
import { IPeople, IVehicle } from '@/interfaces'
/*  */
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


interface Props {
	vehicle: IVehicle
}
export const VehicleCard: FC<Props> = ({ vehicle }) => {

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
					{ vehicle.name }
				</Typography>
			</Box>
			<Box>
				<Typography variant='subtitle1' component='h3' fontWeight='bold' >
					Pilot:
				</Typography>
				<Typography variant='body2' >
					{ vehicle.pilot }
				</Typography>
			</Box>
			<Box>
				<Typography variant='subtitle1' component='h3' fontWeight='bold' >
					Model:
				</Typography>
				<Typography variant='body2' >
					{ vehicle.vehicle_class }
				</Typography>
			</Box>
			<Box>
				<Typography variant='subtitle1' component='h3' fontWeight='bold' >
					Length:
				</Typography>
				<Typography variant='body2' >
					{ vehicle.length }
				</Typography>
			</Box>
		</Box>
	)
}