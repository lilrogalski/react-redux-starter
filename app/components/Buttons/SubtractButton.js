// @flow
import React from 'react'
import { connect } from 'react-redux'
import type { Dispatch } from 'react-redux'
import { subtractCount } from 'lib/actions/count'

type Props = {
  dispatch: Dispatch,
}

function SubtractButton({ dispatch }: Props) {
  const handeClick = () => dispatch(subtractCount())
  return (
    <button onClick={handeClick}>Subtract Count</button>
  )
}

export default connect()(SubtractButton)
