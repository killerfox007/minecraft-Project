import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'

function MobForm() {
  const [mobData, setMobData] = useState()
  const { addMob } = useOutletContext()
  const initalMobForm = {
    name:"",
    Difficulty:"",
    Health:"",
    Damage:"",
    Image:"",
  }

function handleChange(event){
  const newMobData = {...mobData,
  [event.target.name]: event.target.value
}
  setMobData(newMobData)
}

  return (
    
    <div>
      <h2>Did we forget a hostile?</h2>
      <h4>Add your own!</h4>
      <form onSubmit={handleSubmit}>

      </form>
    </div>
  )
}

export default MobForm