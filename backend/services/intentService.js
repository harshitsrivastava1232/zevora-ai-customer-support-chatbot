const greetingPatterns = [
  "hi",
  "hello",
  "hey",
  "hii",
  "helo",
  "good morning",
  "good afternoon",
  "good evening",
  "namaste",
  "namaskar",
];

const supportKeywords = [
  "refund",
  "return",
  "cancel",
  "payment",
  "upi",
  "track",
  "tracking",
  "delivery",
  "coupon",
  "offer",
  "offers",
  "discount",
  "support",
  "help",
  "issue",
  "problem",
  "contact",
  "customer care",
  "payment failed",
  "refund kab",
  "cancel kar",
  "payment fail",
  "order track",
  "track order",
  "mera order",
];

const foodKeywords = [
  // Restaurant & Food
  "restaurant",
  "food",
  "eat",
  "hungry",
  "starving",
  "recommend",
  "suggest",
  "meal",
  "breakfast",
  "lunch",
  "dinner",
  "snacks",

  // Categories
  "pizza",
  "burger",
  "biryani",
  "healthy",
  "diet",
  "dessert",
  "sweet",
  "cake",
  "brownie",
  "waffle",
  "ice cream",
  "chicken",
  "chinese",
  "noodles",
  "fried rice",
  "manchurian",
  "sandwich",
  "roll",
  "pasta",
  "coffee",
  "cafe",

  // Filters
  "veg",
  "vegetarian",
  "non veg",
  "non-veg",
  "best",
  "top",
  "cheap",
  "budget",
  "premium",
  "under",
  "below",
  "less than",
  "above",
  "high protein",
  "protein",
  "gym",
  "spicy",
  "crispy",
  "family",
  "couple",
  "kids",

  // Cities
  "greater noida",
  "noida",
  "delhi",
  "ghaziabad",

  // Hindi / Hinglish
  "khana",
  "bhook",
  "bhukh",
  "bhook lagi",
  "bhook lagi hai",
  "khana hai",
  "kya khaun",
  "kya khau",
  "kuch suggest",
  "order karna",
  "veg khana",
  "non veg khana",
  "healthy khana",
  "restaurant batao",
  "pizza khana",
  "burger khana",
];

export const detectIntent = (message) => {
  const query = message.toLowerCase().trim();

  // ==========================
  // Greeting
  // ==========================

  if (greetingPatterns.includes(query)) {
    return "greeting";
  }

  // ==========================
  // Customer Support
  // ==========================

  if (supportKeywords.some((word) => query.includes(word))) {
    return "support";
  }

  // ==========================
  // Food Recommendation
  // ==========================

  if (foodKeywords.some((word) => query.includes(word))) {
    return "food";
  }

  // ==========================
  // General AI
  // ==========================

  return "general";
};
