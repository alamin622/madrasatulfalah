import { motion } from 'framer-motion'
import Reveal from './Reveal'
import Icon from './Icon'
import SectionHeading from './SectionHeading'
import { WHY_POINTS } from '../data/content'

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading title="আপনার সন্তানকে কেন আমাদের মাদরাসায় ভর্তি করবেন?" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_POINTS.map((p, i) => (
            <Reveal key={p.text} delay={(i % 4) * 0.07}>
              <motion.div
                whileHover={{ y: -6 }}
                className="h-full rounded-2xl border border-line bg-surface p-6 shadow-sm hover:border-gold/60 hover:shadow-xl"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-emerald text-gold">
                  <Icon name={p.icon} size={24} />
                </span>
                <p className="mt-4 text-lg leading-relaxed text-ink">{p.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
