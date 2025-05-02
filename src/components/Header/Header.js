import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {

  return (
    <header className='header'>
      <Link to='/' className='link'>
        <h1>Shop Ease</h1>
      </Link>
      <Link to='/logout'>
        <button className='logout-button'>Log Out</button>
      </Link>
    </header>
  )
}

export default Header
