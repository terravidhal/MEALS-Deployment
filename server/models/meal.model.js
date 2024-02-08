const mongoose = require("mongoose");


const MealSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A meal name is required"],
      minlength: [3, "A meal name must be atleast three characters long"],
      maxlength: [20, "The name of a meal must have a maximum of twenty characters"],
    },
    cookTime: {
      type: Number,
      required: [true, "A Cook time is required"],
      min: [2, "Cook time must be a minimum of 2 minutes"],
      max: [240, "Cooking time should be no more than 240 minutes."],
    }, 
    directions: {
      type: String,
      required: [true, "A directions is required"],
      minlength: [10, "Directions must be at least 10 characters long"],
    },
    ingredientsOne: {
      type: String,
    },
    ingredientsTwo: {
      type: String,
    },
    ingredientsThree: {
      type: String,
    },
  },
  { timestamps: true }
);


const Meal = mongoose.model("Meal", MealSchema);

module.exports = Meal;
