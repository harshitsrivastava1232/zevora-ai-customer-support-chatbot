import { ArrowRight, Clock3, Sparkles, Star } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="bg-linear-to-b from-orange-100 via-white to-white"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-20 lg:flex-row">
        {/* LEFT SIDE */}
        <div className="flex-1">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            🚀 AI Powered Food Delivery
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 lg:text-7xl">
            Food Delivered
            <span className="block text-orange-500">Smarter with AI</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Discover restaurants, order your favorite meals and get personalized
            food recommendations powered by Zeva AI.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl">
              Order Now
              <ArrowRight size={20} />
            </button>

            <button className="rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:text-orange-500 hover:shadow-lg">
              Explore Restaurants
            </button>
          </div>

          {/* STATS */}

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="flex items-center gap-3 rounded-2xl bg-orange-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <Star className="text-orange-500" />

              <div>
                <p className="font-bold">4.9 Rating</p>

                <p className="text-sm text-gray-500">Trusted by thousands</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-orange-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <Clock3 className="text-orange-500" />

              <div>
                <p className="font-bold">20 Min</p>

                <p className="text-sm text-gray-500">Average Delivery</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-orange-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <Sparkles className="text-orange-500" />

              <div>
                <p className="font-bold">AI Suggestions</p>

                <p className="text-sm text-gray-500">Personalized Meals</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="relative flex flex-1 justify-center">
          <img
            src="/images/hero-food.png"
            alt="Food Delivery"
            className="w-full max-w-xl rounded-3xl shadow-2xl transition-all duration-500 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
