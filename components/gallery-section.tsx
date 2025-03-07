"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { VideoPlayer } from "./video-player"

// Aquí reemplazas los items de la galería con tus imágenes y tu video
const galleryItems = [
  {
    type: "image",
    src: "/fiorito1.jpg",
    alt: "Vista 1 de Arrival Fiorito",
    caption: "Vista 1",
  },
  {
    type: "image",
    src: "/fiorito2.jpg",
    alt: "Vista 2 de Arrival Fiorito",
    caption: "Vista 2",
  },
  {
    type: "image",
    src: "/fiorito3.jpg",
    alt: "Vista 3 de Arrival Fiorito",
    caption: "Vista 3",
  },
  {
    type: "image",
    src: "/fiorito4.jpg",
    alt: "Vista 4 de Arrival Fiorito",
    caption: "Vista 4",
  },
  {
    type: "image",
    src: "/fiorito5.jpg",
    alt: "Vista 5 de Arrival Fiorito",
    caption: "Vista 5",
  },
  {
    type: "image",
    src: "/fiorito6.jpg",
    alt: "Vista 6 de Arrival Fiorito",
    caption: "Vista 6",
  },
  {
    type: "image",
    src: "/fiorito7.jpg",
    alt: "Vista 7 de Arrival Fiorito",
    caption: "Vista 7",
  },
  {
    type: "image",
    src: "/fiorito8.jpg",
    alt: "Vista 8 de Arrival Fiorito",
    caption: "Vista 8",
  },
  {
    // Ejemplo de video local
    type: "video",
    // Usamos una imagen como thumbnail. Podrías usar una de las fioritoX.jpg o crear otra.
    thumbnail: "/fiorito1.jpg",
    src: "/fioritovideo.mp4",
    alt: "Video Tour de Arrival Fiorito",
    caption: "Recorrido Virtual",
  },
]

export function GallerySection() {
  const [viewerOpen, setViewerOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Carrusel principal
  const [mainViewportRef, emblaMainApi] = useEmblaCarousel({ skipSnaps: false })

  // Carrusel de miniaturas
  const [thumbViewportRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  })

  // Función para navegar al hacer clic en una miniatura
  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
      setSelectedIndex(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const scrollPrev = useCallback(() => emblaMainApi && emblaMainApi.scrollPrev(), [emblaMainApi])
  const scrollNext = useCallback(() => emblaMainApi && emblaMainApi.scrollNext(), [emblaMainApi])

  const openLightbox = (index: number) => {
    setSelectedIndex(index)
    setViewerOpen(true)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="galeria" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent opacity-50" />
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent" />

      <div className="container px-4 md:px-6 relative">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            variants={titleVariants}
          >
            Galería
          </motion.h2>
          <motion.p className="text-muted-foreground text-lg max-w-3xl mx-auto" variants={titleVariants}>
            Explora nuestras instalaciones y conoce todos los espacios de Arrival Fiorito
          </motion.p>
        </motion.div>

        {/* Gallery Grid for larger screens */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={item.type === "image" ? item.src : item.thumbnail ?? "/placeholder.svg"}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                {item.type === "video" && (
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-primary/80 rounded-full p-3">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-medium">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel for mobile */}
        <div className="md:hidden relative">
          <div className="overflow-hidden" ref={mainViewportRef}>
            <div className="flex">
              {galleryItems.map((item, index) => (
                <div key={index} className="relative min-w-full flex-[0_0_100%] aspect-[4/3]">
                  <Image
                    src={item.type === "image" ? item.src : item.thumbnail ?? "/placeholder.svg"}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => openLightbox(index)}
                        className="bg-primary/80 rounded-full p-3"
                      >
                        <Play className="h-8 w-8 text-white" />
                      </button>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white font-medium">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
            onClick={scrollNext}
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Thumbnails */}
          <div className="mt-4 overflow-hidden" ref={thumbViewportRef}>
            <div className="flex gap-2">
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative min-w-[25%] flex-[0_0_25%] aspect-[4/3] cursor-pointer rounded-md overflow-hidden",
                    selectedIndex === index ? "ring-2 ring-primary" : ""
                  )}
                  onClick={() => onThumbClick(index)}
                >
                  <Image
                    src={item.type === "image" ? item.src : item.thumbnail ?? "/placeholder.svg"}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <Play className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {viewerOpen && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <button
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            onClick={() => setViewerOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>

          <div className="w-full h-full max-w-5xl max-h-[80vh] relative">
            {galleryItems[selectedIndex].type === "image" ? (
              <div className="relative w-full h-full">
                <Image
                  src={galleryItems[selectedIndex].src || "/placeholder.svg"}
                  alt={galleryItems[selectedIndex].alt}
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <VideoPlayer src={galleryItems[selectedIndex].src} />
            )}
          </div>

          <button
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            onClick={() => {
              const newIndex = selectedIndex === 0 ? galleryItems.length - 1 : selectedIndex - 1
              setSelectedIndex(newIndex)
            }}
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            onClick={() => {
              const newIndex = selectedIndex === galleryItems.length - 1 ? 0 : selectedIndex + 1
              setSelectedIndex(newIndex)
            }}
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      )}
    </section>
  )
}
