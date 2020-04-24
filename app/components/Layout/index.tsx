import * as React from 'react'
import Header from '../Header'
import './style.css'

interface Props {
  children: React.ReactElement[]
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  )
}
