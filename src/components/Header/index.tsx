import React from 'react'
import './style.css'

export function Header() {
  return (
    <nav className="header">
      <div className='headers'>
        <p>Tasks</p>
        <p>About</p>
      </div>
      <img src="https://github.com/fabiovitortavares.png" alt="" />
    </nav>
  )
}