import React, { useEffect, useRef } from 'react';

const TrackingMap = ({ mechanicLocation }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize Google Map
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: mechanicLocation.lat, lng: mechanicLocation.lng },
      zoom: 14,
    });

    // Add a marker for mechanic location
    new window.google.maps.Marker({
      position: { lat: mechanicLocation.lat, lng: mechanicLocation.lng },
      map,
      title: 'Mechanic Location',
    });
  }, [mechanicLocation]);

  return (
    <div className="h-96 w-full">
      <div ref={mapRef} className="h-full w-full" />
    </div>
  );
};

export default TrackingMap;
