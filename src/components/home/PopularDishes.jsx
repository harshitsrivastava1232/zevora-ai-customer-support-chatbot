import { ArrowRight, Star } from "lucide-react";

function PopularDishes() {
  const dishes = [
    {
      name: "Margherita Pizza",
      price: "₹249",
      rating: "4.8",
      image: "/images/dish-margherita.png",
      category: "Pizza",
      tag: "Best Seller",
    },
    {
      name: "Healthy Bowl",
      price: "₹299",
      rating: "4.9",
      image: "/images/dish-bowl.png",
      category: "Healthy",
      tag: "Healthy Pick",
    },
    {
      name: "Hakka Noodles",
      price: "₹199",
      rating: "4.7",
      image: "/images/dish-noodles.png",
      category: "Chinese",
      tag: "Popular",
    },
    {
      name: "Chocolate Dessert",
      price: "₹179",
      rating: "4.9",
      image: "/images/dish-dessert.png",
      category: "Dessert",
      tag: "Top Rated",
    },
    {
      name: "Classic Burger",
      price: "₹229",
      rating: "4.8",
      image: "/images/dish-burger.png",
      category: "Burgers",
      tag: "Popular",
    },
    {
      name: "Chicken Biryani",
      price: "₹279",
      rating: "4.9",
      image: "/images/dish-biryani.png",
      category: "Biryani",
      tag: "Best Seller",
    },
    {
      name: "Alfredo Pasta",
      price: "₹259",
      rating: "4.8",
      image: "/images/dish-pasta.png",
      category: "Pasta",
      tag: "Chef Pick",
    },
    {
      name: "Cold Coffee",
      price: "₹159",
      rating: "4.7",
      image: "/images/dish-coldcoffee.png",
      category: "Beverages",
      tag: "Refreshing",
    },
  ];

  return (
    <section id="menu" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            🍽️ Customer Favorites
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Popular Dishes
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Most loved dishes ordered by thousands of customers.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {dishes.map((dish) => (
            <article
              key={dish.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-gray-900 shadow-md">
                  {dish.tag}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-orange-500">
                      {dish.category}
                    </p>

                    <h3 className="mt-1 min-h-[56px] text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-orange-500">
                      {dish.name}
                    </h3>
                  </div>

                  <div className="flex shrink-0 items-center gap-1 rounded-full bg-orange-50 px-2.5 py-1 text-sm font-semibold text-orange-600">
                    <Star size={15} fill="currentColor" />
                    {dish.rating}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xl font-bold text-orange-500">
                    {dish.price}
                  </span>

                  <span className="text-sm text-gray-500">
                    Fast delivery
                  </span>
                </div>

                <button
                  type="button"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg"
                >
                  Add to Cart
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

export default PopularDishes;