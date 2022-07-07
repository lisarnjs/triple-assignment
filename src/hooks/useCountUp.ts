import { useEffect, useState } from 'react'

const START = 0
const DURATION = 2000
const FRAME = 1000 / 70

const easeOutExpo = (t: number): number => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

export default function useCountUp(end: number) {
  const [count, setCount] = useState(START)
  const totalFrame = Math.round(DURATION / FRAME)

  useEffect(() => {
    let currentNum = START
    const counter = setInterval(() => {
      const progress = easeOutExpo(++currentNum / totalFrame)
      setCount(Math.round(end * progress))

      if (progress === 1) {
        clearInterval(counter)
      }
    }, FRAME)
  }, [end])

  return count
}
