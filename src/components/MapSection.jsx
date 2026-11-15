import { Navigation, ExternalLink } from 'lucide-react'
import Reveal from './Reveal'
import { SITE } from '../config/site'

export default function MapSection() {
  return (
    <Reveal>
      <div className="overflow-hidden rounded-3xl border border-gold/30 bg-surface shadow-2xl">
        <div className="aspect-[4/3] w-full sm:aspect-[16/8]">
          <iframe
            title="মাদরাসাতুল ফালাহ ঢাকার অবস্থান – Google Maps"
            src={SITE.map.embedUrl}
            className="h-full w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 p-5">
          <p className="text-muted">বাসাবো, সবুজবাগ, ঢাকা-১২১৪</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={SITE.map.shortLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2 rounded-full px-6 py-2.5 font-semibold shadow"
            >
              <Navigation size={18} aria-hidden="true" /> Get Directions
            </a>
            <a
              href={SITE.map.shortLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-6 py-2.5 font-medium text-ink hover:bg-gold/10"
            >
              <ExternalLink size={18} aria-hidden="true" /> Google Maps-এ খুলুন
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
