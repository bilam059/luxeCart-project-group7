import React from 'react';
import './CSS/ContactUs.css';

const ContactUs = () => {
  return (
    <div className="container">
      <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28692.176425522217!2d-80.50849978477587!3d43.45164214373145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf39d59b8bafd%3A0x26302079e52e5d3e!2sKitchener%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sin!4v1649475346779!5m2!1sen!2sin" width="100%" height="650px" frameborder="0" style={{ border: 0 }} allowfullscreen></iframe>
      </div>
      <div className="contact-form">
        <h1 className="title">Contact Us</h1>
        <h2 className="subtitle">We are here to assist you.</h2>
        <form action="">
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="e-mail" placeholder="Your E-mail Adress" />
          <input type="tel" name="phone" placeholder="Your Phone Number" />
          <textarea name="text" id="" rows="8" placeholder="Your Message"></textarea>
          <button className="btn-send">Get a Call Back</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
