import React from "react";

const YtVideoSeo = ({ data }) => {
  if (!data) return null;

  const { title, description, tags = [], hashtags = [], hook } = data;

  return (
    <div className="w-full flex justify-center p-4">
      <div className="bg-[#18181B] text-white rounded-2xl p-6 max-w-2xl shadow-lg">
        {/* Hook */}
        {hook && (
          <p className="text-sm font-semibold mb-4 border-b border-gray-700 pb-2">
            {hook}
          </p>
        )}

        {/* Title */}
        {title && <h2 className="text-lg font-bold mb-3">{title}</h2>}

        {/* Description */}
        {description && (
          <p className="text-sm mb-4 text-gray-200">{description}</p>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mb-3">
            <p className="text-xs font-medium text-gray-400 mb-1">Tags:</p>
            <p className="text-sm text-gray-300">{tags.join(", ")}</p>
          </div>
        )}

        {/* Hashtags */}
        {hashtags.length > 0 && (
          <div>
            <p className="text-xs font-medium text-gray-400 mb-1">Hashtags:</p>
            <p className="text-sm text-gray-300">{hashtags.join(" ")}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default YtVideoSeo;
