import { gql } from "@apollo/client";

export const CAR_CATEGORY_RENTAL = gql`
query{
  carCategoryRentels{
    id
    title_eng
    title_arabic
    image {
      id
      name
      url
    } 
  }
}
`;
export const CAR_CLASS_RENTAL = gql`
query{
  # carClassRentals{
  carClassRentels{
    id
    title_eng
    title_arabic
    image {
      id
      name
      url
    } 
  }
}
`;
export const CAR_VENDOR_RENTAL = gql`
query{
  carVendorRentels{
    id
    title_eng
    title_arabic
    image {
      id
      name
      url
    } 
  }
}
`;