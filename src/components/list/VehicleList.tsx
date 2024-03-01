'use client'
import { FC } from 'react'
/*  */
import { IVehicle } from '@/interfaces'
import { VehicleCard } from '..'
/*  */
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


interface Props {
	vehicles: IVehicle[]
}
export const VehicleList: FC<Props> = ({ vehicles }) => {
	return (
		<Box component='section'
			sx={{
				display: 'grid',
				gridTemplateColumns: { xs: '1fr', md: 'repeat( auto-fill, minmax( 170px, 1fr ) ) '},
				gap: { xs: 2, md: 2 },
			}}
		>
			{ vehicles.map(( vehicle, i ) => (
				<VehicleCard key={`${ vehicle.id }${ i }`} vehicle={ vehicle } />
			))}

			{ !vehicles.length && 
				<Typography variant='body1' color='GrayText' >
					No vehicles found
				</Typography>
			}
		</Box>
	)
}