import React from 'react'
import WaterMap from '../Components/WaterMap'

export default function MapView() {
  return (
    <div className="flex h-[80vh] overflow-hidden w-full">

      {/* Sidebar */}
      <div className="w-[20vw] bg-[#e7eef7] shadow-2xl">
        Sidebar Content
      </div>

      {/* Map */}
      <div className="flex-1">
        <WaterMap className='h-[80vh]' />
      </div>

    </div>


  )
}
