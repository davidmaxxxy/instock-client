import React from 'react'
import "./Header.scss"
import logoMobile from "../../assets/Logo/InStock-Logo_1x.png";

const Header = () => {
  return (
    <header className='header'>
      <img className='header-logo__img' src = {logoMobile}/>    
      <nav className='header-nav'>
        <h3 className='header-nav__warehouses'>Warehouses</h3>
        <h3 className='header-nav__inventory'>Inventory</h3>
      </nav>
    </header>
  )
}

export default Header