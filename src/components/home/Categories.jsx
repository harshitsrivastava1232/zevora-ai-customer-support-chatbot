import { Pizza, Beef, IceCreamBowl, Soup } from "lucide-react";

function Categories() {
  const categories = [
    {
      title: "Pizza",
      items: "120+ Items",
      icon: <Pizza size={40} className="text-orange-500" />,
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
      icon: <Beef size={40} className="text-orange-500" />,
    },
    {
      title: "Desserts",
      items: "60+ Items",
      icon: <IceCreamBowl size={40} className="text-orange-500" />,
    },
    {
      title: "Soups",
      items: "45+ Items",
      icon: <Soup size={40} className="text-orange-500" />,
    },
  ];

  return (
    <section id="categories" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Browse Categories
          </h2>

          <p className="mt-4 text-lg text-gray-500">
            Explore your favourite cuisines.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-orange-200"
            >
              <div className="flex justify-center">
                {category.image ? (
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-24 w-24 rounded-full object-cover transition duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="transition duration-500 group-hover:scale-125">
                    {category.icon}
                  </div>
                )}
              </div>

              <h3 className="mt-6 text-center text-2xl font-bold transition group-hover:text-orange-500">
                {" "}
                {category.title}
              </h3>

              <p className="mt-2 text-center text-gray-500">{category.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
