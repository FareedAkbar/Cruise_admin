import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Load_Cars } from "../../GraphQL/Queries";
import { Card,CardBody,CardHeader} from '@paljs/ui/Card';
import Layout from 'Layouts'
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import withAuth from '../../components/authentication'
import { Table, Space,Button,Switch } from 'antd';
import 'antd/dist/antd.css';

function SaleAds() {
    const columns = [
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
          render: status =>{
            function onChange(checked) {
                return !checked
              }
          
          return (
                    <Switch defaultChecked={status} onChange={onChange} />
          )
        }
        },
      ];
      
     
      
  const queryMultiple = () => {
    const cars = useQuery(Load_Cars);
    return [cars];
  }
  
  const [
      { loading: loading, data: data },
  ] = queryMultiple()

  
  const [cars, setCars] = useState([]);
 
  useEffect(() => {
    if(data){
        setCars(data.SaleCars);
    }

  }, [data]);
 
  return (
    <Layout>
           <Row>
               <Col breakPoint={{ xs: 12, lg: 12 }}>
              
               <Table bordered columns={columns} size="middle" dataSource={data.saleCars} />
         
               </Col>
           </Row>
           
      {" "}
    </Layout>
  );
}

export default withAuth(SaleAds);
