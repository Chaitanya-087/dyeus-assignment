import React from 'react'
import './about.css'
import Eco from '../../images/eco.png'
import Spark from '../../images/sparkle.png'
import Phone from '../../images/phone.png'
const About = () => {
  return (
    <section id='about' className='about'>
        <div className='container-mb custom-styles--about'>
            <div className='abt-row-1'>
                <h1 className='about--title text-center'>
                    About Diana
                </h1>
                <p className='about--tag text-center'>A platform that looks out for you</p>
                <p className='about--desc'>Daina empowers you to understand how your body works so you can look and feel your best</p>
            </div>
            <hr />
            <div id='mission' className='abt-row-2'>
                <div className='details'>
                    <p style={{fontWeight:'bold' ,marginBottom:'20px'}} className='text-center'>Our philosophy</p>
                    <h1 style={{marginBottom:'20px'}} className='text-center'>Sustainable wellness is a big-picture inside out approach</h1>
                    <p style={{lineHeight:'1.5',fontWeight:'bold'}} className='text-center'>Diana is on a mission to create thoughtful, science-backed solutions for women who want to make informed decisions about their health and wellness</p>
                </div>
                <p style={{fontWeight:'bold'}} className='text-center'>That's why we've created an integrated ecosystem of:</p>
                <div className='about--eco'>
                    <img src={Eco} alt="eco" />
                    <p className='text-center'>Consciousy formulated products that deliver fell-good results fast</p>
                </div>
                <div className='about--productivity'>
                    <img src={Spark} alt="sparkle" />
                    <p className='text-center'>In-app mood and period tracking options that help you cultivate a deeper connectin with your mind and body</p>
                </div>
                <div className='about--track'>
                    <img src={Phone} alt="phone" />
                    <p className='text-center'>In-app consultation portals that connect you with ompassionate wellness experts</p>
                </div>
            </div>
            <div className='abt-row-3'>
                <p className='text-center'>
                    Consider us your nerdy ally who spends their time perfecting products that work because they want you to feel your best everyday
                </p>
            </div>
        </div>
    </section>
  )
}

export default About
