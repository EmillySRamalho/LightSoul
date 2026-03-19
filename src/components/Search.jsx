import React from "react";

const Search = () => {
  return (
    <form className="flex items-center max-w-2xl mx-auto gap-3 mt-10">
      <label htmlFor="voice-search" className="sr-only">
        Buscar
      </label>

      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <svg
            className="w-5 h-5 text-[#F4A896]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              d="M12 7h.01m3.486 1.513h.01m-6.978 0h.01M6.99 12H7m9 4h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 3.043 12.89 9.1 9.1 0 0 0 8.2 20.1a8.62 8.62 0 0 0 3.769.9 2.013 2.013 0 0 0 2.03-2v-.857A2.036 2.036 0 0 1 16 16Z"
            />
          </svg>
        </div>

        <input
          type="text"
          id="voice-search"
          placeholder="Busque com calma, escolha com propósito 🌿"
          required
          className="block w-full rounded-full border border-[#F4A896] bg-[#F8F5F0] py-3 pl-12 pr-12 text-sm text-[#3E5F44] placeholder-[#8A9A87] shadow-sm outline-none transition focus:border-[#6B8E6E] focus:ring-2 focus:ring-[#ADC9B0]"
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center pr-4"
        >
          <svg
            className="w-5 h-5 text-[#F4A896] hover:text-[#F4A896] transition"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              d="M19 9v3a5.006 5.006 0 0 1-5 5h-4a5.006 5.006 0 0 1-5-5V9m7 9v3m-3 0h6M11 3h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z"
            />
          </svg>
        </button>
      </div>

      <button
        type="submit"
        className="inline-flex items-center rounded-full bg-[#FA8072] px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#F4A896] focus:outline-none focus:ring-2 focus:ring-[#ADC9B0]"
      >
        <svg
          className="w-4 h-4 mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
          />
        </svg>
        Buscar
      </button>
    </form>
  );
};

export default Search;