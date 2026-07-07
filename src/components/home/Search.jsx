import { Search as SearchIcon } from "lucide-react";

function Search() {
  const popularSearches = [
    "Pizza",
    "Burger",
    "Biryani",
    "Chinese",
    "Desserts",
    "Healthy Food",
  ];

  return (
    <section id="search" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Find Your Favorite Food
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Search restaurants, cuisines or your favourite dishes.
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl overflow-hidden rounded-2xl bg-white shadow-lg">
          <div className="flex flex-1 items-center px-5">
            <SearchIcon className="mr-3 text-gray-400" />

            <input
              type="text"
              placeholder="Search restaurants, cuisines or dishes..."
              className="w-full py-5 outline-none"
            />
          </div>

          <button className="bg-orange-500 px-8 font-semibold text-white transition hover:bg-orange-600">
            Search
          </button>
        </div>

        <div className="mt-10 text-center">
          <h3 className="font-semibold text-gray-700">Popular Searches</h3>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {popularSearches.map((item) => (
              <button
                key={item}
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
