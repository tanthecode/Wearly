import React, { useState } from 'react';
import { Heart, MessageCircle, Eye } from 'lucide-react';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('my-rentals');

  const rentalItems = [
    {
      id: 1,
      title: "Luxury Downtown Apartment",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
      likes: 245,
      views: 1200,
      type: "Apartment"
    },
    {
      id: 2,
      title: "Modern Studio Space",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      likes: 189,
      views: 890,
      type: "Studio"
    },
    {
      id: 3,
      title: "Cozy Family Home",
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=400&h=300&fit=crop",
      likes: 312,
      views: 1540,
      type: "House"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section with Profile */}
      <div className="relative">
        {/* Background gradient */}
        <div className="h-48 bg-gradient-to-r from-gray-100 to-gray-200"></div>
        
        {/* Profile Section */}
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row items-start md:items-end -mt-20 md:-mt-16">
            {/* Profile Image */}
            <div className="relative mb-6 md:mb-0 md:mr-8">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b593?w=200&h=200&fit=crop&crop=face"
                alt="Profile"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg object-cover"
              />
            </div>
            
            {/* Profile Info */}
            <div className="flex-1">
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl md:text-4xl font-bold">Sarah Johnson</h1>
                  <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                    PRO
                  </span>
                </div>
                <p className="text-gray-600 text-lg">Property Manager & Host</p>
                <p className="text-gray-500">based in New York</p>
              </div>
              
              <div className="flex gap-4 mb-6">
                <button className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                  Follow
                </button>
                <button className="border border-black text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Get in touch
                </button>
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 md:gap-12">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">1,247</div>
                <div className="text-gray-500 text-sm">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">89</div>
                <div className="text-gray-500 text-sm">Following</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">4.8</div>
                <div className="text-gray-500 text-sm">Trust Score</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Tabs */}
      <div className="max-w-6xl mx-auto px-6 mt-8">
        <div className="border-b border-gray-200">
          <nav className="flex gap-8">
            <button
              onClick={() => setActiveTab('my-rentals')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'my-rentals'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              My Rentals
            </button>
          </nav>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {activeTab === 'my-rentals' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rentalItems.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                      {item.type}
                    </span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-gray-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>{item.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{item.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;