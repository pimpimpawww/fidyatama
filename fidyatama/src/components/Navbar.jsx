import { useState, useEffect } from 'react'

const links = [
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Proyek', href: '#portfolio' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Kontak', href: '#kontak' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scrolled: cream bg, dark text | Top: transparent, white text
  const navBg = scrolled ? 'bg-[#f0f0eb] shadow-[0_2px_20px_rgba(0,0,0,0.08)]' : 'bg-transparent'
  const textColor = scrolled ? 'text-[#1c1c1a]' : 'text-white'
  const hoverColor = scrolled ? 'hover:text-[#7a8c5e]' : 'hover:text-gray-300'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span className={`text-xl font-black tracking-widest transition-colors duration-300 ${textColor}`}>
            FIDYATAMA
          </span>
          <span className={`text-[10px] font-light tracking-wider transition-colors duration-300 ${scrolled ? 'text-[#5a5a52]' : 'text-white/80'}`}>
            Design & Build Contractor
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={`transition-colors duration-300 ${textColor} ${hoverColor}`}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={`md:hidden text-2xl focus:outline-none transition-colors duration-300 ${textColor}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#f0f0eb] border-t border-[#ddddd6] px-6 py-4 flex flex-col gap-4 text-sm font-medium text-[#1c1c1a]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-[#7a8c5e] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
