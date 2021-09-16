import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'
// import { Pagination } from './Pagination'

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category)

  return (
    <>
      <p className='home__search-text animate__animated animate__fadeInDown'>Resultados de la búsqueda: <b>{category || 'Tendencias'}</b></p>
      {/* {loading && <p className='animate__animated animate__flash'>Loading</p>} */}
      {loading && <div className='home__loader'><div className='lds-ripple'><div /><div /></div></div>}
      <div className='card-grid'>
        {
          images.map((img) => (
            <GifGridItem
              key={img.id}
              {...img}
            />
          ))
        }
      </div>
      {/* {pagination && <Pagination paginationData={pagination} category={category} />} */}
    </>
  )
}
