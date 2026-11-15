import { motion } from 'framer-motion'
import { MapPin, Phone } from 'lucide-react'
import { FaFacebookF, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import MapSection from './MapSection'
import { SITE } from '../config/site'

const wa = `https://wa.me/${SITE.whatsappNumber}`

export default function ContactSection() {
  const card = 'h-full rounded-2xl border border-line bg-surface p-6 shadow-sm hover:border-gold/60 hover:shadow-xl'
  const badge = 'grid h-12 w-12 place-items-center rounded-xl bg-emerald text-gold'
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading title="আমাদের ঠিকানা ও যোগাযোগ" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal>
            <motion.a whileHover={{ y: -5 }} href={wa} target="_blank" rel="noopener noreferrer" className={`${card} block`}>
              <span className={badge}><FaWhatsapp size={24} aria-hidden="true" /></span>
              <h3 className="mt-4 text-xl font-semibold">WhatsApp</h3>
              <p className="mt-1 font-en text-muted">{SITE.phones[0].display}</p>
              <p className="mt-3 text-sm text-gold-text">সরাসরি মেসেজ করুন</p>
            </motion.a>
          </Reveal>

          <Reveal delay={0.08}>
            <motion.div whileHover={{ y: -5 }} className={card}>
              <span className={badge}><Phone size={24} aria-hidden="true" /></span>
              <h3 className="mt-4 text-xl font-semibold">ফোন করুন</h3>
              <ul className="mt-2 space-y-1.5">
                {SITE.phones.map((p) => (
                  <li key={p.tel}>
                    <a href={`tel:${p.tel}`} className="font-en text-ink hover:text-gold-text">{p.display}</a>
                    {p.label === 'অফিস' && <span className="ml-2 text-sm text-muted">(Office)</span>}
                  </li>
                ))}
              </ul>
            </motion.div>
          </Reveal>

          <Reveal delay={0.16}>
            <motion.a whileHover={{ y: -5 }} href={SITE.facebook} target="_blank" rel="noopener noreferrer" className={`${card} block`}>
              <span className={badge}><FaFacebookF size={22} aria-hidden="true" /></span>
              <h3 className="mt-4 text-xl font-semibold">Facebook</h3>
              <p className="mt-1 text-muted">আমাদের ফেসবুক পেজ</p>
              <p className="mt-3 text-sm text-gold-text">পেজ ভিজিট করুন</p>
            </motion.a>
          </Reveal>
          <Reveal delay={0.24}>
            <motion.a whileHover={{ y: -5 }} href={SITE.youtube} target="_blank" rel="noopener noreferrer" className={`${card} block`}>
              <span className={badge}><FaYoutube size={26} aria-hidden="true" /></span>
              <h3 className="mt-4 text-xl font-semibold">YouTube</h3>
              <p className="mt-1 text-muted">আমাদের ইউটিউব চ্যানেল</p>
              <p className="mt-3 text-sm text-gold-text">চ্যানেল দেখুন</p>
            </motion.a>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {SITE.branches.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <div className="flex gap-4 rounded-2xl border border-line bg-surface p-6">
                <span className={`${badge} shrink-0`}><MapPin size={24} aria-hidden="true" /></span>
                <div>
                  <h3 className="text-xl font-semibold">{b.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted">{b.address}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10"><MapSection /></div>
      </div>
    </section>
  )
}
