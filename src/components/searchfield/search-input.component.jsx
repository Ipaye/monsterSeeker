import React from 'react'
import './search-input.style.css'

export const SearchInput = ({ placeholder, handleChange }) => {
  return <input type="search" placeholder={placeholder} onChange={handleChange} className="search" />
}
