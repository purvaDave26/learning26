import React, { useContext } from 'react'
import { ThemeContext } from './components/ThemeContext'

export const Theme = () => {
    const theme=useContext(ThemeContext)
  return (
    <div style={{textAlign:"center"}}>
        <h1>Theme</h1>
    </div>
  )
}
