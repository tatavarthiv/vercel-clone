import React from "react";

interface SearchResultItem {
  cacheId?: string;
  link: string;
  title: string;
  displayLink: string;
  snippet: string;
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
    <div className="w-full max-w-xl">
      {loading && (
        <div className="text-center text-blue-600 mb-4">Loading...</div>
      )}
      {error && <div className="text-center text-red-500 mb-4">{error}</div>}
      {!loading && !error && results.length > 0 && (
        <ul className="space-y-6">
          {results.map((item, idx) => (
            <li key={item.cacheId || idx} className="border-b pb-4">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-blue-700 hover:underline"
              >
                {item.title}
              </a>
              <div className="text-sm text-gray-500 mb-1">
                {item.displayLink}
              </div>
              <p className="text-gray-700">{item.snippet}</p>
            </li>
          ))}
        </ul>
      )}
      {!loading && !error && query && results.length === 0 && (
        <div className="text-center text-gray-500">No results found.</div>
      )}
    </div>
  );
};

export default SearchResults;
