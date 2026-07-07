import Restaurant from "../models/Restaurant.js";
import Dish from "../models/Dish.js";

export const searchDatabase = async (message) => {
  const query = message.toLowerCase();

  let restaurants = [];
  let dishes = [];

  const restaurantFilter = {};
  const dishFilter = {};

  // =========================
  // SMART CATEGORY DETECTION
  // =========================

  if (query.includes("dinner") || query.includes("night")) {
    restaurantFilter.category = {
      $in: ["Biryani", "North Indian", "Chinese"],
    };
  } else if (query.includes("lunch")) {
    restaurantFilter.category = {
      $in: ["North Indian", "Healthy", "Biryani"],
    };
  } else if (query.includes("breakfast")) {
    restaurantFilter.category = {
      $in: ["Cafe", "Healthy"],
    };
  } else if (
    query.includes("hungry") ||
    query.includes("starving") ||
    query.includes("recommend") ||
    query.includes("suggest")
  ) {
    // No category filter
  } else if (query.includes("pizza")) {
    restaurantFilter.category = /pizza/i;
    dishFilter.category = /pizza/i;
  } else if (query.includes("burger")) {
    restaurantFilter.category = /burger/i;
    dishFilter.category = /burger/i;
  } else if (query.includes("healthy") || query.includes("diet")) {
    restaurantFilter.category = /healthy/i;
    dishFilter.category = /healthy/i;
  } else if (query.includes("chicken")) {
    restaurantFilter.category = /chicken/i;
    dishFilter.category = /chicken/i;
  } else if (query.includes("dessert") || query.includes("sweet")) {
    restaurantFilter.category = /dessert/i;
    dishFilter.category = /dessert/i;
  } else if (
    query.includes("chinese") ||
    query.includes("noodles") ||
    query.includes("fried rice") ||
    query.includes("manchurian")
  ) {
    restaurantFilter.category = /chinese/i;
    dishFilter.category = /chinese/i;
  } else if (query.includes("indian") || query.includes("north indian")) {
    restaurantFilter.category = /indian/i;
    dishFilter.category = /indian/i;
  } else if (query.includes("biryani")) {
    restaurantFilter.category = /biryani/i;
    dishFilter.category = /biryani/i;
  } else if (
    query.includes("cafe") ||
    query.includes("coffee") ||
    query.includes("cold coffee")
  ) {
    restaurantFilter.category = /cafe/i;
    dishFilter.category = /cafe/i;
  }

  // =========================
  // VEG / NON VEG
  // =========================

  if (query.includes("veg") || query.includes("vegetarian")) {
    restaurantFilter.isVeg = true;
    dishFilter.isVeg = true;
  }

  if (query.includes("non veg") || query.includes("non-veg")) {
    restaurantFilter.isVeg = false;
    dishFilter.isVeg = false;
  }

  // =========================
  // CITY
  // =========================

  if (query.includes("greater noida")) {
    restaurantFilter.city = /greater noida/i;
  } else if (query.includes("noida")) {
    restaurantFilter.city = /^noida$/i;
  } else if (query.includes("delhi")) {
    restaurantFilter.city = /delhi/i;
  } else if (query.includes("ghaziabad")) {
    restaurantFilter.city = /ghaziabad/i;
  }

  // =========================
  // PRICE
  // =========================

  const priceMatch = query.match(/(\d+)/);

  if (
    priceMatch &&
    (query.includes("under") ||
      query.includes("below") ||
      query.includes("less than"))
  ) {
    dishFilter.price = {
      $lte: Number(priceMatch[1]),
    };
  }

  // =========================
  // FETCH RESTAURANTS
  // =========================

  restaurants = await Restaurant.find(restaurantFilter)
    .sort({ rating: -1 })
    .limit(5);

  // =========================
  // FETCH DISHES
  // =========================

  if (restaurants.length) {
    const restaurantNames = restaurants.map((r) => r.name);

    dishes = await Dish.find({
      ...dishFilter,
      restaurant: {
        $in: restaurantNames,
      },
    })
      .sort({ rating: -1 })
      .limit(10);
  } else {
    dishes = await Dish.find(dishFilter).sort({ rating: -1 }).limit(10);
  }

  return {
    restaurants,
    dishes,
  };
};
