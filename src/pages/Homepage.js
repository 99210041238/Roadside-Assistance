import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <>
    
      <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
        {/* Hero Section */}
        <section className="bg-blue-500 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Roadside Assistance Anytime, Anywhere</h1>
            <p className="text-xl mb-6">
              Stuck on the road? We provide fast, reliable assistance for your two-wheeler or four-wheeler.
            </p>
            <Link 
              to="/request" 
              className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition duration-300"
            >
              Request Assistance Now
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Fast Response</h3>
                <p>We have a network of mechanics ready to help within minutes of your request.</p>
              </div>
              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Real-Time Tracking</h3>
                <p>Track your mechanic in real-time to know exactly when help will arrive.</p>
              </div>
              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Affordable Rates</h3>
                <p>Transparent and affordable pricing for any roadside assistance service.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-blue-500 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Sign In and Get Help Instantly</h2>
          <Link 
            to="/login" 
            className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition duration-300"
          >
            Login to Request Assistance
          </Link>
        </section>

        
      </div>
    </>
  );
};

export default HomePage;
