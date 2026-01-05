import { gql } from "graphql-tag";


/**

Schema - How data is exposed to the users 
What data is the CLIENT allowed to ask for?

Why does GraphQL need its own schema?

Because:

Client should not know MongoDB structure

Client should not see _id

Client should not know about indexes, collections, etc.

GraphQL schema is API-facing, not database-facing.
 */
export const typeDefs = gql`
  type ServingSize {
    value: Float
    unit: String
  }

  type Macros {
    protein: Float
    carbs: Float
    fat: Float
    fiber: Float
  }

  type Micros {
    calcium_mg: Float
    iron_mg: Float
    potassium_mg: Float
    vitaminC_mg: Float
  }

  type Food {
    id: ID!
    name: String!
    category: String
    cuisine: String
    mealType: [String!]!
    servingSize: ServingSize
    calories: Float
    macros: Macros
    micros: Micros
  }
  type Query {
    foods(
      mealType: String
      cuisine: String
      search: String
    ): [Food!]!

    foodById(id: ID!): Food
  }
`;

/**
 * 🧠 Why Apollo did this (design decision)

Apollo v4:

Removed many “magic” exports

Encourages explicit dependencies

Makes schema reusable outside Apollo

This allows:

Schema sharing

Codegen

Server swapping (Apollo ↔ Yoga)
 */