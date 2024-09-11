// src/hooks/useMap.js

import { useState, useEffect } from 'react';

const useMap = (mapElementRef) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapElementRef.current && !map) {
      const mapInstance = new window.google.maps.Map(mapElementRef.current, {
        center: { lat: 0, lng: 0 }, // Default center
        zoom: 2, // Default zoom level
      });
      setMap(mapInstance);
    }
  }, [mapElementRef, map]);

  return { map, setMap };
};

export default useMap; // Default export
