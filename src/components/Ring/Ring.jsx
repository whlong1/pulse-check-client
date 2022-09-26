import { motion } from "framer-motion"

const Ring = ({ color }) => {
  const inner = color.map((val) => val + 60)
  const outer = color.map((val) => val - 80)

  const style = {
    opacity: .75,
    width: '250px',
    height: '250px',
    border: `2px solid rgba(${color}, .9)`,
    filter: 'saturate(120%) brightness(180%) hue-rotate(-20deg) blur(.5px)',
    background: `radial-gradient(at 50%, rgb(${inner}) -25%, rgb(${outer}) 100%)`,
  }

  return (
    <div>
      <motion.div
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
      />
    </div>
  )
}

export default Ring