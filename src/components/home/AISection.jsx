import { Check, MessageCircle, Sparkles, ArrowRight } from "lucide-react";

function AISection() {
  const features = [
    {
      title: "Personalized food recommendations",
      description: "Get suggestions based on your food preferences, budget and requirements.",
    },
    {
      title: "Instant customer support",
      description: "Ask about payments, refunds, delivery and other common support queries.",
    },
    {
      title: "Smart restaurant suggestions",
      description: "Find suitable restaurants and dishes using natural-language requests.",
    },
    {
      title: "24/7 AI assistance",
      description: "Chat with Zeva AI whenever you need help choosing or ordering food.",
    },
  ];

  const openChat = () => {
    window.dispatchEvent(new Event("open-zeva-chat"));
  };

  return (
    <section
      id="assistant"
      className="overflow-hidden bg-white py-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:gap-20">
        {/* LEFT */}
        <div className="relative flex flex-1 justify-center">
          <div className="absolute inset-0 mx-auto h-80 w-80 rounded-full bg-orange-100/70 blur-3xl" />

          <div className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-orange-100 bg-orange-50 p-6 shadow-xl">
            <img
              src="/images/ai-assistant.png"
              alt="Zeva AI food ordering assistant"
              className="mx-auto w-full rounded-3xl transition duration-700 hover:scale-[1.02]"
            />

            <div className="absolute left-10 top-10 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lg">
              <div className="rounded-xl bg-orange-100 p-2">
                <Sparkles size={18} className="text-orange-500" />
              </div>

              <div>
                <p className="text-sm font-bold text-gray-900">
                  AI Powered
                </p>
                <p className="text-xs text-gray-500">
                  Food recommendations
                </p>
              </div>
            </div>

            <div className="absolute bottom-10 right-10 rounded-2xl bg-white px-4 py-3 shadow-lg">
              <p className="text-sm font-bold text-gray-900">
                Zeva AI
              </p>
              <p className="text-xs text-green-600">
                ● Online
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            🤖 Zeva AI Assistant
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Your Smart Food
            <span className="block text-orange-500">
              Ordering Assistant
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Chat with Zeva AI to discover restaurants, get personalized
            food recommendations and solve your queries instantly.
          </p>

          {/* Features */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-100 hover:bg-orange-50/50 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-orange-100 p-2">
                    <Check size={17} className="text-orange-500" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            type="button"
            onClick={openChat}
            className="mt-10 flex items-center gap-3 rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl"
          >
            <MessageCircle size={22} />
            Start Chatting
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default AISection;