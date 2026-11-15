import { motion } from 'framer-motion'
import Reveal from './Reveal'

const line = (origin) => (
  <motion.span
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    style={{ originX: origin }}
    className="h-px w-12 bg-gold/70"
  />
)

export default function SectionHeading({ title, subtitle, center = true }) {
  return (
    <Reveal className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className="text-3xl font-bold leading-tight text-ink md:text-4xl">{title}</h2>
      <div className={`mt-4 flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
        {line(1)}
        <motion.span
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 45 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-2 w-2 bg-gold"
        />
        {line(0)}
      </div>
      {subtitle && <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">{subtitle}</p>}
    </Reveal>
  )
}
