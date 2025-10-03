import { ApolloServer } from "apollo-server";
import { typeDefs } from "./model/typeDefs.js";
import { resolvers } from "./model/resolvers.js";

const server = new ApolloServer({ typeDefs, resolvers });

const port = 4000;
const uri = `http://localhost:${port}`;
server.listen(port, () => {
  console.log(`server is running at ${uri}`);
});
