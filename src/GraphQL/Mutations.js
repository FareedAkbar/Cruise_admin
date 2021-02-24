import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $username: String!
    # $lastName: String!
    $email: String!
    $password: String
  ) {
    createUser(
      username: $username
      # lastName: $lastName
      email: $email
      password: $password
    ) {
      id
    }
  }
`;



export const UPLOAD_FILE_CRUISE = gql`
mutation($file: Upload!) {
  upload(file: $file) {
  id
    name
  }
}`;


