// WaterPointCard.tsx
import React from "react";
// import { MapPin } from "lucide-react";
import type { WaterPoint } from "../lib/types";
import { BiMapPin } from "react-icons/bi";

interface Props {
  data: WaterPoint;
}

const statusStyles = {
  working: "bg-green-100 text-green-600",
  broken: "bg-red-100 text-red-600",
  maintenance: "bg-yellow-100 text-yellow-600",
};

export default function WaterPointCard({ data }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-sm">
      
      {/* Image */}
      <div className="relative">
        <img
          src={data.image}
          alt={data.name}
          className="h-48 w-full object-cover"
        />

        {/* Status Badge */}
        <span
          className={`absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded-full ${statusStyles[data.status]}`}
        >
          {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-lg">{data.name}</h3>

        <div className="flex items-center text-gray-500 text-sm gap-1">
          <BiMapPin size={16} />
          <span>{data.location}</span>
        </div>

        <button className="w-full hover:bg-primary hover:text-white text-primary bg-[#d5e5f6] py-2 rounded-xl transition">
          Report Issue
        </button>
      </div>
    </div>
  );
}
