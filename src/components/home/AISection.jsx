import { MessageCircle, Sparkles } from "lucide-react";

function AISection() {
  const features = [
    "Personalized food recommendations",
    "Instant customer support",
    "Smart restaurant suggestions",
    "24/7 AI assistance",
  ];

  return (
    <section id="assistant" className="bg-white py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">
        {/* LEFT */}

        <div className="flex-1">
          <img
            src="/images/ai-assistant.png"
            alt="AI Assistant"
            className="mx-auto w-full max-w-md"
          />
        </div>

        {/* RIGHT */}

        <div className="flex-1">
          <span className="rounded-full bg-orange-100 px-4 py-2 font-semibold text-orange-600">
            🤖 Zeva AI Assistant
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-gray-900">
            Your Smart Food
            <span className="block text-orange-500">Ordering Assistant</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Chat with Zeva AI to discover restaurants, get personalized food
            recommendations and solve your queries instantly.
          </p>

          <div className="mt-10 space-y-5">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-4">
                <Sparkles className="text-orange-500" />

                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>

          <button className="mt-10 flex items-center gap-3 rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600">
            <MessageCircle size={22} />
            Start Chatting
          </button>
        </div>
      </div>
    </section>
  );
}

export default AISection;
