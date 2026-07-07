export const detectIntent = (message) => {
  const query = message.toLowerCase().trim();

  // ==========================
  // Greeting
  // ==========================

  if (
    /^(hi|hello|hey|hii|helo|good morning|good afternoon|good evening|namaste|namaskar)$/.test(
      query,
    )
  ) {
    return "greeting";
  }

  const foodPatterns = [
    "hungry",
    "starving",
    "recommend",
    "suggest",
    "eat",
    "food",
  ];

  if (foodPatterns.some((word) => query.includes(word))) {
    return "food";
  }

  // ==========================
  // Customer Support
  // ==========================

  if (
    query.includes("refund") ||
    query.includes("return") ||
    query.includes("cancel") ||
    query.includes("payment") ||
    query.includes("upi") ||
    query.includes("track") ||
    query.includes("tracking") ||
    query.includes("delivery") ||
    query.includes("coupon") ||
    query.includes("offer") ||
    query.includes("support") ||
    query.includes("help") ||
    query.includes("issue") ||
    query.includes("problem") ||
    query.includes("contact") ||
    // Hindi / Hinglish

    query.includes("refund kab") ||
    query.includes("cancel kar") ||
    query.includes("payment fail") ||
    query.includes("order track") ||
    query.includes("mera order") ||
    query.includes("coupon") ||
    query.includes("bhook lagi") ||
    query.includes("bhook lagi hai") ||
    query.includes("khane ka") ||
    query.includes("kya order karu") ||
    query.includes("kuch accha") ||
    query.includes("pizza khana") ||
    query.includes("burger khana") ||
    query.includes("offer hai")
  ) {
    return "support";
  }

  // ==========================
  // Food Recommendation
  // ==========================

  if (
    query.includes("restaurant") ||
    query.includes("pizza") ||
    query.includes("burger") ||
    query.includes("healthy") ||
    query.includes("diet") ||
    query.includes("dessert") ||
    query.includes("sweet") ||
    query.includes("chicken") ||
    query.includes("food") ||
    query.includes("meal") ||
    query.includes("breakfast") ||
    query.includes("lunch") ||
    query.includes("dinner") ||
    query.includes("snacks") ||
    query.includes("veg") ||
    query.includes("non veg") ||
    query.includes("non-veg") ||
    query.includes("chinese") ||
    query.includes("biryani") ||
    query.includes("pasta") ||
    query.includes("sandwich") ||
    query.includes("roll") ||
    query.includes("hungry") ||
    query.includes("eat") ||
    query.includes("recommend") ||
    query.includes("suggest") ||
    query.includes("best") ||
    query.includes("top") ||
    query.includes("cheap") ||
    query.includes("under") ||
    query.includes("below") ||
    query.includes("coffee") ||
    query.includes("cafe") ||
    query.includes("ice cream") ||
    query.includes("waffle") ||
    query.includes("cake") ||
    query.includes("brownie") ||
    query.includes("noodles") ||
    query.includes("fried rice") ||
    query.includes("manchurian") ||
    // Hindi / Hinglish

    query.includes("khana") ||
    query.includes("bhook") ||
    query.includes("bhukh") ||
    query.includes("khana hai") ||
    query.includes("kya khaun") ||
    query.includes("kuch suggest") ||
    query.includes("order karna") ||
    query.includes("veg khana") ||
    query.includes("non veg khana") ||
    query.includes("healthy khana") ||
    query.includes("restaurant batao")
  ) {
    return "food";
  }

  // ==========================
  // General AI
  // ==========================

  return "general";
};
