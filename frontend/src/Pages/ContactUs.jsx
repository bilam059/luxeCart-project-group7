import React from 'react'
import './ContactUs.css';
import './CSS/ContactUs.css'

const ContactUs = () => {
  return (
    <div className="about-container">
      
      {/* Contact Section */}
      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>Feel free to get in touch with us!</p>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4"></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
