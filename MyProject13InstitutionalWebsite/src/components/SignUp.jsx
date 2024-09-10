import React, { useState } from 'react';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign-up logic
    console.log('Sign-up clicked', { username, password });
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={handleSignUp} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
