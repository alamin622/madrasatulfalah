import { motion, useReducedMotion } from 'framer-motion'

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function HeroSection() {
  const reduce = useReducedMotion()
  const item = (i) => ({
    initial: reduce ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay: 0.25 + i * 0.18, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-emerald-deep">
      {/* Banner image — smooth continuous zoom in / zoom out */}
      <motion.div
        className="absolute inset-0 -z-20"
        animate={reduce ? undefined : { scale: [1, 1.14, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      >
       <picture className="block h-full w-full">
        <source media="(max-width: 640px)" srcSet="/images/hero-mobile.jpg" />
        <img
          src="/images/hero.jpg"
          alt="মসজিদের নকশাদার জানালার আলোয় কুরআন তিলাওয়াতরত শিক্ষার্থীরা"
          className="h-full w-full object-cover"
          fetchpriority="high"
        />
       </picture>
      </motion.div>

      {/* Overlays for readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-deep/95 via-emerald-deep/75 to-emerald-deep/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bg via-transparent to-emerald-deep/60" />
      <div className="pattern pattern-soft absolute inset-0 -z-10" />

      <div className="mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6">
        <div className="max-w-3xl">
          <motion.p {...item(0)} className="font-ar text-3xl text-gold sm:text-4xl" lang="ar" dir="rtl">
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </motion.p>
          <motion.h1 {...item(1)} className="mt-5 text-3xl font-bold leading-[1.35] text-white sm:text-4xl md:text-5xl">
            সন্তানের সুন্দর ভবিষ্যৎ গড়তে দ্বীনি ও আধুনিক শিক্ষার সমন্বয়ে ভর্তি করুন মাদরাসাতুল ফালাহ ঢাকায়
          </motion.h1>
          <motion.p {...item(2)} className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
            কুরআন ও সুন্নাহর আলোকে আদর্শ, নৈতিক ও শিক্ষিত প্রজন্ম গড়ার প্রত্যয়ে আমাদের পথচলা।
          </motion.p>
          <motion.div {...item(3)} className="mt-9 flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('admission')}
              className="btn-gold rounded-full px-7 py-3.5 text-base font-semibold shadow-lg shadow-black/30"
            >
              ভর্তি তথ্য জানুন
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('contact')}
              className="rounded-full border border-gold/70 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur hover:bg-white/15"
            >
              যোগাযোগ করুন
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
