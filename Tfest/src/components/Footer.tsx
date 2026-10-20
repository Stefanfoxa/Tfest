import { ASSETS } from '../lib/assets'
import { CONTACTS, formatPhone } from '../data/contacts'
import { Instagram, Mail } from 'lucide-react'
import { EVENT, SOCIAL } from '../data/siteContent'
import Divider from './Divider'
import { DecorLayer } from './Decor'
import { DECOR } from '../decorConfig'

// Ikon TikTok (lucide tidak menyediakannya).
function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <>
    <Divider />
    <footer className="relative isolate overflow-hidden px-4 py-16 md:py-20">
      <img
        src={ASSETS.footerBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-forest/90" />

      <DecorLayer items={DECOR.footer} />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
        <img
          src={ASSETS.logo}
          alt={`Logo ${EVENT.fullName}`}
          width={150}
          height={150}
          loading="lazy"
          className="h-[110px] w-[110px] md:h-[150px] md:w-[150px]"
        />
        <h2 className="mt-4 text-4xl leading-tight text-cream md:text-6xl">
          <span className="text-[1.16em]">{EVENT.nameMain}</span> <span className="text-gold">{EVENT.year}</span>
        </h2>
        <p className="mt-3 text-base leading-relaxed text-gold md:text-lg">{EVENT.tagline.join(', ')}</p>

        <h3 className="mt-14 text-4xl leading-tight text-cream md:text-6xl">Contact Us!</h3>

        {/* Flex-wrap + justify-center: 4 kartu sebaris di layar lebar, 2 kolom di tablet, 1 kolom di HP. */}
        <ul className="mt-8 flex w-full flex-wrap justify-center gap-4">
          {CONTACTS.map((c) => (
            <li
              key={c.code}
              className={`glass w-full rounded-[20px] p-5 text-center transition duration-300 hover:-translate-y-1 sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)] ${c.hoverClass}`}
            >
              <p className="text-xl font-semibold text-cream">{c.pic}</p>
              <p className={`mt-1 text-sm font-bold tracking-[0.2em] ${c.textClass}`}>{c.code}</p>
              <a
                href={`https://wa.me/${c.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp ${c.pic}, PIC ${c.code}`}
                className="mt-3 inline-flex min-h-[44px] items-center justify-center whitespace-nowrap rounded-full border border-cream/40 px-4 text-[15px] text-cream transition duration-200 hover:border-gold hover:bg-gold hover:text-forest lg:text-base"
              >
                {formatPhone(c.whatsapp)}
              </a>
            </li>
          ))}
        </ul>

        {/* Media sosial & email panitia. */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-gold/60 px-6 text-base text-cream transition duration-200 hover:-translate-y-1 hover:bg-gold hover:text-forest hover:shadow-gold-btn"
          >
            <Instagram size={20} /> {SOCIAL.instagramHandle}
          </a>
          <a
            href={SOCIAL.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-gold/60 px-6 text-base text-cream transition duration-200 hover:-translate-y-1 hover:bg-gold hover:text-forest hover:shadow-gold-btn"
          >
            <TikTokIcon /> {SOCIAL.tiktokHandle}
          </a>
          {SOCIAL.email && (
            <a
              href={`mailto:${SOCIAL.email}`}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-gold/60 px-6 text-base text-cream transition duration-200 hover:-translate-y-1 hover:bg-gold hover:text-forest hover:shadow-gold-btn"
            >
              <Mail size={20} /> {SOCIAL.email}
            </a>
          )}
        </div>

        <p className="mt-14 w-full border-t border-gold/20 pt-6 text-sm text-cream/70 md:text-base">
          &copy; {EVENT.year} {EVENT.nameMain} &mdash; Politeknik Keuangan Negara STAN. All rights reserved.
        </p>
      </div>
    </footer>
    </>
  )
}
