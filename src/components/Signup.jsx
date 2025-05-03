// src/components/Signup.js
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import loginBg from '../assets/login3.jpg';

function Signup() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="bg-[#0f172a]/90 backdrop-blur-md p-8 rounded-xl shadow-2xl w-full max-w-sm text-white">
        <h2 className="text-center text-3xl font-bold mb-6">Sign Up</h2>

        <form className="space-y-4">
          {/* Full name input */}
          <div>
          
            <div className="flex items-center bg-gray-700 rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-transparent outline-none w-full text-sm text-white"
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
              />
              <FaLock className="ml-2 text-gray-300" />
            </div>
          </div>

          {/* Sign up button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 transition py-2 rounded-full font-semibold">
            Sign Up
          </button>

          {/* Login link */}
          <p className="text-center text-sm mt-2">
            Already have an account?{' '}
            <Link to="/" className="text-blue-400 font-semibold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;