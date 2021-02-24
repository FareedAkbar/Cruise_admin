import { gql } from "@apollo/client";

export const UPLOAD_CAR_CATEGORY_RENT = gql`
# createCarCategoryRentel
mutation createCarCategoryRentel(
  $title: String
  $image: ID
) {
    # createCarCategoryRental
  createCarCategoryRentel(
     input:{data:{title:$title,image: $image}}
  ) {
    # carCategoryRental{
    carCategoryRentel{
      id
      title
      image{
      name
      url
    }
    }
  }
  }
# mutation createCarCategoryRentel(
#   $title: String
#   $image: ID
# ) {
#     # createCarCategoryRental
#   createCarCategoryRental(
#      input:{data:{title:$title,image: $image}}
#   ) {
#     carCategoryRental{
#     # carCategoryRentel{
#       id
#       title
#       image{
#       name
#       url
#     }
#     }
#   }
#   }
  `;

export const UPLOAD_CAR_CLASS_RENT = gql`
# # createCarClassRental
# mutation createCarClassRentel(
#   $title: String
#   $image: ID
# ) {
#     # createCarClassRental
#   createCarClassRental(
#      input:{data:{title:$title,image: $image}}
#   ) {
#     # carClassRental
#     carClassRental{
#       id
#       title
#       image{
#       name
#       url
#     }
#     }
#   }
  }
# createCarClassRental
mutation createCarClassRentel(
  $title: String
  $image: ID
) {
    # createCarClassRental
  createCarClassRentel(
     input:{data:{title:$title,image: $image}}
  ) {
    # carClassRental
    carClassRentel{
      id
      title
      image{
      name
      url
    }
    }
  }
  }
`;
export const UPLOAD_CAR_VENDOR_RENT = gql`
mutation createCarVendorRentel(
  $title: String
  $image: ID
) {
  createCarVendorRentel(
     input:{data:{title:$title,image: $image}}
  ) {
    carVendorRentel{
      id
      title
      image{
      name
      url
    }
    }
  }
  }
`;

export const UPDATE_CAR_STATUS_RENT = gql`
#  mutation updateRentCarAd ($id: ID!,$status: Boolean){
mutation updateRentCar($id: ID!,$status: Boolean){
  # updateRentCarAd(input:{data:{status:$status}where:{id:$id}})
    updateRentCar(input:{data:{status:$status}where:{id:$id}})
    {
      # rentCarAd{
      rentCar{
        id
      }
    }
  }
  `;
