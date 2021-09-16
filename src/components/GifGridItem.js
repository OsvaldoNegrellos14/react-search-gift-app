import React from 'react'

export const GifGridItem = ({ id, title, url }) => {
  // console.log(id, title, url)
  return (
    <div className='card animate__animated animate__fadeIn'>
      <img src={url} alt={title} />
      <p>{title}</p>
      {/* <a href={url} download={title} target='_blank' rel='noreferrer noopener'>
        <button className='fa fa-download' />
      </a> */}
    </div>
  )
}
