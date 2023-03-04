import React from 'react';
import emailjs from 'emailjs-com';
import './contactForm.css';
import { useState } from 'react';
import { BiMailSend } from "react-icons/bi";

function sendEmail(event) {
  event.preventDefault();
  
  emailjs.sendForm('service_8nqoxlu', 'template_zgxeb7e', event.target, 'rk2vrXpYv1GYngku0').then(res =>{
    alert("Se ha enviado correctamente");
    console.log(res)
  })
}

const ContactForm = () => {
  const [showDefaultOption, setShowDefaultOption] = useState(true);
  const optionDefault = "-- Asunto --";
  const optionsSelect = ["ejemplo", "ejemplo2", "ejemplo3"];

  const handleSelectChange = () => {
    setShowDefaultOption(false);
  };

  return (
    <div className='cierzo-games_contact-form-container'>
      <form method='post' onSubmit={sendEmail}>
        <div>
          <input type="text" className='cierzo-games_contact-form-input' id='name' name='name' placeholder='Nombre' tabIndex="1" pattern="^[a-zA-Z\s]+$" required />
        </div>
        <div>
          <input type="email" className='cierzo-games_contact-form-input' id='email' name='email' placeholder='Email' tabIndex="2" autoComplete='email' pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" required />
        </div>
        <div>
          <select className='cierzo-games_contact-form-select' tabIndex="3" id='subject' name='subject' onChange={handleSelectChange} required>
            {showDefaultOption && <option name={optionDefault} key={0} value={optionDefault}>{optionDefault}</option>}
            {optionsSelect.map((option, index) => (
              <option name={option} key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <textarea className='cierzo-games_contact-form-textarea' tabIndex="4" id="message" name="message" placeholder="Porfavor escriba su mensaje aquí:" required />
        </div>
        <div>
          <button className='cierzo-games_contact-form-button' name="submit" type="submit" id="submit">SEND<BiMailSend /></button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm