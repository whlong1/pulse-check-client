import { useEffect } from 'react'
import { motion, useAnimationControls } from "framer-motion"


const Ring = ({ prev, color }) => {
  const controls = useAnimationControls()
  const inner = color.map((val) => val + 40)
  const outer = color.map((val) => val - 80)

  const style = {
    opacity: .75,
    width: '250px',
    height: '250px',
    // filter: 'saturate(150%) brightness(180%) hue-rotate(-20deg) blur(.5px)',
    borderRadius: "50%"
    // background: `radial-gradient(at 50%, rgb(${inner}) -25%, rgb(${outer}) 100%)`,
  }

  return (
    <div>
      <motion.div
        style={style}
        // animate={controls}
        animate={{
          // scale: .5,
          // scale: [1, .92, 1],
          // borderRadius: ["50%", "48%", "50%"],
          border: [`2px solid rgba(${prev}, .9)`, `2px solid rgba(${color}, .9)` ],
          backgroundColor: [`rgb(${prev})`, `rgb(${color})`]
          // background: `radial-gradient(at 50%, rgb(${inner}) -25%, rgb(${outer}) 100%)`,
        }}
        
        transition={{
          duration: 3,
          type: "spring",
          ease: "easeInOut",
        }}
      />

      {/* <motion.div
        style={style}
        animate={{
          borderRadius: ["50%", "48%", "50%"],
          scale: [1, .92, 1],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 2,
          type: "spring",
          ease: "easeInOut",
          repeat: Infinity,
        }}
      /> */}
    </div>
  )
}

export default Ring