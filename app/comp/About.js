import React from 'react'
import { Link } from 'react-router-dom'
import { Text } from '../styles/global'

const About = () => (
  <div>
    <Text>this is the About page</Text>
    <Link to="/">go to home</Link>
  </div>
)

export default About
