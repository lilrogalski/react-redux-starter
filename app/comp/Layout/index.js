import React from 'react'
import style from './style.css'
import cn from 'classnames'

const Layout = (props) => (
  <div>
    <div className={ cn(style.header, style.flex_center) }>Welcome Header</div>
    <div className={ cn(style.content, style.flex_center) }>
      { props.children }
    </div>
    <div className={ cn(style.footer, style.flex_center) }>Footer</div>
  </div>
)

export default Layout



