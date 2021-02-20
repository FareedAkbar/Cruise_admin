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

export const CREATE_CAR_VENDOR_SALE = gql`
mutation createCarVendor(
  $title: String

) {
  createCarVendor(
     input:{data:{title:$title}}
  ) {
    carVendor{
      id
      title
    }
  }
  }
`;

export const CREATE_CAR_CATEGORY_SALE = gql`
mutation createCarCategory(
  $title: String

) {
  createCarCategory(
     input:{data:{title:$title}}
  ) {
    carCategory{
      id
      title
    }
  }
  }
  `;

export const CREATE_CAR_CLASS_SALE = gql`
mutation createCarClass(
  $title: String

) {
  createCarClass(
     input:{data:{title:$title}}
  ) {
    carClass{
      id
      title
    }
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