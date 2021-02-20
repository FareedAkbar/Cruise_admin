import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { CAR_CLASS_SALES } from "../../GraphQL/Queries";
import { Card,CardBody,CardHeader} from '@paljs/ui/Card';
import Layout from 'Layouts'
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import withAuth from '../../components/authentication'
import { Table, Space,Button } from 'antd';
import 'antd/dist/antd.css';

function Class() {
    const columns = [
        {
          title: 'Name',
          dataIndex: 'title',
          key: 'title',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Id',
          dataIndex: 'id',
          key: 'id',
        },
        
        {
          title: 'Action',
          key: 'action',
          render: () => (
            <Space size="middle">
              <a>Delete</a>
            </Space>
          ),
        },
      ];
      
     
      
  const queryMultiple = () => {
   
    const class_sale = useQuery(CAR_CLASS_SALES);
    return [class_sale];
  }
  
  const [
      { loading: loading5, data: data5 }
  ] = queryMultiple()

  // const { error, loading, data } = useQuery(Load_Cars);
  
  
  
  const [class_sale, setclass_sale] = useState([]);
 
 
  useEffect(() => {
    
    if(data5){
      setclass_sale(data5.carClasses.length);
    }

  }, [data5]);
 
  return (
    <Layout>
           <Row>
               <Col breakPoint={{ xs: 12, lg: 12 }}>
               <Button type="primary" style={{float: "right", borderRadius: "5px",margin:5}}>Add new</Button>

               <Table columns={columns} size="middle" dataSource={data5.carClasses} />
         
               </Col>
           </Row>
           
      {" "}
    </Layout>
  );
}

export default withAuth(Class);
