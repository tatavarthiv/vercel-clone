import React from "react";

interface SearchResultItem {
  cacheId?: string;
  link: string;
  title: string;
  displayLink: string;
  snippet: string;
  pagemap?: {
    cse_image?: { src: string }[];
  };
}

interface SearchResultsProps {
  query: string;
  results: SearchResultItem[];
  loading: boolean;
  error: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  query,
  results,
  loading,
  error,
}) => {
  return (
    <div className="w-full max-w-4xl">
      {loading && (
        <div className="text-center text-blue-600 mb-4">Loading...</div>
      )}
      {error && <div className="text-center text-red-500 mb-4">{error}</div>}
      {!loading && !error && results.length > 0 && (
        <div className="overflow-x-auto">
          <ul className="flex gap-6 py-4 min-w-full">
            {results.map((item, idx) => {
              const image = item.pagemap?.cse_image?.[0]?.src;
              return (
                <li
                  key={item.cacheId || idx}
                  className="flex-shrink-0 w-64 bg-white rounded-lg shadow border p-4 flex flex-col items-center justify-between"
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {image ? (
                      <img
                        src={image}
                        alt={item.title}
                        className="w-full h-40 object-cover rounded mb-3"
                        onError={(e) =>
                          (e.currentTarget.style.display = "none")
                        }
                      />
                    ) : (
                      <div className="w-full h-40 flex items-center justify-center bg-gray-100 rounded mb-3 text-gray-400 text-sm">
                        No Image
                      </div>
                    )}
                    <div className="text-center font-semibold text-lg text-blue-700 hover:underline mt-2">
                      {item.title}
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {!loading && !error && query && results.length === 0 && (
        <div className="text-center text-gray-500">No results found.</div>
      )}
    </div>
  );
};

export default SearchResults;
