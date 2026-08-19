import { ArrowRight, Clock3, MapPin, Star } from "lucide-react";

function FeaturedRestaurants() {
  const restaurants = [
    {
      name: "Biryani House",
      image: "/images/restaurant-biryani.png",
      rating: "4.8",
      time: "25 min",
      location: "Lucknow",
      cuisine: "North Indian • Biryani",
    },
    {
      name: "Burger Point",
      image: "/images/restaurant-burger.png",
      rating: "4.7",
      time: "20 min",
      location: "Noida",
      cuisine: "Burgers • Fast Food",
    },
    {
      name: "Italian Corner",
      image: "/images/restaurant-italian.png",
      rating: "4.9",
      time: "30 min",
      location: "Delhi",
      cuisine: "Italian • Pizza",
    },
    {
      name: "Wok Express",
      image: "/images/restaurant-chinese.png",
      rating: "4.8",
      time: "28 min",
      location: "Greater Noida",
      cuisine: "Chinese • Asian",
    },
    {
      name: "Green Bowl",
      image: "/images/restaurant-healthy.png",
      rating: "4.9",
      time: "22 min",
      location: "Noida",
      cuisine: "Healthy • Salads",
    },
    {
      name: "Sweet Spot Cafe",
      image: "/images/restaurant-dessert.png",
      rating: "4.8",
      time: "18 min",
      location: "Delhi",
      cuisine: "Cafe • Desserts",
    },
  ];

  return (
    <section id="restaurants" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            ⭐ Top Picks
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Featured Restaurants
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Discover highly rated restaurants and explore delicious meals
            delivered straight to your door.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((restaurant) => (
            <article
              key={restaurant.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={`${restaurant.name} restaurant`}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-sm font-semibold text-gray-900 shadow-md">
                  Popular
                </div>

                <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-full bg-white px-3 py-1 text-sm font-semibold text-orange-500 shadow-md">
                  <Star size={16} fill="currentColor" />
                  {restaurant.rating}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-orange-500">
                  {restaurant.name}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {restaurant.cuisine}
                </p>

                <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Clock3 size={18} className="text-orange-500" />
                    <span>{restaurant.time}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-orange-500" />
                    <span>{restaurant.location}</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg"
                >
                  Explore Restaurant
                  <ArrowRight size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedRestaurants;