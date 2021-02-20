import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Load_Cars,USERS,BUYERS,PACKAGES,CAR_CLASS_SALES,CAR_CATEGORY_SALES,CAR_VENDOR_SALES } from "../GraphQL/Queries";
import { Card,CardBody,CardHeader} from '@paljs/ui/Card';
import Layout from 'Layouts'
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import withAuth from '../components/authentication'


function DashboardData() {

  

  const queryMultiple = () => {
    const cars = useQuery(Load_Cars);
    const buyers = useQuery(USERS);
    
    const sellers = useQuery(BUYERS);
    const packages = useQuery(PACKAGES);
    const class_sale = useQuery(CAR_CLASS_SALES);
    const category_sale = useQuery(CAR_CATEGORY_SALES);
    const vendor_sale = useQuery(CAR_VENDOR_SALES);
    return [cars, buyers,sellers,packages,class_sale,category_sale,vendor_sale];
  }
  
  const [
      { loading: loading1, data: data1 },
      { loading: loading2, data: data2 },
      { loading: loading3, data: data3 },
      { loading: loading4, data: data4 },
      { loading: loading5, data: data5 },
      { loading: loading6, data: data6 },
      { loading: loading7, data: data7 }
  ] = queryMultiple()

  // const { error, loading, data } = useQuery(Load_Cars);
  
  
  
  const [cars, setCars] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [buyers, setBuyers] = useState([]);
  const [packages, setPackages] = useState([]);
  const [class_sale, setclass_sale] = useState([]);
  const [category_sale, setCategory_sale] = useState([]);
  const [vendor_sale, setVendor_sale] = useState([]);
 
 
  useEffect(() => {
    if (data1) {
      setCars(data1.saleCars.length);
        
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

  }, [data1,data2,data3,data4,data5,data6,data7]);
  
  return (
    <Layout>
 <Row>
   <Col breakPoint={{ xs: 12, lg: 4 }}>
   <Card status="Info">
      <CardHeader>Total Sales Car </CardHeader>
        <CardBody>
          <p>Cars : {cars}</p>
        </CardBody>
    
    </Card>
   </Col>

   
   <Col breakPoint={{ xs: 12, lg: 4 }}>
   <Card status="Info">
      <CardHeader>Total Sellers </CardHeader>
        <CardBody>
          <p>Sellers : {sellers}</p>
        </CardBody>
     
    </Card>
   </Col>

   
   <Col breakPoint={{ xs: 12, lg: 4 }}>
   <Card status="Info">
      <CardHeader>Total Buyers </CardHeader>
        <CardBody>
          <p>Buyers : {buyers}</p>
        </CardBody>
     
    </Card>
   </Col>
 </Row>
 <Row>
   <Col breakPoint={{ xs: 12, lg: 4 }}>
   <Card status="Info">
      <CardHeader>Classes Sale </CardHeader>
        <CardBody>
          <p>Total Classes : {class_sale}</p>
        </CardBody>
    
    </Card>
   </Col>

   
   <Col breakPoint={{ xs: 12, lg: 4 }}>
   <Card status="Info">
      <CardHeader>Cetegories Sale </CardHeader>
        <CardBody>
          <p>Total Cetegories : {category_sale}</p>
        </CardBody>
     
    </Card>
   </Col>

   
   <Col breakPoint={{ xs: 12, lg: 4 }}>
   <Card status="Info">
      <CardHeader>Vendors Sale </CardHeader>
        <CardBody>
          <p>Total Vendors : {vendor_sale}</p>
        </CardBody>
     
    </Card>
   </Col>
 </Row>
 
      {/* {
        
          cars.map((val) => {
        return (
            <Card className="Card1">
            <CardHeader> </CardHeader>
              <CardBody>
                <p>car id :{val.id}</p>
              </CardBody>
           
          </Card>
            );
      })
    
      } */}
     
      {" "}
    </Layout>
  );
}

export default withAuth(DashboardData);
