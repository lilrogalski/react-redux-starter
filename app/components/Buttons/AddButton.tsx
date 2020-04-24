import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { addCount } from 'lib/actions/count'

interface Props {
  dispatch: Dispatch
}

function AddButton({ dispatch }: Props) {
  const handleClick = () => dispatch(addCount())
  return <button onClick={handleClick}>Add Count</button>
}

export default connect()(AddButton)
