import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const AUTOPLAY_MS = 4500

const variants = {
  enter: (d) => ({ x: d > 0 ? '30%' : '-30%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d) => ({ x: d > 0 ? '-30%' : '30%', opacity: 0 }),
}

export default function PhotoCarousel({ photos, paused, onOpen }) {
  const [[index, dir], setPage] = useState([0, 0])
  const [hover, setHover] = useState(false)

  const go = useCallback(
    (d) => setPage(([i]) => [(i + d + photos.length) % photos.length, d]),
    [photos.length]
  )
  const jump = (i) => setPage(([cur]) => [i, i > cur ? 1 : -1])

  // Auto-swipe
  useEffect(() => {
    if (paused || hover) return
    const t = setInterval(() => go(1), AUTOPLAY_MS)
    return () => clearInterval(t)
  }, [paused, hover, go, index])

  const photo = photos[index]

  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-gold/30 bg-black shadow-2xl sm:aspect-[16/10]">
        <AnimatePresence initial={false} custom={dir} mode="popLayout">
          <motion.div
            key={index}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.5}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) go(1)
              else if (info.offset.x > 60) go(-1)
            }}
            className="absolute inset-0 cursor-zoom-in"
            onClick={() => onOpen(index)}
          >
            <img src={photo.src} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-2xl" />
            <img
              src={photo.src}
              alt={photo.alt}
              draggable={false}
              loading={index === 0 ? 'eager' : 'lazy'}
              className="relative h-full w-full object-contain"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-16 text-white">
              <p className="text-lg font-medium">{photo.caption}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="আগের ছবি"
          className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-gold hover:text-emerald-deep"
        >
          <ChevronLeft />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="পরের ছবি"
          className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-gold hover:text-emerald-deep"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="mt-5 flex justify-center gap-2" role="tablist" aria-label="ছবি নির্বাচন">
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`ছবি ${i + 1}`}
            onClick={() => jump(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-gold' : 'w-2.5 bg-line hover:bg-gold/60'}`}
          />
        ))}
      </div>

      <div className="hide-scrollbar mt-6 flex gap-3 overflow-x-auto pb-1">
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => jump(i)}
            aria-label={p.caption}
            className={`h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 sm:h-20 sm:w-32 ${i === index ? 'border-gold' : 'border-transparent opacity-60 hover:opacity-100'}`}
          >
            <img src={p.src} alt="" loading="lazy" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
