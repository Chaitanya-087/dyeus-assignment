import React from 'react'
import './product.css'
import Karolina from '../../images/bg-karolina-grabowska.png'
const Product = () => {
  return (
    <section className='product'>
      <div className='container-mb custom-styles--product'>
        <h3 style={{ fontWeight: 'bold' }}>Liberate your everyday wellness</h3>
        <h1 style={{ fontSize: '30px' }}>Shop our self-care products</h1>
        <p>Gentle formulations thoughtfully engineered by specialist researchers and doctors to simplify your self-care and get results fast. And, we always list our ingredients - so what you see is what you get.</p>
        <button className='btn-upgrade'>
          Upgrade your self-care
        </button>
        <span className='text-center' style={{ color: '#000', fontWeight: '600' }}>#NoNasties, we promise</span>
      </div>
      <img className='karolina-img' src={Karolina} alt="" />
    </section>
  )
}

export default Product
