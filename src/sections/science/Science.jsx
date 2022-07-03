import React from 'react'
import './science.css'
const Science = () => {
  return (
    <section id='science' className='product'>
      <div className='container-mb flex-column'>
        <h3 style={{ fontWeight: 'bold' }}>Liberate your everyday wellness</h3>
        <h1 style={{ fontSize: '30px' }}>Shop our self-care products</h1>
        <p>Gentle formulations thoughtfully engineered by specialist researchers and doctors to simplify your self-care and get results fast. And, we always list our ingredients - so what you see is what you get.</p>
        <button className='btn-upgrade'>
          Upgrade your self-care
        </button>
        <span className='text-center' style={{ color: '#000', fontWeight: '600' }}>#NoNasties, we promise</span>
      </div>
    </section>
  )
}

export default Science
