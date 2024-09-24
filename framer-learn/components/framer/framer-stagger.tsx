import { Variants } from 'framer-motion'
import * as motion from "framer-motion/client"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, staggerChildren: 0.25 }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const FramerStagger = async () => {
  return (
    <motion.div className="h-screen grid grid-cols-5 gap-2 p-4"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {[...Array(15)].map((_, index) => (
        <motion.div variants={itemVariants} key={index + 1} className="w-full aspect-square bg-red-500"></motion.div>
      ))}
    </motion.div>
  )
}

export default FramerStagger