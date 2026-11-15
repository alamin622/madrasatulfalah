import { motion } from 'framer-motion'
import Reveal from './Reveal'
import Icon from './Icon'
import SectionHeading from './SectionHeading'
import { DEPARTMENTS } from '../data/content'

export default function DepartmentSection() {
  return (
    <section id="departments" className="relative overflow-hidden bg-emerald-deep py-20 text-white md:py-28">
      <div className="pattern pattern-soft absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="[&_h2]:text-white [&_p]:text-white/70">
          <SectionHeading title="আমাদের বিভাগসমূহ" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DEPARTMENTS.map((d, i) => (
            <Reveal key={d.name} from={i % 2 ? 'right' : 'left'} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ y: -5 }}
                className="flex items-center gap-4 rounded-2xl border border-gold/25 bg-white/5 p-6 backdrop-blur hover:border-gold/70 hover:bg-white/10"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
                  <Icon name={d.icon} size={26} />
                </span>
                <h3 className="text-xl font-semibold">{d.name}</h3>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
