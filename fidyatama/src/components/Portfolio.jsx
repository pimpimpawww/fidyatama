const WA_LINK =
  'https://wa.me/628156720578?text=Halo%20Pak%20Heri%2C%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20project%20di%20Fidyatama.'

const photos = [
  { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80', alt: 'Interior Modern Living Room', tall: true },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', alt: 'Eksterior Rumah Modern', tall: false },
  { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80', alt: 'Rumah Mewah Eksterior', tall: false },
  { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80', alt: 'Interior Dapur Modern', tall: false },
  { src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80', alt: 'Gedung Modern', tall: true },
  { src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80', alt: 'Rumah Minimalis', tall: false },
]

function PhotoItem({ photo }) {
  return (
    <div className={`rounded-xl overflow-hidden group cursor-pointer ${photo.tall ? 'item-tall' : ''}`}>
      <div className={`relative overflow-hidden ${photo.tall ? 'h-full min-h-[300px]' : 'h-48'}`}>
        <img
          src={photo.src}
          alt={photo.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
          <i className="fas fa-expand text-white opacity-0 group-hover:opacity-100 transition-opacity text-2xl" />
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-xs font-bold tracking-[0.3em] text-[#7a8c5e] uppercase mb-2">
          Hasil Karya Kami
        </p>
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-[#1c1c1a]">
            Portofolio<br />Design Kami
          </h2>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-[#1c1c1a] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#2a2a27] transition-colors"
          >
            See More Project <i className="fas fa-arrow-right text-xs" />
          </a>
        </div>

        <div className="portfolio-grid">
          {photos.map((p) => (
            <PhotoItem key={p.alt} photo={p} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1c1c1a] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#2a2a27] transition-colors"
          >
            See More Project <i className="fas fa-arrow-right text-xs" />
          </a>
        </div>

      </div>
    </section>
  )
}
