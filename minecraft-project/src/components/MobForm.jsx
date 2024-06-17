import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { baseUrl, pictureForForm, pictureForForm1, pictureForForm2 } from './Global'
const initalMobForm = {
  name:"",
  Difficulty:0,
  Health:0,
  Damage:0,
  Image:"",
}
function MobForm() {
  const [mobData, setMobData] = useState(initalMobForm)
  const { addMob } = useOutletContext()
  

function handleChange(event){
  const newMobData = {...mobData,
  [event.target.name]: event.target.value
}
  setMobData(newMobData)
}
function handleSubmit(event){
  event.preventDefault()
fetch(baseUrl + 'Mobs', { 
  method:"POST",
  headers:{
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body:JSON.stringify({
    name: mobData.name,
    Difficulty:parseInt(mobData.Difficulty),
    Health:parseInt(mobData.Health),
    Damage:parseInt(mobData.Damage),
    Image: mobData.Image,
  })
})
.then(resp => resp.json())
.then(data => addMob(data))
.then(setMobData(initalMobForm))
}

  return (
    
    <div>
      <h2>Did we forget a hostile?</h2>
      <h4>Add your own!</h4>
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" value={mobData.name} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="name">Difficulty:</label>
        <input type="number" name="Difficulty" id="Difficulty" value={mobData.Difficulty} onChange={handleChange} min="1" max="10" />
      </div>
      <div>
        <label htmlFor="name">Health:</label>
        <input type="number" name="Health" id="Health" value={mobData.Health} onChange={handleChange} min="1" max="1000" />
      </div>
      <div>
        <label htmlFor="name">Damage:</label>
        <input type="number" name="Damage" id="Damage" value={mobData.Damage} onChange={handleChange} min="1" max="10" />
      </div>
      <div>
        <label htmlFor="name">Image:</label>
        <input type="text" name="Image" id="Image" value={mobData.Image} onChange={handleChange}/>
      </div>
      <input type="submit" value="Create Your Own Mob!"/>
      </form>
      <img src = {pictureForForm} />
      <img src={pictureForForm1} />
     <img src ={pictureForForm2} />
    </div>
  )
}

export default MobForm