import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../config/api';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await api.post('/user/resignation_status');
        console.log(response)
        setNotifications(response.data);
      } catch (error) {
        setError('Failed to fetch notifications. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Notifications</h2>
        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : notifications.length === 0 ? (
          <p className="text-center text-gray-600">No notifications available.</p>
        ) : (
          <ul className="space-y-4">
            {notifications.map((notification, index) => (
              <li
                key={index}
                className={`p-4 rounded text-center ${
                  notification.status === 'accepted' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {notification.message}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        onClick={() => navigate('/resign')}
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Resign Again
      </button>
    </div>
  );
};

export default Notifications;
