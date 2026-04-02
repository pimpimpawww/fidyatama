const WA_LINK =
  'https://wa.me/628156720578?text=Halo%20Pak%20Heri%2C%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20project%20di%20Fidyatama.'

export default function Kontak() {
  return (
    <section id="kontak" className="py-20 md:py-28 bg-[#1c1c1a]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xs font-bold tracking-[0.3em] text-[#7a8c5e] uppercase mb-4">
          Mulai Proyek Anda
        </p>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
          Siap Membangun Bersama Kami?
        </h2>
        <p className="text-[#9a9a8e] max-w-xl mx-auto mb-10 leading-relaxed">
          Konsultasikan kebutuhan bangunan Anda dengan tim kami. Gratis, tanpa komitmen, dan kami
          siap membantu dari perencanaan hingga selesai.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#7a8c5e] hover:bg-[#6a7a50] text-white font-bold px-10 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 text-lg shadow-lg"
        >
          <i className="fab fa-whatsapp text-xl" />
          Konsultasi Gratis Sekarang
        </a>
      </div>
    </section>
  )
}
