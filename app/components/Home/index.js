// @flow
import React from 'react'
import { connect } from 'react-redux'
import AddButton from '../Buttons/AddButton'
import SubtractButton from '../Buttons/SubtractButton'
import style from './style.css'

const mapStateToProps = state => ({
  count: state.count,
})

type Props = {
  count: number,
}

function Home({ count }: Props) {
  return (
    <div className={style.home}>
      <p>Home</p>
      <p>Count: {count}</p>
      <AddButton />
      <SubtractButton />
    </div>
  )
}

export default connect(mapStateToProps)(Home)
