import React from 'react'
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

export default function WaterMap({ className, waterPoints }: WaterMapProps) {
  const position: [number, number] = [6.5244, 3.3792]; // Lagos (change to your real coordinates)

  // console.log("Water points:", waterPoints);


  const [userLocation, setUserLocation] = React.useState<{
    lat: number;
    lng: number;
  } | null>(null);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Geolocation error:", error);
      }
    );
  }, []);

  function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;

    return 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }



  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      className={` w-full ${className}`}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {waterPoints
      .filter((point) => point.lat && point.lng)
      .map((point) => (
        <Marker
          key={point.id}
          position={[point.lat, point.lng]}
        >
          <Popup>
            {point.name}
            {userLocation && (
              <p>
                {calculateDistance(
                  userLocation.lat,
                  userLocation.lng,
                  point.lat,
                  point.lng
                ).toFixed(2)} km away
              </p>
            )}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
