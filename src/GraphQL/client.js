import withApollo from 'next-with-apollo';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from,
    useQuery
  } from "@apollo/client";
  import { onError } from "@apollo/client/link/error";
  const errorLink = onError(({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
      graphqlErrors.map(({ message, location, path }) => {
        alert(`Graphql error ${message}`);
      });
    }
  });
  
  const link = from([
    errorLink,
    new HttpLink({ uri: "http://localhost:1337/graphql" }),
  ]);
  
  function createClient() {
   return new ApolloClient({
        cache: new InMemoryCache(),
        link: link,
        headers:{
          "content-type":"multipart/form-data"
        }
        
      });
  } 






export default withApollo(createClient);
