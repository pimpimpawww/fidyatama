import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TentangKami from './components/TentangKami'
import Layanan from './components/Layanan'
import Keunggulan from './components/Keunggulan'
import Portfolio from './components/Portfolio'
import Kontak from './components/Kontak'
import Footer from './components/Footer'
import FloatingWA from './components/FloatingWA'

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <TentangKami />
      <Layanan />
      <Keunggulan />
      <Portfolio />
      <Kontak />
      <Footer />
      <FloatingWA />
    </div>
  )
}
