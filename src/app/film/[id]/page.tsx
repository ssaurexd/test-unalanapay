import { IFilm, IFilmPopulated } from '@/interfaces'
import { FilmScreen } from '@/components'
import { baseAPIURL } from '@/config'



/** 
 * @param id
 * @returns {Promise<IFilmPopulatedPopulated>}
 * @description Fetch film from api with id param and its associated data
*/
const getData = async ( id: string ): Promise<IFilmPopulated> => {
	let people = null
	let vehicles = null
	let species = null
  try {
    const resp = await fetch(`${ baseAPIURL }/films/${ id }`)
		const data = await resp.json() as IFilm
		/* populate data from film */
		/* only seven persons and if only is one people there is no valid url*/
		if( data.people.length === 1 ) people = [ ]
		else {
			people = await Promise.all( data.people.splice(0,7).map( async ( url ) => {
				const peopleResp = await fetch( url )
				const peopleData = await peopleResp.json()
				return peopleData
			}))
		}
		/* only seven vehicles and if only is one vehicle there is no valid url*/
		if( data.vehicles.length === 1 ) vehicles = [ ]
		else {
			vehicles = await Promise.all( data.vehicles.splice(0,7).map( async ( url ) => {
				const vehicleResp = await fetch( url )
				const vehicleData = await vehicleResp.json()
				return vehicleData
			}))
		}
		
		/* only seven species and if only is one species there is no valid url*/
		if( data.species.length === 1 ) species = [ ]
		else {
			species = await Promise.all( data.species.splice(0,7).map( async ( url ) => {
				const specieResp = await fetch( url )
				const specieData = await specieResp.json()
				return specieData
			}))
		}
		
    return {
			...data,
			people,
			species,
			vehicles
		}
  } catch (error) {
    return {} as IFilmPopulated
  }
}

interface FilmPageProps {
	params: {
		id: string
	}
}
const FilmPage = async ({ params }:FilmPageProps ) => {
  const film = await getData( params.id )

  return (
		<FilmScreen film={ film } />
  )
}

export default FilmPage