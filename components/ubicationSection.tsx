"use client"

export default function UbicacionSection() {
  return (
    <section id="ubicacion" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center">
          Ubicación
        </h2>
        <div
          className="relative w-full rounded-xl overflow-hidden shadow-md"
          style={{ height: "450px" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5717.731470200766!2d-68.42933860056434!3d-31.557556466152693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x968114aa76d82f1b%3A0x11414177b6329d3e!2s9%20de%20Julio%2C%20San%20Juan!5e0!3m2!1ses!2sar!4v1741315519214!5m2!1ses!2sar&center=-31.557556466152693,-68.42933860056434"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
