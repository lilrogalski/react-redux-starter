import React from 'react'
import { Link } from 'react-router-dom'
import { Text } from '../styles/global'

const Home = () => (
  <div>
    <Text>this is the Home page</Text>
    <Link to="/about">go to about</Link>
  </div>
)

export default Home
