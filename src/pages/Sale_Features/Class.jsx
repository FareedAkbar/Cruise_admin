import React, { useEffect, useState } from "react";
import { useQuery, gql,useMutation } from "@apollo/client";
import { CAR_CLASS_SALES } from "../../GraphQL/saleFeatures";
import Layout from 'Layouts'
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import withAuth from '../../components/authentication'
import { Table, Space,Button,Modal,Form,Input,Image,Alert,Tag } from 'antd';
import 'antd/dist/antd.css';
import ImageUpload from '../../components/ImageUpload'
import {DeleteTwoTone} from '@ant-design/icons'
import {UPLOAD_CAR_CLASS_SALE}  from '../../GraphQL/saleMutations';
import {DELETE_CAR_CLASS_SALE}  from '../../GraphQL/DeleteSaleMutations';

function Class() {

  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [title, setTitle] = useState('')
  const [class_sale, setclass_sale] = useState([]);
  const [imageid, setImageId] = useState(null);
  
  const [sucess, setSucess] = useState(null);
  const queryMultiple = () => {
   
    const classsale = useQuery(CAR_CLASS_SALES);
    return [classsale];
  }
  
  const [
      { loading: loading5, data: data5 }
  ] = queryMultiple()

  useEffect(() => {
    
    if(data5){
      setclass_sale(data5.carClasses);
    }

  }, [data5]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const [createCarClass,{ data}] = useMutation(UPLOAD_CAR_CLASS_SALE,{
    onCompleted: (data) => {
     
      handleCancel()
     setSucess(true)
    
    }
  });
  const uploadClass = (title,imageid) =>{
   
    createCarClass({
      variables: {
        title: title,
        image: imageid
      },
    }
   );

  }

  const [deleteCarClass] = useMutation(DELETE_CAR_CLASS_SALE,{
    onCompleted: (data) => {
     setSucess(true)
     console.log(data)
    }
  });
  const deleteClass = (ID) =>{
   console.log(ID)
   deleteCarClass({
      variables: {
        Id: ID
      },
    }
   );
  }
  const onSubmit = e => {
    console.log(title)
    console.log(imageid)
    if(title && imageid){
      uploadClass(title,imageid)
    }
 
  };
  const onChange =(e)=>{
    
    setTitle(e.target.value)
  } 
    const columns = [
      {
        title: "Image",
        dataIndex: "image",  // this is the value that is parsed from the DB / server side
        render: image => {
          const name = "http://localhost:1337"+image.url
        return(
          <Image
      width={100}
      src={name}
    />
       
        )} 
  },
  {
    title: 'Title English',
    dataIndex: 'title_eng',
    key: 'title_eng',
    render: text => <Tag color="green">{text}</Tag>,
  },
  {
    title: 'Title Arabic',
    dataIndex: 'title_arabic',
    key: 'title_arabic',
    render: text => <Tag color="green">{text}</Tag>,
  },
        
        {
          title: 'Action',
          dataIndex: 'id',
          key: 'id',
          render: id => (
            <Space size="middle">
              <Button onClick={()=>deleteClass(id)}><DeleteTwoTone /></Button>
            </Space>
          ),
        },
      ];
      
     
      

  // const { error, loading, data } = useQuery(Load_Cars);
  
  
  
 
 
 
  return (
    <Layout>
       
       {sucess &&   <Alert
      message="Success"
      type="success"
      showIcon
      closable
    />}
    <Row>
    <Col breakPoint={{ xs: 6, lg: 6 }}>
    <h2>Sale Car Class</h2>
   
    </Col>
    <Col breakPoint={{ xs: 6, lg: 6 }}>
    <Button 
               type="primary" 
               style={{float: "right", borderRadius: "5px"}}
               onClick={showModal}
               >+ Add new</Button>
    </Col>
    </Row>
    
           <Row>
               <Col breakPoint={{ xs: 12, lg: 12 }}>
             
              <Modal title="Add new class" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
              footer={null}
              >
      
        <Input style={{marginBottom: 5}} value={title} onChange={onChange} placeholder="Title" name="Title" required={true}/>

  

  <div>
        <Button type="primary" onClick={onSubmit} style={{float: "right",borderRadius: 5,margin: 3}}>
          Submit
        </Button>
    </div>
       {imageid && <div>{imageid}</div>}
       <ImageUpload ImageID={setImageId}/>
     
  
      </Modal>
              
               <Table columns={columns} size="middle" dataSource={class_sale} />
         
               </Col>
           </Row>
           
      {" "}
    </Layout>
  );
}

export default withAuth(Class);
