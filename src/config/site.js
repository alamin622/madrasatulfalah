// ============================================================
//  CENTRAL CONFIG — change contact details & links here only.
// ============================================================
export const SITE = {
  nameBn: 'মাদরাসাতুল ফালাহ ঢাকা',
  nameEn: 'Madrasatul Falah Dhaka',
  established: '২০০১',
  year: 2026,

  // WhatsApp number in international format, digits only (no + or spaces)
  whatsappNumber: '8801731537919',

  phones: [
    { label: 'ভবন-১', display: '01731-537919', tel: '+8801731537919' },
    { label: 'ভবন-১', display: '01819-912332', tel: '+8801819912332' },
    { label: 'অফিস', display: '01919-537919', tel: '+8801919537919' },
  ],
  callNumber: '+8801731537919', // used by "সরাসরি কল করুন"

  facebook: 'https://www.facebook.com/share/1JecSzGAWe/',
  youtube: 'https://www.youtube.com/@alfalahtv86',

  branches: [
    {
      title: 'শাখা ১',
      address: 'মুজিব ভিলা / ৩০ দক্ষিণপাড়া, ২ নং রোডের মুখে প্রধান সড়ক, বাসাবো, সবুজবাগ, ঢাকা-১২১৪।',
    },
    {
      title: 'শাখা ২',
      address: 'বাড়ি নং-০৩, জিরো গলি, নন্দীপাড়া ব্রিজ সংলগ্ন, বাসাবো, সবুজবাগ, ঢাকা-১২১৪।',
    },
  ],

  map: {
    // Verified short link you supplied — opens the exact place in Google Maps
    shortLink: 'https://maps.app.goo.gl/dTv4AY8bqtcQazSSA',
    // Embed shown on the page. It is built from the text query below.
    // For the exact pin: Google Maps → Share → Embed a map → copy the src="..." URL and paste it here.
    embedUrl:
      'https://www.google.com/maps?q=' +
      encodeURIComponent('Madrasatul Falah Dhaka, Basabo, Sabujbagh, Dhaka 1214') +
      '&output=embed',
  },
}

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'admission', label: 'Admission' },
  { id: 'departments', label: 'Departments' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'why', label: 'Why Choose Us' },
  { id: 'contact', label: 'Contact' },
]
