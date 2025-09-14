import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import "./App.css";

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

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDefault = async () => {
      setQuery("quamtum andhra");
      setLoading(true);
      setError("");
      setResults([]);
      try {
        const apiKey = import.meta.env.VITE_GOOGLE_CUSTOM_SEARCH_API_KEY;
        const cx = import.meta.env.VITE_GOOGLE_CUSTOM_SEARCH_CX;
        const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=quamtum%20andhra`;
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
    fetchDefault();
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start pt-16 px-4">
      <SearchBar
        setQuery={setQuery}
        setResults={setResults}
        setLoading={setLoading}
        setError={setError}
      />
      <SearchResults
        query={query}
        results={results}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default App;
