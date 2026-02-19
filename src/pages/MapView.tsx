import React from 'react'
import WaterMap from '../Components/WaterMap'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { TiThSmall } from "react-icons/ti";
import { PiWarningCircleFill } from "react-icons/pi";
import { IoSearchOutline } from 'react-icons/io5';
import { waterPointsDemo } from '../lib/data';

export default function MapView() {

  const [search, setSearch] = React.useState('')
  const [activeStatus, setActiveStatus] = React.useState('All');
  const [selectedPoint, setSelectedPoint] = React.useState(null);



  const status = [
    {
      icon: TiThSmall,
      name: 'All'
    },
    {
      icon: IoIosCheckmarkCircle,
      name: 'Working'
    },
    {
      icon: PiWarningCircleFill,
      name: 'Broken'
    }
  ]

  const filteredPoints = waterPointsDemo.filter((point) => {
    const matchesSearch = point.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      activeStatus === "All" || point.status === activeStatus;

    return matchesSearch && matchesStatus;
  });

  React.useEffect(() => {
    if (filteredPoints.length === 1) {
      setSelectedPoint(filteredPoints[0]);
    }
  }, [filteredPoints]);


  return (
    <div className="flex h-[90vh] overflow-hidden w-full">

      {/* Sidebar */}
      <div className="w-full md:w-74 bg-[#e7eef7] shadow-2xl p-3 ">
        <div className='flex flex-col items-center gap-1 w-full border border-gray-300 bg-white rounded-lg p-3 shadow-lg'>

          <div className='flex gap-1 items-center bg-[#e7eef7]  rounded-3xl px-1 py-2'>
            <IoSearchOutline size={15} />
            <input type="text"
              placeholder='Search water points...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='outline-0  '
            />
          </div>

          <div className='flex p-2'>
            {
              status.map((stat) => (
                <button
                  key={stat.name}
                  onClick={() => setActiveStatus(stat.name)}
                  className={`flex gap-1 items-center cursor-pointer p-1 rounded-lg transition 
                  ${activeStatus === stat.name ? "bg-primary text-white" : "text-black hover:bg-gray-200"}
              `}
                >
                  <stat.icon />
                  <p>{stat.name}</p>
                </button>
              ))
            }

          </div>
        </div>

        {filteredPoints.length === 0 && (
          <p className="text-center mt-4 text-gray-500">
            No water points found.
          </p>
        )}

        {selectedPoint && (
          <div className="mt-4 p-3 bg-white rounded-lg shadow">
            <p><strong>Name:</strong> {selectedPoint.name}</p>
            <p><strong>Status:</strong> {selectedPoint.status}</p>
            <p><strong>Latitude:</strong> {selectedPoint.lat}</p>
            <p><strong>Longitude:</strong> {selectedPoint.lng}</p>
          </div>
        )}



      </div>

      {/* Map */}
      <div className="flex-1">
        <WaterMap
          className='h-[90vh]'
          waterPoints={filteredPoints}
        />
      </div>

    </div>


  )
}
