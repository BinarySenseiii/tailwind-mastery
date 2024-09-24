'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { Slider } from '../ui/slider'
import { useState } from 'react'

const FramerBasics = () => {
  const [x, setX] = useState([0])
  const [y, setY] = useState([0])
  const [rotate, setRotate] = useState([0])
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='space-y-2'>
        <div className='space-y-8'>
          <motion.button layout onClick={() => setIsVisible(!isVisible)}>Click me</motion.button>
          <Slider value={x} onValueChange={setX} max={100} step={1} />
          <Slider value={y} onValueChange={setY} max={100} step={1} />
          <Slider value={rotate} onValueChange={setRotate} max={360} step={1} />
        </div>

        <AnimatePresence mode='popLayout'>
          {isVisible && (
            <motion.div
              key="box"
              initial={{ scale: 0 }}
              animate={{ scale: 1, x: x[0], rotate: rotate[0], y: y[0], opacity: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              exit={{ scale: 0 }}
              className='size-28 bg-sky-500 rounded-md'></motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default FramerBasics