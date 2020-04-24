import * as React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import style from './style.css'

function Header() {
  return (
    <div className={style.header}>
      <div className={style.inner}>
        <div className={style.title}>
          <h5>React Redux Starter</h5>
        </div>
        <div className={style.right}>
          <NavLink
            exact
            activeClassName={style.active}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            exact
            activeClassName={style.active}
            to="/about"
          >
            About
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default connect()(Header)
