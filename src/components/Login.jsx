import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast'
import backgroundImage from '../assets/lg4.jpg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // ... (previous imports remain the same)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('currentUser', JSON.stringify(data.user));
        navigate('/home'); // Changed from '/' to '/home'
      } else {
        toast.error(data.message || 'Login failed', {
          position: 'top-center',
          style: {
            background: '#ef4444',
            color: '#fff',
            fontWeight: 'bold',
          },
        });
      }
    } catch (error) {
      toast.error('An error occurred while logging in.', {
        position: 'top-center',
        style: {
          background: '#ef4444',
          color: '#fff',
          fontWeight: 'bold',
        },
      });
      console.error('Login error:', error);
    }
  };
// ... (rest of the component remains the same)

  return (
    <div className="h-screen w-screen bg-gray-900 flex items-center justify-center"
    style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
    
    >
      <div className="bg-[#0f172a]/90 backdrop-blur-md p-8 rounded-xl shadow-2xl w-full max-w-sm text-white">
        <h2 className="text-center text-3xl font-bold mb-6">Login</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email input */}
          <div>
            <div className="flex items-center bg-gray-700 rounded-full px-4 py-2">
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent outline-none w-full text-sm text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition py-2 rounded-full font-semibold"
          >
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