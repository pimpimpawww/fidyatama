const stats = [
  { value: '50+', label: 'Proyek Selesai' },
  { value: '8+', label: 'Tahun Pengalaman' },
  { value: '100%', label: 'Bergaransi' },
]

const misi = [
  'Memberikan layanan konstruksi dan pembongkaran yang profesional, transparan, dan mengutamakan keselamatan kerja.',
  'Menghadirkan solusi pembangunan berbasis data teknis melalui pengujian tanah yang akurat.',
  'Menjaga kepercayaan klien melalui hasil kerja yang presisi dan tanggung jawab penuh di setiap fase proyek.',
  'Mengembangkan tim ahli yang kompeten dalam menangani teknologi konstruksi maupun alat berat untuk demolisi.',
]

export default function TentangKami() {
  return (
    <section id="tentang" className="py-20 md:py-28 bg-[#f0f0eb]">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-xs font-bold tracking-[0.3em] text-[#7a8c5e] uppercase mb-2">Siapa Kami</p>
        <h2 className="text-3xl md:text-4xl font-black text-[#1c1c1a] mb-12">Tentang Kami</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Kolom Kiri */}
          <div>
            <p className="text-[#5a5a52] leading-relaxed mb-5">
              <strong className="text-[#1c1c1a]">FIDYATAMA Design, Build &amp; Demolish Contractor</strong> adalah
              perusahaan kontraktor terintegrasi yang melayani jasa perencanaan (design), pelaksanaan
              pembangunan (build), hingga pembongkaran bangunan (demolish). Kami menyediakan solusi
              lengkap untuk berbagai jenis properti, mulai dari rumah tinggal, gedung, gudang, hingga
              kawasan industri dan pabrik.
            </p>
            <p className="text-[#5a5a52] leading-relaxed mb-5">
              Kami hadir sebagai mitra strategis bagi klien yang menginginkan proses konstruksi yang
              amanah, profesional, dan Anti Ribet. Keunggulan kami terletak pada layanan menyeluruh:
              mulai dari pengujian teknis tanah (Sondir) untuk memastikan keamanan fondasi, desain
              arsitektur yang estetis, hingga eksekusi pembangunan atau penghancuran struktur lama
              secara aman dan terukur.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {stats.map((s) => (
                <div key={s.label} className="text-center p-4 bg-white rounded-xl border border-[#ddddd6]">
                  <p className="text-3xl font-black text-[#1c1c1a]">{s.value}</p>
                  <p className="text-xs text-[#5a5a52] mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Visi & Misi */}
          <div className="flex flex-col gap-6">

            {/* Visi */}
            <div className="bg-white rounded-xl p-7 border border-[#ddddd6]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1c1c1a] rounded-lg flex items-center justify-center">
                  <i className="fas fa-eye text-white text-sm" />
                </div>
                <h3 className="text-lg font-bold text-[#1c1c1a]">Visi Kami</h3>
              </div>
              <p className="text-[#5a5a52] leading-relaxed text-sm">
                Menjadi perusahaan Design, Build &amp; Demolish Contractor terdepan yang unggul dalam
                inovasi, ketepatan waktu, dan integritas kerja demi kepuasan klien yang berkelanjutan.
              </p>
            </div>

            {/* Misi */}
            <div className="bg-white rounded-xl p-7 border border-[#ddddd6]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1c1c1a] rounded-lg flex items-center justify-center">
                  <i className="fas fa-bullseye text-white text-sm" />
                </div>
                <h3 className="text-lg font-bold text-[#1c1c1a]">Misi Kami</h3>
              </div>
              <ul className="text-[#5a5a52] text-sm space-y-3">
                {misi.map((m) => (
                  <li key={m} className="flex items-start gap-2">
                    <i className="fas fa-check text-[#7a8c5e] mt-0.5 text-xs flex-shrink-0" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
