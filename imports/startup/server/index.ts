import { ApolloServer, gql } from "apollo-server-express";
import { WebApp } from "meteor/webapp";

const typeDefs = gql`
  type Query {
    hi: String
  }
`;

const resolvers = {
  Query: {
    hi() {
      return "Hello World";
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers }) as any;

server.applyMiddleware({
  app: WebApp.connectHandlers,
  path: "/graphql"
});

WebApp.connectHandlers.use("/graphql", (req, res) => {
  if (req.method === "GET") {
    res.end();
  }
});
