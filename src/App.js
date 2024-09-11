import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/navbar';
import Footer from './components/footer';

// Pages
import HomePage from './pages/Homepage';
import LoginPage from './pages/Loginpage';
import RequestPage from './pages/Requestpage';
import TrackMechanicPage from './pages/Trackmechanic';
import CreateAccountPage from './pages/CreateAccountpage';

// Context
import { AuthProvider } from './context/Authcontext';

// Services (if needed directly in App.js, usually used inside components or hooks)
import authService from './service/authservice';
import requestService from './service/Requestservice';

// App Component
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/request" element={<RequestPage />} />
            <Route path="/track" element={<TrackMechanicPage />} />
            <Route path="/create-account" element={<CreateAccountPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

// Export the App component as default
export default App;
