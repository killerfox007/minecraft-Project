import React, {useEffect, useState} from 'react'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import { baseUrl } from './components/Global'
function App() {
  const [mobData, setMobData] = useState()
  useEffect(() => {
    async function getMobData() {
      const resp = await fetch(baseUrl + 'Mobs')
      const data = await resp.json()
      console.log(data)
      setMobData(data)
    }
    getMobData()
    console.log(mobData)
  },[])
  return (
    <div>
    <NavBar />
    
    <Outlet />
    </div>
  )
}

export default App