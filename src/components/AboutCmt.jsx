import React from 'react'
import "./AboutCmt.css"
import { Link } from 'react-router-dom'
const AboutCmt = () => {
  return (
    <div className='about'>
        <div className='left'>
           <h1>Who Am I?</h1>
           <p>A developer with a solid foundation in both frontend and backend, proficient in the MERN stack and Java OOP concepts, capable of building efficient applications.</p>
           <Link to="/contact">
            <button className='btn'>Contact</button>
           </Link>
        </div>
    </div>
  )
}

export default AboutCmt