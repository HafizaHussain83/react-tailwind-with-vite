import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';
import backgroundImage from '../assets/lg4.jpg'; // Make sure this path matches your image location

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Signup failed');
      }

      toast.success('Signup successful! Please login.', {
        position: 'top-center',
        style: {
          background: '#10b981',
          color: '#fff',
          fontWeight: 'bold',
        },
      });
      navigate('/');
    } catch (error) {
      toast.error(error.message || 'An error occurred during signup.', {
        position: 'top-center',
        style: {
          background: '#ef4444',
          color: '#fff',
          fontWeight: 'bold',
        },
      });
      console.error('Signup error:', error);
    }
  };

  return (
    <div 
      className="h-screen w-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay to improve text readability */}
      
      
      <div className="bg-[#0f172a]/90 backdrop-blur-md p-8 rounded-xl shadow-2xl w-full max-w-sm text-white z-10">
        <h2 className="text-center text-3xl font-bold mb-6">Sign Up</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Full name input */}
          <div>
            <div className="flex items-center bg-gray-700 rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-transparent outline-none w-full text-sm text-white"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
              <FaUser className="ml-2 text-gray-300" />
            </div>
          </div>

          {/* Email input */}
          <div>
            <div className="flex items-center bg-gray-700 rounded-full px-4 py-2">
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent outline-none w-full text-sm text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FaEnvelope className="ml-2 text-gray-300" />
            </div>
          </div>

          {/* Password input */}
          <div>
            <div className="flex items-center bg-gray-700 rounded-full px-4 py-2">
              <input
                type="password"
                placeholder="Password"
                className="bg-transparent outline-none w-full text-sm text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength="6"
              />
              <FaLock className="ml-2 text-gray-300" />
            </div>
          </div>

          {/* Sign up button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition py-2 rounded-full font-semibold"
          >
            Sign Up
          </button>

          {/* Login link */}
          <p className="text-center text-sm mt-2">
            Already have an account?{' '}
            <Link to="/" className="text-blue-400 font-semibold hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;