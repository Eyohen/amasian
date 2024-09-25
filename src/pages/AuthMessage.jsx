import React from 'react';

const AuthMessage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100 font-['Libre_Baskerville',serif]">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Authentication Successful</h1>
        <p className="text-xl text-gray-700">This product belongs to AMASIAN.</p>
      </div>
    </div>
  );
};

export default AuthMessage;