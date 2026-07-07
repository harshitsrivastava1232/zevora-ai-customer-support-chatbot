const cities = ["Greater Noida", "Noida", "Delhi", "Ghaziabad"];
const restaurantRatings = [4.9, 4.8, 4.7, 4.6, 4.5];

const restaurantDeliveryTimes = [
  "24 min",
  "27 min",
  "30 min",
  "33 min",
  "36 min",
];

const restaurantPriceForTwo = [299, 399, 499, 599, 699];

const dishRatings = [4.9, 4.8, 4.7, 4.6, 4.5];

const restaurantTemplates = [
  {
    category: "Pizza",
    isVeg: false,
    restaurants: [
      "Domino's Pizza",
      "Pizza Hut",
      "La Pino'z Pizza",
      "MOJO Pizza",
      "Chicago Pizza",
    ],
    dishes: [
      "Margherita Pizza",
      "Farmhouse Pizza",
      "Veg Loaded Pizza",
      "Cheese Burst Pizza",
      "Paneer Makhani Pizza",
    ],
  },

  {
    category: "Burger",
    isVeg: false,
    restaurants: [
      "Burger King",
      "McDonald's",
      "Burger Singh",
      "Wendy's",
      "Good Flippin' Burgers",
    ],
    dishes: [
      "Whopper Burger",
      "Veg Whopper",
      "Chicken Burger",
      "Cheese Burger",
      "Double Patty Burger",
    ],
  },

  {
    category: "Chinese",
    isVeg: false,
    restaurants: [
      "Chinese Wok",
      "Wow! China",
      "Mainland China",
      "Yo! China",
      "Beijing Bites",
    ],
    dishes: [
      "Hakka Noodles",
      "Fried Rice",
      "Manchurian",
      "Spring Roll",
      "Chilli Chicken",
    ],
  },

  {
    category: "North Indian",
    isVeg: true,
    restaurants: [
      "Haldiram's",
      "Bikanervala",
      "Punjab Grill",
      "The Yellow Chilli",
      "Pind Balluchi",
    ],
    dishes: [
      "Paneer Butter Masala",
      "Dal Makhani",
      "Chole Bhature",
      "Rajma Chawal",
      "Butter Naan",
    ],
  },

  {
    category: "Healthy",
    isVeg: false,
    restaurants: ["Subway", "FreshMenu", "Salad Days", "EatFit", "Health Bowl"],
    dishes: [
      "Paneer Salad",
      "Chicken Salad",
      "Veg Sandwich",
      "Protein Bowl",
      "Oats Bowl",
    ],
  },

  {
    category: "Dessert",
    isVeg: true,
    restaurants: [
      "The Belgian Waffle Co.",
      "Baskin Robbins",
      "NIC Ice Cream",
      "Frozen Bottle",
      "Giani's",
    ],
    dishes: [
      "Chocolate Waffle",
      "Brownie",
      "Vanilla Ice Cream",
      "Chocolate Sundae",
      "Red Velvet Cake",
    ],
  },

  {
    category: "Biryani",
    isVeg: false,
    restaurants: [
      "Behrouz Biryani",
      "Biryani Blues",
      "Bikkgane Biryani",
      "Paradise Biryani",
      "Lucky Biryani",
    ],
    dishes: [
      "Chicken Biryani",
      "Veg Biryani",
      "Paneer Biryani",
      "Hyderabadi Biryani",
      "Mutton Biryani",
    ],
  },

  {
    category: "Cafe",
    isVeg: true,
    restaurants: [
      "Starbucks",
      "Cafe Coffee Day",
      "Blue Tokai",
      "Barista",
      "Third Wave Coffee",
    ],
    dishes: [
      "Cold Coffee",
      "Cappuccino",
      "Veg Wrap",
      "Garlic Bread",
      "Chocolate Muffin",
    ],
  },
];

export const restaurants = [];
export const dishes = [];

restaurantTemplates.forEach((template) => {
  template.restaurants.forEach((restaurantName, restaurantIndex) => {
    const city = cities[restaurantIndex % cities.length];

    const restaurant = {
      name: restaurantName,
      city,
      category: template.category,
      rating: restaurantRatings[restaurantIndex],

      deliveryTime: restaurantDeliveryTimes[restaurantIndex],

      priceForTwo: restaurantPriceForTwo[restaurantIndex],
      isVeg: template.isVeg,
      image: "",
    };

    restaurants.push(restaurant);

    template.dishes.forEach((dishName, dishIndex) => {
      dishes.push({
        name: dishName,
        restaurant: restaurantName,
        category: template.category,
        price: 99 + dishIndex * 50 + restaurantIndex * 10,
        rating: dishRatings[dishIndex],
        isVeg:
          !dishName.toLowerCase().includes("chicken") &&
          !dishName.toLowerCase().includes("mutton"),
        image: "",
      });
    });
  });
});

console.log(
  `✅ Generated ${restaurants.length} restaurants and ${dishes.length} dishes`,
);
