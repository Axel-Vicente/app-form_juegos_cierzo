import React from 'react';
import './footer.css';
import { RRSSIcon, Copyright, ContactInfo, ContactForm } from "../../components";
import cierzoPetChat from '../../../../assets/mascotaCierzoChat.png';
import logoMinis from '../../../../assets/ministerioIgualdadLogo.jpg';
import logo40th from '../../../../assets/40thlogo.png';
import logoEquality from '../../../../assets/logopactoestadocolor.png';
import logoAragonGovernment from '../../../../assets/gobiernoAragonLogo.png';

const iconNames = ["Instagram", "Youtube", "Facebook"];
const infoElements = ["phone", "email", "entity"];
const infoElementsText = ["+34 669 757 775 (David)", "juegoscierzo@cierzolgtb.org", "AD Cierzo proLGTB+ Zaragoza"]

const Footer = () => {
  return (
    <footer>
      <div className='cierzo-games_container-wrapper'>
        <div className='wrapper'>
          <img src={cierzoPetChat} alt='cierzo pet dialogue' className='cierzoPetChat' />
          <div className='cierzo-games_links'>
            <h4 className='cierzo-games_titles'>Enlaces</h4>
            <ul>
              <li key={1}><a href='#'>Inicio</a></li>
              <li key={2}><a href='#'>Inicio</a></li>
              <li key={3}><a href='#'>Inicio</a></li>
              <li key={4}><a href='#'>Inicio</a></li>
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
          <div className='contact_wrapper'>
            {infoElements.map((iconName, index) => (
              <ContactInfo name={iconName} text={infoElementsText[index]} />
            ))}
          </div>
          <div className='cierzo-games_logos'>
            <img src={logoMinis} alt="logo ministerio de igualdad" className='cierzo-games_logo_minis' />
            <img src={logo40th} alt="logo 40 aniversario" className='cierzo-games_logo_40th' />
            <img src={logoEquality} alt="logo ministerio igualdad" className='cierzo-games_logo_equality' />
            <img src={logoAragonGovernment} alt="logo gobierno Aragón" className='cierzo-games_logo_ga' />
          </div>
        </div>
        <div className='cierzo-games_contact'>
          <h4 className='cierzo-games_titles'>Contacto rápido</h4>
          <ContactForm />
        </div>
      </div>
      <Copyright />
    </footer>
  )
}

export default Footer