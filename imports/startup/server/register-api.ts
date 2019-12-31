import { ApolloServer, gql } from "apollo-server-express";
import { WebApp } from "meteor/webapp";
import merge from "lodash/merge";
import { getUser } from "meteor/apollo";

import ResolutionsSchema from "../../graphql/Resolutions.graphql";
import ResolutionsResolvers from "../../api/resolutions/resolvers";
import UserSchema from "../../graphql/User.graphql";
import UserResolvers from "../../api/users/resolvers";
import GoalsSchema from "../../graphql/Goal.graphql";
import GoalsResolver from "../../api/goals/resolvers";

///////
const typeDefs = [ResolutionsSchema, UserSchema, GoalsSchema];
const resolvers = merge(ResolutionsResolvers, UserResolvers, GoalsResolver);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => ({
    user: await getUser(req.headers.authorization)
  })
}) as any;

server.applyMiddleware({
  app: WebApp.connectHandlers,
  path: "/graphql"
});

WebApp.connectHandlers.use("/graphql", (req, res) => {
  if (req.method === "GET") {
    res.end();
  }
});
