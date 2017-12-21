import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.css'

const About = (props) => {
  console.log(props.title)
  return (
    <div>
      <p className={ style.text }>this is the About page</p>
      <Link to="/">go to home</Link>
    </div>
  )
}

export default About
