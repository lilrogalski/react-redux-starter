import * as React from 'react'
import Header from '../Header'
import style from './style.css'

interface Props {
  children: React.ReactElement[]
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <div className={style.container}>{children}</div>
    </>
  )
}
