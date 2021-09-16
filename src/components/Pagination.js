import React, { useState } from 'react'

export const Pagination = ({ paginationData, category }) => {
  const { count, offset, total_count: totalCount } = paginationData
  // const [data, setData] = useState({ count, offset, totalCount, page: 1 })
  const handleButtonClickRight = () => {
    // console.log({ count: 10, offset: (count + 10), page: (page++) })
  }

  const handleButtonClickLeft = () => {
    // console.log({ count: 10, offset: (count - 9), page: (page--) })
  }

  return (
    <div className='pagination'>
      <button className='fa fa-chevron-left pagination__button' onClick={handleButtonClickLeft} />
      {
        paginationData && <p>Página 1 de {Math.ceil(totalCount / count)}</p>
      }
      <button className='fa fa-chevron-right pagination__button' onClick={handleButtonClickRight} />
    </div>
  )
}
