import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { SITE } from '../config/site'

export default function WhatsAppFloatingButton() {
  return (
    <motion.a
      href={`https://wa.me/${SITE.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp-এ মেসেজ করুন"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.2, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl"
    >
      <span aria-hidden="true" className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-40" />
      <FaWhatsapp size={30} aria-hidden="true" />
    </motion.a>
  )
}
