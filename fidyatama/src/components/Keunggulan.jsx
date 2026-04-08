const WA_LINK =
  'https://wa.me/628156720578?text=Halo%20Pak%20Heri%2C%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20project%20di%20Fidyatama.'

const checklist = [
  'One-Stop Solution: Bongkar, cek tanah, hingga bangun baru — satu kontraktor.',
  'Kontraktor Terpercaya dengan rekam jejak proyek yang solid.',
  'Tim Ahli & Profesional di bidang arsitektur, sipil, dan demolisi.',
  'Anti Ribet: Kami tangani semua detail teknis untuk Anda.',
  'Transparansi Anggaran tanpa biaya tersembunyi.',
  'Bergaransi: Jaminan kualitas di setiap pekerjaan.',
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
            <p className="text-sm text-[#5a5a52] mb-10">Design, Build & Demolish Contractor</p>

            <ul className="space-y-4">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#1c1c1a] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fas fa-check text-white text-xs" />
                  </div>
                  <span className="text-[#1c1c1a] font-medium text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom Kanan: Contact Cards */}
          <div className="flex flex-col gap-5">

            {/* Card Lokasi - klik ke Google Maps */}
            <a
              href="https://www.google.com/maps/place/KEDAI+KARIMATA/@-6.9096762,109.3865857,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6fdb004f5832e1:0x39cdd1c9750ff82d!8m2!3d-6.9096762!4d109.3865857!16s%2Fg%2F11x191_z6j?hl=id&entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 border border-[#ddddd6] flex items-start gap-5 hover:shadow-md transition-shadow duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 bg-[#1c1c1a] rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="fas fa-map-marker-alt text-white text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-[#1c1c1a] text-base mb-1">Office</h4>
                <p className="text-[#5a5a52] text-sm">Jl. Karimata No. 6, Perum Puri Praja Kencana</p>
                <p className="text-[#5a5a52] text-sm">Mulyoharjo, Pemalang, Jawa Tengah</p>
                <p className="text-[#7a8c5e] text-xs mt-1 flex items-center gap-1">
                  <i className="fas fa-external-link-alt text-[10px]" /> Buka di Google Maps
                </p>
              </div>
            </a>

            {/* Card WhatsApp - klik langsung ke WA */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 border border-[#ddddd6] flex items-start gap-5 hover:shadow-md transition-shadow duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 bg-[#1c1c1a] rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="fab fa-whatsapp text-white text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-[#1c1c1a] text-base mb-1">WhatsApp</h4>
                <p className="text-[#5a5a52] text-sm">081 5672 0578</p>
                <p className="text-[#5a5a52] text-sm">CP. Heri</p>
                <p className="text-[#7a8c5e] text-xs mt-1 flex items-center gap-1">
                  <i className="fas fa-external-link-alt text-[10px]" /> Chat Sekarang
                </p>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}
