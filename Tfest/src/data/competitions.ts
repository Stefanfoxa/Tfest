// Sumber tunggal data lomba. Isi diambil dari PDF brief poster; teks dibiarkan sebagaimana tertulis di PDF.
// Field yang belum ada di brief sengaja dikosongkan ('' atau []), isi nanti saat datanya tersedia.

export type ColorKey = 'aec' | 'aice' | 'arc' | 'avoc' | 'lcca'

/** Jenis acara (badge) pada Timeline, mengikuti daftar jenis di PRD Bagian 9. */
export type EventType = 'Registrasi' | 'Pengumpulan' | 'Pengumuman' | 'TM' | 'Final' | 'Awarding'

export interface TimelineItem {
  /** Nama kegiatan persis seperti di brief. */
  label: string
  /** Tanggal mulai, format ISO (YYYY-MM-DD). */
  start: string
  /** Tanggal akhir bila berupa rentang. */
  end?: string
  type: EventType
  /** Judul singkat untuk label di kalender. */
  short: string
  /** Deskripsi tambahan untuk modal. Kosong sampai teksnya tersedia. */
  description: string
}

export interface Competition {
  slug: string
  code: string
  name: string
  /** Slot warna turunan palet (PRD 6.1) yang dipakai lomba ini. */
  color: ColorKey
  theme: string
  subthemes: string[]
  participants: string
  nature: string
  fee: string
  benefits: string[]
  timeline: TimelineItem[]
  pic: string
  /** Nomor WhatsApp format internasional tanpa "+" (untuk wa.me). */
  whatsapp: string
  registerUrl: string
  guidebookUrl: string
  /** Link twibbon. Kosong sampai linknya tersedia. */
  twibbonUrl: string
}

