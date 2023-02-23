import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css';
import logo from '../../assets/exampleLogo.jfif'

const Menu = () => (
  <>
    <p><a href='#home'>home</a></p>
    <p><a href='#home'>home</a></p>
    <p><a href='#home'>home</a></p>
    <p><a href='#home'>home</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='cierzo-games__navbar'>
      <div className='cierzo-games__navbar-links'>
        <div className='cierzo-games__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='cierzo-games__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='cierzo-games__navbar-sign'>
        <button type='button'>iniciar sesion</button>
      </div>
      <div className='cierzo-games__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='cierzo-games__navbar-menu_container scale-up-center'>
            <div className='cierzo-games__navbar-menu_container-links'>
              <Menu />
            </div>
              <div className='cierzo-games__navbar-menu_container-links-sign'>
                <button type='button'>iniciar sesion</button>
              </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar