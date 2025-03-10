'use client'

import { useAppDispatch, useAppSelector } from '@/store'
import { changeColor, invertColor } from '@/store/slice/color'

const ColorPanel = () => {
  const color = useAppSelector((state) => state.color)
  const dispatch = useAppDispatch()

  return (
    <div>
      <p>
        fg color is {color.fgColor} bg color is {color.bgColor}
      </p>

      <button onClick={() => dispatch(invertColor())}>invert color</button>
      <button
        onClick={() =>
          dispatch(changeColor({ which: 'fgColor', color: 'red' }))
        }
      >
        change fg to red
      </button>
      <button
        onClick={() =>
          dispatch(changeColor({ which: 'bgColor', color: 'black' }))
        }
      >
        change bg to black
      </button>
    </div>
  )
}
export default ColorPanel
