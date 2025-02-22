import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../config/api';

const ExitResponse = () => {
  const [responses, setResponses] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExitResponses = async () => {
      try {
        const response = await api.get('/admin/exit_responses');
        setResponses(response.data.data);
      } catch (error) {
        setError('Failed to fetch exit responses.');
        console.error('Error fetching exit responses:', error);
      }
    };

    fetchExitResponses();
    navigate(1);
  }, [navigate]);

  const handleBackToAdmin = () => {
    navigate('/admin/resignations');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Exit Responses</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {responses.length > 0 ? (
        <ul>
          {responses.map((exitResponse) => (
            <li key={exitResponse._id} className="mb-4 p-4 border rounded shadow">
              <p><strong>Employee:</strong> {exitResponse.employeeId.username}</p>
              <p><strong>Submitted At:</strong> {new Date(exitResponse.submittedAt).toLocaleString()}</p>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Questions and Responses:</h3>
                <ul>
                  {exitResponse.responses.map((qna, index) => (
                    <li key={index} className="mb-2">
                      <p><strong>Question:</strong> {qna.questionText}</p>
                      <p><strong>Response:</strong> {qna.response}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No exit responses found.</p>
      )}
      <button
        onClick={handleBackToAdmin}
        className="mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Back to Admin
      </button>
    </div>
  );
};

export default ExitResponse;
