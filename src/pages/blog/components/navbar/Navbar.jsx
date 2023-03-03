import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { VscAccount } from "react-icons/vsc";
import './navbar.css';
import logo from '../../../../assets/exampleLogo.jfif'

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const handleLinkClick = (event, linkName) => {
    event.preventDefault();
    setActiveLink(linkName);
    window.location.href = event.target.href;
  };

  return (
    <div className='cierzo-games__navbar'>
      <div className='cierzo-games__navbar-links'>
        <div className='cierzo-games__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='cierzo-games__navbar-links_container'>
          <p className={activeLink === 'Home' ? 'active' : ''}><a href='#home' onClick={(event) => handleLinkClick(event, 'Home')}>home</a></p>
          <p className={activeLink === 'Home2' ? 'active' : ''}><a href='#home2' onClick={(event) => handleLinkClick(event, 'Home2')}>home2</a></p>
          <p className={activeLink === 'Home3' ? 'active' : ''}><a href='#home3' onClick={(event) => handleLinkClick(event, 'Home3')}>home3</a></p>
          <p className={activeLink === 'Home4' ? 'active' : ''}><a href='#home4' onClick={(event) => handleLinkClick(event, 'Home4')}>home4</a></p>
        </div>
      </div>
      <div className='cierzo-games__navbar-sign'>
        <Link to={"/app-form_juegos_cierzo/login"}>
          <button type='button' href='../../login/login.js'><VscAccount color="#fff" size={20} /> login</button>
        </Link>
      </div>
      <div className='cierzo-games__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="cierzo-games__navbar-menu_container">
            <div className='cierzo-games__navbar-menu_container-links'>
              <p className={activeLink === 'Home' ? 'active' : ''}><a href='#home' onClick={(event) => handleLinkClick(event, 'Home')}>home</a></p>
              <p className={activeLink === 'Home2' ? 'active' : ''}><a href='#home2' onClick={(event) => handleLinkClick(event, 'Home2')}>home2</a></p>
              <p className={activeLink === 'Home3' ? 'active' : ''}><a href='#home3' onClick={(event) => handleLinkClick(event, 'Home3')}>home3</a></p>
              <p className={activeLink === 'Home4' ? 'active' : ''}><a href='#home4' onClick={(event) => handleLinkClick(event, 'Home4')}>home4</a></p>
            </div>
            <div className='cierzo-games__navbar-menu_container-links-sign'>
              <button type='button'><VscAccount color="#fff" size={20} /> login</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar