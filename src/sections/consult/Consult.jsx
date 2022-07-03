import React from 'react'
import Doc from '../../images/consultdoc.png'
import './consult.css'
const Consult = () => {
  return (
    <section className='consult flex-column'>
      <div className='container-mb flex-column'>
        <h1>Consult with wellness experts</h1>
        <p>Set up health consultations with experienced doctors and therapists on our app. Simply select a service, answer a few questions, and we'll connect you to someone who is the right-fit for you. </p>
        <button className='btn-consult'>Get a consultation</button>
      </div>
      <img className='doc-img' src={Doc} alt="doc" />
    </section>
  )
}

export default Consult
