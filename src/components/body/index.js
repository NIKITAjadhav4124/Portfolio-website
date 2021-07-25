import React from 'react'
import About from './about'
import Achievements from './achiev'
import './body.css'
import Certificates from './certificate'
import Contact from './contact'
import Projects from './projects'
import Skills from './skills'

function Body() {
    return (
        <div className="body">
            <section id='about'>
                <About/>
            </section>
            <section id='projects'>
                <Projects/>

            </section>
            <section id='skills'>
                <Skills/>

            </section>
            <section id='certificates'>
                <Certificates/>

            </section>
            <section id='achievements'>
                <Achievements/>

            </section>
            <section id='contact'>
                <Contact/>

            </section>
            
        </div>
    )
}

export default Body
