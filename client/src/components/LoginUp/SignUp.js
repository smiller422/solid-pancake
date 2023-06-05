import React, { useState } from 'react';

export default function SignUp({ toggleSignUp }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Perform input validation
    if (!username || !password || !confirmPassword) {
      alert('Please enter all required fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
       // Save the username and password
    saveUserCredentials(username, password);

    // Clear the form
    setUsername('');
    setPassword('');
    setConfirmPassword('');

    // Perform sign-up logic
    // TODO: Implement your sign-up logic here
    alert('Sign up successful!');
  };

  const saveUserCredentials = (username, password) => {
    // TODO: Implement your logic to save the username and password
    // You can use localStorage, sessionStorage, or make an API call to store the data
    // Example using localStorage:
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  };

  return (
    <div className='bg-gray-700 flex flex-col justify-center'>
      <form className='max-w-[400px] w-full mx-auto bg-gray-800 p-8 px-8 rounded-xl' onSubmit={handleFormSubmit}>
        <h2 className='text-4xl text-white font-bold text-center m-8'>Sign Up</h2>
        <div className='flex flex-col text-gray-400 py-2'>
          <label>User Name</label>
          <input
            className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            type='text'
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className='flex flex-col text-gray-400 py-2'>
          <label>Password</label>
          <input
            className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            type='password'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className='flex flex-col text-gray-400 py-2'>
          <label>Confirm Password</label>
          <input
            className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            type='password'
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Sign Up</button>
      </form>
    </div>
  );
}