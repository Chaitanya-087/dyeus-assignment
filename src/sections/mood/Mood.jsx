import React from 'react'
import './mood.css'
import Pic1 from '../../images/pic-1.png'
import Pic2 from '../../images/pic-2.png'
import Pic3 from '../../images/pic-3.png'
import Pic4 from '../../images/pic-4.png'

const Mood = () => {
  return (
    <section className='mood'>
      <div className='container-mb flex-column'>
        <h1>Track your mood</h1>
        <p>All days and all moods are not made equal. But we can only improve what we measure. Track your mood and vitals (including skin and hair health) so you can take better care of yourself every day.</p>
        <button className='btn-track'>Track you mood on the app</button>
        <div className='img-grid'>
            <img src={Pic1} alt="pic-1" />
            <img src={Pic2} alt="pic-2" />
            <img src={Pic3} alt="pic-3" />
            <img src={Pic4} alt="pic-4" />
        </div>
      </div>
    </section>
  )
}

export default Mood
