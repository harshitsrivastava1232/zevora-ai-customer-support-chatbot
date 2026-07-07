import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

import Restaurant from "../models/Restaurant.js";
import Dish from "../models/Dish.js";

import { restaurants, dishes } from "./seedData.js";

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("✅ MongoDB Connected");

    await Restaurant.deleteMany();
    await Dish.deleteMany();

    console.log("🗑 Old Data Deleted");

    await Restaurant.insertMany(restaurants);
    await Dish.insertMany(dishes);

    console.log("🎉 Database Seeded Successfully");

    process.exit();
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
};

seedDatabase();
