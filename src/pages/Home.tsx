import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { waterPoints } from '../lib/data';
import WaterPointCard from '../Components/WaterPointCard';
import WaterMap from '../Components/WaterMap';
import {motion} from 'motion/react'

export default function Home() {
  return (
    <>
      {/* Hero div */}
      <motion.div className='min-h-screen w-full bg-gradient-to-r from-[#e7eef7] to-[#d5e5f6] flex flex-col text-center justify-center items-center px-4'

      initial={{opacity:0, y: 40}} animate={{opacity:1, y: 0}} transition={{duration: 2, ease: "easeOut"}}
      >

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
      </motion.div>

      {/* Water Points Section */}
      <div className="px-6 py-12 bg-gray-100">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold">Local Water Points</h2>
            <p className="text-gray-500">
              Showing {waterPoints.length} locations near you
            </p>
          </div>

          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
            Filter
          </button>
        </div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"

        initial={{opacity:0, y: 40}} animate={{opacity:1, y: 0}} transition={{duration: 2, ease: "easeOut"}}
        >
          {waterPoints.map((point) => (
            <WaterPointCard key={point.id} data={point} />
          ))}
        </motion.div>

        <div className="flex justify-center mt-10">
          <button className="px-6 py-2 bg-white border border-gray-300 rounded-full shadow-sm cursor-pointer">
            Load More Water Points
          </button>
        </div>

        <div className='bg-secondary rounded-lg flex flex-col text-white items-center lg:flex-row gap-6 p-6 mt-8 shadow-xl'>

          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">
              Prefer a visual overview?
            </h2>

            <p className="text-white mb-4">
              Switch to our interactive map view to see all water points,
              your current location, and real-time navigation directions.
            </p>

            <button className="bg-white text-secondary px-4 py-2 rounded-4xl cursor-pointer">
              Open Interactive Map
            </button>
          </div>

          <div className="flex-1">
            <WaterMap className='h-80' />
          </div>
        </div>

      </div>
    </>
  )
}
