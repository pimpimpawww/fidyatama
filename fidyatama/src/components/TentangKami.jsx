const stats = [
  { value: '50+', label: 'Proyek Selesai' },
  { value: '8+', label: 'Tahun Pengalaman' },
  { value: '100%', label: 'Bergaransi' },
]

const misi = [
  'Memberikan layanan berkualitas profesional dan transparan.',
  'Menyelesaikan setiap proyek tepat waktu dan sesuai anggaran.',
  'Menggunakan material terbaik dengan harga yang kompetitif.',
  'Membangun hubungan jangka panjang berbasis kepercayaan.',
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
              <strong className="text-[#1c1c1a]">FIDYATAMA Design, Build & Demolish Contractor</strong> adalah
              perusahaan kontraktor yang bergerak di bidang jasa perencanaan (design) dan pelaksanaan
              (build) pembangunan untuk berbagai jenis bangunan, mulai dari rumah tinggal, gedung,
              gudang, hingga pabrik.
            </p>
            <p className="text-[#5a5a52] leading-relaxed mb-5">
              Kami hadir sebagai mitra terpercaya yang menghadirkan proses pembangunan yang amanah,
              profesional, anti ribet, tepat, dan bergaransi. Dengan dukungan tim berpengalaman,
              setiap proyek dikerjakan dengan standar mutu yang terukur, perencanaan matang, serta
              pengawasan konsisten.
            </p>
            <p className="text-[#5a5a52] leading-relaxed">
              Kepuasan dan kepercayaan klien adalah prioritas utama kami dalam setiap langkah pekerjaan.
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
                Menjadi perusahaan Design, Build & Demolish Contractor yang terpercaya dan terkemuka dalam
                kualitas, ketepatan waktu, serta kepuasan klien di seluruh Indonesia.
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
              <ul className="text-[#5a5a52] text-sm space-y-2">
                {misi.map((m) => (
                  <li key={m} className="flex items-start gap-2">
                    <i className="fas fa-check text-[#7a8c5e] mt-0.5 text-xs" />
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
