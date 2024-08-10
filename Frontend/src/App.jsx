

import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

// Toast Notification Function with OK Button
const showToast = (message) => {
  toast.custom((t) => (
    <div className={`toast bg-white p-4 rounded-lg shadow-lg flex items-center justify-between`}>
      <p>{message}</p>
      <button
        onClick={() => toast.dismiss(t.id)}
        className="ml-4 bg-blue-500 text-white px-3 py-1 rounded-lg"
      >
        OK
      </button>
    </div>
  ), {
    duration: Infinity // Prevent automatic dismissal
  });
};

const App = () => {
  const [position, setPosition] = useState({ left: '200px', top: '20px' });

  const moveTarget = () => {
    const containerWidth = 500; // Width of the container
    const containerHeight = 600; // Height of the container
    const buttonWidth = 160; // Width of the "No" button
    const buttonHeight = 60; // Height of the "No" button
    const padding = 20; // Padding around the container

    const maxX = containerWidth - buttonWidth - padding;
    const maxY = containerHeight - buttonHeight - padding;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    setPosition({ left: `${randomX + padding}px`, top: `${randomY + padding}px` });
  };

  const handleYesClick = () => {
    showToast("I Love you too jaan mera babu😍😘🥰");
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gradient-to-r from-light-purple to-white">
      <div className="relative w-[500px] h-[600px] m-5 overflow-hidden rounded-lg shadow-lg p-4">
        <div className="absolute top-0 left-0 w-full">
          <div className='flex flex-col items-center p-4'>
            <p className="mb-4 font-bold text-4xl text-center">Do You Love me? <span className='text-4xl'>💞</span></p>
          </div>
          <button
            className="absolute bg-red-600 text-white text-2xl px-4 py-2 rounded-lg ms-14"
            onClick={handleYesClick}
          >
            Yes
          </button>
          <button
            className="absolute bg-blue-700 text-white text-2xl px-4 py-2 rounded-lg transition-transform duration-500"
            style={{ left: position.left, top: position.top }}
            onMouseEnter={moveTarget}
          >
            No
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default App;
