"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import * as Dialog from "@radix-ui/react-dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { Play, X, ChevronLeft, ChevronRight, ImageIcon, Film } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"

// Sample media items - replace with actual content
const mediaItems = [
  {
    type: "image",
    src: "/exterior.jpg?height=600&width=800&text=Exterior",
    alt: "Vista exterior",
    thumbnail: "/exterior.jpg?height=300&width=400&text=Exterior",
  },
  {
    type: "image",
    src: "/habitacion.jpg?height=600&width=800&text=Habitacion",
    alt: "Habitacion",
    thumbnail: "/habitacion.jpg?height=300&width=400&text=Habitacion",
  },
  {
    type: "image",
    src: "/collage.jpg?height=600&width=800&text=Collage",
    alt: "Collage",
    thumbnail: "/collage.jpg?height=300&width=400&text=Collage",
  },
  {
    type: "image",
    src: "/dormitorio.jpg?height=600&width=800&text=Dormitorio",
    alt: "Dormitorio",
    thumbnail: "/dormitorio.jpg?height=300&width=400&text=Dormitorio",
  },
  {
    type: "image",
    src: "cocina.jpg?height=600&width=800&text=Cocina",
    alt: "Cocina",
    thumbnail: "/cocina.jpg?height=300&width=400&text=Cocina",
  },
  {
    type: "image",
    src: "comedor.jpg?height=600&width=800&text=Comedor",
    alt: "Comedor",
    thumbnail: "/comedor.jpg?height=300&width=400&text=Comedor",
  },
  {
    type: "video",
    src: "/fioritovideo.mp4", // Replace with actual video URL
    thumbnail: "/pileta.jpg?height=300&width=400&text=Pileta",
    alt: "Pileta",
  },
]

export function MediaGallery() {
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [emblaRef] = useEmblaCarousel({ loop: false, align: "start" })
  const videoRef = useRef<HTMLVideoElement>(null)

  const openLightbox = (index: number) => {
    setSelectedIndex(index)
  }

  const closeLightbox = () => {
    setSelectedIndex(-1)
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

  const navigateLightbox = (direction: "prev" | "next") => {
    if (selectedIndex === -1) return

    if (direction === "prev") {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : mediaItems.length - 1))
    } else {
      setSelectedIndex((prev) => (prev < mediaItems.length - 1 ? prev + 1 : 0))
    }
  }

  const selectedItem = selectedIndex >= 0 ? mediaItems[selectedIndex] : null

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Galería de Medios
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Explora nuestras instalaciones a través de imágenes y videos
        </p>
      </div>

      {/* Carousel for thumbnails */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 py-4">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="relative flex-none w-[280px] h-[200px] rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={item.thumbnail || "/placeholder.svg"}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                {item.type === "video" ? (
                  <div className="bg-white/80 rounded-full p-3">
                    <Play className="h-8 w-8 text-primary" />
                  </div>
                ) : (
                  <div className="bg-white/80 rounded-full p-3">
                    <ImageIcon className="h-8 w-8 text-primary" />
                  </div>
                )}
              </div>
              <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                {item.type === "video" ? (
                  <>
                    <Film className="h-3 w-3" />
                    <span>Video</span>
                  </>
                ) : (
                  <>
                    <ImageIcon className="h-3 w-3" />
                    <span>Imagen</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox con la API de Radix UI */}
      <Dialog.Root open={selectedIndex >= 0} onOpenChange={(open) => !open && closeLightbox()}>
        {/* Opcional: Overlay para oscurecer el fondo */}
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />

        <Dialog.Content className="max-w-5xl w-[90vw] h-[80vh] p-0 bg-black/95 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Título oculto para accesibilidad */}
          <VisuallyHidden>
            <Dialog.Title>Lightbox de medios</Dialog.Title>
          </VisuallyHidden>

          <div className="relative w-full h-full flex items-center justify-center">
            {selectedItem?.type === "image" ? (
              <div className="relative w-full h-full">
                <Image
                  src={selectedItem.src || "/placeholder.svg"}
                  alt={selectedItem.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <video ref={videoRef} src={selectedItem?.src} controls className="max-w-full max-h-full" autoPlay />
            )}

            <button
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              onClick={() => navigateLightbox("prev")}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              onClick={() => navigateLightbox("next")}
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/50 py-2">
              {selectedItem?.alt}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  )
}
