import React from "react";


import { ApolloProvider } from "@apollo/react-hooks";

import gql from "graphql-tag";
import { ApolloClient } from "apollo-client";
import { createUploadLink } from "apollo-upload-client";
import { InMemoryCache } from "apollo-cache-inmemory";

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  link: createUploadLink({
    uri: "http://localhost:1337/graphql"
  })
});

const UPLOAD = gql`
  mutation($file: Upload!) {
    upload(file: $file) {
      name
      id
    }
  }
`;

class App extends React.Component {
  state = {
    image: null
  };

  onImageChange = event => {
    console.log(event.target.files);

    this.setState({
      image: event.target.files[0]
    });
  };

  onSubmit = e => {
    e.preventDefault();

    console.log(this.state.image);

    client
      .mutate({
        mutation: UPLOAD,
        variables: {
          file: this.state.image
        }
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    return (
      <ApolloProvider client={client}>
        <form onSubmit={this.onSubmit}>
          <input
            type="file"
            name="files"
            onChange={this.onImageChange}
            alt="image"
          />
          <br />
          <button type="submit">Send</button>
        </form>
      </ApolloProvider>
    );
  }
}

export default App;