import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { waterPoints } from '../lib/data';
import WaterPointCard from '../Components/WaterPointCard';

export default function Home() {
  return (
    <>
      {/* Hero div */}
      <div className='min-h-screen w-full bg-gradient-to-r from-[#e7eef7] to-[#d5e5f6] flex flex-col text-center justify-center items-center px-4'>

        <h2 className='text-4xl md:text-5xl font-bold mb-4'>
          Find Your Nearest <span className='text-primary'>Water Point</span>
        </h2>

        <p className='text-gray-600 max-w-2xl'>
          Stay hydrated and informed with real-time status updates and location data for
          all public water sources in your neighborhood
        </p>

        {/* Search Bar */}
        <div className='rounded-lg bg-white flex items-center justify-between px-4 h-12 w-full max-w-2xl mt-6 shadow-md shadow-primary/20'>

          <div className='flex items-center gap-2 w-full'>
            <IoSearchOutline size={20} />
            <input
              type="text"
              placeholder='Search by location or point name...'
              className='outline-none w-full'
            />
          </div>

          <button className='bg-primary text-white rounded-xl px-4 py-1 ml-2'>
            Search
          </button>
        </div>
      </div>

      {/* Water Points Section */}
      <div className="px-6 py-12 bg-gray-100">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold">Local Water Points</h2>
            <p className="text-gray-500">
              Showing {waterPoints.length} locations near you
            </p>
          </div>

          <button className="px-4 py-2 border rounded-lg text-sm">
            Filter
          </button>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {waterPoints.map((point) => (
            <WaterPointCard key={point.id} data={point} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="px-6 py-2 bg-white border rounded-full shadow-sm">
            Load More Water Points
          </button>
        </div>
      </div>
    </>
  )
}
