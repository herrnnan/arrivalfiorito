import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Arrival Fiorito - Alojamiento en San Juan, Argentina",
  description:
    "Arrival Fiorito te ofrece un espacio único para disfrutar en familia o con amigos, rodeado de naturaleza y a solo 10 minutos de la Capital Sanjuanina.",
  keywords: "alojamiento, San Juan, Argentina, pileta, quincho, vacaciones, descanso, turismo",
  authors: [{ name: "Arrival Fiorito" }],
  creator: "Arrival Fiorito",
  publisher: "Arrival Fiorito",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Arrival Fiorito - Tu escape perfecto en San Juan",
    description:
      "Alojamiento con todas las comodidades en un entorno natural privilegiado. Disfrutá de la tranquilidad y la naturaleza.",
    url: "https://arrivalfiorito.netlify.app",
    siteName: "Arrival Fiorito",
    images: [
      {
        url: "https://arrivalfiorito.netlify.app/pileta.jpg",
        width: 1200,
        height: 630,
        alt: "Arrival Fiorito - Pileta y naturaleza",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arrival Fiorito - Tu escape perfecto en San Juan",
    description:
      "Alojamiento con todas las comodidades en un entorno natural privilegiado. Disfrutá de la tranquilidad y la naturaleza.",
    images: ["https://arrivalfiorito.netlify.app/pileta.jpg"],
    creator: "@ArrivalFiorito",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://arrivalfiorito.netlify.app",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        {/* Favicon SVG */}
        <link rel="icon" type="image/svg+xml" href="/house-svgrepo-com.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
