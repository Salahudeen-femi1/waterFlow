import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { waterPoints } from '../lib/data';
import WaterPointCard from '../Components/WaterPointCard';
import WaterMap from '../Components/WaterMap';
import { motion } from 'motion/react'

export default function Home() {

  const [search, setSearch] = React.useState('')
  const [activeStatus, setActiveStatus] = React.useState('All');
  const [selectedPoint, setSelectedPoint] = React.useState<any>(null);

  // FILTER LOGIC
  const filteredPoints = waterPoints.filter((point) => {
    const matchesSearch = point.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      activeStatus === "All" || point.status === activeStatus;

    return matchesSearch && matchesStatus;
  });

  // 🔎 SEARCH BUTTON FUNCTION
  const handleSearch = () => {
    const found = waterPoints.find((point) =>
      point.name.toLowerCase().includes(search.toLowerCase())
    );

    if (found) {
      setSelectedPoint(found);

      // Scroll to map section
      document.getElementById("map-section")?.scrollIntoView({
        behavior: "smooth"
      });
    } else {
      alert("Location not found");
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <motion.div
        className='min-h-screen w-full bg-gradient-to-r from-[#e7eef7] to-[#d5e5f6] flex flex-col text-center justify-center items-center px-4'
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className='text-4xl md:text-5xl font-bold mb-4'>
          Find Your Nearest <span className='text-primary'>Water Point</span>
        </h2>

        <p className='text-gray-600 max-w-2xl'>
          Stay hydrated and informed with real-time status updates and location data.
        </p>

        {/* SEARCH BAR */}
        <div className='rounded-lg bg-white flex items-center px-4 h-12 w-full max-w-2xl mt-6 shadow-md shadow-primary/20'>
          <IoSearchOutline size={20} />

          <input
            type="text"
            placeholder='Search demo name (e.g. Central Borehole)'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='outline-none w-full ml-2'
          />

          <button
            onClick={handleSearch}
            className='bg-primary text-white rounded-xl px-4 py-1 ml-2'
          >
            Search
          </button>
        </div>

        {/* 🔎 SEARCH RESULT DISPLAY */}
        {selectedPoint && (
          <div className="mt-6 bg-white p-4 rounded-lg shadow-md text-left max-w-md w-full">
            <h3 className="font-semibold text-primary text-lg">{selectedPoint.name}</h3>
            <p>Status: <strong className={`${selectedPoint.status === "working" ? "text-green-500" : "text-red-500"}`}>{selectedPoint.status}</strong></p>
            <p>Latitude: {selectedPoint.lat}</p>
            <p>Longitude: {selectedPoint.lng}</p>

            <button
              onClick={() =>
                document.getElementById("map-section")?.scrollIntoView({
                  behavior: "smooth"
                })
              }
              className="mt-3 bg-secondary text-white px-4 py-2 rounded-lg"
            >
              Navigate on Map
            </button>
          </div>
        )}
      </motion.div>

      {/* WATER POINT LIST */}
      <div className="px-6 py-12 bg-gray-100">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Local Water Points</h2>
          <p className="text-gray-500">
            Showing {filteredPoints.length} locations
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {filteredPoints.map((point) => (
            <WaterPointCard key={point.id} data={point} />
          ))}
        </motion.div>

        {/* MAP SECTION */}
        <div
          id="map-section"
          className='bg-secondary rounded-lg flex flex-col text-white items-center lg:flex-row gap-6 p-6 mt-12 shadow-xl'
        >
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">
              Interactive Map View
            </h2>

            <p>
              View selected water point and nearby locations visually.
            </p>
          </div>

          <div className="flex-1">
            <WaterMap
              className='h-80'
              waterPoints={filteredPoints}
              selectedPoint={selectedPoint} // 👈 NEW PROP
            />
          </div>
        </div>
      </div>
    </>
  )
}
