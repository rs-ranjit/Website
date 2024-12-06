import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg'
import "../styles/Contact.css";

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' 
        style={{backgroundImage: `url(${PizzaLeft})`}}></div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id="contact-form" method="POST">
                <label htmlFor='name'>Full Name:</label>
                <input name='name' placeholder='Enter full name' type="text" />
                <label htmlFor='email'>Email:</label>
                <input name='email' type="email" placeholder='Enter Email..'/>
                <label htmlFor='message'>Message:</label>
                <textarea rows="6" name='message' placeholder='Enter message....' required></textarea>
                <button type='submit'> Send message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact