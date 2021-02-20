import { gql } from "@apollo/client";

export const Load_Cars = gql`
 query{
  saleCars{
    id
    car_no
    car_vendor{
      title
    }
    car_category{
      title
    }
    car_class{
      title
    }
    user_id{
      id
      username
      email
    }
    purchase_package_id{
      package{
        id
      }
    }
    price
    color
    mileage
    model_year
     title_eng
    description_eng
   address_eng
   phone_no
   status
  }
}
`;

export const USERS = gql`
query{
  users(where: {type:"seller"}){
    id
    username
  }
}
`;
export const BUYERS = gql`
query{
  users(where: {type:"buyer"}){
    id
    username
  }
}
`;
export const PACKAGES = gql`
query{
  packages{
    id
    type
		total_images
    price
    status
  }
}
`;

export const CAR_CLASS_SALES = gql`
query{
  carClasses{
    id
    title
  }
}
`;
export const CAR_CATEGORY_SALES = gql`
query{
  carCategories{
    id
    title
  }
}
`;
export const CAR_VENDOR_SALES = gql`
query{
  carVendors{
    id
    title
  }
}
`;