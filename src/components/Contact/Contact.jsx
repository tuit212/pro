import React from 'react';
import { Link } from 'react-router-dom'
import { MdOutlineMail } from 'react-icons/md'
import { BsInstagram , BsTelegram} from 'react-icons/bs'
import './Contact.scss'

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='icons'/>
            <h4>Email</h4>
            <h5>asadbekanvarov9808@gmail.com</h5>
            <Link to='mailto:asadbekanvarov9808@gmail.com' className='link'>
              send a message
            </Link>
          </article>

          <article className="contact__option">
            <BsInstagram className='icons'/>
            <h4>Instgaram</h4>
            <h5>asadbek.2305</h5>
            <Link to='https://www.instagram.com/asadbek.2305/' className='link'>
              send a message
            </Link>
          </article>

          <article className="contact__option">
            <BsTelegram className='icons'/>
            <h4>Teligram</h4>
            <h5>tuit_212</h5>
            <Link to='https://t.me/tuit_212' className='link'>
              send a message
            </Link>
          </article>
        </div>

        <form action="" onSubmit={sendEmail}>
          <input
             type="text" 
             name='name' 
             placeholder='Your Full Name' 
             required
          />
          <input
             type="email"  
             email='email'  
             placeholder='Your email address'  
             required
          />
          <textarea 
            name="message" 
            rows="7"
            placeholder='Your message' required>
          </textarea>
          <button type='submit' className='btn btn-primaty' >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact