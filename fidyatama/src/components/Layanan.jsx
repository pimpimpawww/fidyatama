const services = [
  {
    title: 'Jasa Bangun Rumah Tinggal',
    desc: 'Pembangunan rumah tinggal dari pondasi hingga finishing sesuai desain.',
    icon: 'fa-home',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&q=80',
    isNew: false,
  },
  {
    title: 'Renovasi & Pengembangan Bangunan',
    desc: 'Renovasi total maupun parsial untuk memperbarui tampilan dan fungsi bangunan.',
    icon: 'fa-tools',
    img: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&q=80',
    isNew: false,
  },
  {
    title: 'Pembangunan Gedung & Gudang',
    desc: 'Konstruksi gedung komersial dan gudang industri skala menengah hingga besar.',
    icon: 'fa-building',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80',
    isNew: false,
  },
  {
    title: 'Pembangunan Pabrik & Bangunan Industri',
    desc: 'Konstruksi fasilitas industri dan pabrik dengan standar keamanan tinggi.',
    icon: 'fa-industry',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80',
    isNew: false,
  },
  {
    title: 'Sondir & Pengukuran Tanah',
    desc: 'Uji daya dukung tanah (sondir) dan pengukuran lahan sebelum konstruksi dimulai.',
    icon: 'fa-drafting-compass',
    img: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=400&q=80',
    isNew: true,
  },
]

function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-[#ddddd6] hover:shadow-md transition-shadow duration-300 group relative">
      {service.isNew && (
        <div className="absolute top-3 right-3 z-10 bg-[#7a8c5e] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
          BARU
        </div>
      )}
      <div className="relative h-44 overflow-hidden">
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
          Kami menyediakan berbagai layanan konstruksi dan perencanaan bangunan dengan standar kualitas tinggi.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {services.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>

      </div>
    </section>
  )
}
