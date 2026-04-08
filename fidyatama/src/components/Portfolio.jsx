import Carousel from './Carousel'

const WA_LINK =
  'https://wa.me/628156720578?text=Halo%20Pak%20Heri%2C%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20project%20di%20Fidyatama.'

const photos = [
  { src: '/images/portofolio-1.jpeg', alt: 'Portofolio Fidyatama 1' },
  { src: '/images/portofolio-2.jpg',  alt: 'Portofolio Fidyatama 2' },
  { src: '/images/portofolio-3.jpg',  alt: 'Portofolio Fidyatama 3' },
  { src: '/images/portofolio-4.jpg',  alt: 'Portofolio Fidyatama 4' },
  { src: '/images/portofolio-5.jpg',  alt: 'Portofolio Fidyatama 5' },
  { src: '/images/portofolio-6.jpg',  alt: 'Portofolio Fidyatama 6' },
  { src: '/images/portofolio-7.jpeg', alt: 'Portofolio Fidyatama 7' },
]

function PhotoCard({ photo }) {
  return (
    <div className="rounded-xl overflow-hidden group cursor-pointer">
      <div className="relative h-64 overflow-hidden">
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
          Hasil Nyata di Lapangan
        </p>
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-[#1c1c1a]">
            Portofolio<br />Proyek Kami
          </h2>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-[#1c1c1a] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#2a2a27] transition-colors"
          >
            Diskusi Proyek <i className="fas fa-arrow-right text-xs" />
          </a>
        </div>

        <Carousel
          slides={photos}
          autoplayDelay={2500}
          renderSlide={(p) => <PhotoCard photo={p} />}
        />

        <div className="mt-8 text-center md:hidden">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1c1c1a] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#2a2a27] transition-colors"
          >
            Diskusi Proyek <i className="fas fa-arrow-right text-xs" />
          </a>
        </div>

      </div>
    </section>
  )
}
