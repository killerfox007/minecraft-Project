import React, {useEffect, useState} from 'react'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import { baseUrl } from './components/Global'
function App() {
  const [mobData, setMobData] = useState([])
  const [searching, setSearching] = useState("")
 
  useEffect(() => {
    async function getMobData() {
      const resp = await fetch(baseUrl + 'Mobs')
      const data = await resp.json()
      
      setMobData(data)
    }
    getMobData()
  },[])
  function addMob(addedMob){
    setMobData([...mobData, addedMob])
  }

  const viewedMobs = mobData.filter((mob) => mob && mob.name && mob.name.toLowerCase().includes(searching.toLowerCase()));
      
  return (
    <div>
      Welcome To The home page, select an option!
      <NavBar />
      <Outlet context={{addMob, viewedMobs, searching, setSearching}}/>
    </div>
  )
}

export default App