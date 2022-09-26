import './index.css'
import { useState, useEffect, useCallback } from 'react'

import Ring from '../Ring/Ring'

const Lesson = () => {
  const [color, setColor] = useState([0, 0, 255])

  const baseAmt = 5
  const inc = (val, amt) => val < 255 ? val + amt : 255
  const dec = (val, amt) => val > 0 ? val - amt : 0

  const handlePositive = (arr) => [
    dec(arr[0], baseAmt), inc(arr[1], baseAmt), dec(arr[2], baseAmt)
  ]

  const handleNegative = (arr) => [
    inc(arr[0], baseAmt), dec(arr[1], baseAmt), dec(arr[2], baseAmt)
  ]

  const handleReset = useCallback(() => {
    setColor([dec(color[0], 1), dec(color[1], 1), inc(color[2], 1)])
  }, [color])

  useEffect(() => {
    const interval = setInterval(() => handleReset(), 2000)
    return () => clearInterval(interval)
  }, [handleReset])

  return (
    <section className='lesson'>
      <Ring color={color} />
      <menu>
        <button onClick={() => setColor(handleNegative(color))}>
          -
        </button>
        <button onClick={() => setColor(handlePositive(color))}>
          +
        </button>
      </menu>
    </section>
  )
}

export default Lesson