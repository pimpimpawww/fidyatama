const navLinks = [
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Proyek', href: '#portfolio' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Kontak', href: '#kontak' },
]

export default function Footer() {
  return (
    <footer className="bg-[#2a2a27] py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <p className="text-4xl md:text-5xl font-black tracking-widest text-white">FIDYATAMA</p>
        <p className="text-sm text-[#9a9a8e] tracking-wider mt-1">Design & Build Contractor</p>

        <div className="w-16 h-px bg-white/10 mx-auto my-6" />

        <p className="text-[#9a9a8e] text-sm mb-1">
          <i className="fas fa-map-marker-alt mr-2 text-[#7a8c5e]" />
          Jl. Karimata No. 6, Mulyoharjo, Kab. Pemalang, Jawa Tengah
        </p>
        <p className="text-[#9a9a8e] text-sm mb-6">
          <i className="fab fa-whatsapp mr-2 text-[#7a8c5e]" />
          081 5672 0578 (Heri Fidya - Project Manager)
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-xs text-[#5a5a52] mb-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <p className="text-[#3a3a35] text-xs">&copy; 2026 Fidyatama. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
