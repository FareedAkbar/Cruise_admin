import { gql } from "@apollo/client";

export const SALE_CARS_AD = gql`
 query{
  # saleCarAds{
  saleCars{
    id
    car_no
    # car_vendor_sale{
    car_vendor{
      title_eng
    }
    # car_category_sale{
    car_category{
      title_eng
    }
    # car_class_sale{
    car_class{
      title_eng
    }
    # users_permissions_user{
    user_id{
      id
      username
      email
    }
    # purchase_package{
    purchase_package_id{
      package{
        id
      }
    }
    media{
      id
      name
      url
    }
    price
    color
    mileage
    model_year
    title_arabic
     description_arabic
     address_arabic
     title_eng
    description_eng
   address_eng
   phone_no
   status
  }
}
`;
export const RENT_CARS_AD = gql`
query{
  # rentCarAds{
  rentCars{
    id
    car_no
    # car_vendor_rental{
    vendor{
      title_eng
    }
    # car_category_rental{
    category{
      title_eng
    }
    # car_class_rental{
    class{
      title_eng
    }
    # users_permissions_user{
    user_id{
      id
      username
      email
    }
    # purchase_package{
    purchase_package_id{
      package{
        id
      }}
    
    media{
      id
      name
      url
    }
    price
    color
    mileage
    model_year
     title_eng
     title_arabic
     description_arabic
     address_arabic
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
export const COMPANY = gql`
query{
  users(where: {type:"company"}){
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
