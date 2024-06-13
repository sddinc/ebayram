import React, { useContext } from 'react'
import {themeModel} from '../App'



export default function Context() {
  return (
    <div>Context theme 
        <p>{useContext(myTheme)}</p>


    </div>
  )
}
