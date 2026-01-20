import React from "react";
import { HiSparkles } from "react-icons/hi";

const SuggestionCardHome = () => {
  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-5xl font-light mb-3">
          Welcome to{" "}
          <span className="font-semibold bg-linear-to-r from-gray-500 via-sky-300 to-blue-500 bg-clip-text text-transparent">
            SEOWala AI
          </span>
        </h1>
        <p className="text-zinc-400 text-lg">
          Your AI-powered SEO assistant for smarter growth.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4  w-full mb-16">
        {/* Card 1 */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:bg-zinc-800 transition-colors cursor-pointer">
          <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center mb-3">
            <HiSparkles className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-sm font-medium mb-1.5">Generate Meta Tags</h3>
          <p className="text-xs text-wrap text-zinc-500">
            Create SEO-friendly title, <br /> description, and OG tags
            instantly.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:bg-zinc-800 transition-colors cursor-pointer">
          <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center mb-3">
            <HiSparkles className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-sm font-medium mb-1.5">Keyword Research</h3>
          <p className="text-xs text-zinc-500">
            Find high-ranking keywords <br /> with low competition for your
            niche.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:bg-zinc-800 transition-colors cursor-pointer">
          <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center mb-3">
            <HiSparkles className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-sm font-medium mb-1.5">Content Optimization</h3>
          <p className="text-xs text-zinc-500">
            Optimize blogs, pages, and <br /> videos for better Google ranking.
          </p>
        </div>
      </div>
    </>
  );
};

export default SuggestionCardHome;
