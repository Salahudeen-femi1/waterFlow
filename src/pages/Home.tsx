import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { waterPoints } from '../lib/data';
import WaterPointCard from '../Components/WaterPointCard';
import WaterMap from '../Components/WaterMap';
import { motion } from 'motion/react'
import { MapPin, Activity, MessageSquare, Navigation } from "lucide-react";

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
          Find Working Water <br /><span className='text-primary'>Point Near you</span>
        </h2>

        <p className='text-gray-600 max-w-2xl'>
          View borehole status, distance, and direction in real time. Join <br /> thousands of citizen improving urban water accessibility
        </p>

        {/* SEARCH BAR */}

        <div className='flex gap-4 mt-6 '>
          <button className='bg-primary rounded-lg w-60 text-white font-medium'
            onClick={handleSearch}>
            View water map
          </button>


          <div className='rounded-lg border border-gray-300 flex items-center px-4 h-12 w-full'>

            <IoSearchOutline size={20} />

            <input
              type="text"
              placeholder='Search water points...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='outline-none w-full ml-2 font-medium'
            />
          </div>

        </div>
          {/* ===== Stats Section ===== */}
          <section className="w-full mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

              <div>
                <h2 className="text-4xl font-bold text-gray-900">1,240</h2>
                <p className="text-gray-500 mt-2 tracking-wide uppercase text-sm">
                  Active Points
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-gray-900">450K+</h2>
                <p className="text-gray-500 mt-2 tracking-wide uppercase text-sm">
                  Gallons Distributed
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-gray-900">892</h2>
                <p className="text-gray-500 mt-2 tracking-wide uppercase text-sm">
                  Reports Resolved
                </p>
              </div>

            </div>
          </section>



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

      <div className="bg-gray-50 min-h-screen w-full">



        {/* ===== Key Features Section ===== */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">

            <h2 className="text-3xl font-bold text-gray-900">
              Our Key Features
            </h2>

            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Empowering communities with the data they need to ensure
              consistent access to clean water.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

              {/* Card 1 */}
              <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
                <div className="bg-blue-100 w-14 h-14 flex items-center justify-center rounded-xl mx-auto">
                  <Activity className="text-blue-600" size={24} />
                </div>

                <h3 className="text-xl font-semibold mt-6">
                  Real-time Status
                </h3>

                <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                  Check if a pump is operational before you leave home
                  with live updates from community reports.
                </p>

                <p className="text-green-600 font-medium mt-4 text-sm">
                  ● 98% Accuracy Rate
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
                <div className="bg-blue-100 w-14 h-14 flex items-center justify-center rounded-xl mx-auto">
                  <MessageSquare className="text-blue-600" size={24} />
                </div>

                <h3 className="text-xl font-semibold mt-6">
                  Community Reporting
                </h3>

                <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                  Help your neighbors by reporting leaks, maintenance
                  needs, or successful repairs instantly.
                </p>

                <p className="text-blue-600 font-medium mt-4 text-sm">
                  Join 5K+ Contributors
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
                <div className="bg-blue-100 w-14 h-14 flex items-center justify-center rounded-xl mx-auto">
                  <Navigation className="text-blue-600" size={24} />
                </div>

                <h3 className="text-xl font-semibold mt-6">
                  Easy Navigation
                </h3>

                <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                  Integrated maps with turn-by-turn directions to the
                  nearest functional water source.
                </p>

                <p className="text-orange-500 font-medium mt-4 text-sm">
                  Estimated Time Included
                </p>
              </div>

            </div>
          </div>
        </section>

      </div>

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
