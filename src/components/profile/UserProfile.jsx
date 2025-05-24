import React, { useState } from 'react';
import { Heart, MessageCircle, Eye } from 'lucide-react';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('my-listings');

  const rentalItems = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=500&auto=format",
      likes: 245,
      views: 1200,
      type: "Jacket",
      price: 249,
      rentPrice: 249
    },
    {
      id: 2,
      title: "Designer Summer Dress",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&auto=format",
      likes: 189,
      views: 890,
      type: "Dress",
      price: 399,
      rentPrice: 399
    },
    {
      id: 3,
      title: "Leather Crossbody Bag",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&auto=format",
      likes: 312,
      views: 1540,
      type: "Bag",
      price: 599,
      rentPrice: 599
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
                src="data:image/jpeg;base64,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"
                alt="Profile"
                className="w-50 h-50 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg object-cover"
              />
            </div>
            
            {/* Profile Info */}
            <div className="flex-1">
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl md:text-4xl font-bold">Sarah Johnson</h1>
                </div>
              </div>
              
              <div className="flex gap-4 mb-6">
                <button className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                  Follow
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
              onClick={() => setActiveTab('my-listings')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'my-listings'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              My Listings
            </button>
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
            <button
              onClick={() => setActiveTab('wishlist')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'wishlist'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Wishlist
            </button>
          </nav>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {activeTab === 'my-listings' && (
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
                  
                  <div className="flex items-center justify-between">
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
                    <div className="text-right">
                      <div className="font-semibold text-blue-600">₹{item.rentPrice}</div>
                      <div className="text-xs text-gray-500">per day</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

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
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span>{item.likes}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-blue-600">₹{item.rentPrice}</div>
                      <div className="text-xs text-gray-500">per day</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'wishlist' && (
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
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span>{item.likes}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-blue-600">₹{item.rentPrice}</div>
                      <div className="text-xs text-gray-500">per day</div>
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
