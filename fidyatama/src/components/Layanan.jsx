import Carousel from './Carousel'

const services = [
  {
    title: 'Jasa Bangun Rumah Tinggal',
    desc: 'Pembangunan rumah impian dari nol dengan konsep desain fungsional, modern, dan sesuai karakter penghuninya.',
    icon: 'fa-home',
    img: '/images/layanan%20rumah.jpg',
    isNew: false,
  },
  {
    title: 'Renovasi & Pengembangan Bangunan',
    desc: 'Transformasi dan peningkatan kualitas bangunan lama menjadi lebih segar, kokoh, dan bernilai tinggi.',
    icon: 'fa-tools',
    img: '/images/layanan%20renovasi.jpg',
    isNew: false,
  },
  {
    title: 'Pembangunan Gedung, Gudang & Pabrik',
    desc: 'Konstruksi skala besar untuk kebutuhan bisnis dan industri dengan standar struktur yang kuat dan efisiensi ruang maksimal.',
    icon: 'fa-building',
    img: '/images/layanan%20gedung.jpg',
    isNew: false,
  },
  {
    title: 'Jasa Demolisi (Penghancuran Bangunan)',
    desc: 'Pembongkaran bangunan lama secara total maupun parsial menggunakan metode yang aman, efektif, dan ramah lingkungan.',
    icon: 'fa-hammer',
    img: '/images/layanan%20demolisi.jpg',
    isNew: false,
  },
  {
    title: 'Sondir & Pengukuran Tanah',
    desc: 'Pemetaan lahan dan pengujian kekuatan tanah (Sondir) untuk menentukan jenis fondasi yang paling aman dan efisien.',
    icon: 'fa-drafting-compass',
    img: '/images/layanan%20sondir.jpg',
    isNew: true,
  },
]

function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-[#ddddd6] hover:shadow-md transition-shadow duration-300 group relative h-full">
      {service.isNew && (
        <div className="absolute top-3 right-3 z-10 bg-[#7a8c5e] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
          BARU
        </div>
      )}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <i className={`fas ${service.icon} text-white text-sm`} />
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-[#1c1c1a] text-sm mb-1">{service.title}</h3>
        <p className="text-xs text-[#5a5a52] leading-relaxed">{service.desc}</p>
      </div>
    </div>
  )
}

export default function Layanan() {
  return (
    <section id="layanan" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-xs font-bold tracking-[0.3em] text-[#7a8c5e] uppercase mb-2">
          Apa yang Kami Kerjakan
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-[#1c1c1a] mb-4">Layanan Kami</h2>
        <p className="text-[#5a5a52] max-w-xl mb-12">
          Solusi lengkap konstruksi — dari pengujian tanah, pembangunan, renovasi, hingga demolisi bangunan.
        </p>

        <Carousel
          slides={services}
          autoplayDelay={3500}
          renderSlide={(s) => <ServiceCard service={s} />}
        />

      </div>
    </section>
  )
}
