import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between pt-32 pb-16 px-8 bg-white min-h-[80vh]">
      <div className="max-w-xl mb-12 md:mb-0">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
          The future of money is here
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          We're the most trusted place for people and businesses to buy, sell,
          and use crypto.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 mb-2">
          <input
            type="email"
            placeholder="satoshi@nakamoto.com"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base w-full sm:w-auto"
          />
          <button
            type="submit"
            className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 text-base"
          >
            Sign up
          </button>
        </form>
        <span className="text-sm text-gray-500">
          Sign up and get up to $2,000 in crypto<sup>1</sup>
        </span>
      </div>
      <div className="flex gap-6">
        {/* Placeholder for mobile app screenshots */}
        <div className="w-48 h-96 bg-gray-100 rounded-3xl shadow-lg flex items-center justify-center text-gray-400 text-lg font-semibold">
          App Image 1
        </div>
        <div className="w-48 h-96 bg-gray-100 rounded-3xl shadow-lg flex items-center justify-center text-gray-400 text-lg font-semibold">
          App Image 2
        </div>
      </div>
    </section>
  );
};

export default Hero;
