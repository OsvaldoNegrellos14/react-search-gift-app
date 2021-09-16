import React, { useState } from 'react'
import { PropTypes } from 'prop-types'

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim().length > 2) {
      setCategories([inputValue])
      setInputValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='home__form'>
      <input
        placeholder='memes'
        type='text'
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit} className='home__form-button'>Search</button>
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
