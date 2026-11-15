import { motion, useReducedMotion } from 'framer-motion'

const FROM = { up: { y: 28 }, left: { x: -48 }, right: { x: 48 }, scale: { scale: 0.92 } }

// Premium scroll reveal: fade + soft blur-to-sharp + directional slide / scale
export default function Reveal({ children, delay = 0, from = 'up', className = '' }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, filter: 'blur(8px)', ...FROM[from] }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
