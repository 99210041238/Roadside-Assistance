import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import TrackingMap from '../components/Trackingmap';

const TrackMechanicLocationPage = () => {
  // Example state for mechanic location
  const [mechanicLocation, setMechanicLocation] = useState({ lat: 37.7749, lng: -122.4194 });

  // Simulate fetching mechanic location from API or real-time updates
  useEffect(() => {
    // This is just a simulation. Replace with actual API call or real-time update logic.
    const interval = setInterval(() => {
      // Simulate updating mechanic location
      setMechanicLocation({
        lat: mechanicLocation.lat + (Math.random() - 0.5) * 0.01,
        lng: mechanicLocation.lng + (Math.random() - 0.5) * 0.01,
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [mechanicLocation]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <main className="flex-grow">
          <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Track Mechanic Location</h1>
            <TrackingMap mechanicLocation={mechanicLocation} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TrackMechanicLocationPage;
