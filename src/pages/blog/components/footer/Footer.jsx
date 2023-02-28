import React from 'react';
import './footer.css';
import { RRSSIcon, Copyright, ContactInfo } from "../../components";
import cierzoPetChat from '../../../../assets/mascotaCierzoChat.png'

const iconNames = ["Instagram", "Youtube", "Facebook"];
const infoElements = ["phone", "email", "entity"];
const infoElementsText = ["+34 669 757 775 (David)", "juegoscierzo@cierzolgtb.org", "AD Cierzo proLGTB+ Zaragoza"]

const Footer = () => {
  return (
    <footer>
      <div className='wrapper'>
        <img src={cierzoPetChat} alt='cierzo pet dialogue' className='cierzoPetChat' />
        <div className='cierzo-games_links'>
          <h4 className='cierzo-games_titles'>Enlaces</h4>
          <ul>
            <li><a href='#'>Inicio</a></li>
            <li><a href='#'>Inicio</a></li>
            <li><a href='#'>Inicio</a></li>
            <li><a href='#'>Inicio</a></li>
          </ul>
        </div>
        <div className='cierzo-games_rrss'>
          <h4 className='cierzo-games_titles'>redes sociales</h4>
          <div className='cierzo-games_rrss-icons'>
            {iconNames.map(iconName => (
              <RRSSIcon name={iconName} />
            ))}
          </div>
        </div>
      </div>
      <div className='contact_wrapper'>
        {infoElements.map((iconName, index) => (
          <ContactInfo name={iconName} text={infoElementsText[index]} />
        ))}
      </div>
      <Copyright />
    </footer>
  )
}

export default Footer