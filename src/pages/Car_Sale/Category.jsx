import React, { useEffect, useState } from "react";
import { useQuery, gql , useMutation} from "@apollo/client";
import { CAR_CATEGORY_SALES } from "../../GraphQL/Queries";
import { Card,CardBody,CardHeader} from '@paljs/ui/Card';
import Layout from 'Layouts'
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import withAuth from '../../components/authentication'
import { Table, Space,Button ,Modal,Form,Input,Upload} from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import {UPLOAD_FILE_CRUISE}  from '../../GraphQL/Mutations';

import 'antd/dist/antd.css';

function Category() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const normFile = (e) => {
    
    // // if (Array.isArray(e)) {
    // //   return "Uploaded";
    // // }
    // getFile(e)
    // console.log(e)
    // return e && e.fileList;
  };
  
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
    const category_sale = useQuery(CAR_CATEGORY_SALES);
    return [category_sale];
  }
  
  const [
      { loading: loading6, data: data6 },
  ] = queryMultiple()

  const [login,{ data}] = useMutation(UPLOAD_FILE_CRUISE,{
    onCompleted: (data) => {
     if(data){
     
     
     }
     else{
       console.log('wrong passwrod')
     }
    }
  });
  const getFile = (t) =>{
    let formData = new FormData();
    formData.append('abc',t)

    login({
      variables: {
       file:formData
      },
    }
   );

  }
  // const { error, loading, data } = useQuery(Load_Cars);
  
  
  
  const [category_sale, setCategory_sale] = useState([]);
 
  useEffect(() => {
    if(data6){
      setCategory_sale(data6.carCategories.length);
    }

  }, [data6]);
 
  return (
    <Layout>
           <Row>
               <Col breakPoint={{ xs: 12, lg: 12 }}>
               <Button 
               type="primary" 
               style={{float: "right", borderRadius: "5px",margin:5}}
               onClick={showModal}
               >Add new</Button>
              <Modal title="Add new category" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
              footer={null}
              >
       <Form>
      
        <Input placeholder="Title" name="Title" required={true}/>

        <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra=""
        style={{marginTop: 10}}
      >
        <Upload name="image" 
        beforeUpload={async file => {
          const reader = new FileReader();
  
          reader.onload =  e => {
              console.log(e.target.result);
          };
          const t = await reader.readAsArrayBuffer(file);
          console.log(t)
       
          getFile(t)
          // Prevent upload
          return false;
      }}
         maxCount={1}>
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>

        <Form.Item>
        <Button type="primary" htmlType="submit" style={{float: "right"}}>
          Submit
        </Button>
      </Form.Item>
       </Form>
      </Modal>
               <Table columns={columns} size="middle" dataSource={data6.carCategories} />
         
               </Col>
           </Row>
           
      {" "}
    </Layout>
  );
}

export default withAuth(Category);
