import React from "react";
import PromoBar from "./components/PromoBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PromoBar />
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
