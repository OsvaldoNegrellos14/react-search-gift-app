import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([''])

  return (
    <>
      <div className='home__title'>
        <h1>Bucador de Gifs</h1>
      </div>
      <div className='home__subtitle'>
        <p>Miles y miles de GIFS traidos por GIPHY</p>
      </div>
      <AddCategory setCategories={setCategories} />

      <ul className='home__container-gifs'>
        {
          categories.map((category) => (
            <GifGrid
              key={category}
              category={category}
            />
          ))
        }
      </ul>
    </>
  )
}
