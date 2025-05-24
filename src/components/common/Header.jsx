import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ButtonComp from './Button';
import { auth } from "../../firebase";

import { onAuthStateChanged, signOut } from 'firebase/auth';

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate('/');
    } catch (error) {
      console.error('Sign-out failed:', error);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span 
                className="text-3xl tracking-normal leading-tight" 
                style={{ fontFamily: "'Jeju Myeongjo', serif", fontWeight: "300", letterSpacing: "0.01em" }}
              >
                Wearly
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/explore" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 hover:-translate-y-0.5 transform">
              Explore
            </Link>
            <Link to="/rentals" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 hover:-translate-y-0.5 transform">
              Rentals
            </Link>
            <Link to="/swapping" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 hover:-translate-y-0.5 transform">
              Swapping
            </Link>
            <Link to="/profile" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 hover:-translate-y-0.5 transform">
              Profile
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-gray-700 transition-all duration-200 hover:-translate-y-0.5 transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>

            <ButtonComp
              text="Upload"
              textColor="text-white"
              bgColor="bg-black hover:bg-gray-800"
              className="rounded-lg transition-all duration-200 hover:-translate-y-0.5 transform"
            />

            {user ? (
              <div className="flex items-center space-x-3">
                <span className="text-gray-700 font-medium">{user.displayName}</span>
                <button
  onClick={handleSignOut}
  className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg shadow-sm transition-all duration-200"
>
  Sign Out
</button>

              </div>
            ) : (
              <button
                onClick={handleLoginClick}
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
