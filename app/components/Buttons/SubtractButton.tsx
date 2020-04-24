import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { subtractCount } from 'lib/actions/count'

interface Props {
  dispatch: Dispatch
}

function SubtractButton({ dispatch }: Props) {
  const handeClick = () => dispatch(subtractCount())
  return (
    <button onClick={handeClick}>Subtract Count</button>
  )
}

export default connect()(SubtractButton)
