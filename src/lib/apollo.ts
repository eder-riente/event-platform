import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl55elapd3hym01uj4x9j6v0z/master",
  cache: new InMemoryCache(),
});
