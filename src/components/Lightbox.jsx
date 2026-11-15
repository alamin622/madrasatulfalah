import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import useScrollLock from './useScrollLock'

export default function Lightbox({ photos, index, onClose, onChange }) {
  const open = index !== null
  useScrollLock(open)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onChange((index + 1) % photos.length)
      if (e.key === 'ArrowLeft') onChange((index - 1 + photos.length) % photos.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, index, photos.length, onClose, onChange])

  const next = () => onChange((index + 1) % photos.length)
  const prev = () => onChange((index - 1 + photos.length) % photos.length)

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="ছবি দেখুন"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="বন্ধ করুন"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="আগের ছবি"
            className="absolute left-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="পরের ছবি"
            className="absolute right-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <ChevronRight />
          </button>

          <motion.figure
            key={index}
            className="max-h-full max-w-5xl"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.4}
            onDragEnd={(_, info) => {
              if (info.offset.x < -70) next()
              else if (info.offset.x > 70) prev()
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[index].src}
              alt={photos[index].alt}
              draggable={false}
              className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain"
            />
            <figcaption className="mt-3 text-center text-white/85">
              {photos[index].caption} <span className="font-en text-sm text-white/50">({index + 1}/{photos.length})</span>
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
