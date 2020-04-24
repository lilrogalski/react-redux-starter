import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { subtractCount } from 'lib/actions/count'
import * as style from 'lib/css/buttons.css'

interface Props {
  dispatch: Dispatch
}

function SubtractButton({ dispatch }: Props) {
  const handleClick = () => dispatch(subtractCount())
  return (
    <button className={style.btn} onClick={handleClick}>
      Subtract Count
    </button>
  )
}

export default connect()(SubtractButton)
