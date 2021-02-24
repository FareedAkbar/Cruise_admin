import { gql } from "@apollo/client";


export const UPLOAD_CAR_CATEGORY_SALE = gql`
# mutation createCarCategorySale(
mutation createCarCategory(
  $title: String
  $image: ID
) {
    # createCarCategorySale(
  createCarCategory(
     input:{data:{title:$title,image: $image}}
  ) {
    # carCategorySale{
    carCategory{
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

export const UPLOAD_CAR_CLASS_SALE = gql`
# mutation createCarClassSale(
mutation createCarClass(
  $title: String
  $image: ID
) {
    # createCarClassSale(
  createCarClass(
     input:{data:{title:$title,image: $image}}
  ) {
    # carClassSale{
    carClass{
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
export const UPLOAD_CAR_VENDOR_SALE = gql`
# mutation createCarVendorSale(
mutation createCarVendor(
  $title: String
  $image: ID
) {
    # createCarVendorSale(
  createCarVendor(
     input:{data:{title:$title,image: $image}}
  ) {
    # carVendorSale{
    carVendor{
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


export const UPDATE_CAR_STATUS_SALE = gql`

mutation updateSaleCarAd($id: ID!,$status: Boolean){
  # mutation updateSaleCar($id: ID!,$status: Boolean){

 
    # updateSaleCar(input:{data:{status:$status}where:{id:$id}})
    updateSaleCarAd(input:{data:{status:$status}where:{id:$id}})

    {
      saleCarAd {
      # saleCar{
        id
      }
    }
  }
  `;