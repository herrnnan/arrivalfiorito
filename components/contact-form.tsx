"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, Phone, Clock, PhoneIcon as WhatsApp } from "lucide-react"
import { Button } from "@/components/ui/button"
// Asegúrate de importar correctamente los componentes Label, Input, Textarea si los necesitas; en este caso, ya no usamos el formulario.

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export function ContactSection() {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-6">
        {/* Título */}
        <motion.div
          className="text-center space-y-4 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Contáctanos
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Estamos disponibles para brindarte más información y ayudarte a planificar tu próxima estadía.
          </motion.p>
        </motion.div>

        {/* Grid de 2 columnas en pantallas grandes, alineadas al tope */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Columna Izquierda: Iframe de Google Maps */}
          <motion.div
            className="rounded-xl overflow-hidden shadow-lg border border-border/50 w-full"
            style={{ height: "500px" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
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
          </motion.div>

          {/* Columna Derecha: Información de Contacto */}
          <motion.div
            className="bg-background rounded-xl p-6 shadow-lg border border-border/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold mb-6">Información de Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Dirección</p>
                  <p className="text-muted-foreground">
                    Calle Proyectada - Lote 4 - Colonia Fiorito - 9 de Julio - San Juan, Argentina
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Teléfono</p>
                  <p className="text-muted-foreground">WhatsApp: +54 9 264 506 0201</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Horario de Atención</p>
                  <p className="text-muted-foreground">Todos los días de 9:00 a 21:00</p>
                </div>
              </div>
              <Button asChild className="w-full mt-4 bg-green-500 hover:bg-green-600">
                <Link
                  href="https://wa.me/c/5492645060201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <WhatsApp className="h-5 w-5" />
                  <span>Contactar por WhatsApp</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
