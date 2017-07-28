import React from 'react'
import { Link } from 'react-router'
import style from './style.css'

const About = () => (
  <div>
    <p className={ style.text }>this is the About page</p>
    <Link to="/">go to home</Link>
  </div>
)

export default About



