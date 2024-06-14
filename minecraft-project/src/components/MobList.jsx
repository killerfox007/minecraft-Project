import React from 'react'
import { useOutletContext } from 'react-router-dom'
import MobCard from './MobCard'
function MobList() {
  const {mobData} = useOutletContext()
  console.log(mobData)
  const mob = mobData.map((singleMob,index) => {
   return <MobCard key={index} singleMob={singleMob} />
  })
   if (mobData.length < 1){
    return (<h1>Loading...</h1>)
   }
  return (
    <div>
      <h1>MobList</h1> 
      {mob}
      </div>
  )
}

export default MobList