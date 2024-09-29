'use client'
import { motion, useAnimationControls, Variants } from "framer-motion"
import { buttonVariants } from "../ui/button"

const animeVariants: Variants = {
  hide: { rotate: '0deg' },
  show: { rotate: '360deg' }
}
export const FramerAnimationControl = () => {
  const control = useAnimationControls()

  return (
    <div className="center-content">
      <div className="space-y-4">
        <motion.button
          onClick={() => control.start('show')}
          className={buttonVariants({ variant: 'default' })}>Flip me!</motion.button>

        <motion.div
          variants={animeVariants}
          animate={control}
          key="box"
          className='size-28 bg-sky-500 rounded-md'></motion.div>
      </div>
    </div>
  )
}
