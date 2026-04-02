const WA_LINK =
  'https://wa.me/628156720578?text=Halo%20Pak%20Heri%2C%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20project%20di%20Fidyatama.'

export default function FloatingWA() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      title="Chat WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#7a8c5e] hover:bg-[#6a7a50] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
    >
      <i className="fab fa-whatsapp text-white text-2xl" />
    </a>
  )
}
