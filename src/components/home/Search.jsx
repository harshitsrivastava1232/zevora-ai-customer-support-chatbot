import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";

function Search() {
  const [searchValue, setSearchValue] = useState("");

  const popularSearches = [
    "Pizza",
    "Burger",
    "Biryani",
    "Chinese",
    "Desserts",
    "Healthy Food",
  ];

  const openChatWithSearch = (query) => {
    const cleanQuery = query.trim();

    if (!cleanQuery) return;

    window.dispatchEvent(
      new CustomEvent("open-zeva-chat-with-message", {
        detail: {
          message: cleanQuery,
        },
      }),
    );
  };

  const handleSearch = () => {
    openChatWithSearch(searchValue);
  };

  return (
    <section id="search" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            🔎 Smart Search
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Find Your Favorite Food
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Search restaurants, cuisines or your favourite dishes with Zeva AI.
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg focus-within:ring-2 focus-within:ring-orange-200">
          <div className="flex flex-1 items-center px-5">
            <SearchIcon className="mr-3 shrink-0 text-gray-400" />

            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSearch();
                }
              }}
              placeholder="Try 'pizza under ₹300' or 'healthy dinner'..."
              className="w-full py-5 outline-none"
            />
          </div>

          <button
            type="button"
            onClick={handleSearch}
            disabled={!searchValue.trim()}
            className="bg-orange-500 px-8 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-orange-300"
          >
            Search
          </button>
        </div>

        <div className="mt-10 text-center">
          <h3 className="font-semibold text-gray-700">
            Popular Searches
          </h3>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {popularSearches.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => openChatWithSearch(item)}
                className="rounded-full border border-orange-200 bg-white px-5 py-2 transition hover:bg-orange-500 hover:text-white"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Search;