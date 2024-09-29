'use client'
import { Fragment, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

export const FramerViewBasedAnimation = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, })

  return (
    <Fragment>
      <div className="h-[200vh]"></div>
      <motion.div className="h-screen bg-black" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}></motion.div>
      <div ref={ref} className={cn("h-screen bg-red-500 transition-all duration-500", {
        "bg-sky-500": isInView
      })}></div>
    </Fragment>
  )
}
