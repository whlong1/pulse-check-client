import './index.css'
import { useState, useEffect, useCallback, useReducer } from 'react'

import Ring from '../Ring/Ring'

const reducer = (state, action) => {
  switch (action.type) {
    case '':
      return
    default:
      return
  }
}


const Lesson = () => {

  const [state, dispatch] = useReducer(reducer, { age: 42 })


  const [color, setColor] = useState([0, 0, 255])
  const [prev, setPrev] = useState([100, 100, 100])

  const inc = (val, amt) => val < 255 ? val + amt : 255
  const dec = (val, amt) => val > 0 ? val - amt : 0

  const baseAmt = 100
  const handleNegative = (arr) => [
    // inc(arr[0], baseAmt), dec(arr[1], baseAmt), dec(arr[2], baseAmt)
    inc(arr[0], baseAmt), dec(arr[1], baseAmt), dec(arr[2], baseAmt)
  ]

  const handleReset = useCallback(() => {
    setColor([dec(color[0], 1), dec(color[1], 1), inc(color[2], 2)])
  }, [color])

  // useEffect(() => {
  //   const interval = setInterval(() => handleReset(), 2000)
  //   return () => clearInterval(interval)
  // }, [handleReset])

  return (
    <section className='lesson'>
      <Ring prev={prev} color={color} />
      <menu>
        <button onClick={() => {
          setPrev(color)
          setColor(handleNegative(color))
        }}>
          😱
        </button>
      </menu>
    </section>
  )
}

export default Lesson