import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <Link to='/'>Homme</Link>
      <Link to='/about'>About</Link>
      <Link to='/products'>Proucts</Link>
    </nav>
  )
}
