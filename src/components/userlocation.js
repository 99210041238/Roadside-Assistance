// src/components/UserLocation.js

import React, { useState, useEffect } from 'react';
import useMap from '../hooks/useMap'; // Default import

const UserLocation = ({ onLocationUpdate }) => {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const mapRef = React.useRef(null); // Create a ref for the map element
  const { map, setMap } = useMap(mapRef); // Correct usage of the hook

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
          onLocationUpdate({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }, [onLocationUpdate]);

  useEffect(() => {
    if (map && location.lat !== null && location.lng !== null) {
      map.setCenter(new window.google.maps.LatLng(location.lat, location.lng));
      new window.google.maps.Marker({
        position: location,
        map,
        title: 'Your Location',
      });
    }
  }, [map, location]);

  return (
    <div>
      {location.lat !== null && location.lng !== null ? (
        <div>
          <h2>Your Location</h2>
          <p>Latitude: {location.lat}</p>
          <p>Longitude: {location.lng}</p>
        </div>
      ) : (
        <p>Finding your location...</p>
      )}
    </div>
  );
};

export default UserLocation;
