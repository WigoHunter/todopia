import * as React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Accounts } from "meteor/accounts-base";

import App from "../../ui/App";

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: Meteor.absoluteUrl("graphql"),
  request: operation => {
    const token = Accounts["_storedLoginToken"]() || "";

    operation.setContext(() => ({
      headers: {
        authorization: token
      }
    }));
  },
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
