import { ArrowRight } from "lucide-react";

function Categories() {
  const categories = [
    {
      title: "Pizza",
      items: "120+ Items",
      image: "/images/dish-margherita.png",
    },
    {
      title: "Chicken",
      items: "95+ Items",
      image: "/images/category-chicken.png",
    },
    {
      title: "Healthy",
      items: "80+ Items",
      image: "/images/category-healthy.png",
    },
    {
      title: "Burger",
      items: "70+ Items",
      image: "/images/dish-burger.png",
    },
    {
      title: "Desserts",
      items: "60+ Items",
      image: "/images/dish-dessert.png",
    },
    {
  title: "Soups",
  items: "45+ Items",
  image: "/images/category-soups.png",
},
  ];

  return (
    <section id="categories" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            🍴 Explore More
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Browse Categories
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Explore your favourite cuisines and discover something delicious.
          </p>
        </div>

        {/* Category Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <article
              key={category.title}
              className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl"
            >
              {/* Image / Icon */}
              <div className="relative flex h-56 items-center justify-center overflow-hidden bg-orange-50">
                {category.image ? (
                  <img
                    src={category.image}
                    alt={`${category.title} food`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-md transition duration-500 group-hover:scale-110">
                    {category.icon}
                  </div>
                )}

                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-sm font-semibold text-gray-900 shadow-md">
                  Popular
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-orange-500">
                      {category.title}
                    </h3>

                    <p className="mt-2 text-gray-500">
                      {category.items}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;