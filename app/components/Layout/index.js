import React from 'react'
import Header from '../Header'
import './style.css'

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  )
}
