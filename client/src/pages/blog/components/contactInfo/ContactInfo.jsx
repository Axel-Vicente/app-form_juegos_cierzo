import React from 'react';
import './contactInfo.css';
import { BsFillTelephoneFill, BsFillPeopleFill, BsFillEnvelopeFill } from "react-icons/bs";

const ContactInfo = ({ name, text }) => {

  function getIconByName(name) {
    switch (name) {
      case 'phone':
        return <BsFillTelephoneFill />

      case 'email':
        return <BsFillEnvelopeFill />;

      case 'entity':
        return <BsFillPeopleFill />;

      default:
        return null;
    }
  }
  const SelectedIcons = getIconByName(name);

  return (
    <div className="cierzo-games_info-text_container">
      {SelectedIcons}
      <span className='cierzo-games_info-text'>{text}</span>
    </div>
  )
}

export default ContactInfo