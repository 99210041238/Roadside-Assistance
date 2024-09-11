import React from 'react';

import RequestForm from '../components/Requestform';

const RequestPage = () => {
  return (
    <>
 
      <div className="min-h-screen flex flex-col justify-between bg-gray-100">
        <main className="flex-grow">
          <RequestForm />
        </main>

      </div>
    </>
  );
};

export default RequestPage;
