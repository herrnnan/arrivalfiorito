"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Home, UtensilsCrossed, Droplet, Lock, Wifi, Tv } from "lucide-react"
import { EnhancedServiceCard } from "@/components/enhanced-service-card"

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  const services = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "Departamento Equipado",
      description: "Cocina, baño, dos dormitorios y capacidad para descansar cómodamente.",
      color: "from-amber-500/20 to-amber-500/5",
    },
    {
      icon: <UtensilsCrossed className="h-8 w-8" />,
      title: "Quincho",
      description: "Con parrillero móvil para tus reuniones y comidas al aire libre.",
      color: "from-orange-500/20 to-orange-500/5",
    },
    {
      icon: <Droplet className="h-8 w-8" />,
      title: "Pileta (4 x 10 m)",
      description: "Ideal para refrescarte y relajarte durante tu estadía.",
      color: "from-blue-500/20 to-blue-500/5",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Privacidad y Confort",
      description: "Espacios pensados para que disfrutes tu estadía con familia o amigos.",
      color: "from-emerald-500/20 to-emerald-500/5",
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Internet Wi-Fi",
      description: "Conexión a internet de alta velocidad en todas las áreas del alojamiento.",
      color: "from-indigo-500/20 to-indigo-500/5",
    },
    {
      icon: <Tv className="h-8 w-8" />,
      title: "TV y Equipo de Audio",
      description: "Entretenimiento con televisión y sistema de audio para disfrutar durante tu estadía.",
      color: "from-rose-500/20 to-rose-500/5",
    },
  ]

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
    <section id="servicios" className="py-20 md:py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent opacity-50" />
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
            Nuestros Servicios
          </motion.h2>
          <motion.p className="text-muted-foreground text-lg max-w-3xl mx-auto" variants={titleVariants}>
            Disfruta de todas las comodidades que Arrival Fiorito tiene para ti
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <EnhancedServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
              accentColor={service.color}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

