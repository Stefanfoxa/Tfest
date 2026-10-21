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
export const DECOR = {
  hero: [
    // Cahaya matahari dari sudut kiri atas.
    { src: 'glow-sunbeam-topleft', top: '-2vw', left: '-2vw', width: 'clamp(220px, 34vw, 520px)', opacity: 0.7, blend: 'screen' },
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
  // Dua pohon emas di sudut seberang: kiri atas dan kanan bawah (batang keluar dari tepi layar).
  footer: [
    { src: 'palm-gold-tl', top: '-2vw', left: '-3vw', width: 'clamp(112px, 21vw, 330px)' },
    { src: 'palm-gold-br', bottom: '-3vw', right: '-3vw', width: 'clamp(112px, 21vw, 330px)' },
    { src: 'glow-lensflare-soft', top: '0', right: '0', width: 'clamp(180px, 28vw, 420px)', opacity: 0.35, blend: 'screen' },
  ] as DecorItem[],
}
