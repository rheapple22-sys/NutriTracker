import { Schema, model } from "mongoose";


//Schema - How data is stored

const FoodSchema = new Schema(
  {
    name: String,
    category: String,
    cuisine: String,
    mealType: [String],
    servingSize: {
      value: Number,
      unit: String
    },
    calories: Number,
    macros: {
      protein: Number,
      carbs: Number,
      fat: Number,
      fiber: Number
    },
    micros: {
      calcium_mg: Number,
      iron_mg: Number,
      potassium_mg: Number,
      vitaminC_mg: Number
    }
  },
  //we explicitly tells the model to use the foods collection 
  {
    collection: "foods",
    timestamps: true
  }
);

// The following line creates a model with superpowers where we are allowed to use Food.find(), Food.findById(), Food.create() etc.,
//“We created an object that represents the foods collection and knows how to read/write documents.”
export default model("Food", FoodSchema); 
