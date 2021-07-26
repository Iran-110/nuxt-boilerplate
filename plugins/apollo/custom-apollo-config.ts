
import { InMemoryCache } from 'apollo-cache-inmemory';
import {buildAxiosFetch} from '@lifeomic/axios-fetch';
import { onError } from "@apollo/client/link/error";
import { ApolloLink } from "@apollo/client/link/core";

const cleanTypeName = new ApolloLink((operation, forward) => {
  if (operation.variables) {
    const omitTypename = (key: string, value: any) => (key === '__typename' ? undefined : value);
    operation.variables = JSON.parse(JSON.stringify(operation.variables), omitTypename);
  }
  return forward(operation).map((data) => {
    return data;
  });
});

export default (context: any) => {
  const errorHandling = onError(({ networkError }) => {
    if (networkError) {
      console.log('Network error');
    }
  });

  // https://github.com/Akryum/vue-cli-plugin-apollo
  // https://github.com/Akryum/vue-cli-plugin-apollo/blob/master/graphql-client/src/index.js
  // createApolloClient
  return {
    httpEndpoint: 'http://localhost:8000/graphql',
    tokenName: "auth._token.local",

    // https://github.com/jaydenseric/apollo-upload-client/issues/88#issuecomment-434907278
    httpLinkOptions: {
      // uri: 'http://localhost:8000/graphql',
      fetch: buildAxiosFetch(context.$axios, (config, _input, init) =>
        ({
          ...config,

          // For an error like this in the @nuxt-js/auth-next package.
          // https://stackoverflow.com/questions/66775262/
          headers: {
            common: {},
            ...(config?.headers || {}),
          },

          ...(init?.onUploadProgress ? {onUploadProgress: init?.onUploadProgress} : {})
        })
      ),
    },
    link: errorHandling.concat(cleanTypeName),
    cache: new InMemoryCache(),
  };
};
