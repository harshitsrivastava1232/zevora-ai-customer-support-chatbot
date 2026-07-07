import { Clock3, MapPin, Star } from "lucide-react";

function FeaturedRestaurants() {
  const restaurants = [
    {
      name: "Biryani House",
      image: "/images/restaurant-biryani.png",
      rating: "4.8",
      time: "25 min",
      location: "Lucknow",
    },
    {
      name: "Burger Point",
      image: "/images/restaurant-burger.png",
      rating: "4.7",
      time: "20 min",
      location: "Noida",
    },
    {
      name: "Italian Corner",
      image: "/images/restaurant-italian.png",
      rating: "4.9",
      time: "30 min",
      location: "Delhi",
    },
  ];

  return (
    <section id="restaurants" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Featured Restaurants
          </h2>

          <p className="mt-4 text-lg text-gray-500">
            Top rated restaurants near you.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold transition group-hover:text-orange-500"></h3>

                  <div className="flex items-center gap-1 text-orange-500">
                    <Star size={18} fill="currentColor" />
                    <span className="font-semibold">{restaurant.rating}</span>
                  </div>
                </div>

                <div className="mt-5 flex justify-between text-gray-500">
                  <div className="flex items-center gap-2">
                    <Clock3 size={18} />
                    {restaurant.time}
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    {restaurant.location}
                  </div>
                </div>

                <button className="mt-6 w-full rounded-xl bg-orange-500 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedRestaurants;
