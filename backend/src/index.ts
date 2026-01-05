import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from "dotenv";

import { connectDB } from "./config/db";
import { typeDefs } from "./schema/food.typeDefs";
import { resolvers } from "./resolvers/food.resolvers";

dotenv.config();

async function startServer() {
  try {
    console.log("🚀 Starting server...");

    // 1️⃣ Connect to MongoDB
    await connectDB();

    // 2️⃣ Create Apollo Server
    const server = new ApolloServer({
      typeDefs,
      resolvers
    });

    // 3️⃣ Start standalone GraphQL server
    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 }
    });

    console.log(`✅ GraphQL running at ${url}`);
  } catch (error) {
    console.error("❌ Server failed to start", error);
  }
}

startServer();
