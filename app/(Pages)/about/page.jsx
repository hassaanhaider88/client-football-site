/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function InfluencerMarketing() {
  const stats = [
    { value: "10k+", label: "Deal with Clients" },
    { value: "1.5k+", label: "Team Members" },
    { value: "24.1k+", label: "Completed Project" },
  ];

  const services = [
    {
      title: "YouTube Video SEO",
      description:
        "We optimize your YouTube videos for maximum visibility using proper titles, descriptions, tags, and watch-time focused SEO techniques to rank higher in search and suggested videos.",
      bgColor: "bg-blue-950/30",
      url: "yt-video-seo",
    },
    {
      title: "Meta Tags Optimization",
      description:
        "We create and optimize SEO-friendly meta titles, descriptions, and Open Graph tags to improve click-through rates and search engine rankings for your website.",
      bgColor: "bg-gray-800/50",
      url: "meta-tags",
    },
    {
      title: "Media & Social Posts",
      description:
        "We design and optimize media posts for social platforms with SEO-aligned captions, hashtags, and engagement strategies to boost reach and brand visibility.",
      bgColor: "bg-gray-800/50",
      fullWidth: true,
      url: "media-post",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-gray-400 text-sm mb-4 tracking-wide">We Are!</p>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <h1 className="text-4xl lg:text-5xl font-bold max-w-xl leading-tight">
              Innovative Influencer Marketing to Boost Your Business
            </h1>

            {/* Stats */}
            <div className="flex gap-8  lg:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-500 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm whitespace-nowrap">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Image */}
          <div className="lg:row-span-2 rounded-3xl overflow-hidden">
            <img
              src="https://i.pinimg.com/originals/af/34/82/af3482128e5ebbd2ec3a7db54c778eb3.png"
              alt="Business meeting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Ad Campaign Strategies */}
          <div
            className={`${services[0].bgColor} rounded-3xl p-8 border border-gray-800 hover:-translate-y-1 transition-transform`}
          >
            <h2 className="text-2xl font-bold mb-4">{services[0].title}</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              {services[0].description}
            </p>
          </div>

          {/* Content Strategy */}
          <div
            className={`${services[1].bgColor} rounded-3xl p-8 border border-gray-800 hover:-translate-y-1 transition-transform`}
          >
            <h2 className="text-2xl font-bold mb-4">{services[1].title}</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              {services[1].description}
            </p>
          </div>

          {/* Business Scaling */}
          <div
            className={`${services[2].bgColor} rounded-3xl p-8 border border-gray-800 lg:col-span-2 hover:-translate-y-1 transition-transform`}
          >
            <h2 className="text-2xl font-bold mb-4">{services[2].title}</h2>
            <p className="text-gray-300 mb-8 leading-relaxed max-w-3xl">
              {services[2].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
