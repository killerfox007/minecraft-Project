import React from 'react'
import { pictureForHome, pictureForHome1, pictureForHome2, pictureForHome3, pictureForHome4 } from './Global'

function Home() {
  return (
    <div>
    Welcome! This is a list of all the mobs and allows you to create your own, Mobs has the list of all hostile Mobs in minecraft.  Mob Form is where you create your own! <br></br>
    Here are a few images of Minecraft and all its beauty.<br></br>
    <img src={pictureForHome1} /> <br></br>
    <img src={pictureForHome} /> <br></br>
    <img src={pictureForHome4} /> <br></br>
    <img src={pictureForHome2} /> <br></br>
    <img src={pictureForHome3} /> <br></br>
    </div>
    
  )
}

export default Home