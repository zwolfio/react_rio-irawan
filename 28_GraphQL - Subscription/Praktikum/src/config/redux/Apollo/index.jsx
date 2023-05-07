import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

import { split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
const httpLink = new HttpLink({
  uri: 'https://productlist-alta.hasura.app/v1/graphql',
  headers:{
    "x-hasura-admin-secret" : "HpR79RUvFsP6Ba81oOtec1C3orflxPOfRQqWWpKo1ESskE3erxU4k8FMuDuIQciN",
}
});

const wsLink = new GraphQLWsLink(createClient({
    url: 'wss://productlist-alta.hasura.app/v1/graphql',
    connectionParams: {
        headers:{
            "x-hasura-admin-secret" : "HpR79RUvFsP6Ba81oOtec1C3orflxPOfRQqWWpKo1ESskE3erxU4k8FMuDuIQciN",
        },
      },
  }));

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);


const apolloClient = new ApolloClient ({
    link: splitLink,
    cache: new InMemoryCache(),
})

export default apolloClient