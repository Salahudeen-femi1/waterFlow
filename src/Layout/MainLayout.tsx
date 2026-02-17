import React from "react";
import Topnav from "./Topnav";
import { Link } from "react-router-dom";

type LayoutProp = {
  children: React.ReactNode;
}

export default function MainLayout({ children }: LayoutProp) {
  return (
    <>
      {/* Top Navigation */}
      <div className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <Topnav />
        </div>
      </div>

      {/* Page Content */}
      <div className="">
        {children}
      </div>

      <div className="bg-white border-t border-gray-300 flex items-center justify-between h-25 px-6">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            {/* <Image /> */}
          </span>
          <p className="font-semibold text-[18px] text-black">WaterFlow</p>
        </div>

        <>
          <ul className="flex gap-5 text-gray-500">
            <li className=" hover:text-primary">
              <Link>Pricay Policy</Link>
            </li>
            <li className=" hover:text-primary">
              <Link>Terms of service</Link>
            </li>
            <li className=" hover:text-primary">
              <Link>Contact Supports</Link>
            </li>

          </ul>

        </>

        <p className="text-gray-500">2024 waterflow. All right reserved.</p>

      </div>

    </>
  );
}
