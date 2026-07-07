import crypto from "crypto";

import { detectIntent } from "../services/intentService.js";
import { getFAQResponse } from "../services/faqService.js";
import { searchDatabase } from "../services/searchService.js";
import { generateAIResponse } from "../services/geminiService.js";
import { saveMessage, getConversation } from "../services/memoryService.js";

export const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    // Session
    let sessionId = req.headers["session-id"];

    if (!sessionId) {
      sessionId = crypto.randomUUID();
    }

    // Save User Message
    saveMessage(sessionId, "user", message);

    // Previous Conversation
    const history = getConversation(sessionId);

    // Detect Intent
    const intent = detectIntent(message);

    // =============================
    // Greeting
    // =============================

    if (intent === "greeting") {
      const reply =
        "👋 Hello! I'm Zeva AI.\n\nI can help you with restaurant recommendations 🍕, food suggestions 🥗, offers 🎁, payments 💳, refunds 💰 and order tracking 📦.";

      saveMessage(sessionId, "assistant", reply);

      return res.json({
        success: true,
        reply,
        sessionId,
      });
    }

    // =============================
    // Customer Support
    // =============================

    if (intent === "support") {
      const reply = getFAQResponse(message);

      saveMessage(sessionId, "assistant", reply);

      return res.json({
        success: true,
        reply,
        sessionId,
      });
    }

    // =============================
    // Food Recommendation
    // =============================

    if (intent === "food") {
      const { restaurants, dishes } = await searchDatabase(message);

      // -----------------------------
      // Direct Database Response
      // -----------------------------

      if (restaurants.length || dishes.length) {
        let reply = "🍽️ Here are some recommendations for you:\n\n";

        if (restaurants.length) {
          reply += "## 🏪 Restaurants\n\n";

          restaurants.slice(0, 5).forEach((restaurant) => {
            reply += `• **${restaurant.name}**
📍 ${restaurant.city}
⭐ ${restaurant.rating}
💰 ₹${restaurant.priceForTwo} for two
🚚 ${restaurant.deliveryTime}

`;
          });
        }

        if (dishes.length) {
          reply += "\n## 🍴 Popular Dishes\n\n";

          dishes.slice(0, 8).forEach((dish) => {
            reply += `• **${dish.name}**
🏪 ${dish.restaurant}
💰 ₹${dish.price}
⭐ ${dish.rating}

`;
          });
        }

        saveMessage(sessionId, "assistant", reply);

        return res.json({
          success: true,
          reply,
          sessionId,
        });
      }

      // -----------------------------
      // No Database Result
      // -----------------------------

      try {
        const reply = await generateAIResponse(message, "", history);

        saveMessage(sessionId, "assistant", reply);

        return res.json({
          success: true,
          reply,
          sessionId,
        });
      } catch (error) {
        console.error(error);

        return res.json({
          success: true,
          reply:
            "😔 Sorry, I couldn't find any matching restaurants or dishes for your request.",
          sessionId,
        });
      }
    }

    // =============================
    // General AI
    // =============================

    const reply = await generateAIResponse(message, "", history);

    saveMessage(sessionId, "assistant", reply);

    return res.json({
      success: true,
      reply,
      sessionId,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
