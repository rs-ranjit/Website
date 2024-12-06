import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${MultiplePizzas})`}}></div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>Proident do labore nostrud ad amet sint tempor dolor veniam magna.
                Sit veniam esse qui ullamco aliquip deserunt consectetur deserunt 
                officia exercitation ad Lorem consectetur. Culpa incididunt eiusmod 
                sunt irure veniam. Nostrud reprehenderit commodo cupidatat in cupidatat 
                sunt. Est veniam tempor tempor nostrud ut dolor et occaecat. 
                Veniam quis fugiat ex aute occaecat dolore veniam id tempor veniam. 
                Excepteur et proident nostrud voluptate velit proident exercitation 
                cupidatat non nisi officia labore consectetur nisi.</p>
        </div>
    </div>
  )
}

export default About;