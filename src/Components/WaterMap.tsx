import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import type { WaterMapProps } from "../lib/types";

// Fix default marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function WaterMap({className}: WaterMapProps) {
  const position: [number, number] = [6.5244, 3.3792]; // Lagos (change to your real coordinates)

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      className={` w-full rounded-lg ${className}`}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>
        <Popup>Park St Fountain</Popup>
      </Marker>
    </MapContainer>
  );
}
