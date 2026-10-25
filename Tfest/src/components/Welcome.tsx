import { FolderDown } from 'lucide-react'
import { ASSETS } from '../lib/assets'
import { EVENT } from '../data/siteContent'

// Hijau tua dengan teks krem; saat hover berubah emas dengan teks hijau tua (teks emas tidak dipakai di atas krem).
const supportBtn =
  'inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-forest px-8 text-sm font-semibold text-cream shadow-[0_8px_24px_-8px_rgba(1,46,35,0.6)] transition duration-200 sm:w-auto'

export default function Welcome() {
  return (
    <section id="welcome" className="bg-forest px-4 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-8 rounded-[28px] border border-soil/15 bg-cream p-6 md:grid-cols-2 md:gap-12 md:p-12">
        <img
          src={ASSETS.maskot}
          alt={`Maskot ${EVENT.fullName}`}
          width={520}
          height={520}
          loading="lazy"
          className="mx-auto h-auto w-full max-w-sm md:max-w-md"
        />
        <div className="text-center">
          <h2 className="text-3xl leading-tight text-forest md:text-5xl">Welcome to {EVENT.fullName}</h2>
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
    </section>
  )
}
