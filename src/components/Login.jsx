// src/components/Login.js
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import loginBg from '../assets/login3.jpg';

function Login() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="bg-[#0f172a]/90 backdrop-blur-md p-8 rounded-xl shadow-2xl w-full max-w-sm text-white">
        <h2 className="text-center text-3xl font-bold mb-6">Login</h2>

        <form className="space-y-4">
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

          {/* Remember me and forgot password */}
          <div className="flex justify-between items-center text-sm text-gray-300">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </label>
            <Link to="/forgot-password" className="hover:underline">
              Forget Password?
            </Link>
          </div>

          {/* Login button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 transition py-2 rounded-full font-semibold">
            Login
          </button>

          {/* Sign up link */}
          <p className="text-center text-sm mt-2">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-blue-400 font-semibold">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;