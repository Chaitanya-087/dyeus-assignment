import React from 'react'
import Calendar from '../../images/calendarbg.png'
import './track.css'
const Track = () => {
  return (
    <section className='track'>
      <div className='container-mb custom-style--track'>
        <h1>Track your period</h1>
        <p>Stay in the know with reliable AI-based and science-backed period, ovulation, and PMS predictions. The intuitive design makes tracking your cycle effortless and helps you stay on top of your monthly data.</p>
        <button className='btn-period'>Track your period on the app</button>
      </div>
      <img className="cal-img" src={Calendar} alt="cal" />
    </section>
  )
}
export default Track
