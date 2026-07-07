import { Apple, Smartphone } from "lucide-react";

function DownloadApp() {
  return (
    <section id="download" className="bg-orange-500 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* LEFT */}

        <div className="max-w-2xl text-white">
          <span className="rounded-full bg-white/20 px-4 py-2 font-semibold">
            📱 Mobile App
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight">
            Download Zevora
            <br />
            Food App Today
          </h2>

          <p className="mt-6 text-lg leading-8 text-orange-100">
            Order food faster, track deliveries in real-time and chat with Zeva
            AI anytime from your smartphone.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="flex cursor-pointer items-center gap-3 rounded-xl bg-white px-6 py-4 font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <Apple size={26} />
              App Store
            </button>

            <button className="flex cursor-pointer items-center gap-3 rounded-xl border border-white px-6 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-orange-500">
              <Smartphone size={24} />
              Google Play
            </button>
          </div>
        </div>

        {/* RIGHT */}

        <div className="flex items-center justify-center rounded-3xl bg-black/40 p-4">
          <img
            src="/images/app-mockup.png"
            alt="Mobile App"
            className="w-80 rounded-3xl shadow-2xl transition-all duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;
