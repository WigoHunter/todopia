import * as React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import App from "../../ui/App";

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: Meteor.absoluteUrl("graphql"),
  cache
});

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

Meteor.startup(() => {
  render(<ApolloApp />, document.getElementById("app"));
});
