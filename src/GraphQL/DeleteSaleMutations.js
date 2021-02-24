import { gql } from "@apollo/client";

export const DELETE_CAR_CATEGORY_SALE = gql`
# mutation deleteCarCategory($Id: ID!) {
#     deleteCarCategorySale(input:{where:{id:$Id}}){
#     carCategorySale{
#         id
#     }
#     }
#   }
mutation deleteCarCategory($Id: ID!) {
    deleteCarCategory(input:{where:{id:$Id}}){
    carCategory{
        id
    }
    }
  }
  `;
export const DELETE_CAR_CLASS_SALE = gql`
# mutation deleteCarClass($Id: ID!) {
#     deleteCarClassSale(input:{where:{id:$Id}}){
#     carClassSale{
#         id
#     }
#     }
#   }
mutation deleteCarClass($Id: ID!) {
    deleteCarClass(input:{where:{id:$Id}}){
    carClass{
        id
    }
    }
  }
`;

export const DELETE_CAR_VENDOR_SALE = gql`
# mutation deleteCarVendor($Id: ID!) {
#     deleteCarVendorSale(input:{where:{id:$Id}}){
#     carVendorSale{
#         id
#     }
#     }
#   }
mutation deleteCarVendor($Id: ID!) {
    deleteCarVendor(input:{where:{id:$Id}}){
    carVendor{
        id
    }
    }
  }
  `;