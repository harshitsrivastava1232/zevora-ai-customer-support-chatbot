import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      default: 4,
    },

    deliveryTime: {
      type: String,
      default: "30 min",
    },

    priceForTwo: {
      type: Number,
      required: true,
    },

    isVeg: {
      type: Boolean,
      default: false,
    },

    image: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Restaurant", restaurantSchema);
