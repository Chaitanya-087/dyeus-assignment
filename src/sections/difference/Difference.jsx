import React from 'react'
import './difference.css'

const Difference = () => {
  return (
    <section className='difference'>
      <div className='container-mb custom-styles--difference'>
        <h2 style={{fontWeight:'bold'}}>
            What makes us different?
        </h2>
        <h1 style={{fontSize:'30px'}}>
            Reimagining and rewiring self-care
        </h1>
        <p>You care about conscious consumption and so do we</p>
        <p>When it comes to your health, “good enough” is not good enough. We're here to flip the script on that narrative because you deserve the best</p>
        <p>We collaborate with researchers and doctors to</p>
        <ul className='wedo--list'>
            <li>Help you get granular about your health and self-care with personalized insights, and</li>
            <li>Equip you with simple, sustainable products that get the job done</li>
        </ul>
        <p>No to-the-moon-and-back claims in this neck of the woods.</p>
        <p>We're just solving real problems for real people here.</p>
      </div>
    </section>
  )
}

export default Difference