export const COMPETITIONS: Competition[] = [
  {
    slug: 'pfec',
    code: 'PFEC',
    name: 'PlantationFund Essay Competition',
    color: 'aec',
    theme: 'Optimalisasi Dana Perkebunan sebagai Penggerak Kesejahteraan dan Transformasi Sektor Perkebunan Indonesia',
    subthemes: [
      'Dana Perkebunan untuk Meningkatkan Kesejahteraan Petani dan Masyarakat',
      'Penerapan Ekonomi Hijau dalam Pengelolaan Dana Perkebunan',
      'Hilirisasi dan Inovasi Produk Perkebunan untuk Memperkuat Ekonomi Indonesia',
      'Peran Generasi Muda dalam Mewujudkan Perkebunan yang Produktif dan Berdaya Saing',
    ],
    participants: 'Siswa SMA/SMK/MA/Sederajat se-Indonesia.',
    nature: 'Tim dengan anggota sebanyak 3 orang',
    fee: 'Gratis',
    benefits: ['Juara 1, 2, 3: Uang Pembinaan + Certificate', 'E-Certificate untuk seluruh peserta'],
    timeline: [
      { label: 'Pendaftaran', start: '2026-10-19', end: '2026-11-02', type: 'Registrasi', short: 'Daftar', description: '' },
      { label: 'Batas Pengumpulan Karya', start: '2026-11-04', type: 'Pengumpulan', short: 'Batas Karya', description: '' },
      { label: 'Pengumuman 6 Finalis', start: '2026-11-18', type: 'Pengumuman', short: '6 Finalis', description: '' },
      { label: 'Batas Pengumpulan Media Presentasi', start: '2026-11-23', type: 'Pengumpulan', short: 'Batas Media', description: '' },
      { label: 'Technical Meeting Final', start: '2026-11-23', type: 'TM', short: 'TM Final', description: '' },
      { label: 'Babak Final', start: '2026-11-24', type: 'Final', short: 'Final', description: '' },
      { label: 'Pengumuman Pemenang', start: '2026-11-25', type: 'Pengumuman', short: 'Pemenang', description: '' },
      { label: 'Awarding dan Closing Ceremony', start: '2026-11-25', type: 'Awarding', short: 'Awarding', description: '' },
    ],
    pic: 'Caca',
    whatsapp: '6281276879501',
    // Link asli dari Anda berakhiran /formResponse (alamat kirim jawaban), diganti /viewform (halaman formulir).
    registerUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLSd68eJrW9Thg7HHTy1A1rupkc9W95FVnGZFcQvHXGDHdmOzdA/viewform',
    guidebookUrl: '',
    twibbonUrl: '',
  },
  {
    slug: 'pfc3',
    code: 'PFC3',
    name: 'Plantation Fund Creative Content Challenge',
    color: 'arc',
    theme: 'Kontribusi Dana Perkebunan dalam Mendorong Ketahanan Fiskal di Indonesia',
    subthemes: ['Dari Penyaluran ke Dampak: Menghidupkan Nilai Dana Perkebunan untuk Fiskal Tangguh'],
    participants: 'Mahasiswa aktif di seluruh Perguruan Tinggi Negeri/Swasta/Kedinasan se-Indonesia dan masyarakat umum.',
    nature: 'Individual atau Tim',
    fee: 'Gratis',
    benefits: [
      'Juara 1: Uang Pembinaan + Sertifikat',
      'Juara 2: Uang Pembinaan + Sertifikat',
      'Juara 3: Uang Pembinaan + Sertifikat',
    ],
    timeline: [
      { label: 'Pendaftaran', start: '2026-10-19', end: '2026-11-15', type: 'Registrasi', short: 'Daftar', description: '' },
      { label: 'Pengumpulan Karya', start: '2026-10-19', end: '2026-11-18', type: 'Pengumpulan', short: 'Karya', description: '' },
      { label: 'Pengumuman', start: '2026-11-25', type: 'Pengumuman', short: 'Pengumuman', description: '' },
      { label: 'Awarding & Closing Ceremony', start: '2026-11-25', type: 'Awarding', short: 'Awarding', description: '' },
    ],
    pic: 'Putri',
    whatsapp: '6281262612959',
    registerUrl: '',
    guidebookUrl: '',
    twibbonUrl: '',
  },
  {
    slug: 'pfpbc',
    code: 'PFPBC',
    name: 'Plantation Fund Policy Brief Competition',
    color: 'avoc',
    theme: 'Kontribusi Dana Perkebunan dalam Mendorong Ketahanan Fiskal di Indonesia',
    subthemes: [
      'Akselerasi Hilirisasi Komoditas Perkebunan untuk Meningkatkan Nilai Tambah dan Daya Saing Nasional',
      'Penguatan Tata Kelola dan Akuntabilitas Dana Perkebunan Berbasis Kinerja dan Dampak',
      'Pembiayaan Perkebunan Berkelanjutan untuk Menghadapi Risiko Iklim dan Tuntutan Pasar Global',
      'Diversifikasi Komoditas dan Strategi Alokasi Dana untuk Mengurangi Risiko Ketergantungan pada Satu Komoditas',
    ],
    participants: 'Mahasiswa aktif D3/D4/S1 seluruh Indonesia.',
    nature: 'Tim dengan anggota sebanyak 3 orang',
    fee: 'Gratis',
    benefits: [
      'Juara 1, 2, 3: Uang Pembinaan, Sertifikat dan Trofi',
      'Seluruh karya finalis akan dipublikasikan ke jurnal (Prosiding)',
      'E-Certificate untuk seluruh peserta',
    ],
    timeline: [
      { label: 'Pendaftaran', start: '2026-10-19', end: '2026-11-02', type: 'Registrasi', short: 'Daftar', description: '' },
      { label: 'Batas Pengumpulan Abstrak', start: '2026-11-02', type: 'Pengumpulan', short: 'Abstrak', description: '' },
      { label: 'Pengumuman Semifinalis', start: '2026-11-08', type: 'Pengumuman', short: 'Semifinalis', description: '' },
      { label: 'Batas Akhir Pengumpulan Full Paper', start: '2026-11-18', type: 'Pengumpulan', short: 'Full Paper', description: '' },
      { label: 'Pengumuman Finalis', start: '2026-11-22', type: 'Pengumuman', short: 'Finalis', description: '' },
      { label: 'Technical Meeting Finalis', start: '2026-11-22', type: 'TM', short: 'TM Finalis', description: '' },
      { label: 'Batas Akhir Pengumpulan Bahan Paparan', start: '2026-11-24', type: 'Pengumpulan', short: 'Paparan', description: '' },
      { label: 'Babak Final dan Awarding', start: '2026-11-25', type: 'Final', short: 'Final', description: '' },
    ],
    pic: 'Fahmi',
    whatsapp: '6281276789501',
    registerUrl: 'https://forms.gle/k5jfy1BpHQns9wv57',
    guidebookUrl: '',
    twibbonUrl: '',
  },
  {
    slug: 'pfic',
    code: 'PFIC',
    name: 'PlantationFund Infographic Competition',
    color: 'aice',
    theme: 'Optimalisasi Dana Perkebunan untuk Mendorong Produktivitas Berkelanjutan dan Pelestarian Lingkungan',
    subthemes: [
      'Produktivitas dan Transformasi Ekonomi Perkebunan',
      'Inklusi Ekonomi dan Peningkatan Kesejahteraan Pekebun',
      'Inovasi Teknologi dan Digitalisasi untuk Perkebunan Berkelanjutan',
      'Ekonomi Hijau dan Pelestarian Lingkungan dalam Sektor Perkebunan',
    ],
    participants: 'Mahasiswa aktif di seluruh Perguruan Tinggi Negeri/Swasta/Kedinasan se-Indonesia.',
    nature: 'Individual',
    fee: 'Gratis',
    benefits: [
      'Juara 1: Uang Pembinaan + Sertifikat',
      'Juara 2: Uang Pembinaan + Sertifikat',
      'Juara 3: Uang Pembinaan + Sertifikat',
    ],
    timeline: [
      { label: 'Pendaftaran', start: '2026-10-19', end: '2026-11-15', type: 'Registrasi', short: 'Daftar', description: '' },
      { label: 'Pengumpulan Karya', start: '2026-10-19', end: '2026-11-18', type: 'Pengumpulan', short: 'Karya', description: '' },
      { label: 'Pengumuman', start: '2026-11-25', type: 'Pengumuman', short: 'Pengumuman', description: '' },
      { label: 'Awarding & Closing Ceremony', start: '2026-11-25', type: 'Awarding', short: 'Awarding', description: '' },
    ],
    pic: 'Sarah',
    whatsapp: '6282172793087',
    registerUrl: 'https://forms.gle/CRPdsuctjk1EzLEA6',
    guidebookUrl: '',
    twibbonUrl: '',
  },
]
