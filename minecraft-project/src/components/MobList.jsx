import React from 'react'
import { useOutletContext } from 'react-router-dom'
import MobCard from './MobCard'
import Search from './Search.jsx'
import { Grid } from '@mui/material'
function MobList() {
  const {viewedMobs} = useOutletContext()

  const mob = viewedMobs.map((singleMob,index) =>  (
    <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
      <MobCard singleMob={singleMob} />
    </Grid>
  ))
   
  return (
    <>
    <div>
    <h1>MobList</h1> 
    <Search />
    </div>
    <div>
      <Grid container spacing={2} style={{ marginTop: '20px' }} >
      {mob}
      </Grid>
      </div>
      </>
  )
}

export default MobList