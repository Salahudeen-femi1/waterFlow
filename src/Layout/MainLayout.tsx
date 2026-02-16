import React from "react";
import Topnav from "./Topnav";

type LayoutProp = {
   children: React.ReactNode;
}

export default function MainLayout({children}: LayoutProp) {
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

    </>
  );
}
