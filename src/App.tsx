import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-center gap-8 mb-8">
          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={viteLogo}
              className="h-24 w-24 hover:drop-shadow-lg transition-all"
              alt="Vite logo"
            />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img
              src={reactLogo}
              className="h-24 w-24 animate-spin hover:drop-shadow-lg transition-all"
              alt="React logo"
            />
          </a>
        </div>

        <h1 className="text-4xl font-bold text-center mb-8">Vite + React</h1>

        <div className="text-center">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="btn-primary text-lg px-6 py-3 mb-4"
          >
            count is {count}
          </button>

          <p className="text-gray-600 mb-4">
            Edit{" "}
            <code className="bg-gray-100 px-2 py-1 rounded">src/App.tsx</code>{" "}
            and save to test HMR
          </p>

          <p className="text-gray-500 text-sm">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
