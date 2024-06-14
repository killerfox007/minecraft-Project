import React, {useEffect, useState} from 'react'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import { baseUrl } from './components/Global'
function App() {
  const [mobData, setMobData] = useState([])
  const [newMobData, setNewMobData] = useState([])
  useEffect(() => {
    async function getMobData() {
      const resp = await fetch(baseUrl + 'Mobs')
      const data = await resp.json()
      
      setMobData(data)
    }
    getMobData()
  },[])
  function addMob(addedMob){
    setMobData(...mobData, addedMob)
  }

  const mob = mobData.map((singleMob, index) => 
    <div key={index}>
    <img src={singleMob.Image} />
    <p>{singleMob.name}</p>
    <p>{singleMob.Difficulty}</p>
    <p>{singleMob.Health}</p>
    <p>{singleMob.Damage}</p>
    </div>)

  return (
    <div>
      Welocme To The home page, select an option!
      <NavBar />
     
      <Outlet context={{mob , addMob}}/>
    </div>
  )
}

export default App