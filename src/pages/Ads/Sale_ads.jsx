import React, { useEffect, useState } from "react";
import { useQuery, gql,useMutation } from "@apollo/client";
import { SALE_CARS_AD } from "../../GraphQL/Queries";
import Layout from 'Layouts'
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import withAuth from '../../components/authentication'
import { Table, Space,Button,Switch,Image } from 'antd';
import {UPDATE_CAR_STATUS_SALE} from '../../GraphQL/saleMutations'
import 'antd/dist/antd.css';

function SaleAds() {
  const [SaleCars, setSaleCars] = useState([]);
  const queryMultiple = () => {
    const saleCars = useQuery(SALE_CARS_AD);
    return [saleCars];
  }
  
  const [
      { loading: loading, data: data1 },
  ] = queryMultiple();

  useEffect(() => {
    if(data1){
      setSaleCars(data1.saleCars);
    }

  }, [data1]);
 



  const [updateSaleCar,{ data}] = useMutation(UPDATE_CAR_STATUS_SALE,{
    onCompleted: (data) => {
      handleCancel()
     setSucess(true)
    
    }
  });
  const updatecar = (id,status) =>{
   console.log(id,status)
   updateSaleCar({
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
        dataIndex: "media",  // this is the value that is parsed from the DB / server side
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
      <h2>Sale Car Ads</h2>
           <Row>
               <Col breakPoint={{ xs: 12, lg: 12 }}>
              
               <Table bordered columns={columns} size="middle" dataSource={SaleCars} />
         
               </Col>
           </Row>
           
      {" "}
    </Layout>
  );
}

export default withAuth(SaleAds);
