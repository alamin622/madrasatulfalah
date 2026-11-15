import { motion } from 'framer-motion'
import Reveal from './Reveal'
import Icon from './Icon'
import SectionHeading from './SectionHeading'
import { STUDY_TYPES } from '../data/content'

export default function AdmissionSection() {
  return (
    <section id="admission" className="relative bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          title="২০২৭ শিক্ষাবর্ষে ভর্তি চলছে"
          subtitle="আপনার সন্তানের উজ্জ্বল ভবিষ্যৎ গড়তে আজই যোগাযোগ করুন।"
        />
        <Reveal className="mb-10 text-center">
          <span className="inline-block rounded-full border border-gold/50 bg-gold/10 px-6 py-2 text-lg font-semibold text-gold-text">
            শিশু শ্রেণি থেকে ৫ম শ্রেণি পর্যন্ত
          </span>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-3">
          {STUDY_TYPES.map((t, i) => (
            <Reveal key={t.name} from="scale" delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="h-full rounded-2xl border border-line bg-bg p-8 text-center shadow-sm hover:border-gold/60 hover:shadow-xl"
              >
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald text-gold">
                  <Icon name={t.icon} size={28} />
                </span>
                <h3 className="mt-5 text-2xl font-semibold text-ink">{t.name}</h3>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold rounded-full px-8 py-3.5 text-base font-semibold shadow-lg"
          >
            ভর্তির জন্য আবেদন ফর্মে যান
          </motion.button>
        </Reveal>
      </div>
    </section>
  )
}
