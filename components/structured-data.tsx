export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Arrival Fiorito",
    description:
      "Arrival Fiorito te ofrece un espacio único para disfrutar en familia o con amigos, rodeado de naturaleza y a solo 10 minutos de la Capital Sanjuanina.",
    url: "https://www.arrivalfiorito.com",
    telephone: "+5492645060201",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Proyectada - Lote 4 - Colonia Fiorito",
      addressLocality: "9 de Julio",
      addressRegion: "San Juan",
      postalCode: "5400",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-31.5375",
      longitude: "-68.5364",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "21:00",
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Pileta",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Quincho",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Wi-Fi",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "TV",
        value: true,
      },
    ],
    image: [
      "https://www.arrivalfiorito.com/images/exterior.jpg",
      "https://www.arrivalfiorito.com/images/pileta.jpg",
      "https://www.arrivalfiorito.com/images/quincho.jpg",
    ],
    priceRange: "$$",
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

