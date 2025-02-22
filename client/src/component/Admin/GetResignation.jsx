import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../config/api';

const GetResignation = () => {
  const [resignations, setResignations] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResignations = async () => {
      try {
        const response = await api.get('/admin/resignations');
        console.log(response.data.data)
        setResignations(response.data.data);
      } catch (error) {
        setError('Failed to fetch resignations.');
        console.error('Error fetching resignations:', error);
      }
    };

    fetchResignations();
    navigate(1);
  }, [navigate]);

  const handleResignationClick = (resignation) => {
    if (resignation.status === 'Approved' || resignation.status === 'Rejected') {
      return; // Do nothing if already concluded
    }
    console.log("Data:",resignation)

    navigate(`/admin/conclude_resignation/${resignation}`);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Resignations</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {resignations.length > 0 ? (
        <ul>
          {resignations.map((resignation) => (
            <li
              key={resignation._id}
              className="mb-4 p-4 border rounded shadow cursor-pointer"
              onClick={() => handleResignationClick(resignation._id)}
            >
              <p><strong>Employee:</strong> {resignation.employeeId.username}</p>
              <p><strong>Status:</strong> {resignation.status}</p>
              <p><strong>Last Working Day:</strong> {new Date(resignation.lwd).toLocaleDateString()}</p>
              <p><strong>Approved Last Working Day:</strong> {new Date(resignation.approvedLwd).toLocaleDateString()}</p>
              <p><strong>Created At:</strong> {new Date(resignation.createdAt).toLocaleString()}</p>
              <p><strong>Updated At:</strong> {new Date(resignation.updatedAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No resignations found.</p>
      )}
    </div>
  );
};

export default GetResignation;
