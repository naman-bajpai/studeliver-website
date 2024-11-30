import React from "react";

export function DotBackgroundDemo() {
  return (
    <div
      className="h-[50rem] w-full relative flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(/images/STUDENT.png)` }} 
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>

      <div className="relative z-20 flex flex-col items-center space-y-6">
        <p className="text-2xl sm:text-7xl font-bold text-white">
          Coming soon to your campus
        </p>
        <button
          aria-label="Learn more about Peer to Peer Delivery"
          className="px-6 py-3 bg-blue-700 text-white rounded-full text-lg transition duration-300 hover:bg-white dark:bg-slate-800 dark:hover:bg-slate-700 hover:text-blue-600"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}