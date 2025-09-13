const FeatureSection = () => (
  <section className="w-full bg-black text-white py-20 px-8 flex flex-col items-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
      Earn up to 4% interest on your crypto
    </h2>
    <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8 justify-center items-center">
      {/* Placeholder for features */}
      <div className="w-64 h-40 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 text-lg font-semibold">
        Feature 1
      </div>
      <div className="w-64 h-40 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 text-lg font-semibold">
        Feature 2
      </div>
      <div className="w-64 h-40 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 text-lg font-semibold">
        Feature 3
      </div>
    </div>
  </section>
);

export default FeatureSection;
