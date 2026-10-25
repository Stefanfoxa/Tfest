import { FolderDown } from 'lucide-react'
import { ASSETS } from '../lib/assets'
import { EVENT } from '../data/siteContent'
import { DecorLayer } from './Decor'
import { DECOR } from '../decorConfig'

// Hijau tua dengan teks krem; saat hover berubah emas dengan teks hijau tua (teks emas tidak dipakai di atas krem).
const supportBtn =
  'inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-forest px-8 text-sm font-semibold text-cream shadow-[0_8px_24px_-8px_rgba(1,46,35,0.6)] transition duration-200 sm:w-auto'

export default function Welcome() {
  return (
    <section id="welcome" className="relative overflow-hidden px-4 py-16 md:py-24">
      <div className="relative mx-auto max-w-6xl">
      <DecorLayer items={DECOR.welcome} />
      <div className="relative z-10 grid items-center gap-8 rounded-[28px] border border-soil/15 bg-cream p-6 md:grid-cols-2 md:gap-12 md:p-12">
        <img
          src={ASSETS.logoFull}
          alt={`Logo ${EVENT.fullName}`}
          width={520}
          height={654}
          loading="lazy"
          className="mx-auto h-auto w-full max-w-[15rem] md:max-w-sm"
        />
        <div className="text-center">
          <h2 className="text-4xl leading-[1.2] text-forest md:text-6xl"><span className="text-[1.16em]">Welcome to {EVENT.nameMain}</span> {EVENT.year}
          </h2>
          <span aria-hidden="true" className="mx-auto my-6 block h-1 w-40 rounded-full bg-gold md:w-64" />
          {/* Paragraf deskripsi kosong sampai teksnya diberikan (lihat data/siteContent.ts). */}
          {EVENT.welcomeText && (
            <p className="text-base leading-relaxed text-forest md:text-lg">{EVENT.welcomeText}</p>
          )}

          {/* Tombol berkas pendukung. Jika url di data/siteContent.ts masih kosong, tombol redup dan tidak bisa diklik. */}
          <div className="mt-8 flex justify-center">
            {EVENT.supportFiles.url ? (
              <a
                href={EVENT.supportFiles.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${supportBtn} hover:-translate-y-1 hover:bg-gold hover:text-forest`}
              >
                <FolderDown size={20} aria-hidden="true" />
                {EVENT.supportFiles.label}
              </a>
            ) : (
              <span
                role="link"
                aria-disabled="true"
                title="Tautan segera tersedia"
                className={`${supportBtn} cursor-not-allowed opacity-50`}
              >
                <FolderDown size={20} aria-hidden="true" />
                {EVENT.supportFiles.label}
              </span>
            )}
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
