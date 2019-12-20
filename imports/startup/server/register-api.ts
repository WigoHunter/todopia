import { ApolloServer, gql } from "apollo-server-express";
import { WebApp } from "meteor/webapp";
import merge from "lodash/merge";

import ResolutionsSchema from "../../graphql/Resolutions.graphql";
import ResolutionsResolvers from "../../api/resolutions/resolvers";

const testSchema = gql`
  type Query {
    hi: String
    resolutions: [Resolution]
  }
`;

const typeDefs = [testSchema, ResolutionsSchema];

const resolver = {
  Query: {
    hi() {
      return "Hello World!!";
    }
  }
};

const resolvers = merge(resolver, ResolutionsResolvers);
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
