import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import useScrollLock from './useScrollLock'

// Mounted only while a video is selected, so closing it unmounts the <video> and stops playback.
export default function VideoModal({ video, onClose }) {
  useScrollLock(true)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
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
        className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
      >
        <X />
      </button>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="max-h-full w-full max-w-4xl text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          src={video.src}
          poster={video.poster}
          controls
          autoPlay
          playsInline
          preload="metadata"
          className="mx-auto max-h-[80vh] w-auto max-w-full rounded-xl bg-black shadow-2xl"
        />
        <p className="mt-3 text-white/85">{video.title}</p>
      </motion.div>
    </motion.div>
  )
}
