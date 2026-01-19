'use client'
import React, { useState } from 'react';
import { FiHome, FiGlobe, FiFileText, FiPaperclip, FiSend, FiChevronDown } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';


const FlyPerplex = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="flex h-screen bg-black text-white font-sans">
      {/* Sidebar */}
      <div className="w-80 bg-zinc-950 border-r border-zinc-800 flex flex-col">
        {/* Logo */}
        <div className="p-6 flex items-center gap-3">
          <HiSparkles className="w-6 h-6 text-white" />
          <span className="text-lg font-medium">Flyperplex</span>
        </div>

        {/* New Chat Button */}
        <div className="px-4 mb-6">
          <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
            <span className="text-xl">+</span>
            <span className="text-sm font-medium">New chat</span>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4">
          <div className="space-y-1">
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white">
              <FiHome className="w-5 h-5" />
              <span className="text-sm">Home</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white">
              <FiGlobe className="w-5 h-5" />
              <span className="text-sm">Discover</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white">
              <FiFileText className="w-5 h-5" />
              <span className="text-sm">My history</span>
            </button>
          </div>
        </nav>

        {/* Upgrade Section */}
        <div className="p-4 m-4 bg-gradient-to-br from-pink-500/10 to-orange-500/10 border border-pink-500/20 rounded-xl">
          <h3 className="text-sm font-semibold mb-1">Upgrade to premium</h3>
          <p className="text-xs text-zinc-400 mb-3">Enjoy premium benefits</p>
          <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
            Upgrade now
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="h-16 border-b border-zinc-800 flex items-center justify-between px-6">
          <div className="flex items-center gap-2 text-zinc-500">
            <span className="text-sm">🔒</span>
            <span className="text-sm">Flyperplex.com</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-8 h-8 rounded-full hover:bg-zinc-800 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-medium">
                U
              </div>
            </button>
            <FiChevronDown className="w-4 h-4 text-zinc-400" />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 pb-32">
          {/* Welcome Text */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-light mb-3">
              Welcome to <span className="font-semibold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">FlyPerplex</span>
            </h1>
            <p className="text-zinc-400 text-lg">Your personalized flight assistant.</p>
          </div>

          {/* Suggestion Cards */}
          <div className="grid grid-cols-3 gap-4 max-w-4xl w-full mb-16">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:bg-zinc-800 transition-colors cursor-pointer">
              <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center mb-3">
                <HiSparkles className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-sm font-medium mb-1.5">Where to next?</h3>
              <p className="text-xs text-zinc-500">Show me the cheapest flights to London next week.</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:bg-zinc-800 transition-colors cursor-pointer">
              <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center mb-3">
                <HiSparkles className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-sm font-medium mb-1.5">Flight updates</h3>
              <p className="text-xs text-zinc-500">Whats the check-in baggage policy for Delta?</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:bg-zinc-800 transition-colors cursor-pointer">
              <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center mb-3">
                <HiSparkles className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-sm font-medium mb-1.5">Ask about your trip</h3>
              <p className="text-xs text-zinc-500">Can I cancel my flight to Tokyo?</p>
            </div>
          </div>
        </div>

        {/* Input Section */}
        <div className="border-t border-zinc-800 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 mb-3">
              <input
                type="text"
                placeholder="Ask about flights..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full bg-transparent text-white placeholder-zinc-500 outline-none text-base mb-4"
              />
              <div className="flex items-center justify-between">
                <button className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm transition-colors">
                  <FiPaperclip className="w-4 h-4" />
                  <span>Attach file</span>
                </button>
                <div className="flex items-center gap-3">
                  <button className="text-zinc-400 hover:text-white text-sm transition-colors">
                    Select source
                  </button>
                  <button className="w-9 h-9 bg-zinc-700 hover:bg-zinc-600 rounded-full flex items-center justify-center transition-colors">
                    <FiSend className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
            <p className="text-center text-xs text-zinc-600">
              FlyPerplex can make mistakes. Check important info.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlyPerplex;