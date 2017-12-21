import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.css'

const Home = (props) => {
	console.log(props.title)
  return (
		<div>
		  <p className={ style.text }>this is the Home page</p>
		  <Link to="/about">go to about</Link>
		</div>
  )
}

export default Home
