import React from "react";

const KeywordGens = ({ data }) => {
  if (!data) return null;

  const {
    primary_keywords = [],
    long_tail_keywords = [],
    low_competition_keywords = [],
    search_intent = {},
  } = data;

  return (
    <div className="w-full flex justify-start p-4">
      {/* Chat Bubble */}
      <div className="bg-[#18181B] max-w-2xl w-full rounded-2xl rounded-tl-none p-5 shadow-sm">
        <p className="text-sm font-semibold text-gray-200 mb-3">
          Keyword Research Result
        </p>

        {/* Primary */}
        {primary_keywords.length > 0 && (
          <div className="mb-3">
            <p className="text-xs font-semibold text-gray-300 mb-1">
              Primary Keywords
            </p>
            <p className="text-sm text-gray-400">
              {primary_keywords.join(", ")}
            </p>
          </div>
        )}

        {/* Long Tail */}
        {long_tail_keywords.length > 0 && (
          <div className="mb-3">
            <p className="text-xs font-semibold text-gray-300 mb-1">
              Long Tail Keywords
            </p>
            <p className="text-sm text-gray-400">
              {long_tail_keywords.join(", ")}
            </p>
          </div>
        )}

        {/* Low Competition */}
        {low_competition_keywords.length > 0 && (
          <div className="mb-3">
            <p className="text-xs font-semibold text-gray-300 mb-1">
              Low Competition Keywords
            </p>
            <p className="text-sm text-gray-400">
              {low_competition_keywords.join(", ")}
            </p>
          </div>
        )}

        {/* Search Intent */}
        {(search_intent.informational?.length > 0 ||
          search_intent.commercial?.length > 0 ||
          search_intent.transactional?.length > 0) && (
          <div>
            <p className="text-xs font-semibold text-gray-300 mb-1">
              Search Intent
            </p>

            {search_intent.informational?.length > 0 && (
              <p className="text-sm text-gray-400">
                <span className="font-medium">Informational:</span>{" "}
                {search_intent.informational.join(", ")}
              </p>
            )}

            {search_intent.commercial?.length > 0 && (
              <p className="text-sm text-gray-400">
                <span className="font-medium">Commercial:</span>{" "}
                {search_intent.commercial.join(", ")}
              </p>
            )}

            {search_intent.transactional?.length > 0 && (
              <p className="text-sm text-gray-400">
                <span className="font-medium">Transactional:</span>{" "}
                {search_intent.transactional.join(", ")}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  ); 
};

export default KeywordGens;
