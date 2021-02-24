import React, { useEffect, useState } from "react";
import { useQuery, gql,useMutation } from "@apollo/client";
import { RENT_CARS_AD } from "../../GraphQL/Queries";
import Layout from 'Layouts'
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import withAuth from '../../components/authentication'
import { Table, Space,Button,Switch,Image } from 'antd';
import 'antd/dist/antd.css';
import { UPDATE_CAR_STATUS_RENT } from "../../GraphQL/rentMutations";

function RentAds() {

  const queryMultiple = () => {
    const rentCars = useQuery(RENT_CARS_AD);
    return [rentCars];
  }
  
  const [
      { loading: loading, data: data1 },
  ] = queryMultiple()

  const [RentCars, setRentCars] = useState([]);
 
  useEffect(() => {
    if(data1){
      setRentCars(data1.rentCars);
    }

  }, [data1]);
 
  const [updateRentCar,{ data}] = useMutation(UPDATE_CAR_STATUS_RENT,{
    onCompleted: (data) => {
      handleCancel()
     setSucess(true)
    
    }
  });
  const updatecar = (id,status) =>{
   console.log(id,status)
   updateRentCar({
      variables: {
        id: id,
        status: status
      },
    }
   );

  }
 
    const columns = [
      {
        title: "Image",
        dataIndex: "media", 
        render: image => {
          const name = "http://localhost:1337"+image[0].url
        return(
          <Image
      width={100}
      src={name}
    />
        )} 
  },
        {
          title: 'Car#',
          dataIndex: 'car_no',
          key: 'car_no',
          render: text => <a>{text}</a>,
        },
        {
            title: 'Name',
            dataIndex: 'user_id',
            key: 'user',
            render: text => {
                const name = text.username
           return(
            <div>
            {name}
            </div>
           )
               
            }
          },
          {
            title: 'Address',
            dataIndex: 'address_eng',
            key: 'address_eng',
            render: text => <>{text}</>,
          },
          {
            title: 'Description',
            dataIndex: 'description_eng',
            key: 'description_eng',
            render: text => <>{text}</>,
          },
          {
            title: 'Phone #',
            dataIndex: 'phone_no',
            key: 'phone_no',
            render: text => <>{text}</>,
          },
        
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          render: (text,status,index) =>{
            function onChange(checked) {
              updatecar(status.car_no,!checked)
                return !checked
              }
          
          return (
                    <Switch defaultChecked={text} onChange={()=>onChange(text)} />
          )
        }
        },
      ];
      
     
  return (
    <Layout>
      <h2>Rent Car Ads</h2>
           <Row>
               <Col breakPoint={{ xs: 12, lg: 12 }}>
              
               <Table bordered columns={columns} size="middle" dataSource={RentCars} />
         
               </Col>
           </Row>
           
      {" "}
    </Layout>
  );
}

export default withAuth(RentAds);
