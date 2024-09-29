'use client'
import { AnimatePresence, motion, Variants, } from "framer-motion"
import { Button } from "../ui/button"
import { useState } from "react"


const containerVariants: Variants = {
  initial: { opacity: 0, transition: { staggerChildren: 0.25, delayChildren: 0.2 } },
  animate: { opacity: 1, transition: { staggerChildren: 0.25 } },
}

export const childVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
}

const FramerStaggerAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  return (
    <div className="space-y-3">
      <Button onClick={() => setIsAnimating(A => !A)}>Animate Me</Button>
      <AnimatePresence>
        {isAnimating && (
          <motion.ul variants={containerVariants} initial="initial" animate="animate" exit="initial" className="space-y-6">
            {[...Array(8)].map((_, index) => (
              <motion.li
                key={index}
                variants={childVariants}
                onAnimationComplete={definition => {
                  console.log('Completed animating', definition)
                }}
              >
                {index + 1} - Staggered Animation </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FramerStaggerAnimation