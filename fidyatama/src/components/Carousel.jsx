import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from 'react'

export default function Carousel({ slides, renderSlide, autoplayDelay = 3000 }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: autoplayDelay, stopOnInteraction: false }),
  ])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <div className="relative">
      {/* Viewport */}
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, i) => (
            <div key={i} className="flex-none w-full md:w-1/2 lg:w-1/3 px-2">
              {renderSlide(slide, i)}
            </div>
          ))}
        </div>
      </div>

      {/* Prev Button */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-9 h-9 bg-white border border-[#ddddd6] rounded-full shadow flex items-center justify-center hover:bg-[#f0f0eb] transition-colors"
        aria-label="Previous"
      >
        <i className="fas fa-chevron-left text-[#1c1c1a] text-xs" />
      </button>

      {/* Next Button */}
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-9 h-9 bg-white border border-[#ddddd6] rounded-full shadow flex items-center justify-center hover:bg-[#f0f0eb] transition-colors"
        aria-label="Next"
      >
        <i className="fas fa-chevron-right text-[#1c1c1a] text-xs" />
      </button>
    </div>
  )
}
