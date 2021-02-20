import { gql } from "@apollo/client";

export const LOGIN_USER_MUTATION = gql`
  mutation login(
    $identifier: String!
    $password: String!
  ) {
    login(input:{
      identifier: $identifier
      password: $password
    }) {

      jwt
    }
  }

`;

