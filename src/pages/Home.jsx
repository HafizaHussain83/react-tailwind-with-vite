import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import { FaHome, FaUser, FaSignOutAlt, FaUtensils, FaHeart, FaSearch, FaShoppingCart } from 'react-icons/fa';

function Home() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('currentUser'));

  // Check if user is logged in
  useEffect(() => {
    if (!user) {
      navigate('/');
    } else {
      toast.success(`Welcome back, ${user.fullName || user.email}!`, {
        duration: 4000,
        position: 'top-center',
        style: {
          background: '#10b981',
          color: '#fff',
          fontWeight: 'bold',
        },
        iconTheme: {
          primary: '#fff',
          secondary: '#10b981',
        },
      });
    }
  }, [navigate, user]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    toast('Logged out successfully!', {
      icon: '👋',
      position: 'top-center',
      style: {
        background: '#3b82f6',
        color: '#fff',
        fontWeight: 'bold',
      },
    });
    navigate('/');
  };

  const features = [
    {
      icon: <FaSearch className="text-emerald-400" />,
      title: "Discover Recipes",
      description: "Explore thousands of delicious recipes from around the world"
    },
    {
      icon: <FaHeart className="text-emerald-400" />,
      title: "Save Favorites",
      description: "Save your favorite recipes to your personal collection"
    },
    {
      icon: <FaShoppingCart className="text-emerald-400" />,
      title: "Shopping List",
      description: "Generate shopping lists based on your meal plans"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Toaster />
      <header className="bg-gray-800/80 backdrop-blur-md py-4 px-6 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <FaUtensils className="text-3xl text-emerald-400 animate-pulse" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              FoodApp Delights
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <FaUser className="text-emerald-300" />
              </div>
              <span className="font-medium">{user?.fullName || user?.email}</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-gray-700 hover:bg-emerald-600 px-4 py-2 rounded-full transition-all duration-300 group"
            >
              <span>Logout</span>
              <FaSignOutAlt className="transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl mb-12 border border-gray-700/50">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-4xl font-bold mb-2">
                Welcome back, <span className="text-emerald-400">{user?.fullName || "Foodie"}!</span>
              </h2>
              <p className="text-xl text-gray-300">
                What delicious meal will you discover today?
              </p>
            </div>
            <div className="bg-emerald-500/20 p-4 rounded-full">
              <FaUtensils className="text-5xl text-emerald-400 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/60 hover:bg-gray-700/80 rounded-2xl p-6 transition-all duration-300 cursor-pointer border border-gray-700/50 hover:border-emerald-400/50 group transform hover:-translate-y-2 shadow-lg"
            >
              <div className="bg-emerald-500/10 p-4 rounded-full w-max mb-6 group-hover:bg-emerald-500/20 transition-all">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-emerald-400">{feature.title}</h3>
              <p className="text-gray-300 group-hover:text-gray-100 transition-colors">
                {feature.description}
              </p>
              <button className="mt-4 text-emerald-400 hover:text-emerald-300 font-medium flex items-center group-hover:underline">
                Explore
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Recent Activity Section */}
        <div className="mt-16 bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-gray-700/50"
          >
          <h3 className="text-2xl font-bold mb-6 text-emerald-400">Your Recent Activity</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-700/40 hover:bg-gray-700/60 rounded-xl p-5 transition-all border border-gray-600/30">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-emerald-500/20 p-2 rounded-full">
                    <FaHeart className="text-emerald-400" />
                  </div>
                  <span className="font-medium">Saved Recipe {item}</span>
                </div>
                <p className="text-gray-300">Italian Pasta Carbonara</p>
                <p className="text-sm text-gray-400 mt-2">2 days ago</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-gray-800/80 backdrop-blur-md py-6 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} FoodApp Delights. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;