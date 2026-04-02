const WA_LINK =
  'https://wa.me/628156720578?text=Halo%20Pak%20Heri%2C%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20project%20di%20Fidyatama.'

const checklist = [
  'Kontraktor Terpercaya',
  'Tim Profesional dan Berpengalaman',
  'Anti Ribet',
  'Pengerjaan Tepat Waktu',
  'Transparan dalam Anggaran dan Proses',
  'Bergaransi',
]

export default function Keunggulan() {
  return (
    <section id="keunggulan" className="py-20 md:py-28 bg-[#f0f0eb]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Kolom Kiri */}
          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-[#7a8c5e] uppercase mb-3">
              Keunggulan Kami
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#1c1c1a] leading-tight mb-1">MENGAPA</h2>
            <h2 className="text-4xl md:text-5xl font-black text-[#1c1c1a] mb-1">Memilih</h2>
            <h2 className="text-4xl md:text-5xl font-black text-[#1c1c1a] mb-2">FIDYATAMA</h2>
            <p className="text-sm text-[#5a5a52] mb-10">Design & Build Contractor</p>

            <ul className="space-y-5">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-[#1c1c1a] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-check text-white text-xs" />
                  </div>
                  <span className="text-[#1c1c1a] font-semibold text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom Kanan: Contact Cards */}
          <div className="flex flex-col gap-5">

            {/* Card Lokasi */}
            <div className="bg-white rounded-xl p-6 border border-[#ddddd6] flex items-start gap-5">
              <div className="w-14 h-14 bg-[#1c1c1a] rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="fas fa-map-marker-alt text-white text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-[#1c1c1a] text-base mb-1">Area Pemalang</h4>
                <p className="text-[#5a5a52] text-sm">Jl. Karimata No. 6</p>
                <p className="text-[#5a5a52] text-sm">Mulyoharjo, Kab. Pemalang</p>
              </div>
            </div>

            {/* Card WhatsApp */}
            <div className="bg-white rounded-xl p-6 border border-[#ddddd6] flex items-start gap-5">
              <div className="w-14 h-14 bg-[#1c1c1a] rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="fab fa-whatsapp text-white text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-[#1c1c1a] text-base mb-1">WhatsApp</h4>
                <p className="text-[#5a5a52] text-sm">081 5672 0578</p>
                <p className="text-[#5a5a52] text-sm">CP. Heri</p>
              </div>
            </div>

            {/* Contact Person Card */}
            <div className="bg-[#1c1c1a] rounded-xl p-6 shadow-lg text-white">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 bg-[#7a8c5e] rounded-full flex items-center justify-center text-2xl font-black">
                  H
                </div>
                <div>
                  <h4 className="font-bold text-lg">Heri Fidya</h4>
                  <p className="text-gray-400 text-sm">Project Manager</p>
                  <p className="text-gray-400 text-xs">Area Pemalang</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm mb-5">
                <i className="fas fa-phone text-xs" />
                <span>081 5672 0578</span>
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#7a8c5e] hover:bg-[#6a7a50] text-white font-semibold py-3 rounded-xl transition-colors duration-300"
              >
                <i className="fab fa-whatsapp text-lg" />
                Hubungi via WhatsApp
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
