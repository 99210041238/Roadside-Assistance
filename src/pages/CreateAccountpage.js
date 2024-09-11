import React from 'react';
import CreateAccountForm from '../components/CreateAccountform';  // Assuming you have a CreateAccountForm component

const CreateAccountPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <main className="flex-grow">
        {/* Render Create Account Form */}
        <CreateAccountForm />
      </main>
    </div>
  );
};

export default CreateAccountPage;
