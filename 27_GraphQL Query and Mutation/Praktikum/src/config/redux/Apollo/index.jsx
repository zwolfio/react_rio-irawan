import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";


const apolloClient = new ApolloClient ({
    link: new HttpLink({
        uri:'https://productlist-alta.hasura.app/v1/graphql',
        headers:{
            "x-hasura-admin-secret" : "HpR79RUvFsP6Ba81oOtec1C3orflxPOfRQqWWpKo1ESskE3erxU4k8FMuDuIQciN",
        }
    }),
    cache: new InMemoryCache(),
})

export default apolloClient