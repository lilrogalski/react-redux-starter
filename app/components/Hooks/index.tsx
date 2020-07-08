import React, { useState } from 'react'
import style from './style.css'
import * as btn from 'lib/css/buttons.css'

export default function Hooks() {
  const [count, setCount] = useState(0)

  const addCount = () => setCount(count + 1)
  const subtractCount = () => setCount(count - 1)

  return (
    <div className={style.hooks}>
      <p>Hooks</p>
      <p>Count: {count}</p>
      <div className={btn.btn_group}>
        <button onClick={addCount} className={btn.btn}>
          Add
        </button>
        <button onClick={subtractCount} className={btn.btn}>
          Subtract
        </button>
      </div>
    </div>
  )
}
