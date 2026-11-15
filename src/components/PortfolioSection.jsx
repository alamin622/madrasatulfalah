import { useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Image as ImageIcon, Play, Video as VideoIcon } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import PhotoCarousel from './PhotoCarousel'
import Lightbox from './Lightbox'
import VideoModal from './VideoModal'
import { PHOTOS, VIDEOS } from '../data/content'

const TABS = [
  { id: 'photos', label: 'Photos', Icon: ImageIcon },
  { id: 'videos', label: 'Videos', Icon: VideoIcon },
]

export default function PortfolioSection() {
  const [tab, setTab] = useState('photos') // Photos is the default tab
  const [lightbox, setLightbox] = useState(null)
  const [activeVideo, setActiveVideo] = useState(null)

  const closeLightbox = useCallback(() => setLightbox(null), [])
  const closeVideo = useCallback(() => setActiveVideo(null), [])

  const switchTab = (id) => {
    setActiveVideo(null) // stops any playing video
    setLightbox(null)
    setTab(id)
  }

  return (
    <section id="portfolio" className="relative overflow-hidden bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading title="আমাদের কার্যক্রম | Portfolio" />

        <Reveal className="mb-10 flex justify-center">
          <div role="tablist" aria-label="Portfolio" className="relative inline-flex rounded-full border border-gold/30 bg-bg p-1.5">
            {TABS.map(({ id, label, Icon }) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={tab === id}
                onClick={() => switchTab(id)}
                className={`relative z-10 flex items-center gap-2 rounded-full px-6 py-2.5 font-en text-sm font-medium ${
                  tab === id ? 'text-emerald-deep' : 'text-muted hover:text-ink'
                }`}
              >
                {tab === id && (
                  <motion.span
                    layoutId="portfolio-tab"
                    className="btn-gold absolute inset-0 -z-10 rounded-full shadow-md"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <Icon size={16} aria-hidden="true" />
                {label}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          {tab === 'photos' ? (
            <motion.div key="photos" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
              <PhotoCarousel photos={PHOTOS} paused={lightbox !== null} onOpen={setLightbox} />
            </motion.div>
          ) : (
            <motion.div
              key="videos"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="grid gap-6 sm:grid-cols-2"
            >
              {VIDEOS.map((v) => (
                <button
                  key={v.src}
                  type="button"
                  onClick={() => setActiveVideo(v)}
                  aria-label={`ভিডিও চালান: ${v.title}`}
                  className="group relative aspect-video overflow-hidden rounded-2xl border border-gold/30 bg-black text-left shadow-lg"
                >
                  <img
                    src={v.poster}
                    alt={v.title}
                    loading="lazy"
                    className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${v.orientation === 'portrait' ? 'object-contain' : 'object-cover'}`}
                  />
                  <span className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/15" />
                  <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold text-emerald-deep shadow-xl transition-transform duration-300 group-hover:scale-110">
                    <Play size={26} fill="currentColor" className="ml-1" />
                  </span>
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-10 text-white">
                    {v.title}
                  </span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Lightbox photos={PHOTOS} index={lightbox} onClose={closeLightbox} onChange={setLightbox} />
      <AnimatePresence>
        {activeVideo && <VideoModal key={activeVideo.src} video={activeVideo} onClose={closeVideo} />}
      </AnimatePresence>
    </section>
  )
}
