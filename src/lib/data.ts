// data.ts

import type { WaterPoint } from "./types";


export const waterPoints: WaterPoint[] = [
  {
    id: 1,
    name: "Park St Fountain",
    location: "123 Central Park, North Side",
    image: "https://images.unsplash.com/photo-1594737625785-cf0f5c8e7f07",
    status: "working",
  },
  {
    id: 2,
    name: "Library Square Pump",
    location: "Public Library Plaza",
    image: "https://images.unsplash.com/photo-1581091012184-5c9f0a5d7b5d",
    status: "broken",
  },
  {
    id: 3,
    name: "Central Station Tap",
    location: "Main Concourse, Level 1",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c",
    status: "maintenance",
  },
  {
    id: 4,
    name: "Westside Well",
    location: "Green Valley Park Entrance",
    image: "https://images.unsplash.com/photo-1603575448366-1532f52f7f9f",
    status: "working",
  },
];

export const waterPointsDemo = [
    {
      id: 1,
      name: "Park St Fountain",
      lat: 6.5244,
      lng: 3.3792,
      status: "Working"
    },
    {
      id: 2,
      name: "Library Pump",
      lat: 6.5300,
      lng: 3.3700,
      status: "Broken"
    }
  ];
