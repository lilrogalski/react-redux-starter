import * as React from 'react'
import { connect } from 'react-redux'
import { State } from 'lib/reducers/rootReducer'
import AddButton from '../Buttons/AddButton'
import SubtractButton from '../Buttons/SubtractButton'
import style from './style.css'
import * as btn from 'lib/css/buttons.css'

const mapStateToProps = (state: State) => ({
  count: state.count,
})

interface Props {
  count: number
}

function Home({ count }: Props) {
  return (
    <div className={style.home}>
      <p>Home</p>
      <p>Count: {count}</p>
      <div className={btn.btn_group}>
        <AddButton />
        <SubtractButton />
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Home)
