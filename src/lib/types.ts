export type WaterStatus = "working" | "broken" | "maintenance";

export interface WaterPoint {
  id: number;
  name: string;
  location: string;
  image: string;
  status: WaterStatus;
}

export interface WaterMapProps {
  className?: string;
}