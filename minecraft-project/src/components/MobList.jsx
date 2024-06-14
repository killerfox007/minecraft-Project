import React from 'react'
import { useOutletContext } from 'react-router-dom'

function MobList() {
  const {mob} = useOutletContext()
  // need to incorp mob card or replace it
  return (
    <div>
      <h1>MobList</h1> 
        {mob} 
      </div>
  )
}

export default MobList