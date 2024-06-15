import React from 'react'
import { useOutletContext } from 'react-router-dom'
function Search() {
const { searching, setSearching } = useOutletContext()
  function handleChange(event){
    setSearching(event.target.value)
  }

  return (
    <div>
      <label htmlFor="search">Find A Specific Mob</label>
      <input type="text"
      name='search'
      id="search"
      placeholder='Type here to search'
      value={searching}
      onChange={handleChange}
      />
    </div>
  )
}

export default Search