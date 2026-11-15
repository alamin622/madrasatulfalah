import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { SITE } from '../config/site'
import { CLASSES, DEPARTMENTS, STUDY_TYPES } from '../data/content'

const BN_DIGITS = '০১২৩৪৫৬৭৮৯'
const normalizePhone = (v) =>
  v
    .replace(/[০-৯]/g, (d) => String(BN_DIGITS.indexOf(d)))
    .replace(/[\s-]/g, '')
// Bangladesh mobile: 01[3-9]XXXXXXXX, optionally prefixed by +88 / 88
const BD_PHONE = /^(?:\+?88)?01[3-9]\d{8}$/

const initial = { name: '', phone: '', department: '', type: '', grade: '', message: '' }

export default function AdmissionForm() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [opened, setOpened] = useState(false)
  const [waUrl, setWaUrl] = useState('')

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
  }

  const validate = () => {
    const er = {}
    if (!form.name.trim()) er.name = 'শিক্ষার্থীর নাম লিখুন।'
    if (!form.phone.trim()) er.phone = 'অভিভাবকের মোবাইল নম্বর লিখুন।'
    else if (!BD_PHONE.test(normalizePhone(form.phone))) er.phone = 'সঠিক বাংলাদেশি মোবাইল নম্বর দিন (যেমন: 01XXXXXXXXX)।'
    if (!form.department) er.department = 'বিভাগ নির্বাচন করুন।'
    if (!form.type) er.type = 'শিক্ষার ধরন নির্বাচন করুন।'
    if (!form.grade) er.grade = 'শ্রেণি নির্বাচন করুন।'
    return er
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const er = validate()
    setErrors(er)
    if (Object.keys(er).length) return

    const text = [
      'আসসালামু আলাইকুম।',
      '',
      'আমি মাদরাসাতুল ফালাহ ঢাকায় ভর্তি সংক্রান্ত তথ্য জানতে আগ্রহী।',
      '',
      `শিক্ষার্থীর নাম: ${form.name.trim()}`,
      `অভিভাবকের মোবাইল: ${form.phone.trim()}`,
      `বিভাগ: ${form.department}`,
      `শিক্ষার ধরন: ${form.type}`,
      `শ্রেণি: ${form.grade}`,
      `অতিরিক্ত বার্তা: ${form.message.trim() || '—'}`,
      '',
      'অনুগ্রহ করে ভর্তি সংক্রান্ত বিস্তারিত তথ্য জানাবেন।',
      '',
      'ধন্যবাদ।',
    ].join('\n')

    const url = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`
    setWaUrl(url)
    // A real <a target="_blank"> click is the most reliable way to open WhatsApp (avoids popup blocking)
    const a = document.createElement('a')
    a.href = url
    a.target = '_blank'
    a.rel = 'noopener noreferrer'
    document.body.appendChild(a)
    a.click()
    a.remove()
    setOpened(true)
  }

  const field = 'w-full rounded-xl border bg-bg px-4 py-3 text-ink placeholder:text-muted/70 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40'
  const border = (k) => (errors[k] ? 'border-red-500' : 'border-line')
  const Err = ({ k }) => (errors[k] ? <p role="alert" className="mt-1 text-sm text-red-500">{errors[k]}</p> : null)

  return (
    <section id="inquiry" className="relative overflow-hidden bg-surface py-20 md:py-28">
      <div className="pattern pattern-soft absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading title="ভর্তি সংক্রান্ত তথ্য জানতে যোগাযোগ করুন" />
        <Reveal from="scale">
          <form onSubmit={onSubmit} noValidate className="grid gap-5 rounded-3xl border border-gold/30 bg-bg p-6 shadow-xl sm:grid-cols-2 sm:p-9">
            <div className="sm:col-span-2">
              <label htmlFor="f-name" className="mb-1.5 block font-medium">শিক্ষার্থীর নাম <span className="text-red-500">*</span></label>
              <input id="f-name" type="text" autoComplete="name" value={form.name} onChange={set('name')} className={`${field} ${border('name')}`} placeholder="শিক্ষার্থীর পূর্ণ নাম" />
              <Err k="name" />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="f-phone" className="mb-1.5 block font-medium">অভিভাবকের মোবাইল নম্বর <span className="text-red-500">*</span></label>
              <input id="f-phone" type="tel" inputMode="tel" autoComplete="tel" value={form.phone} onChange={set('phone')} className={`${field} ${border('phone')}`} placeholder="01XXXXXXXXX" />
              <Err k="phone" />
            </div>

            <div>
              <label htmlFor="f-dep" className="mb-1.5 block font-medium">শিক্ষার্থীর বিভাগ <span className="text-red-500">*</span></label>
              <select id="f-dep" value={form.department} onChange={set('department')} className={`${field} ${border('department')}`}>
                <option value="">বিভাগ নির্বাচন করুন</option>
                {DEPARTMENTS.map((d) => <option key={d.name}>{d.name}</option>)}
              </select>
              <Err k="department" />
            </div>

            <div>
              <label htmlFor="f-type" className="mb-1.5 block font-medium">শিক্ষার ধরন <span className="text-red-500">*</span></label>
              <select id="f-type" value={form.type} onChange={set('type')} className={`${field} ${border('type')}`}>
                <option value="">ধরন নির্বাচন করুন</option>
                {STUDY_TYPES.map((t) => <option key={t.name}>{t.name}</option>)}
              </select>
              <Err k="type" />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="f-grade" className="mb-1.5 block font-medium">শ্রেণি <span className="text-red-500">*</span></label>
              <select id="f-grade" value={form.grade} onChange={set('grade')} className={`${field} ${border('grade')}`}>
                <option value="">শ্রেণি নির্বাচন করুন</option>
                {CLASSES.map((c) => <option key={c}>{c}</option>)}
              </select>
              <Err k="grade" />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="f-msg" className="mb-1.5 block font-medium">অতিরিক্ত বার্তা <span className="text-sm text-muted">(ঐচ্ছিক)</span></label>
              <textarea id="f-msg" rows={4} value={form.message} onChange={set('message')} className={`${field} border-line`} placeholder="আপনার প্রশ্ন বা বার্তা লিখুন" />
            </div>

            <div className="sm:col-span-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-gold flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold shadow-lg"
              >
                <FaWhatsapp size={22} aria-hidden="true" /> WhatsApp-এ পাঠান
              </motion.button>
              <p className="mt-3 text-center text-sm text-muted" aria-live="polite">
                {opened
                  ? 'WhatsApp খুলেছে। বার্তাটি এখনো পাঠানো হয়নি — WhatsApp-এ গিয়ে "Send" চাপুন।'
                  : 'বোতামে চাপলে বার্তাটি WhatsApp-এ লেখা অবস্থায় খুলবে। পাঠাতে আপনাকে WhatsApp-এ "Send" চাপতে হবে।'}
              </p>
              {waUrl && (
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="mt-3 block rounded-full border border-gold/60 py-2.5 text-center font-semibold text-gold-text hover:bg-gold/10">
                  WhatsApp না খুললে এখানে চাপুন
                </a>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
