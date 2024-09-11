import React, { useRef } from 'react';
import UserLocation from '../components/userlocation';
import useMap from '../hooks/useMap'; // Correct path to useMap hook

const MapPage = () => {
  const mapRef = useRef(null);
  const { map, setMap } = useMap(mapRef); // Pass the ref to useMap hook

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <div ref={mapRef} className="h-96 w-full" />
        <UserLocation onLocationUpdate={(location) => {
          if (map) {
            map.setCenter(new window.google.maps.LatLng(location.lat, location.lng));
            new window.google.maps.Marker({
              position: location,
              map,
              title: '',
            });
          }
        }} />
      </div>
    </div>
  );
};

export default MapPage;
