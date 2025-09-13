import { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import "./App.css";

interface SearchResultItem {
  cacheId?: string;
  link: string;
  title: string;
  displayLink: string;
  snippet: string;
}

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
