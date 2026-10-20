// Konfigurasi dekorasi per section. Ubah posisi/ukuran/opacity di sini tanpa menyentuh komponen section.
// Semua nilai posisi & lebar berupa string CSS. File gambar: public/images/decor/webp/<src>.webp

export interface DecorItem {
  src: string
  top?: string
  right?: string
  bottom?: string
  left?: string
  /** Lebar (CSS), disarankan clamp()/vw agar responsif. */
  width: string
  rotate?: number
  /** Cerminkan horizontal. */
  flip?: boolean
  opacity?: number
  /** mix-blend-mode; elemen cahaya memakai 'screen'. */
  blend?: 'screen'
  /** Sembunyikan di bawah breakpoint ini (default: tampil di semua ukuran). */
  from?: 'md' | 'lg' | 'xl'
  /** sway = goyang pelan (desktop saja), sway-m = juga di HP (maks. 2 elemen), twinkle = berkedip (desktop saja). */
  animate?: 'sway' | 'sway-m' | 'twinkle'
  /** mask-image CSS untuk menyamarkan tepi yang terpotong lurus. */
  mask?: string
  origin?: string
  /** Titik tengah gambar ditaruh di (left, top). */
  center?: boolean
  /** Hanya pusatkan secara vertikal (top menjadi titik tengah gambar). */
  centerY?: boolean
  z?: number
  delay?: number
}

// Memudar sebelum mencapai sisi yang terpotong lurus (kanan & atas), jadi tepinya tidak terlihat.
// Pohon "muncul dari kabut": bagian bawah memudar halus, jadi tidak ada potongan lurus di batas section.
const FADE_BOTTOM = 'linear-gradient(to top, transparent 0%, rgba(0,0,0,0.55) 14%, #000 34%)'

export const DECOR = {
  hero: [
    // Cahaya matahari dari sudut kiri atas.
    { src: 'glow-sunbeam-topleft', top: '-2vw', left: '-2vw', width: 'clamp(220px, 34vw, 520px)', opacity: 0.7, blend: 'screen' },
    // Satu helai daun emas utuh menjuntai dari tepi kanan (tidak terpotong di tengah).
    { src: 'leaf-gold-gradient', top: '11vh', right: '1.5vw', width: 'clamp(70px, 9vw, 150px)', rotate: 20, opacity: 0.92, animate: 'sway', origin: 'bottom center' },
    // Dua pohon sawit menempel di tepi kiri-kanan bawah; pohon besar di kanan, kecil di kiri (kesan kedalaman).
    { src: 'palm-oil-large-fruit', bottom: '-2vh', right: '1vw', width: 'clamp(120px, 20vw, 340px)', mask: FADE_BOTTOM, animate: 'sway-m' },
    { src: 'palm-date-small-fruit', bottom: '-2vh', left: '1.5vw', width: 'clamp(96px, 12vw, 210px)', opacity: 0.85, mask: FADE_BOTTOM, animate: 'sway-m' },
    // Kilau bintang kecil di sekitar judul.
    { src: 'glow-star-white', top: '24%', left: '14%', width: 'clamp(40px, 5vw, 80px)', blend: 'screen', from: 'md', animate: 'twinkle' },
    { src: 'glow-star-white', top: '40%', right: '13%', width: 'clamp(32px, 4vw, 64px)', blend: 'screen', from: 'md', animate: 'twinkle', delay: 1.6 },
  ] as DecorItem[],
  // Di dalam span tahun "2026" (relatif terhadap angka), tepat di belakang teks.
  heroYear: [
    { src: 'glow-starburst-center', top: '50%', left: '50%', width: 'clamp(240px, 32vw, 520px)', opacity: 0.45, blend: 'screen', center: true, from: 'md', animate: 'twinkle', z: -1 },
  ] as DecorItem[],
  // Sengaja kosong: kartu krem/kaca sudah kuat secara visual dan dekorasi di belakangnya terlihat terpotong.
  // Isi daftar ini jika nanti ingin menambah dekorasi.
  welcome: [] as DecorItem[],
  timelineCard: [] as DecorItem[],
  timelineMargin: [] as DecorItem[],
  // Dua daun simetris di ujung banner; dipusatkan vertikal dan lebih kecil dari tinggi banner agar tidak terpotong.
  subheader: [
    { src: 'leaf-gold-gradient', top: 'calc(50% + 32px)', left: '2vw', width: 'clamp(44px, 6vw, 96px)', rotate: -28, centerY: true },
    { src: 'leaf-gold-gradient', top: 'calc(50% + 32px)', right: '2vw', width: 'clamp(44px, 6vw, 96px)', rotate: 28, flip: true, centerY: true },
  ] as DecorItem[],
  footer: [
    { src: 'glow-lensflare-soft', top: '0', right: '0', width: 'clamp(180px, 28vw, 420px)', opacity: 0.35, blend: 'screen' },
    { src: 'palm-date-small-fruit', bottom: '0', left: '2vw', width: 'clamp(90px, 11vw, 180px)', opacity: 0.35, from: 'md', mask: FADE_BOTTOM },
  ] as DecorItem[],
}
