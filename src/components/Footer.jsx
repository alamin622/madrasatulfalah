import { FaFacebookF, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { MapPin } from 'lucide-react'
import { SITE } from '../config/site'

const go = (id) => (e) => {
  e.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  const links = [
    ['home', 'Home'], ['about', 'About'], ['admission', 'Admission'], ['portfolio', 'Portfolio'], ['contact', 'Contact'],
  ]
  const h = 'mb-4 text-lg font-semibold text-gold'
  return (
    <footer className="relative overflow-hidden bg-emerald-deep text-white/85">
      <div className="pattern pattern-soft absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <span className="grid h-16 w-16 place-items-center rounded-full bg-white p-1.5 ring-2 ring-gold/70">
            <img src="/images/logo.png" alt={`${SITE.nameEn} logo`} className="h-full w-full object-contain" loading="lazy" />
          </span>
          <h3 className="mt-4 text-xl font-bold text-white">{SITE.nameBn}</h3>
          <p className="font-en text-sm text-gold">{SITE.nameEn}</p>
          <p className="mt-3 leading-relaxed text-white/70">
            বাসাবো, সবুজবাগে অবস্থিত দ্বীনি শিক্ষাপ্রতিষ্ঠান। স্থাপিত: {SITE.established} ইং।
          </p>
        </div>

        <div>
          <h4 className={h}>Quick Links</h4>
          <ul className="space-y-2 font-en text-sm">
            {links.map(([id, label]) => (
              <li key={id}><a href={`#${id}`} onClick={go(id)} className="hover:text-gold">{label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={h}>যোগাযোগ</h4>
          <ul className="space-y-1.5 font-en text-sm">
            {SITE.phones.map((p) => (
              <li key={p.tel}><a href={`tel:${p.tel}`} className="hover:text-gold">{p.display}</a>{p.label === 'অফিস' && ' (Office)'}</li>
            ))}
          </ul>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/70">
            {SITE.branches.map((b) => (
              <li key={b.title}><strong className="text-white/90">{b.title}:</strong> {b.address}</li>
            ))}
          </ul>
          <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm hover:text-gold">Facebook পেজ</a>
        </div>

        <div>
          <h4 className={h}>সংযুক্ত থাকুন</h4>
          <a
            href={`https://wa.me/${SITE.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-semibold"
          >
            <FaWhatsapp size={18} aria-hidden="true" /> WhatsApp
          </a>
          <a href={SITE.map.shortLink} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center gap-2 text-sm hover:text-gold">
            <MapPin size={16} aria-hidden="true" /> Google Maps
          </a>
          <div className="mt-5 flex gap-3">
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-gold/50 hover:bg-gold hover:text-emerald-deep"><FaFacebookF /></a>
            <a href={`https://wa.me/${SITE.whatsappNumber}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded-full border border-gold/50 hover:bg-gold hover:text-emerald-deep"><FaWhatsapp /></a>
            <a href={SITE.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="grid h-10 w-10 place-items-center rounded-full border border-gold/50 hover:bg-gold hover:text-emerald-deep"><FaYoutube /></a>
          </div>
        </div>
      </div>
      <div className="relative border-t border-gold/20 py-5 text-center font-en text-sm text-white/60">
        © {SITE.year} Madrashatul Falah Dhaka. All Rights Reserved.
      </div>
    </footer>
  )
}
