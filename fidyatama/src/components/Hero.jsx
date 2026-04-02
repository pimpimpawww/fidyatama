const WA_LINK =
  'https://wa.me/628156720578?text=Halo%20Pak%20Heri%2C%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20project%20di%20Fidyatama.'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80"
          alt="Modern Luxury House"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-40">
        <p className="text-sm font-semibold tracking-[0.3em] text-gray-300 uppercase mb-4">
          Design & Build Contractor
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight max-w-2xl mb-6">
          Build with Trust,
          <br />
          <span className="text-gray-300">Delivery with Quality</span>
        </h1>
        <p className="text-gray-300 text-base md:text-lg max-w-lg mb-10 leading-relaxed">
          Design & Build Contractor yang menyediakan layanan perencanaan dan
          pelaksanaan pembangunan secara profesional, amanah, dan bergaransi.
        </p>

        {/* CTA */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#2d2d2d] hover:bg-[#4a4a4a] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          <i className="fab fa-whatsapp text-green-400 text-lg" />
          Konsultasi Gratis
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <i className="fas fa-chevron-down text-white/50 text-xl" />
      </div>
    </section>
  )
}
