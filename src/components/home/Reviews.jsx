import { Star } from "lucide-react";

function Reviews() {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Food Lover",
      review:
        "Zevora has completely changed the way I order food. The AI recommendations are surprisingly accurate!",
    },
    {
      name: "Priya Verma",
      role: "Regular Customer",
      review:
        "Beautiful interface, fast delivery and excellent restaurant suggestions. Loved the overall experience.",
    },
    {
      name: "Aman Singh",
      role: "Fitness Enthusiast",
      review:
        "I asked Zeva AI for healthy meals under ₹300 and it gave perfect recommendations.",
    },
  ];

  return (
    <section id="reviews" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Testimonials
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Thousands of happy customers trust Zevora every day.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-3xl bg-gray-50 p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-orange-500 text-orange-500"
                  />
                ))}
              </div>

              <p className="leading-7 text-gray-600">"{review.review}"</p>

              <div className="mt-8">
                <h3 className="font-bold text-gray-900">{review.name}</h3>

                <p className="text-gray-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
