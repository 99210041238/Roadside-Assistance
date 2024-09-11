import React, { useState } from 'react';

const RequestForm = () => {
  const [vehicleType, setVehicleType] = useState('');
  const [problemType, setProblemType] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [towingVehicleType, setTowingVehicleType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the request to the backend with vehicleType, problemType, towingVehicleType, description, and location
    console.log({ vehicleType, problemType, towingVehicleType, description, location });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Request Assistance</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Vehicle Type Selection */}
          <div>
            <label className="block mb-2 text-sm text-gray-600">Vehicle Type</label>
            <select 
              value={vehicleType} 
              onChange={(e) => setVehicleType(e.target.value)} 
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Select Vehicle Type</option>
              <option value="two-wheeler">Two Wheeler</option>
              <option value="four-wheeler">Four Wheeler</option>
            </select>
          </div>

          {/* Problem Type Selection */}
          <div>
            <label className="block mb-2 text-sm text-gray-600">Problem Type</label>
            <select 
              value={problemType} 
              onChange={(e) => setProblemType(e.target.value)} 
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Select Problem Type</option>
              <option value="fuel-shortage">Fuel Shortage</option>
              <option value="flat-tyre">Flatten Tyre</option>
              <option value="vehicle-towing">Vehicle Towing</option>
              <option value="repairs">Repairs</option>
            </select>
          </div>

          {/* Show additional towing vehicle type if Vehicle Towing is selected */}
          {problemType === 'vehicle-towing' && (
            <div>
              <label className="block mb-2 text-sm text-gray-600">Towing Vehicle Type</label>
              <select 
                value={towingVehicleType} 
                onChange={(e) => setTowingVehicleType(e.target.value)} 
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
              >
                <option value="">Select Towing Vehicle Type</option>
                <option value="two-wheeler">Two Wheeler</option>
                <option value="four-wheeler">Four Wheeler</option>
              </select>
            </div>
          )}

          {/* Problem Description */}
          <div>
            <label className="block mb-2 text-sm text-gray-600">Problem Description</label>
            <textarea 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              rows="4" 
              placeholder="Describe the issue you're facing..." 
              required
            ></textarea>
          </div>

          {/* Location Input */}
          <div>
            <label className="block mb-2 text-sm text-gray-600">Location</label>
            <input 
              type="text" 
              value={location} 
              onChange={(e) => setLocation(e.target.value)} 
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500" 
              placeholder="Enter your current location" 
              required 
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-200"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestForm;
