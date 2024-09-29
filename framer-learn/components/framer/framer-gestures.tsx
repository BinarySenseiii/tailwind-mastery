'use client'
import { motion, MotionConfig } from "framer-motion"
import { buttonVariants } from "../ui/button"

const FramerGestures = () => {
  return (
    <div className="center-content">
      <MotionConfig transition={{ duration: 0.5, ease: 'easeIn' }}>
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 1, rotate: '2.5deg' }}
          className={buttonVariants({ variant: 'default' })}>Click me!</motion.button>
      </MotionConfig>
    </div>
  )
}

export default FramerGestures