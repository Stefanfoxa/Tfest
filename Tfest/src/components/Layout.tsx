import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { ASSETS } from '../lib/assets'

// Pindah halaman: kembali ke atas. Link berhash (mis. /#timeline): gulir halus ke bagian tersebut.
function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash, key])
  return null
}

export default function Layout() {
  return (
    <div className="relative isolate flex min-h-screen flex-col bg-forest">
      {/* Latar tetap: position fixed (bukan background-attachment) supaya juga jalan di iPhone/Android.
          Konten bergulir di atasnya, latar tidak ikut bergerak. */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <img src={ASSETS.heroBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-batik opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(241,154,32,0.22),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(241,154,32,0.12),transparent_55%)]" />
        <div className="animate-floaty absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="animate-floaty absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      </div>
      <ScrollManager />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
