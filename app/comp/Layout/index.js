import React from 'react'
import style from './style.css'

const Layout = (props) => (
  <div>
    <div className={style.header}>Header</div>
    <div className={style.content}>{ props.children }</div>
    <div className={style.footer}>Footer</div>
  </div>
)

export default Layout
