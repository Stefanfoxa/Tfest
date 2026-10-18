import { ASSETS } from '../lib/assets'
import { CONTACTS, formatPhone } from '../data/contacts'
import { Instagram, Mail } from 'lucide-react'
import { EVENT, SOCIAL } from '../data/siteContent'
import Divider from './Divider'

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

      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
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

        <h3 className="mt-14 text-3xl leading-tight text-cream md:text-5xl">Contact Us!</h3>

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
                className="mt-3 inline-flex min-h-[44px] items-center justify-center rounded-full border border-cream/40 px-5 text-base text-cream transition duration-200 hover:bg-cream hover:text-forest"
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
