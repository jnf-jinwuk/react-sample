'use client'

import { useDispatch } from 'react-redux'
import useAppSelector from '../../../store'
import { increment, incrementX, incrementY } from '../../../store/slice/counter'

const Counter = () => {
  const counter = useAppSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      x is {counter.x} y is {counter.y}
      <button onClick={() => dispatch(incrementX())}>x+</button>
      <button onClick={() => dispatch(incrementY())}>y+</button>
      <button onClick={() => dispatch(increment({ which: 'x', amount: 100 }))}>
        x+100
      </button>
    </div>
  )
}
export default Counter
