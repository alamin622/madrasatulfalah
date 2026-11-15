import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { SITE } from '../config/site'

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-28">
      <div className="pattern pattern-soft absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading title="আমাদের পরিচয়" />
        <div className="grid items-center gap-12 md:grid-cols-5">
          <Reveal from="left" className="md:col-span-2">
            <div className="mx-auto w-64 rounded-[2rem] bg-white p-5 shadow-2xl ring-2 ring-gold/60 sm:w-72">
              <img src="/images/logo.png" alt={`${SITE.nameEn} logo`} className="w-full" loading="lazy" />
            </div>
          </Reveal>
          <Reveal from="right" delay={0.1} className="md:col-span-3">
            <p className="text-xl leading-relaxed text-ink">
              {SITE.nameBn} বাসাবো, সবুজবাগে অবস্থিত একটি দ্বীনি শিক্ষাপ্রতিষ্ঠান। এটি {SITE.established} ইংরেজি সালে স্থাপিত।
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              এখানে নূরানী, নাযেরা, হিফজ, হিফজ রিভিশন, প্রতিযোগিতা ও জেনারেল বিভাগে শিশু শ্রেণি থেকে ৫ম শ্রেণি পর্যন্ত শিক্ষার্থী ভর্তি
              নেওয়া হয়। আবাসিক, অনাবাসিক ও ডে-কেয়ার—তিন ধরনের ব্যবস্থায় ভর্তির সুযোগ রয়েছে।
            </p>
            <p className="mt-6 inline-block rounded-xl border border-gold/40 bg-gold/10 px-5 py-3 font-ar text-2xl text-gold-text" dir="rtl" lang="ar">
              ٱقْرَأْ بِٱسْمِ رَبِّكَ ٱلَّذِي خَلَقَ
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
