import React, { useState } from 'react';
import NavBarReg from '../components/NavBarReg';
import './contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Your message has been sent!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className='contact-wrapper'>
      <NavBarReg />
      <div className='contact-wrap'>
        <form onSubmit={handleSubmit}>
          <div className='contact-top'>
            <h2>Explore your solutions<br />with <span className='cin-highlight'>cinnamon</span></h2>
          </div>
          <div className='input-wrapper'>
            <label>
              <input type="text" name="name" placeholder='Full name' value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              <input type="email" name="email" placeholder='Email address' value={formData.email} onChange={handleChange} required />
            </label>
          </div>
          <label>
            <textarea name="message" placeholder='I own a marketing company and i am looking for a cell phone plan that could help my company expand.' value={formData.message} onChange={handleChange} required />
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;