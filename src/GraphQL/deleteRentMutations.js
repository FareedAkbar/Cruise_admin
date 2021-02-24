import { gql } from "@apollo/client";

export const DELETE_CAR_CATEGORY_RENT = gql`

mutation deleteCarCategoryRental($Id: ID!) {
  # deleteCarCategoryRental(input:{where:{id:$Id}}){
    deleteCarCategoryRentel(input:{where:{id:$Id}}){
      # carCategoryRental{
    carCategoryRentel{
        id
    }
    }
  }
  `;
export const DELETE_CAR_CLASS_RENT = gql`
# mutation deleteCarClassRentel($Id: ID!) {
#     deleteCarClassRental(input:{where:{id:$Id}}){
#     carClassRental{
#         id
#     }
#     }
#   }
mutation deleteCarClassRentel($Id: ID!) {
    deleteCarClassRentel(input:{where:{id:$Id}}){
    carClassRentel{
        id
    }
    }
  }
`;

export const DELETE_CAR_VENDOR_RENT = gql`
mutation deleteCarVendorRentel($Id: ID!) {
    deleteCarVendorRentel(input:{where:{id:$Id}}){
    carVendorRentel{
        id
    }
    }
  }
  `;