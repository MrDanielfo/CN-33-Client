import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
//import { withClientState } from 'apollo-link-state';

const HTTP_HOST = 'http://localhost:4000/graphql';

const httpLink = new createUploadLink({
    uri: HTTP_HOST,
});

const AuthLink = (operation, next) => {
    const token = localStorage.getItem('jwt');
    if (token) {
        operation.setContext(context => ({
            ...context,
            headers: {
                ...context.headers,
                Authorization: token,
            },
        }));
    }
    return next(operation);
};

const cache = new InMemoryCache();

const client = new ApolloClient({
    link: ApolloLink.from([
        onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors) {
                graphQLErrors.map(({ message, locations, path, extensions }) => {
                    if (extensions.code === 'UNAUTHENTICATED') {
                        localStorage.removeItem('jwt');
                        client.resetStore()
                    }
                    console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
                    return message;
                });
                if (networkError) {
                    console.log(`[Network error]: ${networkError}`);
                }
            }
        }),
        //stateLink,
        AuthLink,
        httpLink
        //link,
    ]),
    cache,
});

export default client;