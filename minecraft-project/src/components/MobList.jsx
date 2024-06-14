import React from 'react'
import { useOutletContext } from 'react-router-dom'
import MobCard from './MobCard'
import Search from './Search.jsx'
function MobList() {
  const {searching, setSearching} = useOutletContext()
  const {viewedMobs} = useOutletContext()
  const mob = viewedMobs.map((singleMob,index) => {
   return <MobCard key={index} singleMob={singleMob} />
  })
   
  return (
    <div>
      <h1>MobList</h1> 
      <Search searching={searching} setSearching={setSearching}/>
      {mob}
      </div>
  )
}

export default MobList