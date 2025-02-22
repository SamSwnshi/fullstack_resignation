import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../config/api';

const Status = () => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResignationStatus = async () => {
      try {
        const response = await api.post('/resignation_status');
        setStatus(response.data.resignation);
      } catch (error) {
        setError('Failed to fetch resignation status. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchResignationStatus();
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-6">Resignation Status</h2>

        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : status ? (
          <div className="p-6 border rounded-lg bg-gray-50">
            <p className="text-lg font-medium">
              Last Working Day: 
              <span className="font-semibold"> {new Date(status.lwd).toLocaleDateString()}</span>
            </p>
            <p className={`mt-3 text-lg font-medium ${
              status.status === 'accepted' ? 'text-green-600' 
              : status.status === 'rejected' ? 'text-red-600' 
              : 'text-yellow-600'
            }`}>
              Status: {status.status}
            </p>
          </div>
        ) : (
          <p className="text-gray-600">No resignation request found.</p>
        )}


        <button 
          onClick={() => navigate('/notifications')}
          disabled={status?.status !== 'accepted'}
          className={`mt-6 w-full py-3 rounded-lg text-lg font-semibold transition ${
            status?.status === 'accepted' 
              ? 'bg-blue-500 text-white hover:bg-blue-600' 
              : 'bg-gray-400 text-white cursor-not-allowed'
          }`}
        >
          Check Notifications
        </button>


        <button 
          onClick={() => navigate('/resign')}
          className="mt-4 w-full py-3 bg-red-500 text-white rounded-lg text-lg font-semibold hover:bg-red-600 transition"
        >
          Resign Again
        </button>
      </div>
    </div>
  );
};

export default Status;
