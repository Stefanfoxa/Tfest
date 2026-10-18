// Sumber tunggal data lomba. Isi diambil dari PDF brief poster; teks dibiarkan sebagaimana tertulis di PDF.
// Field yang belum ada di brief sengaja dikosongkan ('' atau []), isi nanti saat datanya tersedia.

export type ColorKey = 'aec' | 'aice' | 'arc' | 'avoc' | 'lcca'

export interface TimelineItem {
  label: string
  /** Tanggal mulai, format ISO (YYYY-MM-DD). */
  start: string
  /** Tanggal akhir bila berupa rentang. */
  end?: string
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
      { label: 'Pendaftaran', start: '2026-10-19', end: '2026-11-02' },
      { label: 'Batas Pengumpulan Karya', start: '2026-11-04' },
      { label: 'Pengumuman 6 Finalis', start: '2026-11-18' },
      { label: 'Batas Pengumpulan Media Presentasi', start: '2026-11-23' },
      { label: 'Technical Meeting Final', start: '2026-11-23' },
      { label: 'Babak Final', start: '2026-11-24' },
      { label: 'Pengumuman Pemenang', start: '2026-11-25' },
      { label: 'Awarding dan Closing Ceremony', start: '2026-11-25' },
    ],
    pic: 'Caca',
    whatsapp: '6281276879501',
    registerUrl: '',
    guidebookUrl: '',
  },
  {
    slug: 'pfc3',
    code: 'PFC3',
    name: 'Plantation Fund Creative Content Challenge',
    color: 'arc',
    theme: 'Dari Penyaluran ke Dampak: Menghidupkan Nilai Dana Perkebunan untuk Fiskal Tangguh',
    subthemes: [],
    participants: 'Umum.',
    nature: 'Individual atau Tim',
    fee: 'Gratis',
    benefits: [
      'Juara 1: Uang Pembinaan + Sertifikat',
      'Juara 2: Uang Pembinaan + Sertifikat',
      'Juara 3: Uang Pembinaan + Sertifikat',
    ],
    timeline: [
      { label: 'Pendaftaran', start: '2026-10-19', end: '2026-11-15' },
      { label: 'Pengumpulan Karya', start: '2026-10-19', end: '2026-11-18' },
      { label: 'Pengumuman', start: '2026-11-25' },
      { label: 'Awarding & Closing Ceremony', start: '2026-11-25' },
    ],
    pic: 'Putri',
    whatsapp: '6281262612959',
    registerUrl: '',
    guidebookUrl: '',
  },
  {
    slug: 'pfpbc',
    code: 'PFPBC',
    // Di PDF brief tertulis "PlantationFund Essay Competition" (kemungkinan salah salin).
    // Nama ini memakai nama file (PFPBC) dan daftar Anda ("Policy Brief"). Mohon konfirmasi.
    name: 'PlantationFund Policy Brief Competition',
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
      { label: 'Pendaftaran', start: '2026-10-19', end: '2026-11-02' },
      { label: 'Batas Pengumpulan Abstrak', start: '2026-11-02' },
      { label: 'Pengumuman Semifinalis', start: '2026-11-08' },
      { label: 'Batas Akhir Pengumpulan Full Paper', start: '2026-11-18' },
      { label: 'Pengumuman Finalis', start: '2026-11-22' },
      { label: 'Technical Meeting Finalis', start: '2026-11-22' },
      { label: 'Batas Akhir Pengumpulan Bahan Paparan', start: '2026-11-24' },
      { label: 'Babak Final dan Awarding', start: '2026-11-25' },
    ],
    pic: 'Fahmi',
    whatsapp: '6281276789501',
    registerUrl: '',
    guidebookUrl: '',
  },
  {
    slug: 'pfic',
    code: 'PFIC',
    // Di PDF tertulis "PlantanationFund" (typo); di sini memakai ejaan "PlantationFund" seperti lomba lain.
    name: 'PlantationFund Infographic Competition',
    color: 'aice',
    theme: 'Optimalisasi Dana Perkebunan untuk Mendorong Produktivitas Berkelanjutan dan Pelestarian Lingkungan',
    subthemes: [],
    participants: 'Mahasiswa aktif di seluruh Perguruan Tinggi Negeri/Swasta/Kedinasan se-Indonesia.',
    nature: 'Individual',
    fee: 'Gratis',
    benefits: [
      'Juara 1: Uang Pembinaan + Sertifikat',
      'Juara 2: Uang Pembinaan + Sertifikat',
      'Juara 3: Uang Pembinaan + Sertifikat',
    ],
    timeline: [
      { label: 'Pendaftaran', start: '2026-10-19', end: '2026-11-15' },
      { label: 'Pengumpulan Karya', start: '2026-10-19', end: '2026-11-18' },
      { label: 'Pengumuman', start: '2026-11-25' },
      { label: 'Awarding & Closing Ceremony', start: '2026-11-25' },
    ],
    pic: 'Sarah',
    whatsapp: '6282172793087',
    registerUrl: '',
    guidebookUrl: '',
  },
]
