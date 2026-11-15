import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import Reveal from './Reveal'
import { SITE } from '../config/site'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald to-emerald-deep py-20 text-white md:py-24">
      <div className="pattern pattern-soft absolute inset-0 !opacity-[0.12]" aria-hidden="true" />
      <Reveal className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold leading-snug md:text-4xl">আপনার সন্তানের শিক্ষাজীবনের সুন্দর সূচনা হোক আমাদের হাত ধরে।</h2>
        <p className="mt-4 text-lg text-white/80">ভর্তি সংক্রান্ত যেকোনো তথ্যের জন্য আজই আমাদের সঙ্গে যোগাযোগ করুন।</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('admission')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold rounded-full px-7 py-3.5 font-semibold shadow-lg"
          >
            ভর্তি সম্পর্কে জানুন
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href={`tel:${SITE.callNumber}`}
            className="inline-flex items-center gap-2 rounded-full border border-gold/70 px-7 py-3.5 font-semibold hover:bg-white/10"
          >
            <Phone size={18} aria-hidden="true" /> সরাসরি কল করুন
          </motion.a>
        </div>
      </Reveal>
    </section>
  )
}
