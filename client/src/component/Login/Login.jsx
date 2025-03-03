import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../config/api';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); 

    const form = event.target;
    const username = form.username.value;
    const password = form.password.value;

    try {
      const response = await api.post('/auth/login', { username, password });
      const { token, data } = response.data;
      const { role } = data;

      console.log('User Role:', role);
      console.log('User Data:', response.data);

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      toast.success('Login successful!', { position: 'top-center', autoClose: 2000 });

      if (role === 'admin') {
        console.log('Redirecting to admin dashboard');
        navigate('/admin/resignations');
      } else if (role === 'employee') {
        console.log('Redirecting to user dashboard');
        navigate('/user/resign');
      } else {
        setError('Unauthorized access.');
        toast.error('Unauthorized access.', { position: 'top-center', autoClose: 2000 });
      }
    } catch (error) {
      setError('Invalid credentials. Please try again.');
      toast.error('Invalid credentials. Please try again.', { position: 'top-right', autoClose: 3000 });
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{' '}
          <a href="/register" className="text-blue-500 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
