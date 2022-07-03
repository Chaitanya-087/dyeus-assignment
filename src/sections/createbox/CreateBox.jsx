import React from 'react'
import './createbox.css'
import Product from '../../images/product.png'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const CreateBox = () => {
  return (
    <section id='product' className='createbox'>
      <div className='container-mb flex-column'>
        <h1>Get your personal period box</h1>
        <img className='prod-img' src={Product} alt="prod" />
        <p>Tailor your monthly box of organic period products without the organic price tag (no pink taxing here). Get it delivered to your doorstep in sustainable packaging and track your subscription on our app.</p>
        <button className='btn-create'>
            Create your box on the app  
            <KeyboardArrowRightIcon />
        </button>
      </div>
    </section>
  )
}

export default CreateBox
