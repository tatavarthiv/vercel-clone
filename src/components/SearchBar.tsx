import React, { useState } from "react";

interface SearchResultItem {
  cacheId?: string;
  link: string;
  title: string;
  displayLink: string;
  snippet: string;
}

interface SearchBarProps {
  setQuery: (query: string) => void;
  setResults: (results: SearchResultItem[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  setQuery,
  setResults,
  setLoading,
  setError,
}) => {
  const [input, setInput] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setQuery(input);
    setLoading(true);
    setError("");
    setResults([]);
    try {
      const apiKey = import.meta.env.VITE_GOOGLE_CUSTOM_SEARCH_API_KEY;
      const cx = import.meta.env.VITE_GOOGLE_CUSTOM_SEARCH_CX;
      const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${encodeURIComponent(
        input
      )}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.items) {
        setResults(data.items);
      } else {
        setResults([]);
        setError("No results found.");
      }
    } catch {
      setError("Failed to fetch results.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl flex gap-2 mb-8">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search..."
        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <button
        type="submit"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
