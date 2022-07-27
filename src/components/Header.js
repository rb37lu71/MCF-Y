import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className='header-nav'>
        <Link to='/'>Overview</Link>
        <Link to='/pricing'>Pricing</Link>
        <Link to='/mcfy'>MCF-Y</Link>
        <Link to='/contact'>Contact</Link>
    </header>
  )
}

export default Header