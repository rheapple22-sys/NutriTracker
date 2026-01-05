import Food from "../models/Food";



/**
 * Execution flow *

GraphQL checks schema → query is allowed

GraphQL calls Query.foods resolver

Resolver queries MongoDB via Model

MongoDB returns documents

GraphQL maps _id → id

Response sent to client
 */

/**
 * Mongoose Schema → defines DB shape
 * Mongoose Model  → talks to MongoDB
 * GraphQL Schema  → defines API contract
 * Resolvers       → glue between API and DB

 */


//How data flows between them (between users and storing in DB)
//A resolver is a function that tells GraphQL how to get the data promised by the schema.

interface FoodsArgs {
  mealType?: string;
  cuisine?: string;
  search?: string;
}
// (fieldParent, args => input from client , context, info) => result

export const resolvers = {
  Query: {
    foods: async (_: unknown, args: FoodsArgs) => { // _ → parent (not needed here) args → { mealType, cuisine, search }
      const query: any = {};

      if (args.mealType) {
        query.mealType = args.mealType;
      }

      if (args.cuisine) {
        query.cuisine = args.cuisine;
      }

      if (args.search) {
        query.name = { $regex: args.search, $options: "i" };
      }

      return Food.find(query).sort({ name: 1 });
    },

    foodById: async (_: unknown, { id }: { id: string }) => {
      return Food.findById(id);
    },
    // foodByName: async (
    //   _: unknown,
    //   args: { name: string; category?: string }
    // ) => {
    //   const query: any = { name: args.name };

    //   if (args.category) {
    //     query.category = args.category;
    //   }

    //   return Food.findOne(query);
    // }

  },

  Food: {
    id: (parent: any) => parent._id.toString()
  }
};
