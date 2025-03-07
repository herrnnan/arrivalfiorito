"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { useEffect } from "react"

// Ajuste de iconos para evitar problemas con Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/marker-icon-2x.png",
  iconUrl: "/marker-icon.png",
  shadowUrl: "/marker-shadow.png",
})

interface LeafletMapProps {
  lat: number
  lng: number
  zoom: number
}

export default function LeafletMap({ lat, lng, zoom }: LeafletMapProps) {
  // Asegúrate de que el componente se ejecute solo en el cliente
  useEffect(() => {
    // Cualquier lógica que necesite el objeto window o L
  }, [])

  return (
    <div className="w-full h-full">
      <MapContainer
        center={[lat, lng]}
        zoom={zoom}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>
          <Popup>Arrival Fiorito</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
