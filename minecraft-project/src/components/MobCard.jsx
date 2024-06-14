import React from 'react'

function MobCard({singleMob}) {
  return (
    <div>
        <h4>{singleMob.name}</h4>
        <p>{singleMob.Difficulty}</p>
        <p>{singleMob.Health}</p>
        <p>{singleMob.Damage}</p>
        <img src={singleMob.Image} />
    </div>
  )
}

export default MobCard