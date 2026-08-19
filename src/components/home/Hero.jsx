import {
  ArrowRight,
  Clock3,
  MapPin,
  Sparkles,
  Star,
  Utensils,
} from "lucide-react";

function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="overflow-hidden bg-linear-to-b from-orange-100 via-white to-white"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 py-20 lg:flex-row lg:gap-20 lg:py-24">
        {/* LEFT SIDE */}
        <div className="flex-1">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
            🚀 AI Powered Food Delivery
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-gray-900 lg:text-7xl">
            Food Delivered
            <span className="mt-2 block text-orange-500">
              Smarter with AI
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
            Discover restaurants, order your favorite meals and get
            personalized food recommendations powered by Zeva AI.
          </p>

          {/* Feature Pills */}
          <div className="mt-7 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
              <Sparkles size={16} className="text-orange-500" />
              AI Recommendations
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
              <Clock3 size={16} className="text-orange-500" />
              Fast Delivery
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
              <Utensils size={16} className="text-orange-500" />
              100+ Food Choices
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollToSection("restaurants")}
              className="flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl"
            >
              Order Now
              <ArrowRight size={20} />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("restaurants")}
              className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:text-orange-500 hover:shadow-lg"
            >
              Explore Restaurants
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-orange-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="rounded-xl bg-orange-50 p-2.5">
                <Star
                  size={21}
                  fill="currentColor"
                  className="text-orange-500"
                />
              </div>

              <div>
                <p className="font-bold text-gray-900">4.9 Rating</p>
                <p className="text-sm text-gray-500">Trusted by thousands</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-orange-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="rounded-xl bg-orange-50 p-2.5">
                <Clock3 size={21} className="text-orange-500" />
              </div>

              <div>
                <p className="font-bold text-gray-900">20 Min</p>
                <p className="text-sm text-gray-500">Average Delivery</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-orange-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="rounded-xl bg-orange-50 p-2.5">
                <Sparkles size={21} className="text-orange-500" />
              </div>

              <div>
                <p className="font-bold text-gray-900">AI Suggestions</p>
                <p className="text-sm text-gray-500">Personalized Meals</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex flex-1 justify-center">
          {/* Glow */}
          <div className="absolute inset-0 -z-10 mx-auto h-72 w-72 rounded-full bg-orange-200/50 blur-3xl lg:h-96 lg:w-96" />

          <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-orange-100 bg-white p-3 shadow-2xl">
            <img
              src="/images/hero-food.png"
              alt="Zevora food delivery"
              className="h-full w-full rounded-[1.5rem] object-cover transition-transform duration-700 hover:scale-[1.02]"
            />

            {/* Rating Card */}
            <div className="absolute left-7 top-7 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
              <div className="rounded-xl bg-orange-100 p-2">
                <Star
                  size={18}
                  fill="currentColor"
                  className="text-orange-500"
                />
              </div>

              <div>
                <p className="text-sm font-bold text-gray-900">4.9/5</p>
                <p className="text-xs text-gray-500">Customer Rating</p>
              </div>
            </div>

            {/* Delivery Card */}
            <div className="absolute bottom-7 right-7 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
              <div className="rounded-xl bg-orange-100 p-2">
                <MapPin size={18} className="text-orange-500" />
              </div>

              <div>
                <p className="text-sm font-bold text-gray-900">
                  20 min delivery
                </p>
                <p className="text-xs text-gray-500">Near your location</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;