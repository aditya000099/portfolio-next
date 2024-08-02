import { useState, useEffect } from 'react';

export default function Taskbar() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0'); // Pad minutes with leading zero
    
      const ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12 || 12; // Convert to 12-hour format
    
      setCurrentTime(`${hours}:${minutes} ${ampm}`);
    };
    

    updateTime(); // Set initial time immediately
    const timer = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(timer); // Clean up on component unmount
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 w-full bg-cover bg-center shadow-lg"
      style={{ backgroundImage: "url('/t2.png')", fontFamily: 'FS Tahoma, sans-serif' }}
    >
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center ">
          {/* Start Menu Button */}
          <button className="rounded-full ml-10 flex items-center justify-center">
            <img src="/myc.png" className="w-8 h-8" alt="Start Menu" />
          </button>
          {/* Quick Links */}
          {/* <div className="flex space-x-2">
            <div className="bg-gray-600 px-3 py-1 rounded-md">My Computer</div>
            <div className="bg-gray-600 px-3 py-1 rounded-md">Documents</div>
          </div> */}
        </div>
        <div className="flex space-x-2 " style={{ fontFamily: 'FS-Tahoma, sans-serif' }}>
          <div className="px-3 rounded-md text-3xl mr-10" style={{ fontFamily: 'FS-Tahoma, sans-serif' }}>{currentTime}</div>
        </div>
      </div>
    </div>
  );
}
