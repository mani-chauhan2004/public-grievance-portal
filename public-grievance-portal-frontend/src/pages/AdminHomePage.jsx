import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminHomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-button-secondary mb-6">
          Welcome, Admin
        </h1>

        <p className="text-font-normal text-sm mb-8">
          Access your dashboard to manage grievances and monitor department performance.
        </p>

        <button
          onClick={() => navigate('dashboard')}
          className="bg-button-secondary hover:bg-button-secondary/90 text-white font-medium py-2 px-4 rounded-lg transition"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}

export default AdminHomePage;
