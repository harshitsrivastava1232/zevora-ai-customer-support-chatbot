function PopularDishes() {
  const dishes = [
    {
      name: "Margherita Pizza",
      price: "₹249",
      rating: "4.8",
      image: "/images/dish-margherita.png",
    },
    {
      name: "Healthy Bowl",
      price: "₹299",
      rating: "4.9",
      image: "/images/dish-bowl.png",
    },
    {
      name: "Hakka Noodles",
      price: "₹199",
      rating: "4.7",
      image: "/images/dish-noodles.png",
    },
    {
      name: "Chocolate Dessert",
      price: "₹179",
      rating: "4.9",
      image: "/images/dish-dessert.png",
    },
  ];

  return (
    <section id="menu" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900">Popular Dishes</h2>

          <p className="mt-4 text-lg text-gray-600">
            Most loved dishes ordered by thousands of customers.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {dishes.map((dish) => (
            <div
              key={dish.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold transition group-hover:text-orange-500"></h3>

                <div className="mt-3 flex items-center justify-between">
                  <span className="font-semibold text-orange-500">
                    {dish.price}
                  </span>

                  <span>⭐ {dish.rating}</span>
                </div>

                <button className="mt-6 w-full rounded-xl bg-orange-500 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularDishes;
