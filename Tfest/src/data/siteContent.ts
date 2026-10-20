// Teks identitas acara, satu tempat untuk semua komponen.
export const EVENT = {
  nameMain: 'Treasury Festival',
  year: '2026',
  fullName: 'Treasury Festival 2026',
  /** Dua baris subjudul Hero; Footer menggabungkannya dengan koma. */
  tagline: ['Growing Together', 'Building Fiscal Resilience'],
  /** Paragraf deskripsi di bagian Welcome. Hanya memuat fakta dari brief lomba. */
  welcomeText:
    'Treasury Festival 2026 menghadirkan empat lomba bertema Dana Perkebunan, terbuka bagi pelajar SMA dan sederajat, mahasiswa, serta masyarakat umum, tanpa biaya pendaftaran.',
  /** Teks layar penutup Timeline (dipakai di tahap Timeline). */
  closingTitle: 'See u on the next Treasury Festival 2027',
  closingThanks: 'Terima kasih banyak atas partisipasi luar biasa Anda dalam Treasury Festival 2026!',
} as const

// Kontak umum acara untuk Footer. Kosongkan email ('') untuk menyembunyikan tombolnya.
export const SOCIAL = {
  instagram: 'https://instagram.com/tfest_pknstan',
  instagramHandle: '@tfest_pknstan',
  tiktok: 'https://www.tiktok.com/@tfest_pknstan?_r=1&_t=ZS-9AgT5avXu5e',
  tiktokHandle: '@tfest_pknstan',
  /** ISI alamat email panitia di sini, contoh: 'halo@contoh.com'. */
  email: '',
} as const
