import Socialcontact from 'components/common/social-contact';
import React from 'react';
import './about.css';


function About() {
    return (
        <div className='about'>
            <div className='about-top'>
                <div className='about-info'>
                    Hii everyone, I am
                    <br/><span className="info-name">Nikita Jadhav.</span>
                    <br/>I am third year student at SVPM's college of engineering pursuing B.E in computer engineering. I like to code, read, innovate and experiment. I am a enthusiastic and social person who loves to take up new challenges and learn new skills.
                    
                    <br/>📧:NIKITAJADHAV4124@GMAIL.COM
                    <br/> 📞:+91 9022829019

                </div>
                <div className='about-photo'>
                    <img src="/images/coding1.jpg" alt="" className="picture" />
                    

                </div>

            </div>
                

            
                <Socialcontact/>
            
        </div>
    );
}

export default About

