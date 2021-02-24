import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { SALE_CARS_AD,USERS,BUYERS,COMPANY,
  PACKAGES,RENT_CARS_AD } from "../GraphQL/Queries";
 import {CAR_CATEGORY_RENTAL,CAR_VENDOR_RENTAL,CAR_CLASS_RENTAL} from '../GraphQL/rentFeatures'
 import {CAR_CLASS_SALES,CAR_CATEGORY_SALES,CAR_VENDOR_SALES} from '../GraphQL/saleFeatures'
import { Card,CardBody,CardHeader} from '@paljs/ui/Card';
import Layout from 'Layouts'
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import withAuth from '../components/authentication'


function DashboardData() {


  const queryMultiple = () => {
    const saleCars = useQuery(SALE_CARS_AD);
    const buyers = useQuery(USERS);
    
    const sellers = useQuery(BUYERS);
    
    const packages = useQuery(PACKAGES);
    const class_sale = useQuery(CAR_CLASS_SALES);
    const category_sale = useQuery(CAR_CATEGORY_SALES);
    const vendor_sale = useQuery(CAR_VENDOR_SALES);
    const company = useQuery(COMPANY);
    
    const class_rental = useQuery(CAR_CLASS_RENTAL);
    const category_rental = useQuery(CAR_CATEGORY_RENTAL);
    const vendor_rental = useQuery(CAR_VENDOR_RENTAL);
    const rentCars = useQuery(RENT_CARS_AD);
    return [saleCars, buyers,sellers,packages,class_sale,category_sale,vendor_sale,company,
      class_rental,category_rental,vendor_rental,rentCars];
  }
  
  const [
      { loading: loading1, data: data1 },
      { loading: loading2, data: data2 },
      { loading: loading3, data: data3 },
      { loading: loading4, data: data4 },
      { loading: loading5, data: data5 },
      { loading: loading6, data: data6 },
      { loading: loading7, data: data7 },
      { loading: loading8, data: data8 },
      { loading: loading9, data: data9 },
      { loading: loading10, data: data10 },
      { loading: loading11, data: data11 },
      { loading: loading12, data: data12 }

  ] = queryMultiple()

  // const { error, loading, data } = useQuery(Load_Cars);
  
  
  
  const [saleCars, setSaleCars] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [buyers, setBuyers] = useState([]);
  const [packages, setPackages] = useState([]);
  const [class_sale, setclass_sale] = useState([]);
  const [category_sale, setCategory_sale] = useState([]);
  const [vendor_sale, setVendor_sale] = useState([]);
  const [company, setCompany] = useState([]);
  const [class_rental, setclass_rental] = useState([]);
  const [category_rental, setCategory_rental] = useState([]);
  const [vendor_rental, setVendor_rental] = useState([]);
  const [rentCars, setRentCars] = useState([]);
 
 
  useEffect(() => {
    if (data1) {
      setSaleCars(data1.saleCars.length);
        
    }
    if(data2){
      setSellers(data2.users.length);
    }
    if(data3){
      setBuyers(data3.users.length);
    }
    if(data4){
      setPackages(data4.packages.length);
    }
    if(data5){
      setclass_sale(data5.carClasses.length);
    }
    if(data6){
      setCategory_sale(data6.carCategories.length);
    }
    if(data7){
      setVendor_sale(data7.carVendors.length);
    }
    if(data8){
      setCompany(data8.users.length);
    }
    if(data9){
      setclass_rental(data9.carClassRentels.length);
    }
    if(data10){
      setCategory_rental(data10.carCategoryRentels.length);
    }
    if(data11){
      setVendor_rental(data11.carVendorRentels.length);
    }
    if (data12) {
      setRentCars(data12.rentCars.length);
        
    }
  }, [data1,data2,data3,data4,data5,data6,data7,data8,data9,data10,data11,data12]);
  
  return (
    <Layout>
 <Row>
   <Col breakPoint={{ xs: 12, lg: 4 }}>
   <Card status="Info">
      <CardHeader>Companies </CardHeader>
        <CardBody>
          <p>Total Companies : {company}</p>
        </CardBody>
    
    </Card>
   </Col>

   
   <Col breakPoint={{ xs: 12, lg: 4 }}>
   <Card status="Info">
      <CardHeader>Sellers </CardHeader>
        <CardBody>
          <p>Total Sellers : {sellers}</p>
        </CardBody>
     
    </Card>
   </Col>

   
   <Col breakPoint={{ xs: 12, lg: 4 }}>
   <Card status="Info">
      <CardHeader>Buyers </CardHeader>
        <CardBody>
          <p>Total Buyers : {buyers}</p>
        </CardBody>
     
    </Card>
   </Col>
 </Row>
 <Row>
   <Col breakPoint={{ xs: 12, lg: 4 }}>
   <Card status="Primary" accent="Info">
      <CardHeader>Classes Sale </CardHeader>
        <CardBody>
          <p>Total Classes : {class_sale}</p>
        </CardBody>
    
    </Card>
   </Col>

   
   <Col breakPoint={{ xs: 12, lg: 4 }}>
   <Card status="Primary" accent="Info">
      <CardHeader>Cetegories Sale </CardHeader>
        <CardBody>
          <p>Total Cetegories : {category_sale}</p>
        </CardBody>
     
    </Card>
   </Col>

   
   <Col breakPoint={{ xs: 12, lg: 4 }}>
   <Card status="Primary" accent="Info">
      <CardHeader>Vendors Sale </CardHeader>
        <CardBody>
          <p>Total Vendors : {vendor_sale}</p>
        </CardBody>
     
    </Card>
   </Col>
 </Row>
 <Row>
   <Col breakPoint={{ xs: 12, lg: 4 }}>
   <Card status="Success" accent="Primary">
      <CardHeader>Classes Rental </CardHeader>
        <CardBody>
          <p>Total Classes : {class_rental}</p>
        </CardBody>
    
    </Card>
   </Col>

   
   <Col breakPoint={{ xs: 12, lg: 4 }}>
   <Card status="Success" accent="Primary">
      <CardHeader>Cetegories Rental </CardHeader>
        <CardBody>
          <p>Total Cetegories : {category_rental}</p>
        </CardBody>
     
    </Card>
   </Col>

   
   <Col breakPoint={{ xs: 12, lg: 4 }}>
   <Card status="Success" accent="Primary">
      <CardHeader>Vendors Rental </CardHeader>
        <CardBody>
          <p>Total Vendors : {vendor_rental}</p>
        </CardBody>
     
    </Card>
   </Col>
 </Row>
 
 <Row>
 <Col breakPoint={{ xs: 12, lg: 4 }}>
   <Card status="Info" accent="Success">
      <CardHeader>Sales Car Ads </CardHeader>
        <CardBody>
          <p>Total Cars : {saleCars}</p>
        </CardBody>
    
    </Card>
   </Col>
   <Col breakPoint={{ xs: 12, lg: 4 }}>
   <Card status="Info" accent="Success">
      <CardHeader>Rent Cars Ads </CardHeader>
        <CardBody>
          <p>Total Cars : {rentCars}</p>
        </CardBody>
     
    </Card>
   </Col>

   
   <Col breakPoint={{ xs: 12, lg: 4 }}>
   <Card status="Info" accent="Success">
      <CardHeader>Packages </CardHeader>
        <CardBody >
          <p>Total Packages : {packages}</p>
        </CardBody>
     
    </Card>
   </Col>
 </Row>
 
     
     
      {" "}
    </Layout>
  );
}

export default withAuth(DashboardData);
