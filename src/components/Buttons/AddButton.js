// @flow
import React from 'react'
import { connect } from 'react-redux'
import type { Dispatch } from 'react-redux'
import { addCount } from 'lib/actions/count'

type Props = {
  dispatch: Dispatch,
}

function AddButton({ dispatch }: Props) {
  const handeClick = () => dispatch(addCount())
  return <button onClick={handeClick}>Add Count</button>
}

export default connect()(AddButton)
