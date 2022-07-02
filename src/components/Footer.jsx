import React from 'react'
import './footer.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Fb from '../images/fb.png'
import Tweet from '../images/tweet.png'
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container-mb custom-style--footer">
        <div className='social-media'>
          <img src={Fb} alt="" />
          <img src={Tweet} alt="" />
        </div>
        <ul className='footer-nav'>
          <li><a href="#product">Products <KeyboardArrowRightIcon /></a></li>
          <li><a href="#science">Our Science <KeyboardArrowRightIcon /></a></li>
          <li><a href="#mission">Vision & Mission<KeyboardArrowRightIcon /></a></li>
          <li><a href="#about">About Us <KeyboardArrowRightIcon /></a></li>
        </ul>
        <hr className='footer-divider' />
        <span style={{ fontSize: '14px' }}>Subscribe to our Newsletter</span>
        <form className='footer-form' onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder='Enter your Email...' />
          <button className='btn-activate'>
            <MailOutlineIcon />
            Activate
          </button>
        </form>
      </div>
    </div>
  )
}

export default Footer
