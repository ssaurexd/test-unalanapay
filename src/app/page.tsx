import { FilmsList } from '@/components'
import { baseAPIURL } from '@/config'
import { IFilm, IHomePageSearchParams } from '@/interfaces'
/*  */


/** 
 * @param {IHomePageSearchParams} 
 * @returns {Promise<IFilm[]>}
 * @description Fetch films from API with limit param in 20 by default
*/
const getData = async ({ limit = '20' }: IHomePageSearchParams ): Promise<IFilm[]> => {
  try {
    const resp = await fetch(`${ baseAPIURL }/films?limit=${ limit }`, { cache: 'no-store' })
    const data = await resp.json() as IFilm[]

    return data
  } catch (error) {
    return []
  }
}

interface HomePageProps {
  searchParams: IHomePageSearchParams
}
const HomePage = async ({ searchParams }:HomePageProps ) => {
  const films = await getData( searchParams )

  return (
    <FilmsList films={ films } />
  )
}

export default HomePage