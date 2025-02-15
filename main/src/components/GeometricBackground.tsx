import React from "react";
export function GeometricBackground({
  theme
}) {
  return <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute w-[500px] h-[500px] -top-20 -left-20 transform rotate-45">
        <div className={`w-full h-full border-[40px] border-yellow-500 rounded-full`}></div>
      </div>
      <div className="absolute w-[300px] h-[300px] top-1/2 right-0 transform rotate-12">
        <div className={`w-full h-full border-[30px] border-yellow-500 rounded-lg`}></div>
      </div>
      <div className="absolute w-[200px] h-[200px] bottom-0 left-1/3 transform -rotate-12">
        <div className={`w-full h-full border-[20px] border-yellow-500 rounded-lg`}></div>
      </div>
    </div>;
}