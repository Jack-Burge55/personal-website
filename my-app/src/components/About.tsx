import React from 'react'
import JackLucy from "../assets/Jack&Lucy.jpg"
const About = () => {
    return(
        <>
        <h1 className='title'>About Me</h1>
        <p className='block'>Thanks so much for checking out my web page! I made this using React, you can find the repository for this page <a href="https://github.com/Jack-Burge55/personal-website" target="_blank" rel="noreferrer" className='textLink'>here</a>. </p>
        <h2 className='title is-3'>Personal Information</h2>
        <p className='block'>My name's Jack Burgess, and I'm a software developer based close to Manchester, UK. I have worked as a front-end developer for the previous three years but after making the big decision to leave my company I am spending more time learning in the hopes of moving to a full-stack role in the future. I have lots of interests, including travel, board games, volunteering and reading. I also love movies, walks with my labrador and spending time with friends. I have passively learnt Spanish over the last 4 years and would love to one day live and work abroad in a sunny city somewhere. You can email me at jack.burgess412@gmail.com if you'd like, I'd love to hear from you :)</p>
        <img className="photo" src={JackLucy} alt="Me smiling with my black labrador Lucy" title='Jack & Lucy'/>
        </>
    )
}
export default About;