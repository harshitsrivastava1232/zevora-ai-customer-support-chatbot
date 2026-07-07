export const getFAQResponse = (message) => {
  const query = message.toLowerCase();

  if (query.includes("refund")) {
    return "Refunds are processed within 5–7 business days after approval.";
  }

  if (query.includes("cancel")) {
    return "You can cancel your order before the restaurant starts preparing it.";
  }

  if (query.includes("payment")) {
    return "We support UPI, Credit/Debit Cards, Net Banking and Cash on Delivery.";
  }

  if (query.includes("track")) {
    return "Your order is being prepared. Live tracking will be available once the delivery partner picks it up.";
  }

  if (query.includes("delivery")) {
    return "Standard delivery usually takes 20–40 minutes depending on your location.";
  }

  if (query.includes("offer") || query.includes("coupon")) {
    return "Current offer: Get 20% OFF on orders above ₹499 using code ZEVORA20.";
  }

  return "Our support team is available 24/7 to assist you with your queries.";
};
