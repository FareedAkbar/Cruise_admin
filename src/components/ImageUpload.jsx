import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { Button,Alert } from 'antd';
import gql from "graphql-tag";
import { ApolloClient } from "apollo-client";
import { createUploadLink } from "apollo-upload-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import 'antd/dist/antd.css';

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

class ImageUpload extends React.Component {
  state = {
    image: null,
    success: false
  };

  onImageChange = event => {
  
    this.setState({
      success: false,
      image: event.target.files[0]
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if(this.state.image){
      client
      .mutate({
        mutation: UPLOAD,
        variables: {
          file: this.state.image
        }
      })
      .then(res => {
        
        this.props.ImageID(res.data.upload.id)
      })
      .catch(err => {
        console.error(err);
      });
    }else{
      console.log("aa")
      this.props.ImageID(null)
      this.setState({
        success: true
      })
      
    }
  
  };

  render() {
    const {success} = this.state
    return (
      <ApolloProvider client={client}>
       {success && <Alert message="Select Image" type="error" showIcon />} 
          <input
            type="file"
            name="files"
            onChange={this.onImageChange}
            alt="image"
            style={{borderRadius: 5, color: "green"}}
            
          />
          <br />
          <Button type="primary" onClick={this.onSubmit} 
           style={{borderRadius: 5,marginTop:"5px"}}>Upload Image</Button>
        
      </ApolloProvider>
    );
  }
}

export default ImageUpload;