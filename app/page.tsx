import Link from "next/link"
import { PhoneIcon as WhatsApp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServicesSection } from "@/components/services-section"
import { HeroCarousel } from "@/components/hero-carousel"
import { MediaGallery } from "@/components/media-gallery"
import { ContactSection } from "@/components/contact-section"
import { StructuredData } from "@/components/structured-data"

export default function Home() {
  return (
    <>
      <StructuredData />
      <div className="flex min-h-screen flex-col">
        {/* Header */}
        <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-primary">Arrival Fiorito</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="#inicio"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Inicio
              </Link>
              <Link
                href="#servicios"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Servicios
              </Link>
              <Link
                href="#galeria"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Galería
              </Link>
              <Link
                href="#contacto"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Contacto
              </Link>
            </nav>
            <Button asChild className="hidden md:flex">
              <a
                href="https://wa.me/5492645060201"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservar Ahora
              </a>
            </Button>

            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </header>

        <main className="flex-1">
          {/* Hero Carousel Section */}
          <section id="inicio" className="relative">
            <HeroCarousel />
          </section>

          {/* Intro Section */}
          <section className="py-16 md:py-24 bg-muted/50">
            <div className="container px-4 md:px-6">
              <div className="grid gap-10 lg:grid-cols-2 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Tu Escape Perfecto
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Arrival Fiorito te ofrece un espacio único para disfrutar en familia o con amigos,
                    rodeado de naturaleza y a solo 10 minutos de la Capital Sanjuanina.
                  </p>
                  <p className="text-muted-foreground">
                    Ubicado cerca del aeropuerto y con fácil acceso, nuestro alojamiento combina la
                    tranquilidad del entorno natural con todas las comodidades que necesitas para una
                    estadía inolvidable.
                  </p>
                  <div className="pt-4">
                    <Button asChild>
                      <Link href="#galeria">Conoce Nuestras Instalaciones</Link>
                    </Button>
                  </div>
                </div>
                {/* Imagen de ejemplo */}
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="collage.jpg"
                    alt="Collage Arrival Fiorito"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <ServicesSection />

          {/* Media Gallery Section */}
          <section id="galeria" className="py-16 md:py-24 bg-muted/30">
            <div className="container px-4 md:px-6">
              <MediaGallery />
            </div>
          </section>

          {/* Contact & Ubicación Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <footer className="border-t py-12 md:py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Arrival Fiorito</h3>
                <p className="text-sm text-muted-foreground">
                  Tu escape perfecto en San Juan, con todas las comodidades para disfrutar en familia
                  o con amigos.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#inicio"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#servicios"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Servicios
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#galeria"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Galería
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#contacto"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Contacto
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                <address className="not-italic text-sm text-muted-foreground space-y-2">
                  <p>Calle Proyectada - Lote 4</p>
                  <p>Colonia Fiorito - 9 de Julio</p>
                  <p>San Juan, Argentina</p>
                  <p className="pt-2">WhatsApp: +54 9 264 506 0201</p>
                </address>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Arrival Fiorito. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>

        {/* WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <Link
            href="https://wa.me/5492645060201"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
          >
            <WhatsApp className="h-7 w-7" />
            <span className="sr-only">Contactar por WhatsApp</span>
          </Link>
        </div>
      </div>
    </>
  )
}
