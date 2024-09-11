import React from 'react';
import LoginForm from '../components/loginform';  // Assuming you have a LoginForm component

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <main className="flex-grow">
        {/* Render Login Form */}
        <LoginForm />

        {/* Create Account Section */}
        <div className="create-account text-center mt-4">
          <p>Don't have an account?</p>

          {/* Link to Create Account Page */}
          <a href="/create-account">
            <button>Create Account</button>
          </a>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
