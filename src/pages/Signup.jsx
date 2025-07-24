import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [full_name, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword,setShowPassword] = useState(false)

  const navigate = useNavigate();

  const handleToggle = (e) => {
    e.preventDefault();
    setShowPassword(prev => !prev)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const data = { full_name, email, password };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/user/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setFullName('');
        setEmail('');
        setPassword('');
        navigate('/login');
      } else {
        setError(result.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup Error:', error.message);
      setError(error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/blackboard.png')] opacity-15 animate-subtle-drift"></div>

      <div className="w-fit md:w-full md:max-w-4xl flex flex-col lg:flex-row bg-transparent rounded-3xl shadow-2xl overflow-hidden mx-4 sm:mx-6 lg:mx-0">
        {/* Left Logo Section */}
        <div className="hidden lg:flex bg-gradient-to-br from-green-700 to-teal-600 items-center justify-center p-10 relative">
          <div className="text-center z-10">
            <h1 className="text-5xl font-extrabold text-white font-handwritten tracking-wide animate-draw">
              Recipe Haven
            </h1>
            <p className="text-lg text-green-100 mt-4 font-light tracking-wider">
              Cook with Passion
            </p>
            <svg
              className="w-14 h-14 mx-auto mt-6 text-green-200 animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Signup Form Section */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg max-w-md mx-auto border border-green-200 relative">
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-500 rounded-full animate-bounce-slow"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-6 text-center font-handwritten tracking-wide">
              Join the Feast
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-green-700">
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={full_name}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="mt-1 w-full p-3 bg-green-50 border-l-4 border-green-400 rounded-r-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-500"
                  placeholder="Your Full Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-green-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 w-full p-3 bg-green-50 border-l-4 border-green-400 rounded-r-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-500"
                  placeholder="your.email@recipehaven.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-green-700">
                  Password
                </label>
                <div className='flex items-center'>
                  <input
                  id="password"
                  type={showPassword ? "text":"password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 w-full p-3 bg-green-50 border-l-4 border-green-400 rounded-r-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-500"
                  placeholder="••••••••"
                />
                <button onClick={handleToggle}>
                  {showPassword ? <Eye/> : <EyeOff/>}
                </button>
                </div>
              </div>

              {error && (
                <p className="text-red-600 text-sm text-center font-medium mt-2">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-md disabled:opacity-60"
              >
                {loading ? 'Signing Up...' : 'Sign Up'}
              </button>
            </form>

            <p className="mt-5 text-sm text-gray-600 text-center">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-green-600 font-semibold hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
