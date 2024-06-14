import React from 'react'

function Search({searching, setSearching}) {

  function handleChange(event){
    setSearching(event.target.value)
  }

  return (
    <div>
      <label htmlFor="search">Find A Specific Mob</label>
      <input type="text"
      id="search"
      placeholder='Type here to search'
      value={searching}
      onChange={handleChange}
      />
    </div>
  )
}

export default Search