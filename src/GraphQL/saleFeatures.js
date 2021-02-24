import { gql } from "@apollo/client";
export const CAR_CLASS_SALES = gql`
query{
  # carClassSales{
  carClasses{
    id
    title_eng
    title_arabic
    image{
      id
      name
      url
    }
  }
}
`;
export const CAR_CATEGORY_SALES = gql`
query{
  # carCategorySales{
  carCategories{
    id
    title_eng
    title_arabic
    image{
      id
      name
      url
    }
  }
}
`;
export const CAR_VENDOR_SALES = gql`
query{
  # carVendorSales{
  carVendors{
    id
    title_eng
    title_arabic
    image{
      id
      name
      url
    }
  }
}
`;
