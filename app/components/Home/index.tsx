import React from 'react'
import Redux from '../Redux'
import Hooks from '../Hooks'
import style from './style.css'

export default function Home() {
  return (
    <div className={style.home}>
      <Redux />
      <Hooks />
    </div>
  )
}
