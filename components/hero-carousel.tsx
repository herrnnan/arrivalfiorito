"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Link from "next/link"

const carouselImages = [
  {
    src: "/exterior.jpg?height=800&width=1200&text=Vista+Principal",
    alt: "Vista principal de Arrival Fiorito",
  },
  {
    src: "/comedor.jpg?height=800&width=1200&text=Comedor",
    alt: "Comedor",
  },
  {
    src: "/dormitorio.jpg?height=800&width=1200&text=Dormitorio",
    alt: "Dormitorio",
  },
  {
    src: "/fiorito8.jpg?height=800&width=1200&text=Pileta",
    alt: "Pileta",
  },
]

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)

    // Auto-play functionality
    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext()
      } else {
        emblaApi.scrollTo(0)
      }
    }, 5000) // Change slide every 5 seconds

    return () => {
      emblaApi.off("select", onSelect)
      clearInterval(autoplay)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0 z-10 bg-black/40 flex items-center justify-center">
        <div className="container text-center text-white space-y-4 px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-up">
            Bienvenidos a Arrival Fiorito
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto animate-fade-up animation-delay-100">
            Un lugar para disfrutar en familia o con amigos, rodeado de naturaleza
          </p>
          <div className="flex justify-center gap-4 pt-4 animate-fade-up animation-delay-200">
          <Button asChild size="lg" className="rounded-full">
            <a
              href="https://wa.me/5492644721518"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reservar Ahora
            </a>
          </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full bg-transparent text-white border-white hover:bg-white/20 hover:text-white"
            >
              <Link href="#galeria">Ver Galería</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="embla overflow-hidden h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {carouselImages.map((image, index) => (
            <div key={index} className="embla__slide flex-[0_0_100%] h-full relative">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Anterior</span>
      </button>

      <button
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Siguiente</span>
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${index === selectedIndex ? "bg-white" : "bg-white/50"}`}
            onClick={() => scrollTo(index)}
          >
            <span className="sr-only">Slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

